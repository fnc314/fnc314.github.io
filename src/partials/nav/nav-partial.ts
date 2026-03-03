import { MdPrimaryTab } from "@material/web/tabs/primary-tab.js";
import { MdTabs } from "@material/web/tabs/tabs.js";
import { css, html, LitElement, PropertyValues } from "lit-element";
import { createRef, Ref, ref } from "lit-html/directives/ref.js";
import { customElement } from "lit/decorators.js";

@customElement("nav-partial")
export class NavPartial extends LitElement {
  static override get styles() {
    return [
      css`
        :host {
          --md-primary-tab-active-indicator-color: var(--md-sys-color-tertiary);
          --md-primary-tab-active-indicator-height: 0.5rem;
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
  }

  static override get properties() {
    return {};
  }

  /**
   * The current {@link MdPrimaryTab} which is actively being displayed
   */
  #activeTab: MdPrimaryTab | null = null;


  /**
   * The current {@link LitElement} which is actively being displayed
   */
  #activeTabPanel: LitElement | null = null;

  /**
   * {@typedef MdTabs}
   * {@type MdTabs}
   */
  #tabsRef: Ref<MdTabs> = createRef();

  #tabRefs: [ Ref<MdPrimaryTab>, Ref<MdPrimaryTab>, Ref<MdPrimaryTab> ] = [ createRef(), createRef(), createRef() ];

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    if (this.#tabsRef.value) {
      console.info("TABS");
      const activeTab = this.#tabRefs[0].value;
      if (activeTab) {
        activeTab.toggleAttribute("active", true);
        activeTab.toggleAttribute("inline-icon", true);
        this.#activeTab = activeTab;
      }
    }
  }

  #handleChange(event: Event) {
    const target = event.target as MdTabs;
    this.#activeTab = target.activeTab as MdPrimaryTab;

    target.tabs.forEach((tab) => {
      tab.toggleAttribute("active", false);
      tab.toggleAttribute("inline-icon", false);
      tab.requestUpdate();
    });

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

    this.#activeTab.toggleAttribute("active", true);
    this.#activeTab.toggleAttribute("inline-icon", true);
  }

  constructor() {
    super();
  }

  override render() {
    return html`
      <nav>
        <md-elevation></md-elevation>
        <md-tabs
          ${ref(this.#tabsRef)}
          id="nav-md-tabs"
          aria-label="Primary Nav Tabs"
          @change=${this.#handleChange}
          .activeTabIndex=${0}
          >
          <md-primary-tab
            ${ref(this.#tabRefs[0])}
            id="tab-profile"
            aria-controls="panel-profile"
            .hasIcon=${true}
            .active=${true}
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