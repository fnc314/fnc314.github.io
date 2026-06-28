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

  span {
    object-fit: contain;
    background-color: var(--md-filled-icon-button-icon-color);
    mask: var(--professional-connection-mask) no-repeat center / contain;
  }
`;