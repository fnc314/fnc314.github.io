import "@/lib/card/bento/bento-card";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import "@/lib/work/experience/work-experience";
export declare class ExperienceCard extends UIAwareElement {
    static styles: any[];
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "experience-card": ExperienceCard;
    }
}
