import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { type TemplateResult } from "lit";
export declare class BentoLayout extends UIAwareElement {
    static styles: import("lit").CSSResult[];
    private _bentoBoxConfigs;
    private renderBentoBox;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "bento-layout": BentoLayout;
    }
}
