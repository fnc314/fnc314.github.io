import { css } from 'lit';

/**
 * Standardized interaction utility styles for hover and focus states.
 */
export const InteractionStyles = css`
  .hover-lift {
    will-change: transform;
    transition: transform var(--motion-duration-short) var(--motion-easing-emphasized);
  }

  .hover-lift:is(:hover, :focus, :focus-within, :focus-visible) {
    transform: translateY(var(--motion-transform-hover-lift));
  }
`;