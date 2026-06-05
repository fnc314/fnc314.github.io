import { type Breakpoint } from "@/styles/breakpoints";
export interface GridPlacement {
    start: number;
    end: number;
}
export interface GridPosition {
    breakpoint: Breakpoint;
    row: GridPlacement;
    column: GridPlacement;
}
export type BentoBoxType = "profile-photo-bio" | "work" | "code" | "blog" | "settings" | "connect" | "education" | "skills";
export interface BentoBoxConfig {
    type: BentoBoxType;
    placementForBreakpoint(breakpoint: Breakpoint): GridPosition;
}
export declare const BentoBoxConfigs: () => BentoBoxConfig[];
