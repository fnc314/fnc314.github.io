import { type CSSResult, css } from "lit";

export const WorkExperienceStyles: CSSResult = css`
  :host {
    box-sizing: border-box;

    /* For contextual layout */
    container: experience-container / inline-size;
    display: block;
    width: 100%;

    h3,
    h4,
    p {
      margin: unset;
    }
  }

  /* --- SHARED BASE --- */
  h3,
  h4 {
    font-family: var(--md-ref-typeface-brand);
    font-weight: var(--md-ref-typeface-weight-bold);
  }

  time {
    font-weight: var(--md-ref-typeface-weight-bold);
    opacity: 0.8;
  }

  .nested-experiences {
    display: flex;
    flex-direction: column;
  }

  .nested-experience {
    border-inline-start: 2px solid var(--md-sys-color-primary);
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    margin-block-start: var(--spaces-margin-xs);
    padding-inline-start: var(--spaces-padding-s);
  }

  .nested-summary {
    grid-column: 2;
    grid-row: 4;
    margin-block: unset;
    padding-inline: var(--spaces-padding-m);

    li {
      list-style-position: outside;
      list-style-type: circle;
      margin-block: var(--spaces-margin-xs);
    }

    span.first-word {
      color: var(--md-sys-color-on-surface-variant);
      font-family: var(--md-ref-typeface-brand);
      font-size: var(--md-sys-typescale-title-small-size);
      font-weight: var(--md-ref-typeface-weight-bold);
    }

    pre {
      display: inline;
    }
  }

  /* --- LAYOUT: CONTEXTUAL (Grid / Container Query) --- */
  .experience-container {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xs);
    padding-block: var(--spaces-padding-xs);
  }

  .experience-info,
  .nested-experience-info {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xxs);

    > h3,
    > h4 {
      color: var(--md-sys-color-primary);
    }

    /* ORG */
    > p:nth-child(2) {
      color: var(--md-sys-color-tertiary);
      font-style: italic;
    }

    /* Dates */
    > p:nth-child(3) {
      color: var(--md-sys-color-on-surface);
    }

    /* Summary */
    > p:nth-child(4) {
      color: var(--md-sys-color-on-surface-variant);
    }
  }

  .nested-experience-container {
    display: grid;
    grid-template-columns: subgrid;
  }

  @container experience-container (min-inline-size: 600px) {
    div.experience-container {
      gap: var(--spaces-gap-xs) var(--spaces-margin-s);
    }

    .experience-container {
      align-items: baseline;
      display: grid;
      gap: var(--spaces-gap-xs) var(--spaces-margin-s);
      grid-template-columns: minmax(20ch, max-content) 1fr;

      .experience-info {
        display: contents;

        /* Role */
        > h3,
        > h4 {
          color: var(--md-sys-color-primary);
          grid-column: 2;
          grid-row: 1;
        }

        /* Org */
        > p:nth-child(2) {
          color: var(--md-sys-color-tertiary);
          font-style: italic;
          grid-column: 2;
          grid-row: 2;
        }

        /* Dates */
        > p:nth-child(3) {
          color: var(--md-sys-color-on-surface);
          grid-column: 1;
          grid-row: 1;
          inset-block-start: 0;
          text-align: end;
        }

        /* Summary */
        > p:nth-child(4) {
          color: var(--md-sys-color-on-surface-variant);
          font-style: italic;
          grid-column: 2 / -1;
          grid-row: 3 / 4;
        }
      }

      /* Nested content */
      .nested-experience {
        border-inline-start: none;
        container-type: inline-size;
        display: grid;
        grid-column: auto / span 2;
        grid-row: 4;
        grid-template-columns: subgrid;
        padding-inline-start: 0;
      }
    }
  }
`;