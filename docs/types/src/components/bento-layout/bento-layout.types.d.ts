import { type BreakpointLabel } from "@fnc314/design-tokens/types/breakpoints.js";
export interface GridPlacement {
    start: number;
    end: number;
}
export type GridPosition = {
    breakpoint: Exclude<BreakpointLabel, "mobile">;
    row: GridPlacement;
    column: GridPlacement;
    area: BentoBoxType;
} | {
    breakpoint: Extract<BreakpointLabel, "mobile">;
    area: BentoBoxType;
};
export type BentoBoxType = "profile-photo-bio" | "work" | "code" | "blog" | "settings" | "connect" | "education" | "skills";
export interface ABentoBoxConfig {
    type: BentoBoxType;
    placement: Record<BreakpointLabel, GridPosition>;
    isExpanded: (breakpoint: BreakpointLabel) => boolean;
}
export type BentoBoxConfigs = Record<BentoBoxType, Omit<ABentoBoxConfig, "type">>;
export declare const BENTO_BOX_CONFIG: BentoBoxConfigs;
export declare function getBentoDOMOrder(breakpoint: BreakpointLabel): BentoBoxType[];
export declare const BentoBoxConfigs: (breakpoint?: BreakpointLabel) => ABentoBoxConfig[];
