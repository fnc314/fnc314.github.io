import {
    type BentoBoxConfigs,
    type BreakpointLabel,
    BreakpointLabels
} from "@fnc314/packages.types";

/** Titles to grab attention, joined with `|` but in HTML Entity Code (`&#124;`) */
export const titles: string = [
  "Principal Software Engineer",
  "Enterprise Android & System Architecture",
  "Leading High-Performing Teams, Building Modern Platforms, and the Engineering Foundations Behind Great Products",
].join(" &#124; ");

/** The final rendered {@link BentoBoxConfigs} */
export const BENTO_BOX_CONFIG: BentoBoxConfigs = {
  profile: {
    isExpanded: () => true,
    order: 1,
  },
  connections: {
    isExpanded: () => true,
    order: 2,
  },
  experience: {
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== BreakpointLabels.mobile,
    order: 3,
  },
  code: {
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== BreakpointLabels.mobile,
    order: 4,
  },
  blog: {
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== BreakpointLabels.mobile,
    order: 5,
  },
  skills: {
    isExpanded: () => false,
    order: 6,
  },
  education: {
    isExpanded: () => false,
    order: 7,
  },
  settings: {
    isExpanded: () => false,
    order: 8,
  }
};