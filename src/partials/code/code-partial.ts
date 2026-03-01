import { ParialHeadingStyles } from "@/styles/partial-styles";
import { LitElement, css, html } from "lit-element";
import { customElement } from "lit/decorators.js";
import CodeJson from "./code.json" with { type: "json" };

interface Project {
  name: string;
  url: string;
  description: string;
  technologies: string[];
}

@customElement("code-partial")
export class CodePartial extends LitElement {
  static override styles = [
    ParialHeadingStyles,
    css`
      :root {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
      }

      article {
        container-type: inline-size;
        height: 100%;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        --md-elevation-level: 4;
        gap: 1rem;

        h1 {
          text-align: center;
        }
      }

      .article-body {
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(27rem, 100%), 1fr));
        grid-auto-rows: 1fr;
        gap: 2rem;
      }

      .code-widget {
        display: grid;
        grid-template-areas:
          "header"
          "content"
          "footer";
        grid-template-rows: 0.5fr minmax(auto, 1fr) 1fr;
        padding: 1.5rem;
        position: relative;
        border-radius: 0.5rem;
        outline: 1px solid var(--md-sys-color-on-surface);
        gap: 1.5rem;
        background: var(--md-sys-color-surface-container-low);
        --md-elevation-level: 2;
        transition:
          transform 0.1s ease-in-out,
          background-color 0.1s ease-in-out,
          --md-elevation-level 0.1s ease-in-out,
          border-radius 0.1s ease-in-out;

        &:hover {
          transform: translateY(-4px);
          --md-elevation-level: 4;
          background-color: var(--md-sys-color-surface-container-high);
          border-radius: 1rem;
        }

        header {
          grid-area: header;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: unset;

          h2 {
            font-family: sans-serif;
          }
        }

        a {
          text-decoration: none;
          color: var(--md-sys-color-primary);

          h2 {
            margin: unset;
            color: var(--md-sys-color-tertiary);
            text-align: center;
            line-height: 1.5rem;
          }
        }

        .widget-content {
          align-self: flex-start;
          grid-area: content;
        }

        p {
          margin: 0;
          word-wrap: break-word;
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
            outline: 1px solid var(--md-sys-color-on-surface);
            background: var(--md-sys-color-surface-container-highest);
            color: var(--md-sys-color-on-surface);
            padding: 0.25rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.85rem;
            font-family: monospace;

            a {
              color: inherit;
              text-decoration: none;
            }
          }
        }
      }

      pre {
        display: inline;
      }
    `
  ];

  #renderCodeWidget({ name, url, description, technologies }: Project) {
    return html`
      <section class="code-widget">
        <md-elevation></md-elevation>
        <header>
          <a target="_blank" href="${url}">
            <h2 class="md-typescale-title-medium">${name}</h2>
          </a>
        </header>
        <div class="widget-content">
          <p class="md-typescale-body-medium" .innerHTML=${description}></p>
        </div>
        <footer>
          <ul class="tech-stack">
            ${technologies.map(t => html`<li .innerHTML=${t}></li>`)}
          </ul>
        </footer>
      </section>
    `;
  }

  override render() {
    return html`
      <article
        class="md-typescale-body-medium"
        >
        <header>
          <md-elevation></md-elevation>
          <h1 class="md-typescale-title-medium">Code Projects</h1>
        </header>
        <div class="article-body">
          ${(CodeJson.projects as Project[]).map(p => this.#renderCodeWidget(p))}
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-partial": CodePartial;
  }
}