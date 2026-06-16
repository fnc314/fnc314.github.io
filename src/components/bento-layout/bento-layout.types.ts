import { Breakpoints } from "@fnc314/design-tokens";
import { type BreakpointLabel } from "@fnc314/design-tokens/types/breakpoints.js";

/**
 * Defines the 2 numbers needed to place something
 *   on a `grid`
 *
 * @typedef GridPlacement
 */
export interface GridPlacement {
  start: number;
  end: number;
}

/**
 * A pair of {@link GridPlacement}s for the row and column
 *   dimensions
 *
 * @typedef GridPosition
 */
export type GridPosition = {
  /** The breakpoint for this position */
  breakpoint: Exclude<BreakpointLabel, "mobile">;
  /** The row placement */
  row: GridPlacement;
  /** The column placement */
  column: GridPlacement;
  /** The grid area string */
  area: BentoBoxType;
} | {
  /** The breakpoint for this position */
  breakpoint: Extract<BreakpointLabel, "mobile">;
  /** The grid area string */
  area: BentoBoxType;
}

/**
 * The finite `bento-box` instances
 *
 * @export
 * @typedef {BentoBoxType}
 */
export type BentoBoxType =
  "profile" |
  "work" |
  "code" |
  "blog" |
  "settings" |
  // "connect" |
  "education" |
  "skills"
  ;

/** A {@link Record} of {@link BentoBoxType} definitions */
export const BENTO_BOX_TYPES = {
  profile: "profile" as const,
  work: "work" as const,
  code: "code" as const,
  blog: "blog" as const,
  settings: "settings" as const,
  education: "education" as const,
  skills: "skills" as const,
} as const;

/**
 * Defines the {@link BentoBoxType} coupled with a {@link GridPosition} used
 *   to place a particular `bento-box`.
 *
 * @interface BentoBoxConfig
 */
export interface ABentoBoxConfig {
  type: BentoBoxType;
  placement: Record<BreakpointLabel, GridPosition>;
  isExpanded: (breakpoint: BreakpointLabel) => boolean;
}

export type BentoBoxConfigs = Record<BentoBoxType, Omit<ABentoBoxConfig, "type">>;

/** The final rendered {@link BentoBoxConfigs} */
export const BENTO_BOX_CONFIG: BentoBoxConfigs = {
  profile: {
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 2, end: 5 }, column: { start: 1, end: 7 }, area: BENTO_BOX_TYPES.profile },
      tablet:  { breakpoint: "tablet", row: { start: 2, end: 3 }, column: { start: 1, end: 4 }, area: BENTO_BOX_TYPES.profile },
      mobile: { breakpoint: "mobile", area: BENTO_BOX_TYPES.profile },
    },
    isExpanded: () => true
  },
  education: {
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 5, end: 6 }, column: { start: 1, end: -1 }, area: BENTO_BOX_TYPES.education },
      tablet:  { breakpoint: "tablet", row: { start: 3, end: 4 }, column: { start: 1, end: -1 }, area: BENTO_BOX_TYPES.education },
      mobile: { breakpoint: "mobile", area: BENTO_BOX_TYPES.education },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== Breakpoints.BreakpointLabels.mobile
  },
  work: {
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 2, end: 5 }, column: { start: 7, end: -1 }, area: BENTO_BOX_TYPES.work },
      tablet: { breakpoint: "tablet", row: { start: 2, end: 5 }, column: { start: 4, end: -1 }, area: BENTO_BOX_TYPES.work },
      mobile: { breakpoint: "mobile", area: BENTO_BOX_TYPES.work },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== Breakpoints.BreakpointLabels.mobile
  },
  blog: {
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 7, end: 8 }, column: { start: 1, end: -1 }, area: BENTO_BOX_TYPES.blog },
      tablet: { breakpoint: "tablet", row: { start: 5, end: 6 }, column: { start: 1, end: 4 }, area: BENTO_BOX_TYPES.blog },
      mobile: { breakpoint: "mobile", area: BENTO_BOX_TYPES.blog },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== Breakpoints.BreakpointLabels.mobile
  },
  code: {
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 8, end: 9 }, column: { start: 1, end: -1 }, area: BENTO_BOX_TYPES.code },
      tablet: { breakpoint: "tablet", row: { start: 5, end: 6 }, column: { start: 4, end: -1 }, area: BENTO_BOX_TYPES.code },
      mobile: { breakpoint: "mobile", area: BENTO_BOX_TYPES.code },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== Breakpoints.BreakpointLabels.mobile
  },
  skills: {
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 9, end: 10 }, column: { start: 1, end: -1 }, area: BENTO_BOX_TYPES.skills },
      tablet: { breakpoint: "tablet", row: { start: 6, end: 7 }, column: { start: 1, end: -1 }, area: BENTO_BOX_TYPES.skills },
      mobile: { breakpoint: "mobile", area: BENTO_BOX_TYPES.skills },
    },
    isExpanded: () => false
  },
  settings: {
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 10, end: 11 }, column: { start: 1, end: -1 }, area: BENTO_BOX_TYPES.settings },
      tablet: { breakpoint: "tablet", row: { start: 7, end: 8 }, column: { start: 1, end: -1 }, area: BENTO_BOX_TYPES.settings },
      mobile: { breakpoint: "mobile", area: BENTO_BOX_TYPES.settings },
    },
    isExpanded: () => false
  }
};

/**
 * Determines the logical DOM order for bento box types based on grid placement.
 * Reading order follows Top-to-Bottom, then Start-to-End (Leading-to-Trailing).
 *
 * @param breakpoint - The current active breakpoint.
 * @returns An array of {@link BentoBoxType} in the appropriate order for the DOM.
 */
export function getBentoDOMOrder(breakpoint: BreakpointLabel): BentoBoxType[] {
  // Use desktop as the sequence authority if we are on a non-grid breakpoint (mobile)
  const sortBreakpoint = breakpoint === "mobile" ? "desktop" : breakpoint;
  const types = Object.keys(BENTO_BOX_CONFIG) as BentoBoxType[];

  return types.sort((a, b) => {
    const posA = BENTO_BOX_CONFIG[a].placement[sortBreakpoint];
    const posB = BENTO_BOX_CONFIG[b].placement[sortBreakpoint];

    // Narrow union type to access coordinates (unavailable on mobile)
    if ("row" in posA && "row" in posB) {
      // Primary sort: Row Start (Top to Bottom)
      if (posA.row.start !== posB.row.start) return posA.row.start - posB.row.start;
      // Secondary sort: Column Start (Leading to Trailing)
      // Ascending numerical order maps correctly to RTL/LTR logical flow in CSS Grid.
      return posA.column.start - posB.column.start;
    }
    return 0;
  });
}

/**
 * Produces an array of {@link ABentoBoxConfig} instances sorted for proper DOM order.
 */
export const BentoBoxConfigs = (breakpoint: BreakpointLabel = "desktop"): ABentoBoxConfig[] =>
  getBentoDOMOrder(breakpoint).map((type) => ({
    type,
    ...BENTO_BOX_CONFIG[type],
  }));