import { ParialHeadingStyles, typescaleStyles } from "@/styles/partial-styles";
import { css, html, LitElement, TemplateResult } from "lit-element";
import { customElement } from "lit/decorators.js";
import ProfileJson from "./profile.json" with { type: "json" };

@customElement("profile-partial")
export class ProfilePartial extends LitElement {
  static override styles = [
    typescaleStyles,
    ParialHeadingStyles,
    css`
      :host {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);

        --section-grid-background: var(--md-sys-color-inverse-surface);
        --section-grid-color: var(--md-sys-color-inverse-on-surface);
      }

      article {
        container-type: inline-size;
        display: grid;
        grid-template-areas:
          "header"
          "figure"
          "bio"
          "education"
          "contact-info"
          "links";
        gap: 1rem;
      }

      .section-grid {
        display: grid;
        grid-template-rows: min-content auto;
        grid-template-areas:
          "section-grid-title"
          "section-grid-content";
        column-gap: 1rem;
        container-type: inline-size;
        padding: 1rem;

        h2 {
          grid-area: section-grid-title;
          place-self: center;
          color: var(--section-grid-color);
        }
      }

      .list-grid {
        grid-area: section-grid-content;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        padding: unset;
        gap: 1rem;

        ul& {
          list-style-type: none;
        }

        .list-grid-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        dt {
          padding: unset;
          margin: unset;
        }
      }

      a {
        color: var(--section-grid-color);
      }

      p, dd {
        margin: unset;
        overflow-wrap: anywhere;
        align-self: center;
        padding-inline: 1rem;
      }

      header {
        grid-area: header;
        margin-inline: 1rem;
      }

      figure {
        grid-area: figure;
        place-self: center;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;

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
          color: var(--section-grid-color);
          background-color: var(--section-grid-background);
          padding: 0.5rem;
          border-radius: 1rem;
          font-style: italic;
          margin-block: 0.5rem;
        }
      }

      section {
        background-color: var(--section-grid-background);
        border-radius: 1rem;
        margin-inline-end: 1rem;
        color: var(--section-grid-color);

        &.bio {
          grid-area: bio;
        }

        &.education {
          grid-area: education;
        }

        &.contact-info {
          grid-area: contact-info;
        }

        &.links {
          grid-area: links;
        }
      }

      @container (min-width: 600px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure bio"
            "education education"
            "contact-info contact-info"
            "links links";
          gap: 1rem;

          grid-template-columns: fit-content(40%) 1fr;
        }

        .section-grid {
          grid-template-rows: min-content auto;
          grid-template-areas:
            "section-grid-title"
            "section-grid-content";
          column-gap: 1rem;
        }
      }

      @container (min-width: 900px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure bio"
            "contact-info education"
            "links links";
          gap: 1rem;

          grid-template-columns: fit-content(40%) 1fr;
        }

        .section-grid {
          grid-template-areas: "section-grid-title section-grid-content";
          grid-template-columns: auto 1fr;
          grid-template-rows: unset;
        }
      }

      @container (min-width: 1200px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure education"
            "contact-info links";
          gap: 1rem;

          grid-template-columns: fit-content(40%) 1fr;
        }

        .section-grid {
          grid-template-areas: "section-grid-title section-grid-content";
          grid-template-columns: auto 1fr;
          grid-template-rows: unset;
        }
      }

      @container (min-width: 1500px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure education"
            "figure contact-info"
            "figure links";

          gap: 1rem;

          grid-template-columns: fit-content(40%) 1fr;
        }
      }
    `,
  ];

  #renderDlList(contents: {method: string, htmlNoIcon: string[]}[]): TemplateResult {
    return html`
      <dl class="list-grid">
        ${
          contents.map((content) => html`
            <div class="list-grid-item">
              <dt class="md-typescale-title-medium">${content.method}</dt>
              ${
                content.htmlNoIcon.map((link) => html`
                  <dd class="md-typescale-body-large" .innerHTML=${link}></dd>
                `)
              }
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
        <h1 class="md-typescale-headline-large">Franco N. Colaizzi</h1>
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
        <figcaption class="md-typescale-label-large">${photoData.figcaption}</figcaption>
      </figure>
    `;
  }

  #renderBio(bio: string ): TemplateResult {
    return html`
      <section class="bio section-grid">
        <h2 class="md-typescale-headline-small">About Me</h2>
        <p class="md-typescale-body-large">${bio}</p>
      </section>
    `;
  }

  #renderEducation(education: { institute: string, degree: string, location: string, graduationDate: { value: string, label: string }}[]): TemplateResult {
    return html`
      <section class="education section-grid">
        <h2 class="md-typescale-headline-small">Education</h2>
        <ul class="list-grid">
          ${
            education.map((edu) => html`
              <li>
                <p class="md-typescale-title-medium">
                  ${edu.institute}<span class="md-typescale-body-medium">, ${edu.location}</span>
                </p>
                <p class="md-typescale-title-small">
                  ${edu.degree}<time class="md-typescale-body-medium" .dateTime=${edu.graduationDate.value}>, ${edu.graduationDate.label}</time>
                </p>
              </li>
            `)
          }
        </ul>
      </section>
    `;
  }

  #renderContactInfo(pointsOfContact: { method: string, htmlNoIcon: string[] }[]): TemplateResult {
    return html`
      <section class="contact-info section-grid">
        <h2 class="md-typescale-headline-small">Contact</h2>
        ${this.#renderDlList(pointsOfContact)}
      </section>
    `;
  }

  #renderLinks(links: { method: string, htmlNoIcon: string[] }[]): TemplateResult {
    return html`
      <section class="links section-grid">
        <h2 class="md-typescale-headline-small">Links</h2>
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

        ${this.#renderEducation(ProfileJson.education)}

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