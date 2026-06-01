import "@/components/info-section/info-section";
import "@/components/partial-header/partial-header";
import "@/components/word/word-cloud";
import { LitElement } from "lit";
export declare class InfoPartial extends LitElement {
    static styles: import("lit").CSSResult[];
    private themeConfig;
    private onColorConfigsChange;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "info-partial": InfoPartial;
    }
}
