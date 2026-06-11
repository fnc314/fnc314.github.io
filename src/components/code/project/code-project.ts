import { type CodeProjectData } from "@/components/code/project/code-project.types";
import { MaterialTypescaleStyles } from "@/styles";
import { InteractionStyles } from "@/styles/interaction-styles";
import { cssPropertyDataImage } from "@fnc314/design-tokens";
import { LitElement, type TemplateResult, css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary Represents a single (usually GitHub-hosted) demonstration project
 *
 * @deprecated - Replaced by {@link CodeRepo}
 *
 * @property {CodeProjectData} [codeProject={}] - The Rendered {@link CodeProjectData}
 *
 * @cssprop [--code-project-animation=200ms] - The duration of the subtle hover/focus effect
 * @cssprop [--code-project-rotation=800ms] - The duration of the card rotation effect
 *
 * @export
 * @class CodeProject
 * @typedef {CodeProject}
 * @extends {LitElement}
 */
@customElement("code-project")
export class CodeProject extends LitElement {
  @property({ type: Object })
  codeProject: CodeProjectData = {} as CodeProjectData;

  @state()
  private flipped = false;

  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    InteractionStyles,
    css`
      :host {
        /* @ignore */
        --internal-code-project-animation: var(--code-project-animation, var(--motion-duration-short));

        /* @ignore */
        --internal-code-project-rotation: var(--code-project-rotation, 800ms);

        display: block;
        height: 30rem;

        @media (prefers-reduced-motion: reduce) {
          /* @ignore */
          --internal-code-project-animation: 0ms;

          /* @ignore */
          --internal-code-project-rotation: 0ms;
        }
      }

      md-outlined-card {
        --md-outlined-card-container-shape: var(--md-sys-shape-corner-medium);
        --md-outlined-card-container-elevation: var(--motion-elevation-level-1);
        --word-tag-border-radius: var(--md-sys-shape-corner-medium);

        height: 100%;

        /* Ensure the card doesn't flatten the 3D space or clip the rotation */
        margin: var(--spacing-margin-xxs);
        overflow: visible;
        perspective: 1000px; /* The guide's perspective container */
        transition:
          --md-outlined-card-container-shape var(--internal-code-project-rotation) var(--motion-easing-standard),
          --md-outlined-card-container-elevation var(--internal-code-project-rotation) var(--motion-easing-standard);
        width: 100%;
        will-change: transform;

        /* Material Web components use a 'container' part for the inner surface */
        &::part(container) {
          overflow: visible;
        }

        &:hover,
        &:focus,
        &:focus-within,
        &:focus-visible {
          --md-outlined-card-container-elevation: var(--motion-elevation-level-3);
        }

        &.flipped {
          .code-project-card-inner {
            transform: rotateY(180deg);
          }
        }
      }

      .code-project-card {
        align-items: center;
        backface-visibility: hidden; /* Hides the reverse side of the element */
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-gap-s);
        height: 100%;
        inset: 0;
        justify-content: space-around;
        padding: var(--spacing-padding-m);
        position: absolute;
        width: 100%;
      }

      div.code-project-card-inner {
        border-radius: var(--md-outlined-card-container-shape);
        height: 100%;
        position: relative;
        text-align: center;
        transform-style: preserve-3d; /* Required for the 3D effect */
        transition: transform var(--internal-code-project-rotation) var(--motion-easing-standard);
        width: 100%;
        will-change: transform;
      }

      section.code-project-card-front {
        --md-outlined-card-container-color: var(--md-sys-color-surface-container-high);

        background-color: var(--md-outlined-card-container-color);
        border-radius: inherit;

        header {
          h3 {
            margin: var(--spacing-reset);
          }
        }

        slot[name="code-project-summary"] {
          p {
            margin: var(--spacing-reset);
          }

          pre {
            display: inline;
            overflow-wrap: break-word;
            white-space: pre-wrap;
          }
        }

        a {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-gap-xs);

          img {
            width: var(--md-icon-size);
            height: var(--md-icon-size);
            aspect-ratio: 1;
          }
        }
      }

      section.code-project-card-back {
        --md-outlined-card-container-color: var(--md-sys-color-surface-container-low);
        --word-tag-color: var(--md-sys-color-inverse-on-surface);
        --word-tag-background-color: var(--md-sys-color-inverse-surface);

        background-color: var(--md-outlined-card-container-color);
        border-radius: inherit;
        transform: rotateY(180deg); /* Pre-rotated so it faces away initially */

        ul {
          display: flex;
          flex-flow: row wrap;
          gap: var(--spacing-gap-m);
          justify-content: space-evenly;
          margin: unset;
          padding: unset;

          li {
            list-style-type: none;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--spacing-gap-xs);

            img {
              width: var(--md-icon-size);
              height: var(--md-icon-size);
              aspect-ratio: 1;
            }
          }
        }
      }

      a {
        color: var(--md-sys-color-on-surface-variant);
      }
    `
  ];

  /**
   * Builds the front of the {@link @material/web!MdOutlinedCard} content
   *
   * @returns {TemplateResult}
   */
  #generateCardFront(): TemplateResult {
    return html`
      <section class="code-project-card code-project-card-front">
        <header part="code-project-header">
          <h3 class="md-typescale-title-large">
            ${this.codeProject.name}
          </h3>
        </header>
        <md-divider></md-divider>
        <slot name="code-project-summary" part="code-project-summary">
          <p
            class="md-typescale-body-medium"
            .innerHTML=${this.codeProject.description}
          ></p>
        </slot>
        <md-divider></md-divider>
        <a
          .href="${this.codeProject.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="repo-link md-typescale-title-large"
        >
          <img
            src="${cssPropertyDataImage("--icons-logos-organization-github-light")}"
            alt="GitHub Logo"
            />
          Repo
        </a>
        <md-outlined-button
          @click=${() => this.flipped = !this.flipped}
          >
          View Tech
        </md-outlined-button>
      </section>
    `;
  }

  /**
   * Builds the back of the {@link @material/web!MdOutlinedCard} content
   *
   * @returns {TemplateResult}
   */
  #generateCardBack(): TemplateResult {
    return html`
      <section class="code-project-card code-project-card-back">
        <h3 class="md-typescale-title-large">
          Tech Stack
        </h3>
        <ul part="code-project-tech-stack">
          ${
            this.codeProject.tech
              .map((tech) => {
                const imgSrc =
                  tech.designToken ?
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
                  nothing
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
        <md-outlined-button
          @click=${() => this.flipped = !this.flipped}
          >
          Hide Tech
        </md-outlined-button>
      </section>
    `;
  }

  override render() {
    const classesMap = {
      flipped: this.flipped,
    };
    return html`
      <md-outlined-card class="${classMap(classesMap)} hover-lift">
        <div class="code-project-card-inner">
          ${this.#generateCardFront()}
          ${this.#generateCardBack()}
        </div>
      </md-outlined-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-project": CodeProject;
  }
}