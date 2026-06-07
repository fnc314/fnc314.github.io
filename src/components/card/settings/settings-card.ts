import { configsService } from "@/services/configs/configs-service";
import { themeService } from "@/services/theme/theme-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { type AppConfigs } from "@/types/configs/app-configs";
import { CONFIG_COLOR_CONTRAST_NAMES, type ColorSchemeContrast, colorSchemeConfigsToMaterialSchemeName } from "@/types/theme/color-scheme-configs";
import { THEME_NAMES, type ThemeName } from "@/types/theme/theme";
import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { abbreviatedSha as gitSha } from "~build/git";
import { version as buildVersion } from "~build/package";
import time from "~build/time";

import "@/components/card/bento/bento-card";
import "@/components/ui-mode-toggle/ui-mode-toggle";

/**
 * @summary A card component for managing application settings, including theme, contrast, and UI mode.
 *
 * @element settings-card
 */
@customElement("settings-card")
export class SettingsCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        height: 100%;
      }

      .settings-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-s);
        height: 100%;
      }

      .configs-form {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-s);
        flex: 1;
        justify-content: space-between;
      }

      .form-field {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-xxs);
      }

      .form-field label {
        font-size: var(--md-sys-typescale-label-large-size);
        color: var(--md-sys-color-on-surface-variant);
      }

      .form-field select {
        padding: var(--spacing-padding-xs);
        border-radius: var(--md-sys-shape-corner-small);
        border: var(--hairline-width) solid var(--md-sys-color-outline);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        font-family: inherit;
        font-size: var(--md-sys-typescale-body-medium-size);
      }

      .version-tag {
        font-size: var(--md-sys-typescale-body-small-size);
        color: var(--md-sys-color-on-surface-variant);
        text-align: center;
        margin-top: auto;
        padding-top: var(--spacing-padding-m);
      }
    `,
  ];

  @state()
  private _appConfigs: AppConfigs = configsService.loadConfigs();

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  /**
   * Creates an {@link Intl.DateTimeFormat} and calls {@link Intl.DateTimeFormat.format}
   *   on {@link time} to render the user presented timestamp
   *
   * @private
   * @type {string}
   * @memberof SettingsCard
   */
  private formattedDate: string = new Intl.DateTimeFormat(
    navigator.languages,
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }
  ).format(time);

  override connectedCallback() {
    super.connectedCallback();
    this.id = "settings";
    configsService.addEventListener("app-configs.change", this.onAppConfigsChange);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    configsService.removeEventListener("app-configs.change", this.onAppConfigsChange);
  }

  private onAppConfigsChange = (event: Event) => {
    this._appConfigs = (event as any).detail.appConfigs;
    this.requestUpdate();
  };

  private _onThemeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as ThemeName;
    const newColorScheme = {
      ...this._appConfigs.colorScheme,
      theme: value,
    };
    this._dispatchColorSchemeChange(newColorScheme);
  }

  private _onContrastChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as ColorSchemeContrast;
    const newColorScheme = {
      ...this._appConfigs.colorScheme,
      contrast: value,
    };
    this._dispatchColorSchemeChange(newColorScheme);
  }

  private _dispatchColorSchemeChange(colorScheme: AppConfigs["colorScheme"]) {
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

  override render() {
    return html`
      <bento-card
        class="settings-container"
        aria-labelledby="settings-title"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
      >
        <h2 slot="header" id="settings-title" class="md-typescale-title-large">Settings</h2>
        <div class="configs-form">
          <div class="form-field">
            <label for="theme-select">UI Theme</label>
            <select id="theme-select" @change=${this._onThemeChange}>
              ${Object.values(THEME_NAMES).map(
                (theme) => html`
                  <option ?selected=${this._appConfigs.colorScheme.theme === theme} value=${theme}>
                    ${theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </option>
                `,
              )}
            </select>
          </div>

          <div class="form-field">
            <label for="contrast-select">UI Contrast</label>
            <select id="contrast-select" @change=${this._onContrastChange}>
              ${Object.values(CONFIG_COLOR_CONTRAST_NAMES).map(
                (contrast) => html`
                  <option ?selected=${this._appConfigs.colorScheme.contrast === contrast} value=${contrast}>
                    ${contrast.charAt(0) + contrast.slice(1).toLowerCase()}
                  </option>
                `,
              )}
            </select>
          </div>

          <ui-mode-toggle></ui-mode-toggle>

          <div class="version-tag">
            <div>Version: ${buildVersion} (Built: ${this.formattedDate})</div>
            <div>SHA: ${gitSha}</div>
          </div>
        </div>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "settings-card": SettingsCard;
  }
}
