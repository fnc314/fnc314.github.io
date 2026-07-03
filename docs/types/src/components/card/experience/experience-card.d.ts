import "@/components/card/bento/bento-card";
import "@/components/work/experience/work-experience";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class ExperienceCard extends UIAwareElement {
    static styles: import("lit").CSSResult[];
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
