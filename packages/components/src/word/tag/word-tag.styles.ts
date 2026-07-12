import { type CSSResult, css } from "lit";

export const WordTagStyles: CSSResult = css`
  :host {
    /** @ignore */
    --internal-word-tag-color: var(--word-tag-color, var(--md-sys-color-on-primary-container));

    /** @ignore */
    --internal-word-tag-background-color: var(--word-tag-background-color, var(--md-sys-color-primary-container));

    /** @ignore */
    --internal-word-tag-font-family: var(--word-tag-font-family, var(--md-ref-typeface-brand));

    /** @ignore */
    --internal-word-tag-font-size: var(--word-tag-font-size, var(--md-sys-typescale-body-large-size));

    /** @ignore */
    --internal-word-tag-font-weight: var(--word-tag-font-weight, var(--md-sys-typescale-body-large-weight));

    /** @ignore */
    --internal-word-tag-line-height: var(--word-tag-line-height, var(--md-sys-typescale-body-large-line-height));

    /** @ignore */
    --internal-word-tag-border-radius: var(--word-tag-border-radius, var(--md-sys-shape-corner-small));

    /** @ignore */
    --internal-word-tag-animation-duration: 200ms;

    /** @ignore */
    --internal-word-tag-gap: var(--word-tag-gap, var(--spaces-gap-xs));

    display: contents;

    @media (prefers-reduced-motion: reduce) {
      --internal-word-tag-animation-duration: 0ms;
    }
  }

  .word-tag-variant-wrapper {
    align-items: center;
    background-color: var(--internal-word-tag-background-color);
    border-color: var(--internal-word-tag-color);
    border-radius: var(--internal-word-tag-border-radius);
    border-style: solid;
    display: flex;
    flex-direction: row;
    gap: var(--internal-word-tag-gap);
    max-inline-size: 100%;
    overflow: hidden;
    padding: var(--spaces-padding-xs);
    transition: all var(--internal-word-tag-animation-duration) ease-in-out;

    span {
      color: var(--internal-word-tag-color);
      font-family: var(--internal-word-tag-font-family);
      font-size: var(--internal-word-tag-font-size);
      line-height: var(--internal-word-tag-line-height);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;