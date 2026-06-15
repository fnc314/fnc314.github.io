import { type CSSResult, css } from "lit";

export const DynamicBorderStyles: CSSResult = css`
  :host {
    display: block;
    container-type: inline-size !important;

    --dynamic-border-content: "";
    --dynamic-border-background-image: none;
    --dynamic-border-size: calc(var(--sizes-thickness-hairline) * 8);
    --dynamic-border-color: var(--md-sys-color-on-primary-container);
    --dynamic-border-background: var(--md-sys-color-primary-container);
  }

  .dynamic-border-host {
    position: relative;
    z-index: 1;

    &::before {
      z-index: -1;
      content: var(--dynamic-border-content);
      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;
      inset-block-end: 0;
      inline-size: var(--dynamic-border-size);
      block-size: unset;
      background-color: var(--dynamic-border-background);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: var(--md-sys-typescale-title-large-font);
      font-size: var(--md-sys-typescale-title-large-size);
      font-weight: var(--md-sys-typescale-title-large-weight);
      color: var(--dynamic-border-color);
      background-image: var(--dynamic-border-background-image);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-origin: content-box;
      padding: var(--spaces-padding-xxs);
    }
  }

  @container (max-width: 600px) {
    // .dynamic-border-host {
    //   &::before {
    //     width: unset;
    //     height: var(--dynamic-border-size);
    //     inset-inline-end: 0;
    //     inset-block-end: unset;
    //   }
    // }
  }

  @container (max-width: 300px) {
    .dynamic-border-host {
      &::before {
        inline-size: unset;
        block-size: var(--dynamic-border-size);
        inset-inline-end: 0;
        inset-block-end: unset;
      }
    }
  }
`;