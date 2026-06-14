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
    gap: var(--spaces-gap-l);
    list-style: none;
    margin: var(--spaces-none);
    padding: var(--spaces-none);
    justify-content: space-around;
  }

  .education-item {
    display: grid;
    grid-template-areas:
      "logo institute location"
      "logo program year";
    grid-template-columns: max-content 1fr max-content;
    margin-block: var(--spaces-margin-xs);
    gap: var(--spaces-none) var(--spaces-gap-s);

    img {
      background-color: var(--md-sys-color-surface-container-highest);
      border-radius: var(--md-sys-shape-corner-full);
      padding: var(--spaces-padding-xs);
      place-self: center;
      grid-area: logo;
      aspect-ratio: 1;
      width: calc(var(--md-icon-size) * 0.75);
      height: calc(var(--md-icon-size) * 0.75);
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
      margin-block: var(--spaces-none);
    }

    span, time {
      text-align: end;
    }
  }
`;
