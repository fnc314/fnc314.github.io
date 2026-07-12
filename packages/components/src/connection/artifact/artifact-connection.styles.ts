import { type CSSResult, css } from "lit";

export const ConnectionArtifactStyles: CSSResult = css`
  :host {
    block-size: 100%;
    align-items: center;
    display: inline-flex;
    flex-direction: row;
    gap: var(--spaces-gap-s);
  }
`;
