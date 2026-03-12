import { typescaleStyles } from "@/styles";
import { css, html, LitElement, nothing, PropertyValues } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";

export type WordCloudWord = {
  word: string;
  weight: number;
  scaledWeight: number;
  quartile: WeightQuartile;
  category: WordCloudWordCategory;
  extras: string[];
};

export type WordCloudWordCategory = "tech" | "practice";

type WeightQuartile = `${"first" | "second" | "third" | "fourth"}-quartile`;

export const makeWordCloudWord = (
  word: string,
  weight: number,
  category: WordCloudWordCategory,
  extras: string[] = []
): WordCloudWord => ({
  word,
  weight,
  scaledWeight: weight * 10,
  quartile: (
    () => {
      const scaledWeight = weight * 10;
      switch (true) {
        case scaledWeight > 80:
          return "first-quartile";

        case 50 < scaledWeight && scaledWeight <= 80:
          return "second-quartile";

        case 30 < scaledWeight && scaledWeight <= 50:
          return "third-quartile";

        case scaledWeight < 30:
          return "fourth-quartile";

        default:
          return "fourth-quartile";
      }
    }
  )(),
  category,
  extras
});

@customElement("word-cloud")
export class WordCloud extends LitElement {

  static override styles = [
    typescaleStyles,
    css`
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(25ch, 100%), 1fr));
        gap: 0.5rem;
        container-type: size;
      }

      dl {
        display: contents;
      }

      ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: baseline;

        li {
          border-radius: var(--md-sys-shape-corner-large);
          border-color: currentColor;
          border-width: 1px;
          border-style: solid;
          font-family: var(--md-type-ref-plain);
          padding: 0.3rem 0.6rem;
        }
      }

      .first-quartile {
        font-size: 2.1rem;
      }

      .second-quartile {
        font-size: 1.8rem
      }

      .third-quartile {
        font-size: 1.5rem;
      }

      .fourth-quartile {
        font-size: 1.2rem;
      }

      .tech {
        &.first-quartile {
          background-color: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);
        }

        &.second-quartile {
          background-color: var(--md-sys-color-secondary);
          color: var(--md-sys-color-on-secondary);
        }

        &.third-quartile {
          background-color: var(--md-sys-color-tertiary);
          color: var(--md-sys-color-on-tertiary);
        }

        &.fourth-quartile {
          background-color: var(--md-sys-color-surface);
          color: var(--md-sys-color-on-surface);
        }
      }

      .practice {
        &.first-quartile {
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
        }

        &.second-quartile {
          background-color: var(--md-sys-color-secondary-container);
          color: var(--md-sys-color-on-secondary-container);
        }

        &.third-quartile {
          background-color: var(--md-sys-color-tertiary-container);
          color: var(--md-sys-color-on-tertiary-container);
        }

        &.fourth-quartile {
          background-color: var(--md-sys-color-surface-container);
          color: var(--md-sys-color-on-surface-container);
        }
      }
    `
  ];

  @property({ type: Array })
  words: WordCloudWord[] = [];


  protected override async firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
  }

  #ignore(word: WordCloudWord) {
    const dd = html`
    <dd>weight: ${word.weight}</dd>
    <dd>category: ${word.category}</dd>
    ${
      word.extras.length > 0 ?
        html`
          <dd>extras: ${word.extras.join(", ")}</dd>
        ` :
        nothing
    }
    `;
  }

  override render() {
    return html`
      <ul>
      ${
        this.words
          //.sort((word1, word2) => word1.weight > word2.weight ? -1 : (word1.weight === word2.weight ? 0 : 1))
          .sort(() => Math.random() - 0.5)
          .map((word) => {
            const classes = {
              tech: word.category === "tech",
              practice: word.category === "practice",
              "first-quartile md-typescale-display-medium": word.quartile === "first-quartile",
              "second-quartile md-typescale-headline-large": word.quartile === "second-quartile",
              "third-quartile md-typescale-headline-small": word.quartile === "third-quartile",
              "fourth-quartile md-typescale-title-large": word.quartile === "fourth-quartile",
            };
            return html`
              <li class=${classMap(classes)}>${word.word}</li>
            `;
          })
      }
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-cloud": WordCloud;
  }
}