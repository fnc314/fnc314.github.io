import { type CSSResult, css } from "lit";

export const DirectConnectionStyles: CSSResult = css`
  :host {
    block-size: 100%;
    align-items: center;
    display: inliine-flex;
    flex-direction: row;
    gap: var(--spaces-gap-s);
  }
`;