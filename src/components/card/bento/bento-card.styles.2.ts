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
    padding: var(--spacing-padding-m);
    transition:
      transform var(--motion-duration-short) var(--motion-easing-emphasized),
      box-shadow var(--motion-duration-short) var(--motion-easing-base),
      border-color var(--motion-duration-short) var(--motion-easing-base),
      background-color var(--motion-duration-medium) var(--motion-easing-base);

    &.enable-hover:hover {
      background-color: var(--md-sys-color-surface-container-high);
      border-color: var(--md-sys-color-outline);
      transform: translateY(var(--motion-transform-hover-lift));
    }

    &.enable-focus:focus {
      border-color: var(--md-sys-color-primary);
    }
  }

  details {
    summary {
      align-items: center;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      list-style: none;
      outline: none;
      padding: var(--spacing-reset);
      user-select: none;
    }

    /* Expansion Animation Logic */
    .expansion-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition:
        grid-template-rows var(--motion-duration-medium) var(--motion-easing-standard);
    }

    &[open] {
      color: var(--md-sys-color-on-surface-variant);
      transition: transform var(--motion-duration-medium) var(--motion-easing-standard);

      .indicator {
        transform: rotate(var(--motion-rotation-90));
      }

      .expansion-wrapper {
        grid-template-rows: 1fr;
      }
    }
  }

  summary::-webkit-details-marker {
    display: none;
  }

  /* Expansion Animation Logic */
  .expansion-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition:
      grid-template-rows var(--motion-duration-medium) var(--motion-easing-standard);
  }

  .expansion-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-gap-s);
    min-height: 0;
    padding-block: var(--spacing-padding-xs);
  }

  /* Style slotted header elements (h2 by default) */
  h2 {
    border-bottom: var(--hairline-width) dashed var(--md-sys-color-outline-variant);
    color: var(--md-sys-color-primary);
    flex-grow: 1;
    font-family: var(--md-ref-typeface-brand);
    margin: var(--spacing-reset) !important;
    padding-block-end: var(--spacing-padding-xs);
  }

  .scrollable {
    .expansion-content {
      flex-grow: 1;
      overflow-y: auto;
    }
  }
`;