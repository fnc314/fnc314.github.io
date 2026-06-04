import { type CompleteStepUpDialog, StepUpDialog } from "@/components/dialog/step-up/step-up-dialog";
import "@/components/ui-mode-toggle/ui-mode-toggle";
import { UiModeToggle } from "@/components/ui-mode-toggle/ui-mode-toggle";
import { configsService } from "@/services/configs/configs-service";
import { themeService } from "@/services/theme/theme-service";
import { DialogSizing } from "@/styles/components/dialog/dialog";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { themeToIcon } from "@/theme/theme";
import { type AppConfigs, type AppConfigsChange, DEFAULT_APP_CONFIGS } from "@/types/configs/app-configs";
import {
  type FabConfig,
  type FabConfigChange,
  type FabPosition,
  FabPositionIcons,
  FabPositions,
  FabStyles,
  fabPositionToUi,
  fabStyleToUi,
} from "@/types/configs/fab-configs";
import {
  CONFIG_COLOR_CONTRAST_NAMES,
  CONFIG_COLOR_SCHEME_NAMES,
  type ColorScheme,
  type ColorSchemeConfigChange,
  type ColorSchemeContrast,
  colorSchemeConfigsToMaterialSchemeName,
  colorSchemeContrastToIcon,
} from "@/types/theme/color-scheme-configs";
import { THEME_NAMES, type ThemeName } from "@/types/theme/theme";
import "@material/web/button/filled-button";
import "@material/web/button/outlined-button";
import "@material/web/dialog/dialog";
import { MdDialog } from "@material/web/dialog/dialog";
import "@material/web/divider/divider";
import "@material/web/fab/fab";
import "@material/web/icon/icon";
import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/radio/radio";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import {
  type ColorSchemeChangeEvent,
  type PermanentColorSchemeEvent,
} from "dark-mode-toggle";
import { LitElement, type TemplateResult, css, html, nothing } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { type FormContent } from "./configs-dialog.types";
export { type FormContent } from "./configs-dialog.types";

/**
 * @summary A comprehensive configuration dialog for managing application settings. Allows users to toggle dark mode, change color themes, adjust contrast,
 *   and customize Floating Action Button (FAB) behaviors.
 *
 * @element configs-dialog
 * @fires fab.change - Dispatched when a FAB's position or style is modified.
 * @fires color_scheme.change - Dispatched when the UI theme, mode, or contrast is changed.
 */
@customElement("configs-dialog")
export class ConfigsDialog extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    DialogSizing,
    css`
      :host {
        display: block;

        --md-dialog-icon-size: 3rem;
        --md-dialog-icon-color: var(--md-sys-color-primary);
        --md-dialog-icon-font: var(--md-ref-typeface-brand);
        --md-dialog-container-color: var(--md-sys-color-surface-container-highest);
        --md-dialog-container-shape: var(--md-sys-shape-corner-medium);
        --md-dialog-headline-color: var(--md-sys-color-primary);
        --md-filled-button-container-elevation: 2;
        --md-outlined-button-label-text-color: var(--md-sys-color-outline);
        --md-text-button-container-shape: var(--md-sys-shape-corner-small);
        --md-radio-pressed-icon-color: var(--md-sys-color-error);
        --md-radio-selected-icon-color: var(--md-sys-color-error);
        --md-radio-selected-focus-icon-color: var(--md-sys-color-error);
        --md-radio-selected-hover-icon-color: var(--md-sys-color-error);
        --md-radio-selected-pressed-icon-color: var(--md-sys-color-error);
        --md-outlined-select-text-field-leading-icon-color: var(--md-sys-color-error);
        --md-outlined-select-text-field-focus-leading-icon-color: var(--md-sys-color-error);
        --md-outlined-select-text-field-hover-leading-icon-color: var(--md-sys-color-error);
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: var(--spacing-margin-l);
        padding: var(--spacing-padding-xs);
      }

      md-dialog {
        /* @media (orientation: landscape) {
          min-width: calc(100dvw - 10rem);
          max-width: calc(100dvw - 2rem);
          min-height: 75dvh;
        }

        @media (orientation: portrait) {
          min-width: calc(100dvw - 4rem);
          max-width: calc(100dvw - 2rem);
          max-height: calc(100dvh - 10rem);
        } */

        [slot="headline"] {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: var(--spacing-reset);
          margin: var(--spacing-reset);

          h2 {
            padding: var(--spacing-reset);
            margin-block: var(--spacing-margin-xs);
          }
        }

        [slot="actions"] {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          grid-template-areas: "close . reset save";
          padding: var(--spacing-padding-xs);

          md-text-button {
            grid-area: close;
          }

          md-outlined-button {
            grid-area: reset;
          }

          md-filled-button {
            grid-area: save;
          }
        }
      }

      fieldset {
        position: relative;
        border-color: var(--md-sys-color-outline);
        border-radius: var(--md-sys-shape-corner-small);
          padding: var(--spacing-padding-s);

        label md-radio {
            margin-inline-end: var(--spacing-margin-xs);
        }

        md-outlined-select {
          width: 100%;
        }

        &.contrast,
        &.theme {
          display: contents;
        }
      }

      /* stylelint-disable-next-line selector-class-pattern */
      fieldset.color_scheme,
      fieldset.fab {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        gap: var(--spacing-margin-s);

        fieldset {
          border-color: var(--md-sys-color-outline);
          border-radius: var(--md-sys-shape-corner-small);
          padding-block: var(--spacing-padding-m);
        }
      }

      fieldset.theme,
      /* stylelint-disable-next-line selector-class-pattern */
      fieldset.color_scheme {
        ::part(legend),
        fieldset legend {
          text-align: center;
          width: 100%;
        }
      }

      fieldset.theme {
        md-select-option {
          img {
            width: 2rem;
            height: auto;
          }
        }
      }

      fieldset.fab {
        fieldset.style {
          display: grid;
          grid-template-areas:
            "IconOnly IconAndText"
            "IconOnlySmall TextOnly";
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: var(--spacing-margin-s);

          legend {
            grid-area: legend;
          }

          .md-radio-label-wrapper {
            &:nth-child(2) {
              grid-area: IconOnly;
            }

            &:nth-child(3) {
              grid-area: IconAndText;
            }

            &:nth-child(4) {
              grid-area: IconOnlySmall;
            }

            &:nth-child(5) {
              grid-area: TextOnly;
            }
          }
        }
      }
    `,
  ];

  @query("#configs-dialog")
  private _configsMDDialog!: MdDialog;

  @query("ui-mode-toggle")
  private _darkModeToggle!: UiModeToggle;

  @query("#step-up-dialog")
  private _stepUpDialog!: StepUpDialog;

  @state()
  private _darkModeEnabled = false;

  @state()
  private _appConfigs: AppConfigs = configsService.loadConfigs();

  @state()
  private _formContent: FormContent = "ui-mode";

  @state()
  private _stepUpDialogContent = "all custom";

  @state()
  private _wasOpened = false;

  private _handleDialogEvent(event: Event) {
    this.dispatchEvent(new Event(event.type, { bubbles: true, composed: true }));
  }

  private onAppConfigsChange = (event: Event) => {
    this._appConfigs = (event as AppConfigsChange).detail.appConfigs;
  };

  constructor() {
    super();
    this._appConfigs = configsService.loadConfigs();
    configsService.addEventListener("app-configs.change", this.onAppConfigsChange);
  }

  /**
   * Shows the configuration dialog.
   * @param formContent - The initial section to display in the dialog. Defaults to "ui-mode".
   * @returns A promise that resolves when the dialog is shown.
   */
  public async showDialog(formContent: FormContent = "ui-mode"): Promise<void> {
    this._formContent = formContent;
    this._wasOpened = true;
    await this.updateComplete;
    return this._configsMDDialog.show();
  }

  /**
   * Hides the configuration dialog.
   * @returns A promise that resolves when the dialog is closed.
   */
  public hideDialog(): Promise<void> {
    return this._configsMDDialog.close();
  }

  private openStepUp = () => {
    switch (this._formContent) {
      case "ui-mode":
        this._stepUpDialogContent = "UI Mode";
        break;
      case "button-settings":
      case "button-connect":
        this._stepUpDialogContent = "Settings & Connect Button";
        break;
    }
    this._stepUpDialog.dialogContentString = `Are you sure you want to revert ${this._stepUpDialogContent} customizations?`;
    void this._stepUpDialog.showDialog();
  };

  private completeStepUp = (event: CompleteStepUpDialog) => {
    if (event.detail.confirmed) {
      switch (this._formContent) {
        case "ui-mode":
          this._darkModeToggle.permanent = false;
          this.onColorThemeModeContrastChange(DEFAULT_APP_CONFIGS.colorScheme);
          break;
        case "button-settings":
        case "button-connect":
          this.onFabChange("settings", DEFAULT_APP_CONFIGS.fab.settings);
          this.onFabChange("connect", DEFAULT_APP_CONFIGS.fab.connect);
          break;
      }
    }
  };

  private colorSchemeChangeEventListener = (event: ColorSchemeChangeEvent) => {
    this._darkModeEnabled = event.detail.colorScheme === "dark";
    this._appConfigs = {
      ...this._appConfigs,
      colorScheme: {
        ...this._appConfigs.colorScheme,
        name:
          event.detail.colorScheme.length > 0
            ? (event.detail.colorScheme.toUpperCase() as ColorScheme)
            : CONFIG_COLOR_SCHEME_NAMES.SYSTEM,
      },
    };
    this.onColorThemeModeContrastChange(this._appConfigs.colorScheme);
  };

  private permanentColorSchemeEventListener = (event: PermanentColorSchemeEvent) => {
    this._appConfigs = {
      ...this._appConfigs,
      colorScheme: {
        ...this._appConfigs.colorScheme,
        persist: event.detail.permanent,
      },
    };
    configsService.saveConfigs(this._appConfigs);
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this._appConfigs = configsService.loadConfigs();
    document.addEventListener("colorschemechange", this.colorSchemeChangeEventListener);
    document.addEventListener("permanentcolorscheme", this.permanentColorSchemeEventListener);
    document.addEventListener("stepUpOpen", this.openStepUp);
    document.addEventListener("stepUpComplete", this.completeStepUp);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    configsService.saveConfigs(this._appConfigs);
    document.removeEventListener("colorschemechange", this.colorSchemeChangeEventListener);
    document.removeEventListener("permanentcolorscheme", this.permanentColorSchemeEventListener);
    document.removeEventListener("stepUpOpen", this.openStepUp);
    document.removeEventListener("stepUpComplete", this.completeStepUp);
  }

  private onFabChange(fab: "settings" | "connect", newFabConfig: FabConfig) {
    const newFabConfigs =
      fab === "settings"
        ? {
            fab: {
              connect: this._appConfigs.fab.connect,
              settings: newFabConfig,
            },
          }
        : {
            fab: {
              connect: newFabConfig,
              settings: this._appConfigs.fab.settings,
            },
          };

    this._appConfigs = {
      ...this._appConfigs,
      ...newFabConfigs,
    };

    configsService.saveConfigs(this._appConfigs);

    this.dispatchEvent(
      new CustomEvent("fab.change", {
        bubbles: true,
        composed: true,
        detail: {
          fab,
          newFabConfig,
        },
      }),
    );
  }

  private onColorThemeModeContrastChange(colorScheme: AppConfigs["colorScheme"]) {
    this._appConfigs = {
      ...this._appConfigs,
      colorScheme,
    };

    configsService.saveConfigs(this._appConfigs);

    this.dispatchEvent(
      new CustomEvent("color_scheme.change", {
        bubbles: true,
        composed: true,
        detail: this._appConfigs.colorScheme,
      }),
    );

    updateMaterialCSSStyleSheet(
      themeService.currentThemeConfig().materialSchemes[
        colorSchemeConfigsToMaterialSchemeName(this._appConfigs.colorScheme)
      ],
    );
  }

  #renderFabSettingsFieldset(fab: "settings" | "connect", currentConfig: FabConfig): TemplateResult {
    const buttonName = `${fab.charAt(0).toUpperCase()}${fab.slice(1)}`;
    return html`
      <fieldset
        form="configs-dialog-form"
        class=${`fab ${fab}`}
      >
        <legend>${buttonName} Button</legend>

        <fieldset
          form="configs-dialog-form"
          class="position"
        >
          <legend>Position</legend>
          <md-outlined-select
            label=${`Change ${buttonName} Button Position`}
            name=${`${fab}.position`}
            value=${currentConfig.position}
            .hasLeadingIcon=${true}
            @change=${(event: Event) =>
              this.onFabChange(fab, {
                ...currentConfig,
                position: (event.target as HTMLSelectElement).value as FabPosition,
              })}
            supportingText=${`${buttonName} Button Position`}
          >
            ${html` <span slot="leading-icon">${FabPositionIcons[currentConfig.position]}</span> `}
            ${FabPositions.map(
              (position: FabPosition) => html`
                <md-select-option
                  ?selected=${currentConfig.position === position}
                  value=${position}
                  ?disabled=${fab === "connect"
                    ? this._appConfigs.fab.settings.position === position
                    : this._appConfigs.fab.connect.position === position}
                >
                  ${FabPositionIcons[position]}
                  <div slot="headline">${fabPositionToUi(position)}</div>
                </md-select-option>
              `,
            )}
          </md-outlined-select>
        </fieldset>

        <fieldset
          form="configs-dialog-form"
          class="style"
        >
          <legend>Style</legend>
          ${FabStyles.map(
            (style) => html`
              <div class="md-radio-label-wrapper">
                <md-radio
                  name=${`${fab}.style`}
                  id=${`${fab}.style.${style}`}
                  value=${style}
                  ?checked=${currentConfig.style === style}
                  @change=${() => this.onFabChange(fab, { ...currentConfig, style })}
                ></md-radio>
                <label for=${`${fab}.style.${style}`}> ${fabStyleToUi(style)} </label>
              </div>
            `,
          )}
        </fieldset>
      </fieldset>
    `;
  }

  #renderUIFieldset(): TemplateResult {
    const classes = {
      dark: this._darkModeEnabled,
    };

    return html`
      <fieldset
        form="configs-dialog-form"
        class="color_scheme"
      >
        <legend>UI Theme, Mode, &amp; Contrast</legend>

        <fieldset
          form="configs-dialog-form"
          class="theme"
        >
          <legend>UI Theme</legend>
          <md-outlined-select
            label="Choose UI Theme"
            name="color_scheme.theme"
            value=${this._appConfigs.colorScheme.theme}
            @change=${(event: Event) =>
              this.onColorThemeModeContrastChange({
                ...this._appConfigs.colorScheme,
                theme: (event.target as HTMLSelectElement).value as ThemeName,
              })}
            supportingText=${"Choose from a varity of UI Themes"}
          >
            ${themeToIcon("leading-icon", this._appConfigs.colorScheme.theme)}
            ${Object.values(THEME_NAMES).map(
              (theme) => html`
                <md-select-option
                  ?selected=${this._appConfigs.colorScheme.theme === theme}
                  value=${theme}
                >
                  ${themeToIcon("start", theme)}
                  <div slot="headline">${theme.charAt(0).toUpperCase() + theme.slice(1)}</div>
                </md-select-option>
              `,
            )}
          </md-outlined-select>
        </fieldset>

        <ui-mode-toggle
          mode=${this._appConfigs.colorScheme.name.toLowerCase()}
          ?permanent=${this._appConfigs.colorScheme.persist}
        ></ui-mode-toggle>

        <fieldset
          form="configs-dialog-form"
          class="contrast"
        >
          <legend class="color-scheme-legend">UI Contrast</legend>
          <md-outlined-select
            label="Choose UI Contrast"
            name="color_scheme.contrast"
            value=${this._appConfigs.colorScheme.contrast}
            @change=${(event: Event) =>
              this.onColorThemeModeContrastChange({
                ...this._appConfigs.colorScheme,
                contrast: (event.target as HTMLSelectElement).value as ColorSchemeContrast,
              })}
            supportingText=${"Choose from Normal, Medium, and High Contrast Color Palettes"}
          >
            ${colorSchemeContrastToIcon("leading-icon", this._appConfigs.colorScheme.contrast)}
            ${Object.values(CONFIG_COLOR_CONTRAST_NAMES).map(
              (contrast) => html`
                <md-select-option
                  ?selected=${this._appConfigs.colorScheme.contrast === contrast}
                  value=${contrast}
                >
                  ${colorSchemeContrastToIcon("start", contrast)}
                  <div slot="headline">${contrast.charAt(0) + contrast.slice(1).toLowerCase()}</div>
                </md-select-option>
              `,
            )}
          </md-outlined-select>
        </fieldset>
      </fieldset>
    `;
  }

  private dialogContent(): TemplateResult | typeof nothing {
    switch (this._formContent) {
      case "ui-mode":
        return this.#renderUIFieldset();
      case "button-settings":
        return this.#renderFabSettingsFieldset("settings", this._appConfigs.fab.settings);
      case "button-connect":
        return this.#renderFabSettingsFieldset("connect", this._appConfigs.fab.connect);
      default:
        return nothing;
    }
  }

  private dialogTitle(): string {
    switch (this._formContent) {
      case "ui-mode":
        return "Configure UI Mode";
      case "button-settings":
        return "Configure Settings Button";
      case "button-connect":
        return "Configure Connect Button";
      default:
        return "";
    }
  }

  override render() {
    return html`
      <step-up-dialog
        id="step-up-dialog"
        .dialogStyle=${"confirm"}
        .dialogContentString=${`Are you sure you want to revert ${this._stepUpDialogContent} customizations?`}
      ></step-up-dialog>

      <md-dialog
        class="configs-dialog"
        id="configs-dialog"
        @opened=${(event: Event) => this._handleDialogEvent(event)}
        @closed=${(event: Event) => this._handleDialogEvent(event)}
      >
        <md-icon slot="icon">settings</md-icon>
        <div slot="headline">
          <h2 class="md-typescale-headline-medium">${this.dialogTitle()}</h2>
        </div>
        <form
          id="configs-dialog-form"
          slot="content"
          method="dialog"
        >
          ${this._wasOpened ? this.dialogContent() : nothing}
        </form>
        <div slot="actions">
          <md-text-button @click=${() => this._configsMDDialog.close()}> Close </md-text-button>
          <md-outlined-button
            @click=${() => {
              this.dispatchEvent(
                new CustomEvent("stepUpOpen", {
                  bubbles: true,
                  composed: true,
                  detail: {},
                }),
              );
            }}
          >
            Reset
          </md-outlined-button>
          <md-filled-button form="configs-dialog-form">Save</md-filled-button>
        </div>
      </md-dialog>
    `;
  }
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
