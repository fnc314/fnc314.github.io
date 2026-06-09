import { BentoCardStyles } from "@/components/card/bento/bento-card.styles";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary BentoCard - A reusable card component for the bento grid.
 *
 * A reusable card component designed for implementation within a responsive Bento Grid layout.
 * It handles the visual properties of the grid items, including Material Design 3 container tokens,
 * glassmorphism filters, and interaction states.
 *
 * ## Features
 * - **Glassmorphism**: Built-in backdrop filters and semi-transparent backgrounds.
 * - **Interaction**: Optional elevation and translation on hover/focus, controlled via properties.
 * - **Theming**: Integrated with Material Design 3 tokens for consistent color and corner radius.
 * - **Expansion**: Built-in collapsible behavior using `<details>` and `<summary>` with smooth height transitions.
 * - **Header Styling**: Automatically styles slotted `h2` or `header`-slotted elements as section headers.
 * - **Scrolling**: Optional `scrollable` mode for internal content overflow.
 *
 * @element bento-card
 * @property {boolean} scrollable - Enables internal vertical scrolling for content.
 * @property {boolean} expanded - Reflects and controls the open state of the card.
 * @property {boolean} enableHover - Opt-in to the hover elevation/shift effect.
 * @property {boolean} enableFocus - Opt-in to the focus-within border/shadow shift effect.
 * @property {string} bentoCardTitle - An optional `string` which, when set, suppresses the `slot[name="header"]`
 * @slot header - Content to be displayed in the card's header/summary area.
 * @slot - Default slot for card content. Slotted `h2` elements receive standardized header styling.
 */
@customElement("bento-card")
export class BentoCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [BentoCardStyles];

  /**
   * Whether to enable scrolling for content
   */
  @property({ type: Boolean })
  scrollable = false;

  /**
   * Reflects and controls the open state of the underlying `<details>` element.
   * When `true`, the card is expanded and content is visible.
   */
  @property({ type: Boolean, reflect: true })
  expanded = false;

  /**
   * Whether to enable the lift-on-hover effect.
   * Defaults to `false` to minimize visual motion in dense layout grids.
   */
  @property({ type: Boolean })
  enableHover = false;

  /**
   * Whether to enable enhanced border and shadow styling on focus-within.
   * Defaults to `false`.
   */
  @property({ type: Boolean })
  enableFocus = false;

  /**
   * The clickable text for the `<h2>` in the `<summary>` element.  When provided,
   *   the exposed `slot[name="header"]` is suppressed.
   *
   * @type {string}
   * @memberof BentoCard
   */
  @property({ type: String })
  bentoCardTitle: string = "";

  /**
   * Synchronizes the `expanded` property with the state of the `<details>` element
   * whenever the user interacts with the toggle icon or summary.
   *
   * @param e - The toggle event from the `<details>` element.
   */
  private _handleToggle(e: Event) {
    this.expanded = (e.target as HTMLDetailsElement).open;
  }

  override render() {
    const classes = {
      "bento-card": true,
      "scrollable": this.scrollable,
      "enable-hover": this.enableHover,
      "enable-focus": this.enableFocus,
    };

    return html`
      <section aria-labelledby="${ifDefined(this.bentoCardTitle ? "bento-card-title" : undefined)}">
        <details
          class="${classMap(classes)}"
          ?open=${this.expanded}
          @toggle=${this._handleToggle}
          aria-label="${ifDefined(this.bentoCardTitle ? `${this.bentoCardTitle} details` : undefined)}"
          >
          <summary
            aria-label="${ifDefined(this.bentoCardTitle ? `${this.bentoCardTitle} summary` : undefined)}"
            >
            ${
              this.bentoCardTitle ?
                html`
                  <h2 id="bento-card-title" class="md-typescale-headline-small">${this.bentoCardTitle}</h2>
                ` :
                html`
                  <slot name="header"></slot>
                `
            }
            <md-icon class="indicator">expand_more</md-icon>
          </summary>
          <div
            aria-label="${ifDefined(this.bentoCardTitle ? `${this.bentoCardTitle} content` : undefined)}"
            class="expansion-wrapper"
            >
            <div class="expansion-content">
              <slot></slot>
            </div>
          </div>
        </details>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bento-card": BentoCard;
  }
}