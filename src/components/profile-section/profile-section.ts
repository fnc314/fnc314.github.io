import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("profile-section")
export class ProfileSection extends LitElement {
  /**
   * A reusable section component for profile-related content.
   * Uses container queries to provide a responsive grid layout that adapts to available space.
   */

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
        margin: unset;
      }

      div {
        display: block;
        container-type: inline-size;
        grid-area: section-grid-content;
        align-self: center;
      }

      slot[name="section-grid-content"] {
        place-self: center;
      }

      @container (min-width: 700px) {
        section {
          /* Make the inner section span the columns of the host's subgrid */
          grid-column: 1 / -1;
          grid-template-areas: "section-grid-title section-grid-content";
          grid-template-columns: min-content 1fr;
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

  /**
   * The title displayed in the section's header.
   * Maps to the `section-title` attribute.
   */
  @property({ type: String, attribute: "section-title" })
  sectionTitle: string = "";

  /** Renders the section header and content slot. */
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
