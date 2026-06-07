import { LitElement } from "lit";
export declare class BentoCard extends LitElement {
    static styles: import("lit").CSSResult[];
    scrollable: boolean;
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    private _handleToggle;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "bento-card": BentoCard;
    }
}
