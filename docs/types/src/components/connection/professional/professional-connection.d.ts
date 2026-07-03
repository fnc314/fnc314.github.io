import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { type ProfessionalConnectionJsonData, type ProfessionalConnectionType } from "@fnc314/packages.types";
import { type CSSResult, type TemplateResult } from "lit";
export declare class ProfessionalConnection extends UIAwareElement {
    static styles: CSSResult[];
    professionalConnectionType: ProfessionalConnectionType;
    professionalConnectionData: ProfessionalConnectionJsonData;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "professional-connection": ProfessionalConnection;
    }
}
