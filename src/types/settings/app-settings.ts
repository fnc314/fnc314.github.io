import { ColorSchemeSettings } from "./color-scheme-settings";
import { FabConfigssRecord } from "./fab-settings";

export type AppConfigs = {
  colorScheme: ColorSchemeSettings;
  fab: FabConfigssRecord;
};

export const DEFAULT_APP_CONFIGS: AppConfigs = {
  colorScheme: {
    name: "SYSTEM",
    contrast: "NORMAL",
    persist: false,
  },
  fab: {
    settings: {
      position: "START_BOTTOM",
      style: "ICON_AND_TEXT",
    },
    connect: {
      position: "END_BOTTOM",
      style: "ICON_AND_TEXT",
    }
  }
};