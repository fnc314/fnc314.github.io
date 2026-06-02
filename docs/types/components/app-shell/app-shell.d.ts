import "@/components/dialog/configs/configs-dialog";
import "@/components/dialog/connect/connect-dialog";
import "@/components/fab-menu/fab-menu";
import "@/components/fab-menu/fab-menu-item";
import "@material/web/button/text-button";
import "@material/web/dialog/dialog";
import "@material/web/divider/divider";
import "@material/web/icon/icon.js";
import "@material/web/list/list";
import "@material/web/list/list-item";
import { LitElement, type PropertyValues } from "lit";
export declare class AppShell extends LitElement {
    static styles: import("lit").CSSResult[];
    private appConfigs;
    private _uiModeIcon;
    private configsDialog;
    private fabMenu;
    private settingsFabConfig;
    private connectDialog;
    private connectFab;
    private connectFabConfig;
    private _openDialogCount;
    private onFabChangeBind;
    private onFabChange;
    private onFabConfigBind;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private onColorSchemeChange;
    private onAppConfigsChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private uiModeIcon;
    private _handleDialogOpened;
    private _handleDialogClosed;
    private _onFabMenuItemClick;
    private _getFabLabel;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "app-shell": AppShell;
    }
}
