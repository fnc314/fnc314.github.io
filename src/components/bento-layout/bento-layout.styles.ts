import { css } from "lit";

/**
 * @summary Styles for the BentoLayout component.
 *
 * @packageDocumentation
 */
export const bentoLayoutStyles = css`
  :host {
    display: block;
    width: 100%;
    color: var(--md-sys-color-on-surface);
    background-color: var(--md-sys-color-surface);
    padding-bottom: var(--spacing-padding-xl);
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--spacing-margin-l);
    width: 100%;
    max-width: 1400px;
    margin: var(--spacing-reset) auto;
    padding: var(--spacing-padding-m);
    grid-auto-flow: dense;
  }

  /* Tablet Grid assignments (737px to 1200px) */
  @media screen and ((width <= 1200px) and (width >= 737px)) {
    .bento-grid {
      grid-template-columns: repeat(6, 1fr);
    }

    bento-card {
      grid-column: span 3;
      grid-row: span 1;
    }
  }

  /* Mobile layout (<=736px) */
  @media screen and (width <= 736px) {
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-margin-s);
      padding: var(--spacing-padding-s);
    }

    bento-card {
      grid-column: span 1 !important;
      grid-row: span 1 !important;
    }
  }

  .bio-content p {
    margin: var(--spacing-reset);
    line-height: 1.6;
    text-align: justify;
  }

  .education-list {
    list-style-type: none;
    padding: var(--spacing-reset);
    margin: var(--spacing-reset);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
  }

  .education-item {
    border-left: 2px solid var(--md-sys-color-primary);
    padding-left: var(--spacing-padding-s);
  }

  .education-item span {
    display: block;
  }

  .connections-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-xs);
  }

  .connection-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-margin-xs);
    text-decoration: none;
    color: var(--md-sys-color-primary);
    padding: var(--spacing-padding-xs);
    border-radius: var(--md-sys-shape-corner-small);
    transition: background-color 0.2s ease;
  }

  .connection-link:hover {
    background-color: color(from var(--md-sys-color-primary) srgb r g b / 10%);
  }

  .configs-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-xxs);
  }

  .form-field label {
    font-size: var(--md-sys-typescale-label-medium-size);
    color: var(--md-sys-color-on-surface-variant);
    font-weight: 500;
  }

  .form-field select,
  .form-field button {
    padding: var(--spacing-padding-xs);
    border-radius: var(--md-sys-shape-corner-small);
    border: var(--hairline-width) solid var(--md-sys-color-outline);
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    font-family: inherit;
    font-size: var(--md-sys-typescale-body-medium-size);
  }

  .form-field-top-margin {
    margin-top: var(--spacing-margin-xs);
  }

  .button-primary-outline {
    border-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-primary);
    cursor: pointer;
  }

  .debugger-row {
    display: flex;
    gap: var(--spacing-margin-xs);
    align-items: center;
    justify-content: space-between;
    padding-top: var(--spacing-padding-xs);
    border-top: 1px dashed var(--md-sys-color-outline-variant);
  }

  .debugger-toggle {
    cursor: pointer;
    padding: var(--spacing-padding-xxs) var(--spacing-padding-xs);
    border-radius: var(--md-sys-shape-corner-small);
    border: 1px solid var(--md-sys-color-primary);
    background: transparent;
    color: var(--md-sys-color-primary);
    font-size: var(--md-sys-typescale-label-small-size);
    font-weight: bold;
    transition: all 0.2s;
  }

  .debugger-toggle.active {
    background: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
  }

  .scrollable-list {
    max-height: 400px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
    padding-right: var(--spacing-padding-xs);
  }

  /* Custom scrollbar for premium look */
  .scrollable-list::-webkit-scrollbar {
    width: 6px;
  }

  .scrollable-list::-webkit-scrollbar-track {
    background: transparent;
  }

  .scrollable-list::-webkit-scrollbar-thumb {
    background: var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-full);
  }

  .scrollable-list::-webkit-scrollbar-thumb:hover {
    background: var(--md-sys-color-outline);
  }

  .category-label {
    margin-top: var(--spacing-margin-xs);
    color: var(--md-sys-color-secondary);
  }

  .connect-button-wrapper {
    margin-top: var(--spacing-margin-s);
  }

  .full-width-primary-outline-button {
    width: 100%;
    padding: var(--spacing-padding-xs);
    border-radius: var(--md-sys-shape-corner-small);
    border: var(--hairline-width) solid var(--md-sys-color-primary);
    background-color: transparent;
    color: var(--md-sys-color-primary);
    font-family: inherit;
    font-size: var(--md-sys-typescale-body-medium-size);
    cursor: pointer;
  }

  .code-project-wrapper,
  .blog-post-wrapper {
    display: block;
    margin-bottom: var(--spacing-margin-xs);
  }

  .version-tag {
    font-size: var(--md-sys-typescale-body-small-size);
    color: var(--md-sys-color-on-surface-variant);
    text-align: center;
    margin-top: auto;
    border-top: 1px solid var(--md-sys-color-outline-variant);
    padding-top: var(--spacing-padding-xs);
  }
`;