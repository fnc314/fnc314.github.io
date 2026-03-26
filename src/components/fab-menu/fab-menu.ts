import "@/components/fab-menu/fab-menu-item";
import { FabMenuItem } from "@/components/fab-menu/fab-menu-item";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { PropertyValues } from "@lit/reactive-element";
import { MdFab } from "@material/web/fab/fab";
import { MdIcon } from "@material/web/icon/icon";
import { css, html, LitElement, nothing } from "lit";
import { styleMap } from "lit-html/directives/style-map.js";
import { when } from "lit-html/directives/when.js";
import { customElement, property, query, queryAssignedElements } from "lit/decorators.js";
import { MaterialSymbol } from "material-symbols";

/**
 * A floating action button that toggles a menu of actions.
 *
 * @element fab-menu
 * @slot menu-items - The content of the menu, typically `fab-menu-item` elements.
 *
 * @cssprop [--fab-menu-transition-duration=200ms] - The duration of the menu's opening and closing animations.
 */
@customElement("fab-menu")
export class FabMenu extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: inline-flex;
        flex-direction: column-reverse;
        align-items: flex-end; /* Align to right side */
        position: relative;
        z-index: 10;

        /* Initial menu direction. Override with fab-menu[direction="start"] */
        --menu-direction: end;

        --fab-menu-transition-duration: 200ms;
      }

      :host([direction="start"]) {
        align-items: flex-start; /* Align to left side */
        --fab-menu-item-direction: row-reverse;
        --fab-menu-item-padding-end: 0;
        --fab-menu-item-padding-start: 0;
        --fab-menu-item-justify: flex-start;
      }

      .focus-trap-start, .focus-trap-end {
        position: absolute;
      }

      ul.menu-items {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        gap: 1rem;
        margin-bottom: 0;
        padding: 0;
        list-style: none;
        height: 0;
        margin-inline-end: var(--md-fab-margin, 0);

        transition:
          opacity var(--fab-menu-transition-duration) cubic-bezier(0.4, 0, 0.2, 1),
          transform var(--fab-menu-transition-duration) cubic-bezier(0.4, 0, 0.2, 1),
          visibility var(--fab-menu-transition-duration) linear;

        opacity: 0;
        visibility: hidden;
        transform: scale(0.8) translateY(20px);
        transform-origin: bottom center;
        pointer-events: none;
      }

      :host([open]) ul.menu-items {
        opacity: 1;
        visibility: visible;
        transform: scale(1) translateY(0);
        pointer-events: auto;
        height: auto;
        margin-bottom: 1rem;
      }

      .fab-container {
        position: relative;
        display: grid;
        place-items: center;
      }

      md-fab {
        transition:
          transform calc(100ms + var(--fab-menu-transition-duration)) cubic-bezier(0.4, 0, 0.2, 1),
          background-color var(--fab-menu-transition-duration) linear,
          color var(--fab-menu-transition-duration) linear;

        --md-fab-container-elevation: 4;
        /* z-index: 2; */

        /* Reset default margin */
        margin-inline-start: unset;
        margin-inline-end: unset;

        /* Reset display for wrapper concerns */
        display: grid;
        place-items: center;
      }

      .icon-wrapper {
        display: grid;
        place-items: center;
        width: var(--md-icon-size);
        height: var(--md-icon-size);
        margin-inline: unset;
      }

      .icon-wrapper md-icon {
        grid-area: 1 / 1;
        transition:
          transform calc(100ms + var(--fab-menu-transition-duration)) cubic-bezier(0.4, 0, 0.2, 1),
          opacity 0.2s linear;
      }

      :host([direction="start"]) ul.menu-items {
        align-items: flex-start;
        margin-inline-end: unset;
        margin-inline-start: var(--md-fab-margin, 0);
      }

      .scrim {
        background: var(--md-sys-color-scrim);
        inset: 0;
        opacity: 50%;
        pointer-events: none;
        position: fixed;
        z-index: 0;
        transition:
          opacity var(--fab-menu-transition-duration) cubic-bezier(0.4, 0, 0.2, 1);
      }
    `,
  ];

  @query("#fab-menu-fab")
  private _fab!: MdFab;

  @queryAssignedElements({ slot: "menu-items", flatten: true })
  private readonly _items!: FabMenuItem[];

  /**
   * Whether the menu is currently open.
   * @attr open
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  /**
   * The icon to display when the menu is closed.
   * Defaults to 'add'.  An empty {@link string}
   *   suppresses the icon
   */
  /** @attr icon */
  @property({ type: String })
  icon: MaterialSymbol | "" = "add";

  /**
   * The icon to display when the menu is open.
   * Defaults to 'close'.
   * @attr opened-icon
   */
  @property({ type: String, attribute: "opened-icon" })
  openedIcon: MaterialSymbol = "close";

  /**
   * The variant of the FAB.
   * Can be 'surface', 'primary', 'secondary', or 'tertiary'.
   * Defaults to 'primary'.
   * @attr variant
   */
  @property({ type: String })
  variant: "surface" | "primary" | "secondary" | "tertiary" = "primary";

  /**
   * The size of the FAB.
   * Can be 'small', 'medium', or 'large'.
   * Defaults to 'medium'.
   * @attr size
   */
  @property({ type: String })
  size: "small" | "medium" | "large" = "medium";

  /**
   * The label of the underlying {@link MdFab}.
   * Defaults to an empty string.
   * @attr label
   */
  @property({ type: String })
  label = "";

  /**
   * The `aria-label` of the FAB.
   * @attr aria-label
   */
  @property({ type: String, attribute: "aria-label" })
  override ariaLabel = "";

  /**
   * The direction in which the menu items should expand.
   * @attr direction
   */
  @property({ type: String, reflect: true })
  direction: "start" | "end" = "end";

  private get _focusableElements(): (HTMLElement & { focus: (options?: FocusOptions) => void; })[] {
    if (!this.open) {
      return [];
    }
    // The trigger fab and all slotted items.
    return [this._fab, ...this._items];
  }

  private _handleFocusTrap(e: FocusEvent) {
    const focusableElements = this._focusableElements;
    if (focusableElements.length === 0) {
      return;
    }

    const isStart = (e.target as HTMLElement).classList.contains("focus-trap-start");
    if (isStart) {
      focusableElements[focusableElements.length - 1].focus();
    } else {
      focusableElements[0].focus();
    }
  }

  private _handleDocumentClick = (e: MouseEvent) => {
    if (!this.open) {
      return;
    }
    const path = e.composedPath();
    if (!path.includes(this)) {
      this.open = false;
    }
  };

  private _toggle() {
    this.open = !this.open;
  }

  protected override update(changedProperties: PropertyValues): void {
    if (changedProperties.has("open")) {
      if (this.open) {
        document.addEventListener("click", this._handleDocumentClick, { capture: true });
      } else {
        document.removeEventListener("click", this._handleDocumentClick, { capture: true });
      }
    }

    super.update(changedProperties);

    switch (this.size) {
      case "small":
        this._items.forEach((item: FabMenuItem) => {
          item.style.setProperty("--fab-menu-item-padding-start", "0");
          item.style.setProperty("--fab-menu-item-padding-end", "0");
        });
        break;
      case "medium":
        this._items.forEach((item: FabMenuItem) => {
          item.style.setProperty("--fab-menu-item-padding-start", "0.5rem");
          item.style.setProperty("--fab-menu-item-padding-end", "0.5rem");
        });
        break;
      case "large":
        this._items.forEach((item: FabMenuItem) => {
          item.style.setProperty("--fab-menu-item-padding-start", "1rem");
          item.style.setProperty("--fab-menu-item-padding-end", "1rem");
        });
        break;
    }

    const labelSpan: HTMLSpanElement | null | undefined = this._fab.shadowRoot?.querySelector("span.label");
    if (labelSpan) {
      labelSpan.style.paddingInlineStart = this.icon && this.label ? "0.5rem" : "0";
    }
    const fabButtonIcon: MdIcon | null | undefined = this._fab.shadowRoot?.querySelector("button slot[name='icon']");
    if (fabButtonIcon) {
      fabButtonIcon.style.display = this.icon ? "contents" : "none";
    }
    const button: HTMLButtonElement | null | undefined = this._fab.shadowRoot?.querySelector("button");
    if (button) {
      button.style.paddingInline = "1rem";
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._handleDocumentClick, { capture: true });
  }

  override render() {
    // Main icon: rotates 0 to 90, scale 1 to 0.5, opacity 1 to 0
    const mainIconStyle = {
      transform: `rotate(${this.open ? 90 : 0}deg) scale(${this.open ? 0.5 : 1})`,
      opacity: this.open ? "0" : "1"
    };

    // Opened icon: rotates -90 to 0, scale 0.5 to 1, opacity 0 to 1
    const openedIconStyle = {
      transform: `rotate(${this.open ? 0 : -90}deg) scale(${this.open ? 1 : 0.5})`,
      opacity: this.open ? "1" : "0"
    };

    return html`
      ${this.open ? html`<div class="scrim"></div>` : nothing}
      ${this.open ? html`<div class="focus-trap-start" tabindex="0" @focus=${(e: FocusEvent) => this._handleFocusTrap(e)}></div>` : nothing}
      <div class="fab-container">
        <md-fab
          id="fab-menu-fab"
          .variant=${this.open ? "tertiary" : this.variant}
          .size=${this.size}
          .label=${this.label}
          .ariaLabel=${this.open ? `Close ${this.ariaLabel}` : `Open ${this.ariaLabel}`}
          .ariaExpanded=${this.open ? "true" : "false"}
          @click=${() => this._toggle()}
        >
          ${
            when(
              this.icon,
              () => html`
                <div class="icon-wrapper" slot="icon">
                  <md-icon style=${styleMap(mainIconStyle)}>${this.icon}</md-icon>
                  <md-icon style=${styleMap(openedIconStyle)}>${this.openedIcon}</md-icon>
                </div>
              `,
              () => nothing
            )
          }
        </md-fab>
      </div>

      <ul class="menu-items" role="menu" .ariaLabel=${this.ariaLabel}>
        <slot name="menu-items"></slot>
      </ul>
      ${this.open ? html`<div class="focus-trap-end" tabindex="0" @focus=${(e: FocusEvent) => this._handleFocusTrap(e)}></div>` : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "fab-menu": FabMenu;
  }
}