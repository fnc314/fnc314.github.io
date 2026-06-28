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
    block-size: 100%;
    container-name: bento-card-container;
    container-type: inline-size;
    display: block;
    inline-size: 100%;

    --md-focus-ring-shape: var(--md-sys-shape-corner-small);
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    &:has(details[open]) {
      // block-size: 100%;
    }
  }

  .bento-card {
    backdrop-filter: blur(12px);
    background-color: var(--md-sys-color-surface-container-lowest);
    block-size: 100%;
    inline-size: 100%;
    border: var(--sizes-thickness-hairline) solid var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-large);
    box-shadow: var(--md-sys-elevation-level1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    padding: var(--spaces-padding-s);
    transition:
      transform var(--motions-duration-short) var(--motions-easing-emphasized),
      box-shadow var(--motions-duration-short) var(--motions-easing-base),
      border-color var(--motions-duration-short) var(--motions-easing-base),
      background-color var(--motions-duration-medium) var(--motions-easing-base);

    &.enable-hover:hover {
      background-color: var(--md-sys-color-surface-container-high);
      border-color: var(--md-sys-color-outline);
      transform: translateY(var(--motions-transform-hover-lift));
    }

    /* Conditional Interaction States */
    &.enable-focus:focus-within {
      border-color: var(--md-sys-color-primary);
    }

    &.spread-content {
      .expansion-content {
        block-size: 100%;
        flex-grow: 1;
        justify-content: space-between;
      }
    }
  }

  details {

    summary {
      position: relative;
      align-items: center;
      border-block-end: var(--sizes-thickness-hairline) dashed var(--md-sys-color-outline-variant);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      list-style: none;
      outline: none;
      padding: var(--spaces-none);
      user-select: none;

      &::-webkit-details-marker {
        display: none;
      }

      /* Style slotted header elements (h2 by default) */
      h2 {
        font-variant: small-caps;
        color: var(--md-sys-color-primary);
        flex-grow: 1;
        font-family: var(--md-ref-typeface-brand);
        margin: var(--spaces-none);
        padding-block-end: var(--spaces-padding-xs);
      }

      md-icon {
        --md-icon-size: 2rem;
        color: var(--md-sys-color-primary);
        transition: transform var(--motions-duration-medium) var(--motions-easing-standard);
      }
    }

    /* Expansion Animation Logic */
    .expansion-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows var(--motions-duration-medium) var(--motions-easing-standard);
    }

    &[open] {
      md-icon {
        transform: rotate(var(--motions-rotation-180));
      }

      .expansion-wrapper {
        grid-template-rows: 1fr;

        .expansion-content {
          display: flex;
          flex-direction: column;
          gap: var(--spaces-gap-s);
          min-block-size: 0;
          padding-block: var(--spaces-padding-xs);
        }
      }
    }
  }

  .scrollable {
    .expansion-content {
      flex-grow: 1;
      overflow-block: auto;
    }
  }

  @container bento-card-container (min-width: 500px) {
    .bento-card {
      // padding: var(--spaces-padding-m);
    }
  }
`;