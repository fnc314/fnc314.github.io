export const SETTINGS_KEYS = {
  COLOR_SCHEME: {
    NAME: "color_scheme.name" as const,
    PERSIST: "color_scheme.persist" as const,
  } as const,
  FAB: {
    SETTINGS: {
      SIZE: "fab.settings.size" as const,
      STYLE: "fab.settings.style" as const,
      POSITION: "fab.settings.position" as const,
    } as const,
    CONNECT: {
      SIZE: "fab.connect.size" as const,
      STYLE: "fab.connect.style" as const,
      POSITION: "fab.connect.position" as const,
    },
  } as const,
} as const;

export type SettingsKey =
  `color_scheme.${"name" | "persist"}` |
  `fab.size.${"settings" | "connect"}` |
  `fab.style.${"settings" | "connect"}` |
  `fab.position.${"settings" | "connect"}`;

export type Setting = {
  key: SettingsKey;
} & {
  value: string | boolean | number;
}