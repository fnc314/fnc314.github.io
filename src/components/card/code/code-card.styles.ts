import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { css } from "lit";

/**
 * @summary Styles for the CodeCard component.
 * @packageDocumentation
 */
export const codeCardStyles = css`
  ${MaterialTypescaleStyles}
  :host {
    display: block;
    height: 100%;
  }

  .code-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
    height: 100%;
  }

  .code-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-xs);
  }

  @media screen and (width <= 768px) {
    .code-list {
      flex-direction: row;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: var(--spacing-padding-xs);
    }

    code-project {
      min-width: 80%;
      scroll-snap-align: start;
    }
  }
`;
