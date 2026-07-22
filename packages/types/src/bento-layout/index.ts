import { type BreakpointLabel } from "@/lib/design-tokens";

/**
 * @summary The finite `bento-box` instances
 *
 * @typedef {BentoBoxType}
 */
export type BentoBoxType = keyof typeof BENTO_BOX_TYPES;

/** A {@link Record} of {@link BentoBoxType} definitions */
export const BENTO_BOX_TYPES = {
  profile: "profile" as const,
  experience: "experience" as const,
  code: "code" as const,
  blog: "blog" as const,
  settings: "settings" as const,
  education: "education" as const,
  skills: "skills" as const,
  connections: "connections" as const,
} as const;

/**
 * @summary Defines the {@link BentoBoxType} coupled with a {@link GridPosition}
 *   used to place a particular `bento-box`.
 *
 * @interface BentoBoxConfig
 */
export interface BentoBoxConfig {
  isExpanded: (breakpoint: BreakpointLabel) => boolean;
  order: number;
}

/**
 * @summary The complete configuration for `bento-layout`
 *
 * @export
 * @typedef {BentoBoxConfigs}
 */
export type BentoBoxConfigs = Record<BentoBoxType, BentoBoxConfig>;
