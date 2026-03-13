import { SettingsKey } from "@/types/settings";

export const SETTINGS_KEYS_COLOR_SCHEME_NAMES = {
  DARK: "DARK" as const,
  LIGHT: "LIGHT" as const,
  SYSTEM: "SYSTEM" as const,
} as const;

export const SETTINGS_KEY_COLOR_SCHEME_PERSIST: SettingsKey = "color_scheme.persist"

export type ColorScheme = typeof SETTINGS_KEYS_COLOR_SCHEME_NAMES[keyof typeof SETTINGS_KEYS_COLOR_SCHEME_NAMES];

export type ColorSchemeSettings = {
  name: ColorScheme;
  persist: boolean;
}