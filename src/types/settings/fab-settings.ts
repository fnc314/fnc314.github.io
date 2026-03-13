export const FAB_POSITIONS = {
  HORIZONTAL: {
    LEADING: "START" as const,
    TRAILING: "END" as const,
  } as const,
  VERTICAL: {
    LEADING: "TOP" as const,
    TRAILING: "BOTTOM" as const,
  } as const,
} as const;

export type FabLayoutSet = {
  LEADING: "TOP";
  TRAILING: "BOTTOM";
} | {
  LEADING: "START";
  TRAILING: "END";
}

type FabPositionVertical = typeof FAB_POSITIONS.VERTICAL[
  keyof typeof FAB_POSITIONS.VERTICAL
];

type FabPositionHorizontal = typeof FAB_POSITIONS.HORIZONTAL[
  keyof typeof FAB_POSITIONS.HORIZONTAL
];

export type FabPosition = `${FabPositionHorizontal}_${FabPositionVertical}`
export const FabPositions: FabPosition[] = [
  "START_TOP",
  "START_BOTTOM",
  "END_TOP",
  "END_BOTTOM",
];

export const fabPositionToUi = (fabPosition: FabPosition): string =>
  fabPosition.split("_").map((part) => `${part.charAt(0)}${part.slice(1).toLowerCase()}`).join(" / ")

export const FAB_STYLE = {
  ICON_ONLY: "ICON_ONLY" as const,
  ICON_AND_TEXT: "ICON_AND_TEXT" as const,
  // TEXT_ONLY: "TEXT_ONLY" as const,
} as const;

export const fabStyleToUi = (fabStyle: FabStyle): string =>
  fabStyle.split("_").map((part) => `${part.charAt(0)}${part.slice(1).toLowerCase()}`).join(" ")

export type FabStyle = typeof FAB_STYLE[keyof typeof FAB_STYLE];

export const FabStyles: FabStyle[] = Object.values(FAB_STYLE);

export const FAB_SIZE = {
  // SMALL: "SMALL" as const,
  // MEDIUM: "MEDIUM" as const,
  DEFAULT: "DEFAULT" as const,
  LARGE: "LARGE" as const,
} as const;

export type FabSize = typeof FAB_SIZE[keyof typeof FAB_SIZE];

export type FabSettings = { position: FabPosition, style: FabStyle, size: FabSize };
export type FabSettingsRecord = Record<"settings" | "connect", FabSettings>