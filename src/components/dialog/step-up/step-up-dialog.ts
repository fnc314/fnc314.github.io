import { MaterialTypescaleStyles } from "@/styles/material-styles";
import "@material/web/button/filled-button";
import "@material/web/button/outlined-button";
import "@material/web/dialog/dialog";
import { MdDialog } from "@material/web/dialog/dialog";
import "@material/web/icon/icon";
import { LitElement, type TemplateResult, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export type StepUpDialogStyle = "confirm" | "warning" | "attention";

/**
 * A versatile confirmation dialog used to verify user intent before performing
 *  significant actions like resetting settings.
 *
 * @property {StepUpDialogStyle} [dialogStyle="confirm"] - Determines which {@link StepUpDialogStyle}
 * @property {string} [dialogContentString=""] - The central content of the {@link MdDialog}
 *
 * @element step-up-dialog
 * @slot headline - The {@link MdDialog} headline {@link slot}
 * @slot content - The body of the {@link MdDialog}
 * @slot actions - The area of dialog action buttons
 * @fires stepUpComplete - Dispatched when the user confirms or cancels the action.
 */
@customElement("step-up-dialog")
export class StepUpDialog extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        --md-dialog-container-color: var(--md-sys-color-surface-container-high);
        --md-outlined-button-hover-state-layer-opacity: 0.5;
        --md-filled-button-container-elevation: 2;
        --md-filled-button-container-color: var(--md-sys-color-surface-variant);
        --md-filled-button-label-text-color: var(--md-sys-color-on-surface);
        --md-filled-button-outline-color: var(--md-sys-color-on-surface);
        --md-filled-button-hover-label-text-color: var(--md-sys-color-on-surface-variant);
        --md-filled-button-hover-container-color: var(--md-sys-color-surface-variant);
        --md-filled-button-hover-outline-color: var(--md-sys-color-on-surface-variant);
        --md-filled-button-focus-container-color: var(--md-sys-color-surface-variant);
        --md-filled-button-focus-outline-color: var(--md-sys-color-on-surface-variant);
        --md-filled-button-focus-label-text-color: var(--md-sys-color-on-surface-variant);
      }

      md-dialog {
        &.confirm {
          --md-dialog-container-color: var(--md-sys-color-primary-container);
          --md-dialog-supporting-text-color: var(--md-sys-color-on-primary-container);
          --md-dialog-icon-color: var(--md-sys-color-on-primary-container);
          --md-dialog-headline-color: var(--md-sys-color-on-primary-container);
          --md-outlined-button-label-text-color: var(--md-sys-color-on-primary-container);
          --md-outlined-button-outline-color: var(--md-sys-color-on-primary-container);
          --md-outlined-button-hover-label-text-color: var(--md-sys-color-on-primary-container);
          --md-outlined-button-focus-outline-color: var(--md-sys-color-on-primary-container);
        }

        &.warning {
          --md-dialog-container-color: var(--md-sys-color-tertiary);
          --md-dialog-supporting-text-color: var(--md-sys-color-on-tertiary);
          --md-dialog-icon-color: var(--md-sys-color-on-tertiary);
          --md-dialog-headline-color: var(--md-sys-color-on-tertiary);
          --md-outlined-button-label-text-color: var(--md-sys-color-on-tertiary);
          --md-outlined-button-outline-color: var(--md-sys-color-on-tertiary);
          --md-outlined-button-hover-label-text-color: var(--md-sys-color-on-tertiary);
          --md-outlined-button-focus-outline-color: var(--md-sys-color-on-tertiary);
        }

        &.attention {
          --md-dialog-container-color: var(--md-sys-color-error);
          --md-dialog-supporting-text-color: var(--md-sys-color-on-error);
          --md-dialog-icon-color: var(--md-sys-color-on-error);
          --md-dialog-headline-color: var(--md-sys-color-on-error);
          --md-outlined-button-label-text-color: var(--md-sys-color-on-error);
          --md-outlined-button-outline-color: var(--md-sys-color-on-error);
          --md-outlined-button-hover-label-text-color: var(--md-sys-color-on-error);
          --md-outlined-button-focus-outline-color: var(--md-sys-color-on-error);
        }
      }
    `,
  ];

  /**
   * The visual style variant of the dialog, affecting colors and icons.
   * @attr dialogStyle
   */
  @property({ type: String, attribute: "dialogStyle" })
  dialogStyle: StepUpDialogStyle = "confirm";

  /**
   * The text content to display in the dialog body.
   * @attr dialogContentString
   */
  @property({ type: String, attribute: "dialogContentString" })
  dialogContentString = "";

  @query("#step-up-dialog")
  private _mdDialog!: MdDialog;

  /**
   * Shows the step-up confirmation dialog.
   * @returns A promise that resolves when the dialog is shown.
   */
  async showDialog(): Promise<void> {
    return this._mdDialog.show();
  }

  private async onButtonClick(isCancel: boolean, event: PointerEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent("stepUpComplete", {
        bubbles: true,
        composed: true,
        detail: {
          cancelled: isCancel,
          confirmed: !isCancel,
        },
      }),
    );
    await this._mdDialog.close();
  }

  private icons: Record<StepUpDialogStyle, TemplateResult> = {
    confirm: html`<md-icon slot="icon">check_circle</md-icon>`,
    warning: html`<md-icon slot="icon">warning</md-icon>`,
    attention: html`<md-icon slot="icon">report</md-icon>`,
  };

  private primaryActions: Record<StepUpDialogStyle, TemplateResult> = {
    confirm: html`
      <md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Confirm</md-filled-button>
    `,
    warning: html`
      <md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Continue</md-filled-button>
    `,
    attention: html`
      <md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Accept</md-filled-button>
    `,
  };

  override render() {
    const mdDialogClasses = {
      confirm: this.dialogStyle === "confirm",
      attention: this.dialogStyle === "attention",
      warning: this.dialogStyle === "warning",
    };
    let defaultHeadlineSlotText: string;
    switch (this.dialogStyle) {
      case "confirm":
        defaultHeadlineSlotText = "Please Confirm";
        break;
      case "warning":
        defaultHeadlineSlotText = "Warning";
        break;
      case "attention":
        defaultHeadlineSlotText = "Attention!";
        break;
    }

    return html`
      <md-dialog
        id="step-up-dialog"
        type="alert"
        class=${classMap(mdDialogClasses)}
      >
        ${this.icons[this.dialogStyle]}
        <div slot="headline">
          <h2 class="md-typescale-headline-small">${defaultHeadlineSlotText}</h2>
        </div>
        <div slot="content">
          <form
            method="dialog"
            id=${`dialog-${this.dialogStyle}`}
          >
            <p>${this.dialogContentString}</p>
          </form>
        </div>
        <div slot="actions">
          <md-outlined-button @click=${(event: PointerEvent) => this.onButtonClick(true, event)}>
            Cancel
          </md-outlined-button>
          ${this.primaryActions[this.dialogStyle]}
        </div>
      </md-dialog>
    `;
  }
}

export type OpenStepUpDialog = CustomEvent<object>;
export type CompleteStepUpDialog = CustomEvent<{ cancelled: boolean; confirmed: boolean }>;

declare global {
  interface HTMLElementTagNameMap {
    "step-up-dialog": StepUpDialog;
  }

  interface GlobalEventHandlersEventMap {
    stepUpOpen: OpenStepUpDialog;

    stepUpComplete: CompleteStepUpDialog;
  }
}
