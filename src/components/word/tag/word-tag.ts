import { WordTagStyles } from "@/components/word/tag/word-tag.styles";
import { type WordTagHeaviness, type WordTagVariant, WordTagVariantAttributeConverter } from "@/components/word/tag/word-tag.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { type CSSResult, type TemplateResult, css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary Displays a word in a simple padded box in which the text color and border are synchronised
 *
 * @property {string} [word=""] - The tagged word
 * @property {WordTagHeaviness} [heaviness="normal"] - The weight of the tag (text & border), can be
 *  `"normal"` (`--md-ref-typeface-weight-regular` & `--hairline-width`) or
 *  `"heavy"` (`--md-ref-typeface-weight-bold` & `2.5 * --hairline-width`)
 * @property {WordTagVariant} [variant="text-only"] - The version of the layout to render
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
 * @cssprop [--word-tag-gap=--spaces-gap-xs] - The `gap` between `word` and any `slot`-ed icon
 *
 * @slot icon - The optional space available for, and positioned by, the {@link variant} property
 *
 * @export
 * @class WordTag
 * @extends {LitElement}
 */
@customElement("word-tag")
export class WordTag extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    WordTagStyles,
  ];

  @property({ type: String })
  word = "";

  @property()
  heaviness: WordTagHeaviness = "normal";

  @property({ type: String })
  hrefUrl = "";

  /** {@link WordTagVariantAttributeConverter} */
  @property({
    attribute: "variant",
    type: String,
    converter: WordTagVariantAttributeConverter,
    reflect: true,
    useDefault: true,
  })
  variant: WordTagVariant = "text-only"

  private layoutForVariant(variant: WordTagVariant): TemplateResult {
    const fontStyles: CSSResult = css`
      font-weight: postcss_lit_0;
    `;

    const borderStyles: CSSResult = css`
      border-width: postcss_lit_0;
    `;

    const defaultWordTag = html`
      <span style=${fontStyles.cssText}>${this.word}</span>
    `;

    let contents: TemplateResult | undefined = undefined;
    switch (variant) {
      case "text-icon":
        contents = html`
          ${defaultWordTag}
          <slot name="icon"></slot>
        `;
        break;
      case "icon-text":
        contents = html`
          <slot name="icon"></slot>
          ${defaultWordTag}
        `;
        break;
      case "icon-only":
        contents = html`
          <slot name="icon"></slot>
        `;
        break;
      case "text-only":
        contents = html`
          ${defaultWordTag}
        `;
        break;
      default:
        break;
    }

    return contents ?
      html`
        <div title=${this.word} style=${borderStyles.cssText} class="word-tag-variant-wrapper">
          ${contents}
        </div>
      ` :
      html`${nothing}`
      ;
  }

  override render() {
    return this.hrefUrl === "" ?
      this.layoutForVariant(this.variant) :
      html`<a title=${this.word} href=${this.hrefUrl} target="_blank" rel="noopener noreferrer">${this.layoutForVariant(this.variant)}</a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-tag": WordTag;
  }
}