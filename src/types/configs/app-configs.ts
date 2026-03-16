import { ColorSchemeConfigs, CONFIG_COLOR_CONTRAST_NAMES, CONFIG_COLOR_SCHEME_NAMES } from "./color-scheme-configs";
import { FAB_POSITION, FAB_STYLE, FabConfigssRecord } from "./fab-configs";

export type AppConfigs = {
  colorScheme: ColorSchemeConfigs;
  fab: FabConfigssRecord;
};

export const DEFAULT_APP_CONFIGS: AppConfigs = {
  colorScheme: {
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
  } as const
} as const;