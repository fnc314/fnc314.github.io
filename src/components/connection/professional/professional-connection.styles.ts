import { type CSSResult, css } from "lit";

export const ProfessionalConnectionStyles: CSSResult = css`
  :host {
    block-size: 100%;
    inline-size: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: var(--spaces-gap-s);
  }

  img {
    object-fit: contain;
  }
`;