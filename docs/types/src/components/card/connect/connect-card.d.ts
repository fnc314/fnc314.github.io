import "@/components/card/bento/bento-card";
import "@/components/connection/direct/direct-connection";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class ConnectCard extends UIAwareElement {
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
