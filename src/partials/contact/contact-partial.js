import { LitElement, css, html } from "lit-element";

export class ContactPartial extends LitElement {
  static get styles() {
    return css`
      :root {

      }

      article {
        height: 100%;
        position: relative;
        border-radius: 16px;
        display: grid;
        grid-template-rows: [title] 10% [content] auto;
        --md-elevation-level: 4;
      }

      .contact-section-container {
        display: grid;
        grid-template-areas:
          "title title title"
          ". list .";

      }

      .article-title {
        grid-area: title;
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

      .contact-list {
        grid-area: list;

        dt {
          margin: 1rem 0 0 0;
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

  render() {
    return html`
      <article
        class="md-typescale-body-medium"
        >
        <section class="contact-section-container">
          <h1 class="md-typescale-title-medium article-title">Contact Me</h1>
          <dl class="contact-list">
            <dt>Email</dt>
            <dd>
              <a href="mailto:fnc314@fnc314.com">fnc314@fnc314.com</a>
            </dd>

            <dt>Phone</dt>
            <dd>
              <a href="tel:+14127219550">412-721-9550</a>
            </dd>

            <dt>LinkedIn</dt>
            <dd>
              <a href="https://www.linkedin.com/in/fnc314/" target="_blank">https://www.linkedin.com/in/fnc314/</a>
            </dd>

            <dt>GitHub</dt>
            <dd>
              <a href="https://www.github.com/fnc314/" target="_blank">https://www.github.com/fnc314/</a>
            </dd>
          </dl>
        </section>
      </article>
    `;
  }
}

window.customElements.define("contact-partial", ContactPartial);