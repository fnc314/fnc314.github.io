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

  @property({ type: Object, attribute: false })
  footerURL: { text: string, url: string } = { text: this.word, url: "" }

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("beforetoggle", this._handleToggle as EventListener);
  }

  override disconnectedCallback(): void {
    this.removeEventListener("beforetoggle", this._handleToggle as EventListener);
    super.disconnectedCallback();
  }

  public lastClosedAt = 0;

  private _scrollY = 0;

  private _handleToggle = (e: ToggleEvent) => {
    if (e.newState === "open") {
      this._scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this._scrollY}px`;
      document.body.style.width = '100%';
    } else {
      this.lastClosedAt = Date.now();
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, this._scrollY);
    }
  }

  override render(): TemplateResult {
    return html`
      <article>
        <md-icon-button
          aria-label="Close popover for ${this.word}"
          @click=${() => this.dispatchEvent(new CustomEvent("hide-popover", { composed: true, bubbles: true }))}
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
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-popover": WordPopover;
  }
}