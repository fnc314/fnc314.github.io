import CodeJson from "@/data/code.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { type CodeProjectData } from "@/types/components/code/code-project";
import { LitElement, css, html } from "lit-element";
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

      .article-body {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(27rem, 100%), 1fr));
        grid-auto-rows: 1fr;
        gap: 1rem;
        padding-block-end: 1rem;

        ul& {
          list-style-type: none;
          margin: unset;
          padding: unset;
        }

        > li {
          display: inline-block;
        }
      }
    `,
  ];

  override render() {
    return html`
      <article>
        <partial-header
          .headerType=${"tertiary"}
          .headingText=${"Code Projects"}
        ></partial-header>
        <ul class="article-body">
          ${(CodeJson.projects as CodeProjectData[]).map((p) => html`<li><code-project .codeProject="${p}"></code-project></li>`)}
        </ul>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-partial": CodePartial;
  }
}
