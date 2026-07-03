export declare const CSS_VARIABLE_BREAKPOINT_LABEL: string;
export type BreakpointLabel = "mobile" | "tablet" | "desktop";
export declare const BREAKPOINT_LABELS: BreakpointLabel[];
export declare const BreakpointLabels: {
    readonly mobile: "mobile";
    readonly tablet: "tablet";
    readonly desktop: "desktop";
};
export interface BreakpointRange {
    min: number;
    max: number;
}
export interface Breakpoints extends Record<BreakpointLabel, BreakpointRange> {
}
export declare const BREAKPOINTS: Breakpoints;
