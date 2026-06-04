import { LitElement } from "lit";
import "../../ui-mode-toggle/ui-mode-toggle";
export declare class SettingsCard extends LitElement {
    static styles: import("lit").CSSResult[];
    private _appConfigs;
    private formattedDate;
    private _debugFont;
    private _debugIcons;
    connectedCallback(): void;
    private _toggleDebugFont;
    private _toggleDebugIcons;
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
//# sourceMappingURL=settings-card.d.ts.map