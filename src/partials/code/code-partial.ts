import CodeJson from "@/data/code.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * @summary The LitElement for /#code route
 */
@customElement("code-partial")
export class CodePartial extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        --code-partial-animation: 100ms;
        --code-partial-animation-reduced: 0ms;
    
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        display: block;
      }

      article {
        container-type: inline-size;
        display: grid;
        gap: 1rem;
        grid-template-rows: min-content auto;
        padding-inline: 1rem;
      }

      .article-body {
        display: grid;
        gap: 1rem;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(auto-fit, minmax(min(27rem, 100%), 1fr));
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
          ${(CodeJson.projects).map((p) => html`
            <li>
              <code-project .codeProject="${p}"></code-project>
            </li>
            `
          )}
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
