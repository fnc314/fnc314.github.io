import { type CSSResult, css } from "lit";

export const WordPopoverStyles: CSSResult = css`
  :host {

  }

  article {
    display: flex;
    flex-direction: column;
    block-size: 75%;
    inline-size: 75%;
    overflow-y: auto;
    overscroll-behavior: contain;
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);

    header {
      h3 {

      }
    }

    section {

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