import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} for animations in {@link @fnc314/packages.components!WordPopover}
 *
 * @type {CSSResult}
 */
export const WordPopoverAnimations: CSSResult = css`
  [popover] {
    perspective: 1000px;
    transition:
      opacity 0.5s ease,
      transform 0.5s ease,
      overlay 0.5s allow-discrete,
      display 0.5s allow-discrete;
  }

  [popover]::backdrop {
    opacity: 0;
    transition:
      opacity 0.5s ease,
      overlay 0.5s allow-discrete,
      display 0.5s allow-discrete;
  }

  [popover]:popover-open::backdrop {
    opacity: 1;
  }

  @starting-style {
    [popover]:popover-open::backdrop {
      opacity: 0;
    }
  }

  /* 3D horizontal axis collapse animation */
  article {
    opacity: 0;
    transform: rotateX(90deg) scale(0.8);
    transform-origin: center center;
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
  }

  [popover]:popover-open article {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }

  @starting-style {
    [popover]:popover-open article {
      opacity: 0;
      transform: rotateX(90deg) scale(0.8);
    }
  }
`;
