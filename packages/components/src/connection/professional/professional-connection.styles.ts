import { type CSSResult, css } from "lit";

export const ProfessionalConnectionStyles: CSSResult = css`
  :host {
    block-size: 100%;
    align-items: center;
    display: inline-flex;
    flex-direction: row;
    gap: var(--spaces-gap-s);
  }

  span {
    background-color: var(--md-filled-icon-button-icon-color);
    mask: var(--professional-connection-mask) no-repeat center / contain;
  }
`;
