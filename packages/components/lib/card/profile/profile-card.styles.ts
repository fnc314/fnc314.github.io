import { type CSSResult, css } from "lit";

export const ProfileCardStyles: CSSResult = css`
  :host {
    display: block;
    block-size: 100%;

    --profile-card-image-block-size-max: 500px;
    --profile-card-image-inline-size-max: 100%;

    --profile-card-filled-icon-button-scale: 2.25;
    --profile-card-filled-icon-button-container-color: var(
      --md-sys-color-tertiary-container
    );
    --profile-card-filled-icon-button-container-size: calc(
      var(--profile-card-filled-icon-button-scale) *
      var(--md-icon-size)
    );
    --profile-card-filled-icon-button-icon-color: var(
      --md-sys-color-on-tertiary-container
    );
    --profile-card-filled-icon-button-icon-scale: 0.75;
    --profile-card-filled-icon-button-icon-size: calc(
      var(--profile-card-filled-icon-button-icon-scale) *
      var(--profile-card-filled-icon-button-container-size)
    );

    --md-filled-icon-button-container-color: var(
      --profile-card-filled-icon-button-container-color
    );
    --md-filled-icon-button-container-height: var(
      --profile-card-filled-icon-button-container-size
    );
    --md-filled-icon-button-container-width: var(
      --profile-card-filled-icon-button-container-size
    );
    --md-filled-icon-button-container-shape: var(
      --md-sys-shape-corner-medium
    );
    --md-filled-icon-button-icon-color: var(
      --profile-card-filled-icon-button-icon-color
    );
    --md-filled-icon-button-focus-icon-color: var(
      --profile-card-filled-icon-button-icon-color
    );
    --md-filled-icon-button-hover-icon-color: var(
      --profile-card-filled-icon-button-icon-color
    );
    --md-filled-icon-button-icon-size: var(
      --profile-card-filled-icon-button-icon-size
    );
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
          font-size: var(--md-sys-typescale-headline-large-size);
          font-weight: var(--md-ref-typeface-weight-bold);
        }
      }
    }

    table {
      table-layout: fixed;
      border-collapse: collapse;

      th[scope="row"] {
        font-weight: var(--md-ref-typeface-weight-bold);
        width: 20%;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        padding: var(--spaces-padding-s) var(--spaces-none);
        color: var(--md-sys-color-on-surface-variant);
      }

      td {
        padding: var(--spaces-padding-s);
        text-align: center;
        vertical-align: middle;
      }

      tr:not(:last-child) {
        border-bottom: var(--sizes-thickness-xs) solid var(--profile-card-filled-icon-button-container-color);
      }
    }
  }

`;