import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} for {@link @fnc314/packages.components!WordDialog}
 *
 * @type {CSSResult}
 */
export const WordDialogStyles: CSSResult = css`
  :host {
    --md-icon-size: 2.5rem;
    --internal-word-dialog-icon-width: 25dvw;
  }

  /* Full-viewport flex container layout */
  dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    width: auto;
    height: auto;
    max-width: none;
    max-height: none;
    background: transparent;
    border: none;
    padding: 0;
    margin: auto;
    overscroll-behavior: contain;
  }

  /* Forcefully override browser default UA black backdrop */
  dialog::backdrop {
    background: transparent !important;
    background-color: transparent !important;
    backdrop-filter: none !important;
  }

  /* Card layout */
  article {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    border: solid var(--sizes-thickness-hairline) var(--md-sys-color-on-surface-variant);
    border-radius: var(--bento-layout-card-shape);
    padding: var(--spaces-padding-xl);

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
        max-width: var(--internal-word-dialog-icon-width);
        display: flex;
        justify-content: center;
        align-items: center;

        &::slotted(img) {
          aspect-ratio: 1;
          max-inline-size: var(--internal-word-dialog-icon-width);
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

      slot[name="dialog-content"] {
        pre {
          display: inline-block;
        }
      }
    }

    footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;