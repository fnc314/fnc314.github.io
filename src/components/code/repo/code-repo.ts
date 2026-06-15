import { CodeRepoStyles } from "@/components/code/repo/code-repo.styles";
import { type CodeRepoData } from "@/components/code/repo/code-repo.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { cssPropertyDataImage } from "@fnc314/design-tokens";
import { html, nothing, unsafeCSS } from "lit";
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

  override render() {
    const data = cssPropertyDataImage(
      this.darkMode
        ? "--icons-logos-organization-github-dark"
        : "--icons-logos-organization-github-light"
    );
    const borderStyle = unsafeCSS(`
      --dynamic-border-background-image: url('${data}');
    `);
    return html`
      <article class="dynamic-border-host" style="${borderStyle.cssText}">
        <header>
          <h3 class="md-typescale-title-large">
            ${this.codeRepo.name}
          </h3>
          <a
            href="${this.codeRepo.url}"
            target="_blank"
            rel="noopener noreferrer"
            title="${this.codeRepo.repo}"
          >
            <img
              src="${data}"
              alt="GitHub Link"
              aria-hidden="true"
            />
            <span>${this.codeRepo.repo}</span>
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
            ${this.codeRepo.tech.map((tech) => {
              const imgSrc =
                typeof tech.designToken === "string"
                  ? cssPropertyDataImage(tech.designToken)
                  : cssPropertyDataImage(
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
                : "icon-only";

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
            })}
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