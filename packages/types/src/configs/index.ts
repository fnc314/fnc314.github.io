import {
    CONFIG_COLOR_CONTRAST_NAMES,
    CONFIG_COLOR_SCHEME_NAMES,
    type ColorSchemeConfig,
    THEME_NAMES,
} from "@/lib/theme";

export interface AppConfigs {
  colorScheme: ColorSchemeConfig;
}

export const DEFAULT_APP_CONFIGS: AppConfigs = {
  colorScheme: {
    theme: THEME_NAMES.inter,
    name: CONFIG_COLOR_SCHEME_NAMES.SYSTEM,
    contrast: CONFIG_COLOR_CONTRAST_NAMES.NORMAL,
    persist: false,
  } as const,
} as const;

export const COLOR_SCHEME_CHANGE_EVENT_NAME = "color_scheme.change";
export const APP_CONFIGS_CHANGE_EVENT_NAME = "app-configs.change";
export type AppConfigsChangeEvent = CustomEvent<{ appConfigs: AppConfigs }>;

export const ELEMENT_ID_META_TAG: string = "meta-theme-color";
export const WINDOW_MEDIA_PREFERS_COLOR_SCHEME: string = "(prefers-color-scheme: dark)";
export const WINDOW_MEDIA_PREFERS_CONTRAST_MORE: string = "(prefers-contrast: more)";
export const WINDOW_MEDIA_PREFERS_CONTRAST_LESS: string = "(prefers-contrast: less)";
export const WINDOW_MEDIA_PREFERS_CONTRAST_NONE: string = "(prefers-contrast: no-preference)";
export const WINDOW_MEDIA_PREFERS_CONTRAST_CUSTOM: string = "(prefers-contrast: custom)";
export const WINDOW_MEDIA_PREFERS_COLOR_SCHEME_DARK: string = "(prefers-color-scheme: dark)";
export const WINDOW_MEDIA_PREFERS_COLOR_SCHEME_LIGHT: string = "(prefers-color-scheme: light)";
