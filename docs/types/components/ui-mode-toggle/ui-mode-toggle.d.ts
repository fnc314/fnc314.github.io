import { LitElement, type TemplateResult } from "lit";
export declare class UiModeToggle extends LitElement {
    static styles: import("lit").CSSResult[];
    private _darkModeToggle;
    mode: "light" | "dark" | "system";
    permanent: boolean;
    private _appConfigs;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onAppConfigsChange;
    private colorSchemeChangeEventListener;
    private permanentColorSchemeEventListener;
    private onColorThemeModeContrastChange;
    reset(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ui-mode-toggle": UiModeToggle;
    }
}
//# sourceMappingURL=ui-mode-toggle.d.ts.map