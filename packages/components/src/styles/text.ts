import { styles as MaterialTypescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import { type CSSResult, css } from "lit";

/**
 * A {@link CSSResult} merging in {@link MaterialTypescaleStyles}
 *   with some sane defaults
 *
 * @type {CSSResult}
 */
export const TextStyles: CSSResult = css`
  ${MaterialTypescaleStyles}

  a,
  dd, dt,
  figcaption,
  h1, h2, h3, h4, h5, h6,
  label, li,
  p,
  span, sub, sup,
  time {
    text-wrap: balance;
  }
`;
