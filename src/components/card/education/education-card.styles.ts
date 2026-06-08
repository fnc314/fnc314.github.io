import { css } from "lit";

/**
 * @summary Styles for the EducationCard component.
 * @packageDocumentation
 */
export const educationCardStyles = css`

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
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-xs);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .education-item {
    display: flex;
    flex-direction: column;
  }
`;
