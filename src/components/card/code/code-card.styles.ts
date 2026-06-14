import { css } from "lit";

/**
 * @summary Styles for the CodeCard component.
 * @packageDocumentation
 */
export const CodeCardStyles = css`
  :host {
    display: block;
    height: 100%;
  }

  .code-container {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    height: 100%;
  }

  .code-list {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
  }

  @media screen and (width <= 768px) {
    .code-list {
      flex-direction: row;
      overflow-x: auto;
      padding-block-end: var(--spaces-padding-xs);
      scroll-snap-type: x mandatory;
    }

    code-repo {
      min-width: 80%;
      scroll-snap-align: start;
    }
  }
`;
