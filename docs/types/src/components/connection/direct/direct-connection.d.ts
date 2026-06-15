import { type ConnectionInstance } from "@/components/connection/direct/direct-connection.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
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
