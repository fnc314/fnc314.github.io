import { type CSSResult, css } from "lit";

export const WorkExperienceStyles: CSSResult = css`
  :host {
    box-sizing: border-box;

    /* For contextual layout */
    container: experience-container / inline-size;
    display: block;
    inline-size: 100%;

    h3,
    h4,
    p,
    address {
      font-style: normal;
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
  }

  .nested-experiences {
    display: flex;
    flex-direction: column;
  }

  .nested-experience {
    border-inline-start: var(--sizes-thickness-xxs) solid var(--md-sys-color-primary);
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    margin-block-start: var(--spaces-margin-xs);
    padding-inline-start: var(--spaces-padding-s);
  }

  .nested-summary {
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
      font-size: var(--md-sys-typescale-body-large-size);
      font-weight: var(--md-ref-typeface-weight-bold);
    }

    pre {
      display: inline;
    }
  }

  /* --- LAYOUT: FLOW & TYPOGRAPHY --- */
  .experience-container {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xs);
    padding-block: var(--spaces-padding-xs);
  }

  .experience-info {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xxs);

    .experience-headline-group {
      align-items: baseline;
      display: flex;
      flex-direction: column;
      gap: var(--spaces-gap-xxxs);

      > h3,
      > h4 {
        color: var(--md-sys-color-primary);
      }

      .experience-dates {
        color: var(--md-sys-color-on-surface);
      }
    }

    .experience-subhead-group {
      align-items: baseline;
      display: flex;
      flex-direction: column;
      gap: var(--spaces-gap-xxxs);

      .experience-org {
        color: var(--md-sys-color-on-primary-container);
        font-style: italic;
      }

      .experience-location {
        color: var(--md-sys-color-outline);
        font-family: var(--md-ref-typeface-plain);
      }
    }

    .experience-summary {
      color: var(--md-sys-color-on-surface-variant);
    }
  }

  /* --- DESKTOP (WIDE CONTAINER): Natural 2-Row Header with Full-Width Content --- */
  @container experience-container (min-inline-size: 600px) {
    .experience-container {
      gap: var(--spaces-gap-s);
    }

    .experience-info {
      gap: var(--spaces-gap-xxs);

      .experience-headline-group {
        align-items: baseline;
        flex-direction: row;
        justify-content: space-between;

        .experience-dates {
          color: var(--md-sys-color-on-surface);
          flex-shrink: 0;
          text-align: end;
        }
      }

      .experience-subhead-group {
        align-items: baseline;
        flex-direction: row;
        justify-content: space-between;

        .experience-org {
          color: var(--md-sys-color-tertiary);
          font-style: italic;
        }

        .experience-location {
          color: var(--md-sys-color-outline);
          flex-shrink: 0;
          text-align: end;
        }
      }
    }
  }
`;
