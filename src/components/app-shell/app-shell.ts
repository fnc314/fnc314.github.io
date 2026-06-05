
import { configsService } from "@/services/configs/configs-service";
import { type RouterChange, type RouterReverse } from "@/services/router/router-service";
import { themeService } from "@/services/theme/theme-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { ROUTES, type Route, hashToRoute } from "@/types/components/nav/routes";
import {
  type ColorSchemeConfigChange,
  colorSchemeConfigsToMaterialSchemeName
} from "@/types/theme/color-scheme-configs";
import { LitElement, type PropertyValues, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

/**
 * @summary The core layout component for the application.
 *   Handles theme switching and navigation slotting.
 *   Uses Material Design 3 tokens and components.
 *
 * @slot [app-nav] - Where the {@link @fnc314/com.fnc314.website!NavComponent} is placed
 * @slot [app-content] - The place for the dynamic application content
 */
@customElement("app-shell")
export class AppShell extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        /* This allows the body's grid layout to apply to our slotted children */
        display: contents;
      }
    `,
  ];

  @state()
  private _activeRoute: Route = ROUTES.INFO;

  private _inlineIconTimeout = 0;
  private _boundListener = this._handleHashChange.bind(this);
  private _scrollSpyObserver?: IntersectionObserver;

  /**
   * Lifecycle method called after the first update.
   */
  protected override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this._setupScrollSpy();
  }

  private _setupScrollSpy() {
    this._scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const id = visibleEntry.target.id;
          const route = this._routeFromElementId(id);
          if (route && this._activeRoute !== route) {
            this._activeRoute = route;
          }
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0.15,
      }
    );

    setTimeout(() => {
      const targets = ["bio", "work", "code", "blog"];
      targets.forEach((id) => {
        const el = document.getElementById(id) ?? document.querySelector("bento-layout")?.shadowRoot?.getElementById(id);
        if (el) {
          this._scrollSpyObserver?.observe(el);
        }
      });
    }, 500);
  }

  private _routeFromElementId(id: string): Route | null {
    if (id === "bio") return ROUTES.INFO;
    if (id === "work") return ROUTES.WORK;
    if (id === "code") return ROUTES.CODE;
    if (id === "blog") return ROUTES.BLOG;
    return null;
  }

  private _handleHashChange() {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    const route = hashToRoute(hash);
    if (route && this._activeRoute !== route) {
        this._activeRoute = route;
        if (this.hasUpdated) {
          window.clearTimeout(this._inlineIconTimeout);
          this._inlineIconTimeout = window.setTimeout(() => {}, 250);
        }
    }
  }

  /**
   * Event handler for color scheme changes.
   * Updates the UI icon, Material theme variables, and meta theme color.
   * @param event - The color scheme configuration change event.
   */
  private onColorSchemeChange = (event: Event) => {
    const customEvent = event as ColorSchemeConfigChange;
    const themeConfig = themeService.currentThemeConfig();
    updateMaterialCSSStyleSheet(themeConfig.materialSchemes[colorSchemeConfigsToMaterialSchemeName(customEvent.detail)]);
    document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
  };

  /**
   * Syncs the component state with the global application configuration.
   * @param _event - AppConfigsChange event.
   */
  private onAppConfigsChange = (_event: Event) => {};

  override connectedCallback() {
    super.connectedCallback();
    configsService.addEventListener("app-configs.change", this.onAppConfigsChange);
    document.addEventListener("color_scheme.change", this.onColorSchemeChange);
    window.addEventListener("hashchange", this._boundListener);
    this._boundListener();

    window.addEventListener("router.change", (ev: Event) => {
      const routerChange = ev as RouterChange;
      console.info(JSON.stringify({ event: "router.change", change: routerChange.detail }, null, 2));
    });
    window.addEventListener("router.back", (ev: Event) => {
      const routerReverse = ev as RouterReverse;
      console.info(JSON.stringify({ event: "router.back", back: routerReverse.detail }, null, 2));
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("color_scheme.change", this.onColorSchemeChange);
    window.removeEventListener("hashchange", this._boundListener);
    this._scrollSpyObserver?.disconnect();
  }

  /**
   * Renders the application shell.
   * Includes navigation and content slots.
   */
  override render() {
    return html`
      <slot name="app-content"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-shell": AppShell;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-shell": AppShell;
  }
}
