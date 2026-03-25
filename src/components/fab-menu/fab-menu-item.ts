import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { MdFab } from "@material/web/fab/fab";
import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { MaterialSymbol } from "material-symbols";

/**
 * An action item within a `fab-menu`.
 *
 * @element fab-menu-item
 */
@customElement("fab-menu-item")
export class FabMenuItem extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        list-style: none;
        display: flex;
        flex-direction: var(--fab-menu-item-direction, row);
        align-items: center;
        justify-content: var(--fab-menu-item-justify, flex-end);
        gap: 1rem;
        /* Align center of small FAB (40px) with center of medium FAB (56px) in parent.
           (56 - 40) / 2 = 8px = 0.5rem */
        padding-inline-end: var(--fab-menu-item-padding-end, 0);
        padding-inline-start: var(--fab-menu-item-padding-start, 0);
      }

      .label-container {
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface-variant);
        padding: 0.5rem 1rem;
        border-radius: var(--md-sys-shape-corner-medium);
        box-shadow: var(--md-sys-elevation-2);
        opacity: 1;
        transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        white-space: nowrap;
        user-select: none;
      }

      md-fab {
        --md-fab-container-elevation: 4;
      }
    `,
  ];

  constructor() {
    super();
    this.setAttribute("role", "menuitem");
  }

  @query("md-fab")
  private _fab!: MdFab;

  /**
   * The text label displayed next to the FAB item.
   * @attr label
   */
  @property({ type: String })
  label = "";

  /**
   * The icon to display inside the FAB item.
   * @attr icon
   */
  @property({ type: String })
  icon: MaterialSymbol | "" = "";

  /**
   * Focuses the underlying FAB element.
   *
   * @param options - Standard browser focus options.
   */
  override focus(options?: FocusOptions) {
    this._fab.focus(options);
  }

  override render() {
    return html`
      ${this.label ? html`<div class="label-container"><span class="md-typescale-label-large">${this.label}</span></div>` : ""}
      <md-fab size="small" variant="secondary" aria-label=${this.label}>
        <md-icon slot="icon">${this.icon}</md-icon>
      </md-fab>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "fab-menu-item": FabMenuItem;
  }
}