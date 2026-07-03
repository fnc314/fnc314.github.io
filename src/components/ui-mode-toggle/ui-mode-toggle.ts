import { UIModeToggleStyles } from "@/components/ui-mode-toggle/ui-mode-toggle.styles";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { configsService } from "@/services/configs/configs-service";
import { themeService } from "@/services/theme/theme-service";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { TextStyles } from "@/styles/text";
import { colorSchemeConfigsToMaterialSchemeName } from "@/types/theme";
import {
  type AppConfigs, type AppConfigsChange, CONFIG_COLOR_SCHEME_NAMES,
  type ColorScheme
} from "@fnc314/packages.types";
import {
  type ColorSchemeChangeEvent,
  DarkModeToggle,
  type PermanentColorSchemeEvent,
} from "dark-mode-toggle";
import { type TemplateResult, html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary A standalone component for managing and toggling the UI color scheme (light, dark, system)
 *   and persistence. This component acts as a wrapper around the `dark-mode-toggle` custom element,
 *   integrating its functionality with the application"s global `configsService` for state management
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
 * to align with the application"s Material Design 3 aesthetic.
 */
@customElement("ui-mode-toggle")
export class UiModeToggle extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    UIModeToggleStyles
  ];

  @query("#dark-mode-toggle")
  private _darkModeToggle!: DarkModeToggle;

  @property({ type: String })
  mode: "light" | "dark" | "system" = "system";

  @property({ type: Boolean })
  permanent = false;

  @state()
  private _appConfigs: AppConfigs = configsService.loadConfigs();

  /**
   * Guards against the synthetic `colorschemechange` / `permanentcolorscheme`
   *   events that `dark-mode-toggle` dispatches at the end of its
   *   `connectedCallback` (which runs *during* this element's first render).
   *   Reacting to that echo would mutate reactive state mid-update — triggering
   *   Lit's `change-in-update` warning — and would clobber a `SYSTEM` preference
   *   with the resolved light/dark value. We only honor these events once the
   *   first render has completed (i.e. after a genuine user toggle).
   */
  private _ready = false;

  protected override firstUpdated(): void {
    this._ready = true;
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
    if (!this._ready) return;
    this.onColorThemeModeContrastChange({
      ...this._appConfigs.colorScheme,
      name:
        event.detail.colorScheme.length > 0
          ? (event.detail.colorScheme.toUpperCase() as ColorScheme)
          : CONFIG_COLOR_SCHEME_NAMES.SYSTEM,
    });
  };

  private permanentColorSchemeEventListener = (event: PermanentColorSchemeEvent) => {
    if (!this._ready) return;
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
    const current = this._appConfigs.colorScheme;
    if (
      current.name === colorScheme.name &&
      current.contrast === colorScheme.contrast &&
      current.theme === colorScheme.theme &&
      current.persist === colorScheme.persist
    ) {
      return;
    }

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
