import { makeWordCloudWord, WordCloudWordCategory } from "@/components/word-cloud/word-cloud";
import BioJson from "@/data/bio.json" with { type: "json" };
import EducationJson from "@/data/education.json" with { type: "json" };
import PhotoJson from "@/data/photo.json" with { type: "json" };
import SkillsJson from "@/data/skills.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { css, html, LitElement } from "lit-element";
import { customElement } from "lit/decorators.js";

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
          "education"
          "cloud"
          ;
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
      profile-section {
        align-self: center;
      }
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
      .cloud {
        grid-area: cloud;
      }

      @container (min-width: 600px) {
        article {
          grid-template-areas:
            "header header"
            "figure figure"
            "bio bio"
            "education education"
            "cloud cloud"
            ;
          gap: 1rem;
          grid-template-columns: auto 1fr;
        }
      }

      @container (min-width: 900px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure education"
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
            "figure education"
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
            "figure   education      education      education"
            "figure   cloud          cloud          cloud"
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

  override render() {
    const words = Object.keys(SkillsJson.skills).flatMap((proficency) =>
      Object.entries(
        SkillsJson.skills[
          proficency as keyof typeof SkillsJson.skills
        ],
      ).map(([word, weight]) =>
        makeWordCloudWord(word, weight, proficency as WordCloudWordCategory),
      ),
    );
    return html`
      <article>
        <partial-header
          .headingText=${"Franco N. Colaizzi"}>
        </partial-header>

        <figure>
          <picture>
            <source
              srcset=${PhotoJson.photo.src}
              type="image/jpeg"
            />
            <img
              src=${PhotoJson.photo.src}
              alt=${PhotoJson.photo.alt}
            />
          </picture>
          <figcaption class="md-typescale-label-large">
            ${PhotoJson.photo.figcaption}
          </figcaption>
        </figure>

        <profile-section
          class="bio"
          section-title="Bio"
        >
          <p
            slot="section-grid-content"
            class="md-typescale-body-large"
          >
            ${BioJson.bio}
          </p>
        </profile-section>

        <profile-section
          class="education"
          section-title="Education">
          <ul class="list-grid" slot="section-grid-content">
            ${
              EducationJson.education.map((edu) => html`
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
        </profile-section>

        <profile-section
          class="cloud"
          section-title="Skills"
        >
          <word-cloud
            slot="section-grid-content"
            .words=${words}
          ></word-cloud>
        </profile-section>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-partial": ProfilePartial;
  }
}
