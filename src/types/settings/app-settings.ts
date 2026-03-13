import { ColorSchemeSettings } from "./color-scheme-settings";
import { FabSettingsRecord } from "./fab-settings";

export type AppSettings = {
  colorScheme: ColorSchemeSettings;
  fab: FabSettingsRecord;
};

export const DEFAULT_APP_SETTINGS: AppSettings = {
  colorScheme: {
    name: "SYSTEM",
    persist: false,
  },
  fab: {
    settings: {
      position: "START_BOTTOM",
      style: "ICON_AND_TEXT",
      size: "DEFAULT",
    },
    connect: {
      position: "END_BOTTOM",
      style: "ICON_AND_TEXT",
      size: "DEFAULT",
    }
  }
};