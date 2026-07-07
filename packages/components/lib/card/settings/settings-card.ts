import "@/lib/card/bento/bento-card";
import { SettingsCardStyles } from "@/lib/card/settings/settings-card.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import "@/lib/ui-mode-toggle/ui-mode-toggle";
import { MaterialCSSStyleSheet, colorSchemeConfigsToMaterialSchemeName, configsService, themeService } from "@fnc314/packages.services";
import { type AppConfigs, BENTO_BOX_TYPES, CONFIG_COLOR_CONTRAST_NAMES, type ColorSchemeContrast, THEME_NAMES, type ThemeName } from "@fnc314/packages.types";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

/**
 * @summary A card component for managing application settings, including theme, contrast, and UI mode.
 *
 * @element settings-card
 */
@customElement("settings-card")
export class SettingsCard extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [
    TextStyles,
    SettingsCardStyles,
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

    MaterialCSSStyleSheet.replaceSync(
      themeService.currentThemeConfig().materialSchemes[
        colorSchemeConfigsToMaterialSchemeName(this._appConfigs.colorScheme)
      ].cssText,
    );
  }

  override render() {
    return html`
      <bento-card
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Settings"}
        .bentoTag=${BENTO_BOX_TYPES.settings}
      >
        <div class="settings-content">
          <form toolname="adjustSiteDisplayConfigurations" tooldescription="Adjusts the theme, light/dark/system mode (and persistence), and color-contrast levels for the site">
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
