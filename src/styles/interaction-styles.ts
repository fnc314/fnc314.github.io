import { css } from 'lit';

/**
 * Standardized interaction utility styles for hover and focus states.
 */
export const InteractionStyles = css`
  .hover-lift {
    transition: transform var(--motions-duration-short) var(--motions-easing-emphasized);
    will-change: transform;
  }

  .hover-lift:is(:hover, :focus, :focus-within, :focus-visible) {
    transform: translateY(var(--motions-transform-hover-lift));
  }
`;