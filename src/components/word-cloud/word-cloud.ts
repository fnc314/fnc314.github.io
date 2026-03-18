import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { RenderableWordCloudWord, WeightQuartile, WordCloudAnimationStrategies, WordCloudAnimationStrategy, WordCloudRotationStrategies, WordCloudRotationStrategy, WordCloudWord } from "@/types/components/word-cloud/word-cloud";
import { css, html, LitElement } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { customElement, property, query, state } from "lit/decorators.js";

@customElement("word-cloud")
export class WordCloud2 extends LitElement {
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
      }

      li {
        border-radius: var(--md-sys-shape-corner-small);
        border-color: currentColor;
        border-width: 1px;
        border-style: solid;
        font-family: var(--md-ref-typeface-brand);
        padding: 0.3rem 0.7rem;
        min-width: 0;

        /* Animation Base State */
        opacity: 0;
        transform: scale(0.8) translateY(10px);
        transition:
          opacity 0.1s ease-out,
          transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
        will-change: opacity, transform;
      }

      @media (prefers-reduced-motion: reduce) {
        li {
          transition: all 0.001s ease-in-out;
        }
      }

      /* Animation Active State (base styles, transforms applied inline) */
      ul.visible li {
        opacity: 1;
      }

      ul.instant-clear:not(.visible) li {
        transition: none;
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

  /**
   * When set, the word cloud will not fade out when scrolling off-screen,
   * but will instead instantly reset to opacity 0.
   */
  @property({ type: Boolean, attribute: "instant-clear" })
  instantClear = false;

  /** Controls the order in which words are animated/displayed. */
  @property({ attribute: "animation-strategy" })
  animationStrategy: WordCloudAnimationStrategy = WordCloudAnimationStrategies.SEQUENTIAL;

  /** Controls the rotation of the displayed words. */
  @property({ attribute: "rotation-strategy" })
  rotationStrategy: WordCloudRotationStrategy = WordCloudRotationStrategies.BRICK;

  @state({
    hasChanged: () => true,
  })
  _sortedWords: RenderableWordCloudWord[] = [];

  @state()
  private _isVisible = false;

  @query("ul")
  private _listElement!: HTMLUListElement;

  private _intersectionObserver?: IntersectionObserver;

  override connectedCallback(): void {
    super.connectedCallback();
    this._processWords();
  }

  override firstUpdated() {
    this._intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!this._isVisible) {
              // Shuffle arrangement on re-entry
              this._processWords();
              this._isVisible = true;
            }
          } else {
            this._isVisible = false;
          }
        });
      },
      { threshold: 0.1 },
    );

    if (this._listElement) {
      this._intersectionObserver.observe(this._listElement);
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._intersectionObserver?.disconnect();
  }

  private _processWords() {
    // 1. Layout: Always Randomize
    const processed: RenderableWordCloudWord[] = this.words
      .map((w) => ({ ...w }))
      .sort(() => Math.random() - 0.5);

    // 2. Animation: Determine Sequence (Delay)
    const animationOrder: RenderableWordCloudWord[] = [...processed];

    switch (this.animationStrategy) {
      case WordCloudAnimationStrategies.SEQUENTIAL:
        // Use random order (as layout)
        break;

      case WordCloudAnimationStrategies.BY_QUARTILE:
        // Randomized first, then stable sort by quartile
        animationOrder.sort(this._sortByQuartileAscending);
        break;

      case WordCloudAnimationStrategies.BY_QUARTILE_REVERSED:
        // Randomized first, then stable sort by quartile reversed
        animationOrder.sort(this._sortByQuartileDescending);
        break;

      case WordCloudAnimationStrategies.BY_QUARTILE_SORTED:
        // Deterministic sort: Quartile Ascending -> Word Alphabetical
        animationOrder.sort((a, b) => {
          const quartileDiff =
            this._getQuartileRank(a.quartile) -
            this._getQuartileRank(b.quartile);
          if (quartileDiff !== 0) return quartileDiff;
          return a.word.localeCompare(b.word);
        });
        break;

      case WordCloudAnimationStrategies.BY_CATEGORY:
        // Deterministic sort: Category Alphabetical -> Weight Descending
        animationOrder.sort((a, b) => {
          const catDiff = a.category.localeCompare(b.category);
          if (catDiff !== 0) return catDiff;
          // Weight is number | Weights. Assume number comparison.
          return (b.weight as number) - (a.weight as number);
        });
        break;
    }

    // Assign delays based on animation order
    animationOrder.forEach((w, i) => {
      w.delay = i * 50;
    });

    // 3. Apply Rotation if needed
    switch (this.rotationStrategy) {
      case WordCloudRotationStrategies.ROTATED:
        processed.forEach((w) => {
          w.rotation = Math.floor(Math.random() * 60) - 30; // -30 to 30 degrees
        });
        break;
      case WordCloudRotationStrategies.ROTATION_WEIGHTED:
        processed.forEach((w) => {
          const x = ((w.weight as number) / 10) * 45;
          let rotation: number;

          if (x > 45) {
            rotation = 45 - (x - 45);
          } else if (x < 45) {
            rotation = x;
          } else {
            // x === 45: flip a coin
            rotation = Math.random() > 0.5 ? x : 45 - (x - 45);
          }
          w.rotation = Math.random() > 0.5 ? rotation : -rotation;
        });
        break;
      default:
        processed.forEach((w) => {
          w.rotation = 0;
        });
    }

    this._sortedWords = processed;
  }

  private _getQuartileRank(q: WeightQuartile): number {
    switch (q) {
      case "fourth-quartile": return 0;
      case "third-quartile": return 1;
      case "second-quartile": return 2;
      case "first-quartile": return 3;
    }
    return 0;
  }

  private _sortByQuartileAscending = (a: WordCloudWord, b: WordCloudWord) =>
    this._getQuartileRank(a.quartile) - this._getQuartileRank(b.quartile);

  private _sortByQuartileDescending = (a: WordCloudWord, b: WordCloudWord) =>
    this._getQuartileRank(b.quartile) - this._getQuartileRank(a.quartile);

  override render() {
    const ulClasses = {
      visible: this._isVisible,
      "instant-clear": this.instantClear,
    };

    return html`
      <ul class=${classMap(ulClasses)}>
        ${this._sortedWords.map((word) => {
          const classes = {
            tech: word.category === "tech",
            practice: word.category === "practice",
            product: word.category === "product",
            "first-quartile": word.quartile === "first-quartile",
            "second-quartile": word.quartile === "second-quartile",
            "third-quartile": word.quartile === "third-quartile",
            "fourth-quartile": word.quartile === "fourth-quartile",
          };

          const rotation = word.rotation || 0;

          const styles = {
            transitionDelay: `${word.delay}ms`,
            // Apply rotation to both states, but change scale/translate for entrance effect
            transform: this._isVisible
              ? `scale(1) translateY(0) rotate(${rotation}deg)`
              : `scale(0.8) translateY(10px) rotate(${rotation}deg)`,
            // Explicitly set opacity for styleMap control if needed, though CSS handles 0->1
            opacity: this._isVisible ? "1" : "0",
          };

          return html`
            <li class=${classMap(classes)} style=${styleMap(styles)}>
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
    "word-cloud": WordCloud2;
  }
}