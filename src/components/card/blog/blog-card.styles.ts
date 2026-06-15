import { css } from "lit";

/**
 * @summary Styles for the BlogCard component.
 * @packageDocumentation
 */
export const BlogCardStyles = css`
  :host {
    block-size: 100%;
    display: block;
  }

  .blog-container {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
  }

  .blog-list {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
  }

  @media screen and (width <= 768px) {
    .blog-list {
      flex-direction: row;
      overflow-inline: auto;
      padding-block-end: var(--spaces-padding-xs);
      scroll-snap-type: x mandatory;
    }

    blog-entry {
      min-inline-size: 80%;
      scroll-snap-align: start;
    }
  }
`;
