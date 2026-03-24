import "@/components/work-experience/work-experience";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { data as WorkJson } from "@/types/components/work-experience/work-experience";
import { LitElement, css, html } from "lit-element";
import { customElement } from "lit/decorators.js";

@customElement("work-partial")
export class WorkPartial extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
      }

      article {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        box-sizing: border-box;
        align-content: start;
        display: grid;
        grid-template-areas:
          "title"
          "content"
          ;
        gap: 1rem;
        grid-template-rows: min-content;
        grid-auto-rows: auto;
        height: min-content;
        min-height: 100dvh;
        padding-inline: 1rem;
      }

      partial-header {
        grid-area: title;
        margin: unset;
      }

      .article-body {
        grid-area: content;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    `,
  ];

  override render() {
    return html`
      <article>
        <partial-header .headerType=${"secondary"} .headingText=${"Work Experience"}></partial-header>
        <div class="article-body">
          ${WorkJson.experiences.map(
            (exp) => html`
              <work-experience
                .isNested="${false}"
                experience-org="${exp.employer}"
                experience-role="${exp.role}"
                .dateStart="${exp.dates.start}"
                .dateEnd="${exp.dates.end}"
                .jobs="${exp.jobs}"
              ></work-experience>
            `,
          )}
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "work-partial": WorkPartial;
  }
}
