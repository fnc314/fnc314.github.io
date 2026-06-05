import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { bentoCardStyles } from "./bento-card.styles";

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
 *
 * @element bento-card
 * @slot - Default slot for card content. Slotted `h2` elements receive standardized header styling.
 */
@customElement("bento-card")
export class BentoCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [bentoCardStyles];

  override render() {
    return html`
      <div class="bento-card" role="region">
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