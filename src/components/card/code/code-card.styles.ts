import { css } from "lit";

/**
 * @summary Styles for the CodeCard component.
 * @packageDocumentation
 */
export const CodeCardStyles = css`
  :host {
    block-size: 100%;
    display: block;
  }

  .code-container {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
  }

  .code-list {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
  }

  @container style(--breakpoint-label: mobile) {
    .code-list {
      flex-direction: row;
      overflow-inline: auto;
      padding-block-end: var(--spaces-padding-xs);
      scroll-snap-type: x mandatory;
    }

    code-repo {
      min-inline-size: 80%;
      scroll-snap-align: start;
    }
  }
`;
