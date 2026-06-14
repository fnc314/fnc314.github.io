import { type CSSResult, css } from "lit";

export const DirectConnectionStyles: CSSResult = css`
  :host {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spaces-gap-s);
  }

  md-filled-tonal-icon-button {
    width: calc(2 * var(--md-icon-size));
    height: calc(2 * var(--md-icon-size));
  }

`;