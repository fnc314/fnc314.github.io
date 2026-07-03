import { type CSSResult, css } from "lit";

export const WordCloudStyles: CSSResult = css`
  :host {
    --word-cloud-animation: 150ms;
    --word-cloud-animation-reduced: 1ms;
    --word-cloud-first-quartile-font-size: var(--md-sys-typescale-headline-medium-size);
    --word-cloud-first-quartile-line-height: var(--md-sys-typescale-headline-medium-line-height);
    --word-cloud-second-quartile-font-size: var(--md-sys-typescale-headline-small-size);
    --word-cloud-second-quartile-line-height: var(--md-sys-typescale-headline-small-line-height);
    --word-cloud-third-quartile-font-size: var(--md-sys-typescale-title-large-size);
    --word-cloud-third-quartile-line-height: var(--md-sys-typescale-title-large-line-height);
    --word-cloud-fourth-quartile-font-size: var(--md-sys-typescale-body-medium-size);
    --word-cloud-fourth-quartile-line-height: var(--md-sys-typescale-body-medium-line-height);

    container-type: inline-size;
    display: flex;
    flex-direction: column;
  }

  ul {
    align-items: center;
    display: flex;
    flex: 1;
    flex-flow: row wrap;
    gap: 0.5rem;
    justify-content: space-evenly;
    list-style-type: none;
    margin: unset;
    padding: unset;
  }

  li {
    --word-tag-border-radius: var(--md-sys-shape-corner-medium);
    --word-tag-font-family: var(--md-ref-typeface-brand);

    min-inline-size: 0;

    /* Animation Base State */
    opacity: 0;
    padding: var(--spaces-padding-xs);
    transform: scale(0.8) translateY(8px);
    transition:
      opacity var(--word-cloud-animation) ease-out,
      transform var(--word-cloud-animation) cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: opacity, transform;
  }

  /* Animation Active State (base styles, transforms applied inline) */
  ul.visible li {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  ul.instant-clear:not(.visible) li {
    transition: none;
  }

  .first-quartile {
    --word-tag-font-size: var(--word-cloud-first-quartile-font-size);
    --word-tag-line-height: var(--word-cloud-first-quartile-line-height);

    &.tech {
      --word-tag-background-color: var(--md-sys-color-primary-container);
      --word-tag-color: var(--md-sys-color-on-primary-container);
    }

    &.practice {
      --word-tag-background-color: var(--md-sys-color-primary);
      --word-tag-color: var(--md-sys-color-on-primary);
    }

    &.product {
      --word-tag-background-color: var(--md-sys-color-primary-fixed);
      --word-tag-color: var(--md-sys-color-on-primary-fixed);
    }
  }

  .second-quartile {
    --word-tag-font-size: var(--word-cloud-second-quartile-font-size);
    --word-tag-line-height: var(--word-cloud-second-quartile-line-height);

    &.tech {
      --word-tag-background-color: var(--md-sys-color-secondary-container);
      --word-tag-color: var(--md-sys-color-on-secondary-container);
    }

    &.practice {
      --word-tag-background-color: var(--md-sys-color-secondary);
      --word-tag-color: var(--md-sys-color-on-secondary);
    }

    &.product {
      --word-tag-background-color: var(--md-sys-color-secondary-fixed);
      --word-tag-color: var(--md-sys-color-on-secondary-fixed);
    }
  }

  .third-quartile {
    --word-tag-font-size: var(--word-cloud-third-quartile-font-size);
    --word-tag-line-height: var(--word-cloud-third-quartile-line-height);

    &.tech {
      --word-tag-background-color: var(--md-sys-color-tertiary-container);
      --word-tag-color: var(--md-sys-color-on-tertiary-container);
    }

    &.practice {
      --word-tag-background-color: var(--md-sys-color-tertiary);
      --word-tag-color: var(--md-sys-color-on-tertiary);
    }

    &.product {
      --word-tag-background-color: var(--md-sys-color-tertiary-fixed);
      --word-tag-color: var(--md-sys-color-on-tertiary-fixed);
    }
  }

  .fourth-quartile {
    --word-tag-font-size: var(--word-cloud-fourth-quartile-font-size);
    --word-tag-line-height: var(--word-cloud-fourth-quartile-line-height);

    &.tech {
      --word-tag-background-color: var(--md-sys-color-on-primary-container);
      --word-tag-color: var(--md-sys-color-primary-container);
    }

    &.practice {
      --word-tag-background-color: var(--md-sys-color-on-primary);
      --word-tag-color: var(--md-sys-color-primary);
    }

    &.product {
      --word-tag-background-color: var(--md-sys-color-on-primary-fixed);
      --word-tag-color: var(--md-sys-color-primary-fixed);
    }
  }

  @container (max-width: 500px) {
    :host {
      --word-cloud-first-quartile-font-size: var(--md-sys-typescale-title-large-size);
      --word-cloud-first-quartile-line-height: var(--md-sys-typescale-title-large-line-height);
      --word-cloud-second-quartile-font-size: var(--md-sys-typescale-title-medium-size);
      --word-cloud-second-quartile-line-height: var(--md-sys-typescale-title-medium-line-height);
      --word-cloud-third-quartile-font-size: var(--md-sys-typescale-body-medium-size);
      --word-cloud-third-quartile-line-height: var(--md-sys-typescale-body-medium-line-height);
      --word-cloud-fourth-quartile-font-size: var(--md-sys-typescale-body-small-size);
      --word-cloud-fourth-quartile-line-height: var(--md-sys-typescale-body-small-line-height);
    }

    li {
      padding: var(--spaces-padding-xxs) !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    li {
      transition: all var(--word-cloud-animation-reduced) ease-in-out;
    }
  }
`;