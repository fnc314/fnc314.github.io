import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { WordPopoverStyles } from "@/lib/word/popover/word-popover.styles";
import { type TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @summary A `popover` `HTML` element displayed instead of launching clicks
 *   on {@link WordTag}s
 *
 * @export
 * @class WordPopover
 * @typedef {WordPopover}
 * @extends {UIAwareElement}
 */
@customElement("word-popover")
export class WordPopover extends UIAwareElement {
  static override styles = [
    TextStyles,
    WordPopoverStyles
  ]

  @property({ type: String })
  word = "";

  @property({ type: String })
  popoverId: string = this.word;

  @property({ type: Object })
  footerURL: { text: string, url: string } = { text: this.word, url: "" }

  override render(): TemplateResult {
    return html`
      <article id="${this.word}" popover>
        <header>
          <slot name="header-icon"></slot>
          <h3 class="md-typescale-display-medium">
            ${this.word}
          </h3>
        </header>

        <section>
          <slot></slot>
        </section>

        <footer>
          <a
            class="md-typescale-body-large"
            title=${this.footerURL.text}
            href=${this.footerURL.url}
            target="_blank"
            rel="noopener noreferrer"
            >
            ${this.word}
          </a>
        </footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-popover": WordPopover;
  }
}