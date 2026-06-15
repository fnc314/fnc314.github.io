import { type CSSResult, css } from "lit";

export const DirectConnectionStyles: CSSResult = css`
  :host {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: var(--spaces-gap-s);
  }

  md-filled-tonal-icon-button {
    block-size: calc(2 * var(--md-icon-size));
    inline-size: calc(2 * var(--md-icon-size));
  }

`;