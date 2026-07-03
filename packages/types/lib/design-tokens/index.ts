/**
 * Describes the Design Token shape for icons
 *
 * @export
 * @interface DesignTokenIcon
 * @typedef {DesignTokenIcon}
 */
export interface DesignTokenIcon {
  /** Display for dark mode */
  dark: string;

  /** Default option */
  default: string;

  /** Display for light mode */
  light: string;
}

/**
 * Extends {@link DesignTokenIcon} with a maskable asset
 *
 * @export
 * @interface MaskableDesignTokenIcon
 * @typedef {MaskableDesignTokenIcon}
 * @extends {DesignTokenIcon}
 */
export interface MaskableDesignTokenIcon extends DesignTokenIcon {
  /** Display a masked version */
  mask: string;
}