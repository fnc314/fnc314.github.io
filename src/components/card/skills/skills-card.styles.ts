import { css } from "lit";
import { MaterialTypescaleStyles } from "@/styles/material-styles";

/**
 * @summary Styles for the SkillsCard component.
 * @packageDocumentation
 */
export const skillsCardStyles = css`
  ${MaterialTypescaleStyles}
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
