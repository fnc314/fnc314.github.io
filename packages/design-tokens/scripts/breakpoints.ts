/** The CSS Variable changed across device breakpoints */
export const CSS_VARIABLE_BREAKPOINT_LABEL: string = "--breakpoint-label" as const;

/**
 * Values for the {@link CSS_VARIABLE_BREAKPOINT_LABEL} custom CSS property
 *
 * @typedef Breakpoint
 */
export type BreakpointLabel = "mobile" | "tablet" | "desktop";

/**
 * Iterable set of {@link BreakpointLabel}
 */
export const BREAKPOINT_LABELS: BreakpointLabel[] = [
  "mobile",
  "tablet",
  "desktop"
];

/**
 * Type-safe constants exposed to perform checks
 */
export const BreakpointLabels = {
  mobile: "mobile" as const,
  tablet: "tablet" as const,
  desktop: "desktop" as const,
} as const;

/**
 * Defines the {@link min} and {@link max} values
 *   for a breakpoint
 */
export interface BreakpointRange {
  min: number;
  max: number;
}

/**
 * Binds the {@link BreakpointLabel}s to their {@link BreakpointRange}
 */
export interface Breakpoints extends Record<BreakpointLabel, BreakpointRange> {}

/**
 * A static implementation of {@link Breakpoints}
 *
 * @type {Breakpoints}
 */
export const BREAKPOINTS: Breakpoints = {
  mobile: {
    min: 0 as const,
    max: 768 as const,
  } as const,
  tablet: {
    min: 769 as const,
    max: 1200 as const
  } as const,
  desktop: {
    min: 1201 as const,
    max: Number.POSITIVE_INFINITY
  } as const,
} as const;