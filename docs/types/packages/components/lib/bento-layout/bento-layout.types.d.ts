import { type BreakpointLabel } from "@fnc314/packages.design-tokens/types/breakpoints.js";
export interface GridSpan {
    colSpan: number;
    rowSpan: number;
}
export type GridPosition = {
    breakpoint: Exclude<BreakpointLabel, "mobile">;
    span: GridSpan;
    order: number;
    offsets?: {
        row?: number | 0;
        col?: number | 0;
    };
} | {
    breakpoint: Extract<BreakpointLabel, "mobile">;
    order: number;
};
export type BentoBoxType = "profile" | "experience" | "code" | "blog" | "settings" | "education" | "skills";
export declare const BENTO_BOX_TYPES: {
    readonly profile: "profile";
    readonly experience: "experience";
    readonly code: "code";
    readonly blog: "blog";
    readonly settings: "settings";
    readonly education: "education";
    readonly skills: "skills";
};
export interface ABentoBoxConfig {
    type: BentoBoxType;
    placement: Record<BreakpointLabel, GridPosition>;
    isExpanded: (breakpoint: BreakpointLabel) => boolean;
}
export type BentoBoxConfigs = Record<BentoBoxType, Omit<ABentoBoxConfig, "type">>;
export declare const BENTO_BOX_CONFIG: BentoBoxConfigs;
export declare function getBentoDOMOrder(breakpoint: BreakpointLabel): BentoBoxType[];
export declare const BentoBoxConfigsArray: (breakpoint?: BreakpointLabel) => ABentoBoxConfig[];
