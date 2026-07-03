import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type EducationInstitutionRecord } from "@fnc314/packages.types";
import { type CSSResult, type TemplateResult } from "lit";
export declare class EducationInstitution extends UIAwareElement {
    static styles: CSSResult[];
    institute: EducationInstitutionRecord;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "education-institution": EducationInstitution;
    }
}
