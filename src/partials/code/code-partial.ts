import CodeJson from "@/data/code.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { type CodeProjectData } from "@/types/components/code/code-project";
import { LitElement, type TemplateResult, css, html } from "lit-element";
import { customElement } from "lit/decorators.js";

/**
 * @summary The {@link LitElement} for `/#code` route
 */
@customElement("code-partial")
export class CodePartial extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        --code-partial-animation: 100ms;
        --code-partial-animation-reduced: 0ms;

        display: block;
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
      }

      article {
        container-type: inline-size;
        display: grid;
        grid-template-rows: min-content auto;
        gap: 1rem;
        padding-inline: 1rem;
      }

      partial-header {
        margin: unset;
      }

      .article-body {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(27rem, 100%), 1fr));
        grid-auto-rows: auto;
        gap: 1rem;
        padding-block-end: 1rem;

        ul& {
          list-style-type: none;
          margin: unset;
          padding: unset;
        }

        > li {
          display: block;
        }
      }

      .code-widget {
        --md-elevation-level: 2;

        display: grid;
        grid-template-areas:
          "header"
          "content"
          "footer";
        grid-template-rows: auto auto auto;
        padding: 1rem 2rem;
        position: relative;
        border-radius: var(--md-sys-shape-corner-small);
        border: 1px solid var(--md-sys-color-on-surface);
        gap: 1.5rem;
        background: var(--md-sys-color-surface-container-low);
        transition:
          transform var(--code-partial-animation) ease-in-out,
          background-color var(--code-partial-animation) ease-in-out,
          --md-elevation-level var(--code-partial-animation) ease-in-out,
          border-radius var(--code-partial-animation) ease-in-out;

        & * {
          overflow-wrap: anywhere;
        }

        &:hover,
        &:focus,
        &:focus-within {
          --md-elevation-level: 4;

          transform: translateY(-4px);
          background-color: var(--md-sys-color-surface-container-high);
          border-radius: var(--md-sys-shape-corner-medium);
        }

        header {
          grid-area: header;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: unset;

          a {
            text-decoration: none;

            > h2 {
              font-family: var(--md-ref-typeface-plain);
              margin: unset;
              color: var(--md-sys-color-tertiary);
              text-align: center;
            }
          }
        }

        .widget-content {
          align-self: flex-start;
          grid-area: content;

          a {
            color: var(--md-sys-color-on-surface);
          }
        }

        p {
          margin: 0;
          overflow-wrap: break-word;
        }

        footer {
          grid-area: footer;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin: unset;
          padding: unset;

          li {
            list-style-type: none;
            outline: 1px solid var(--md-sys-color-inverse-on-surface);
            background: var(--md-sys-color-inverse-surface);
            color: var(--md-sys-color-inverse-on-surface);
            padding: 0.25rem 1rem;
            border-radius: var(--md-sys-shape-corner-extra-small);
            transition:
              transform var(--code-partial-animation) ease-in-out,
              background-color var(--code-partial-animation) ease-in-out,
              color var(--code-partial-animation) ease-in-out,
              outline var(--code-partial-animation) ease-in-out,
              border-radius var(--code-partial-animation) ease-in-out;

            &:where(:focus-within, a:focus, :hover, a:hover) {
              transform: translateY(-4px);
              background-color: var(--md-sys-color-surface);
              color: var(--md-sys-color-on-surface);
              outline: 2px solid var(--md-sys-color-on-surface);
              border-radius: var(--md-sys-shape-corner-small);
            }

            a {
              text-decoration: none;
              color: inherit;
              font-size: inherit;
              font-weight: inherit;
              line-height: inherit;
              font-family: inherit;
            }
          }
        }
      }

      pre {
        display: inline;
        white-space: pre-wrap;
        overflow-wrap: break-word;
      }

      @media (prefers-reduced-motion: reduce) {
        .code-widget {
          transition: all var(--code-partial-animation-reduced) ease-in-out;
        }

        .tech-stack li {
          transition: all var(--code-partial-animation-reduced) ease-in-out;
        }
      }
    `,
  ];

  #renderCodeProject(data: CodeProjectData): TemplateResult {
    return html`
      <li>
        <section class="code-widget">
          <md-elevation></md-elevation>
          <header>
            <a
              target="_blank"
              href="${data.url}"
            >
              <h2 class="md-typescale-headline-small">${data.name}</h2>
            </a>
          </header>
          <div class="widget-content">
            <p
              class="md-typescale-body-large"
              .innerHTML=${data.description}
            ></p>
          </div>
          <footer>
            <ul class="tech-stack">
              ${data.technologies.map(
                (t) =>
                  html`<li
                    class="md-typescale-body-medium"
                    .innerHTML=${t}
                  ></li>`,
              )}
            </ul>
          </footer>
        </section>
      </li>
    `;
  }

  override render() {
    const oldCodeProjects: TemplateResult = html`
      <ul class="article-body">
        ${(CodeJson.projects as CodeProjectData[]).map((p) => this.#renderCodeProject(p))}
      </ul>
    `;
    // const newContent: TemplateResult = html`
    //   <div class="article-body">${
    //     CodeJson.projects.map((p: CodeProjectData) => html`<code-project .codeProject=${p}></code-project>`)
    //   }</div>
    // `;
    return html`
      <article>
        <partial-header
          .headerType=${"tertiary"}
          .headingText=${"Code Projects"}
        ></partial-header>
        ${oldCodeProjects}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-partial": CodePartial;
  }
}
