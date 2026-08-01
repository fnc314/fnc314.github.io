import { type TemplateResult } from "lit";

/**
 * Design Tokens v2
 */
export interface IconVariants {
  dark: TemplateResult;
  light: TemplateResult;
  default?: TemplateResult;
  mask?: TemplateResult;
}

/**
 * Creates a type-safe path type for accessing icons
 *
 * @example
 * type IconsPath = "Logos.Tech.Android"
 * type FullIconsPath = `${IconsPath}.dark`
 */
type IconsPath = 
  | "Logos.Tech.Android"
  | "Logos.Tech.Bash"
  | "Logos.Tech.Eslint"
  | "Logos.Tech.Gradle"
  | "Logos.Tech.Kotlin"
  | "Logos.Tech.Lit"
  | "Logos.Tech.MaterialDesign"
  | "Logos.Tech.Mise"
  | "Logos.Tech.Node"
  | "Logos.Tech.Pnpm"
  | "Logos.Tech.Posctcss"
  | "Logos.Tech.Prettier"
  | "Logos.Tech.Python"
  | "Logos.Tech.Ruby"
  | "Logos.Tech.StyleDictionary"
  | "Logos.Tech.Stylelint"
  | "Logos.Tech.TypeScript"
  | "Logos.Tech.TypeScriptEslint"
  | "Logos.Tech.Turborepo"
  | "Logos.Tech.TypeScript"
  | "Logos.Tech.Vite"
  | "Logos.Tech.Zsh"
  | "Logos.Organization.Github"
  | "Logos.Organization.LinkedIn"
  | "Logos.Organization.Medium"
  | "Logos.Education.GeneralAssembly"
  | "Logos.Education.UniversityOfPittsburgh"
  | "Logos.Tech.Poetry"
  | "Icons.Components.UiModeToggle"
  | "Icons.Material.Call"
  | "Icons.Material.Docs"
  | "Icons.Material.Mail"
  | "Icons.Material.PictureAsPdf"
  | "Icons.Material.ArrowDropDown"
;

/**
 * A union type representing all possible icon paths
 */
type IconsPathUnion = IconsPath;

/**
 * A helper type to extract the icon path parts
 */
type IconsPathParts<T extends IconsPath> = T extends `${infer Prefix}.${infer Suffix}`
  ? { prefix: Prefix; suffix: Suffix }
  : { prefix: T; suffix?: "dark" | "light" | "default" | "mask" | `${string}` };

/**
 * A utility function to navigate the Icons namespace
 *
 * @param path The path to navigate
 * @returns The icon or object at the path
 */
export function getIcon(path: IconsPath): IconVariants {
  // This will be populated by the style-dictionary generation
  return {} as IconVariants;
}

/**
 * A type-safe way to access specific icon variants
 *
 * @param path The path to the icon
 * @param variant The variant to access
 * @returns The TemplateResult for the variant
 */
export function getIconVariant<P extends IconsPath, V extends IconVariants[keyof IconVariants] & TemplateResult>(
  path: P,
  variant: V extends IconVariants["dark"] ? "dark" : V extends IconVariants["light"] ? "light" : V extends IconVariants["default"] ? "default" : V extends IconVariants["mask"] ? "mask" : never
): V {
  return {} as V;
}

/**
 * Describes the Design Token shape for icons with a `light` and `dark` variation
 */
export interface DesignTokenIcon {
  /** Display for dark mode */
  dark: string;

  /** Display for light mode */
  light: string;
}

/**
 * Defines a simple `interface` with a `default` property
 */
export interface DesignTokenIconDefault {
  /** Default option */
  default: string;
}

/**
 * Defines a simple `interface` with a `mask` property
 */
export interface DesignTokenIconMaskable {
  /** Display a masked version */
  mask: string;
}

/**
 * Adds {@link DesignTokenIconWithDefault.default} to {@link DesignTokenIcon}
 *
 * @extends DesignTokenIcon
 * @extends DesignTokenIconDefault
 */
export interface DesignTokenIconWithDefault extends DesignTokenIcon, DesignTokenIconDefault {}

/**
 * Extends {@link DesignTokenIcon} with a {@link DesignTokenIconMaskable.mask}
 *
 * @extends DesignTokenIcon
 * @extends DesignTokenIconMaskable
 */
export interface MaskableDesignTokenIcon extends DesignTokenIcon, DesignTokenIconMaskable {}

/**
 * Describes an icon with both {@link DesignTokenIconWithDefault.default} and {@link DesignTokenIconMaskable.mask}
 *
 * @extends DesignTokenIconWithDefault
 * @extends DesignTokenIconMaskable
 */
export interface MaskableDesignTokenIconWithDefault extends DesignTokenIconWithDefault, DesignTokenIconMaskable {}

/** The CSS Variable changed across device breakpoints */
export const CSS_VARIABLE_BREAKPOINT_LABEL: string = "--breakpoint-label" as const;

/**
 * Values for the {@link CSS_VARIABLE_BREAKPOINT_LABEL} custom CSS property
 *
 * @typedef Breakpoint
 */
export type BreakpointLabel = "mobile" | "tablet" | "desktop";

/**
 * Iterable set of {@link BreakpointLabel}
 */
export const BREAKPOINT_LABELS: BreakpointLabel[] = ["mobile", "tablet", "desktop"];

/**
 * Type-safe constants exposed to perform checks
 */
export const BreakpointLabels = {
  mobile: "mobile" as const,
  tablet: "tablet" as const,
  desktop: "desktop" as const,
} as const;

/**
 * Defines the {@link min} and {@link max} values
 *   for a breakpoint
 */
export interface BreakpointRange {
  min: number;
  max: number;
}

/**
 * Binds the {@link BreakpointLabel}s to their {@link BreakpointRange}
 */
export interface Breakpoints {
  /** The {@link BreakpointRange} applied at the `mobile` breakpoint */
  mobile: BreakpointRange;
  /** The {@link BreakpointRange} applied at the `tablet` breakpoint */
  tablet: BreakpointRange;
  /** The {@link BreakpointRange} applied at the `desktop` breakpoint */
  desktop: BreakpointRange;
}

/**
 * A static implementation of {@link Breakpoints}
 *
 * @type {Breakpoints}
 */
export const BREAKPOINTS: Breakpoints = {
  mobile: {
    min: 0 as const,
    max: 768 as const,
  } as const,
  tablet: {
    min: 769 as const,
    max: 1200 as const,
  } as const,
  desktop: {
    min: 1201 as const,
    max: Number.POSITIVE_INFINITY,
  } as const,
} as const;

/** The CSS Variable set by `@media` query of `screen` and `pointer: coarse` */
export const CSS_VARIABLE_TOUCH_SCREEN: string = "--touch-screen";
