import { type CSSResult, css } from "lit";

export const EducationInstitutionStyles: CSSResult = css`
  :host {
    display: block;
    container-type: inline-size;
  }

  .education-institution-container {
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
      place-self: center;
      padding: var(--spaces-padding-xs);
    }

    h3 {
      grid-area: institute;
      color: var(--md-sys-color-primary);
    }

    span {
      grid-area: location;
    }

    h4 {
      font-style: italic;
      grid-area: program;
      color: var(--md-sys-color-tertiary);
    }

    time {
      grid-area: year;
    }

    h3, h4 {
      margin-block: var(--spaces-none);
    }
  }

  @container education-card-container (min-width: 400px) {
    .education-institution-container {
      grid-template-areas:
        "logo institute"
        "logo location"
        ". program"
        ". year";
      grid-template-columns: var(--education-icon-size) 1fr;
      text-align: end;
    }
  }

  @container education-card-container (min-width: 600px) {
    .education-institution-container {
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

  @container education-card-container (min-width: 900px) {
    .education-institution-container {
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

`;