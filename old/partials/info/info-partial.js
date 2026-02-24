import { LitElement, css, html } from "lit-element";

export class InfoPartial extends LitElement {
  static get styles() {
    return css`
      :root {

      }

      article {
        height: 100%;
        border-radius: 16px;
        display: grid;
        grid-template-rows: [title] auto [content] 1fr;
        --md-elevation-level: 4;
      }

      .article-title {
        display: flex;
        align-items: center;
        justify-content: center;


      }

      .article-body {
        padding: 0 1rem;

        p {
          margin: unset;
          padding: 1rem;
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

  #renderLink(text, url) {
    return html`
      <a target="_blank" href="${url}">${text}</a>
    `;
  }

  render() {
    return html`
      <article
        class="md-typescale-body-medium"
        >
        <section class="article-title">
          <h1 class="md-typescale-title-medium">About Me</h1>
        </section>
        <section class="article-body">
          <p>
            My name is Franco N. Colaizzi and I am a strategic technical leader & system architect with over a decade of experience driving large-scale Android and web initiatives. A former educator turned technical director, I leverage a unique background in mathematics and instruction to translate complex, multi-layered technical flows into accessible, executive-ready narratives for broad organizational alignment. I specialize in building resilient, future-proof architectures by defaulting to time-tested, industry-standard solutions that prioritize stability and maintainability over fleeting trends. Known for a high-empathy approach to leadership, I focus on mentoring cross-functional teams, fostering professional growth, and bridging the communication gap between business vision and technical execution.
          </p>
          <!-- <p>
            My development career starts in 2014 when I was beginning to master ${this.#renderLink(html`<code>AngularJS</code>`, "https://angularjs.org")}.  It
            was only a few months into my first project with ${this.#renderLink(html`<code>AngularJS</code>`, "https://angularjs.org")}
          </p> -->
        </section>
      </article>
    `;
  }
}

window.customElements.define("info-partial", InfoPartial);