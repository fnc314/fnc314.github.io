import { type CSSResult, css } from "lit";

export const ProfileCardStyles: CSSResult = css`
  :host {
    display: block;
    block-size: 100%;

    --profile-card-image-block-size-max: 500px;
    --profile-card-image-inline-size-max: 100%;

    --profile-card-filled-icon-button-scale: 2;
    --profile-card-filled-icon-button-container-size: calc(
      var(--profile-card-filled-icon-button-scale) *
      var(--md-icon-size)
    );
    --profile-card-filled-icon-button-icon-color: var(
      --md-sys-color-on-surface-variant
    );
    --profile-card-filled-icon-button-icon-scale: 0.75;
    --profile-card-filled-icon-button-icon-size: calc(
      var(--profile-card-filled-icon-button-icon-scale) *
      var(--profile-card-filled-icon-button-container-size)
    );

    --md-filled-icon-button-container-color: var(--md-sys-color-surface-container-highest);
    --md-filled-icon-button-container-height: var(--profile-card-filled-icon-button-container-size);
    --md-filled-icon-button-container-width: var(--profile-card-filled-icon-button-container-size);
    --md-filled-icon-button-container-shape: var(--md-sys-shape-corner-small);
    --md-filled-icon-button-icon-color: var(--profile-card-filled-icon-button-icon-color);
    --md-filled-icon-button-focus-icon-color: var(--profile-card-filled-icon-button-icon-color);
    --md-filled-icon-button-hover-icon-color: var(--profile-card-filled-icon-button-icon-color);
    --md-filled-icon-button-icon-size: var(--profile-card-filled-icon-button-icon-size);
  }

  article {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);

    section {
      figure {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;

        img {
          border: var(--sizes-thickness-xxs) solid var(--md-sys-color-primary-fixed);
          border-radius: var(--md-sys-shape-corner-medium);
          max-block-size: var(--profile-card-image-block-size-max);
          object-fit: contain;
          max-inline-size: var(--profile-card-image-inline-size-max);
        }

        figcaption {
          background-color: var(--md-sys-color-primary-fixed);
          border-radius: var(--md-sys-shape-corner-medium);
          border: var(--md-sys-color-on-primary-fixed) solid var(--sizes-thickness-hairline);
          color: var(--md-sys-color-on-primary-fixed);
          font-size: var(--md-sys-typescale-body-small-size);
          margin-block: var(--spaces-margin-s);
          text-align: center;
          min-inline-size: min-content;
          padding-inline: var(--spaces-padding-xs);
        }
      }

      p {
        padding-block: var(--spaces-padding-l);
        padding-inline: var(--spaces-padding-xs);
        margin: var(--spaces-none);

        &::first-line {
          font-size: var(--md-sys-typescale-headline-medium-size);
          line-height: var(--md-sys-typescale-headline-medium-line-height);
          font-family: var(--md-ref-typeface-brand);
        }

        &::first-letter {
          background-color: var(--md-sys-color-on-secondary-fixed);
          border: var(--md-sys-color-secondary-fixed) solid var(--sizes-thickness-hairline);
          border-radius: var(--md-sys-shape-corner-small);
          color: var(--md-sys-color-secondary-fixed);
          font-size: var(--md-sys-typescale-headline-large-size);
          font-weight: var(--md-ref-typeface-weight-bold);
          margin-inline-start: var(--spaces-padding-s);
        }
      }
    }

    section.sub-section {
      display: flex;
      flex-direction: row;
      gap: var(--spaces-gap-m);
      margin-block-start: var(--spaces-margin-xs);
      align-items: center;

      h3 {
        flex: 1;
        text-align: start;
        margin: var(--spaces-none);
      }

      ul {
        flex: 2;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        margin: var(--spaces-none);
        padding: var(--spaces-none);

        li {
          display: flex;
        }
      }
    }
  }

`;