import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { NavComponentConfig, ROUTES, type Route, hashToRoute } from "@/types/components/nav/routes";
import { MdPrimaryTab } from "@material/web/tabs/primary-tab.js";
import { MdTabs } from "@material/web/tabs/tabs.js";
import { LitElement, type PropertyValues, type TemplateResult, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { type Ref, createRef, ref } from "lit/directives/ref.js";

/**
 * A navigation component that renders primary tabs synchronized with the application's bento layout sections.
 * Uses an IntersectionObserver to perform scroll spy and highlight the active card.
 *
 * @element nav-component
 *
 * @cssprop [--nav-component-icon-animation=225ms] - The duration of the icon's fill and color transition.
 * @cssprop [--nav-component-icon-animation-reduced=1ms] - The duration of the icon's transition when motion is reduced.
 */
@customElement("nav-component")
export class NavComponent extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        --nav-component-icon-animation: 225ms;
        --nav-component-icon-animation-reduced: 1ms;

        /* Active state color overrides */
        --md-primary-tab-active-icon-color: var(--icon-fill-color);
        --md-primary-tab-active-focus-icon-color: var(--icon-fill-color);
        --md-primary-tab-active-hover-icon-color: var(--icon-fill-color);
        --md-primary-tab-active-pressed-icon-color: var(--icon-fill-color);

        /* PrimaryTab - Hover|Pressed, Active?, Label Text Color */
        --md-primary-tab-active-label-text-color: var(--icon-fill-color);
        --md-primary-tab-active-focus-label-text-color: var(--icon-fill-color);
        --md-primary-tab-active-hover-label-text-color: var(--icon-fill-color);
        --md-primary-tab-active-pressed-label-text-color: var(--icon-fill-color);

        /* PrimaryTab - Hover|Pressed, Active?, State Layer Color */
        --md-primary-tab-active-hover-state-layer-color: var(--md-sys-color-surface-container-high);
        --md-primary-tab-active-pressed-state-layer-color: var(--md-sys-color-surface-container-high);
        --md-primary-tab-hover-state-layer-color: var(--md-sys-color-primary-fixed);
        --md-primary-tab-pressed-state-layer-color: var(--md-sys-color-surface-container-high);

        /* PrimaryTab - Hover|Pressed, Active?, State Layer Opacity */
        --md-primary-tab-active-hover-state-layer-opacity: 0;
        --md-primary-tab-active-pressed-state-layer-opacity: 0;
        --md-primary-tab-hover-state-layer-opacity: 0.5;
        --md-primary-tab-pressed-state-layer-opacity: 0.5;

        /* Indicator overrides */
        --md-primary-tab-active-indicator-color: var(--icon-fill-color);
        --md-primary-tab-active-indicator-height: var(--spacing-padding-xs);
        --md-primary-tab-active-indicator-shape: var(--md-sys-shape-corner-medium);

        /* Container overrides */
        --md-primary-tab-container-color: var(--md-sys-color-surface-container-low);
        --md-primary-tab-container-elevation: var(--md-elevation-level);
        --md-primary-tab-container-height: 5rem;
        --md-primary-tab-container-shape: var(--md-sys-shape-corner-extra-small);

        /* PrimaryTab - Focus|Hover for icon|label-text */
        --md-primary-tab-focus-icon-color: var(--icon-fill-color);
        --md-primary-tab-hover-icon-color: var(--md-sys-color-on-primary-fixed);
        --md-primary-tab-focus-label-text-color: var(--icon-fill-color);
        --md-primary-tab-hover-label-text-color: var(--md-sys-color-on-primary-fixed);

        /* PrimaryTab - Inactive/Default state overrides */
        --md-primary-tab-icon-color: var(--md-sys-color-primary);
        --md-primary-tab-icon-size: 2rem;
        --md-primary-tab-label-font: var(--md-ref-typeface-brand);
        --md-primary-tab-label-text-color: var(--md-sys-color-primary);

        /* PrimaryTab - Pressed */
        --md-primary-tab-pressed-icon-color: var(--md-sys-color-tertiary);
        --md-primary-tab-pressed-label-text-color: var(--md-sys-color-tertiary);

        /* Separate container */
        --md-primary-tab-with-icon-and-label-text-container-height: 5rem;
      }

      nav {
        position: sticky;
        top: 0;
        z-index: 100;
        width: 100%;
      }

      md-icon {
        font-family: var(--md-icon-font);
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 200,
          "opsz" 48;
        transition:
          font-variation-settings var(--nav-component-icon-animation) cubic-bezier(0.3, 0, 0, 1),
          color var(--nav-component-icon-animation) cubic-bezier(0.3, 0, 0, 1);

        @media (prefers-reduced-motion: reduce) {
          transition:
            font-variation-settings var(--nav-component-icon-animation-reduced) cubic-bezier(0.3, 0, 0, 1),
            color var(--nav-component-icon-animation-reduced) cubic-bezier(0.3, 0, 0, 1);
        }
      }

      md-icon[filled="true"] {
        font-variation-settings:
          "FILL" 1,
          "wght" 400,
          "GRAD" 200,
          "opsz" 48;
        color: var(--icon-fill-color);
      }
    `,
  ];

  @state()
  private _activeTabIndex = 0;

  @state()
  private _activeRoute: Route = ROUTES.INFO;

  @state()
  private _exitingRoute: Route | null = null;

  private _inlineIconTimeout = 0;

  private _tabsRef: Ref<MdTabs> = createRef();

  @state()
  private _tabRefMap: Record<Route, Ref<MdPrimaryTab>> = {
    work: createRef(),
    code: createRef(),
    info: createRef(),
    blog: createRef(),
  };

  private _routes: Route[] = Object.values(ROUTES);

  private _boundListener = this._handleHashChange.bind(this);

  private _scrollSpyObserver?: IntersectionObserver;

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener("hashchange", this._boundListener);
    this._boundListener();

    // Setup scroll spy to detect section visibility
    this._setupScrollSpy();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("hashchange", this._boundListener);
    this._scrollSpyObserver?.disconnect();
  }

  private _setupScrollSpy() {
    this._scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        // Find visible section
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const id = visibleEntry.target.id;
          const route = this._routeFromElementId(id);
          if (route) {
            const index = this._routes.indexOf(route);
            if (index >= 0 && this._activeTabIndex !== index) {
              this._activeTabIndex = index;
              this._activeRoute = route;
              const tabs = this._tabsRef.value;
              if (tabs) {
                tabs.activeTabIndex = index;
              }
            }
          }
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px", // trigger when section occupies central viewport area
        threshold: 0.15,
      }
    );

    // Observe layout element targets after initial render delay
    setTimeout(() => {
      const targets = ["bio", "work", "code", "blog"];
      targets.forEach((id) => {
        const el = document.getElementById(id) || document.querySelector("bento-layout")?.shadowRoot?.getElementById(id);
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

  private _tabIndexAndRouteFromHash(): { index: number; route: Route } {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    const route = hashToRoute(hash);
    const index = this._routes.indexOf(route);
    return { index, route };
  }

  private _handleHashChange() {
    const { index, route }: { index: number; route: Route } = this._tabIndexAndRouteFromHash();
    const targetIndex = index >= 0 ? index : 0;

    if (this._activeTabIndex !== targetIndex) {
      const oldRoute = this._activeRoute;
      this._activeTabIndex = targetIndex;
      this._activeRoute = route;

      if (this.hasUpdated) {
        this._updateTabState(targetIndex);
        this._exitingRoute = oldRoute;

        window.clearTimeout(this._inlineIconTimeout);
        this._inlineIconTimeout = window.setTimeout(() => {
          this._exitingRoute = null;
        }, 250);
      } else {
        this._exitingRoute = null;
      }
    }
  }

  private _updateTabState(index: number) {
    const tabs = this._tabsRef.value;
    if (!tabs) return;
    tabs.activeTabIndex = index;
  }

  private _onTabChange(event: Event) {
    const tabs = event.target as MdTabs;
    const index = tabs.activeTabIndex;
    const oldRoute = this._activeRoute;
    const route = this._routes[index];

    if (route) {
      window.history.pushState({ oldRoute, route }, "", `#${route}`);
      this._activeTabIndex = index;
      this._activeRoute = route;
      this._updateTabState(index);

      // Scroll smoothly to target element
      const targetId = route === ROUTES.INFO ? "bio" : route;
      const el = document.getElementById(targetId) || document.querySelector("bento-layout")?.shadowRoot?.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      this._exitingRoute = oldRoute;
      window.clearTimeout(this._inlineIconTimeout);
      this._inlineIconTimeout = window.setTimeout(() => {
        this._exitingRoute = null;
      }, 250);
    }
  }

  protected override firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this._updateTabState(this._activeTabIndex);
  }

  private _renderTabs(): TemplateResult {
    const tabs: TemplateResult[] = this._routes.map(
      (route: Route) => html`
        <md-primary-tab
          ${ref(this._tabRefMap[route])}
          aria-controls=${`panel-${route}`}
          .id=${`tab-${route}`}
          .role=${"tab"}
          .hasIcon=${true}
        >
          <md-icon
            slot="icon"
            filled=${this._activeRoute === route || this._exitingRoute === route}
          >
            ${NavComponentConfig.tabs[route].mdIcon}
          </md-icon>
          ${NavComponentConfig.tabs[route].label}
        </md-primary-tab>
      `,
    );

    return html`
      <md-tabs
        ${ref(this._tabsRef)}
        id="nav-md-tabs"
        aria-label="Primary Nav Tabs"
        @change=${(event: Event) => this._onTabChange(event)}
        .activeTabIndex=${this._activeTabIndex}
        .autoActivate=${true}
        .role=${"tablist"}
      >
        ${tabs}
      </md-tabs>
    `;
  }

  override render() {
    return html`<nav>${this._renderTabs()}</nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nav-component": NavComponent;
  }
}
