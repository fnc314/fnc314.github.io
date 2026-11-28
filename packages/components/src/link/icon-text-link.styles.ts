import { type CSSResult, css } from "lit";

export const IconTextLinkStyles: CSSResult = css`
  :host {
    display: inline-flex;
    min-inline-size: 0;
    max-inline-size: 100%;
  }

  a {
    align-items: center;
    color: var(--icon-text-link-color, var(--md-sys-color-tertiary));
    display: inline-flex;
    gap: var(--icon-text-link-gap, var(--spaces-gap-xs));
    max-inline-size: 100%;
    min-inline-size: 0;
    text-decoration: none;
    font-family: inherit;
    font-size: var(--icon-text-link-font-size, var(--md-sys-typescale-label-large-size, 0.875rem));
    line-height: var(--icon-text-link-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    span.text-label {
      overflow-wrap: break-word;
      word-break: break-word;
    }

    span.icon-wrapper {
      align-items: center;
      display: inline-flex;
      flex-shrink: 0;
      justify-content: center;
      block-size: var(--icon-text-link-icon-size, var(--md-icon-size));
      inline-size: var(--icon-text-link-icon-size, var(--md-icon-size));

      svg,
      iconify-icon {
        block-size: 100%;
        inline-size: 100%;
      }
    }
  }

  a.orientation-text-first {
    flex-direction: row;
    justify-content: flex-end;
    text-align: end;
  }

  a.orientation-icon-first {
    flex-direction: row;
    justify-content: flex-start;
    text-align: start;
  }
`;
