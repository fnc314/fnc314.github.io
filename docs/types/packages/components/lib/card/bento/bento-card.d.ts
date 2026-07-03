import { type BentoBoxType } from "@/lib/bento-layout/bento-layout.types";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
export declare class BentoCard extends UIAwareElement {
    static styles: any[];
    bentoTag: BentoBoxType;
    scrollable: boolean;
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    bentoCardTitle: string;
    spreadContent: boolean;
    private _handleToggle;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "bento-card": BentoCard;
    }
}
