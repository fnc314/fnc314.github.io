import { type EducationInstitutionRecord } from "@/components/education/institution/education-institution.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
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
