import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type TemplateResult } from "lit";
export declare class UiModeToggle extends UIAwareElement {
    static styles: any[];
    private _darkModeToggle;
    mode: "light" | "dark" | "system";
    permanent: boolean;
    private _appConfigs;
    private _ready;
    protected firstUpdated(): void;
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
