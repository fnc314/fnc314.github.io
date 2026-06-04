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
 * The finite `bento-box` instances
 *
 * @export
 * @typedef {BentoBoxType}
 */
export type BentoBoxType = "profile-photo-bio" | "work" | "code" | "blog" | "settings" | "connect" | "education" | "skills";

/**
 * Defines the {@link BentoBoxType} coupled with a pair of {@link GridPlacement}s
 *   for {@link BentoBoxConfig["row"]} and {@link BentoBoxConfig["column"]} definitions
 *
 * @interface BentoBoxConfig
 */
export interface BentoBoxConfig {
  type: BentoBoxType;
  row: GridPlacement;
  column: GridPlacement;
}

/**
 * An {@link Array} of {@link BentoBoxConfig} instances used to populate
 *   {@link BentoLayout}
 *
 * @type {BentoBoxConfig[]}
 */
export const BENTO_BOX_LAYOUT_CONFIG: BentoBoxConfig[] = [
  {
    type: "profile-photo-bio",
    row: { start: 1, end: 2 },
    column: { start: 1, end: 6 }
  },
  {
    type: "work",
    row: { start: 1, end: 2 },
    column: { start: 6, end: -1 }
  },
  {
    type: "blog",
    row: { start: 2, end: 3 },
    column: { start: 1, end: -1 }
  },
  {
    type: "code",
    row: { start: 3, end: 4 },
    column: { start: 1, end: -1 }
  },
  {
    type: "skills",
    row: { start: 4, end: 6 },
    column: { start: 1, end: -1 }
  },
  {
    type: "education",
    row: { start: 6, end: 7 },
    column: { start: 2, end: 5 }
  },
  {
    type: "connect",
    row: { start: 6, end: 7 },
    column: { start: 5, end: 8 }
  },
  {
    type: "settings",
    row: { start: 6, end: 7 },
    column: { start: 8, end: 12 }
  },
];