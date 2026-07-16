import { type CSSResult, css } from "lit";

export const ProfileCardStyles: CSSResult = css`
  :host {
    display: block;
    block-size: 100%;

    --profile-card-image-block-size: auto;
    --profile-card-image-block-size-max: 500px;
    --profile-card-image-inline-size-max: 100%;

    --profile-card-filled-icon-button-scale: 2.25;
    --profile-card-filled-icon-button-container-color: var(--md-sys-color-tertiary-container);
    --profile-card-filled-icon-button-container-size: calc(
      var(--profile-card-filled-icon-button-scale) * var(--md-icon-size)
    );
    --profile-card-filled-icon-button-icon-color: var(--md-sys-color-on-tertiary-container);
    --profile-card-filled-icon-button-icon-scale: 0.75;
    --profile-card-filled-icon-button-icon-size: calc(
      var(--profile-card-filled-icon-button-icon-scale) * var(--profile-card-filled-icon-button-container-size)
    );

    --md-filled-icon-button-container-color: var(--profile-card-filled-icon-button-container-color);
    --md-filled-icon-button-container-height: var(--profile-card-filled-icon-button-container-size);
    --md-filled-icon-button-container-width: var(--profile-card-filled-icon-button-container-size);
    --md-filled-icon-button-container-shape: var(--md-sys-shape-corner-medium);
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
        align-items: center;

        img {
          border: var(--sizes-thickness-xxs) solid var(--md-sys-color-primary-fixed);
          border-radius: var(--md-sys-shape-corner-medium);
          block-size: var(--profile-card-image-block-size);
          max-inline-size: var(--profile-card-image-inline-size-max);
          object-fit: cover;
          object-position: center center;
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
          align-self: stretch;
        }
      }

      p {
        padding-block: var(--spaces-padding-m);
        padding-inline: var(--spaces-padding-xs);
        margin: var(--spaces-none);
        white-space: pre-wrap;
        text-indent: 1rem each-line;

        &::first-line {
          font-size: var(--md-sys-typescale-headline-medium-size);
          line-height: var(--md-sys-typescale-headline-medium-line-height);
          font-family: var(--md-ref-typeface-brand);
          font-variant: small-caps;
        }

        &::first-letter {
          background-color: var(--md-sys-color-on-secondary-fixed);
          border: var(--md-sys-color-secondary-fixed) solid var(--sizes-thickness-hairline);
          border-radius: var(--md-sys-shape-corner-small);
          color: var(--md-sys-color-secondary-fixed);
          line-height: var(--md-sys-typescale-headline-large-line-height);
          font-size: var(--md-sys-typescale-headline-large-size);
          font-weight: var(--md-ref-typeface-weight-bold);
        }
      }
    }

    dl {
      display: flex;
      flex-direction: column;
      gap: var(--spaces-gap-l);

      div {
        display: grid;
        grid-template-rows: min-content auto;
        grid-template-columns: repeat(9, 1fr);
        gap: var(--spaces-gap-s);
        place-items: center;
        border-radius: var(--md-sys-shape-corner-large);
        background-color: var(--md-sys-color-surface-container);
        padding-block: var(--spaces-padding-s);

        dt {
          grid-row: 1 / 2;
          grid-column: 4 / span 3;
        }

        dd {
          grid-row: 2 / 3;
          margin: unset;
        }
      }

    }
  }
`;
