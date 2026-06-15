import "@/components/card/bento/bento-card";
import "@/components/code/repo/code-repo";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class CodeCard extends UIAwareElement {
    static styles: import("lit").CSSResult[];
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
