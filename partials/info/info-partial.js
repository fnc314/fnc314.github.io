import { LitElement, html, css } from "lit-element";

export class InfoPartial extends LitElement {
  static get styles() {
    return css`
      :root {

      }
      article {
        height: 100%;
        position: relative;
        border-radius: 16px;
        display: grid;
        grid-template-rows: [title] 15% [content] 85%;
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
        <md-elevation></md-elevation>
        <div class="article-title">
          <h1>About Me</h1>
        </div>
        <div class="article-body">
          <p>My name is Franco and I am a former secondary Mathematics teacher (of almost ten years) and currently a mobile architect, with a specialty in Android.</p>
          <p>
            My development career starts in 2014 when I was beginning to master ${this.#renderLink(html`<code>AngularJS</code>`, "https://angularjs.org")}.  It
            was only a few months into my first project with ${this.#renderLink(html`<code>AngularJS</code>`, "https://angularjs.org")}
          </p>
        </div>
      </article>
    `;
  }
}

window.customElements.define("info-partial", InfoPartial);