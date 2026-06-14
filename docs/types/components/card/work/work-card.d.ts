import "@/components/card/bento/bento-card";
import "@/components/work-experience/work-experience";
import { LitElement } from "lit";
export declare class WorkCard extends LitElement {
    static styles: import("lit").CSSResult[];
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "work-card": WorkCard;
    }
}
