import { MaterialSchemeName } from "@/styles/material-styles";
import { SettingsKey } from "@/types/settings";

export const SETTINGS_KEYS_COLOR_SCHEME_NAMES = {
  DARK: "DARK" as const,
  LIGHT: "LIGHT" as const,
  SYSTEM: "SYSTEM" as const,
} as const;

export const SETTINGS_KEY_COLOR_SCHEME_CONTRAST = {
  NORMAL: "NORMAL" as const,
  MEDIUM: "MEDIUM" as const,
  HIGH: "HIGH" as const,
} as const;

export const SETTINGS_KEY_COLOR_SCHEME_PERSIST: SettingsKey = "color_scheme.persist"

export type ColorScheme = typeof SETTINGS_KEYS_COLOR_SCHEME_NAMES[keyof typeof SETTINGS_KEYS_COLOR_SCHEME_NAMES];
export type ColorSchemeContrast = typeof SETTINGS_KEY_COLOR_SCHEME_CONTRAST[keyof typeof SETTINGS_KEY_COLOR_SCHEME_CONTRAST];

export type ColorSchemeSettings = {
  name: ColorScheme;
  contrast: ColorSchemeContrast;
  persist: boolean;
};

export const colorSchemeSettingsToMaterialSchemeName = (
  colorSchemeSettings: ColorSchemeSettings
): MaterialSchemeName => {
  const variant = colorSchemeSettings.name !== SETTINGS_KEYS_COLOR_SCHEME_NAMES.SYSTEM ?
    colorSchemeSettings.name.toLowerCase() :
    (window.matchMedia("(prefers-color-scheme: dark)").matches ?
      SETTINGS_KEYS_COLOR_SCHEME_NAMES.DARK :
      SETTINGS_KEYS_COLOR_SCHEME_NAMES.LIGHT
    ).toLowerCase();

  const contrast =
      colorSchemeSettings.contrast === SETTINGS_KEY_COLOR_SCHEME_CONTRAST.NORMAL ?
      "" :
      colorSchemeSettings.contrast.charAt(0) + colorSchemeSettings.contrast.slice(1).toLowerCase() + "Contrast";

  return `${variant}${contrast}` as MaterialSchemeName;
}