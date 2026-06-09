import { css } from "lit";

/**
 * @summary Styles for the WorkCard component.
 * @packageDocumentation
 */
export const WorkCardStyles = css`
  :host {
    display: block;
    height: 100%;
  }

  .work-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-gap-s);
    height: 100%;
  }
`;
