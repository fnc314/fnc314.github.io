import { type CSSResult, css } from "lit";

export const ProfileCardStyles: CSSResult = css`
  :host {
    display: block;
    block-size: 100%;
  }

  .profile-bio-container {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
  }

  .profile-picture {
    border: var(--sizes-thickness-xxs) solid var(--md-sys-color-primary);
    border-radius: var(--md-sys-shape-corner-medium);
    max-block-size: 300px;
    object-fit: contain;
    inline-size: 100%;
  }

  .profile-figcaption {
    color: var(--md-sys-color-on-surface-variant);
    font-size: var(--md-sys-typescale-body-small-size);
    margin-block-start: var(--spaces-margin-xs);
    text-align: center;
  }
`;