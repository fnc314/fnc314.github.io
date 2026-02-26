import { LitElement, css, html } from "lit-element";
import { ThemeColors } from "./../../styles/partial-styles.js";

export class NavPartial extends LitElement {
  static get styles() {
    return [
      ThemeColors,
      css`
        :root {
          background-color: var(--md-sys-color-surface);
        }

        nav {
          position: relative;
          --md-elevation-level: 1;
        }
      `
    ];
    return ;
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
            href="#profile"
            id="tab-profile"
            aria-controls="panel-profile"
            >
            <md-icon slot="icon">person</md-icon>
            Profile
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
        </md-tabs>
      </nav>
    `;
  }
}

window.customElements.define("nav-partial", NavPartial);