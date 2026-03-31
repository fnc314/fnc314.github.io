import { html } from "lit-element";
import { type TemplateResult } from "lit-html";

export const FAB_POSITION_COMPONENTS_VERTICAL = {
  TOP: "TOP" as const,
  BOTTOM: "BOTTOM" as const,
} as const;

export const FAB_POSITION_COMPONENTS_HORIZONTAL = {
  START: "START" as const,
  END: "END" as const,
} as const;

export interface FabPositionComponent {
  vertical: FabPositionComponentVertical;
  horizontal: FabPositionComponentHorizontal;
}

export type FabPositionComponentVertical =
  (typeof FAB_POSITION_COMPONENTS_VERTICAL)[keyof typeof FAB_POSITION_COMPONENTS_VERTICAL];
export type FabPositionComponentHorizontal =
  (typeof FAB_POSITION_COMPONENTS_HORIZONTAL)[keyof typeof FAB_POSITION_COMPONENTS_HORIZONTAL];

export const FAB_POSITION = {
  START_TOP: "START_TOP" as const,
  START_BOTTOM: "START_BOTTOM" as const,
  END_TOP: "END_TOP" as const,
  END_BOTTOM: "END_BOTTOM" as const,
} as const;

export type FabPosition = (typeof FAB_POSITION)[keyof typeof FAB_POSITION];
export const FabPositions: FabPosition[] = Object.values(FAB_POSITION);

export const FabPositionIcons: Record<FabPosition, TemplateResult> = {
  START_TOP: html`<md-icon slot="start">subheader</md-icon>`, // The missing `position_top_left` to match the others
  END_TOP: html`<md-icon slot="start">position_top_right</md-icon>`,
  END_BOTTOM: html`<md-icon slot="start">position_bottom_right</md-icon>`,
  START_BOTTOM: html`<md-icon slot="start">position_bottom_left</md-icon>`,
};

export const fabPositionToUi: (fabPosition: FabPosition) => string = (fabPosition: FabPosition): string =>
  fabPosition
    .split("_")
    .map((part) => `${part.charAt(0)}${part.slice(1).toLowerCase()}`)
    .join(" / ");

export const fabPositionComponents: (fabPosition: FabPosition) => FabPositionComponent = (fabPosition: FabPosition) =>
  ({
    vertical: fabPosition.split("_").at(1) as FabPositionComponentVertical,
    horizontal: fabPosition.split("_").at(0) as FabPositionComponentHorizontal,
  }) satisfies FabPositionComponent;

export const FAB_STYLE = {
  ICON_ONLY: "ICON_ONLY" as const,
  ICON_AND_TEXT: "ICON_AND_TEXT" as const,
  ICON_ONLY_SMALL: "ICON_ONLY_SMALL" as const,
  TEXT_ONLY: "TEXT_ONLY" as const,
} as const;
export type FabStyle = (typeof FAB_STYLE)[keyof typeof FAB_STYLE];

export const fabStyleToUi = (fabStyle: FabStyle): string => {
  switch (fabStyle) {
    case FAB_STYLE.ICON_ONLY_SMALL:
      return "Small Icon Only";
    case FAB_STYLE.ICON_ONLY:
      return "Icon Only";
    case FAB_STYLE.ICON_AND_TEXT:
      return "Text And Icon";
    case FAB_STYLE.TEXT_ONLY:
      return "Text Only";
  }
};

export const FabStyles: FabStyle[] = Object.values(FAB_STYLE);

export interface FabConfig {
  position: FabPosition;
  style: FabStyle;
}
export type FabConfigssRecord = Record<"settings" | "connect", FabConfig>;

export type FabConfigChange = CustomEvent<{ fab: "settings" | "connect"; newFabConfig: FabConfig }>;

export const fabConfigToGrid: (config: FabConfig) => {
  rowStart: number;
  rowEnd: number;
  columnStart: number;
  columnEnd: number;
} = (config: FabConfig) => ({
  rowStart: fabPositionComponents(config.position).vertical === FAB_POSITION_COMPONENTS_VERTICAL.TOP ? 1 : 2,
  rowEnd: fabPositionComponents(config.position).vertical === FAB_POSITION_COMPONENTS_VERTICAL.TOP ? 2 : 3,
  columnStart: fabPositionComponents(config.position).horizontal === FAB_POSITION_COMPONENTS_HORIZONTAL.START ? 1 : 3,
  columnEnd: fabPositionComponents(config.position).horizontal === FAB_POSITION_COMPONENTS_HORIZONTAL.START ? 2 : 4,
});

export const fabPositionClass: (fabPosition: FabPosition) => "start-top" | "start-bottom" | "end-top" | "end-bottom" = (
  fabPosition: FabPosition,
) => `${fabPosition.replace("_", "-").toLowerCase()}` as "start-top" | "start-bottom" | "end-top" | "end-bottom";
