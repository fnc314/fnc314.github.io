import { configsService } from "@/services/configs/configs-service";
import { themeService } from "@/services/theme/theme-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { type AppConfigs } from "@/types/configs/app-configs";
import { CONFIG_COLOR_CONTRAST_NAMES, type ColorSchemeContrast, colorSchemeConfigsToMaterialSchemeName } from "@/types/theme/color-scheme-configs";
import { THEME_NAMES, type ThemeName } from "@/types/theme/theme";
import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { abbreviatedSha as gitSha } from "~build/git";
import { version as buildVersion } from "~build/package";
import time from "~build/time";

import "@/components/ui-mode-toggle/ui-mode-toggle";

/**
 * @summary A card component for managing application settings, including theme, contrast, and UI mode.
 *
 * @element settings-card
 */
@customElement("settings-card")
export class SettingsCard extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        height: 100%;
      }

      .configs-form {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-s);
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
        font-size: 0.95rem;
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

  private formattedDate: string = new Intl.DateTimeFormat(navigator.languages, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(time);

  @state()
  private _debugFont: "roboto" | "inter" = (localStorage.getItem("debugger:font") as "roboto" | "inter") || "roboto";

  @state()
  private _debugIcons: "outlined" | "sharp" = (localStorage.getItem("debugger:icons") as "outlined" | "sharp") || "outlined";

  override connectedCallback() {
    super.connectedCallback();
    configsService.addEventListener("app-configs.change", this.onAppConfigsChange);
    // Apply initial debugger configurations to body/documentElement
    document.body.setAttribute("data-debug-font", this._debugFont);
    document.body.setAttribute("data-debug-icons", this._debugIcons);
  }

  private _toggleDebugFont() {
    const nextFont = this._debugFont === "roboto" ? "inter" : "roboto";
    this._debugFont = nextFont;
    localStorage.setItem("debugger:font", nextFont);
    document.body.setAttribute("data-debug-font", nextFont);
  }

  private _toggleDebugIcons() {
    const nextIcons = this._debugIcons === "outlined" ? "sharp" : "outlined";
    this._debugIcons = nextIcons;
    localStorage.setItem("debugger:icons", nextIcons);
    document.body.setAttribute("data-debug-icons", nextIcons);
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

        <div class="debugger-row">
          <span class="md-typescale-label-medium">Debugger Font:</span>
          <button
            class="debugger-toggle ${this._debugFont === "inter" ? "active" : ""}"
            @click=${this._toggleDebugFont}
          >
            Inter
          </button>
        </div>

        <div class="debugger-row">
          <span class="md-typescale-label-medium">Debugger Icons:</span>
          <button
            class="debugger-toggle ${this._debugIcons === "sharp" ? "active" : ""}"
            @click=${this._toggleDebugIcons}
          >
            Sharp
          </button>
        </div>

        <div class="version-tag">
          <div>Version: ${buildVersion} (Built: ${this.formattedDate})</div>
          <div>SHA: ${gitSha}</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "settings-card": SettingsCard;
  }
}
