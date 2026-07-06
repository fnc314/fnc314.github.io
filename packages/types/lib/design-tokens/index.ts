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