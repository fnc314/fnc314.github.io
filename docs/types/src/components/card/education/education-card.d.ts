import "@/components/card/bento/bento-card";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class EducationCard extends UIAwareElement {
    static styles: import("lit").CSSResult[];
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "education-card": EducationCard;
    }
}
