import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
// Assuming you have types for MdTabs/MdPrimaryTab, otherwise use HTMLElement
import { MdPrimaryTab } from "@material/web/tabs/primary-tab.js";
import { MdTabs } from "@material/web/tabs/tabs.js";

@customElement("nav-partial")
export class NavPartial extends LitElement {
  static override styles = [
    css`
      /* ... keep your existing styles ... */
      :host {
        --md-primary-tab-active-indicator-color: var(--md-sys-color-tertiary);
        --md-primary-tab-active-indicator-height: 0.5rem;
        --md-primary-tab-active-indicator-shape: 1rem;
        --md-primary-tab-container-color: var(--md-sys-color-surface-container);
        --md-primary-tab-container-elevation: 1;
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

  #tabsRef: Ref<MdTabs> = createRef();
  #tabRefs: Ref<MdPrimaryTab>[] = [createRef(), createRef(), createRef()];

  // Define your routes mapping to tab indices: 0->profile, 1->work, 2->code
  #routes = ['profile', 'work', 'code'];

  constructor() {
    super();
  }

  override connectedCallback() {
    super.connectedCallback();
    // Listen for URL changes
    window.addEventListener('hashchange', this.#handleHashChange);
    // Handle the initial URL on load
    this.#handleHashChange();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('hashchange', this.#handleHashChange);
  }

  /**
   * Syncs internal state with the URL hash.
   */
  #handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    const index = this.#routes.indexOf(hash);

    // Default to 0 (profile) if hash is empty or invalid
    const targetIndex = index >= 0 ? index : 0;

    if (this.activeTabIndex !== targetIndex) {
      this.activeTabIndex = targetIndex;
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

    // Sync the visual state (active/inline-icon) and toggle panels
    this.#tabRefs.forEach((tabRef, i) => {
      const tab = tabRef.value;
      if (!tab) return;

      const isActive = i === index;
      tab.toggleAttribute("active", isActive);
      tab.toggleAttribute("inline-icon", isActive);

      // Toggle panel visibility in the main document
      const panelId = tab.getAttribute("aria-controls");
      if (panelId) {
        const panel = document.querySelector(`#${panelId}[role="tabpanel"]`);
        if (panel) {
          panel.toggleAttribute("hidden", !isActive);
          panel.setAttribute("aria-hidden", String(!isActive));
        }
      }
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
      window.history.pushState(null, '', `#${route}`);
    }

    this.activeTabIndex = index;
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
            ${ref(this.#tabRefs[0])}
            id="tab-profile"
            aria-controls="panel-profile"
            .hasIcon=${true}
          >
            <md-icon slot="icon">person</md-icon>
            Profile
          </md-primary-tab>
          <md-primary-tab
            ${ref(this.#tabRefs[1])}
            id="tab-work"
            aria-controls="panel-work"
            .hasIcon=${true}
          >
            <md-icon slot="icon">engineering</md-icon>
            Work
          </md-primary-tab>
          <md-primary-tab
            ${ref(this.#tabRefs[2])}
            id="tab-code"
            aria-controls="panel-code"
            .hasIcon=${true}
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