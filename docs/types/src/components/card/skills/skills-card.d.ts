import "@/components/card/bento/bento-card";
import "@/components/word/cloud/word-cloud";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class SkillsCard extends UIAwareElement {
    static styles: import("lit").CSSResult[];
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    private getSkillsForWordCloud;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "skills-card": SkillsCard;
    }
}
