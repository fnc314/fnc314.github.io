import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { css, html, LitElement } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property, state } from "lit/decorators.js";

export type WordCloudWord = {
  word: string;
  weight: number | Weights;
  quartile: WeightQuartile;
  category: WordCloudWordCategory;
  extras: string[];
};

export type WordCloudWordCategory = "tech" | "practice" | "product";

type WeightQuartile = `${"first" | "second" | "third" | "fourth"}-quartile`;

type Weights = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const makeWordCloudWord = (
  word: string,
  weight: number | Weights,
  category: WordCloudWordCategory,
  extras: string[] = [],
): WordCloudWord => ({
  word,
  weight,
  quartile: (() => {
    switch (true) {
      case weight > 8:
        return "first-quartile";

      case 6 < weight && weight <= 8:
        return "second-quartile";

      case 3 < weight && weight <= 6:
        return "third-quartile";

      case weight < 3:
        return "fourth-quartile";

      default:
        return "fourth-quartile";
    }
  })(),
  category,
  extras,
});

@customElement("word-cloud")
export class WordCloud extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: contents;
        container-type: size;
      }

      ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: center;
        justify-content: space-evenly;
        margin: unset;
        padding: unset;

        li {
          border-radius: var(--md-sys-shape-corner-large);
          border-color: currentColor;
          border-width: 1px;
          border-style: solid;
          font-family: var(--md-type-ref-plain);
          padding: 0.3rem 0.7rem;
          font-weight: unset;
        }
      }

      .first-quartile {
        font-size: 1.75rem;
        line-height: 1.75rem;

        &.tech {
          background-color: var(--md-sys-color-primary-container);
          color: var(--md-sys-color-on-primary-container);
        }

        &.practice {
          background-color: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);
        }

        &.product {
          background-color: var(--md-sys-color-primary-fixed);
          color: var(--md-sys-color-on-primary-fixed);
        }
      }

      .second-quartile {
        font-size: 1.5rem;
        line-height: 1.5rem;

        &.tech {
          background-color: var(--md-sys-color-secondary-container);
          color: var(--md-sys-color-on-secondary-container);
        }

        &.practice {
          background-color: var(--md-sys-color-secondary);
          color: var(--md-sys-color-on-secondary);
        }

        &.product {
          background-color: var(--md-sys-color-secondary-fixed);
          color: var(--md-sys-color-on-secondary-fixed);
        }
      }

      .third-quartile {
        font-size: 1.25rem;
        line-height: 1.25rem;

        &.tech {
          background-color: var(--md-sys-color-tertiary-container);
          color: var(--md-sys-color-on-tertiary-container);
        }

        &.practice {
          background-color: var(--md-sys-color-tertiary);
          color: var(--md-sys-color-on-tertiary);
        }

        &.product {
          background-color: var(--md-sys-color-tertiary-fixed);
          color: var(--md-sys-color-on-tertiary-fixed);
        }
      }

      .fourth-quartile {
        font-size: 1rem;
        line-height: 1rem;

        &.tech {
          color: var(--md-sys-color-primary-container);
          background-color: var(--md-sys-color-on-primary-container);
        }

        &.practice {
          color: var(--md-sys-color-primary);
          background-color: var(--md-sys-color-on-primary);
        }

        &.product {
          color: var(--md-sys-color-primary-fixed);
          background-color: var(--md-sys-color-on-primary-fixed);
        }
      }
    `,
  ];

  @property({ type: Array, attribute: "words", hasChanged: () => true })
  words: WordCloudWord[] = [];

  @state({
    hasChanged: () => true,
  })
  _sortedWords: WordCloudWord[] = this.words.toSorted(() => Math.random() - 0.5);

  override connectedCallback(): void {
    super.connectedCallback();
    this._sortedWords = this.words.toSorted(() => Math.random() - 0.5);
  }

  override render() {
    return html`
      <ul>
        ${this._sortedWords
          .map((word) => {
            const classes = {
              tech: word.category === "tech",
              practice: word.category === "practice",
              product: word.category === "product",
              "first-quartile": word.quartile === "first-quartile",
              "second-quartile": word.quartile === "second-quartile",
              "third-quartile": word.quartile === "third-quartile",
              "fourth-quartile": word.quartile === "fourth-quartile",
            };
            return html`
              <li class=${classMap(classes)}>
                ${word.word}
                <!-- <sup>${word.weight}</sup> <sub>${word.category}</sub> -->
              </li>
            `;
          })}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-cloud": WordCloud;
  }
}
