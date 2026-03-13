import { settingsService } from "@/services/settings";
import { colorSchemeSettingsToMaterialSchemeName, SETTINGS_KEYS_COLOR_SCHEME_NAMES } from "@/types/settings/color-scheme-settings";
import { css, CSSResult } from "lit";
import { MaterialSchemes } from "./material-styles";

export const onThemeChange = (event: MediaQueryListEvent) => {
  const name = event.matches ? SETTINGS_KEYS_COLOR_SCHEME_NAMES.DARK : SETTINGS_KEYS_COLOR_SCHEME_NAMES.LIGHT;

  const appSettings = settingsService.loadSettings();
  const colorScheme = {
    ...appSettings.colorScheme,
    name,
  };
  settingsService.saveSettings({
    ...appSettings,
    colorScheme,
  });

  updateMaterialCSSStyleSheet(
    MaterialSchemes[
      colorSchemeSettingsToMaterialSchemeName(colorScheme)
    ]
  );
};

export const updateMaterialCSSStyleSheet = (result: CSSResult) => {
  MaterialCSSStyleSheet.replaceSync(result.cssText);
};

export const MaterialCSSStyleSheet: CSSStyleSheet = MaterialSchemes.light.styleSheet!;

export const Breakpoints: CSSResult = css`
  :host {
    --breakpoint-compact-width-max: 600px;
    --breakpoint-medium-width-max: 900px;
    --breakpoint-large-width-max: 1200px;
    --breakpoint-expanded-width-max: 1800px;
  }
`;
