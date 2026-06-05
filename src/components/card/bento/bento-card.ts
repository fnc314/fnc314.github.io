import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { bentoCardStyles } from "./bento-card.styles";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary BentoCard - A reusable card component for the bento grid.
 *
 * A reusable card component designed for implementation within a responsive Bento Grid layout.
 * It handles the visual properties of the grid items, including Material Design 3 container tokens,
 * glassmorphism filters, and interaction states.
 *
 * ## Features
 * - **Glassmorphism**: Built-in backdrop filters and semi-transparent backgrounds.
 * - **Interaction**: Elevates and shifts on hover to provide visual feedback.
 * - **Theming**: Integrated with Material Design 3 tokens for consistent color and corner radius.
 * - **Header Styling**: Automatically styles slotted `h2` elements as section headers.
 * - **Scrolling**: Optional `scrollable` mode for internal content overflow.
 *
 * @element bento-card
 * @property {boolean} scrollable - Enables internal vertical scrolling for content.
 * @slot - Default slot for card content. Slotted `h2` elements receive standardized header styling.
 */
@customElement("bento-card")
export class BentoCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [bentoCardStyles];

  @property({ type: Boolean })
  scrollable: boolean = false;

  override render() {
    const classes = {
      "bento-card": true,
      "scrollable": this.scrollable,
    };
    return html`
      <div class="${classMap(classes)}" role="region">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bento-card": BentoCard;
  }
}