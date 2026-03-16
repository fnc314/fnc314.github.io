import { ColorSchemeSettings, SETTINGS_KEY_COLOR_SCHEME_CONTRAST, SETTINGS_KEYS_COLOR_SCHEME_NAMES } from "./color-scheme-settings";
import { FAB_POSITION, FAB_STYLE, FabConfigssRecord } from "./fab-settings";

export type AppConfigs = {
  colorScheme: ColorSchemeSettings;
  fab: FabConfigssRecord;
};

export const DEFAULT_APP_CONFIGS: AppConfigs = {
  colorScheme: {
    name: SETTINGS_KEYS_COLOR_SCHEME_NAMES.SYSTEM,
    contrast: SETTINGS_KEY_COLOR_SCHEME_CONTRAST.NORMAL,
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