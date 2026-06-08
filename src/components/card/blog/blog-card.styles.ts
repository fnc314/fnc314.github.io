import { css } from "lit";

/**
 * @summary Styles for the BlogCard component.
 * @packageDocumentation
 */
export const blogCardStyles = css`

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

  @media screen and (width <= 768px) {
    .blog-list {
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: var(--spacing-padding-xs);
      scroll-snap-type: x mandatory;
    }

    blog-post {
      min-width: 80%;
      scroll-snap-align: start;
    }
  }
`;
