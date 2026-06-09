import { css } from "lit";

/**
 * @summary Styles for the EducationCard component.
 * @packageDocumentation
 */
export const EducationCardStyles = css`
  :host {
    display: block;
    height: 100%;

    --md-divider-color: currentColor;
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-gap-xl);
    list-style: none;
    margin: var(--spacing-reset);
    padding: var(--spacing-reset);
    justify-content: space-around;
  }

  .education-item {
    display: grid;
    grid-template-areas:
      "institute location"
      "program year";
    grid-template-columns: 1fr max-content;
    grid-template-rows: 1fr 1fr;
    margin-block: var(--spacing-margin-xs);

    h3 {
      grid-area: institute;
    }

    span {
      grid-area: location;
    }

    h4 {
      grid-area: program;
      font-style: italic;
    }

    time {
      grid-area: year;
    }

    h3, h4 {
      margin-block: var(--spacing-reset);
    }

    span, time {
      text-align: end;
    }
  }
`;
