import { ParialHeadingStyles } from "@/styles/partial-styles";
import { css, html, LitElement, TemplateResult } from "lit-element";
import { customElement } from "lit/decorators.js";
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
          "bio"
          "contact-info"
          "links";
        gap: 1rem 2rem;
      }

      p, li, dd {
        margin: unset;
        color: var(--md-sys-color-on-surface-variant);
        overflow-wrap: anywhere;
        align-self: center;
        padding-inline: 1rem;
      }

      .section-grid {
        display: grid;
        grid-template-rows: min-content auto;
        grid-template-areas:
          "section-grid-title"
          "section-grid-content";
        gap: 1rem 2rem;
        container-type: inline-size;

        h2 {
          grid-area: section-grid-title;
          place-self: center;
        }
      }

      .list-grid {
        grid-area: section-grid-content;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        list-style-type: none;
        padding: unset;
        gap: 1rem;

        .list-grid-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        dt {
          grid-area: list-grid-label;
          padding: unset;
          margin: unset;
        }

        dd {
          grid-area: list-grid-content;
        }
      }

      header {
        grid-area: header;
        margin-inline: 1rem;
      }

      figure {
        grid-area: figure;
        margin: 1rem;

        picture {
          display: grid;
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
      }

      section {
        &.bio {
          grid-area: bio;
        }

        &.contact-info {
          grid-area: contact-info;
        }

        &.links {
          grid-area: links;
        }
      }

      @container (min-width: 850px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure contact-info"
            "figure links";
          gap: 1rem;
          grid-template-columns: 1fr 1fr;
        }

        .section-grid {
          grid-template-areas: "section-grid-title section-grid-content";
          grid-template-columns: min-content 1fr;
          grid-template-rows: unset;
        }
      }

      h1 {
        font-size: var(--md-typescale-display-medium-font-size);
        font-weight: var(--md-typescale-display-medium-font-weight);
        font-family: var(--md-typescale-display-medium-font-family);
        line-height: var(--md-typescale-display-medium-line-height);
      }

      a {
        color: var(--md-sys-color-primary);
      }
    `,
  ];

  #renderDlList(contents: {method: string, htmlNoIcon: string}[]): TemplateResult {
    return html`
      <dl class="list-grid">
        ${
          contents.map((content) => html`
            <div class="list-grid-item">
              <dt class="md-typescale-label-large">${content.method}</dt>
              <dd class="md-typescale-body-medium" .innerHTML=${content.htmlNoIcon}></dd>
            </div>
          `)
        }
      </dl>
    `;
  }

  #renderHeader(): TemplateResult {
    return html`
      <header>
        <md-elevation></md-elevation>
        <h1 class="md-typescale-display-medium">Franco N. Colaizzi</h1>
      </header>
    `;
  }

  #renderFigureElement(photoData: { src: string, alt: string, figcaption: string }): TemplateResult {
    return html`
      <figure>
        <picture>
          <source srcset=${photoData.src} type="image/jpeg">
          <img src=${photoData.src} alt=${photoData.alt}>
        </picture>
        <figcaption class="md-typescale-label-small">${photoData.figcaption}</figcaption>
      </figure>
    `;
  }

  #renderBio(bio: string ): TemplateResult {
    return html`
      <section class="bio section-grid">
        <h2 class="md-typescale-header-large">Bio</h2>
        <p class="md-typescale-body-large">${bio}</p>
      </section>
    `;
  }

  #renderContactInfo(pointsOfContact: { method: string, htmlNoIcon: string }[]): TemplateResult {
    return html`
      <section class="contact-info section-grid">
        <h2 class="md-typescale-header-large">Contact</h2>
        ${this.#renderDlList(pointsOfContact)}
      </section>
    `;
  }

  #renderLinks(links: { method: string, htmlNoIcon: string }[]): TemplateResult {
    return html`
      <section class="links section-grid">
        <h2 class="md-typescale-header-large">Links</h2>
        ${this.#renderDlList(links)}
      </section>
    `;
  }

  override render() {
    return html`
      <article>
        ${this.#renderHeader()}

        ${this.#renderFigureElement(ProfileJson.photo)}

        ${this.#renderBio(ProfileJson.bio)}

        ${this.#renderContactInfo(ProfileJson.contactInfo)}

        ${this.#renderLinks(ProfileJson.links)}

      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-partial": ProfilePartial;
  }
};