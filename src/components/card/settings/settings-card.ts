import { configsService } from "@/services/configs/configs-service";
import { themeService } from "@/services/theme/theme-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { type AppConfigs } from "@/types/configs/app-configs";
import { CONFIG_COLOR_CONTRAST_NAMES, type ColorSchemeContrast, colorSchemeConfigsToMaterialSchemeName } from "@/types/theme/color-scheme-configs";
import { THEME_NAMES, type ThemeName } from "@/types/theme/theme";
import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import "@material/web/select/outlined-select";
import "@material/web/select/select-option";

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
        gap: var(--spacing-gap-s);
        height: 100%;
      }

      .settings-content {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: var(--spacing-gap-m); /* Gap between form and version-tag */
        justify-content: space-between;

        form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-gap-xl); /* Gap between fieldsets and ui-mode-toggle */
          flex: 1;
          padding: var(--spacing-reset); /* Remove default form padding */
          border: none; /* Remove default form border */

          fieldset {
            border: none;
            margin: var(--spacing-reset);
            padding: var(--spacing-reset);
            display: flex;
            flex-direction: column;
            gap: var(--spacing-gap-s); /* Gap between label and select within a fieldset */

            legend {
              padding: var(--spacing-reset);
              margin: var(--spacing-reset);
              padding-block-end: var(--spacing-padding-xxs);
              border-bottom: var(--hairline-width) solid var(--md-sys-color-outline-variant);
              color: var(--md-sys-color-primary);
              font-family: var(--md-ref-typeface-brand);
            }

            md-outlined-select {
              padding-block-start: var(--spacing-padding-s);
            }
          }
        }

        version-tag {
          padding-block-start: var(--spacing-padding-m);
        }
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
        <div class="settings-content">
          <form>
            <fieldset>
              <legend class="md-typescale-label-large">UI Theme</legend>
              <md-outlined-select
                label="Theme"
                id="theme-select"
                @change=${this._onThemeChange}
                .value=${this._appConfigs.colorScheme.theme}
              >
                ${Object.values(THEME_NAMES).map(
                  (theme) => html`
                    <md-select-option value=${theme}>
                      <div slot="headline">${theme.charAt(0).toUpperCase() + theme.slice(1)}</div>
                    </md-select-option>
                  `,
                )}
              </md-outlined-select>
            </fieldset>

            <fieldset>
              <legend class="md-typescale-label-large">UI Contrast</legend>
              <md-outlined-select
                label="Contrast"
                id="contrast-select"
                @change=${this._onContrastChange}
                .value=${this._appConfigs.colorScheme.contrast}
              >
                ${Object.values(CONFIG_COLOR_CONTRAST_NAMES).map(
                  (contrast) => html`
                    <md-select-option value=${contrast}>
                      <div slot="headline">${contrast.charAt(0) + contrast.slice(1).toLowerCase()}</div>
                    </md-select-option>
                  `,
                )}
              </md-outlined-select>
            </fieldset>

            <ui-mode-toggle></ui-mode-toggle>
          </form>

          <version-tag></version-tag>
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
