import { LitElement, type TemplateResult } from "lit";
export declare class ConnectDialog extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    private _mdDialog;
    private formattedDate;
    private formattedTime;
    private version;
    showDialog(): Promise<void>;
    hideDialog(): Promise<void>;
    private _handleDialogEvent;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "connect-dialog": ConnectDialog;
    }
}
