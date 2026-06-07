import { type Breakpoint } from "@/styles/breakpoints";
export interface GridPlacement {
    start: number;
    end: number;
}
export type GridPosition = {
    breakpoint: Omit<Breakpoint, "mobile">;
    row: GridPlacement;
    column: GridPlacement;
    area?: string;
} | {
    breakpoint: "mobile";
};
export type BentoBoxType = "profile-photo-bio" | "work" | "code" | "blog" | "settings" | "connect" | "education" | "skills";
export interface BentoBoxConfig {
    type: BentoBoxType;
    expanded?: boolean;
    placementForBreakpoint(breakpoint: Breakpoint): GridPosition;
}
export declare const BentoBoxConfigs: () => BentoBoxConfig[];
