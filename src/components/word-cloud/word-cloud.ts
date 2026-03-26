import { MaterialTypescaleStyles } from "@/styles/material-styles";
import {
  type RenderableWordCloudWord,
  type WordCloudAppearance,
  WordCloudAppearances,
  type WordCloudGrouping,
  WordCloudGroupings,
  type WordCloudSorting,
  WordCloudSortings,
  type WordCloudWord,
} from "@/types/components/word-cloud/word-cloud";
import { LitElement, PropertyValues, css, html } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { customElement, property, query, state } from "lit/decorators.js";

/**
 * A component that renders a cloud of words with various sorting and grouping options.
 *
 * @element word-cloud
 *
 * @cssprop [--word-cloud-animation=150ms] - Duration of the entrance animation for each word.
 * @cssprop [--word-cloud-animation-reduced=1ms] - Duration of the entrance animation when prefers-reduced-motion is active.
 * @cssprop [--word-cloud-first-quartile-font-size=1.75rem] - Font size for words in the first weight quartile (highest weight).
 * @cssprop [--word-cloud-first-quartile-line-height=1.75rem] - Line height for words in the first weight quartile.
 * @cssprop [--word-cloud-second-quartile-font-size=1.5rem] - Font size for words in the second weight quartile.
 * @cssprop [--word-cloud-second-quartile-line-height=1.5rem] - Line height for words in the second weight quartile.
 * @cssprop [--word-cloud-third-quartile-font-size=1.25rem] - Font size for words in the third weight quartile.
 * @cssprop [--word-cloud-third-quartile-line-height=1.25rem] - Line height for words in the third weight quartile.
 * @cssprop [--word-cloud-fourth-quartile-font-size=1rem] - Font size for words in the fourth weight quartile (lowest weight).
 * @cssprop [--word-cloud-fourth-quartile-line-height=1rem] - Line height for words in the fourth weight quartile.
 */
@customElement("word-cloud")
export class WordCloud extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;

        --word-cloud-animation: 150ms;
        --word-cloud-animation-reduced: 1ms;
        --word-cloud-first-quartile-font-size: 1.75rem;
        --word-cloud-first-quartile-line-height: 1.75rem;
        --word-cloud-second-quartile-font-size: 1.5rem;
        --word-cloud-second-quartile-line-height: 1.5rem;
        --word-cloud-third-quartile-font-size: 1.25rem;
        --word-cloud-third-quartile-line-height: 1.25rem;
        --word-cloud-fourth-quartile-font-size: 1rem;
        --word-cloud-fourth-quartile-line-height: 1rem;
      }

      ul {
        flex: 1;
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
        border-width: var(--hairline-width);
        border-style: solid;
        font-family: var(--md-ref-typeface-brand);
        padding: 0.3rem 0.7rem;
        min-width: 0;

        /* Animation Base State */
        opacity: 0;
        transform: scale(0.8) translateY(10px);
        transition:
          opacity var(--word-cloud-animation) ease-out,
          transform var(--word-cloud-animation) cubic-bezier(0.34, 1.56, 0.64, 1);
        will-change: opacity, transform;
      }

      @media (prefers-reduced-motion: reduce) {
        li {
          transition: all var(--word-cloud-animation-reduced) ease-in-out;
        }
      }

      /* Animation Active State (base styles, transforms applied inline) */
      ul.visible li {
        opacity: 1;
        transform: scale(1) translateY(0);
      }

      ul.instant-clear:not(.visible) li {
        transition: none;
      }

      .first-quartile {
        font-size: var(--word-cloud-first-quartile-font-size);
        line-height: var(--word-cloud-first-quartile-line-height);

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
        font-size: var(--word-cloud-second-quartile-font-size);
        line-height: var(--word-cloud-second-quartile-line-height);

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
        font-size: var(--word-cloud-third-quartile-font-size);
        line-height: var(--word-cloud-third-quartile-line-height);

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
        font-size: var(--word-cloud-fourth-quartile-font-size);
        line-height: var(--word-cloud-fourth-quartile-line-height);

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

  /**
   * The list of words to display in the cloud.
   * @attr words
   */
  @property({ type: Array, attribute: "words", hasChanged: () => true })
  words: WordCloudWord[] = [];

  /**
   * Whether to clear the word cloud instantly when it is no longer visible.
   * When true, the cloud resets instantly to opacity 0 instead of fading out.
   * @attr instant-clear
   */
  @property({ type: Boolean, attribute: "instant-clear" })
  instantClear = false;

  /**
   * Controls the order in which words are animated/displayed.
   *
   * Can be 'sequential' (words appear one by one) or 'simultaneous' (words appear all at once).
   * @attr appearance
   */
  @property({ attribute: "appearance" })
  appearance: WordCloudAppearance = WordCloudAppearances.SEQUENTIAL;

  /**
   * Controls how words are grouped together within the cloud.
   *
   * Supported modes: 'category', 'quartile', or 'ungrouped'.
   * @attr grouping
   */
  @property({ attribute: "grouping" })
  grouping: WordCloudGrouping = WordCloudGroupings.UNGROUPED;

  /**
   * Controls how words are sorted within their groupings.
   *
   * Supported modes: 'by-weight', 'by-weight-reversed', 'by-alphabet', 'by-alphabet-reversed', or 'none'.
   * @attr sorting
   */
  @property({ attribute: "sorting" })
  sorting: WordCloudSorting = WordCloudSortings.NONE;

  /**
   * The delay in milliseconds between word appearances when using sequential mode.
   *
   * Set to "none" to use the component's internal default delays.
   * @attr delay
   */
  @property()
  delay: number | "none" = "none";

  /**
   * The intersection observer threshold for visibility detection.
   *
   * A value between 0 and 1 indicating what percentage of the element must be visible to trigger animation.
   * @attr threshold
   */
  @property({ type: Number })
  threshold = 0.1;

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
    this._sortedWords = this._processWords();
  }

  override updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);
    if (changedProperties.has("threshold")) {
      this._initIntersectionObserver();
    }
  }

  private _initIntersectionObserver() {
    this._intersectionObserver?.disconnect();
    this._intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!this._isVisible) {
              // Shuffle arrangement on re-entry if unsorted
              this._sortedWords = this._processWords();
              this._isVisible = true;
            }
          } else {
            this._isVisible = false;
          }
        });
      },
      { threshold: this.threshold },
    );

    if (this._listElement) {
      this._intersectionObserver.observe(this._listElement);
    }
  }

  override firstUpdated() {
    this._initIntersectionObserver();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._intersectionObserver?.disconnect();
  }

  private _processWords(): RenderableWordCloudWord[] {
    // 1. Layout: Always Randomize
    const randomized: RenderableWordCloudWord[] = this.words.map((w) => ({ ...w })).sort(() => Math.random() - 0.5);

    // 2. Determine groups
    let groups: RenderableWordCloudWord[][];

    switch (this.grouping) {
      case WordCloudGroupings.CATEGORY: {
        const catMap = new Map<string, RenderableWordCloudWord[]>();
        randomized.forEach((w) => {
          if (!catMap.has(w.category)) catMap.set(w.category, []);
          catMap.get(w.category)!.push(w);
        });
        // Sort keys to ensure stable group order
        const catKeys = Array.from(catMap.keys()).sort();
        groups = catKeys.map((k) => catMap.get(k)!);
        break;
      }

      case WordCloudGroupings.QUARTILE: {
        // Fixed order: 1st, 2nd, 3rd, 4th
        const q1 = randomized.filter((w) => w.quartile === "first-quartile");
        const q2 = randomized.filter((w) => w.quartile === "second-quartile");
        const q3 = randomized.filter((w) => w.quartile === "third-quartile");
        const q4 = randomized.filter((w) => w.quartile === "fourth-quartile");
        groups = [q1, q2, q3, q4];
        break;
      }

      case WordCloudGroupings.UNGROUPED:
      default:
        groups = [randomized];
        break;
    }

    // 3. Sort within groups
    const sortFn = this._getSortFunction(this.sorting);
    if (sortFn) {
      groups.forEach((group) => group.sort(sortFn));
    }

    // 4. Calculate delays
    let currentDelay = 0;
    const delayVal = this.delay === "none" ? undefined : Number(this.delay);
    const GROUP_DELAY_OFFSET = delayVal ?? 200; // Delay between groups if simultaneous
    const ITEM_DELAY_OFFSET = delayVal ?? 50; // Delay between items if sequential

    groups.forEach((group) => {
      // If group is empty, skip
      if (group.length === 0) return;

      group.forEach((word) => {
        word.delay = currentDelay;
        if (this.appearance === WordCloudAppearances.SEQUENTIAL) {
          currentDelay += ITEM_DELAY_OFFSET;
        }
      });

      // After a group is processed:
      if (this.appearance === WordCloudAppearances.SIMULTANEOUS) {
        // All items in this group appeared at currentDelay.
        // Bump delay for the next group.
        currentDelay += GROUP_DELAY_OFFSET;
      } else {
        // SEQUENTIAL: currentDelay is already at the end of this group's items.
        // No extra bump needed usually, or maybe a small one?
        // Let's just let it flow naturally.
      }
    });

    return randomized;
  }

  private _getSortFunction(
    sorting: WordCloudSorting,
  ): ((a: RenderableWordCloudWord, b: RenderableWordCloudWord) => number) | undefined {
    switch (sorting) {
      case WordCloudSortings.BY_WEIGHT:
        return (a, b) => (a.weight as number) - (b.weight as number);
      case WordCloudSortings.BY_WEIGHT_REVERSED:
        return (a, b) => (b.weight as number) - (a.weight as number);
      case WordCloudSortings.BY_ALPHABET:
        return (a, b) => a.word.localeCompare(b.word);
      case WordCloudSortings.BY_ALPHABET_REVERSED:
        return (a, b) => b.word.localeCompare(a.word);
      case WordCloudSortings.NONE:
      default:
        return undefined;
    }
  }

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

          const styles = {
            transitionDelay: `${word.delay}ms`,
          };

          return html`
            <li
              class=${classMap(classes)}
              style=${styleMap(styles)}
            >
              ${word.word}
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
