import "@/lib/card/bento/bento-card";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import "@/lib/word/cloud/word-cloud";
export declare class SkillsCard extends UIAwareElement {
    static styles: any[];
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
