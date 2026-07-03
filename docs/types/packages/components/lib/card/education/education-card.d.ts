import "@/lib/card/bento/bento-card";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type EducationInstitutionRecord } from "@fnc314/packages.types";
export declare class EducationCard extends UIAwareElement {
    static styles: any[];
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    _educationJsonData: EducationInstitutionRecord[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "education-card": EducationCard;
    }
}
