import { html } from "lit-element";
import { TemplateResult } from "lit-html";

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

export const FabPositionIcons: Record<FabPosition, TemplateResult> = {
  START_TOP: html`<md-icon slot="start">subheader</md-icon>`, // The missing `position_top_left` to match the others
  END_TOP: html`<md-icon slot="start">position_top_right</md-icon>`,
  END_BOTTOM: html`<md-icon slot="start">position_bottom_right</md-icon>`,
  START_BOTTOM: html`<md-icon slot="start">position_bottom_left</md-icon>`,
}

export const fabPositionToUi = (fabPosition: FabPosition): string =>
  fabPosition.split("_").map((part) => `${part.charAt(0)}${part.slice(1).toLowerCase()}`).join(" / ")

export const FAB_STYLE = {
  ICON_ONLY: "ICON_ONLY" as const,
  ICON_AND_TEXT: "ICON_AND_TEXT" as const,
  ICON_ONLY_SMALL: "ICON_ONLY_SMALL" as const,
  // ICON_ONLY_LARGE: "ICON_ONLY_LARGE" as const,
  // TEXT_ONLY: "TEXT_ONLY" as const,
} as const;
export type FabStyle = typeof FAB_STYLE[keyof typeof FAB_STYLE];

export const fabStyleToUi = (fabStyle: FabStyle): string => {
  switch (fabStyle) {
    case FAB_STYLE.ICON_ONLY_SMALL:
      return "Icon Only (Small)";
    case FAB_STYLE.ICON_ONLY:
      return "Icon Only";
    case FAB_STYLE.ICON_AND_TEXT:
      return "Icon And Text";
  }
};

export const FabStyles: FabStyle[] = Object.values(FAB_STYLE);

export type FabSettings = { position: FabPosition, style: FabStyle };
export type FabSettingsRecord = Record<"settings" | "connect", FabSettings>