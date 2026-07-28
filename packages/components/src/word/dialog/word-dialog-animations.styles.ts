import { type CSSResult, css } from "lit";

export const WordDialogAnimations: CSSResult = css`
  /**
   * Reset UA dialog styling — the <article> handles card appearance.
   * Keep overlay/display transitions so the dialog stays in the top layer
   * during the exit animation.
   */
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

  /**
   * Suppress UA ::backdrop — we use a custom .scrim element instead,
   * because ::backdrop styles from shadow DOM adopted stylesheets
   * are not reliably applied across browsers.
   */
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: none;
  }

  /* ── Content card ── */

  /* Base / exit state */
  article {
    opacity: 0;
    transform: scaleX(0);
    transition:
      opacity 0.7s,
      transform 0.7s;
  }

  /* Final / open state */
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

  /* ── Scrim ── */

  /* Base / exit state */
  .scrim {
    backdrop-filter: blur(0.25rem);
    /* Use your design system's surface color with opacity, or a safe fallback scrim tint */
    background-color: var(--md-sys-color-scrim, rgba(0, 0, 0, 0.4));

    opacity: 0;
    transition: opacity 0.7s;
  }

  /* Final / open state */
  dialog[open] .scrim {
    opacity: 1;
  }

  @starting-style {
    dialog[open] .scrim {
      opacity: 0;
    }
  }
`;