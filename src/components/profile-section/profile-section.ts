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
          grid-template-areas: "section-grid-title section-grid-content";
          grid-template-columns: auto 1fr;
          grid-template-rows: auto;
        }
      }

      @container (min-width: 900px) {
        section {
          grid-template-areas: "section-grid-title section-grid-content";
          column-gap: 1rem;
          grid-template-columns: auto 1fr;
          grid-template-rows: auto;
        }
      }

      @container (min-width: 1200px) {
        section {
          grid-template-areas: "section-grid-title section-grid-content";
          grid-template-columns: auto 1fr;
          grid-template-rows: auto;
        }
      }

      @container (min-width: 1500px) {
        section {
          grid-template-areas: "section-grid-title section-grid-content";
          grid-template-columns: auto 1fr;
          grid-template-rows: auto;
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
          <span> ${this.sectionTitle} </span>
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
