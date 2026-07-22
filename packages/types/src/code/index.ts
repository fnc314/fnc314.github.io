import { type DesignTokenIcon } from "@/lib/design-tokens";

/**
 * The `const` for the `CSS @property`
 */
export const CSS_PROPERTY_CODE_REPO_WORD_TAG_SIZE = "--code-repo-word-tag-size";

/**
 * A {@link Record} of pre-defined values exposed as a custom `CSS @property`
 */
export const WORD_TAG_SIZES = {
  full: "full" as const,
  compact: "compact" as const,
  condensed: "condensed" as const,
} as const;

/** We give {@link @fnc314/packages.components!WordTag} various treatments within this component */
export type WordTagSize = keyof typeof WORD_TAG_SIZES;

/**
 * Represents a single project entry loaded from `code.json`.
 *
 * This interface mirrors the shape used by the `code` data loader and the
 * components that render project cards in the `code` partial.
 */
export interface CodeRepoData {
  /** Short description or summary of the project. */
  description: string;

  /** Human-readable project title. */
  name: string;

  /** Array of technologies used by the project. */
  tech: CodeRepoTech[];

  /** Public URL for the project (website or repository). */
  url: string;

  /** The bit of {@link url} which begins with `fnc314/` */
  repo: `fnc314/${string}`;
}

/**
 * Represents a single technology entry used by a project.
 */
export interface CodeRepoTech extends CodeRepoPopover {
  /** A generated `CSS Variable` from `@fnc314/packages.types` */
  designToken: string | DesignTokenIcon;

  /** Display name for the technology (e.g., "TypeScript"). */
  name: string;

  /** URL with more information about the technology. */
  url: string;
};

/**
 * @summary The content used to drive the `popover`s in the `<word-tag>`
 *
 * @export
 * @interface CodeRepoPopover
 * @typedef {CodeRepoPopover}
 */
export interface CodeRepoPopover {
  popoverContent: string | string[];
};
