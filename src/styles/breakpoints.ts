import type { BreakpointTokens } from "@fnc314/design-tokens/src/types";

/**
 * Values for the {@link --breakpoint-label} custom CSS `@property`
 *
 * @typedef {Breakpoint}
 */
export type Breakpoint = "unknown" | "mobile" | "tablet" | "desktop";
export const BREAKPOINT_NAMES: Breakpoint[] = ["unknown", "mobile", "tablet", "desktop"];

/**
 * Reads from {@link window} the current value of {@link --breakpoint-label}
 *   CSS `@property`
 *
 * @param element - An {@link HTMLElement} upon which {@link window.getComputedStyle}
 *   is invoked
 * @returns {Breakpoint}
 */
export const readBreakpoint: () => Breakpoint = () => window
  .getComputedStyle(window.document.documentElement)
  .getPropertyValue("--breakpoint-label") as Breakpoint
  ?? "unknown";