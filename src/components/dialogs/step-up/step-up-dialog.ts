import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { MdDialog } from "@material/web/dialog/dialog";
import { css, html, LitElement, TemplateResult } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property, query } from "lit/decorators.js";

export type ConfirmDialogStyle = "confirm" | "warning" | "attention"

@customElement("step-up-dialog")
export class StepUpDialog extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        --md-dialog-container-color: var(--md-sys-color-surface-container-highest);

      }

      .confirm {
        --md-dialog-container-color: var(--md-sys-color-surface-container-highest);
        --md-dialog-supporting-text-color: var(--md-sys-color-on-surface-variant);
        --md-dialog-icon-color: var(--md-sys-color-primary);
        --md-dialog-headline-color: var(--md-sys-color-on-surface-variant);
      }

      .warning {
        --md-dialog-container-color: var(--md-sys-color-surface-container-lowest);
        --md-dialog-supporting-text-color: var(--md-sys-color-on-surface-variant);
        --md-dialog-icon-color: var(--md-sys-color-primary-fixed);
        --md-dialog-headline-color: var(--md-sys-color-on-surface-variant);
      }

      .attention {
        --md-outlined-button-label-text-color: var(--md-sys-color-on-error-container);
        --md-outlined-button-outline-color: var(--md-sys-color-on-error-container);
        --md-outlined-button-hover-outline-color: var(--md-sys-color-on-error-container);
        --md-outlined-button-focus-outline-color: var(--md-sys-color-on-error-container);
        --md-dialog-container-color: var(--md-sys-color-error-container);
        --md-dialog-supporting-text-color: var(--md-sys-color-on-error-container);
        --md-dialog-icon-color: var(--md-sys-color-on-error-container);
        --md-dialog-headline-color: var(--md-sys-color-on-error-container);
      }
    `
  ];

  @property({ type: String })
  dialogStyle: ConfirmDialogStyle = "confirm";

  @property({ type: String })
  dialogContentString: string = "";

  @query("#step-up-dialog")
  private _mdDialog!: MdDialog;

  async showDialog(): Promise<void> {
    return this._mdDialog.show();
  }

  private onButtonClick(isCancel: boolean, event: PointerEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent("stepUpComplete", {
      bubbles: true,
      composed: true,
      detail: {
        cancelled: isCancel,
        confirmed: !isCancel,
      }
    }));
    this._mdDialog.close();
  }

  private headlines: Record<ConfirmDialogStyle, TemplateResult> = {
    confirm: html`<h2 class="md-typescale-headline-small">Please Confirm</h2>`,
    warning: html`<h2 class="md-typescale-headline-small">Warning</h2>`,
    attention: html`<h2 class="md-typescale-headline-small">Attention!</h2>`,
  };

  private icons: Record<ConfirmDialogStyle, TemplateResult> = {
    confirm: html`<md-icon slot="icon">question_mark</md-icon>`,
    warning: html`<md-icon slot="icon">warning</md-icon>`,
    attention: html`<md-icon slot="icon">priority_high</md-icon>`,
  }

  private primaryActions: Record<ConfirmDialogStyle, TemplateResult> = {
    confirm: html`<md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Confirm</md-filled-button>`,
    warning: html`<md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Continue</md-filled-button>`,
    attention: html`<md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Confirm</md-filled-button>`,
  }

  override render() {
    return html`
      <md-dialog id="step-up-dialog" type="alert" class=${classMap({ confirm: this.dialogStyle === "confirm", attention: this.dialogStyle === "attention", warning: this.dialogStyle === "warning", })}>
        ${this.icons[this.dialogStyle]}
        <div slot="headline">
          ${this.headlines[this.dialogStyle]}
        </div>
        <div slot="content">
          <form method="dialog" id=${`dialog-${this.dialogStyle}`}>
            <p>${this.dialogContentString}</p>
          </form>
        </div>
        <div slot="actions">
          <md-outlined-button
            @click=${(event: PointerEvent) => this.onButtonClick(true, event)}
            >
            Cancel
          </md-outlined-button>
          ${this.primaryActions[this.dialogStyle]}
        </div>
      </md-dialog>
    `;
  }
};

export type OpenStepUpDialog = CustomEvent<{}>;
export type CompleteStepUpDialog = CustomEvent<{ cancelled: boolean, confirmed: boolean }>;

declare global {
  interface HTMLElementTagNameMap {
    "step-up-dialog": StepUpDialog;
  }

  interface GlobalEventHandlersEventMap {
    "stepUpOpen": OpenStepUpDialog;

    "stepUpComplete": CompleteStepUpDialog;
  }
};