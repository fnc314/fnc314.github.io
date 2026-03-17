import { CompleteStepUpDialog, OpenStepUpDialog, StepUpDialog } from "@/components/dialogs/step-up/step-up-dialog";
import { configsService } from "@/services/configs";
import { MaterialSchemes, MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { AppConfigs, ColorScheme, ColorSchemeConfigChange, colorSchemeConfigsToMaterialSchemeName, ColorSchemeContrast, ColorSchemeContrastIcons, CONFIG_COLOR_CONTRAST_NAMES, CONFIG_COLOR_SCHEME_NAMES, DEFAULT_APP_CONFIGS, FabConfig, FabConfigChange, FabPosition, FabPositionIcons, FabPositions, fabPositionToUi, FabStyles, fabStyleToUi } from "@/types/configs";
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

        --md-radio-pressed-icon-color: var(--md-sys-color-error);
        --md-radio-selected-icon-color: var(--md-sys-color-error);
        --md-radio-selected-focus-icon-color: var(--md-sys-color-error);
        --md-radio-selected-hover-icon-color: var(--md-sys-color-error);
        --md-radio-selected-pressed-icon-color: var(--md-sys-color-error);

        --md-outlined-button-label-text-color: var(--md-sys-color-outline);

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
        min-width: calc(100dvw - 10rem);
        max-width: calc(100dvw - 2rem);
        max-height: calc(100dvh - 10rem);

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
      }

      dark-mode-toggle {
        place-items: center;

        --dark-mode-toggle-icon-size: 2rem;

        --dark-mode-toggle-dark-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23BA1A1A"><path d="M481.15-140Q339-140 240.08-238.92 141.16-337.85 141.16-480q0-118.38 73.26-210.46 73.27-92.08 195.19-118.69 12.62-3.16 22.23.61 9.62 3.77 15.62 11.23 6 7.47 7.08 18.12 1.07 10.65-5 21.27-12.39 22.54-18.39 46.83t-6 51.09q0 98.33 68.84 167.17Q562.82-424 661.15-424q29.47 0 56.31-7.46 26.85-7.46 47-17.31 9.85-4.3 19.23-3.04 9.39 1.27 16.02 6.27 7.37 5 10.94 13.66 3.58 8.65.81 20.34-21.31 118-114.81 194.77Q603.15-140 481.15-140Zm0-60q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T365.15-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z"/></svg>');
        --dark-mode-toggle-light-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23BA1A1A"><path d="M352.54-352.54Q300-405.08 300-480q0-74.92 52.54-127.46Q405.08-660 480-660q74.92 0 127.46 52.54Q660-554.92 660-480q0 74.92-52.54 127.46Q554.92-300 480-300q-74.92 0-127.46-52.54ZM72.69-457.31q-9.66 0-16.18-6.56Q50-470.44 50-480.18q0-9.74 6.51-16.13 6.52-6.38 16.18-6.38h104.62q9.66 0 16.18 6.56 6.51 6.57 6.51 16.31 0 9.74-6.51 16.13-6.52 6.38-16.18 6.38H72.69Zm710 0q-9.66 0-16.18-6.56-6.51-6.57-6.51-16.31 0-9.74 6.51-16.13 6.52-6.38 16.18-6.38h104.62q9.66 0 16.17 6.56 6.52 6.57 6.52 16.31 0 9.74-6.52 16.13-6.51 6.38-16.17 6.38H782.69Zm-319-309.2q-6.38-6.52-6.38-16.18v-104.62q0-9.66 6.56-16.17 6.57-6.52 16.31-6.52 9.74 0 16.13 6.52 6.38 6.51 6.38 16.17v104.62q0 9.66-6.56 16.18-6.57 6.51-16.31 6.51-9.74 0-16.13-6.51Zm0 710q-6.38-6.52-6.38-16.18v-104.62q0-9.66 6.56-16.18 6.57-6.51 16.31-6.51 9.74 0 16.13 6.51 6.38 6.52 6.38 16.18v104.62q0 9.66-6.56 16.18Q489.56-50 479.82-50q-9.74 0-16.13-6.51Zm-213.3-621.87-60.47-59.08q-6.69-6.69-6.48-16.15.21-9.46 6.38-16.57 7.11-6.97 16.37-6.97 9.27 0 16.35 7.07L282-710q6.46 7.15 6.46 16.04 0 8.88-6.46 15.49-6.08 6.55-15.31 6.55t-16.3-6.46Zm487.07 488.46L678-250q-6.46-7.13-6.46-16.21 0-9.08 6.96-15.79 6.19-7.08 15.11-6.88 8.93.19 16 7.26l60.47 59.08q6.69 6.69 6.48 16.15-.21 9.46-6.38 16.57-7.11 6.97-16.37 6.97-9.27 0-16.35-7.07ZM678-678q-7.08-6.69-6.88-15.61.19-8.93 7.26-16l59.08-60.47q6.69-6.69 16.15-6.48 9.46.21 16.57 6.38 6.97 7.11 6.97 16.37 0 9.27-7.07 16.35L710-678q-6.46 6.46-15.57 6.46-9.12 0-16.43-6.46ZM189.82-189.82q-6.97-7.11-6.97-16.37 0-9.27 7.07-16.35L250-282q7.03-7.08 15.98-7.08 8.94 0 15.8 7.08 6.91 6.69 6.72 15.61-.19 8.93-6.88 16l-59.08 60.47q-7.08 7.07-16.35 6.86-9.26-.21-16.37-6.76Z"/></svg>');
        --dark-mode-toggle-system-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23BA1A1A"><path d="M481-210q-54.08 0-103.15-20.42-49.08-20.43-87.54-58.89-38.46-38.46-58.89-87.54Q211-425.92 211-480q0-45.61 14.5-87.88 14.5-42.27 42.5-77.58 11.08-13.23 28.54-9.5 17.46 3.73 24.69 21.42 21.38 53.46 52.5 100.73t71.96 88.12q40.85 40.84 88.12 71.96 47.27 31.12 100.73 52.5 17.69 7.23 21.42 24.69 3.73 17.46-9.5 28.54-35.31 28-77.58 42.5Q526.61-210 481-210Zm221.85-179.31q-12.16-3.84-17.43-15.5-5.27-11.65-2.65-24.42 14-53.38-.23-106.23t-54.23-92.85q-39.23-39.23-91.85-53.73-52.61-14.5-105-1.5-12.38 2.62-23.73-2.65t-15.81-17.04q-4.46-11.77 1.12-22.92 5.57-11.16 17.34-14.39 69-18.84 139.16-.88 70.15 17.96 122.54 70.34 51.77 51.77 69.84 121.73 18.08 69.97-.38 138.97-3.23 12.77-14.58 18.84-11.35 6.08-24.11 2.23ZM480-834.61q-12.77 0-21.38-8.62-8.62-8.62-8.62-21.38v-47.7q0-12.77 8.62-21.38 8.61-8.62 21.38-8.62t21.38 8.62q8.62 8.61 8.62 21.38v47.7q0 12.76-8.62 21.38-8.61 8.62-21.38 8.62Zm0 816.92q-12.77 0-21.38-8.62Q450-34.92 450-47.69v-47.7q0-12.76 8.62-21.38 8.61-8.62 21.38-8.62t21.38 8.62q8.62 8.62 8.62 21.38v47.7q0 12.77-8.62 21.38-8.61 8.62-21.38 8.62Zm251.15-712.85q-9.3-9.31-9.3-21.38 0-12.08 9.3-21.39l32.62-32.61q8.31-8.31 20.58-8.5 12.26-.19 21.57 8.5 9.31 9.31 9.31 21.38 0 12.08-9.31 21.39l-32.61 32.61q-8.93 8.92-20.89 9.12-11.96.19-21.27-9.12ZM154.08-154.08q-9.31-9.31-9.31-21.38 0-12.08 9.31-21.39l32.61-32.61q8.93-8.92 20.89-9.12 11.96-.19 21.27 9.12 9.3 9.31 9.3 21.38 0 12.08-9.3 21.39l-32.62 32.61q-8.31 8.31-20.58 8.5-12.26.19-21.57-8.5ZM864.61-450q-12.76 0-21.38-8.62-8.62-8.61-8.62-21.38t8.62-21.38q8.62-8.62 21.38-8.62h47.7q12.77 0 21.38 8.62 8.62 8.61 8.62 21.38t-8.62 21.38q-8.61 8.62-21.38 8.62h-47.7Zm-816.92 0q-12.77 0-21.38-8.62-8.62-8.61-8.62-21.38t8.62-21.38Q34.92-510 47.69-510h47.7q12.76 0 21.38 8.62 8.62 8.61 8.62 21.38t-8.62 21.38Q108.15-450 95.39-450h-47.7Zm758.23 295.92q-9.31 9.31-21.38 9.31-12.08 0-21.39-9.31l-32.61-32.61q-8.92-8.93-9.12-20.89-.19-11.96 9.12-21.27 9.31-9.3 21.38-9.3 12.08 0 21.39 9.3l32.61 32.62q8.31 8.31 8.5 20.58.19 12.26-8.5 21.57ZM229.46-731.15q-9.31 9.3-21.38 9.3-12.08 0-21.39-9.3l-32.61-32.62q-8.31-8.31-8.5-20.58-.19-12.26 8.5-21.57 9.31-9.31 21.38-9.31 12.08 0 21.39 9.31l32.61 32.61q8.92 8.93 9.12 20.89.19 11.96-9.12 21.27Z"/></svg>');
        --dark-mode-toggle-checkbox-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23BA1A1A"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
        --dark-mode-toggle-remember-icon-checked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23BA1A1A"><path d="m424-410.15-92.92-92.93q-8.31-8.3-20.89-8.5-12.57-.19-21.27 8.5-8.69 8.7-8.69 21.08 0 12.38 8.69 21.08l109.77 109.77q10.85 10.84 25.31 10.84 14.46 0 25.31-10.84l222.54-222.54q8.3-8.31 8.5-20.89.19-12.57-8.5-21.27-8.7-8.69-21.08-8.69-12.38 0-21.08 8.69L424-410.15ZM212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-760v560-560Z"/></svg>');
        --dark-mode-toggle-remember-icon-unchecked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23BA1A1A"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');

        --dark-mode-toggle-color: var(--md-sys-color-on-surface-variant);
        --dark-mode-toggle-background-color: transparent;
        --dark-mode-toggle-active-mode-background-color: transparent;

        --dark-mode-toggle-legend-font: var(--md-ref-typeface-brand);
        --dark-mode-toggle-label-font: var(--md-ref-typeface-brand);
        --dark-mode-toggle-remember-font: var(--md-ref-typeface-brand);

        --dark-mode-toggle-icon-filter: none;
        --dark-mode-toggle-remember-filter: contrast(100%);

        &::part(fieldset) {
          padding: unset;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        &::part(threeWayRadioWrapper) {
          position: relative;
          z-index: 0;
          border-radius: 1rem;
          border-color: var(--md-sys-color-on-secondary-container);
          border-width: 1px;
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
            color: var(--md-sys-color-on-secondary-container);
          }
        }

        &:is([mode="light"][permanent]) {
          &::part(threeWayRadioWrapper)::before {
            transform: translateX(0%);
          }
          &::part(lightThreeWayLabel) {
            color: var(--md-sys-color-on-secondary-container);
          }
        }

        &:is([mode="dark"][permanent]) {
          &::part(threeWayRadioWrapper)::before {
            transform: translateX(200%);
          }
          &::part(darkThreeWayLabel) {
            color: var(--md-sys-color-on-secondary-container);
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
        }
      }

      dark-mode-toggle.dark {
        --dark-mode-toggle-dark-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23FFB4AB"><path d="M481.15-140Q339-140 240.08-238.92 141.16-337.85 141.16-480q0-118.38 73.26-210.46 73.27-92.08 195.19-118.69 12.62-3.16 22.23.61 9.62 3.77 15.62 11.23 6 7.47 7.08 18.12 1.07 10.65-5 21.27-12.39 22.54-18.39 46.83t-6 51.09q0 98.33 68.84 167.17Q562.82-424 661.15-424q29.47 0 56.31-7.46 26.85-7.46 47-17.31 9.85-4.3 19.23-3.04 9.39 1.27 16.02 6.27 7.37 5 10.94 13.66 3.58 8.65.81 20.34-21.31 118-114.81 194.77Q603.15-140 481.15-140Zm0-60q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T365.15-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z"/></svg>');
        --dark-mode-toggle-light-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23FFB4AB"><path d="M352.54-352.54Q300-405.08 300-480q0-74.92 52.54-127.46Q405.08-660 480-660q74.92 0 127.46 52.54Q660-554.92 660-480q0 74.92-52.54 127.46Q554.92-300 480-300q-74.92 0-127.46-52.54ZM72.69-457.31q-9.66 0-16.18-6.56Q50-470.44 50-480.18q0-9.74 6.51-16.13 6.52-6.38 16.18-6.38h104.62q9.66 0 16.18 6.56 6.51 6.57 6.51 16.31 0 9.74-6.51 16.13-6.52 6.38-16.18 6.38H72.69Zm710 0q-9.66 0-16.18-6.56-6.51-6.57-6.51-16.31 0-9.74 6.51-16.13 6.52-6.38 16.18-6.38h104.62q9.66 0 16.17 6.56 6.52 6.57 6.52 16.31 0 9.74-6.52 16.13-6.51 6.38-16.17 6.38H782.69Zm-319-309.2q-6.38-6.52-6.38-16.18v-104.62q0-9.66 6.56-16.17 6.57-6.52 16.31-6.52 9.74 0 16.13 6.52 6.38 6.51 6.38 16.17v104.62q0 9.66-6.56 16.18-6.57 6.51-16.31 6.51-9.74 0-16.13-6.51Zm0 710q-6.38-6.52-6.38-16.18v-104.62q0-9.66 6.56-16.18 6.57-6.51 16.31-6.51 9.74 0 16.13 6.51 6.38 6.52 6.38 16.18v104.62q0 9.66-6.56 16.18Q489.56-50 479.82-50q-9.74 0-16.13-6.51Zm-213.3-621.87-60.47-59.08q-6.69-6.69-6.48-16.15.21-9.46 6.38-16.57 7.11-6.97 16.37-6.97 9.27 0 16.35 7.07L282-710q6.46 7.15 6.46 16.04 0 8.88-6.46 15.49-6.08 6.55-15.31 6.55t-16.3-6.46Zm487.07 488.46L678-250q-6.46-7.13-6.46-16.21 0-9.08 6.96-15.79 6.19-7.08 15.11-6.88 8.93.19 16 7.26l60.47 59.08q6.69 6.69 6.48 16.15-.21 9.46-6.38 16.57-7.11 6.97-16.37 6.97-9.27 0-16.35-7.07ZM678-678q-7.08-6.69-6.88-15.61.19-8.93 7.26-16l59.08-60.47q6.69-6.69 16.15-6.48 9.46.21 16.57 6.38 6.97 7.11 6.97 16.37 0 9.27-7.07 16.35L710-678q-6.46 6.46-15.57 6.46-9.12 0-16.43-6.46ZM189.82-189.82q-6.97-7.11-6.97-16.37 0-9.27 7.07-16.35L250-282q7.03-7.08 15.98-7.08 8.94 0 15.8 7.08 6.91 6.69 6.72 15.61-.19 8.93-6.88 16l-59.08 60.47q-7.08 7.07-16.35 6.86-9.26-.21-16.37-6.76Z"/></svg>');
        --dark-mode-toggle-system-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23FFB4AB"><path d="M481-210q-54.08 0-103.15-20.42-49.08-20.43-87.54-58.89-38.46-38.46-58.89-87.54Q211-425.92 211-480q0-45.61 14.5-87.88 14.5-42.27 42.5-77.58 11.08-13.23 28.54-9.5 17.46 3.73 24.69 21.42 21.38 53.46 52.5 100.73t71.96 88.12q40.85 40.84 88.12 71.96 47.27 31.12 100.73 52.5 17.69 7.23 21.42 24.69 3.73 17.46-9.5 28.54-35.31 28-77.58 42.5Q526.61-210 481-210Zm221.85-179.31q-12.16-3.84-17.43-15.5-5.27-11.65-2.65-24.42 14-53.38-.23-106.23t-54.23-92.85q-39.23-39.23-91.85-53.73-52.61-14.5-105-1.5-12.38 2.62-23.73-2.65t-15.81-17.04q-4.46-11.77 1.12-22.92 5.57-11.16 17.34-14.39 69-18.84 139.16-.88 70.15 17.96 122.54 70.34 51.77 51.77 69.84 121.73 18.08 69.97-.38 138.97-3.23 12.77-14.58 18.84-11.35 6.08-24.11 2.23ZM480-834.61q-12.77 0-21.38-8.62-8.62-8.62-8.62-21.38v-47.7q0-12.77 8.62-21.38 8.61-8.62 21.38-8.62t21.38 8.62q8.62 8.61 8.62 21.38v47.7q0 12.76-8.62 21.38-8.61 8.62-21.38 8.62Zm0 816.92q-12.77 0-21.38-8.62Q450-34.92 450-47.69v-47.7q0-12.76 8.62-21.38 8.61-8.62 21.38-8.62t21.38 8.62q8.62 8.62 8.62 21.38v47.7q0 12.77-8.62 21.38-8.61 8.62-21.38 8.62Zm251.15-712.85q-9.3-9.31-9.3-21.38 0-12.08 9.3-21.39l32.62-32.61q8.31-8.31 20.58-8.5 12.26-.19 21.57 8.5 9.31 9.31 9.31 21.38 0 12.08-9.31 21.39l-32.61 32.61q-8.93 8.92-20.89 9.12-11.96.19-21.27-9.12ZM154.08-154.08q-9.31-9.31-9.31-21.38 0-12.08 9.31-21.39l32.61-32.61q8.93-8.92 20.89-9.12 11.96-.19 21.27 9.12 9.3 9.31 9.3 21.38 0 12.08-9.3 21.39l-32.62 32.61q-8.31 8.31-20.58 8.5-12.26.19-21.57-8.5ZM864.61-450q-12.76 0-21.38-8.62-8.62-8.61-8.62-21.38t8.62-21.38q8.62-8.62 21.38-8.62h47.7q12.77 0 21.38 8.62 8.62 8.61 8.62 21.38t-8.62 21.38q-8.61 8.62-21.38 8.62h-47.7Zm-816.92 0q-12.77 0-21.38-8.62-8.62-8.61-8.62-21.38t8.62-21.38Q34.92-510 47.69-510h47.7q12.76 0 21.38 8.62 8.62 8.61 8.62 21.38t-8.62 21.38Q108.15-450 95.39-450h-47.7Zm758.23 295.92q-9.31 9.31-21.38 9.31-12.08 0-21.39-9.31l-32.61-32.61q-8.92-8.93-9.12-20.89-.19-11.96 9.12-21.27 9.31-9.3 21.38-9.3 12.08 0 21.39 9.3l32.61 32.62q8.31 8.31 8.5 20.58.19 12.26-8.5 21.57ZM229.46-731.15q-9.31 9.3-21.38 9.3-12.08 0-21.39-9.3l-32.61-32.62q-8.31-8.31-8.5-20.58-.19-12.26 8.5-21.57 9.31-9.31 21.38-9.31 12.08 0 21.39 9.31l32.61 32.61q8.92 8.93 9.12 20.89.19 11.96-9.12 21.27Z"/></svg>');
        --dark-mode-toggle-checkbox-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23FFB4AB"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
        --dark-mode-toggle-remember-icon-checked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23FFB4AB"><path d="m424-410.15-92.92-92.93q-8.31-8.3-20.89-8.5-12.57-.19-21.27 8.5-8.69 8.7-8.69 21.08 0 12.38 8.69 21.08l109.77 109.77q10.85 10.84 25.31 10.84 14.46 0 25.31-10.84l222.54-222.54q8.3-8.31 8.5-20.89.19-12.57-8.5-21.27-8.7-8.69-21.08-8.69-12.38 0-21.08 8.69L424-410.15ZM212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-760v560-560Z"/></svg>');
        --dark-mode-toggle-remember-icon-unchecked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23FFB4AB"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
      }

      fieldset {
        border-color: var(--md-sys-color-outline);
        border-radius: var(--md-sys-shape-corner-small);
        padding: 1rem;

        label md-radio {
          margin-inline-end: 0.5rem;
        }
        md-outlined-select {
          width: 100%;
        }

        &.contrast {
          display: contents;
        }
      }

      fieldset.color_scheme,
      fieldset.fab {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        gap: 1.5rem;

        fieldset {
          border-color: var(--md-sys-color-outline);
          border-radius: var(--md-sys-shape-corner-small);
          padding-block: 1.5rem;
        }
      }

      fieldset.color_scheme {
        ::part(legend),
        fieldset legend {
          text-align: center;
          width: 100%;
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
  private _settingsMDDialog!: MdDialog;

  @query("#dark-mode-toggle")
  private _darkModeToggle!: DarkModeToggle;


  @query("#step-up-dialog")
  private _stepUpDialog!: StepUpDialog;

  @state()
  private _darkModeEnabled: boolean = false;

  @state()
  private _appConfigs: AppConfigs = configsService.loadConfigs();

  constructor() {
    super();
    this._appConfigs = configsService.loadConfigs();
  }

  public showDialog(): Promise<void> {
    return this._settingsMDDialog.show();
  };

  public hideDialog(): Promise<void> {
    return this._settingsMDDialog.close();
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
      this.onColorSchemeContrastChange(this._appConfigs.colorScheme.contrast);
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
    this.onColorSchemeContrastChange(
      this._appConfigs.colorScheme.contrast
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

  private onColorSchemeContrastChange(
    contrast: ColorSchemeContrast,
  ) {
    this._appConfigs = {
      ...this._appConfigs,
      colorScheme: {
        ...this._appConfigs.colorScheme,
        contrast
      }
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
      MaterialSchemes[colorSchemeConfigsToMaterialSchemeName(this._appConfigs.colorScheme)]
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
            .menuPositioning=${"popover"}
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
        <legend>UI Variant &amp; Contrast</legend>

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
            @change=${(event: Event) => this.onColorSchemeContrastChange((event.target as HTMLSelectElement).value as ColorSchemeContrast)}
            supportingText=${"Choose from Normal, Medium, and High Contrast Color Palettes"}
            .menuPositioning=${"popover"}
            .hasLeadingIcon=${true}
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