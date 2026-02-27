import { css, html, LitElement } from "lit-element";
import { customElement } from "lit/decorators.js";
import { ParialHeadingStyles } from "./../../styles/partial-styles.js";
import "./profile-list.js";
import ProfileJson from "./profile.json" with { type: "json" };

@customElement("profile-partial")
export class ProfilePartial extends LitElement {
  static override styles = [
    ParialHeadingStyles,
    css`
      :host {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
      }

      article {
        container-type: inline-size;
        display: grid;
        grid-template-areas:
          "header"
          "figure"
          "profile-list";
        gap: 1rem 2rem;
      }

      header {
        grid-area: header;
        margin-inline: 1rem;
      }

      figure {
        grid-area: figure;
        place-self: center;
        margin: 1rem;

        picture {
          display: grid;
        }
      }

      img {
        object-fit: scale-down;
        max-width: 100%;
        height: auto;
        place-self: center;
        border-radius: 1rem;
      }

      figcaption {
        text-align: center;
        color: var(--md-sys-color-on-surface-variant);
        font-style: italic;
        margin-block: 0.5rem;
      }

      section {
        grid-area: profile-list;
        margin: 1rem;
      }

      @container (min-width: 850px) {
        article {
          grid-template-areas:
            "header header"
            "figure profile-list";
          gap: 1rem;
          grid-template-rows: auto 1fr;
        }

        header {
          grid-area: header;
          margin-inline: 1rem;
        }

        figure {
          grid-area: figure;
          place-self: center;
        }

        section {
          grid-area: profile-list;
        }
      }

    `,
  ];

  override render() {
    const photoData: { src: string, alt: string, figcaption: string } = ProfileJson["photo"] satisfies { src: string, alt: string, figcaption: string };
    return html`
      <article>
        <header>
          <md-elevation></md-elevation>
          <h1 class="md-typescale-title-medium">Franco N. Colaizzi</h1>
        </header>

        <figure>
          <picture>
            <source srcset=${photoData.src} type="image/jpeg">
            <img src=${photoData.src} alt=${photoData.alt}>
          </picture>
          <figcaption>${photoData.figcaption}</figcaption>
        </figure>

        <section>
          <profile-list
            .bio=${ProfileJson.bio}
            .contactInfo=${ProfileJson.contactInfo}
            .socialInfo=${ProfileJson.socialInfo}
          ></profile-list>
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