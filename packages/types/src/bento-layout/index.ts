import { type BreakpointLabel } from "@/lib/design-tokens";

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
export type GridPosition =
  | {
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
      };
    }
  | {
      /** The breakpoint for this position */
      breakpoint: Extract<BreakpointLabel, "mobile">;
      /** The logical order in the DOM */
      order: number;
    };

/**
 * The finite `bento-box` instances
 *
 * @typedef {BentoBoxType}
 */
export type BentoBoxType = "profile" | "experience" | "code" | "blog" | "settings" | "education" | "skills";

// "now-playing"
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
