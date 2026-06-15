/**
 * Represents a single project entry loaded from `code.json`.
 *
 * This interface mirrors the shape used by the `code` data loader and the
 * components that render project cards in the `code` partial.
 *
 * @export
 */
export interface CodeProjectData {
  /** Short description or summary of the project. */
  description: string;
  /** Human-readable project title. */
  name: string;
  /** Array of technologies used by the project. */
  tech: CodeProjectTech[];
  /** Public URL for the project (website or repository). */
  url: string;
}

/**
 * Represents a single technology entry used by a project.
 *
 * @export
 */
export interface CodeProjectTech {
  /** A generated `CSS Variable` from `@fnc314/design-tokens` */
  designToken?: string | undefined;

  /** Display name for the technology (e.g., "TypeScript"). */
  name: string;

  /** URL with more information about the technology. */
  url: string;
}
