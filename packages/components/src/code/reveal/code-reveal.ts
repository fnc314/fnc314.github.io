import { CodeRevealStyles } from "@/lib/code/reveal/code-reveal.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary An inline reveal panel displaying expanded technology details inside {@link CodeRepo}
 *
 * @export
 * @class CodeRepoReveal
 * @extends {UIAwareElement}
 */
@customElement("code-reveal")
export class CodeReveal extends UIAwareElement {
  static override styles = [TextStyles, CodeRevealStyles];

  @property({ type: String })
  word = "";

  @property({ type: Object, attribute: false })
  footerURL: { text: string; url: string } = { text: this.word, url: "" };

  private _handleClose() {
    this.dispatchEvent(
      new CustomEvent("hide-reveal", {
        composed: true,
        bubbles: true,
      })
    );
  }

  override render(): TemplateResult {
    return html`
      <article class="reveal-card">
        <md-icon-button
          autofocus
          class="close-btn"
          aria-label="Close details for ${this.word}"
          @click=${this._handleClose}
        >
          <md-icon>close</md-icon>
        </md-icon-button>
        <header>
          <slot name="header-icon"></slot>
          <h3 class="md-typescale-headline-medium">${this.word}</h3>
        </header>

        <section>
          <slot name="reveal-content"></slot>
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
    "code-reveal": CodeReveal;
  }
}