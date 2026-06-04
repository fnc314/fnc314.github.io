
import { configsService } from "@/services/configs/configs-service";
import { type RouterChange, type RouterReverse } from "@/services/router/router-service";
import { themeService } from "@/services/theme/theme-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { type AppConfigs, type AppConfigsChange } from "@/types/configs/app-configs";
import {
  CONFIG_COLOR_SCHEME_NAMES,
  type ColorSchemeConfigChange,
  colorSchemeConfigsToMaterialSchemeName,
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

  /** The current global application configuration state. */
  @state()
  private appConfigs: AppConfigs = configsService.loadConfigs();

  /** The icon associated with the current color scheme mode. */
  @state()
  private _uiModeIcon: "dark_mode" | "light_mode" | "routine" = this.uiModeIcon(this.appConfigs.colorScheme);

  @state()
  private _openDialogCount = 0;

  /**
   * Lifecycle method called after the first update.
   */
  protected override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
  }

  /**
   * Event handler for color scheme changes.
   * Updates the UI icon, Material theme variables, and meta theme color.
   * @param event - The color scheme configuration change event.
   */
  private onColorSchemeChange = (event: ColorSchemeConfigChange) => {
    this._uiModeIcon = this.uiModeIcon(event.detail);
    const themeConfig = themeService.currentThemeConfig();
    updateMaterialCSSStyleSheet(themeConfig.materialSchemes[colorSchemeConfigsToMaterialSchemeName(event.detail)]);
    document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
  };

  /**
   * Syncs the component state with the global application configuration.
   * @param event - AppConfigsChange event.
   */
  private onAppConfigsChange = (event: Event) => {
    this.appConfigs = (event as AppConfigsChange).detail.appConfigs;
  };

  override connectedCallback() {
    super.connectedCallback();
    configsService.addEventListener("app-configs.change", this.onAppConfigsChange);

    document.addEventListener("color_scheme.change", this.onColorSchemeChange);

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
  }

  /**
   * Maps a color scheme name to a Material icon name.
   * @param colorScheme - The current color scheme configuration.
   * @returns The string identifier for the MdIcon.
   */
  private uiModeIcon(colorScheme: AppConfigs["colorScheme"]): "dark_mode" | "light_mode" | "routine" {
    switch (colorScheme.name) {
      case CONFIG_COLOR_SCHEME_NAMES.DARK:
        return "dark_mode";
      case CONFIG_COLOR_SCHEME_NAMES.LIGHT:
        return "light_mode";
      case CONFIG_COLOR_SCHEME_NAMES.SYSTEM:
        return "routine";
    }
  }

  /** Tracks open dialogs to manage body scroll locking. */
  private _handleDialogOpened() {
    this._openDialogCount++;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  /** Tracks closed dialogs to manage body scroll restoration. */
  private _handleDialogClosed() {
    this._openDialogCount--;
    if (this._openDialogCount === 0) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }

  /**
   * Renders the application shell.
   * Includes navigation and content slots.
   */
  override render() {
    return html`
      <slot name="app-nav"></slot>
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
