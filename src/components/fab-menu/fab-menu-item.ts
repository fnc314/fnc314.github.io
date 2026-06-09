import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { type MaterialSymbol } from "@/types/material-symbols";
import { MdFab } from "@material/web/fab/fab";
import { LitElement, type TemplateResult, css, html, nothing } from "lit";
import { customElement, property, query } from "lit/decorators.js";
export type { MaterialSymbol } from "@/types/material-symbols";

/**
 * An action item within a `fab-menu`.
 *
 * @deprecated Use inline Bento Box cards instead. Deprecated as of version 2.0.0.
 *
 * @element fab-menu-item
 * @cssprop [--fab-menu-item-direction=row] - The `flex-direction` of the {@link FabMenuItem}
 * @cssprop [--fab-menu-item-justify=flex-end] - The Flex `justify-content` of the {@link FabMenuItem}
 * @cssprop [--fab-menu-item-padding-end=0] - The logical `padding-inline-end` value
 * @cssprop [--fab-menu-item-padding-start=0] - The logical `padding-inline-start` value
 */
@customElement("fab-menu-item")
export class FabMenuItem extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        align-items: center;
        display: flex;
        flex-direction: var(--fab-menu-item-direction, row);
        gap: var(--spacing-margin-s);
        justify-content: var(--fab-menu-item-justify, flex-end);
        list-style: none;

        /* Align center of small FAB (40px) with center of medium FAB (56px) in parent. (56 - 40) / 2 = 8px = 0.5rem */

        padding-inline-end: var(--fab-menu-item-padding-end, 0);
        /* stylelint-disable-next-line declaration-block-no-redundant-longhand-properties */
        padding-inline-start: var(--fab-menu-item-padding-start, 0);
        z-index: 10;
      }

      .label-container {
        --md-elevation-level: 4;

        background-color: var(--md-sys-color-surface-container-high);
        border-radius: var(--md-sys-shape-corner-medium);
        color: var(--md-sys-color-on-surface-variant);
        opacity: 1;
        padding: var(--spacing-padding-xs) var(--spacing-padding-s);
        position: relative;
        transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        user-select: none;
        white-space: nowrap;
      }

      md-fab {
        --md-fab-container-elevation: 4;
      }
    `,
  ];

  constructor() {
    super();
  }

  override connectedCallback() {
    super.connectedCallback();
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
    const label: TemplateResult | typeof nothing = this.label ?
      html`
        <div class="label-container">
          <md-elevation></md-elevation>
          <span class="md-typescale-label-large">${this.label}</span>
        </div>
      ` :
      nothing;
    return html`
      ${label}
      <md-fab
        size="small"
        variant="secondary"
        aria-label=${this.label}
      >
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
