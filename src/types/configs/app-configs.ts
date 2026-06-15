import {
  CONFIG_COLOR_CONTRAST_NAMES,
  CONFIG_COLOR_SCHEME_NAMES,
  type ColorSchemeConfigs,
} from "@/types/theme/color-scheme-configs";
import { THEME_NAMES, type ThemeConfig } from "@/types/theme/theme";

export interface AppConfigs {
  colorScheme: ColorSchemeConfigs;
}

export const DEFAULT_APP_CONFIGS: AppConfigs = {
  colorScheme: {
    theme: THEME_NAMES.sunset,
    name: CONFIG_COLOR_SCHEME_NAMES.SYSTEM,
    contrast: CONFIG_COLOR_CONTRAST_NAMES.NORMAL,
    persist: false,
  } as const,
} as const;

export type AppConfigsSchemeTheme = () => ThemeConfig;

export type AppConfigsChange = CustomEvent<{ appConfigs: AppConfigs }>;
