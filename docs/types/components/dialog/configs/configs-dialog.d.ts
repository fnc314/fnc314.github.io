import { type FormContent } from "./configs-dialog.types";
import { type FabConfigChange } from "@/types/configs/fab-configs";
import { type ColorSchemeConfigChange } from "@/types/theme/color-scheme-configs";
import "@material/web/button/filled-button";
import "@material/web/button/outlined-button";
import "@material/web/dialog/dialog";
import "@material/web/divider/divider";
import "@material/web/fab/fab";
import "@material/web/icon/icon";
import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/radio/radio";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import { LitElement, type TemplateResult } from "lit";
export { type FormContent } from "./configs-dialog.types";
export declare class ConfigsDialog extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    private _configsMDDialog;
    private _darkModeToggle;
    private _stepUpDialog;
    private _darkModeEnabled;
    private _appConfigs;
    private _formContent;
    private _stepUpDialogContent;
    private _wasOpened;
    private _handleDialogEvent;
    private onAppConfigsChange;
    constructor();
    showDialog(formContent?: FormContent): Promise<void>;
    hideDialog(): Promise<void>;
    private openStepUp;
    private completeStepUp;
    private colorSchemeChangeEventListener;
    private permanentColorSchemeEventListener;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onFabChange;
    private onColorThemeModeContrastChange;
    private dialogContent;
    private dialogTitle;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "configs-dialog": ConfigsDialog;
    }
    interface GlobalEventHandlersEventMap {
        "fab.change": FabConfigChange;
        "color_scheme.change": ColorSchemeConfigChange;
    }
}
//# sourceMappingURL=configs-dialog.d.ts.map