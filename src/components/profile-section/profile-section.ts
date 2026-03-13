import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { css, html, LitElement } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("profile-section")
export class ProfileSection extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        container: profile-section-root / inline-size;
      }

      section {
        display: grid;
        grid-template-rows: min-content auto;
        grid-template-areas:
          "section-grid-title"
          "section-grid-content";
        gap: 1rem;
        padding: 1rem;

        border-radius: var(--md-sys-shape-corner-medium);
        background-color: var(--md-sys-color-inverse-surface);
        color: var(--md-sys-color-inverse-on-surface);
      }

      h2 {
        grid-area: section-grid-title;
        place-self: center;
        padding-block: 1rem;
      }

      div {
        display: contents;
        grid-area: section-grid-content;
      }

      @container (min-width: 600px) {
        section {
          /* Make the inner section span the columns of the host's subgrid */
          grid-column: 1 / -1;
          grid-template-areas: "section-grid-title section-grid-content";
          grid-template-columns: subgrid;
          grid-template-rows: auto;
        }

        :host {
          /* Turn the component itself into a subgrid container */
          display: grid;
          grid-template-columns: subgrid;
        }
      }

      @container (min-width: 900px) {
        section {
          column-gap: 1rem;
        }
      }
    `,
  ];

  @property({ type: String, attribute: "section-title" })
  sectionTitle: string = "";

  override render() {
    return html`
      <section>
        <h2 class="md-typescale-headline-small">
          ${this.sectionTitle}
        </h2>
        <div>
          <slot name="section-grid-content"></slot>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-section": ProfileSection;
  }
}
