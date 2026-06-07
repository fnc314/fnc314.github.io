import { LitElement, type PropertyValues, type TemplateResult } from "lit";
import "@/components/card/bento/bento-card";
import "@/components/card/blog/blog-card";
import "@/components/card/code/code-card";
import "@/components/card/connect/connect-card";
import "@/components/card/education/education-card";
import "@/components/card/profile-bio/profile-bio-card";
import "@/components/card/settings/settings-card";
import "@/components/card/skills/skills-card";
import "@/components/card/work/work-card";
export declare class BentoLayout extends LitElement {
    static styles: import("lit").CSSResult[];
    private _bentoBoxConfigs;
    private _scrollSpyObserver?;
    private _activeRoute;
    connectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private _setupScrollSpy;
    private _routeFromElementId;
    disconnectedCallback(): void;
    private renderBentoBox;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "bento-layout": BentoLayout;
    }
}
