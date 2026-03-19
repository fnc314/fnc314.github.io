import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { css, html, LitElement } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("partial-header")
export class PartialHeader extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        --md-elevation-level: 2;
        border-radius: var(--md-sys-shape-corner-medium);
        margin-block-start: 1rem;
        background-color: var(--md-sys-color-primary-container);

        h1 {
          text-align: center;
          margin-inline: auto;
          margin-block: 1rem;
          color: var(--md-sys-color-on-primary-container);
          font-variant-caps: small-caps;
          width: 100%;
        }
      }
    `,
  ];

  @property({ type: String, attribute: "heading-text" })
  headingText: string = "";

  override render() {
    return html`
      <header>
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
