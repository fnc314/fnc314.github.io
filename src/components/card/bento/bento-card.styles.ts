import { css } from "lit";

/**
 * @summary Styles for the BentoCard component.
 *
 * Implements glassmorphism using `backdrop-filter` and semi-transparent background colors
 * derived from Material Design 3 surface tokens. Provides interaction feedback via
 * CSS transitions on hover, including elevation (shadow), border color shifts, and translation.
 *
 * Includes specific styling for slotted `h2` elements to ensure visual consistency
 * for section headers within the bento grid layout.
 *
 * @packageDocumentation
 */
export const bentoCardStyles = css`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  .bento-card {
    -webkit-backdrop-filter: blur(12px);
    border-radius: var(--md-sys-shape-corner-large);
    background-color: color(from var(--md-sys-color-surface-container-low) srgb r g b / 90%);
    backdrop-filter: blur(12px);
    border: var(--hairline-width) solid var(--md-sys-color-outline-variant);
    padding: var(--spacing-padding-m);
    transition:
      transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.25s ease,
      border-color 0.25s ease,
      background-color 0.3s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
    box-shadow: var(--md-elevation-level-1);
    height: 100%;
    box-sizing: border-box;

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--md-elevation-level-3);
      border-color: var(--md-sys-color-outline);
      background-color: var(--md-sys-color-surface-container-high);
    }

    /* Style slotted h2 elements using nesting */
    & ::slotted(h2) {
      margin: var(--spacing-reset);
      color: var(--md-sys-color-primary);
      font-family: var(--md-ref-typeface-brand);
      border-bottom: var(--hairline-width) dashed var(--md-sys-color-outline-variant);
      padding-bottom: var(--spacing-padding-xs);
    }
  }

  .scrollable {
    overflow-y: auto;
    flex-grow: 1;
  }
`;