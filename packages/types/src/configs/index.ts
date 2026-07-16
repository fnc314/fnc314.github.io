import {
    CONFIG_COLOR_CONTRAST_NAMES,
    CONFIG_COLOR_SCHEME_NAMES,
    type ColorSchemeConfigs,
    THEME_NAMES,
} from "@/lib/theme";

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

export const COLOR_SCHEME_CHANGE_EVENT_NAME = "color_scheme.change";
export const APP_CONFIGS_CHANGE_EVENT_NAME = "app-configs.change";
export type AppConfigsChange = CustomEvent<{ appConfigs: AppConfigs }>;
