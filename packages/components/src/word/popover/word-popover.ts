import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { WordPopoverAnimations } from "@/lib/word/popover/word-popover.animations.styles";
import { WordPopoverStyles } from "@/lib/word/popover/word-popover.styles";
import { type TemplateResult, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

/**
 * @summary A popover element displayed instead of launching clicks on {@link WordTag}s
 *
 * @export
 * @class WordPopover
 * @typedef {WordPopover}
 * @extends {UIAwareElement}
 */
@customElement("word-popover")
export class WordPopover extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [
    TextStyles,
    WordPopoverStyles,
    WordPopoverAnimations
  ]

  @property({ type: String })
  word = "";

  @property({ type: String })
  popoverId: string = this.word;

  @property({ type: Object, attribute: false })
  footerURL: { text: string, url: string } = { text: this.word, url: "" }

  @query("[popover]")
  popoverElement!: HTMLElement;

  public lastClosedAt = 0;

  public showModal() {
    if (this.popoverElement && typeof this.popoverElement.showPopover === "function") {
      try {
        this.popoverElement.showPopover();
      } catch (e) {
        // Fallback if already open
      }
    }
  }

  public close() {
    if (this.popoverElement && typeof this.popoverElement.hidePopover === "function") {
      try {
        this.popoverElement.hidePopover();
      } catch (e) {
        // Fallback if already closed
      }
    }
  }

  private _handleToggle(e: ToggleEvent) {
    if (e.newState === "closed") {
      this.lastClosedAt = Date.now();
      this.dispatchEvent(
        new CustomEvent(
          "hide-popover",
          { composed: true, bubbles: true }
        )
      );
    }
  }

  override render(): TemplateResult {
    return html`
      <div
        id="${this.popoverId}"
        popover="auto"
        @toggle=${this._handleToggle}
        aria-label="Information about ${this.word}"
      >
        <article class="content">
          <md-icon-button
            autofocus
            aria-label="Close popover for ${this.word}"
            @click=${() => this.close()}
          >
            <md-icon>close</md-icon>
          </md-icon-button>
          <header>
            <slot name="header-icon"></slot>
            <h3 class="md-typescale-display-medium">
              ${this.word}
            </h3>
          </header>

          <section>
            <slot name="popover-content"></slot>
          </section>

          <footer>
            <a
              class="md-typescale-body-large"
              title="Open ${this.footerURL.text} as a separate page"
              href="${this.footerURL.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${this.word}
            </a>
          </footer>
        </article>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-popover": WordPopover;
  }
}