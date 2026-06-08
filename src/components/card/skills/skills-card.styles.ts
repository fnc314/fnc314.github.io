import { css } from "lit";

/**
 * @summary Styles for the SkillsCard component.
 * @packageDocumentation
 */
export const skillsCardStyles = css`

  :host {
    display: block;
    height: 100%;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
    height: 100%;
  }
`;
