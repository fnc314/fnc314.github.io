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
export const BentoCardStyles = css`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  .bento-card {
    backdrop-filter: blur(12px);
    background-color: var(--md-sys-color-surface-container-low);
    border: var(--hairline-width) solid var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-large);
    box-shadow: var(--md-sys-elevation-level1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    padding: var(--spaces-padding-m);
    transition:
      transform var(--motions-duration-short) var(--motions-easing-emphasized),
      box-shadow var(--motions-duration-short) var(--motions-easing-base),
      border-color var(--motions-duration-short) var(--motions-easing-base),
      background-color var(--motions-duration-medium) var(--motions-easing-base);
  }

  summary {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    list-style: none;
    outline: none;
    padding: 0;
    user-select: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  .indicator {
    color: var(--md-sys-color-on-surface-variant);
    transition: transform var(--motions-duration-medium) var(--motions-easing-standard);
  }

  details[open] .indicator {
    transform: rotate(var(--motions-rotation-180));
  }

  /* Expansion Animation Logic */
  .expansion-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows var(--motions-duration-medium) var(--motions-easing-standard);
  }

  details[open] .expansion-wrapper {
    grid-template-rows: 1fr;
  }

  .expansion-content {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    min-height: 0;
    padding-block: var(--spaces-padding-xs);
  }

  /* Conditional Interaction States */
  .bento-card.enable-hover:hover {
    background-color: var(--md-sys-color-surface-container-high);
    border-color: var(--md-sys-color-outline);
    transform: translateY(var(--motions-transform-hover-lift));
  }

  .bento-card.enable-focus:focus-within {
    border-color: var(--md-sys-color-primary);
  }

  /* Style slotted header elements (h2 by default) */
  h2 {
    border-bottom: var(--hairline-width) dashed var(--md-sys-color-outline-variant);
    color: var(--md-sys-color-primary);
    flex-grow: 1;
    font-family: var(--md-ref-typeface-brand);
    margin: var(--spaces-none) !important;
    padding-block-end: var(--spaces-padding-xs);
  }

  .scrollable {
    .expansion-content {
      flex-grow: 1;
      overflow-y: auto;
    }
  }
`;