import { CodeRepoStyles } from "@/components/code/repo/code-repo.styles";
import { type CodeRepoData } from "@/components/code/repo/code-repo.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { MaterialTypescaleStyles } from "@/styles";
import { InteractionStyles } from "@/styles/interaction-styles";
import { cssPropertyDataImage } from "@fnc314/design-tokens";
import { html, nothing } from "lit";
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
    MaterialTypescaleStyles,
    InteractionStyles,
    CodeRepoStyles,
  ];

  override render() {
    return html`
      <article class="card">
        <div class="card-body-wrapper">
          <header class="header">
            <h3 class="project-title md-typescale-title-large">
              ${this.codeRepo.name}
            </h3>
            <a
              class="repo-link md-typescale-body-small"
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
              <span>${this.codeRepo.url}</span>
            </a>
          </header>

          <md-divider></md-divider>

          <div class="info-pane">
            <p
              class="blurb md-typescale-body-medium"
              .innerHTML=${this.codeRepo.description}
            ></p>

            <footer class="footer">
              <ul class="tech-list" aria-label="Technologies used">
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
                      : tech.designToken.default
                  }-word-tag`;

                  const imgTag = imgSrc
                    ? html`
                        <img
                          role="img"
                          aria-labelledby="${tagId}"
                          src="${imgSrc}"
                          alt="${tech.name}"
                          slot="icon"
                        />
                      `
                    : nothing;

                  return html`
                    <li>
                      <word-tag
                        id="${tagId}"
                        .hrefUrl=${tech.url}
                        .word=${tech.name}
                        .variant=${"text-icon"}
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