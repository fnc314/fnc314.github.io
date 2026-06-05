import { css } from "lit";
import { MaterialTypescaleStyles } from "@/styles/material-styles";

/**
 * @summary Styles for the WorkCard component.
 * @packageDocumentation
 */
export const workCardStyles = css`
  ${MaterialTypescaleStyles}
  :host {
    display: block;
    height: 100%;
  }

  .work-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
    height: 100%;
  }
`;
