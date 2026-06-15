import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class BentoCard extends UIAwareElement {
    static styles: import("lit").CSSResult[];
    scrollable: boolean;
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    bentoCardTitle: string;
    private _handleToggle;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "bento-card": BentoCard;
    }
}
