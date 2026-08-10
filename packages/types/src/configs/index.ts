import {
    type ColorSchemeConfig,
    ThemeNames
} from "@/lib/theme";

export interface AppConfigs {
  colorScheme: ColorSchemeConfig;
}

export const DEFAULT_APP_CONFIGS: AppConfigs = {
  colorScheme: {
    theme: ThemeNames.Themes.Inter,
    name: ThemeNames.Scheme.System,
    contrast: ThemeNames.Contrast.Normal,
    persist: false as const,
  } as const,
} as const;

/** Various event names */
export const EventNames = {
  Change: {
    ColorScheme: "color_scheme.change" as const,
    AppConfigs: "app-configs.change" as const,
  } as const,
} as const;

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
  } as const,
} as const;