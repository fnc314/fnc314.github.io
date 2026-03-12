import { typescaleStyles } from "@/styles";
import { css, html, LitElement, nothing, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";

export type WordCloudWord = {
  word: string;
  weight: number;
  category: WordCloudWordCategory;
  extras: string[];
};

export type WordCloudWordCategory = "tech" | "practice";

export const makeWordCloudWord = (
  word: string,
  weight: number,
  category: WordCloudWordCategory,
  extras: string[] = []
): WordCloudWord => ({ word, weight, category, extras });

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

        div {
          background-color: var(--md-sys-color-surface);
          color: var(--md-sys-color-on-surface);
        }
      }

      .cloud-container {
        outline: 1px solid red;
        min-height: 100%;
        position: relative;
        /* display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(25ch, 100%), 1fr)); */

        & span:nth-child(n) {
          transform: rotate(45deg);
        }

        & span:nth-child(2n) {
          transform: rotate(-45deg);
        }

        & span:nth-child(3n) {
          transform: rotate(50deg);
        }

        & span:nth-child(4n) {
          transform: rotate(-20deg);
        }

        & span:nth-child(5n) {
          transform: rotate(90deg);
        }

        & span:nth-child(6n) {
          transform: rotate(-30deg);
        }

        & span:nth-child(7n) {
          transform: rotate(20deg);
        }

        .tech, .practice {
          -webkit-text-stroke: 0.1px black;
          /* font-size: calc(6cqi / ((var(--weight)) + 1 + 2cqb)); */
          font-size: var(--md-sys-typescale-body-large-size) * var(--weight);
          color: var(--color);
          /* line-height: calc(calc(6cqi / ((var(--weight)) + 1 + 2cqb)) * 1.2); */
        }
      }
    `
  ];

  // #materialColorVars: string[] = [
  //   "primary",
  //   "surface-tint",
  //   "primary-container",
  //   "on-primary-container",
  //   "secondary",
  //   "secondary-container",
  //   "on-secondary-container",
  //   "tertiary",
  //   "tertiary-container",
  //   "on-tertiary-container",
  //   "error",
  //   "error-container",
  //   "on-error-container",
  //   "on-background",
  //   "on-surface",
  //   "surface-variant",
  //   "on-surface-variant",
  //   "outline",
  //   "outline-variant",
  //   "inverse-surface",
  //   "inverse-primary",
  //   // "primary-fixed",
  //   "on-primary-fixed",
  //   "primary-fixed-dim",
  //   "on-primary-fixed-variant",
  //   // "secondary-fixed",
  //   "on-secondary-fixed",
  //   "secondary-fixed-dim",
  //   "on-secondary-fixed-variant",
  //   "tertiary-fixed",
  //   "on-tertiary-fixed",
  //   "tertiary-fixed-dim",
  //   "on-tertiary-fixed-variant",
  // ].map((color) => `--color: var(--md-sys-color-${color})`);

  // #colorList: CSSResult[] = [
  //   "primary",
  //   "surface-tint",
  //   "primary-container",
  //   "on-primary-container",
  //   "secondary",
  //   "secondary-container",
  //   "on-secondary-container",
  //   "tertiary",
  //   "tertiary-container",
  //   "on-tertiary-container",
  //   "error",
  //   "error-container",
  //   "on-error-container",
  //   "on-background",
  //   "on-surface",
  //   "surface-variant",
  //   "on-surface-variant",
  //   "outline",
  //   "outline-variant",
  //   "inverse-surface",
  //   "inverse-primary",
  //   "primary-fixed",
  //   "on-primary-fixed",
  //   "primary-fixed-dim",
  //   "on-primary-fixed-variant",
  //   "secondary-fixed",
  //   "on-secondary-fixed",
  //   "secondary-fixed-dim",
  //   "on-secondary-fixed-variant",
  //   "tertiary-fixed",
  //   "on-tertiary-fixed",
  //   "tertiary-fixed-dim",
  //   "on-tertiary-fixed-variant",
  // ]
  //   .map((color) => unsafeCSS(`var(--md-sys-color-${color})`))
  //   .map((_color, index) =>  css`
  //     .cloud-container span:nth-child(${index}) {
  //       color: ${_color} !important;
  //       -webkit-text-stroke: 1px black;
  //     }
  //   `);

  @property({ type: Array })
  words: WordCloudWord[] = [];


  protected override async firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    // this.#cloudList.map(([word, weight, category]: [string, number, string], index: number) => {
    //   const span = document.createElement("span");
    //   span.innerText = word;
    //   span.classList.add(category);
    //   span.setAttribute("style", `--weight: ${weight/10}; ${this.#materialColorVars.at(Math.floor(Math.random() * this.#materialColorVars.length)) ?? ""}`);
    //   span.style.marginBlockStart = `-${(weight * Math.random() * Math.random() * Math.random())}rem`;
    //   span.style.writingMode = (Math.random() > 0.8 && weight > 3) ? "vertical-rl" : "horizontal-tb";
    //   return span;
    // }).forEach((span, index) => this.#cloudContainer.value?.appendChild(span))
    // if (this.#cloudContainer.value && this.#cloudSection.value /* && this.#cloudCanvas.value */) {
    //   const sectionRect = this.#cloudSection.value.getClientRects()[0];
    //   const containerRect = this.#cloudContainer.value.getClientRects()[0];

    //   const x = (containerRect.right - containerRect.left) / 2;
    //   const y = containerRect.height > 0 ? (containerRect.bottom - containerRect.top) / 2 : (sectionRect.bottom - sectionRect.top) / 2;

    //   const config: WordCloud.Options = {
    //     list: this.#cloudList,
    //     fontFamily: "Roboto",
    //     backgroundColor: "transparent",
    //     weightFactor: (weight: number) => 2 * weight,
    //     minRotation: -Math.PI,
    //     maxRotation: Math.PI,
    //     rotateRatio: 0.5,
    //     shuffle: true,
    //     shrinkToFit: true,
    //     drawOutOfBound: true,
    //     // origin: [sectionRect.width / 2, sectionRect.height * 2],
    //     classes: (word: string, weight: string | number, fontSize: number, extraData: string | number) =>
    //       `word-${word} weight-${weight} fontSize-${fontSize} ${extraData}`,
    //     // color: (word: string, weight: string | number, fontSize: number, distance: number, theta: number) => "random-light",

    //     // shape: "circle",
    //     shape: (theta: number) => {
    //       console.info(`THETA ${theta}`);
    //       return 1 - (Math.cos(theta / 2) ** 2);
    //     }
    //   };

    //   console.info(JSON.stringify({ config, sectionRect, containerRect }, null, 2));


    //   WordCloud(
    //     this.#cloudContainer.value,
    //     config
    //   );
    //   this.#colorList
    //     .map((css) => css.styleSheet)
    //     .filter((css) => css !== undefined)
    //     .forEach((css) => this.shadowRoot?.adoptedStyleSheets.push(css))
    // }
  }

  override render() {
    return html`
      <dl>
      ${
        this.words
          .sort((word1, word2) => word1.weight > word2.weight ? -1 : (word1.weight === word2.weight ? 0 : 1))
          .map((word) => html`
            <div>
              <dt>${word.word}</dt>
              <dd>weight: ${word.weight}</dd>
              <dd>category: ${word.category}</dd>
              ${
                word.extras.length > 0 ?
                  html`
                    <dd>extras: ${word.extras.join(", ")}</dd>
                  ` :
                  nothing
              }
            </div>
          `)
      }
      </dl>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-cloud": WordCloud;
  }
}