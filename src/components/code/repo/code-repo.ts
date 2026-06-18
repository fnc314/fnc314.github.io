import { CodeRepoStyles } from "@/components/code/repo/code-repo.styles";
import { type CodeRepoData, type CodeRepoTech } from "@/components/code/repo/code-repo.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { Breakpoints, readCSSProperty } from "@fnc314/design-tokens";
import { type TemplateResult, html, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An instance of a given `GitHub` repository project documented through
 *   {@link CodeRepoData} objects from `data/code.json`
 *
 * @property {CodeRepoData} codeRepo - An instance of {@link CodeRepoData}
 *   to render
 *
 * @export
 * @class CodeRepo
 * @extends {UIAwareElement}
 */
@customElement("code-repo")
export class CodeRepo extends UIAwareElement {
  /** {@link CodeRepoData} */
  @property({ type: Object })
  codeRepo: CodeRepoData = {} as CodeRepoData;

  static override styles = [
    TextStyles,
    CodeRepoStyles,
  ];

  private createWordTagLI(tech: CodeRepoTech): TemplateResult {
    const imgSrc =
      typeof tech.designToken === "string"
        ? readCSSProperty(tech.designToken)
        : readCSSProperty(
            this.darkMode
              ? tech.designToken.dark
              : tech.designToken.light
          );

    const tagId: string = `${
      typeof tech.designToken === "string"
        ? tech.designToken
        : this.darkMode
          ? tech.designToken.dark
          : tech.designToken.light
    }-word-tag`;

    const imgTag = imgSrc
      ? html`
          <img
            loading="lazy"
            role="img"
            aria-describedby="${tagId}"
            src="${imgSrc}"
            alt="${tech.name}"
            slot="icon"
            title="${tech.name}"
          />
        `
      : nothing;

    const variant = imgTag === nothing
      ? "text-only"
      : (
        this.touchScreen || this.breakpoint === Breakpoints.BreakpointLabels.mobile
        ? "icon-text"
        : "icon-only"
      );

    console.warn(
      `
      CODE REPO
      TouchScreen ${this.touchScreen}
      Breakpoint ${this.breakpoint}
      Variant ${variant}
      Tag ID ${tagId}
      Tech ${JSON.stringify(tech, null, 2)}
      `
    );
    return html`
      <li>
        <word-tag
          id="${tagId}"
          .hrefUrl=${tech.url}
          .word=${tech.name}
          .variant=${variant}
        >
          ${imgTag}
        </word-tag>
      </li>
    `;
  }

  override render() {
    const token = this.darkMode
      ? "--icons-logos-organization-github-dark-css-url"
      : "--icons-logos-organization-github-light-css-url";

    const borderStyle = unsafeCSS(`
      --dynamic-border-background-image: var(${token});
    `);
    return html`
      <article class="dynamic-border-host" style="${borderStyle.cssText}">
        <header>
          <h3 class="md-typescale-headline-small">
            ${this.codeRepo.name}
          </h3>
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

        <section>
          <p
            .innerHTML="${this.codeRepo.description}"
          ></p>
        </section>

        <footer>
          <ul aria-label="${"Technologies used"}">
            ${this.codeRepo.tech.map((tech) => this.createWordTagLI(tech))}
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