import { css } from "lit";

/**
 * @summary Styles for the SkillsCard component.
 * @packageDocumentation
 */
export const SkillsCardStyles = css`
  :host {
    block-size: 100%;
    display: block;
  }

  .skills-container {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
  }
`;
