import { css } from "lit";

/**
 * @summary Styles for the EducationCard component.
 * @packageDocumentation
 */
export const EducationCardStyles = css`
  :host {
    --md-divider-color: currentcolor;

    block-size: 100%;
    container-name: education-card-container;
    container-type: inline-size;
    display: block;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-l);
    justify-content: space-around;
    list-style: none;
    margin: var(--spaces-none);
    padding: var(--spaces-none);

    li {
      display: grid;
      gap: var(--spaces-none) var(--spaces-gap-s);
      grid-template-areas:
        "logo institute"
        "logo location"
        ". program"
        ". year";
      grid-template-columns: 1fr max-content;
      margin-block: var(--spaces-margin-xs);
      text-align: end;

      img {
        aspect-ratio: 1;
        background-color: var(--md-sys-color-surface-container-highest);
        block-size: calc(var(--md-icon-size));
        border-radius: var(--md-sys-shape-corner-full);
        grid-area: logo;
        inline-size: calc(var(--md-icon-size));
        padding: var(--spaces-padding-xs);
        place-self: center;
        place-self: center start;
      }

      h3 {
        grid-area: institute;
      }

      span {
        grid-area: location;
      }

      h4 {
        font-style: italic;
        font-weight: unset;
        grid-area: program;
      }

      time {
        grid-area: year;
      }

      h3, h4 {
        margin-block: var(--spaces-none);
      }
    }
  }

  @container education-card-container (min-width: 500px) {
    ul {
      flex-direction: row;

      li {
        grid-template-areas:
          "logo . institute"
          "logo . location"
          ". . program"
          ". . year";
        grid-template-columns: 1fr auto max-content;
        text-align: unset;
      }
    }
  }
`;
