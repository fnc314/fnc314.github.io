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
    box-shadow: var(--md-elevation-level-1);
    height: 100%;
    box-sizing: border-box;
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    user-select: none;
    outline: none;
    padding: 0;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  .indicator {
    color: var(--md-sys-color-on-surface-variant);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  details[open] .indicator {
    transform: rotate(180deg);
  }

  /* Expansion Animation Logic */
  .expansion-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  details[open] .expansion-wrapper {
    grid-template-rows: 1fr;
    padding-top: var(--spacing-padding-m);
  }

  .expansion-content {
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
  }

  /* Conditional Interaction States */
  .bento-card.enable-hover:hover {
    transform: translateY(-4px);
    box-shadow: var(--md-elevation-level-3);
    border-color: var(--md-sys-color-outline);
    background-color: var(--md-sys-color-surface-container-high);
  }

  .bento-card.enable-focus:focus-within {
    border-color: var(--md-sys-color-primary);
    box-shadow: var(--md-elevation-level-2);
  }

  /* Style slotted header elements (h2 by default) */
  ::slotted(h2),
  ::slotted([slot="header"]) {
    margin: var(--spacing-reset) !important;
    color: var(--md-sys-color-primary);
    font-family: var(--md-ref-typeface-brand);
    border-bottom: var(--hairline-width) dashed var(--md-sys-color-outline-variant);
    padding-bottom: var(--spacing-padding-xs);
    flex-grow: 1;
  }

  .scrollable {
    .expansion-content {
      overflow-y: auto;
      flex-grow: 1;
    }
  }
`;