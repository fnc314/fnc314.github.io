import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { hashToRoute, type Route, Routes } from "@/types/components/nav/routes";
import { MdPrimaryTab } from "@material/web/tabs/primary-tab.js";
import { MdTabs } from "@material/web/tabs/tabs.js";
import { css, html, LitElement, PropertyValues, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";

type IndexRoute = { route: Route, index: number };

/**
 * A navigation component that renders primary tabs synchronized with the application's URL hash routes.
 *
 * @element nav-component
 *
 * @cssprop [--nav-component-icon-animation=225ms] - The duration of the icon's fill and color transition.
 * @cssprop [--nav-component-icon-animation-reduced=1ms] - The duration of the icon's transition when motion is reduced.
 */
@customElement("nav-component")
export class NavComponent extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        --nav-component-icon-animation: 225ms;
        --nav-component-icon-animation-reduced: 1ms;

        --md-elevation-level: 4;

        /* Active state color overrides */
        --md-primary-tab-active-icon-color: var(--icon-fill-color);
        --md-primary-tab-active-focus-icon-color: var(--icon-fill-color);
        --md-primary-tab-active-hover-icon-color: var(--icon-fill-color);
        --md-primary-tab-active-pressed-icon-color: var(--icon-fill-color);

        --md-primary-tab-active-label-text-color: var(--icon-fill-color);
        --md-primary-tab-active-focus-label-text-color: var(
          --icon-fill-color
        );
        --md-primary-tab-active-hover-label-text-color: var(
          --icon-fill-color
        );
        --md-primary-tab-active-pressed-label-text-color: var(
          --icon-fill-color
        );

        /* Indicator overrides */
        --md-primary-tab-active-indicator-color: var(--icon-fill-color);
        --md-primary-tab-active-indicator-height: 0.5rem;
        --md-primary-tab-active-indicator-shape: var(
          --md-sys-shape-corner-medium
        );

        /* Container overrides */
        --md-primary-tab-container-color: var(
          --md-sys-color-surface-container-high
        );
        --md-primary-tab-container-elevation: var(--md-elevation-level);
        --md-primary-tab-container-height: 5rem;
        --md-primary-tab-container-shape-start-start: var(
          --md-sys-shape-corner-extra-small
        );
        --md-primary-tab-container-shape-start-end: var(
          --md-sys-shape-corner-extra-small
        );
        --md-primary-tab-container-shape-end-start: var(
          --md-sys-shape-corner-extra-small
        );
        --md-primary-tab-container-shape-end-end: var(
          --md-sys-shape-corner-extra-small
        );

        /* Inactive/Default state overrides */
        --md-primary-tab-icon-color: var(--md-sys-color-primary);
        --md-primary-tab-icon-size: 2rem;
        --md-primary-tab-label-font: var(--md-ref-typeface-brand);
        --md-primary-tab-label-text-color: var(--md-sys-color-primary);

        --md-primary-tab-pressed-icon-color: var(--md-sys-color-tertiary);

        --md-primary-tab-with-icon-and-label-text-container-height: 5rem;
      }

      md-icon {
        /*
         * We must set the start value for the font variation to ensure that the
         * transition is interpolated correctly by the browser engine.
         */
        font-variation-settings: "FILL" 0;
        /*
         * The transition duration and easing curve are synced with the
         * sliding indicator of the <md-tabs> component.
         */
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
        font-variation-settings: "FILL" 1;
        color: var(--icon-fill-color);
      }
    `,
  ];

  // Track the active index as state
  @state({
    hasChanged: (newValue: number, oldValue: number) => newValue !== oldValue,
  })
  private _activeTabIndex = 0;

  @state({
    hasChanged: (newValue: Route, oldValue: Route) => newValue !== oldValue,
  })
  private _activeRoute: Route = Routes.PROFILE;

  @state()
  private _inlineIconRoute: Route | null = Routes.PROFILE;

  @state()
  private _exitingRoute: Route | null = null;

  #inlineIconTimeout = 0;

  #tabsRef: Ref<MdTabs> = createRef();

  @state()
  private _tabRefMap: Record<Route, Ref<MdPrimaryTab>> = {
    work: createRef(),
    code: createRef(),
    profile: createRef(),
  };

  #routes: Route[] = Object.values(Routes);

  #boundListener = this.#handleHashChange.bind(this);

  constructor() {
    super();
  }

  override connectedCallback() {
    super.connectedCallback();
    // Listen for URL changes
    window.addEventListener("hashchange", this.#boundListener);
    // Handle the initial URL on load
    this.#boundListener();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("hashchange", this.#boundListener);
  }

  /**
   * Reads {@link window.location.hash} and returns an object containing the {@link Route} and indexing {@link number}
   * @returns IndexRoute
   */
  #tabIndexAndRouteFromHash(): IndexRoute {
    const route = hashToRoute(window.location.hash.replace("#", ""));
    const index = this.#routes.indexOf(route);
    return { index, route };
  }

  /**
   * Syncs internal state with the URL hash.
   */
  #handleHashChange() {
    const { index, route } = this.#tabIndexAndRouteFromHash();

    // Default to 0 (profile) if hash is empty or invalid
    const targetIndex = index >= 0 ? index : 0;

    if (this._activeTabIndex !== targetIndex) {
      const oldRoute = this._activeRoute;
      this._activeTabIndex = targetIndex;
      this._activeRoute = route;

      // If the component is already rendered, update the UI immediately
      if (this.hasUpdated) {
        this.#updateTabState(targetIndex);

        this._exitingRoute = oldRoute;
        this._inlineIconRoute = null;

        window.clearTimeout(this.#inlineIconTimeout);
        this.#inlineIconTimeout = window.setTimeout(() => {
          this._inlineIconRoute = route;
          this._exitingRoute = null;
        }, 250);
      } else {
        this._inlineIconRoute = route;
        this._exitingRoute = null;
      }
    }
  }

  /**
   * Updates the visual state of tabs and panels based on the index.
   */
  #updateTabState(index: number) {
    const tabs = this.#tabsRef.value;
    if (!tabs) return;

    // Sync the md-tabs component
    tabs.activeTabIndex = index;

    this.#updateCarousel(index);
  }

  #updateCarousel(index: number) {
    const panels: HTMLElement[] = [];
    for (const route of this.#routes) {
      const tabRef = this._tabRefMap[route];
      const tab = tabRef.value;
      if (tab) {
        const panelId = tab.getAttribute("aria-controls");
        if (panelId) {
          const panel = document.querySelector(
            `#${panelId}[aria-role="tabpanel"]`,
          ) as HTMLElement;
          if (panel) {
            panels.push(panel);
            panel.toggleAttribute("inert", true);
          }
        }
      }
    }

    if (panels.length === 0) return;
    panels[index].toggleAttribute("inert", false);

    const container = document.getElementById("tabs-container");
    if (!container) return;

    container.style.transform = `translateX(-${index * 100}%)`;
  }

  /**
   * Handles user clicks on tabs. Updates URL and UI.
   */
  #onTabChange(event: Event) {
    const tabs = event.target as MdTabs;
    const index = tabs.activeTabIndex;

    // Update URL hash to match the selected tab
    const route = this.#routes[index];
    if (route) {
      // pushState updates the URL without reloading the page
      window.history.pushState(null, "", `#${route}`);
    }

    const oldRoute = this._activeRoute;
    this._activeTabIndex = index;
    this._activeRoute = route;
    this.#updateTabState(index);

    this._exitingRoute = oldRoute;
    this._inlineIconRoute = null;

    window.clearTimeout(this.#inlineIconTimeout);
    this.#inlineIconTimeout = window.setTimeout(() => {
      this._inlineIconRoute = route;
      this._exitingRoute = null;
    }, 250);
  }

  protected override firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    // Apply initial state to DOM after first render
    this._activeRoute = this.#routes[this._activeTabIndex];
    this._inlineIconRoute = this.#routes[this._activeTabIndex];
    this.#updateTabState(this._activeTabIndex);
  }

  /**
   * Creates a {@link TemplateResult[]} consisting of {@link MdPrimaryTabs} and their child {@link MdIcon}s
   */
  #renderTabs(): TemplateResult {
    const mdIconRouteMap: Record<Route, TemplateResult> = {
      profile: html`
        <md-icon
          slot="icon"
          filled=${this._activeRoute === Routes.PROFILE || this._exitingRoute === Routes.PROFILE}
          >person</md-icon
        >
        Profile
      `,
      work: html`
        <md-icon
          slot="icon"
          filled=${this._activeRoute === Routes.WORK || this._exitingRoute === Routes.WORK}
          >engineering</md-icon
        >
        Work
      `,
      code: html`
        <md-icon
          slot="icon"
          filled=${this._activeRoute === Routes.CODE || this._exitingRoute === Routes.CODE}
          >code_blocks</md-icon
        >
        Code
      `,
    };

    const tabs: TemplateResult[] = this.#routes.map(
      (route: Route) => html`
        <md-primary-tab
          ${ref(this._tabRefMap[route])}
          id="tab-${route}"
          aria-controls="panel-${route}"
          .role=${"tab"}
          .hasIcon=${true}
          .inlineIcon=${this._inlineIconRoute === route}
        >
          ${mdIconRouteMap[route]}
        </md-primary-tab>
      `,
    );

    return html`
      <md-tabs
        ${ref(this.#tabsRef)}
        id="nav-md-tabs"
        aria-label="Primary Nav Tabs"
        @change=${this.#onTabChange}
        .activeTabIndex=${this._activeTabIndex}
        .autoActivate=${true}
        .role=${"tablist"}
      >
        ${tabs}
      </md-tabs>
    `;
  }

  override render() {
    return html` <nav>${this.#renderTabs()}</nav> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nav-component": NavComponent;
  }
}
