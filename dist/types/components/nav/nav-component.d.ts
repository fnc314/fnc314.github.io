import { LitElement, type PropertyValues, type TemplateResult } from "lit";
export declare class NavComponent extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    private _activeTabIndex;
    private _activeRoute;
    private _exitingRoute;
    private _tabRefMap;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "nav-component": NavComponent;
    }
}
//# sourceMappingURL=nav-component.d.ts.map