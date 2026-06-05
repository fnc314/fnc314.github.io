import { type CSSResult } from "lit";
export declare const Breakpoints: CSSResult;
export type Breakpoint = "unknown" | "mobile" | "tablet" | "desktop";
export declare const BREAKPOINT_NAMES: Breakpoint[];
export declare const readBreakpoint: () => Breakpoint;
