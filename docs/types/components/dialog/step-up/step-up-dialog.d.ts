import { type StepUpDialogStyle } from "@/components/dialog/step-up/step-up-dialog.types";
import "@material/web/button/filled-button";
import "@material/web/button/outlined-button";
import "@material/web/dialog/dialog";
import "@material/web/icon/icon";
import { LitElement, type TemplateResult } from "lit";
export type { StepUpDialogStyle } from "@/components/dialog/step-up/step-up-dialog.types";
export declare class StepUpDialog extends LitElement {
    static styles: import("lit").CSSResult[];
    dialogStyle: StepUpDialogStyle;
    dialogContentString: string;
    private _mdDialog;
    showDialog(): Promise<void>;
    private onButtonClick;
    private icons;
    private primaryActions;
    render(): TemplateResult<1>;
}
export type OpenStepUpDialog = CustomEvent<object>;
export type CompleteStepUpDialog = CustomEvent<{
    cancelled: boolean;
    confirmed: boolean;
}>;
declare global {
    interface HTMLElementTagNameMap {
        "step-up-dialog": StepUpDialog;
    }
    interface GlobalEventHandlersEventMap {
        stepUpOpen: OpenStepUpDialog;
        stepUpComplete: CompleteStepUpDialog;
    }
}
