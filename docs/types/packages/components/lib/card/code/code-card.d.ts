import "@/lib/card/bento/bento-card";
import "@/lib/code/repo/code-repo";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
export declare class CodeCard extends UIAwareElement {
    static styles: any[];
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "code-card": CodeCard;
    }
}
