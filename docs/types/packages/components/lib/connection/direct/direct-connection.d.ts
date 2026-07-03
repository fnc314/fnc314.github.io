import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type ConnectionInstance } from "@fnc314/packages.types";
import "@material/web/iconbutton/filled-tonal-icon-button";
import { type CSSResult, type TemplateResult } from "lit";
export declare class DirectConnection extends UIAwareElement {
    static styles: CSSResult[];
    connectionInstance: ConnectionInstance;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "direct-connection": DirectConnection;
    }
}
