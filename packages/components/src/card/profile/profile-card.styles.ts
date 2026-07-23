import { type CSSResult, css } from "lit";

export const ProfileCardStyles: CSSResult = css`
  :host {
    display: block;
    block-size: 100%;

    --profile-card-image-block-size: auto;
    --profile-card-image-block-size-max: 500px;
    --profile-card-image-inline-size-max: 100%;
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
          border-radius: var(--bento-layout-card-shape);
          block-size: var(--profile-card-image-block-size);
          max-inline-size: var(--profile-card-image-inline-size-max);
          object-fit: cover;
          object-position: center center;
        }

        figcaption {
          background-color: var(--md-sys-color-primary-fixed);
          border-radius: var(--bento-layout-card-shape);
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

      p.accented {
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

    article {
      h3, h4 {
        margin-block: unset;
      }
    }
  }
`;
