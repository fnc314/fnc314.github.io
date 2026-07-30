import { CodeRepoStyles } from "@/lib/code/repo/code-repo.styles";
import "@/lib/code/reveal/code-reveal"; // Register code-repo-reveal
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { readCSSProperty } from "@fnc314/packages.design-tokens";
import { BreakpointLabels, type CodeRepoData, type CodeRepoTech } from "@fnc314/packages.types";
import { type TemplateResult, html, nothing, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { when } from "lit/directives/when.js";

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

  /** Index of currently active inline reveal, or null if none */
  @state()
  private activeRevealIndex: number | null = null;

  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, CodeRepoStyles];

  private createWordTagLI(tech: CodeRepoTech, wordIndex: number): TemplateResult {
    const techWord = tech.name.replaceAll(" ", "-").toLowerCase();
    const imgSrc = readCSSProperty(this.whichDesignToken(tech.designToken));
    const tagId: string = `${this.whichDesignToken(tech.designToken)}-${techWord}-word-tag`;

    const imgTag = imgSrc ?
      html`
        <img
          loading="lazy"
          role="img"
          aria-describedby="${tagId}"
          src="${imgSrc}"
          alt="${tech.name}"
          slot="icon"
          title="${tech.name}"
        />
      ` :
      nothing;

    const variant =
      imgTag === nothing
        ? "text-only"
        : this.touchScreen || this.breakpoint === BreakpointLabels.mobile
          ? "icon-text"
          : "icon-only";

    return html`
      <li>
        <word-tag
          id="${tagId}"
          .hrefUrl=${tech.url}
          .word=${tech.name}
          .variant=${variant}
          @click=${() => {
            if (tech.url) {
              // Toggle or switch active inline reveal
              this.activeRevealIndex = this.activeRevealIndex === wordIndex ? null : wordIndex;
            }
          }}
        >
          ${imgTag}
        </word-tag>
      </li>
    `;
  }

  private createRevealPanel(tech: CodeRepoTech): TemplateResult {
    if (!tech.url) return html`${nothing}`;

    const imgSrc = readCSSProperty(this.whichDesignToken(tech.designToken));
    const revealId = `${this.whichDesignToken(tech.designToken)}-reveal`;

    const revealContent = when(
      Array.isArray(tech.popoverContent),
      () => html`
        <ul slot="reveal-content">
          ${map(
            tech.popoverContent,
            (content: string) => html`
              <li class="md-typescale-body-large">
                ${unsafeHTML(content)}
              </li>
            `
          )}
        </ul>
      `,
      () => html`
        <p slot="reveal-content" class="md-typescale-body-large">
          ${unsafeHTML(tech.popoverContent as string)}
        </p>
      `
    );

    const imgTag = when(
      imgSrc,
      () => html`
        <img
          slot="header-icon"
          loading="lazy"
          role="img"
          aria-describedby="${revealId}"
          src="${imgSrc}"
          alt="${tech.name}"
          title="${tech.name}"
          width="200"
        />
      `,
      () => html`${nothing}`
    );

    return html`
      <code-reveal
        id="${revealId}"
        .word=${tech.name}
        .footerURL=${{ text: tech.name, url: tech.url }}
        @hide-reveal=${() => (this.activeRevealIndex = null)}
      >
        ${imgTag}
        ${revealContent}
      </code-reveal>
    `;
  }

  override render() {
    const token = this.darkMode
      ? "--icons-logos-organization-github-dark-icon-svg"
      : "--icons-logos-organization-github-light-icon-svg";

    const tokenSvg = readCSSProperty(token);
    const borderStyle = unsafeCSS(`
      --dynamic-border-background-image: url('${tokenSvg}');
    `);

    return html`
      <article
        class="dynamic-border-host"
        style=${borderStyle.cssText}
      >
        <header>
          <h3 class="md-typescale-headline-small">${this.codeRepo.name}</h3>
          <a
            href="${this.codeRepo.url}"
            target="_blank"
            rel="noopener noreferrer"
            title="${this.codeRepo.repo}"
          >
            ${this.codeRepo.repo}
          </a>
        </header>

        <md-divider></md-divider>

        <section aria-label="Synopsis">
          <p .innerHTML="${this.codeRepo.description}"></p>
        </section>

        ${
          when(
            this.activeRevealIndex !== null && this.codeRepo.tech[this.activeRevealIndex],
            () => this.createRevealPanel(this.codeRepo.tech[this.activeRevealIndex!]),
            () => html`${nothing}`
          )
        }

        <footer aria-label="Technologies used">
          <ul>
            ${this.codeRepo.tech.map((tech, index) => this.createWordTagLI(tech, index))}
          </ul>
        </footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-repo": CodeRepo;
  }
}