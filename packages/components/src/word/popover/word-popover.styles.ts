import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} for {@link @fnc314/packages.components!WordPopover}
 *
 * @type {CSSResult}
 */
export const WordPopoverStyles: CSSResult = css`
  :host {
    --md-icon-size: 2.5rem;
    --internal-word-popover-icon-width: 25dvw;
  }

  /*
   * Full viewport container with pointer-events: none
   * allows clicks on the backdrop to register with the popover's light-dismiss mechanism.
   */
  [popover] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    overscroll-behavior: contain;
    overflow: visible;
    pointer-events: none;
  }

  /* Backdrop blur treatment set to 1rem when popover is open */
  [popover]:popover-open::backdrop {
    backdrop-filter: blur(1rem);
    background-color: rgba(0, 0, 0, 0.4);
  }

  /* Re-enable pointer events strictly on the content card so it remains interactive */
  article {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    border: solid var(--sizes-thickness-hairline) var(--md-sys-color-outline-variant);
    border-radius: var(--bento-layout-card-shape);
    padding: var(--spaces-padding-xl);
    pointer-events: auto;

    md-icon-button, button {
      position: absolute;
      top: 0;
      right: 0;

      md-icon {
        width: var(--md-icon-size);
        height: var(--md-icon-size);
      }
    }

    header {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      gap: var(--spaces-gap-l);

      slot[name="header-icon"] {
        max-width: var(--internal-word-popover-icon-width);
        display: flex;
        justify-content: center;
        align-items: center;

        &::slotted(img) {
          aspect-ratio: 1;
          max-inline-size: var(--internal-word-popover-icon-width);
          object-fit: contain;
          border-radius: var(--md-sys-shape-corner-medium);
        }
      }

      h3 {
        margin: 0;
      }
    }

    section {
      text-align: center;
    }

    footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;