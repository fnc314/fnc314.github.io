import { type CSSResult, css } from "lit";

export const ProfessionalConnectionStyles: CSSResult = css`
  :host {
    display: block;
    container-type: inline-size;
  }

  section {
    ul {
      list-style: none;
      padding: var(--sizes-none);
      margin: var(--sizes-none);
      display: flex;
      flex-direction: row;
      gap: var(--spaces-gap-m);
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;