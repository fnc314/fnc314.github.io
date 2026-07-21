import {
    type ABentoBoxConfig,
    type BentoBoxConfigs,
    type BentoBoxType,
    type BreakpointLabel,
    BreakpointLabels,
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
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 4, rowSpan: 2 }, order: 1 },
      tablet: { breakpoint: "tablet", offsets: { row: 1 }, span: { colSpan: 2, rowSpan: 1 }, order: 1 },
      mobile: { breakpoint: "mobile", order: 1 },
    },
    isExpanded: () => true,
  },
  connections: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 8, rowSpan: 1 }, order: 2 },
      tablet: { breakpoint: "tablet", span: { colSpan: 4, rowSpan: 1 }, order: 2 },
      mobile: { breakpoint: "mobile", order: 2 },
    },
    isExpanded: () => true,
  },
  experience: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 8, rowSpan: 1 }, order: 3 },
      tablet: { breakpoint: "tablet", span: { colSpan: 4, rowSpan: 1 }, order: 3 },
      mobile: { breakpoint: "mobile", order: 3 },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== BreakpointLabels.mobile,
  },
  code: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 6, rowSpan: 1 }, order: 4 },
      tablet: { breakpoint: "tablet", span: { colSpan: 3, rowSpan: 1 }, order: 4 },
      mobile: { breakpoint: "mobile", order: 4 },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== BreakpointLabels.mobile,
  },
  blog: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 6, rowSpan: 1 }, order: 5 },
      tablet: { breakpoint: "tablet", span: { colSpan: 3, rowSpan: 1 }, order: 5 },
      mobile: { breakpoint: "mobile", order: 5 },
    },
    isExpanded: (breakpoint: BreakpointLabel) => breakpoint !== BreakpointLabels.mobile,
  },
  skills: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 7, rowSpan: 2 }, order: 6 },
      tablet: { breakpoint: "tablet", span: { colSpan: 4, rowSpan: 1 }, order: 6 },
      mobile: { breakpoint: "mobile", order: 6 },
    },
    isExpanded: () => false,
  },
  education: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 5, rowSpan: 1 }, order: 7 },
      tablet: { breakpoint: "tablet", span: { colSpan: 2, rowSpan: 1 }, order: 7 },
      mobile: { breakpoint: "mobile", order: 7 },
    },
    isExpanded: () => false,
  },
  settings: {
    placement: {
      desktop: { breakpoint: "desktop", span: { colSpan: 12, rowSpan: 1 }, order: 8 },
      tablet: { breakpoint: "tablet", span: { colSpan: 6, rowSpan: 1 }, order: 8 },
      mobile: { breakpoint: "mobile", order: 8 },
    },
    isExpanded: () => false,
  }
};

/**
 * Determines the logical DOM order for bento box types based on grid placement.
 * Reading order follows Top-to-Bottom, then Start-to-End (Leading-to-Trailing).
 *
 * @param breakpoint - The current active breakpoint.
 * @returns An array of {@link BentoBoxType} in the appropriate order for the DOM.
 */
export function getBentoDOMOrder(breakpoint: BreakpointLabel): BentoBoxType[] {
  // Use desktop as the sequence authority if we are on a non-grid breakpoint (mobile)
  const sortBreakpoint = breakpoint === "mobile" ? "desktop" : breakpoint;
  const types = Object.keys(BENTO_BOX_CONFIG) as BentoBoxType[];

  return types.sort((a, b) => {
    const posA = BENTO_BOX_CONFIG[a].placement[sortBreakpoint];
    const posB = BENTO_BOX_CONFIG[b].placement[sortBreakpoint];

    if ("order" in posA && "order" in posB) {
      return posA.order - posB.order;
    }
    return 0;
  });
}

/**
 * Produces an array of {@link ABentoBoxConfig} instances sorted for proper DOM order.
 */
export const BentoBoxConfigsArray = (breakpoint: BreakpointLabel = "desktop"): ABentoBoxConfig[] =>
  getBentoDOMOrder(breakpoint).map((type) => ({
    type,
    ...BENTO_BOX_CONFIG[type],
  }));
