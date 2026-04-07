import { type CSSResult, css } from "@lit/reactive-element";

/**
 * Sizing for \`<md-dialog>\`s
 *
 * @type {CSSResult}
 */
export const DialogSizing: CSSResult = css`
  md-dialog {
    min-width: 80dvw;
    max-width: 90dvw;
    min-height: 80dvh;
    max-height: 90dvh;
  }
`;