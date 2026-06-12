import { css } from "lit";

/**
 * @summary Styles for the SkillsCard component.
 * @packageDocumentation
 */
export const SkillsCardStyles = css`
  :host {
    display: block;
    height: 100%;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    height: 100%;
  }
`;
