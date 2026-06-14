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
      mobile: { breakpoint: "mobile" },
      tablet:  { breakpoint: "tablet", row: { start: 2, end: 4 }, column: { start: 1, end: 4 } },
      desktop: { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 1, end: 5 } },
      unknown: { breakpoint: "unknown", row: { start: 2, end: 3 }, column: { start: 1, end: 7 } }
    }
  },
  connect: {
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet:  { breakpoint: "tablet", row: { start: 2, end: 3 }, column: { start: 4, end: 7 } },
      desktop: { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 5, end: 9 } },
      unknown: { breakpoint: "unknown", row: { start: 5, end: 6 }, column: { start: 5, end: 9 } }
    }
  },
  education: {
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet:  { breakpoint: "tablet", row: { start: 3, end: 4 }, column: { start: 4, end: 7 } },
      desktop: { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 9, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 5, end: 6 }, column: { start: 1, end: 5 } }
    }
  },
  work: {
    expanded: false,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } },
      desktop: { breakpoint: "desktop", row: { start: 3, end: 4 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 2, end: 3 }, column: { start: 7, end: -1 } }
    }
  },
  blog: {
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 5, end: 6 }, column: { start: 1, end: 4 } },
      desktop: { breakpoint: "desktop", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 3, end: 4 }, column: { start: 1, end: 7 } }
    }
  },
  code: {
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 5, end: 6 }, column: { start: 4, end: -1 } },
      desktop: { breakpoint: "desktop", row: { start: 5, end: 6 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 3, end: 4 }, column: { start: 7, end: -1 } }
    }
  },
  skills: {
    expanded: false,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 6, end: 7 }, column: { start: 1, end: -1 } },
      desktop: { breakpoint: "desktop", row: { start: 6, end: 7 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } }
    }
  },
  settings: {
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 7, end: 8 }, column: { start: 1, end: -1 } },
      desktop: { breakpoint: "desktop", row: { start: 7, end: 8 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 5, end: 6 }, column: { start: 9, end: 13 } }
    }
  }
};

/**
 * Produces an Array of {@link ABentoBoxConfig} instances used to populate
 *   {@link @fnc314/fnc314.github.io!BentoLayout}.
 *
 * @type {ABentoBoxConfig[]}
 */
export const BentoBoxConfigs: () => ABentoBoxConfig[] = () => ([
  {
    type: "profile-photo-bio",
    expanded: false,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet:  { breakpoint: "tablet", row: { start: 2, end: 4 }, column: { start: 1, end: 4 } },
      desktop: { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 1, end: 5 } },
      unknown: { breakpoint: "unknown", row: { start: 2, end: 3 }, column: { start: 1, end: 7 } }
    }
  },
  {
    type: "connect",
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet:  { breakpoint: "tablet", row: { start: 2, end: 3 }, column: { start: 4, end: 7 } },
      desktop: { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 5, end: 9 } },
      unknown: { breakpoint: "unknown", row: { start: 5, end: 6 }, column: { start: 5, end: 9 } }
    }
  },
  {
    type: "education",
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet:  { breakpoint: "tablet", row: { start: 3, end: 4 }, column: { start: 4, end: 7 } },
      desktop: { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 9, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 5, end: 6 }, column: { start: 1, end: 5 } }
    }
  },
  {
    type: "work",
    expanded: false,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } },
      desktop: { breakpoint: "desktop", row: { start: 3, end: 4 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 2, end: 3 }, column: { start: 7, end: -1 } }
    }
  },
  {
    type: "blog",
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 5, end: 6 }, column: { start: 1, end: 4 } },
      desktop: { breakpoint: "desktop", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 3, end: 4 }, column: { start: 1, end: 7 } }
    }
  },
  {
    type: "code",
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 5, end: 6 }, column: { start: 4, end: -1 } },
      desktop: { breakpoint: "desktop", row: { start: 5, end: 6 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 3, end: 4 }, column: { start: 7, end: -1 } }
    }
  },
  {
    type: "skills",
    expanded: false,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 6, end: 7 }, column: { start: 1, end: -1 } },
      desktop: { breakpoint: "desktop", row: { start: 6, end: 7 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } }
    }
  },
  {
    type: "settings",
    expanded: true,
    placement: {
      mobile: { breakpoint: "mobile" },
      tablet: { breakpoint: "tablet", row: { start: 7, end: 8 }, column: { start: 1, end: -1 } },
      desktop: { breakpoint: "desktop", row: { start: 7, end: 8 }, column: { start: 1, end: -1 } },
      unknown: { breakpoint: "unknown", row: { start: 5, end: 6 }, column: { start: 9, end: 13 } }
    }
  },
]);

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
export const BentoBoxConfigs2 = (breakpoint: Breakpoint = "desktop"): ABentoBoxConfig[] =>
  getBentoDOMOrder(breakpoint).map((type) => ({
    type,
    ...BENTO_BOX_CONFIG[type],
  }));