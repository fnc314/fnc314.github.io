import { LitElement } from "lit";
import "@/components/ui-mode-toggle/ui-mode-toggle";
export declare class SettingsCard extends LitElement {
    static styles: import("lit").CSSResult[];
    private _appConfigs;
    private formattedDate;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onAppConfigsChange;
    private _onThemeChange;
    private _onContrastChange;
    private _dispatchColorSchemeChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "settings-card": SettingsCard;
    }
}
