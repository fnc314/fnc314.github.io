import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * A reusable section component for profile-related content.
 * Uses container queries to provide a responsive grid layout that adapts to available space.
 *
 * API
 * --
 * @property {string} sectionTitle
 *   The text shown in the section heading (`<h2>`).
 *   Corresponds to the attribute `section-title`.
 *
 * Slot API
 * --
 * <slot name="section-grid-content">: (required)
 *   Container for section body content. Preserves the responsive grid layout.
 *
 * Example:
 * ```html
 * <info-section section-title="Experience">
 *   <div slot="section-grid-content">
 *     ...your list, cards, or details...
 *   </div>
 * </info-section>
 * ```
 */
@customElement("info-section")
export class InfoSection extends LitElement {
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
  sectionTitle = "";

  /**
   * Renders the section with a header and named content slot.
   *
   * Content consumers should provide a `<slot name="section-grid-content">` node
   * inside the `<profile-section>` to take part in the responsive grid layout.
   *
   * Example:
   * ```html
   * <info-section section-title="Work Experience">
   *   <div slot="section-grid-content">...cards...</div>
   * </info-section>
   * ```
   *
   * Notes:
   * - The slot is wrapped in a `div` that creates an inner container query.
   * - Named slot `section-grid-content` ensures content is placed in the second
   *   cell of the adaptive section grid.
   */
  override render() {
    return html`
      <section>
        <h2 class="md-typescale-headline-small">${this.sectionTitle}</h2>
        <div>
          <slot name="section-grid-content"></slot>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "info-section": InfoSection;
  }
}
