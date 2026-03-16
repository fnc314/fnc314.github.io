import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { MdDialog } from "@material/web/dialog/dialog";
import { css, html, LitElement, TemplateResult } from "lit-element";
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
    `
  ];

  @property({ type: String })
  dialogStyle: ConfirmDialogStyle = "confirm";

  @property({ type: String })
  dialogContentString: string = "";

  @query("#step-up-dialog")
  private _mdDialog!: MdDialog;

  showDialog(): Promise<void> {
    return this._mdDialog.show();
  }

  returnValue(): string {
    return this._mdDialog.returnValue;
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
    confirm: html`<h2 class="md-typescale-headline-small">Are you sure?</h2>`,
    warning: html`<h2 class="md-typescale-headline-small">Warning</h2>`,
    attention: html`<h2 class="md-typescale-headline-small">Attention!</h2>`,
  };

  private icons: Record<ConfirmDialogStyle, TemplateResult> = {
    confirm: html`<md-icon slot="icon">subheader</md-icon>`,
    warning: html`<md-icon slot="icon">subheader</md-icon>`,
    attention: html`<md-icon slot="icon">subheader</md-icon>`,
  }

  private primaryActions: Record<ConfirmDialogStyle, TemplateResult> = {
    confirm: html`<md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Yes, I am sure</md-filled-button>`,
    warning: html`<md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Continue</md-filled-button>`,
    attention: html`<md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Confirm</md-filled-button>`,
  }

  override render() {
    return html`
      <md-dialog id="step-up-dialog" type="alert">
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