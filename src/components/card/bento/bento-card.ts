import { BENTO_BOX_TYPES, type BentoBoxType } from "@/components/bento-layout/bento-layout.types";
import { BentoCardStyles } from "@/components/card/bento/bento-card.styles";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { html } from "lit";
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
export class BentoCard extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    BentoCardStyles
  ];

  /**
   * Uniquely identifies this `BentoCard` via {@link BENTO_BOX_TYPES}
   */
  @property({ type: String })
  bentoTag: BentoBoxType = BENTO_BOX_TYPES.profile;


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
   * Whether to spread content over the entire body
   */
  @property({ type: Boolean })
  spreadContent = false;

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
      "spread-content": this.spreadContent,
    };

    const htmlId = `${this.bentoTag}-bento-card-title`;

    return html`
      <article aria-describedby="${htmlId}">
        <details
          class="${classMap(classes)}"
          ?open=${this.expanded}
          @toggle=${this._handleToggle}
          aria-label="${ifDefined(this.bentoCardTitle ? `${this.bentoCardTitle} details` : undefined)}"
          >
          <summary
            aria-describedby="${htmlId}"
            >
            <h2
              id="${htmlId}"
              class="md-typescale-headline-small"
              >
              ${this.bentoCardTitle}
            </h2>
            <md-icon class="indicator">expand_more</md-icon>
          </summary>
          <div
            aria-label="${this.bentoCardTitle} content"
            class="expansion-wrapper"
            >
            <div class="expansion-content">
              <slot></slot>
            </div>
          </div>
        </details>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bento-card": BentoCard;
  }
}