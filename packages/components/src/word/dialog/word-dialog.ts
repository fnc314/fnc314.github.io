import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { WordDialogAnimations } from "@/lib/word/dialog/word-dialog-animations.styles";
import { WordDialogStyles } from "@/lib/word/dialog/word-dialog.styles";
import { type TemplateResult, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

/**
 * @summary A `<dialog>` `HTML` element displayed instead of launching clicks
 *   on {@link WordTag}s
 *
 * @export
 * @class WordDialog
 * @typedef {WordDialog}
 * @extends {UIAwareElement}
 */
@customElement("word-dialog")
export class WordDialog extends UIAwareElement {
  static override styles = [
    TextStyles,
    WordDialogStyles,
    WordDialogAnimations
  ]

  @property({ type: String })
  word = "";

  @property({ type: String })
  popoverId: string = this.word;

  @property({ type: Object, attribute: false })
  footerURL: { text: string, url: string } = { text: this.word, url: "" }

  @query("dialog")
  dialog!: HTMLDialogElement;

  private _previousBodyOverflow: string = '';
  public lastClosedAt = 0;
  private currentScrollY: number = 0;

  public close() {
    this.dialog?.close();
  }

  public showModal() {
    this._previousBodyOverflow = document.body.style.overflow;
    this.currentScrollY = window.scrollY; // Capture current position

    document.body.style.overflow = "hidden";
    this.dialog?.showModal();
  }

  private _handleClosed() {
    // Immediately lock the window scroll back to where the user was
    window.scrollTo(0, this.currentScrollY);
    // Restore original overflow
    document.body.style.overflow = this._previousBodyOverflow;
    this.lastClosedAt = Date.now();
    this.dispatchEvent(
      new CustomEvent(
        "hide-dialog",
        { composed: true, bubbles: true }
      )
    );
  }

  /**
   * Close the dialog when clicking outside the `.content` card
   * (i.e., on the scrim or the transparent dialog surface).
   */
  private _handleDialogClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (!target.closest(".content")) {
      this.close();
    }
  }

  override render(): TemplateResult {
    return html`
      <dialog
        @close=${this._handleClosed}
        @click=${this._handleDialogClick}
        aria-label="Information about ${this.word}"
      >
        <div class="scrim"></div>
        <article class="content">
          <md-icon-button
            autofocus
            aria-label="Close dialog for ${this.word}"
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
            <slot name="dialog-content"></slot>
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
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-dialog": WordDialog;
  }
}