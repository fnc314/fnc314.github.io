import { configsService } from "@/services/configs/configs-service";
import { themeService } from "@/services/theme/theme-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { type AppConfigs, type AppConfigsChange } from "@/types/configs/app-configs";
import {
    CONFIG_COLOR_SCHEME_NAMES,
    type ColorScheme,
    colorSchemeConfigsToMaterialSchemeName
} from "@/types/theme/color-scheme-configs";
import {
    type ColorSchemeChangeEvent,
    DarkModeToggle,
    type PermanentColorSchemeEvent,
} from "dark-mode-toggle";
import { LitElement, type TemplateResult, css, html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary A standalone component for managing and toggling the UI color scheme (light, dark, system)
 *   and persistence. This component acts as a wrapper around the `dark-mode-toggle` custom element,
 *   integrating its functionality with the application's global `configsService` for state management
 *   and `themeService` for dynamic theme application.
 *
 * @element ui-mode-toggle
 *
 * @property {"light" | "dark" | "system"} mode - Reflects the currently active color scheme mode.
 * @property {boolean} permanent - Controls whether the selected color scheme preference is persisted across sessions.
 *
 * @fires color_scheme.change - Dispatched when the UI mode (light/dark/system) or color scheme contrast is changed,
 *   propagating the new `AppConfigs["colorScheme"]` details.
 * @fires colorschemechange - Event from `dark-mode-toggle` when the scheme changes.
 * @fires permanentcolorscheme - Event from `dark-mode-toggle` when the persistence changes.
 *
 * @remarks
 * The component applies custom styling to the encapsulated `dark-mode-toggle` using CSS parts
 * to align with the application's Material Design 3 aesthetic.
 */
@customElement("ui-mode-toggle")
export class UiModeToggle extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
      }

      dark-mode-toggle {
        --dark-mode-toggle-icon-size: 2rem;
        --dark-mode-toggle-dark-icon: url("./icons/components/configs-dialog/dark-mode.svg");
        --dark-mode-toggle-light-icon: url("./icons/components/configs-dialog/light-mode.svg");
        --dark-mode-toggle-system-icon: url("./icons/components/configs-dialog/system.svg");
        --dark-mode-toggle-checkbox-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
        --dark-mode-toggle-remember-icon-checked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="m424-410.15-92.92-92.93q-8.31-8.3-20.89-8.5-12.57-.19-21.27 8.5-8.69 8.7-8.69 21.08 0 12.38 8.69 21.08l109.77 109.77q10.85 10.84 25.31 10.84 14.46 0 25.31-10.84l222.54-222.54q8.3-8.31 8.5-20.89.19-12.57-8.5-21.27-8.7-8.69-21.08-8.69-12.38 0-21.08 8.69L424-410.15ZM212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
        --dark-mode-toggle-remember-icon-unchecked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
        --dark-mode-toggle-color: var(--md-sys-color-on-surface-variant);
        --dark-mode-toggle-background-color: transparent;
        --dark-mode-toggle-active-mode-background-color: transparent;
        --dark-mode-toggle-legend-font: var(--md-ref-typeface-brand);
        --dark-mode-toggle-label-font: var(--md-ref-typeface-brand);
        --dark-mode-toggle-remember-font: var(--md-ref-typeface-brand);
        --dark-mode-toggle-icon-filter: none;
        --dark-mode-toggle-remember-filter: contrast(100%);

        display: contents;
        place-items: center;

        &::part(form) {
          display: contents;
        }

        &::part(fieldset) {
          display: flex;
          flex-direction: column;
          gap: var(--spaces-gap-xxs);
          padding: unset;
          padding-block: unset;
          padding-inline: unset;
        }

        &::part(legend) {
          padding: var(--spaces-none);
          margin: var(--spaces-none);
          padding-block-end: var(--spaces-padding-xs);
          margin-block-end: var(--spaces-margin-xs);
          border-bottom: var(--hairline-width) solid var(--md-sys-color-outline-variant);
          color: var(--md-sys-color-primary);
          font-family: var(--md-ref-typeface-brand);
          font-size: var(--md-sys-typescale-label-large-size);
        }

        &::part(permanentLabel) {
          color: var(--md-sys-color-on-surface-variant);
          font-size: var(--md-sys-typescale-label-large-size);
          vertical-align: middle;
          display: inline-block;
        }

        &::part(threeWayRadioWrapper) {
          border-color: var(--md-sys-color-on-surface-variant);
          border-radius: var(--md-sys-shape-corner-medium);
          border-style: solid;
          border-width: var(--hairline-width);
          display: inline-flex;
          padding: var(--spaces-none);
          padding-block-start: var(--spaces-padding-xs);
          overflow: hidden;
          position: relative;
          z-index: 0;
        }

        &::part(threeWayRadioWrapper)::before {
          background-color: var(--md-sys-color-surface-container);
          border-radius: inherit;
          bottom: 0;
          content: "";
          position: absolute;
          top: 0;
          transition: transform 0.3s ease-in-out;
          width: calc(100% / 3);
          z-index: -1;
        }

        &::part(darkThreeWayLabel),
        &::part(lightThreeWayLabel),
        &::part(systemThreeWayLabel) {
          flex: 1;
          padding: var(--spaces-padding-s);
          position: relative;
          text-align: center;
          z-index: 1;
        }

        &:not([permanent]) {
          &::part(threeWayRadioWrapper)::before {
            transform: translateX(100%);
            background-color: var(--md-sys-color-primary-container);
          }

          &::part(systemThreeWayLabel) {
            --dark-mode-toggle-system-icon: url("./icons/components/configs-dialog/system-filled.svg");
            color: var(--md-sys-color-on-primary-container);
          }
        }

        &:is([mode="light"][permanent]) {
          &::part(threeWayRadioWrapper)::before {
            transform: translateX(0%);
            background-color: var(--md-sys-color-primary-container);
          }

          &::part(lightThreeWayLabel) {
            color: var(--md-sys-color-on-primary-container);
            --dark-mode-toggle-light-icon: url("./icons/components/configs-dialog/light-mode-filled.svg");
          }
        }

        &:is([mode="dark"][permanent]) {
          &::part(threeWayRadioWrapper)::before {
            transform: translateX(200%);
            background-color: var(--md-sys-color-primary-container);
          }

          &::part(darkThreeWayLabel) {
            color: var(--md-sys-color-on-primary-container);
            --dark-mode-toggle-dark-icon: url("./icons/components/configs-dialog/dark-mode-filled.svg");
          }
        }

        &::part(lightThreeWayRadio),
        &::part(darkThreeWayRadio),
        &::part(systemThreeWayRadio) {
          /* Take the radio buttons out of the layout flow.
    The component's internal styles already set opacity to 0. */
          position: absolute;
        }

        &::part(aside) {
          text-align: center;
          visibility: visible;
        }
      }

      dark-mode-toggle.dark {
        --dark-mode-toggle-checkbox-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
        --dark-mode-toggle-remember-icon-checked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="m424-410.15-92.92-92.93q-8.31-8.3-20.89-8.5-12.57-.19-21.27 8.5-8.69 8.7-8.69 21.08 0 12.38 8.69 21.08l109.77 109.77q10.85 10.84 25.31 10.84 14.46 0 25.31-10.84l222.54-222.54q8.3-8.31 8.5-20.89.19-12.57-8.5-21.27-8.7-8.69-21.08-8.69-12.38 0-21.08 8.69L424-410.15ZM212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
        --dark-mode-toggle-remember-icon-unchecked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
      }
    `,
  ];

  @query("#dark-mode-toggle")
  private _darkModeToggle!: DarkModeToggle;

  @property({ type: String })
  mode: "light" | "dark" | "system" = "system";

  @property({ type: Boolean })
  permanent = false;

  @state()
  private _appConfigs: AppConfigs = configsService.loadConfigs();

  constructor() {
    super();
    this._appConfigs = configsService.loadConfigs();
  }

  override connectedCallback(): void {
    super.connectedCallback();
    configsService.addEventListener("app-configs.change", this.onAppConfigsChange);
    document.addEventListener("colorschemechange", this.colorSchemeChangeEventListener);
    document.addEventListener("permanentcolorscheme", this.permanentColorSchemeEventListener);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    configsService.removeEventListener("app-configs.change", this.onAppConfigsChange);
    document.removeEventListener("colorschemechange", this.colorSchemeChangeEventListener);
    document.removeEventListener("permanentcolorscheme", this.permanentColorSchemeEventListener);
  }

  private onAppConfigsChange = (event: Event) => {
    this._appConfigs = (event as AppConfigsChange).detail.appConfigs;
    this.mode = this._appConfigs.colorScheme.name.toLowerCase() as "light" | "dark" | "system";
    this.permanent = this._appConfigs.colorScheme.persist;
  };

  private colorSchemeChangeEventListener = (event: ColorSchemeChangeEvent) => {
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

  /**
   * Resets the UI mode toggle to its default settings.
   */
  public reset(): void {
    this._darkModeToggle.permanent = false;
    this.onColorThemeModeContrastChange(configsService.loadConfigs().colorScheme);
  }

  override render(): TemplateResult {
    const classes = {
      dark: this.mode === "dark",
    };

    return html`
      <dark-mode-toggle
        id="dark-mode-toggle"
        class="variant ${classMap(classes)}"
        .mode=${this.mode}
        ?permanent=${this.permanent}
        appearance="three-way"
        legend="UI Variant"
        system="System"
        light="Light"
        dark="Dark"
        remember="Persist UI Variant"
      ></dark-mode-toggle>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-mode-toggle": UiModeToggle;
  }
}
