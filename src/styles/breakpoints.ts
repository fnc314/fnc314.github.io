import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} dedicated, explicitly, to the
 *   {@link --breakpoint-label} custom CSS `@property`
 *
 * @type {CSSResult}
 */
export const Breakpoints: CSSResult = css`
  @property --breakpoint-label {
    syntax: "unknown | mobile | tablet | desktop";
    inherits: true;
    initial-value: unknown;
  };

  @media screen and (width <= 736px) {
    :root {
      --breakpoint-label: mobile;
    }
  }

  @media screen and (width >= 1201px) {
    :root {
      --breakpoint-label: desktop;
    }
  }

  @media screen and (width >= 737px) and (width <= 1200px) {
    :root {
      --breakpoint-label: tablet;
    }
  }
`;

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