import "@/components/card/bento/bento-card";
import "@/components/code/code-project/code-project";
import { LitElement } from "lit";
export declare class CodeCard extends LitElement {
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
