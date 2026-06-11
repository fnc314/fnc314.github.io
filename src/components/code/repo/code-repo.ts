import { CodeRepoStyles } from "@/components/code/repo/code-repo.styles";
import { type CodeRepoData } from "@/components/code/repo/code-repo.types";
import { UIModeAwareElement } from "@/mixins/ui-mode-aware-element/ui-mode-aware-element";
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
 * @extends {UIModeAwareElement}
 */
@customElement("code-repo")
export class CodeRepo extends UIModeAwareElement {
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
        <header class="header">
          <h3 class="project-title md-typescale-title-large">
            ${this.codeRepo.name}
          </h3>
          <a
            class="repo-link md-typescale-body-medium"
            href="${this.codeRepo.url}"
            target="_blank" rel="noopener noreferrer"
            >
            <img
              src="${cssPropertyDataImage(this.darkMode ? "--icons-logos-organization-github-dark" : "--icons-logos-organization-github-light")}"
              alt="GitHub Logo"
              />
            ${this.codeRepo.url}
          </a>
        </header>

        <md-divider></md-divider>

        <p class="blurb md-typescale-body-large" .innerHTML=${this.codeRepo.description}></p>

        <md-divider></md-divider>

        <footer class="footer">
          <ul class="tech-list" aria-label="Technologies used">
            ${
              this.codeRepo.tech.map(tech => {
                const imgSrc =
                  typeof tech.designToken === "string" ?
                    cssPropertyDataImage(tech.designToken) :
                    undefined;

                const imgTag = imgSrc ?
                  html`
                    <img
                      role="img"
                      aria-labelledby="${tech.designToken || tech.name.toLowerCase().split(" ").join("-")}-word-tag"
                      src="${imgSrc}"
                      alt="${tech.name}"
                      slot="icon"
                      />
                  ` :
                  nothing;

                  return html`
                    <li>
                      <word-tag
                        id="${tech.designToken || tech.name.toLowerCase().split(" ").join("-")}-word-tag"
                        .hrefUrl=${tech.url}
                        .word=${tech.name}
                        .variant=${"text-icon"}
                        >
                        ${imgTag}
                      </word-tag>
                    </li>
                  `;
              })
            }
          </ul>
        </footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "project-repo": CodeRepo;
  }
}