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
    gap: var(--spacing-gap-l);
    list-style: none;
    margin: var(--spacing-reset);
    padding: var(--spacing-reset);
    justify-content: space-around;
  }

  .education-item {
    display: grid;
    grid-template-areas:
      "logo institute location"
      "logo program year";
    grid-template-columns: max-content 1fr max-content;
    margin-block: var(--spacing-margin-xs);
    gap: var(--spacing-reset) var(--spacing-gap-s);

    img {
      place-self: center;
      grid-area: logo;
      aspect-ratio: 1;
      width: var(--md-icon-size);
      height: var(--md-icon-size);
    }

    h3 {
      grid-area: institute;
    }

    span {
      grid-area: location;
    }

    h4 {
      grid-area: program;
      font-style: italic;
      font-weight: unset;
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
