import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { WordDialogAnimations } from "@/lib/word/dialog/word-dialog-animations.styles";
import { WordDialogStyles } from "@/lib/word/dialog/word-dialog.styles";
import "iconify-icon";
import { type TemplateResult, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

export const TAG_NAME_WORD_DIALOG: string = "word-dialog";

/**
 * @summary A `<dialog>` `HTML` element displayed instead of launching clicks
 *   on {@link WordTag}s
 *
 * @class WordDialog
 * @typedef {WordDialog}
 * @extends {UIAwareElement}
 */
@customElement(TAG_NAME_WORD_DIALOG)
export class WordDialog extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, WordDialogStyles, WordDialogAnimations];

  @property({ type: String })
  word = "";

  @property({ type: String })
  popoverId: string = this.word;

  @property({ type: Object, attribute: false })
  footerURL: { text: string; url: string } = { text: this.word, url: "" };

  @query("dialog")
  dialog!: HTMLDialogElement;

  @query("md-icon-button")
  closeButton!: HTMLElement;

  private _previousBodyOverflow: string = "";
  private _previousBodyPosition: string = "";
  private _previousBodyTop: string = "";
  private _previousBodyWidth: string = "";
  public lastClosedAt = 0;
  private currentScrollY: number = 0;

  public close() {
    this.dialog?.close();
  }

  public showModal() {
    this._previousBodyOverflow = document.body.style.overflow;
    this._previousBodyPosition = document.body.style.position;
    this._previousBodyTop = document.body.style.top;
    this._previousBodyWidth = document.body.style.width;
    this.currentScrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${this.currentScrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    this.dialog?.showModal();

    if (this.closeButton && typeof this.closeButton.focus === "function") {
      this.closeButton.focus({ preventScroll: true });
    }
  }

  private _handleClosed() {
    document.body.style.position = this._previousBodyPosition;
    document.body.style.top = this._previousBodyTop;
    document.body.style.width = this._previousBodyWidth;
    document.body.style.overflow = this._previousBodyOverflow;
    window.scrollTo(0, this.currentScrollY);

    this.lastClosedAt = Date.now();
    this.dispatchEvent(new CustomEvent("hide-dialog", { composed: true, bubbles: true }));
  }

  /**
   * Close the dialog when clicking outside the `.content` card
   * (i.e., on the transparent dialog surface).
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
        <article class="content">
          <md-icon-button
            aria-label="Close dialog for ${this.word}"
            @click=${() => this.close()}
          >
            <iconify-icon
              width="none"
              height="none"
              icon="material-symbols:close"
              ></iconify-icon>
          </md-icon-button>
          <header>
            <slot name="header-icon"></slot>
            <h3 class="md-typescale-display-medium">${this.word}</h3>
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
    [TAG_NAME_WORD_DIALOG]: WordDialog;
  }
}
