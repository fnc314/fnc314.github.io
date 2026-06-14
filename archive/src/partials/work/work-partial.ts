import "@/components/partial-header/partial-header";
import "@/components/work-experience/work-experience";
import { data as WorkJson } from "@/components/work-experience/work-experience.types";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("work-partial")
export class WorkPartial extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
      }

      article {
        align-content: start;
        background-color: var(--md-sys-color-surface);
        box-sizing: border-box;
        color: var(--md-sys-color-on-surface);
        display: grid;
        gap: var(--spaces-gap-s);
        grid-auto-rows: auto;
        grid-template-areas:
          "title"
          "content";
        grid-template-rows: min-content;
        height: min-content;
        padding-inline: var(--spaces-padding-s);
      }

      partial-header {
        grid-area: title;
        margin: unset;
      }

      .article-body {
        display: flex;
        flex-direction: column;
        gap: var(--spaces-gap-s);
        grid-area: content;
      }
    `,
  ];

  override render() {
    return html`
      <article>
        <partial-header
          .headerType=${"secondary"}
          .headingText=${"Work History"}
        ></partial-header>
        <div class="article-body">
          ${WorkJson.experiences.map(
            (exp) => html`
              <work-experience
                .isNested="${false}"
                .experienceOrg="${exp.employer}"
                .experienceRole="${exp.role}"
                .experienceSummary="${exp.summary}"
                .dateStart="${exp.dates.start}"
                .dateEnd="${exp.dates.end}"
                .jobs="${exp.jobs}"
                .summaries="${exp.summaries ?? []}"
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
