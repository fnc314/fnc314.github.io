/**
 * Values for the \`--breakpoint-label\` custom CSS property
 *
 * @typedef Breakpoint
 */
export type Breakpoint = "unknown" | "mobile" | "tablet" | "desktop";
export const BREAKPOINT_NAMES: Breakpoint[] = ["unknown", "mobile", "tablet", "desktop"];

/**
 * Reads from \`window\` the current value of \`--breakpoint-label\`
 *   CSS `@property`
 * @returns The current {@link Breakpoint}
 */
export const readBreakpoint: () => Breakpoint = () => window
  .getComputedStyle(window.document.documentElement)
  .getPropertyValue("--breakpoint-label") as Breakpoint
  ?? "unknown";