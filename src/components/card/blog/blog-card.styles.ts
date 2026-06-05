import { css } from "lit";
import { MaterialTypescaleStyles } from "@/styles/material-styles";

/**
 * @summary Styles for the BlogCard component.
 * @packageDocumentation
 */
export const blogCardStyles = css`
  ${MaterialTypescaleStyles}
  :host {
    display: block;
    height: 100%;
  }

  .blog-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
    height: 100%;
  }

  .blog-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-xs);
  }

  @media screen and (width <= 736px) {
    .blog-list {
      flex-direction: row;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: var(--spacing-padding-xs);
    }

    blog-post {
      min-width: 80%;
      scroll-snap-align: start;
    }
  }
`;
