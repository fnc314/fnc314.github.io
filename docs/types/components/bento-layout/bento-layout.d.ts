import "@/components/card/bento/bento-card";
import "@/components/card/profile-bio/profile-bio-card";
import "@/components/card/settings/settings-card";
import "@/components/ui-mode-toggle/ui-mode-toggle";
import { LitElement, type TemplateResult } from "lit";
export declare class BentoLayout extends LitElement {
    static styles: import("lit").CSSResult[];
    private _currentBreakpoint;
    private _onWindowResize;
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
