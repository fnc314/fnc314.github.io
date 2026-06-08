import { css } from 'lit';

/**
 * Standardized interaction utility styles for hover and focus states.
 */
export const InteractionStyles = css`
  .hover-lift {
    transition: transform var(--motion-duration-short) var(--motion-easing-emphasized);
    will-change: transform;
  }

  .hover-lift:is(:hover, :focus, :focus-within, :focus-visible) {
    transform: translateY(var(--motion-transform-hover-lift));
  }
`;