import { type Breakpoint } from "@/styles/breakpoints";

/**
 * Defines the 2 {@link number}s needed to place something
 *   on a `grid`
 *
 * @interface GridPlacement
 */
export interface GridPlacement {
  start: number;
  end: number;
}

/**
 * A pair of {@link GridPlacement}s for the {@link row} and {@link column}
 *   dimensions
 *
 * @interface GridPosition
 * @typedef {GridPosition}
 */
export interface GridPosition {
  breakpoint: Breakpoint;
  row: GridPlacement;
  column: GridPlacement;
}

/**
 * The finite `bento-box` instances
 *
 * @export
 * @typedef {BentoBoxType}
 */
export type BentoBoxType = "profile-photo-bio" | "work" | "code" | "blog" | "settings" | "connect" | "education" | "skills";

/**
 * Defines the {@link BentoBoxType} coupled with a {@link GridPosition} used
 *   to place a particular `bento-box`.
 *
 * @interface BentoBoxConfig
 */
export interface BentoBoxConfig {
  type: BentoBoxType;
  placementForBreakpoint(breakpoint: Breakpoint): GridPosition;
}

/**
 * Produces an {@link Array} of {@link BentoBoxConfig} instances used to populate
 *   {@link BentoLayout}.
 *
 * @type {BentoBoxConfig[]}
 */
export const BentoBoxConfigs: () => BentoBoxConfig[] = () => ([
  {
    type: "profile-photo-bio",
    placementForBreakpoint(breakpoint: Breakpoint) {
      switch (breakpoint) {
        case "mobile":
          return { breakpoint: "mobile", row: { start: 1, end: 2 }, column: { start: 1, end: -1 } };
        case "tablet":
          return { breakpoint: "tablet", row: { start: 1, end: 2 }, column: { start: 1, end: 3 } };
        case "desktop":
          return { breakpoint: "desktop", row: { start: 1, end: 2 }, column: { start: 1, end: 6 } };
        case "unknown":
        default:
          return { breakpoint: "unknown", row: { start: 1, end: 2 }, column: { start: 1, end: 6 } };
      }
    }
  },
  {
    type: "work",
    placementForBreakpoint(breakpoint: Breakpoint) {
      switch (breakpoint) {
        case "mobile":
          return { breakpoint: "mobile", row: { start: 2, end: 3 }, column: { start: 1, end: -1 } };
        case "tablet":
          return { breakpoint: "tablet", row: { start: 1, end: 2 }, column: { start: 3, end: -1 } };
        case "desktop":
          return { breakpoint: "desktop", row: { start: 1, end: 2 }, column: { start: 6, end: -1 } };
        case "unknown":
        default:
          return { breakpoint: "unknown", row: { start: 1, end: 2 }, column: { start: 3, end: -1 } };
      }
    }
  },
  {
    type: "blog",
    placementForBreakpoint(breakpoint: Breakpoint) {
      switch (breakpoint) {
        case "mobile":
          return { breakpoint: "mobile", row: { start: 3, end: 4 }, column: { start: 1, end: -1 } };
        case "tablet":
          return { breakpoint: "tablet", row: { start: 3, end: 4 }, column: { start: 1, end: -1 } };
        case "desktop":
          return { breakpoint: "desktop", row: { start: 2, end: 3 }, column: { start: 1, end: -1 } };
        case "unknown":
        default:
          return { breakpoint: "unknown", row: { start: 2, end: 3 }, column: { start: 1, end: -1 } };
      }
    }
  },
  {
    type: "code",
    placementForBreakpoint(breakpoint: Breakpoint) {
      switch (breakpoint) {
        case "mobile":
          return { breakpoint: "mobile", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } };
        case "tablet":
          return { breakpoint: "tablet", row: { start: 4, end: 5 }, column: { start: 1, end: -1 } };
        case "desktop":
          return { breakpoint: "desktop", row: { start: 3, end: 4 }, column: { start: 1, end: -1 } };
        case "unknown":
        default:
          return { breakpoint: "unknown", row: { start: 3, end: 4 }, column: { start: 1, end: -1 } };
      }
    }
  },
  {
    type: "skills",
    placementForBreakpoint(breakpoint: Breakpoint) {
      switch (breakpoint) {
        case "mobile":
          return { breakpoint: "mobile", row: { start: 5, end: 6 }, column: { start: 1, end: -1 } };
        case "tablet":
          return { breakpoint: "tablet", row: { start: 5, end: 7 }, column: { start: 1, end: -1 } };
        case "desktop":
          return { breakpoint: "desktop", row: { start: 4, end: 6 }, column: { start: 1, end: -1 } };
        case "unknown":
        default:
          return { breakpoint: "unknown", row: { start: 4, end: 6 }, column: { start: 1, end: -1 } };
      }
    }
  },
  {
    type: "education",
    placementForBreakpoint(breakpoint: Breakpoint) {
      switch (breakpoint) {
        case "mobile":
          return { breakpoint: "mobile", row: { start: 6, end: 7 }, column: { start: 1, end: -1 } };
        case "tablet":
          return { breakpoint: "tablet", row: { start: 7, end: 8 }, column: { start: 1, end: 4 } };
        case "desktop":
          return { breakpoint: "desktop", row: { start: 6, end: 7 }, column: { start: 2, end: 5 } };
        case "unknown":
        default:
          return { breakpoint: "unknown", row: { start: 6, end: 7 }, column: { start: 2, end: 5 } };
      }
    }
  },
  {
    type: "connect",
    placementForBreakpoint(breakpoint: Breakpoint) {
      switch (breakpoint) {
        case "mobile":
          return { breakpoint: "mobile", row: { start: 7, end: 8 }, column: { start: 1, end: -1 } };
        case "tablet":
          return { breakpoint: "tablet", row: { start: 7, end: 8 }, column: { start: 4, end: 7 } };
        case "desktop":
          return { breakpoint: "desktop", row: { start: 6, end: 7 }, column: { start: 5, end: 8 } };
        case "unknown":
        default:
          return { breakpoint: "unknown", row: { start: 6, end: 7 }, column: { start: 5, end: 8 } };
      }
    }
  },
  {
    type: "settings",
    placementForBreakpoint(breakpoint: Breakpoint) {
      switch (breakpoint) {
        case "mobile":
          return { breakpoint: "mobile", row: { start: 8, end: 9 }, column: { start: 1, end: -1 } };
        case "tablet":
          return { breakpoint: "tablet", row: { start: 8, end: 9 }, column: { start: 1, end: 7 } };
        case "desktop":
          return { breakpoint: "desktop", row: { start: 6, end: 7 }, column: { start: 8, end: 12 } };
        case "unknown":
        default:
          return { breakpoint: "unknown", row: { start: 6, end: 7 }, column: { start: 8, end: 12 } };
      }
    }
  },
]);