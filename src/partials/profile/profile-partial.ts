import { makeWordCloudWord, WordCloudWordCategory } from "@/components/word-cloud/word-cloud";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { css, html, LitElement, TemplateResult } from "lit-element";
import { customElement } from "lit/decorators.js";
import ProfileJson from "./profile.json" with { type: "json" };

@customElement("profile-partial")
export class ProfilePartial extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        container-type: inline-size;

        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);

      }

      article {
        display: grid;
        grid-template-areas:
          "header"
          "figure"
          "bio"
          "contact-info"
          "links"
          "cloud";
        height: min-content;
        min-height: 100%;
        grid-template-rows: auto;
        grid-auto-rows: auto;
        gap: 1rem;
        padding-inline: 1rem;
      }

      .list-grid {
        align-self: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: baseline;
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
        color: var(--md-sys-color-inverse-on-surface);
      }

      p,
      dd {
        margin: unset;
        overflow-wrap: anywhere;
        padding-inline: 1rem;
      }

      partial-header {
        grid-area: header;
        margin: unset;
      }

      figure {
        grid-area: figure;
        place-self: center;
        margin: unset;
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
          color: var(--md-sys-color-inverse-on-surface);
          background-color: var(--md-sys-color-inverse-surface);
          padding: 0.5rem;
          border-radius: 1rem;
          font-style: italic;
          margin-block: 0.5rem;
        }
      }

      /* Apply grid-area to the custom elements by class */
      .bio {
        grid-area: bio;

        > p {
          place-self: center;
        }
      }
      .education {
        grid-area: education;

        li p {
          place-self: end;
        }
      }
      .contact-info {
        grid-area: contact-info;
      }
      .links {
        grid-area: links;
      }
      .cloud {
        grid-area: cloud;
      }

      @container (min-width: 600px) {
        article {
          grid-template-areas:
            "header"
            "figure"
            "bio"
            "contact-info"
            "links"
            "cloud"
            ;
          gap: 1rem;
          grid-auto-rows: auto;
          grid-template-columns: 1fr;
        }
      }

      @container (min-width: 900px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure bio"
            "figure contact-info"
            "links links"
            "cloud cloud"
            ;
          grid-template-rows: minmax(auto, min-content);
          grid-auto-rows: auto;
          grid-template-columns: fit-content(40%) minmax(0, 1fr);
        }
      }

      @container (min-width: 1200px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure contact-info"
            "figure links"
            "cloud cloud"
            ;
          grid-template-rows: minmax(auto, min-content);
          grid-auto-rows: auto;
          grid-template-columns: fit-content(40%) minmax(0, 1fr);
        }
      }

      @container (min-width: 1500px) {
        article {
          grid-template-areas:
            "header   header         header         header"
            "figure   bio            bio            bio"
            "figure   contact-info   contact-info   contact-info"
            "figure   links          links          links"
            "cloud    cloud          cloud          cloud"
            ;
          grid-template-columns: fit-content(30%) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
          grid-auto-rows: min-content;
          grid-template-rows: minmax(auto, min-content);
        }
      }
    `,
  ];

  constructor() {
    super();
  }

  #renderDlList(
    contents: { method: string; htmlNoIcon: string[] }[],
  ): TemplateResult {
    return html`
      <dl class="list-grid">
        ${contents.map(
          (content) => html`
            <div class="list-grid-item">
              <dt class="md-typescale-title-medium">${content.method}</dt>
              ${content.htmlNoIcon.map(
                (link) => html`
                  <dd
                    class="md-typescale-body-large"
                    .innerHTML=${link}
                  ></dd>
                `,
              )}
            </div>
          `,
        )}
      </dl>
    `;
  }

  #renderFigureElement(photoData: {
    src: string;
    alt: string;
    figcaption: string;
  }): TemplateResult {
    return html`
      <figure>
        <picture>
          <source
            srcset=${photoData.src}
            type="image/jpeg"
          />
          <img
            src=${photoData.src}
            alt=${photoData.alt}
          />
        </picture>
        <figcaption class="md-typescale-label-large">
          ${photoData.figcaption}
        </figcaption>
      </figure>
    `;
  }

  // #renderConnections(
  //   links: { method: string, htmlNoIcon: string[], mdIcon: string }[],
  //   pointsOfContact: { method: string, htmlNoIcon: string[], mdIcon: string }[]
  // ): TemplateResult {
  //   const connections = [
  //     ...links,
  //     ...pointsOfContact
  //   ].map((connection) => makeProfileConnection(
  //     connection.method,
  //     (connection.method === "Resume" ? "document" : (links.indexOf(connection) !== -1 ? "website" : "direct")),
  //     connection.htmlNoIcon,
  //     connection.mdIcon,
  //   ));

  //   return html`<profile-connections .connections=${connections}></profile-connections></profile-connections>`;
  // }

  #renderCloud(): TemplateResult {
    const words = Object.keys(ProfileJson.proficiencies).flatMap((proficency) =>
      Object.entries(
        ProfileJson.proficiencies[
          proficency as keyof typeof ProfileJson.proficiencies
        ],
      ).map(([word, weight]) =>
        makeWordCloudWord(word, weight, proficency as WordCloudWordCategory),
      ),
    );
    return html`
      <profile-section
        class="cloud"
        section-title="Skills"
      >
        <word-cloud
          slot="section-grid-content"
          .words=${words}
        ></word-cloud>
      </profile-section>
    `;
  }

  override render() {
    // const education = html`
    //   <profile-section
    //     class="education"
    //     section-title="Education">
    //     <ul class="list-grid" slot="section-grid-content">
    //       ${
    //         ProfileJson.education.map((edu) => html`
    //           <li>
    //             <p class="md-typescale-title-medium">
    //               ${edu.institute}<span class="md-typescale-body-medium">, ${edu.location}</span>
    //             </p>
    //             <p class="md-typescale-title-small">
    //               ${edu.degree}<time class="md-typescale-body-medium" .dateTime=${edu.graduationDate.value}>, ${edu.graduationDate.label}</time>
    //             </p>
    //           </li>
    //         `)
    //       }
    //     </ul>
    //   </profile-section>
    // `;
    return html`
      <article>
        <partial-header .headingText=${"Franco N. Colaizzi"}></partial-header>

        ${this.#renderFigureElement(ProfileJson.photo)}

        <profile-section
          class="bio"
          section-title="Bio"
        >
          <p
            slot="section-grid-content"
            class="md-typescale-body-large"
          >
            ${ProfileJson.bio}
          </p>
        </profile-section>

        <profile-section
          class="contact-info"
          section-title="Contact"
        >
          <div slot="section-grid-content">
            ${this.#renderDlList(ProfileJson.contactInfo)}
          </div>
        </profile-section>

        <profile-section
          class="links"
          section-title="Links"
        >
          <div slot="section-grid-content">
            ${this.#renderDlList(ProfileJson.links)}
          </div>
        </profile-section>

        ${this.#renderCloud()}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-partial": ProfilePartial;
  }
}
