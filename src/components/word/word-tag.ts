import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { type WordTagHeaviness } from "@/types/components/word/word-tag";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * @summary Displays a word in a simple padded box in which the text color and border are synchronised
 *
 * @property {string} [word=""] - The tagged word
 * @property {WordTagHeaviness} [heaviness="normal"] - The weight of the tag (text & border), can be
 *  `"normal"` (`--md-ref-typeface-weight-regular` & `--hairline-width`) or
 *  `"heavy"` (`--md-ref-typeface-weight-bold` & `2.5 * --hairline-width`)
 * @property {string} [hrefUrl=""] - A URL which, when provided, wraps this {@link WordTag} in a
 *  {@link HTMLAnchorElement}
 *
 * @cssprop [--word-tag-color=--md-sys-color-on-primary-container] - The text and border color
 * @cssprop [--word-tag-background-color=--md-sys-color-primary-container] - The background color
 * @cssprop [--word-tag-font-family=--md-ref-typeface-brand] - The font family
 * @cssprop [--word-tag-font-size=--md-typescale-body-large-font-size] - The font size
 * @cssprop [--word-tag-font-weight=--md-ref-typeface-weight-regular] - The font weight
 * @cssprop [--word-tag-line-height=--md-typescale-body-large-lingt-height] - The line height
 * @cssprop [--word-tag-border-radius=--md-sys-shape-corner-small] - The corner radius (for all corners)
 *
 * @export
 * @class WordTag
 * @extends {LitElement}
 */
@customElement("word-tag")
export class WordTag extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        /** @ignore */
        --internal-word-tag-color: var(--word-tag-color, var(--md-sys-color-on-primary-container));

        /** @ignore */
        --internal-word-tag-background-color: var(--word-tag-background-color, var(--md-sys-color-primary-container));

        /** @ignore */
        --internal-word-tag-font-family: var(--word-tag-font-family, var(--md-ref-typeface-brand));

        /** @ignore */
        --internal-word-tag-font-size: var(--word-tag-font-size, var(--md-sys-typescale-body-large-size));

        /** @ignore */
        --internal-word-tag-font-weight: var(--word-tag-font-weight, var(--md-sys-typescale-body-large-weight));

        /** @ignore */
        --internal-word-tag-line-height: var(--word-tag-line-height, var(--md-sys-typescale-body-large-line-height));

        /** @ignore */
        --internal-word-tag-border-radius: var(--word-tag-border-radius, var(--md-sys-shape-corner-small));

        /** @ignore */
        --internal-word-tag-animation-duration: 200ms;

        @media (prefers-reduced-motion: reduce) {
          --internal-word-tag-animation-duration: 0ms;
        }

        display: contents;
      }

      span {
        color: var(--internal-word-tag-color);
        background-color: var(--internal-word-tag-background-color);
        font-family: var(--internal-word-tag-font-family);
        padding: 0.5rem;
        font-size: var(--internal-word-tag-font-size);
        line-height: var(--internal-word-tag-line-height);
        border-radius: var(--internal-word-tag-border-radius);
        border-color: var(--internal-word-tag-color);
        border-style: solid;
        transition: all var(--internal-word-tag-animation-duration) ease-in-out;
      }
    `,
  ];

  @property({ type: String })
  word = "";

  @property()
  heaviness: WordTagHeaviness = "normal";

  @property({ type: String })
  hrefUrl = "";

  override render() {
    const styles = {
      borderWidth: this.heaviness === "normal" ? "var(--hairline-width)" : "calc(2.5 * var(--hairline-width))",
      fontWeight: this.heaviness === "normal" ? "var(--md-ref-typeface-weight-regular)" : "var(--md-ref-typeface-weight-bold)",
    };

    const defaultWordTag = html`
      <span style=${styleMap(styles)}>${this.word}</span>
    `;

    return this.hrefUrl === "" ?
      defaultWordTag :
      html`<a href=${this.hrefUrl} target="_blank" rel="noopener noreferrer">${defaultWordTag}</a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-tag": WordTag;
  }
}