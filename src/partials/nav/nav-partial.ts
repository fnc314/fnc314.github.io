import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
// Assuming you have types for MdTabs/MdPrimaryTab, otherwise use HTMLElement
import { typescaleStyles } from "@/styles";
import { MdPrimaryTab } from "@material/web/tabs/primary-tab.js";
import { MdTabs } from "@material/web/tabs/tabs.js";
import { hashToRoute, Route, Routes } from "./routes";

@customElement("nav-partial")
export class NavPartial extends LitElement {
  static override styles = [
    typescaleStyles,
    css`
      :host {
        --md-primary-tab-active-indicator-color: var(--md-sys-color-tertiary);
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
    `
  ];

  // Track the active index as state
  @state() activeTabIndex = 0;
  @state() activeRoute: Route = Routes.PROFILE;

  #tabsRef: Ref<MdTabs> = createRef();
  #tabRefMap: Record<Route, Ref<MdPrimaryTab>> = {
    work: createRef(),
    code: createRef(),
    profile: createRef()
  }

  #routes: Route[] = Object.values(Routes);

  constructor() {
    super();
  }

  override connectedCallback() {
    super.connectedCallback();
    // Listen for URL changes
    window.addEventListener("hashchange", this.#handleHashChange);
    // Handle the initial URL on load
    this.#handleHashChange();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("hashchange", this.#handleHashChange);
  }

  /**
   * Syncs internal state with the URL hash.
   */
  #handleHashChange() {
    const hash = window.location.hash.replace("#", "");
    const route: Route = hashToRoute(hash);
    const index = this.#routes.indexOf(route);

    // Default to 0 (profile) if hash is empty or invalid
    const targetIndex = index >= 0 ? index : 0;

    if (this.activeTabIndex !== targetIndex) {
      this.activeTabIndex = targetIndex;
      this.activeRoute = route;

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

    this.#updateCarousel(index);
  }

  #updateCarousel(index: number) {
    const panels: HTMLElement[] = [];
    for (const route of this.#routes) {
      const tabRef = this.#tabRefMap[route];
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

    const container = panels[0].parentElement;
    if (!container) return;

    container.style.transform = `translateX(-${index * 100}%)`;

    panels.forEach((panel, i) => {
      panel.setAttribute("aria-hidden", "false");
      panel.style.order = String(i);
    });
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

    this.activeTabIndex = index;
    this.activeRoute = route;
    this.#updateTabState(index);
  }

  protected override firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    // Apply initial state to DOM after first render
    this.#updateTabState(this.activeTabIndex);
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
          .activeTabIndex=${this.activeTabIndex}
        >
          <md-primary-tab
            ${ref(this.#tabRefMap.profile)}
            id="tab-profile"
            aria-controls="panel-profile"
            .hasIcon=${true}
            .active=${this.activeRoute === Routes.PROFILE}
            .inlineIcon=${this.activeRoute === Routes.PROFILE}
          >
            <md-icon slot="icon">person</md-icon>
            Profile
          </md-primary-tab>
          <md-primary-tab
            ${ref(this.#tabRefMap.work)}
            id="tab-work"
            aria-controls="panel-work"
            .hasIcon=${true}
            .active=${this.activeRoute === Routes.WORK}
            .inlineIcon=${this.activeRoute === Routes.WORK}
          >
            <md-icon slot="icon">engineering</md-icon>
            Work
          </md-primary-tab>
          <md-primary-tab
            ${ref(this.#tabRefMap.code)}
            id="tab-code"
            aria-controls="panel-code"
            .hasIcon=${true}
            .active=${this.activeRoute === Routes.CODE}
            .inlineIcon=${this.activeRoute === Routes.CODE}
          >
            <md-icon slot="icon">code</md-icon>
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