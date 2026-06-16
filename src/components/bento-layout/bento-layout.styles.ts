import { css } from "lit";

/**
 * @summary Styles for the BentoLayout component.
 *
 * Orchestrates the responsive grid layout for the bento box UI.
 * Supports mobile (flex column), tablet (6-column grid), and desktop (12-column grid) layouts.
 * Mobile styles use flex so this is only used when
 * screen and (width >= 769px)
 * Tablet -> 769 <= 1200 -> 6
 * Desktop -> >= 1201 -> 12
 */
export const BentoLayoutStyles = css`
  :host {
    --bento-layout-column-count: 1;

    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    display: block;
    inline-size: 100%;
    padding-block-end: var(--spaces-padding-xl);
  }

  main {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    padding: var(--spaces-padding-xs);

    h1 {
      background-color: var(--md-sys-color-primary-fixed);
      border-color: var(--md-sys-color-on-primary-fixed);
      border-radius: var(--md-sys-shape-corner-large);
      border-width: var(--hairline-width);
      color: var(--md-sys-color-on-primary-fixed);
      grid-area: span 1 / span var(--bento-layout-column-count);
      inline-size: 100%;
      margin-inline: auto;
      padding-block: var(--spaces-padding-l);
      text-align: center;
    }
  }

  @media screen and (width >= 769px) {
    :host {
      --bento-layout-column-count: 6;
    }

    main {
      display: grid;
      grid-auto-flow: dense;
      grid-template-areas:
        ". header header header header ."
        "profile    profile    work work work work"
        "education education work work work work"
        "connect connect connect connect connect connect"
        "blog blog blog code code code"
        "skills skills skills skills skills skills"
        "settings settings settings settings settings settings";
      grid-template-columns: repeat(var(--bento-layout-column-count), 1fr);

      h1 {
        grid-area: header;
      }
    }
  }

  @media screen and ((width <= 1200px) and (width >= 769px)) {
    main {
      align-items: unset;
      gap: var(--spaces-gap-m);
      padding: var(--spaces-padding-s);
    }
  }

  @media screen and (width >= 1201px) {
    :host {
      --bento-layout-column-count: 12;
    }

    main {
      gap: var(--spaces-gap-l);
      margin: var(--spaces-none) auto;
      padding: var(--spaces-padding-m);
      grid-template-areas:
        "header   header   header   header   header   header   header   header   header   header   header   header"
        "profile  profile  profile  profile  work     work     work     work     work     work     work     work"
        "education education education education work    work     work     work     work     work     work     work"
        "connect  connect  connect  connect  work     work     work     work     work     work     work     work"
        "blog     blog     blog     blog     blog     blog     blog     blog     blog     blog     blog     blog"
        "code     code     code     code     code     code     code     code     code     code     code     code"
        "skills   skills   skills   skills   skills   skills   skills   skills   skills   skills   skills   skills"
        "settings settings settings settings settings settings settings settings settings settings settings settings";
      place-items: stretch stretch;
    }
  }
`;