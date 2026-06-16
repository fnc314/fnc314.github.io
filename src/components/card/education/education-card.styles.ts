import { css } from "lit";

/**
 * @summary Styles for the EducationCard component.
 * @packageDocumentation
 */
export const EducationCardStyles = css`
  :host {
    --md-divider-color: currentcolor;
    --education-icon-size: 3rem;

    block-size: 100%;
    container-name: education-card-container;
    container-type: inline-size;
    display: block;
    inline-size: 100%;
  }

  section {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    inline-size: 100%;
    justify-content: center;
    align-items: stretch;

    ul {
      block-size: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      gap: var(--spaces-gap-xl);
      justify-content: space-between;
      list-style: none;
      margin: var(--spaces-none);
      padding: var(--spaces-none);

      li {
        display: grid;
        gap: var(--spaces-gap-s) var(--spaces-gap-m);
        grid-template-areas:
          "logo logo"
          "institute institute"
          "location location"
          "program program"
          "year year";
        grid-template-columns: var(--education-icon-size) 1fr;
        margin: var(--spaces-margin-s);
        text-align: center;
        align-items: center;

        img {
          aspect-ratio: 1;
          background-color: var(--md-sys-color-surface-container-highest);
          block-size: var(--education-icon-size);
          border-radius: var(--md-sys-shape-corner-medium);
          grid-area: logo;
          inline-size: var(--education-icon-size);
          padding: var(--spaces-padding-xs);
          place-self: center;
        }

        h3 {
          grid-area: institute;
          font-size: 1.1rem;
        }

        span {
          grid-area: location;
          font-size: 0.95rem;
        }

        h4 {
          font-style: italic;
          font-weight: 500;
          grid-area: program;
          font-size: 1rem;
        }

        time {
          grid-area: year;
          font-size: 0.9rem;
        }

        h3, h4 {
          margin-block: var(--spaces-none);
        }
      }
    }
  }

  @container education-card-container (min-width: 300px) {
    section {
      ul {
        li {
          grid-template-areas:
            "logo institute"
            "logo location"
            ". program"
            ". year";
          grid-template-columns: var(--education-icon-size) 1fr;
          text-align: end;
        }
      }
    }
  }

  @container education-card-container (min-width: 500px) {
    section {
      ul {
        li {
          grid-template-areas:
            "logo institute"
            "logo location"
            "logo program"
            "logo year";
          grid-template-columns: var(--education-icon-size) 1fr;
          gap: var(--spaces-gap-xs) var(--spaces-gap-m);
          text-align: end;

          img {
            place-self: flex-start center;
          }
        }
      }
    }
  }

  @container education-card-container (min-width: 900px) {
    section {
      ul {
        li {
          grid-template-areas:
            "logo institute location"
            "logo program year";
          grid-template-columns: var(--education-icon-size) repeat(2, 1fr);
          text-align: end;

          img {
            place-self: center;
          }
        }
      }
    }
  }
`;
