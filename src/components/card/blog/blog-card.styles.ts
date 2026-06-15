import { css } from "lit";

/**
 * @summary Styles for the BlogCard component.
 * @packageDocumentation
 */
export const BlogCardStyles = css`
  :host {
    display: block;
    block-size: 100%;
  }

  .blog-container {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    block-size: 100%;
  }

  .blog-list {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
  }

  @media screen and (width <= 768px) {
    .blog-list {
      flex-direction: row;
      overflow-x: auto;
      padding-block-end: var(--spaces-padding-xs);
      scroll-snap-type: x mandatory;
    }

    blog-entry {
      min-inline-size: 80%;
      scroll-snap-align: start;
    }
  }
`;
