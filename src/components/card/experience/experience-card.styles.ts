import { css } from "lit";

/**
 * @summary Styles for the WorkCard component.
 * @packageDocumentation
 */
export const WorkCardStyles = css`
  :host {
    block-size: 100%;
    display: block;
  }

  .work-container {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
  }
`;
