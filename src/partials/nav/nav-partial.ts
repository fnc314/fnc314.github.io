import { MdPrimaryTab } from "@material/web/tabs/primary-tab.js";
import { MdTabs } from "@material/web/tabs/tabs.js";
import { css, html, LitElement, PropertyValues } from "lit-element";
import { customElement } from "lit/decorators.js";

@customElement("nav-partial")
export class NavPartial extends LitElement {
  static override get styles() {
    return [
      css`
        :host {
          --md-primary-tab-active-indicator-color: var(--md-sys-color-tertiary);
          --md-primary-tab-active-indicator-height: 0.4rem;
          --md-primary-tab-active-indicator-shape: 1rem;
          /* --md-primary-tab-active-icon-color: var(--md-sys-color-tertiary);
          --md-primary-tab-active-label-text-color: var(--md-sys-color-tertiary); */
          --md-primary-tab-container-color: var(--md-sys-color-surface-container);
          --md-primary-tab-container-elevation: 1;
          --md-primary-tab-container-height: 5rem;
          --md-primary-tab-container-shape-start-start: 0.1rem;
          --md-primary-tab-container-shape-start-end: 0.1rem;
          --md-primary-tab-container-shape-end-start: 0.1rem;
          --md-primary-tab-container-shape-end-end: 0.1rem;
          --md-primary-tab-icon-color: var(--md-sys-color-primary);
          --md-primary-tab-label-font: monospace;
          --md-primary-tab-label-text-color: var(--md-sys-color-primary);
          --md-primary-tab-pressed-icon-color: var(--md-sys-color-tertiary);
          --md-primary-tab-with-icon-and-label-text-container-height: 5rem;
        }
      `
    ];
  }

  static override get properties() {
    return {};
  }

  /**
   * The current {@link MdPrimaryTab} which is actively being displayed
   */
  #activeTabPanel: LitElement | null = null;
  #activeTab: MdPrimaryTab | null = null;
  /**
   * {@typedef MdTabs}
   * {@type MdTabs}
   */
  #tabs: MdTabs | null = null;

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this.#tabs = this.renderRoot.querySelector("#nav-md-tabs") as MdTabs;
    this.#tabs?.addEventListener("change", (event: Event) => this.#handleChange(event));
  }

  #handleChange(event: Event) {
    const target = event.target as MdTabs;
    this.#activeTab = target.activeTab as MdPrimaryTab;

    this.#activeTabPanel =
      document.querySelector(
        `#${this.#activeTab.getAttribute("aria-controls")}[role="tabpanel"]`
      ) as LitElement;

    document
      .querySelectorAll("[role=\"tabpanel\"")
      .forEach((panelEl: Element) => {
        panelEl.toggleAttribute("hidden", true);
        panelEl.setAttribute("aria-hidden", "true");
      });

    if (this.#activeTabPanel !== null) {
      this.#activeTabPanel.toggleAttribute("hidden", false);
      this.#activeTabPanel.toggleAttribute("aria-hidden", false);
    }

    target.tabs.forEach((tab) => {
      tab.toggleAttribute("active", false);
      tab.toggleAttribute("inline-icon", false);
      tab.requestUpdate("active");
    });

    this.#activeTab.toggleAttribute("active", true);
    this.#activeTab.toggleAttribute("inline-icon", true);
  }

  override connectedCallback() {
    super.connectedCallback();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#tabs?.removeEventListener("change", this.#handleChange);
  }

  constructor() {
    super();
  }

  override render() {
    return html`
      <nav>
        <md-tabs
          id="nav-md-tabs"
          aria-label="Primary Nav Tabs"
          >
          <md-primary-tab
            id="tab-profile"
            aria-controls="panel-profile"
            .hasIcon=${true}
            >
            <md-icon slot="icon">person</md-icon>
            Profile
          </md-primary-tab>
          <md-primary-tab
            id="tab-work"
            aria-controls="panel-work"
            .hasIcon=${true}
            >
            <md-icon slot="icon">engineering</md-icon>
            Work
          </md-primary-tab>
          <md-primary-tab
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