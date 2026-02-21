import { LitElement, html, css } from "lit-element";

export class NavPartial extends LitElement {
  static get styles() {
    return css`
      :root {
        --md-sys-color-primary: #cc3333;
        --md-sys-color-secondary: #239c41;
        --md-sys-color-tertiary: #16239b;
        --md-sys-color-surface: #ffffff;
        --md-sys-color-background: #117221;
        --md-sys-color-outline: #000000;
        --md-sys-color-outline-variant: #2742c7;
        --md-sys-color-on-surface-variant: #2742c7;
        --md-sys-color-shadow: #000000;
      }

      nav {
        position: relative;
        --md-elevation-level: 4;
      }
    `;
  }

  static get properties() {
    return {};
  }

  /**
   * The current {@link MdPrimaryTab} which is actively being displayed
   */
  #activeTab = null;

  /**
   * Determines which {@link MdTabs} is selected
   * @param tabs The {@link MdTabs} from {@link document.getElementById}
   * @return The {@link MdTab} selected *or* {@link null}
   */
  #getVisibleTab(tabs) {
    const activeTabControl = tabs.children.item(tabs.activeTabIndex).getAttribute("aria-controls");
    return document.querySelector(`#${activeTabControl}`);
  }

  /**
   * Queries {@link this.shadowRoot} for {@link #nav-md-tabs} returning the {@link NodeCollection}
   *   or {@link null}
   * @return A {@link NodeCollection} or {@link null}
   */
  #getTabs() {
    return this.shadowRoot.querySelector("#nav-md-tabs") ?? null;
  }

  /**
   * A lifecycle-esque callback offered by {@link LitElement} implementations allowing a post-render
   *   hook during which event listeners can be wired appropriately
   * @param {*} _changedProperties A framework-provided {@link Object} with meta-data relevant to the
   *   ongoing render cycle.  Currently unused
   */
  async firstUpdated(_changedProperties) {
    await new Promise((r) => setTimeout(r, 0));
    const tabs = this.#getTabs();
    if (tabs == null) {
      return;
    }
    this.#activeTab = this.#getVisibleTab(tabs);
    tabs.addEventListener("change", e => {
      if (this.#activeTab) {
        this.#activeTab.hidden = true;
      }
      this.#activeTab = this.#getVisibleTab(tabs);
      if (this.#activeTab) {
        this.#activeTab.hidden = false
      }
    });
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <nav>
        <md-elevation></md-elevation>
        <md-tabs
          id="nav-md-tabs"
          aria-label="Primary Nav Tabs"
          auto-activate="true"
          active-tab-index="0"
          >
          <md-primary-tab
            href="#info"
            id="tab-info"
            aria-controls="panel-info"
            >
            <md-icon slot="icon">person</md-icon>
            Info
          </md-primary-tab>
          <md-primary-tab
            href="#work"
            id="tab-work"
            aria-controls="panel-work"
            >
            <md-icon slot="icon">engineering</md-icon>
            Work
          </md-primary-tab>
          <md-primary-tab
            href="#code"
            id="tab-code"
            aria-controls="panel-code"
            >
            <md-icon slot="icon">code</md-icon>
            Code
          </md-primary-tab>
          <md-primary-tab
            href="#contact"
            id="tab-contact"
            aria-controls="panel-contact"
            >
            <md-icon slot="icon">contact_page</md-icon>
            Contact
          </md-primary-tab>
        </md-tabs>
      </nav>
    `;
  }
}

window.customElements.define("nav-partial", NavPartial);