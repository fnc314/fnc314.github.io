import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} for animations in {@link @fnc314/packages.components!WordDialog}
 *
 * @type {CSSResult}
 */
export const WordDialogAnimations: CSSResult = css`
  dialog {
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    max-width: none;
    max-height: none;

    transition:
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;
  }

  /* Ensure backdrop remains fully transparent with no animations */
  dialog::backdrop {
    background: transparent;
    backdrop-filter: none;
  }

  /* Content card scale/opacity animation */
  article {
    opacity: 0;
    transform: scaleX(0);
    transition:
      opacity 0.7s,
      transform 0.7s;
  }

  dialog[open] article {
    opacity: 1;
    transform: scaleX(1);
  }

  @starting-style {
    dialog[open] article {
      opacity: 0;
      transform: scaleX(0);
    }
  }
`;