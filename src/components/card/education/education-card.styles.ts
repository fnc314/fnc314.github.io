import { css } from "lit";

/**
 * @summary Styles for the EducationCard component.
 * @packageDocumentation
 */
export const educationCardStyles = css`

  :host {
    display: block;
    height: 100%;

    --md-divider-color: currentColor;
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
    justify-content: space-around;
  }

  .education-item {
    display: grid;
    grid-template-areas:
      "institute location"
      "program year";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-block: var(--spacing-margin-xs);

    h3 {
      grid-area: institute;
    }

    span:nth-of-type(1) {
      grid-area: location;
    }

    h4 {
      grid-area: program;
    }

    span:nth-of-type(2) {
      grid-area: year;
    }

    h3, h4 {
      margin-block: var(--spacing-reset);
    }
  }
`;
