import { ColorSchemeConfigs, CONFIG_COLOR_CONTRAST_NAMES, CONFIG_COLOR_SCHEME_NAMES } from "@/types/configs/color-scheme-configs";
import { FAB_POSITION, FAB_STYLE, FabConfigssRecord } from "@/types/configs/fab-configs";
import { THEME_NAMES, type ThemeConfig, ThemeName } from "@/types/theme/theme";

export type AppConfigs = {
  colorScheme: ColorSchemeConfigs & { theme: ThemeName };
  fab: FabConfigssRecord;
};

export const DEFAULT_APP_CONFIGS: AppConfigs = {
  colorScheme: {
    theme: THEME_NAMES.inter,
    name: CONFIG_COLOR_SCHEME_NAMES.SYSTEM,
    contrast: CONFIG_COLOR_CONTRAST_NAMES.NORMAL,
    persist: false,
  } as const,
  fab: {
    settings: {
      position: FAB_POSITION.START_BOTTOM,
      style: FAB_STYLE.ICON_AND_TEXT,
    } as const,
    connect: {
      position: FAB_POSITION.END_BOTTOM,
      style: FAB_STYLE.ICON_AND_TEXT,
    } as const,
  } as const,
} as const;

export type AppConfigsSchemeTheme = () => ThemeConfig