import { type CSSResult, css } from "lit";

export const ProfessionalConnectionStyles: CSSResult = css`
  :host {
    block-size: 100%;
    align-items: center;
    display: inline-flex;
    flex-direction: row;
    gap: var(--spaces-gap-s);
  }

  svg {
    color: var(--connections-card-filled-icon-button-icon-color);
  }
`;
