import { Breakpoints } from "@fnc314/packages.design-tokens";
import { type BreakpointLabel } from "@fnc314/packages.design-tokens/types/breakpoints.js";

/**
 * Defines the column and row span for dense auto-flow grid
 *
 * @typedef GridSpan
 */
export interface GridSpan {
  colSpan: number;
  rowSpan: number;
}

/**
 * The span and order for a given breakpoint
 *
 * @typedef GridPosition
 */
export type GridPosition = {
  /** The breakpoint for this position */
  breakpoint: Exclude<BreakpointLabel, "mobile">;
  /** The grid span */
  span: GridSpan;
  /** The logical order in the DOM */
  order: number;
  /** Offsets */
  offsets?: {
    row?: number | 0;
    col?: number | 0;
  }
} | {
  /** The breakpoint for this position */
  breakpoint: Extract<BreakpointLabel, "mobile">;
  /** The logical order in the DOM */
  order: number;
}

/**
 * The finite `bento-box` instances
 *
 * @export
 * @typedef {BentoBoxType}
 */
export type BentoBoxType =
  "profile" |
  "experience" |
  "code" |
  "blog" |
  "settings" |
  "education" |
  "skills"
  // "now-playing"
  ;

/** A {@link Record} of {@link BentoBoxType} definitions */
export const BENTO_BOX_TYPES = {
  profile: "profile" as const,
  experience: "experience" as const,
  code: "code" as const,
  blog: "blog" as const,
  settings: "settings" as const,
  education: "education" as const,
  skills: "skills" as const,
  // "now-playing": "now-playing" as const,
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
      desktop: { breakpoint: "desktop", span: { colSpan: 4, rowSpan: 1 }, order: 1 },
      tablet:  { breakpoint: "tablet", span: { colSpan: 2, rowSpan: 1 }, order: 1 },
      mobile: { breakpoint: "mobile", order: 1 },
    },
    isExpanded: () => true
  },
  experience: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 8, rowSpan: 1 }, order: 2 },
      tablet: { breakpoint: "tablet", span: { colSpan: 4, rowSpan: 1 }, order: 2 },
      mobile: { breakpoint: "mobile", order: 2 },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== Breakpoints.BreakpointLabels.mobile
  },
  blog: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 6, rowSpan: 1 }, order: 3 },
      tablet: { breakpoint: "tablet", span: { colSpan: 3, rowSpan: 1 }, order: 3 },
      mobile: { breakpoint: "mobile", order: 4 },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== Breakpoints.BreakpointLabels.mobile
  },
  code: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 6, rowSpan: 1 }, order: 4 },
      tablet: { breakpoint: "tablet", span: { colSpan: 3, rowSpan: 1 }, order: 4 },
      mobile: { breakpoint: "mobile", order: 5 },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== Breakpoints.BreakpointLabels.mobile
  },
  skills: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 7, rowSpan: 2 }, order: 5 },
      tablet: { breakpoint: "tablet", span: { colSpan: 4, rowSpan: 1 }, order: 5 },
      mobile: { breakpoint: "mobile", order: 6 },
    },
    isExpanded: () => false
  },
  education: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 5, rowSpan: 1 }, order: 6 },
      tablet:  { breakpoint: "tablet", span: { colSpan: 2, rowSpan: 1 }, order: 6 },
      mobile: { breakpoint: "mobile", order: 6 },
    },
    isExpanded: () => false
  },
  settings: {
    placement: {
      desktop: { breakpoint: "desktop", offsets: { col: 8 }, span: { colSpan: 5, rowSpan: 1 }, order: 7 },
      tablet: { breakpoint: "tablet", span: { colSpan: 6, rowSpan: 1 }, order: 7 },
      mobile: { breakpoint: "mobile", order: 7 },
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

    if ("order" in posA && "order" in posB) {
      return posA.order - posB.order;
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