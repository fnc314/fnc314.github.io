import { LitElement, css, html } from "lit-element";
import WorkJson from "./work.json" with { type: "json" };

export class WorkPartial extends LitElement {
  static get styles() {
    return css`
      :root {

      }

      article {
        height: 100%;
        position: relative;
        border-radius: 16px;
        display: grid;
        grid-template-areas:
        "title"
        "content";
        grid-template-rows: 10% auto auto;
        --md-elevation-level: 4;
      }

      .article-header {
        grid-area: title;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5rem 0;
      }

      .article-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .article-body {
        padding: 0 2rem;
        overflow-y: scroll;
        grid-area: content;
      }

      details {
        margin: 0.5rem 0;

        h2 {
          display: inline-block;
        }

        .work-summary {
          margin: 0;
          padding: 0.5rem 1rem 0.5rem 1.5rem;
        }
      }

      .nested-experience {
        display: flex;
        flex-direction: column;
        padding: 0 0 0 1.5rem;

        p {
          margin: 1rem 0;
          outline: 1px solid red;
        }

        .nested-experience-info {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          h3:first-child {
            flex: 0 1 25vw;
          }

          p:nth-child(2) {
            flex: 1 0 auto;
          }

          p:last-child {
            flex: 0 1 20vw;
            text-align: end;
          }
        }

        .nested-summary {
          padding: 0.5rem 1rem 0.5rem 1.5rem;
        }
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  #renderNestedExperience({ client, role, dates: { start, end }, summary }) {
    return html`
      <div class="nested-experience">
        <div class="nested-experience-info">
          <h3>${client}</h3>
          <p>${role}</p>
          <p>
            <time datetime="${start.stamp}">${start.text}</time> - <time datetime="${end.stamp}">${end.text}</time>
          </p>
        </div>
        <div class="nested-summary">
          ${summary.map(s => html`<p>${s.item}</p>`)}
        </div>
      </div>
    `;
  }

  #renderExperience({ employer, role, date: { start, end }, jobs }) {
    return jobs.length ?
      html`
        <h2 class="md-typescale-title-small">${employer} | ${role} | ${start} - ${end}</h2>
        ${
          jobs.map(s => s.hasOwnProperty("item") ?
            html`<p class="nested-summary">${s.item}</p>` :
            this.#renderNestedExperience(s))
        }
      ` :
      html`
        <h2 class="md-typescale-title-small">${employer} | ${role} | ${start} - ${end}</h2>
      `;
  }

  render() {
    return html`
      <article
        class="md-typescale-body-medium"
        >
        <md-elevation></md-elevation>
        <h1 class="article-header md-typescale-title-medium">Work Experience</h1>
        <section class="article-body">
          ${WorkJson.experiences.map(exp => this.#renderExperience(exp))}
        </section>
      </article>
    `;
  }
}

window.customElements.define("work-partial", WorkPartial);