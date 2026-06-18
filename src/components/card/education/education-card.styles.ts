import { css } from "lit";

/**
 * @summary Styles for the EducationCard component.
 * @packageDocumentation
 */
export const EducationCardStyles = css`
  :host {
    --md-divider-color: currentcolor;
    --education-icon-size: 3rem;

    block-size: 100%;
    container-name: education-card-container;
    container-type: inline-size;
    display: block;
    inline-size: 100%;
  }

  section {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    inline-size: 100%;
    justify-content: center;
    align-items: stretch;

    ul {
      block-size: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      gap: var(--spaces-gap-xl);
      justify-content: space-between;
      list-style: none;
      margin: var(--spaces-none);
      padding: var(--spaces-none);
    }
  }
`;
