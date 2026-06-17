import { css } from "lit";

/**
 * Standardized transition animations for page loads and state changes.
 */
export const TransitionStyles = css`
  @keyframes fade-in-up {
    from {
      opacity: var(--motions-fade-in-up-from-opacity);
      transform: var(--motions-fade-in-up-from-translate);
    }
    to {
      opacity: var(--motions-fade-in-up-to-opacity);
      transform: var(--motions-fade-in-up-to-translate);
    }
  }

  .animate-entry {
    animation: fade-in-up var(--motions-duration-short) var(--motions-easing-emphasized) both;
  }

  /* Staggered animation delays for grid items */
  main > *:nth-child(1) { 
    animation-delay: var(--motions-delay-xxxs); 
  }
  main > *:nth-child(2) { 
    animation-delay: var(--motions-delay-xxs); 
  }
  main > *:nth-child(3) { 
    animation-delay: var(--motions-delay-xs); 
  }
  main > *:nth-child(4) { 
    animation-delay: var(--motions-delay-s); 
  }
  main > *:nth-child(5) { 
    animation-delay: var(--motions-delay-m); 
  }
  main > *:nth-child(6) { 
    animation-delay: var(--motions-delay-l); 
  }
  main > *:nth-child(7) { 
    animation-delay: var(--motions-delay-xl); 
  }
  main > *:nth-child(8) { 
    animation-delay: var(--motions-delay-xxl); 
  }
  main > *:nth-child(9) { 
    animation-delay: var(--motions-delay-xxxl); 
  }
`;
