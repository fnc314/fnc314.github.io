import {
  CONFIG_COLOR_CONTRAST_NAMES,
  CONFIG_COLOR_SCHEME_NAMES,
  type ColorSchemeConfigs,
} from "@/types/theme/color-scheme-configs";
import { THEME_NAMES, type ThemeConfig } from "@/types/theme/theme";
import { FAB_POSITION, FAB_STYLE, type FabConfigssRecord } from "./fab-configs";

export interface AppConfigs {
  colorScheme: ColorSchemeConfigs;
  fab: FabConfigssRecord;
}

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

export type AppConfigsSchemeTheme = () => ThemeConfig;

export type AppConfigsChange = CustomEvent<{ appConfigs: AppConfigs }>;
