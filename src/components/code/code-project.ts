import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { type CodeProjectData } from "@/types/components/code/code-project";
import { LitElement, type TemplateResult, css, html } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property, state } from "lit/decorators.js";

/**
 * @summary Represents a single (usually GitHub-hosted) demonstration project
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

  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        height: 30rem;

        /* @ignore */
        --internal-code-project-animation: var(--code-project-animation, 200ms);

        /* @ignore */
        --internal-code-project-rotation: var(--code-project-rotation, 800ms);

        @media (prefers-reduced-motion: reduce) {
          /* @ignore */
          --internal-code-project-animation: 0ms;

          /* @ignore */
          --internal-code-project-rotation: 0ms;
        }
      }

      md-outlined-card {
        --md-outlined-card-container-shape: var(--md-sys-shape-corner-medium);
        --md-outlined-card-container-elevation: 4;
        --word-tag-border-radius: var(--md-sys-shape-corner-medium);

        /* Ensure the card doesn't flatten the 3D space or clip the rotation */
        overflow: visible;
        width: 100%;
        height: 100%;
        perspective: 1000px; /* The guide's perspective container */
        transition:
          --md-outlined-card-container-shape var(--internal-code-project-rotation) ease-in-out,
          --md-outlined-card-container-elevation var(--internal-code-project-rotation) ease-in-out
          ;

        /* Material Web components use a 'container' part for the inner surface */
        &::part(container) {
          overflow: visible;
        }

        &.flipped {
          .code-project-card-inner {
            transform: rotateY(180deg);
          }
        }
      }

      .code-project-card {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1.5rem;
        backface-visibility: hidden; /* Hides the reverse side of the element */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      div.code-project-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform var(--internal-code-project-rotation) cubic-bezier(0.4, 0, 0.2, 1);
        transform-style: preserve-3d; /* Required for the 3D effect */
        border-radius: var(--md-outlined-card-container-shape);
      }

      section.code-project-card-front {
        --md-outlined-card-container-color: var(--md-sys-color-surface-container-high);

        background-color: var(--md-outlined-card-container-color);
        border-radius: inherit;

        header {
          h2 {
            margin: 0;
          }
        }

        slot[name="code-project-summary"] {
          p {
            margin: 0;
          }

          pre {
            display: inline;
            white-space: pre-wrap;
            overflow-wrap: break-word;
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
          gap: 2rem;
          justify-content: space-evenly;
          margin: unset;
          padding: unset;

          li {
            list-style-type: none;
          }
        }
      }

      a {
        color: var(--md-sys-color-on-surface-variant);

        &.repo-link::before {
          content: url("./assets/icons/brand/github.svg") / "GitHub logo";
          display: block;
        }
      }
    `
  ];

  /**
   * Builds the front of the {@link MdOutlinedCard} content
   *
   * @returns {TemplateResult}
   */
  #generateCardFront(): TemplateResult {
    return html`
      <section class="code-project-card code-project-card-front">
        <header part="code-project-header">
          <h2 class="md-typescale-headline-small">
            ${this.codeProject.name}
          </h2>
        </header>
        <md-divider></md-divider>
        <slot name="code-project-summary" part="code-project-summary">
          <p
            class="md-typescale-body-large"
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
          Repo
        </a>
        <md-outlined-button
          @click=${() => this.flipped = !this.flipped}
          >
          View More
        </md-outlined-button>
      </section>
    `;
  }


  /**
   * Builds the back of the {@link MdOutlinedCard} content
   *
   * @returns {TemplateResult}
   */
  #generateCardBack(): TemplateResult {
    return html`
      <section class="code-project-card code-project-card-back">
        <h2 class="md-typescale-title-large">
          Tech Stack
        </h2>
        <ul part="code-project-tech-stack">
          ${
            this.codeProject.tech
              .map((tech) =>
                html`
                  <li>
                    <word-tag
                      .hrefUrl=${tech.url}
                      .word=${tech.name}>
                    </word-tag>
                  </li>
                `
              )
          }
        </ul>
        <md-outlined-button
          @click=${() => this.flipped = !this.flipped}
          >
          View Less
        </md-outlined-button>
      </section>
    `;
  }

  override render() {
    const classesMap = {
      flipped: this.flipped,
    };
    return html`
      <md-outlined-card class=${classMap(classesMap)}>
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