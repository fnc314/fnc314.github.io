import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} dedicated, explicitly, to the
 *   {@link --breakpoint} custom CSS `@property`
 *
 * @type {CSSResult}
 */
export const Breakpoints: CSSResult = css`
  @property --breakpoint {
    syntax: "mobile | tablet | desktop";
    inherits: true;
    initial-value: mobile;
  };

  html {
    --breakpoint: mobile;
  }

  @media screen and (width >= 1201px) {
    html {
      --breakpoint: desktop;
    }
  }

  @media  screen and (width >= 737px) and (width <= 1200px) {
    html {
      --breakpoint: tablet;
    }
  }
`;

/**
 * Values for the {@link --breakpoint} custom CSS `@property`
 * @typedef {Breakpoint}
 */
export type Breakpoint = "mobile" | "tablet" | "desktop";

/**
 * Reads from {@link window} the current value of {@link --breakpoint} CSS `@property`
 * @returns {Breakpoint}
 */
export const readBreakpoint: () => Breakpoint = () => window.getComputedStyle(
  document.documentElement
).getPropertyValue("--breakpoint") as Breakpoint;