import { type Breakpoint } from "@/types/breakpoints";

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
  breakpoint: Exclude<Breakpoint, "mobile">;
  /** The row placement */
  row: GridPlacement;
  /** The column placement */
  column: GridPlacement;
  /** The grid area string */
  area?: string;
} | {
  /** The breakpoint for this position */
  breakpoint: "mobile"
}

/**
 * The finite `bento-box` instances
 *
 * @export
 * @typedef {BentoBoxType}
 */
export type BentoBoxType = "profile-photo-bio" | "work" | "code" | "blog" | "settings" | "connect" | "education" | "skills";
export const BENTO_BOX_TYPES: BentoBoxType[] = [
  "profile-photo-bio",
  "work",
  "code",
  "blog",
  "settings",
  "connect",
  "education",
  "skills"
];

/**
 * Defines the {@link BentoBoxType} coupled with a {@link GridPosition} used
 *   to place a particular `bento-box`.
 *
 * @interface BentoBoxConfig
 */
export interface ABentoBoxConfig {
  type: BentoBoxType;
  expanded?: boolean;
  placement: Record<Breakpoint, GridPosition>;
}

export type BentoBoxConfigs = Record<BentoBoxType, Omit<ABentoBoxConfig, "type">>;

export const BENTO_BOX_CONFIG: BentoBoxConfigs = {
  "profile-photo-bio": {
    expanded: false,
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 1, end: 5 } },
      tablet:  { breakpoint: "tablet", row: { start: 2, end: 4 }, column: { start: 1, end: 4 } },
      mobile: { breakpoint: "mobile" },
    }
  },
  connect: {
    expanded: true,
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 5, end: 9 } },
      tablet:  { breakpoint: "tablet", row: { start: 2, end: 3 }, column: { start: 4, end: 7 } },
      mobile: { breakpoint: "mobile" },
    }
  },
  education: {
    expanded: true,
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 9, end: -1 } },
      tablet:  { breakpoint: "tablet", row: { start: 3, end: 4 }, column: { start: 4, end: 7 } },
      mobile: { breakpoint: "mobile" },
    }
  },
  work: {
    expanded: false,
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 3, end: 4 }, column: { start: 1, end: -1 } },
      tablet: { breakpoint: "tablet", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } },
      mobile: { breakpoint: "mobile" },
    }
  },
  blog: {
    expanded: true,
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } },
      tablet: { breakpoint: "tablet", row: { start: 5, end: 6 }, column: { start: 1, end: 4 } },
      mobile: { breakpoint: "mobile" },
    }
  },
  code: {
    expanded: true,
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 5, end: 6 }, column: { start: 1, end: -1 } },
      tablet: { breakpoint: "tablet", row: { start: 5, end: 6 }, column: { start: 4, end: -1 } },
      mobile: { breakpoint: "mobile" },
    }
  },
  skills: {
    expanded: false,
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 6, end: 7 }, column: { start: 1, end: -1 } },
      tablet: { breakpoint: "tablet", row: { start: 6, end: 7 }, column: { start: 1, end: -1 } },
      mobile: { breakpoint: "mobile" },
    }
  },
  settings: {
    expanded: true,
    placement: {
      desktop: { breakpoint: "desktop", row: { start: 7, end: 8 }, column: { start: 1, end: -1 } },
      tablet: { breakpoint: "tablet", row: { start: 7, end: 8 }, column: { start: 1, end: -1 } },
      mobile: { breakpoint: "mobile" },
    }
  }
};

/**
 * Determines the logical DOM order for bento box types based on grid placement.
 * Reading order follows Top-to-Bottom, then Start-to-End (Leading-to-Trailing).
 *
 * @param breakpoint - The current active breakpoint.
 * @returns An array of {@link BentoBoxType} in the appropriate order for the DOM.
 */
export function getBentoDOMOrder(breakpoint: Breakpoint): BentoBoxType[] {
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
export const BentoBoxConfigs = (breakpoint: Breakpoint = "desktop"): ABentoBoxConfig[] =>
  getBentoDOMOrder(breakpoint).map((type) => ({
    type,
    ...BENTO_BOX_CONFIG[type],
  }));