import { CompleteStepUpDialog, OpenStepUpDialog, StepUpDialog } from "@/components/dialogs/step-up/step-up-dialog";
import { configsService } from "@/services/configs";
import { themeService } from "@/services/theme";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { themeToIcon } from "@/theme/theme";
import { type AppConfigs, DEFAULT_APP_CONFIGS, } from "@/types/configs/app-configs";
import { type FabConfig, FabConfigChange, FabPosition, FabPositionIcons, FabPositions, fabPositionToUi, FabStyles, fabStyleToUi } from "@/types/configs/fab-configs";
import { ColorScheme, ColorSchemeConfigChange, colorSchemeConfigsToMaterialSchemeName, ColorSchemeContrast, colorSchemeContrastToIcon, CONFIG_COLOR_CONTRAST_NAMES, CONFIG_COLOR_SCHEME_NAMES, } from "@/types/theme/color-scheme-configs";
import { THEME_NAMES, ThemeName } from "@/types/theme/theme";
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
import { ColorSchemeChangeEvent, DarkModeToggle, ColorScheme as DarkModeToggleColorScheme, PermanentColorSchemeEvent } from "dark-mode-toggle";
import { css, html, LitElement, TemplateResult } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, query, state } from "lit/decorators.js";

@customElement("configs-dialog")
export class ConfigsDialog extends LitElement {

  static override styles = [
    MaterialTypescaleStyles,
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
        gap: 2rem;
      }

      md-dialog {
        @media (orientation: landscape) {
          min-width: calc(100dvw - 10rem);
          max-width: calc(100dvw - 2rem);
          min-height: 75dvh;
        }

        @media (orientation: portrait) {
          min-width: calc(100dvw - 4rem);
          max-width: calc(100dvw - 2rem);
          max-height: calc(100dvh - 10rem);
        }

        [slot="headline"] {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0;
          margin: 0;

          h2 {
            padding: 0;
            margin-block: 0.5rem;
          }
        }

        [slot="actions"] {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          grid-template-areas: "close . reset save";

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

      dark-mode-toggle {
        place-items: center;
        display: contents;

        --dark-mode-toggle-icon-size: 2rem;

        --dark-mode-toggle-dark-icon: url("./../../../../../assets/icons/components/configs-dialog/dark-mode.svg");
        --dark-mode-toggle-light-icon: url("./../../../../../assets/icons/components/configs-dialog/light-mode.svg");
        --dark-mode-toggle-system-icon: url("./../../../../../assets/icons/components/configs-dialog/system.svg");
        --dark-mode-toggle-checkbox-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
        --dark-mode-toggle-remember-icon-checked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="m424-410.15-92.92-92.93q-8.31-8.3-20.89-8.5-12.57-.19-21.27 8.5-8.69 8.7-8.69 21.08 0 12.38 8.69 21.08l109.77 109.77q10.85 10.84 25.31 10.84 14.46 0 25.31-10.84l222.54-222.54q8.3-8.31 8.5-20.89.19-12.57-8.5-21.27-8.7-8.69-21.08-8.69-12.38 0-21.08 8.69L424-410.15ZM212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-760v560-560Z"/></svg>');
        --dark-mode-toggle-remember-icon-unchecked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');

        --dark-mode-toggle-color: var(--md-sys-color-on-surface-variant);
        --dark-mode-toggle-background-color: transparent;
        --dark-mode-toggle-active-mode-background-color: transparent;

        --dark-mode-toggle-legend-font: var(--md-ref-typeface-brand);
        --dark-mode-toggle-label-font: var(--md-ref-typeface-brand);
        --dark-mode-toggle-remember-font: var(--md-ref-typeface-brand);

        --dark-mode-toggle-icon-filter: none;
        --dark-mode-toggle-remember-filter: contrast(100%);

        &::part(form) {
          display: contents;
        }

        &::part(fieldset) {
          padding: unset;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding-inline: unset;
          padding-block: unset;
        }

        &::part(threeWayRadioWrapper) {
          position: relative;
          z-index: 0;
          border-radius: 1rem;
          border-color: var(--md-sys-color-on-secondary-container);
          border-width: var(--hairline-width);
          border-style: solid;
          margin-block-start: 0.5rem;
          display: inline-flex;
          padding: 0;
          overflow: hidden;
        }

        &::part(threeWayRadioWrapper)::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: calc(100% / 3);
          background-color: var(--md-sys-color-secondary-container);
          border-radius: inherit;
          transition: transform 0.3s ease-in-out;
          z-index: -1;
        }

        &:not([permanent]) {
          &::part(threeWayRadioWrapper)::before {
            transform: translateX(100%);
          }
          &::part(systemThreeWayLabel) {
            --dark-mode-toggle-system-icon: url("./../../../../../assets/icons/components/configs-dialog/system-filled.svg");
            color: var(--icon-fill-color);
          }
        }

        &:is([mode="light"][permanent]) {
          &::part(threeWayRadioWrapper)::before {
            transform: translateX(0%);
          }
          &::part(lightThreeWayLabel) {
            --dark-mode-toggle-light-icon: url("./../../../../../assets/icons/components/configs-dialog/light-mode-filled.svg");
            color: var(--icon-fill-color);
          }
        }

        &:is([mode="dark"][permanent]) {
          &::part(threeWayRadioWrapper)::before {
            transform: translateX(200%);
          }
          &::part(darkThreeWayLabel) {
            --dark-mode-toggle-dark-icon: url("./../../../../../assets/icons/components/configs-dialog/dark-mode-filled.svg");
            color: var(--icon-fill-color);
          }
        }

        &::part(lightThreeWayRadio),
        &::part(darkThreeWayRadio),
        &::part(systemThreeWayRadio) {
          /* Take the radio buttons out of the layout flow.
            The component's internal styles already set opacity to 0. */
          position: absolute;
        }

        &::part(lightThreeWayLabel),
        &::part(darkThreeWayLabel),
        &::part(systemThreeWayLabel) {
          padding: 1rem;
          position: relative;
          z-index: 1;
          flex: 1;
          text-align: center;
        }

        &::part(aside) {
          text-align: center;
          visibility: visible;
        }
      }

      dark-mode-toggle.dark {
        --dark-mode-toggle-checkbox-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
        --dark-mode-toggle-remember-icon-checked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="m424-410.15-92.92-92.93q-8.31-8.3-20.89-8.5-12.57-.19-21.27 8.5-8.69 8.7-8.69 21.08 0 12.38 8.69 21.08l109.77 109.77q10.85 10.84 25.31 10.84 14.46 0 25.31-10.84l222.54-222.54q8.3-8.31 8.5-20.89.19-12.57-8.5-21.27-8.7-8.69-21.08-8.69-12.38 0-21.08 8.69L424-410.15ZM212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-760v560-560Z"/></svg>');
        --dark-mode-toggle-remember-icon-unchecked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
      }

      fieldset {
        position: relative;
        border-color: var(--md-sys-color-outline);
        border-radius: var(--md-sys-shape-corner-small);
        padding: 1rem;

        label md-radio {
          margin-inline-end: 0.5rem;
        }

        md-outlined-select {
          width: 100%;
        }

        &.contrast, &.theme {
          display: contents;
        }
      }

      fieldset.color_scheme,
      fieldset.fab {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        gap: 1rem;

        fieldset {
          border-color: var(--md-sys-color-outline);
          border-radius: var(--md-sys-shape-corner-small);
          padding-block: 1.5rem;
        }
      }

      fieldset.theme,
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
          gap: 1rem;

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
    `
  ];

  @query("#configs-dialog")
  private _configsMDDialog!: MdDialog;

  @query("#dark-mode-toggle")
  private _darkModeToggle!: DarkModeToggle;


  @query("#step-up-dialog")
  private _stepUpDialog!: StepUpDialog;

  @state()
  private _darkModeEnabled: boolean = false;

  /**
   * (property) ConfigsDialog._appConfigs: {
        colorScheme: {
            name: "DARK" | "LIGHT" | "SYSTEM";
            contrast: "NORMAL" | "MEDIUM" | "HIGH";
            persist: boolean;
        } & {
            theme: "chicago" | "inter" | "red" | "sunset";
        };
        fab: {
            settings: {
                position: "START_TOP" | "START_BOTTOM" | "END_TOP" | "END_BOTTOM";
                style: "ICON_ONLY" | "ICON_AND_TEXT" | "ICON_ONLY_SMALL" | "TEXT_ONLY";
            };
            connect: {
                position: "START_TOP" | "START_BOTTOM" | "END_TOP" | "END_BOTTOM";
                style: "ICON_ONLY" | "ICON_AND_TEXT" | "ICON_ONLY_SMALL" | "TEXT_ONLY";
            };
        };
    }
   *
   */
  @state()
  private _appConfigs: AppConfigs = configsService.loadConfigs();

  constructor() {
    super();
    this._appConfigs = configsService.loadConfigs();
  }

  public showDialog(): Promise<void> {
    return this._configsMDDialog.show();
  };

  public hideDialog(): Promise<void> {
    return this._configsMDDialog.close();
  };

  private openStepUp = ((_: OpenStepUpDialog) => {
    this._stepUpDialog.showDialog();
  }).bind(this)

  private completeStepUp = ((event: CompleteStepUpDialog) => {
    if (event.detail.confirmed) {
      this._appConfigs = DEFAULT_APP_CONFIGS;
      this._darkModeToggle.removeAttribute("permanent");
      this.onFabChange("settings", this._appConfigs.fab.settings);
      this.onFabChange("connect", this._appConfigs.fab.connect);
      this.onColorThemeModeContrastChange(this._appConfigs.colorScheme);
      configsService.resetConfigs();
    }
  }).bind(this);

  private colorSchemeChangeEventListener = ((event: ColorSchemeChangeEvent) => {
    this._darkModeEnabled = event.detail.colorScheme === "dark";
    this._appConfigs = {
      ...this._appConfigs,
      colorScheme: {
        ...this._appConfigs.colorScheme,
        name: event.detail.colorScheme.length > 0 ?
          event.detail.colorScheme.toUpperCase() as ColorScheme :
          CONFIG_COLOR_SCHEME_NAMES.SYSTEM
      }
    }
    this.onColorThemeModeContrastChange(
      this._appConfigs.colorScheme
    );
  }).bind(this);

  private permanentColorSchemeEventListener = ((event: PermanentColorSchemeEvent) => {
    this._appConfigs = {
      ...this._appConfigs,
      colorScheme: {
        ...this._appConfigs.colorScheme,
        persist: event.detail.permanent,
      }
    }
    configsService.saveConfigs(this._appConfigs);
  }).bind(this);

  override connectedCallback(): void {
    super.connectedCallback();
    this._appConfigs = configsService.loadConfigs();
    document.addEventListener(
      "colorschemechange",
      this.colorSchemeChangeEventListener,
    );
    document.addEventListener(
      "permanentcolorscheme",
      this.permanentColorSchemeEventListener
    );
    document.addEventListener(
      "stepUpOpen",
      this.openStepUp
    );
    document.addEventListener(
      "stepUpComplete",
      this.completeStepUp
    );
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    configsService.saveConfigs(this._appConfigs);
    document.removeEventListener(
      "colorschemechange",
      this.colorSchemeChangeEventListener,
    );
    document.removeEventListener(
      "permanentcolorscheme",
      this.permanentColorSchemeEventListener
    );
    document.removeEventListener(
      "stepUpOpen",
      this.openStepUp
    );
    document.removeEventListener(
      "stepUpComplete",
      this.completeStepUp
    );
  }

  private onFabChange(
    fab: "settings" | "connect",
    newFabConfig: FabConfig
  ) {
    const newFabConfigs = fab === "settings" ?
      {
        fab: {
          connect: this._appConfigs.fab.connect,
          settings: newFabConfig
        }
      } :
      {
        fab: {
          connect: newFabConfig,
          settings: this._appConfigs.fab.settings
        }
      };

    this._appConfigs = {
      ...this._appConfigs,
      ...newFabConfigs
    };

    configsService.saveConfigs(this._appConfigs);

    this.dispatchEvent(
      new CustomEvent(
        "fab.change",
        {
          bubbles: true,
          composed: true,
          detail: {
            fab,
            newFabConfig,
          }
        }
      )
    );
  }

  private onColorThemeModeContrastChange(
    colorScheme: AppConfigs["colorScheme"]
  ) {
    this._appConfigs = {
      ...this._appConfigs,
      colorScheme
    };

    configsService.saveConfigs(this._appConfigs);

    this.dispatchEvent(
      new CustomEvent(
        "color_scheme.change",
        {
          bubbles: true,
          composed: true,
          detail: this._appConfigs.colorScheme,
        }
      )
    );

    updateMaterialCSSStyleSheet(
      themeService.currentThemeConfig()
        .materialSchemes[
          colorSchemeConfigsToMaterialSchemeName(this._appConfigs.colorScheme)
        ]
    )
  }

  #renderFabSettingsFieldset(fab: "settings" | "connect", currentConfig: FabConfig): TemplateResult {
    const buttonName = `${fab.charAt(0).toUpperCase()}${fab.slice(1)}`;
    return html`
      <fieldset form="configs-dialog-form" class=${`fab ${fab}`}>
        <legend>${buttonName} Button</legend>

        <fieldset form="configs-dialog-form" class="position">
          <legend>Position</legend>
          <md-outlined-select
            label=${`Change ${buttonName} Button Position`}
            name=${`${fab}.position`}
            value=${currentConfig.position}
            .hasLeadingIcon=${true}
            @change=${(event: Event) =>
              this.onFabChange(
                fab,
                {
                  ...currentConfig,
                  position: (event.target as HTMLSelectElement).value as FabPosition
                }
              )
            }
            supportingText=${`${buttonName} Button Position`}
            .menuPositioning=${"absolute"}
            >
            ${
              html`
                <span slot="leading-icon">${FabPositionIcons[currentConfig.position]}</span>
              `
            }
            ${
              FabPositions.map((position: FabPosition) => html`
                <md-select-option
                  ?selected=${currentConfig.position === position}
                  value=${position}
                  ?disabled=${
                    fab === "connect" ?
                      this._appConfigs.fab.settings.position === position :
                      this._appConfigs.fab.connect.position === position
                  }
                  >
                    ${FabPositionIcons[position]}
                    <div slot="headline">${fabPositionToUi(position)}</div>
                  </md-select-option>
              `)
            }
          </md-outlined-select>
        </fieldset>

        <fieldset form="configs-dialog-form" class="style">
          <legend>Style</legend>
          ${
            FabStyles.map((style) => html`
              <div class="md-radio-label-wrapper">
                <md-radio
                  name=${`${fab}.style`}
                  id=${`${fab}.style.${style}`}
                  value=${style}
                  ?checked=${currentConfig.style === style}
                  @change=${() => this.onFabChange(fab, { ...currentConfig, style })}
                ></md-radio>
                <label for=${`${fab}.style.${style}`}>
                  ${fabStyleToUi(style)}
                </label>
              </div>
            `)
          }
        </fieldset>
      </fieldset>
    `;
  }

  #renderUIFieldset(): TemplateResult {
    const classes = {
      dark: this._darkModeEnabled,
    };

    return html`
      <fieldset form="configs-dialog-form" class="color_scheme">
        <legend>UI Theme, Mode, &amp; Contrast</legend>

        <fieldset form="configs-dialog-form" class="theme">
          <legend>UI Theme</legend>
          <md-outlined-select
            label="Choose UI Theme"
            name="color_scheme.theme"
            value=${this._appConfigs.colorScheme.theme}
            @change=${(event: Event) => this.onColorThemeModeContrastChange(
              {
                ...this._appConfigs.colorScheme,
                theme: (event.target as HTMLSelectElement).value as ThemeName,
              }
            )}
            supportingText=${"Choose from a varity of UI Themes"}
            .menuPositioning=${"absolute"}
          >
            ${themeToIcon("leading-icon", this._appConfigs.colorScheme.theme)}
            ${
              Object.values(THEME_NAMES).map((theme) => html`
                <md-select-option
                  ?selected=${this._appConfigs.colorScheme.theme === theme}
                  value=${theme}
                  >
                  ${themeToIcon("start", theme)}
                  <div slot="headline">${theme.charAt(0).toUpperCase() + theme.slice(1)}</div>
                </md-select-option>
              `)
            }
          </md-outlined-select>
        </fieldset>

        <dark-mode-toggle
          .autofocus=${true}
          class="variant ${classMap(classes)}"
          id="dark-mode-toggle"
          permanent
          mode=${this._appConfigs.colorScheme.name.toLowerCase() as DarkModeToggleColorScheme}
          appearance="three-way"
          legend="Choose UI Variant"
          system="System"
          light="Light"
          dark="Dark"
          remember="Persist UI Variant"
        ></dark-mode-toggle>

        <fieldset form="configs-dialog-form" class="contrast">
          <legend class="color-scheme-legend">UI Contrast</legend>
          <md-outlined-select
            label="Choose UI Contrast"
            name="color_scheme.contrast"
            value=${this._appConfigs.colorScheme.contrast}
            @change=${(event: Event) => this.onColorThemeModeContrastChange(
              {
                ...this._appConfigs.colorScheme,
                contrast: (event.target as HTMLSelectElement).value as ColorSchemeContrast,
              }
            )}
            supportingText=${"Choose from Normal, Medium, and High Contrast Color Palettes"}
            .menuPositioning=${"absolute"}
          >
            ${colorSchemeContrastToIcon("leading-icon", this._appConfigs.colorScheme.contrast)}
            ${
              Object.values(CONFIG_COLOR_CONTRAST_NAMES).map((contrast) => html`
                <md-select-option
                  ?selected=${this._appConfigs.colorScheme.contrast === contrast}
                  value=${contrast}
                  >
                  ${colorSchemeContrastToIcon("start", contrast)}
                  <div slot="headline">${contrast.charAt(0) + contrast.slice(1).toLowerCase()}</div>
                </md-select-option>
              `)
            }
          </md-outlined-select>
        </fieldset>

      </fieldset>
    `;
  }

  override render() {
    return html`
      <step-up-dialog
        id="step-up-dialog"
        .dialogStyle=${"confirm"}
        .dialogContentString=${"Are you sure you want to revert all custom settings?"}
      ></step-up-dialog>

      <md-dialog class="configs-dialog" id="configs-dialog">
        <md-icon slot="icon">settings</md-icon>
        <div slot="headline">
          <h2 class="md-typescale-headline-medium">Settings</h2>
        </div>
        <form
          id="configs-dialog-form"
          slot="content"
          method="dialog"
        >

          ${this.#renderUIFieldset()}

          ${this.#renderFabSettingsFieldset("settings", this._appConfigs.fab.settings)}

          ${this.#renderFabSettingsFieldset("connect", this._appConfigs.fab.connect)}

        </form>
        <div slot="actions">
          <md-text-button
            @click=${() => this._configsMDDialog.close()}
            >
            Close
          </md-text-button>
          <md-outlined-button
            @click=${() => {
              this.dispatchEvent(
                new CustomEvent(
                  "stepUpOpen",
                  {
                    bubbles: true,
                    composed: true,
                    detail: {}
                  }
                )
              );
            }}
            >Reset Settings</md-outlined-button>
          <md-filled-button form="configs-dialog-form">Save Settings</md-filled-button>
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