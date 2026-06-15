import "@/components/card/bento/bento-card";
import "@/components/ui-mode-toggle/ui-mode-toggle";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
export declare class SettingsCard extends UIAwareElement {
    static styles: import("lit").CSSResult[];
    private _appConfigs;
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
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
