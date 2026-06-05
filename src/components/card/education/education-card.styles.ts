import { css } from "lit";
import { MaterialTypescaleStyles } from "@/styles/material-styles";

/**
 * @summary Styles for the EducationCard component.
 * @packageDocumentation
 */
export const educationCardStyles = css`
  ${MaterialTypescaleStyles}
  :host {
    display: block;
    height: 100%;
  }

  .education-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
    height: 100%;
  }

  .education-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-xs);
  }

  .education-item {
    display: flex;
    flex-direction: column;
  }
`;
