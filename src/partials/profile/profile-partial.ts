import { css, html, LitElement } from "lit-element";
import { customElement } from "lit/decorators.js";
import { ParialHeadingStyles } from "./../../styles/partial-styles.js";
import "./contact-list.js";
import "./profile-list.js";

@customElement("profile-partial")
export class ProfilePartial extends LitElement {
  static override styles = [
    ParialHeadingStyles,
    css`
      :host {
        container-type: size;
      }

      .profile-container {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-areas:
          "header"
          "profile-list";
        gap: 1rem;

        header {
          border-radius: 1rem;
        }
      }

      @media (min-width: 600px) {
        .profile-container {
          grid-template-rows: auto 1fr;
          grid-template-columns: minmax(min-content, 1fr);
          grid-template-areas:
            "header"
            "profile-list";
        }
      }

      header {
        grid-area: header;
      }

      section {
        grid-area: profile-list;
      }

    `,
  ];

  override render() {
    return html`
      <article class="profile-container">
        <header>
          <md-elevation></md-elevation>
          <h1 class="md-typescale-title-medium">Franco N. Colaizzi</h1>
        </header>

        <section class="profile-list">
          <profile-list></profile-list>
        </section>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-partial": ProfilePartial;
  }

};