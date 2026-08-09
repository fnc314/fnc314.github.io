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

/** Various arguments to `window.matchMedia` */
export const WindowMedia = {
  PrefersContrast: {
    Custom: "(prefers-contrast: custom)" as const,
    None: "(prefers-contrast: none)" as const,
    Less: "(prefers-contrast: less)" as const,
    More: "(prefers-contrast: more)" as const,
  } as const,
  PrefersColorScheme: {
    Dark: "(prefers-color-scheme: dark)" as const,
    Light: "(prefers-color-scheme: light)" as const,
  }
} as const;