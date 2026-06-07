import "@/components/card/bento/bento-card";
import { LitElement } from "lit";
export declare class ConnectCard extends LitElement {
    static styles: import("lit").CSSResult[];
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "connect-card": ConnectCard;
    }
}
