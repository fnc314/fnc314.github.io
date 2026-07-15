import { type CSSResult, css } from "lit";

export const DynamicBorderStyles: CSSResult = css`
  :host {
    --dynamic-border-content: "";
    --dynamic-border-mask: none;
    --dynamic-border-background-image: none;
    --dynamic-border-size: calc(var(--sizes-thickness-hairline) * 8);
    --dynamic-border-color: var(--md-sys-color-on-primary-container);
    --dynamic-border-background: var(--md-sys-color-primary-container);

    container-type: inline-size;
    display: block;
  }

  .dynamic-border-host {
    position: relative;
    z-index: 1;

    &::before {
      align-items: center;
      background-color: var(--dynamic-border-background);
      background-image: var(--dynamic-border-background-image);
      background-origin: content-box;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      block-size: unset;
      color: var(--dynamic-border-color);
      content: var(--dynamic-border-content);
      display: flex;
      font-family: var(--md-sys-typescale-title-large-font);
      font-size: var(--md-sys-typescale-title-large-size);
      font-weight: var(--md-sys-typescale-title-large-weight);
      inline-size: var(--dynamic-border-size);
      inset-block: 0;
      inset-inline-start: 0;
      justify-content: center;
      padding: var(--spaces-padding-xxs);
      position: absolute;
      z-index: -1;
    }
  }

  /* Align with mobile-first break in cards (~385px) */
  @container (min-width: 385px) {
    .dynamic-border-host {
      &::before {
        block-size: var(--dynamic-border-size);
        inline-size: unset;
        inset-block-end: unset;
        inset-inline-end: 0;
      }
    }
  }

  @container (min-width: 1201px) {
    .dynamic-border-host {
      &::before {
        block-size: unset;
        inline-size: var(--dynamic-border-size);
        inset-block: 0;
        inset-inline-end: unset;
        inset-inline-start: 0;
      }
    }
  }
`;
