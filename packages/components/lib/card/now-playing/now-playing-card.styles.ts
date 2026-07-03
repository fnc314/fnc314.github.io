import { css } from "lit";

export const NowPlayingCardStyles = css`
  article {
    display: flex;
    align-items: center;
    gap: var(--spaces-gap-m);
    height: 100%;
  }

  figure {
    position: relative;
    width: var(--sizes-width-xxxl);
    height: var(--sizes-height-xxxl);
    border-radius: var(--button-container-shape);
    overflow: hidden;
    flex-shrink: var(--sizes-none);
    background-color: var(--globals-color-background);
    margin: var(--spaces-none);
  }

  img, figure > div {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  figcaption {
    position: absolute;
    bottom: var(--sizes-height-xxs);
    right: var(--sizes-width-xxs);
    display: flex;
    gap: var(--spaces-gap-xxs);
    height: var(--sizes-height-m);
    align-items: flex-end;
    background: var(--globals-color-background);
    padding: var(--spaces-padding-xxs);
    border-radius: var(--button-container-shape);
  }

  span {
    width: var(--sizes-thickness-xxs);
    background-color: var(--md-sys-color-primary);
    animation: eq var(--globals-transition-color-duration) var(--globals-transition-color-timing) infinite alternate;
  }

  span:nth-child(1) { animation-delay: var(--motions-delay-xxs); height: 60%; }
  span:nth-child(2) { animation-delay: var(--motions-delay-l); height: 100%; }
  span:nth-child(3) { animation-delay: var(--motions-delay-none); height: 40%; }
  span:nth-child(4) { animation-delay: var(--motions-delay-xl); height: 80%; }

  @keyframes eq {
    0% { transform: scaleY(0.2); }
    100% { transform: scaleY(1); }
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  h3 {
    margin: var(--spaces-none);
    font-weight: bold;
    color: var(--md-sys-color-on-surface);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: var(--spaces-none);
    color: var(--md-sys-color-on-surface-variant);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .error, .loading {
    color: var(--md-sys-color-on-surface-variant);
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
`;
