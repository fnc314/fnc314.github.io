import { type TemplateResult } from "lit";
export declare const FAB_POSITION_COMPONENTS_VERTICAL: {
    readonly TOP: "TOP";
    readonly BOTTOM: "BOTTOM";
};
export declare const FAB_POSITION_COMPONENTS_HORIZONTAL: {
    readonly START: "START";
    readonly END: "END";
};
export interface FabPositionComponent {
    vertical: FabPositionComponentVertical;
    horizontal: FabPositionComponentHorizontal;
}
export type FabPositionComponentVertical = (typeof FAB_POSITION_COMPONENTS_VERTICAL)[keyof typeof FAB_POSITION_COMPONENTS_VERTICAL];
export type FabPositionComponentHorizontal = (typeof FAB_POSITION_COMPONENTS_HORIZONTAL)[keyof typeof FAB_POSITION_COMPONENTS_HORIZONTAL];
export declare const FAB_POSITION: {
    readonly START_TOP: "START_TOP";
    readonly START_BOTTOM: "START_BOTTOM";
    readonly END_TOP: "END_TOP";
    readonly END_BOTTOM: "END_BOTTOM";
};
export type FabPosition = (typeof FAB_POSITION)[keyof typeof FAB_POSITION];
export declare const FabPositions: FabPosition[];
export declare const FabPositionIcons: Record<FabPosition, TemplateResult>;
export declare const fabPositionToUi: (fabPosition: FabPosition) => string;
export declare const fabPositionComponents: (fabPosition: FabPosition) => FabPositionComponent;
export declare const FAB_STYLE: {
    readonly ICON_ONLY: "ICON_ONLY";
    readonly ICON_AND_TEXT: "ICON_AND_TEXT";
    readonly ICON_ONLY_SMALL: "ICON_ONLY_SMALL";
    readonly TEXT_ONLY: "TEXT_ONLY";
};
export type FabStyle = (typeof FAB_STYLE)[keyof typeof FAB_STYLE];
export declare const fabStyleToUi: (fabStyle: FabStyle) => string;
export declare const FabStyles: FabStyle[];
export interface FabConfig {
    position: FabPosition;
    style: FabStyle;
}
export type FabConfigssRecord = Record<"settings" | "connect", FabConfig>;
export type FabConfigChange = CustomEvent<{
    fab: "settings" | "connect";
    newFabConfig: FabConfig;
}>;
export declare const fabConfigToGrid: (config: FabConfig) => {
    rowStart: number;
    rowEnd: number;
    columnStart: number;
    columnEnd: number;
};
export declare const fabPositionClass: (fabPosition: FabPosition) => "start-top" | "start-bottom" | "end-top" | "end-bottom";
//# sourceMappingURL=fab-configs.d.ts.map