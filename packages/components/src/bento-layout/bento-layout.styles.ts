import { css } from "lit";

/**
 * @summary Styles for the BentoLayout component.
 *
 * Orchestrates the responsive grid layout for the bento box UI.
 * Supports mobile (flex column), tablet (6-column grid), and desktop (12-column grid) layouts.
 * Mobile styles use flex so this is only used when
 * screen and (width >= 769px)
 * Tablet -> 769 <= 1200 -> 6
 * Desktop -> >= 1201 -> 12
 */
export const BentoLayoutStyles = css`
  :host {
    --bento-layout-column-count: 1;
    --bento-layout-card-background: var(--md-sys-color-surface-container-lowest);
    --bento-layout-card-color: var(--md-sys-color-on-surface);
    --bento-layout-card-shape: var(--md-sys-shape-corner-medium);

    background-color: var(--globals-color-background);
    color: var(--md-sys-color-on-surface);
    display: block;
    inline-size: 100%;
    padding-block-end: var(--spaces-padding-xl);
    container-name: bento-layout;
  }

  main {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    padding: var(--spaces-padding-xs);

    header {
      background-color: var(--md-sys-color-primary-container);
      border: var(--sizes-thickness-hairline) solid var(--md-sys-color-on-primary-container);
      border-radius: var(--md-sys-shape-corner-large);
      color: var(--md-sys-color-on-primary-container);
      grid-area: span 1 / span var(--bento-layout-column-count);
      inline-size: 100%;
      margin-inline: auto;
      padding-block: var(--spaces-padding-l);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--spaces-gap-m);

      h1 {
        text-align: center;
        font-variant: small-caps;
        margin-block: var(--spaces-none);
      }

      p {
        text-align: center;
        margin-block: var(--spaces-none);
      }
    }
  }

  @container style(--breakpoint-label: tablet) or style(--breakpoint-label: desktop) {
    main {
      display: grid;
      grid-auto-flow: dense;
      grid-template-columns: repeat(var(--bento-layout-column-count), 1fr);
    }
  }

  @container style(--breakpoint-label: tablet) {
    :host {
      --bento-layout-column-count: 6;
    }

    main {
      align-items: unset;
      gap: var(--spaces-gap-m);
      padding: var(--spaces-padding-s);
    }
  }

  @container style(--breakpoint-label: desktop) {
    :host {
      --bento-layout-column-count: 12;
    }

    main {
      gap: var(--spaces-gap-l);
      margin: var(--spaces-none) auto;
      padding: var(--spaces-padding-m);
      place-items: stretch stretch;
    }
  }
`;

/**
 * Standardized transition animations for page loads and state changes.
 */
export const TransitionStyles = css`
  @keyframes fade-in-up {
    from {
      opacity: var(--keyframes-fade-in-up-from-opacity);
      transform: var(--keyframes-fade-in-up-from-translate);
    }
    to {
      opacity: var(--keyframes-fade-in-up-to-opacity);
      transform: var(--keyframes-fade-in-up-to-translate);
    }
  }

  .animate-entry {
    animation: fade-in-up var(--motions-duration-short) var(--motions-easing-emphasized) both;
  }

  /* Staggered animation delays for grid items */
  main {
    > *:nth-child(1) {
      animation-delay: var(--motions-delay-xxxs);
    }

    > *:nth-child(2) {
      animation-delay: var(--motions-delay-xxs);
    }

    > *:nth-child(3) {
      animation-delay: var(--motions-delay-xs);
    }

    > *:nth-child(4) {
      animation-delay: var(--motions-delay-s);
    }

    > *:nth-child(5) {
      animation-delay: var(--motions-delay-m);
    }

    > *:nth-child(6) {
      animation-delay: var(--motions-delay-l);
    }

    > *:nth-child(7) {
      animation-delay: var(--motions-delay-xl);
    }

    > *:nth-child(8) {
      animation-delay: var(--motions-delay-xxl);
    }

    > *:nth-child(9) {
      animation-delay: var(--motions-delay-xxxl);
    }
  }
`;
