import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * A header component used for section titles with support for primary, secondary, and tertiary Material color variants.
 *
 * @element partial-header
 */
@customElement("partial-header")
export class PartialHeader extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
      }

      header {
        --md-elevation-level: 2;

        align-items: center;
        background-color: var(--md-sys-color-primary);
        border-radius: var(--md-sys-shape-corner-medium);
        display: flex;
        justify-content: center;
        margin-block-start: var(--spaces-margin-s);
        position: relative;

        h1 {
          color: var(--md-sys-color-on-primary);
          font-variant-caps: small-caps;
          margin-block: var(--spaces-margin-s);
          margin-inline: auto;
          text-align: center;
          width: 100%;
        }

        &.primary {
          background-color: var(--md-sys-color-primary);

          h1 {
            color: var(--md-sys-color-on-primary);
          }
        }

        &.secondary {
          background-color: var(--md-sys-color-secondary);

          h1 {
            color: var(--md-sys-color-on-secondary);
          }
        }

        &.tertiary {
          background-color: var(--md-sys-color-tertiary);

          h1 {
            color: var(--md-sys-color-on-tertiary);
          }
        }

        &.inverse {
          background-color: var(--md-sys-color-inverse-surface);

          h1 {
            color: var(--md-sys-color-inverse-on-surface);
          }
        }
      }
    `,
  ];

  /**
   * The text to display within the header.
   * @attr heading-text
   */
  @property({ type: String, attribute: "heading-text" })
  headingText = "";

  /**
   * The color variant theme for the header background and text.
   * Can be 'primary', 'secondary', or 'tertiary'.
   * @attr header-type
   */
  @property({ type: String, attribute: "header-type" })
  headerType: "primary" | "secondary" | "tertiary" | "inverse" = "primary";

  override render() {
    const classes = {
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary",
      inverse: "inverse",
    };
    return html`
      <header class=${classes[this.headerType]}>
        <md-elevation></md-elevation>
        <h1 class="md-typescale-display-large">${this.headingText}</h1>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "partial-header": PartialHeader;
  }
}
