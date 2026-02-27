var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit-element";
import { customElement } from "lit/decorators.js";
let NavPartial = class NavPartial extends LitElement {
    static get styles() {
        return [
            css `
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
    static get properties() {
        return {};
    }
    /**
     * The current {@link MdPrimaryTab} which is actively being displayed
     */
    #activeTabPanel = null;
    #activeTab = null;
    /**
     * {@typedef MdTabs}
     * {@type MdTabs}
     */
    #tabs = null;
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.#tabs = this.renderRoot.querySelector("#nav-md-tabs");
        this.#tabs?.addEventListener("change", (event) => this.#handleChange(event));
    }
    #handleChange(event) {
        const target = event.target;
        this.#activeTab = target.activeTab;
        this.#activeTabPanel =
            document.querySelector(`#${this.#activeTab.getAttribute("aria-controls")}[role="tabpanel"]`);
        document
            .querySelectorAll("[role=\"tabpanel\"")
            .forEach((panelEl) => {
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
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.#tabs?.removeEventListener("change", this.#handleChange);
    }
    constructor() {
        super();
    }
    render() {
        return html `
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
};
NavPartial = __decorate([
    customElement("nav-partial")
], NavPartial);
export { NavPartial };
;
