import { type CSSResult, css } from "lit";

export const WordPopoverAnimations: CSSResult = css`
  :host {
    --internal-word-popover-backdrop-blur: var(--word-popover-backdrop-blur, 0.25rem);
  }

  ::backdrop {
    backdrop-filter: blur(var(--internal-word-popover-backdrop-blur));
  }

  /* Transition for the popover itself */
  [popover]:popover-open {
    opacity: 1;
    transform: scaleX(1);
  }

  [popover] {
    /* Final state of the exit animation */
    opacity: 0;
    transform: scaleX(0);

    transition:
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;
  }

  /* Needs to be after the previous [popover]:popover-open rule
  to take effect, as the specificity is the same */
  @starting-style {
    [popover]:popover-open {
      opacity: 0;
      transform: scaleX(0);
    }
  }

  /* Transition for the popover's backdrop */
  [popover]::backdrop {
    backdrop-filter: blur(var(--internal-word-tag-backdrop-blur));
    background-color: transparent;
    transition:
      display 0.7s allow-discrete,
      overlay 0.7s allow-discrete,
      background-color 0.7s,
      backdrop-filter 0.7s;
    /* Equivalent to
    transition: all 0.7s allow-discrete; */
  }

  [popover]:popover-open::backdrop {
    backdrop-filter: blur(var(--internal-word-popover-backdrop-blur));
  }

  /* The nesting selector (&) cannot represent pseudo-elements
  so this starting-style rule cannot be nested */

  @starting-style {
    [popover]:popover-open::backdrop {
      background-color: transparent;
    }
  }
`;