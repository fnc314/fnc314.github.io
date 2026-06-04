import { LitElement } from "lit";
export declare class InfoSection extends LitElement {
    static styles: import("lit").CSSResult[];
    sectionTitle: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "info-section": InfoSection;
    }
}
