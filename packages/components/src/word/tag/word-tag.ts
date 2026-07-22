import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { WordTagStyles } from "@/lib/word/tag/word-tag.styles";
import {
    type WordTagHeaviness,
    type WordTagVariant,
    WordTagVariantAttributeConverter,
    WordTagVariants,
} from "@/lib/word/tag/word-tag.types";
import { type CSSResult, type TemplateResult, css, html, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

/**
 * @summary Displays a word in a simple padded box in which the text color and border are synchronised
 *
 * @property [word=""] - The tagged word
 * @property [heaviness="normal"] - The weight of the tag (text & border), can be
 *  `"normal"` (`--md-ref-typeface-weight-regular` & `--sizes-thickness-hairline`) or
 *  `"heavy"` (`--md-ref-typeface-weight-bold` & `2.5 * --sizes-thickness-hairline`)
 * @property [variant="text-only"] - The version of the layout to render
 * @property [hrefUrl=""] - A URL which, when provided, wraps this {@link WordTag} in a
 *  {@link HTMLAnchorElement}
 * @property [urlObject={text=this.word,url=this.hrefUrl}] - An object configuring a `url`
 *  and link text
 *
 * @cssprop [--word-tag-color="--md-sys-color-on-primary-container"] - The text and border color
 * @cssprop [--word-tag-background-color="--md-sys-color-primary-container"] - The background color
 * @cssprop [--word-tag-font-family="--md-ref-typeface-brand"] - The font family
 * @cssprop [--word-tag-font-size="--md-typescale-body-large-font-size"] - The font size
 * @cssprop [--word-tag-font-weight="--md-ref-typeface-weight-regular"] - The font weight
 * @cssprop [--word-tag-line-height="--md-typescale-body-large-lingt-height"] - The line height
 * @cssprop [--word-tag-border-radius="--md-sys-shape-corner-small"] - The corner radius (for all corners)
 * @cssprop [--word-tag-gap="--spaces-gap-xs"] - The `gap` between `word` and any `slot`-ed icon
 *
 * @slot [icon] - The optional space available for, and positioned by, the {@link variant} property
 * @slot [popover] - The `popover` content
 *
 * @class WordTag
 * @extends {UIAwareElement}
 */
@customElement("word-tag")
export class WordTag extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, WordTagStyles];

  @property({ type: String })
  word = "";

  @property()
  heaviness: WordTagHeaviness = "normal";

  @property({ type: String })
  hrefUrl = "";

  @property({ type: Object })
  urlObject: { text: string, url: string } = { text: this.word, url: this.hrefUrl }

  @property({ attribute: false })
  popoverContent: string | string[] = "";

  /** {@link WordTagVariantAttributeConverter} */
  @property({
    attribute: "variant",
    type: String,
    converter: WordTagVariantAttributeConverter,
    reflect: true,
    useDefault: true,
  })
  variant: WordTagVariant = "text-only";

  private layoutForVariant(variant: WordTagVariant): TemplateResult {
    const fontWeight = this.heaviness === "normal" ? css`var(--md-ref-typeface-weight-regular)` : css`var(--md-ref-typeface-weight-bold)`;
    const fontStyles: CSSResult = unsafeCSS(`
      font-weight: ${fontWeight};
    `);

    const borderWidth = this.heaviness === "normal" ? css`var(--sizes-thickness-hairline)` : css`var(--sizes-thickness-s)`;
    const borderStyles: CSSResult = unsafeCSS(`
      border-width: ${borderWidth};
    `);

    const defaultWordTag = html`
      <span style=${fontStyles.cssText}>${this.word}</span>
    `;

    let contents: TemplateResult | undefined = undefined;
    switch (variant) {
      case WordTagVariants["text-icon"]:
        contents = html`
          ${defaultWordTag}
          <slot name="icon"></slot>
        `;
        break;
      case WordTagVariants["icon-text"]:
        contents = html`
          <slot name="icon"></slot>
          ${defaultWordTag}
        `;
        break;
      case WordTagVariants["icon-only"]:
        contents = html`
          <slot name="icon"></slot>
        `;
        break;
      case WordTagVariants["text-only"]:
        contents = html`
          ${defaultWordTag}
        `;
        break;
      default:
        break;
    }

    return when(
      contents,
      () => when(
        this.hrefUrl,
        () => html`
          <button
            style=${borderStyles.cssText}
            popovertarget=${this.word}
            >
            ${contents}
          </button>
        `,
        () => html`
          <div
            style=${borderStyles.cssText}
            >
            ${contents}
          </div>
        `
      ),
      () => html`${nothing}`
    );
  }

  override render() {
    const tag = this.layoutForVariant(this.variant);

    return html`
      <word-popover
        popover
        id=${this.word}
        .word="${this.word}"
        .footerURL=${this.urlObject}
        >
        <slot name="header-icon" slot="header-icon"></slot>
        <slot name="popover-content" slot="popover-content"></slot>
      </word-popover>
      ${tag}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-tag": WordTag;
  }
}
