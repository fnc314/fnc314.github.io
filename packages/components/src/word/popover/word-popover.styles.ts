import { type CSSResult, css } from "lit";

export const WordPopoverStyles: CSSResult = css`
  :host {
    --md-icon-size: calc(2 * var(--md-icon-size));
    --internal-word-popover-icon-width: 25dvw;
    --internal-word-popover-backdrop-blur: var(--word-popover-backdrop-blur, 0.25rem);
  }

  article {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overscroll-behavior: contain;
    justify-content: space-around;

    md-icon-button, button {
      position: absolute;
      top: 0;
      right: 0;
    }

    header {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      gap: var(--spaces-gap-l);

      slot[name="header-icon"] {
        flex: 0 0 auto;
        max-width: var(--internal-word-popover-icon-width);
        display: flex;
        justify-content: center;
        align-items: center;

        &::slotted(img) {
          aspect-ratio: 1;
          max-inline-size: var(--internal-word-popover-icon-width);
          width: 100%;
          object-fit: contain;
        }
      }

      h3 {
        flex: 1;
        margin: 0;
      }
    }

    section {
      padding-inline: var(--spaces-padding-m);
    }

    footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a {

      }
    }
  }
`;