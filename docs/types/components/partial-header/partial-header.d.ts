import { LitElement } from "lit";
export declare class PartialHeader extends LitElement {
    static styles: import("lit").CSSResult[];
    headingText: string;
    headerType: "primary" | "secondary" | "tertiary" | "inverse";
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "partial-header": PartialHeader;
    }
}
