import { type TemplateResult, html } from "lit";

/**
 * The vertical position of a given {@link @material/web!MdFab}
 *
 * @type {{ readonly TOP: "TOP"; readonly BOTTOM: "BOTTOM"; }}
 */
export const FAB_POSITION_COMPONENTS_VERTICAL = {
  /** AUTO-DOC'd WITH GEMINI: Top vertical position */
  TOP: "TOP" as const,
  /** AUTO-DOC'd WITH GEMINI: Bottom vertical position */
  BOTTOM: "BOTTOM" as const,
} as const;

/**
 * The hotizontal position of a given {@link @material/web!MdFab}
 *
 * @type {{ readonly START: "START"; readonly END: "END"; }}
 */
export const FAB_POSITION_COMPONENTS_HORIZONTAL = {
  /** AUTO-DOC'd WITH GEMINI: Start horizontal position */
  START: "START" as const,
  /** AUTO-DOC'd WITH GEMINI: End horizontal position */
  END: "END" as const,
} as const;

export interface FabPositionComponent {
  vertical: FabPositionComponentVertical;
  horizontal: FabPositionComponentHorizontal;
}


/**
 * {@link FAB_POSITION_COMPONENTS_VERTICAL}
 */
export type FabPositionComponentVertical =
  (typeof FAB_POSITION_COMPONENTS_VERTICAL)[keyof typeof FAB_POSITION_COMPONENTS_VERTICAL];

/**
 * {@link FAB_POSITION_COMPONENTS_HORIZONTAL}
 */
export type FabPositionComponentHorizontal =
  (typeof FAB_POSITION_COMPONENTS_HORIZONTAL)[keyof typeof FAB_POSITION_COMPONENTS_HORIZONTAL];


/**
 * The complete collection of possible {@link @material/web!MdFab} positions.  Cross-product of {@link FAB_POSITION_COMPONENTS_HORIZONTAL}
 *   and {@link FAB_POSITION_COMPONENTS_VERTICAL}
 *
 * @type {{ readonly START_TOP: "START_TOP"; readonly START_BOTTOM: "START_BOTTOM"; readonly END_TOP: "END_TOP"; readonly END_BOTTOM: "END_BOTTOM"; }}
 */
export const FAB_POSITION = {
  /** AUTO-DOC'd WITH GEMINI: Start-Top position */
  START_TOP: "START_TOP" as const,
  /** AUTO-DOC'd WITH GEMINI: Start-Bottom position */
  START_BOTTOM: "START_BOTTOM" as const,
  /** AUTO-DOC'd WITH GEMINI: End-Top position */
  END_TOP: "END_TOP" as const,
  /** AUTO-DOC'd WITH GEMINI: End-Bottom position */
  END_BOTTOM: "END_BOTTOM" as const,
} as const;

export type FabPosition = (typeof FAB_POSITION)[keyof typeof FAB_POSITION];
export const FabPositions: FabPosition[] = Object.values(FAB_POSITION);


/**
 * Maps {@link FAB_POSITION} to a particular {@link @material/web!MdFab}
 *
 * @type Record\<FabPosition, TemplateResult\>
 */
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
