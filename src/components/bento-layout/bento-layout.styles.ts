import { css } from "lit";

/**
 * @summary Styles for the BentoLayout component.
 *
 * Orchestrates the responsive grid layout for the bento box UI.
 * Supports mobile (flex column), tablet (6-column grid), and desktop (12-column grid) layouts.
 */
export const BentoLayoutStyles = css`
  :host {
    /**
     * Mobile styles use flex so this is only used when
     * screen and (width >= 769px)
     * Tablet -> 769 <= 1200 -> 6
     * Desktop -> >= 1201 -> 12
     */
    --bento-layout-column-count: 1;

    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    display: block;
    padding-bottom: var(--spaces-padding-xl);
    width: 100%;
  }

  .bento-grid {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    padding: var(--spaces-padding-xs);
  }

  h1 {
    background-color: var(--md-sys-color-primary-fixed);
    border-color: var(--md-sys-color-on-primary-fixed);
    border-radius: var(--md-sys-shape-corner-large);
    border-width: var(--hairline-width);
    color: var(--md-sys-color-on-primary-fixed);
    margin-inline: auto;
    padding-block: var(--spaces-padding-l);
    text-align: center;
    width: 65%;
  }

  @media screen and ((width <= 1200px) and (width >= 769px)) {
    :host {
      --bento-layout-column-count: 6;
    }

    .bento-grid {
      align-items: unset;
      display: grid;
      gap: var(--spaces-gap-m);
      grid-auto-flow: dense;
      grid-template-columns: repeat(var(--bento-layout-column-count), 1fr);
      padding: var(--spaces-padding-s);
    }

    h1 {
      grid-area: span 1 / span var(--bento-layout-column-count);
    }
  }

  @media screen and (width >= 1201px) {
    :host {
      --bento-layout-column-count: 12;
    }

    .bento-grid {
      display: grid;
      gap: var(--spaces-gap-l);
      grid-auto-flow: dense;
      grid-template-columns: repeat(var(--bento-layout-column-count), 1fr);
      margin: var(--spaces-none) auto;
      padding: var(--spaces-padding-m);
    }

    h1 {
      grid-area: span 1 / span var(--bento-layout-column-count);
    }
  }
`;