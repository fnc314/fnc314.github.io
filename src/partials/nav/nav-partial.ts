import { typescaleStyles } from "@/styles";
import { MdPrimaryTab } from "@material/web/tabs/primary-tab.js";
import { MdTabs } from "@material/web/tabs/tabs.js";
import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { hashToRoute, Route, Routes } from "./routes";

type IndexRoute = { route: Route, index: number };

@customElement("nav-partial")
export class NavPartial extends LitElement {
  static override styles = [
    typescaleStyles,
    css`
      :host {
        --md-primary-tab-active-icon-color: var(--md-sys-color-error);
        --md-primary-tab-active-focus-icon-color: var(--md-sys-color-error);
        --md-primary-tab-active-hover-icon-color: var(--md-sys-color-error);
        --md-primary-tab-active-pressed-icon-color: var(--md-sys-color-error);

        --md-primary-tab-active-label-text-color: var(--md-sys-color-error);
        --md-primary-tab-active-focus-label-text-color: var(--md-sys-color-error);
        --md-primary-tab-active-hover-label-text-color: var(--md-sys-color-error);
        --md-primary-tab-active-pressed-label-text-color: var(--md-sys-color-error);

        --md-primary-tab-active-indicator-color: var(--md-sys-color-error);
        --md-primary-tab-active-indicator-height: 0.5rem;
        --md-primary-tab-active-indicator-shape: 1rem;
        --md-primary-tab-container-color: var(--md-sys-color-surface-container-high);
        --md-primary-tab-container-elevation: 4;
        --md-primary-tab-container-height: 5rem;
        --md-primary-tab-container-shape-start-start: 0.1rem;
        --md-primary-tab-container-shape-start-end: 0.1rem;
        --md-primary-tab-container-shape-end-start: 0.1rem;
        --md-primary-tab-container-shape-end-end: 0.1rem;
        --md-primary-tab-icon-color: var(--md-sys-color-primary);
        --md-primary-tab-label-font: var(--md-ref-typeface-brand);
        --md-primary-tab-label-text-color: var(--md-sys-color-primary);
        --md-primary-tab-pressed-icon-color: var(--md-sys-color-tertiary);
        --md-primary-tab-with-icon-and-label-text-container-height: 5rem;
      }

      nav {
        position: relative;
        --md-elevation-level: 4;
      }

      md-icon[filled="true"] {
        font-variation-settings: 'FILL' 1;
        color: var(--md-sys-color-error);
      }
    `
  ];

  // Track the active index as state
  @state({
    hasChanged: (newValue: number, oldValue: number) => newValue !== oldValue
  }) _activeTabIndex = 0;

  @state({
    hasChanged: (newValue: Route, oldValue: Route) => newValue !== oldValue
  }) _activeRoute: Route = Routes.PROFILE;

  #tabsRef: Ref<MdTabs> = createRef();

  @state()
  _tabRefMap: Record<Route, Ref<MdPrimaryTab>> = {
    work: createRef(),
    code: createRef(),
    profile: createRef()
  }

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
      this._activeTabIndex = targetIndex;
      this._activeRoute = route;
      this._tabRefMap[route].value?.setAttribute("active", "true");

      // If the component is already rendered, update the UI immediately
      if (this.hasUpdated) {
        this.#updateTabState(targetIndex);
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

    tabs.dispatchEvent(new Event("change"));

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
          const panel = document.querySelector(`#${panelId}[aria-role="tabpanel"]`) as HTMLElement;
          if (panel) {
            panels.push(panel);
          }
        }
      }
    }

    if (panels.length === 0) return;

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

    this._activeTabIndex = index;
    this._activeRoute = route;
    this.#updateTabState(index);
  }

  protected override firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    // Apply initial state to DOM after first render
    this.#updateTabState(this._activeTabIndex);
  }

  override render() {
    return html`
      <nav>
        <md-elevation></md-elevation>
        <md-tabs
          ${ref(this.#tabsRef)}
          id="nav-md-tabs"
          aria-label="Primary Nav Tabs"
          @change=${this.#onTabChange}
          .activeTabIndex=${this._activeTabIndex}
          .autoActivate=${true}
        >
          <md-primary-tab
            ${ref(this._tabRefMap.profile)}
            id="tab-profile"
            aria-controls="panel-profile"
            .hasIcon=${true}
            .active=${this._tabRefMap.profile.value?.active ?? false}
            .inlineIcon=${this._tabRefMap.profile.value?.active ?? false}
          >
            <md-icon slot="icon" filled=${this._tabRefMap.profile.value?.active ?? false}>person</md-icon>
            Profile
          </md-primary-tab>
          <md-primary-tab
            ${ref(this._tabRefMap.work)}
            id="tab-work"
            aria-controls="panel-work"
            .hasIcon=${true}
            .active=${this._tabRefMap.work.value?.active ?? false}
            .inlineIcon=${this._tabRefMap.work.value?.active ?? false}
          >
            <md-icon slot="icon" filled=${this._tabRefMap.work.value?.active ?? false}>engineering</md-icon>
            Work
          </md-primary-tab>
          <md-primary-tab
            ${ref(this._tabRefMap.code)}
            id="tab-code"
            aria-controls="panel-code"
            .hasIcon=${true}
            .active=${this._tabRefMap.code.value?.active ?? false}
            .inlineIcon=${this._tabRefMap.code.value?.active ?? false}
          >
            <md-icon slot="icon" filled=${this._tabRefMap.code.value?.active ?? false}>code</md-icon>
            Code
          </md-primary-tab>
        </md-tabs>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nav-partial": NavPartial;
  }
};