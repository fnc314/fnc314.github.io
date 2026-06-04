import { LitElement, type TemplateResult } from "lit";
import "@/components/card/profile-bio/profile-bio-card";
import "@/components/card/settings/settings-card";
import "@/components/ui-mode-toggle/ui-mode-toggle";
export declare class BentoLayout extends LitElement {
    static styles: import("lit").CSSResult[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private getSkillsForWordCloud;
    private renderBentoBox;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "bento-layout": BentoLayout;
    }
}
