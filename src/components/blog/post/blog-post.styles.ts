import { type CSSResult, css } from "lit";

export const BlogPostStyles: CSSResult = css`
  :host {
    /**
     * @cssprop --blog-post-animation - The duration of the animation for \`:focus\`, \`:hover\`,
     *   \`:focus-within\`, and \`:focus-visible\` states
     */
    --blog-post-animation: var(--motion-duration-short);

    /**
     * @cssprop --blog-post-primary-text-color - The color of the primary text
     */
    --blog-post-primary-text-color: var(--md-sys-color-on-secondary-container);

    /**
     * @cssprop --blog-post-secondary-text-color - The color of the secondary text
     */
    --blog-post-secondary-text-color: var(--md-sys-color-on-secondary);

    /**
     * @cssprop --blog-post-container-color - The color of the container, {@link @material/web!md-elevated-card}
     *   and {@link @material/web!--md-elevated-card-container-color}
     */
    --blog-post-container-color: var(--md-sys-color-secondary-container);
    --md-elevated-card-container-color: var(--blog-post-container-color);

    /**
     * @cssprop --blog-post-header-divider-color - The color for the {@link @material/web!MdDivider} used in the \`<header>\`
     *   element of the \`blog-post\`.  Defaults to \`--blog-post-primary-text-color\`
     */
    --blog-post-header-divider-color: var(--blog-post-primary-text-color);

    container-type: inline-size;
    display: block;
    transition:
      --blog-post-primary-text-color var(--blog-post-animation) var(--motion-easing-base),
      --blog-post-secondary-text-color var(--blog-post-animation) var(--motion-easing-base),
      --blog-post-container-color var(--blog-post-animation) var(--motion-easing-base),
      --blog-post-header-divider-color var(--blog-post-animation) var(--motion-easing-base);

    :hover,
    :focus,
    :focus-visible,
    :focus-within {
      --blog-post-primary-text-color: var(--md-sys-color-on-secondary);
      --blog-post-header-divider-color: var(--blog-post-primary-text-color);
      --blog-post-container-color: var(--md-sys-color-secondary);
      --md-elevated-card-container-color: var(--blog-post-container-color);
      --blog-post-secondary-text-color: var(--md-sys-color-on-secondary-container);
    }

    @media (prefers-reduced-motion: reduce) {
      --blog-post-animation: 0ms;

      transition: all 0ms var(--motion-easing-base);
    }
  }

  a {
    color: var(--blog-post-primary-text-color);
    display: flex;
    align-items: center;
    gap: var(--spacing-gap-s);

    img {
      aspect-ratio: 1;
      height: auto;
      width: calc(2 * var(--md-icon-size));
    }
  }

  md-elevated-card {
    --md-elevated-card-container-elevation: var(--motion-elevation-level-1);
    --md-elevated-card-container-shape: var(--md-sys-shape-corner-medium);
    --md-divider-color: var(--blog-post-header-divider-color);

    color: var(--blog-post-primary-text-color);
    container-type: inline-size;
    margin: var(--spacing-margin-xxs);
    padding: var(--spacing-padding-m);
    transition:
      transform var(--blog-post-animation) var(--motion-easing-emphasized),
      color var(--blog-post-animation) var(--motion-easing-base),
      --md-elevated-card-container-elevation var(--blog-post-animation) var(--motion-easing-base),
      --md-elevated-card-container-shape var(--blog-post-animation) var(--motion-easing-base),
      --md-elevated-card-container-color var(--blog-post-animation) var(--motion-easing-base);
    will-change: transform;

    &:hover,
    &:focus,
    &:focus-visible,
    &:focus-within {
      --md-elevated-card-container-elevation: var(--motion-elevation-level-3);
      --md-elevated-card-container-shape: var(--md-sys-shape-corner-large);
    }
  }

  section {
    display: grid;
    gap: var(--spacing-gap-xs);
    grid-template-areas:
      "header  header"
      "header  header"
      "header  header"
      "summary summary";
    grid-template-columns: 1fr 1fr;

    header {
      display: grid;
      grid-area: header;
      grid-template-columns: subgrid;
      grid-template-rows: subgrid;
    }

    h3 {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      margin: var(--spacing-reset);
    }

    md-divider {
      grid-column: 1 / -1;
      margin-block: var(--spacing-margin-s);
    }

    h4 {
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      margin: var(--spacing-reset);
    }

    p {
      grid-area: summary;
      margin: var(--spacing-reset);
      margin-block-start: var(--spacing-margin-xs);
    }

    @container (width > 1000px) {
      grid-template-areas:
        "header  header"
        "header  header"
        "header  header"
        "summary summary";
      grid-template-columns: 1fr 1fr;
    }
  }
`;