import "@/components/card/bento/bento-card";
import "@/components/word/word-cloud/word-cloud";
import { LitElement } from "lit";
export declare class SkillsCard extends LitElement {
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
