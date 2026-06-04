import { LitElement, type PropertyValues } from "lit";
export declare class AppShell extends LitElement {
    static styles: import("lit").CSSResult[];
    private _activeRoute;
    private _inlineIconTimeout;
    private _boundListener;
    private _scrollSpyObserver?;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private _setupScrollSpy;
    private _routeFromElementId;
    private _handleHashChange;
    private onColorSchemeChange;
    private onAppConfigsChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "app-shell": AppShell;
    }
}
declare global {
    interface HTMLElementTagNameMap {
        "app-shell": AppShell;
    }
}
//# sourceMappingURL=app-shell.d.ts.map