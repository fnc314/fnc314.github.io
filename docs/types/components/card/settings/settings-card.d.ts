import { LitElement } from "lit";
import "@/components/card/bento/bento-card";
import "@/components/ui-mode-toggle/ui-mode-toggle";
export declare class SettingsCard extends LitElement {
    static styles: import("lit").CSSResult[];
    private _appConfigs;
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
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
