import { CodeRepoStyles } from "@/lib/code/repo/code-repo.styles";
import "@/lib/code/reveal/code-reveal";
import { CodeReveal } from "@/lib/code/reveal/code-reveal";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { WordTag } from "@/lib/word/tag/word-tag";
import { BreakpointLabels, type CodeRepoData, type CodeRepoTech } from "@fnc314/packages.types";
import "iconify-icon";
import { type TemplateResult, html, nothing } from "lit";
import { customElement, property, query, queryAll, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

export { type CodeRepoData } from "@fnc314/packages.types";

/**
 * An instance of a given `GitHub` repository project documented through
 *   {@link @fnc314/packages.types!CodeRepoData} objects from `data/code.json`
 *
 * @property {CodeRepoData} codeRepo - An instance of {@link @fnc314/packages.types!CodeRepoData}
 *   to render
 *
 * @class CodeRepo
 * @extends {UIAwareElement}
 */
@customElement("code-repo")
export class CodeRepo extends UIAwareElement {
  /** {@link @fnc314/packages.types!CodeRepoData} */
  @property({ type: Object })
  codeRepo: CodeRepoData = {} as CodeRepoData;

  /** The index of the technology tag currently expanded in the reveal panel. */
  @state()
  private activeRevealIndex: number | null = null;

  /** The index of the technology tag waiting to expand after the current panel closes. */
  @state()
  private pendingRevealIndex: number | null = null;

  /** True if the reveal panel is currently playing its closing animation. */
  @state()
  private isClosing: boolean = false;

  @query("code-reveal")
  private codeRevealComp!: CodeReveal;

  @queryAll("word-tag")
  /* eslint-disable-next-line no-undef */
  private wordTags!: NodeListOf<WordTag>;

  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, CodeRepoStyles];

  private _toggleReveal(tech: CodeRepoTech, wordIndex: number) {
    if (tech.url) {
      if (this.activeRevealIndex === wordIndex) {
        this.isClosing = true;
        this.codeRevealComp?.triggerClose();
      } else {
        if (this.activeRevealIndex !== null) {
          this.pendingRevealIndex = wordIndex;
          this.isClosing = true;
          this.codeRevealComp?.triggerClose();
        } else {
          this.isClosing = false;
          this.activeRevealIndex = wordIndex;
        }
      }
    }
  }

  private async _restoreFocus(index: number) {
    if (index === null || !this.codeRepo.tech[index]) return;
    const tech = this.codeRepo.tech[index];
    const techWord = tech.name.replaceAll(" ", "-").toLowerCase();
    const tagId: string = `${techWord}-word-tag-${index}`;
    await this.updateComplete;
    const tagToFocus = this.shadowRoot?.querySelector(`#${tagId}`) as WordTag;
    if (tagToFocus) {
      tagToFocus.focus();
    }
  }

  private _handleGridKeyDown(e: KeyboardEvent) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

    const tags = Array.from(this.wordTags || []);
    if (!tags.length) return;

    const activeElement = this.shadowRoot?.activeElement;
    if (!activeElement || activeElement.tagName.toLowerCase() !== "word-tag") return;

    const currentIndex = tags.indexOf(activeElement as WordTag);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    if (e.key === "ArrowLeft") {
      nextIndex = currentIndex === 0 ? tags.length - 1 : currentIndex - 1;
    } else if (e.key === "ArrowRight") {
      nextIndex = currentIndex === tags.length - 1 ? 0 : currentIndex + 1;
    }

    if (nextIndex !== currentIndex) {
      e.preventDefault();
      (tags[nextIndex] as WordTag).focus();
    }
  }

  private createWordTagLI(tech: CodeRepoTech, wordIndex: number): TemplateResult {
    const techWord = tech.name.replaceAll(" ", "-").toLowerCase();
    const tagId: string = `${techWord}-word-tag-${wordIndex}`;
    const imgTemplate = this.getActiveIcon(tech.designToken);

    const variant = this.touchScreen || this.breakpoint === BreakpointLabels.mobile ? "icon-text" : "icon-only";

    return html`
      <li .ariaLabel=${tech.name}>
        <word-tag
          id=${tagId}
          .hrefUrl=${tech.url}
          .word=${tech.name}
          .variant=${variant}
          .ariaExpanded=${this.activeRevealIndex === wordIndex ? "true" : "false"}
          aria-controls="reveal-panel"
          @click=${() => this._toggleReveal(tech, wordIndex)}
        >
          <span slot="icon">${imgTemplate}</span>
        </word-tag>
      </li>
    `;
  }

  override render() {
    const activeTech = this.activeRevealIndex !== null ? this.codeRepo.tech[this.activeRevealIndex] : null;
    const activeToken = activeTech ? this.getActiveIcon(activeTech.designToken) : html`${nothing}`;
    const isFolded = this.activeRevealIndex !== null && !this.isClosing;
    const classes = {
      "dynamic-border-host": true,
      "is-folded": isFolded,
    };
    return html`
      <article
        class=${classMap(classes)}
        aria-labelledby="repo-name"
      >
        <!-- TOP FOLD SECTION: Header & Synopsis -->
        <div class="fold-top">
          <header aria-labelledby="repo-name">
            <h3 id="repo-name" class="md-typescale-headline-small">${this.codeRepo.name}</h3>
            <a
              href=${this.codeRepo.url}
              target="_blank"
              rel="noopener noreferrer"
              title=${this.codeRepo.repo}
            >
              <iconify-icon
                width="none"
                height="none"
                icon="simple-icons:github"
                aria-hidden="true"
                style="
                  width: var(--md-icon-size);
                  height: var(--md-icon-size);
                "
                ></iconify-icon>
              <span>
                ${this.codeRepo.repo}
              </span>
            </a>
          </header>

          <md-divider inset></md-divider>

          <section
            class="synopsis"
            .ariaLabel=${`Synopsys for ${this.codeRepo.name}`}
          >
            <p class="md-typescale-body-large">${unsafeHTML(this.codeRepo.description)}</p>
          </section>
        </div>

        <!-- 3D FOLDING REVEAL PANEL -->
        <code-reveal
          id="reveal-panel"
          .tech=${activeTech}
          @start-hide-reveal=${() => {
            this.isClosing = true;
          }}
          @hide-reveal=${() => {
            const indexToRestore = this.activeRevealIndex;
            if (this.pendingRevealIndex !== null) {
              this.activeRevealIndex = this.pendingRevealIndex;
              this.pendingRevealIndex = null;
              this.isClosing = false;
            } else {
              this.activeRevealIndex = null;
              this.isClosing = false;
              if (indexToRestore !== null) {
                this._restoreFocus(indexToRestore);
              }
            }
          }}
        >
          ${unsafeSVG(activeToken.strings.join().replace("<svg", `<svg slot="header-icon"`))}
        </code-reveal>

        <!-- BOTTOM FOLD SECTION: Technology Tags Footer -->
        <div class="fold-bottom">
          <footer aria-label="Technologies used">
            <ul @keydown=${this._handleGridKeyDown}>
              ${this.codeRepo.tech.map((tech, index) => this.createWordTagLI(tech, index))}
            </ul>
          </footer>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-repo": CodeRepo;
  }
}
