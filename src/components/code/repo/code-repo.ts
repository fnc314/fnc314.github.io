import { CodeRepoStyles } from "@/components/code/repo/code-repo.styles";
import { CSS_PROPERTY_CODE_REPO_WORD_TAG_SIZE, type CodeRepoData, WORD_TAG_SIZES, type WordTagSize } from "@/components/code/repo/code-repo.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { MaterialTypescaleStyles } from "@/styles";
import { cssPropertyDataImage, readCSSProperty } from "@fnc314/design-tokens";
import { type PropertyValues, html, nothing } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";

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
    MaterialTypescaleStyles,
    CodeRepoStyles,
  ];

  /**
   * Extraced by {@link onWordTagSizeChange} listener bound to the `resize` `Event`
   *
   * {@link TransitionEvent}
   */
  @state()
  protected wordTagSize: WordTagSize = WORD_TAG_SIZES.full;

  @query("article")
  private articleCard!: HTMLElement;

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    const firstRead = readCSSProperty(
      CSS_PROPERTY_CODE_REPO_WORD_TAG_SIZE,
      this.articleCard,
      true
    ) as WordTagSize;

    if (firstRead && this.wordTagSize !== firstRead) {
      this.wordTagSize = firstRead;
    }

  }

  override render() {
    return html`
      <article>
        <div>
          <header>
            <h3 class=\"md-typescale-title-large\">
              ${this.codeRepo.name}
            </h3>
            <a
              href="${this.codeRepo.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="${cssPropertyDataImage(
                  this.darkMode
                    ? "--icons-logos-organization-github-dark"
                    : "--icons-logos-organization-github-light"
                )}"
                alt="GitHub Link"
                aria-hidden="true"
              />
              <span>${this.codeRepo.repo}</span>
            </a>
          </header>

          <md-divider></md-divider>

          <div>
            <p
              .innerHTML=${this.codeRepo.description}
            ></p>

            <footer>
              <ul aria-label=\"Technologies used\">
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
                          title=${tech.name}
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
          </div>
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