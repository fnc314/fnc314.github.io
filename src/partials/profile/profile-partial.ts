import "@/components/partial-header/partial-header";
import "@/components/profile-section/profile-section";
import "@/components/word-cloud/word-cloud";
import BioJson from "@/data/bio.json" with { type: "json" };
import EducationJson from "@/data/education.json" with { type: "json" };
import SkillsJson from "@/data/skills.json" with { type: "json" };
import { themeService } from "@/services/theme";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { THEME_CONFIGS } from "@/theme/theme";
import { Weights, WordCloudWordCategory, makeWordCloudWord } from "@/types/components/word-cloud/word-cloud";
import { ColorSchemeConfigChange } from "@/types/theme/color-scheme-configs";
import { type ThemeConfig } from "@/types/theme/theme";
import { LitElement, css, html } from "lit-element";
import { customElement, state } from "lit/decorators.js";

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
          "cloud";
        height: min-content;
        min-height: 100%;
        grid-template-rows: auto;
        grid-auto-rows: auto;
        gap: 1rem;
        padding-inline: 1rem;
      }

      .education-list-grid {
        place-self: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: unset;
        gap: 1rem;

        ul& {
          list-style-type: none;
        }

        .education-list-grid-item {
          display: grid;
          align-items: baseline;
          grid-template-rows: repeat(4, 1fr);
        }
      }

      a {
        color: var(--md-sys-color-inverse-on-surface);
      }

      partial-header {
        grid-area: header;
        margin: unset;
      }

      .figure {
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
        /* align-self: center; */
      }

      .bio {
        grid-area: bio;

        [slot="section-grid-content"] {
          &::first-line {
            white-space: pre-wrap;
            word-wrap: break-word;
            text-align: justify;
            text-justify: inter-word;
            font-size: 130%;
            text-indent: 0.5rem;
            font-family: var(--md-ref-typeface-brand);
          }

          @container (min-width: 500px) {
            column-count: 2;
            column-gap: 2rem;
            column-rule: var(--md-sys-color-inverse-on-surface) solid var(--hairline-width);
            column-width: 40cqi;
          }
        }
      }

      .education {
        grid-area: education;
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
            "cloud cloud";
          gap: 1rem;
          grid-template-columns: auto 1fr;
        }
      }

      @media screen and (min-width: 600px) {
        .education-list-grid {
          place-self: stretch;

          .education-list-grid-item {
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;

            span:nth-child(2n - 1) {
              justify-self: flex-end;
              text-align: end;
              border-inline-end: 0.1rem solid currentColor;
              border-block-end: 0.1rem solid currentColor;
              padding-inline: 0.5rem 0.25rem;
              padding-block-end: 0.25rem;
            }
          }
        }
      }

      @container (min-width: 900px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "education education"
            "cloud cloud";
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
            "cloud cloud";
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
            "cloud   cloud          cloud          cloud";
          grid-template-columns:
            fit-content(30%) minmax(0, 1fr) minmax(0, 1fr)
            minmax(0, 1fr);
          grid-auto-rows: min-content;
          grid-template-rows: minmax(auto, min-content);
        }
      }
    `,
  ];

  @state()
  private themeConfig: ThemeConfig = themeService.currentThemeConfig();

  private onColorConfigsChange = ((event: ColorSchemeConfigChange) => {
    this.themeConfig = THEME_CONFIGS[event.detail.theme];
  }).bind(this);

  constructor() {
    super();
  }

  override connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("color_scheme.change", this.onColorConfigsChange);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("color_scheme.change", this.onColorConfigsChange);
  }

  override render() {
    const words = Object.keys(SkillsJson.skills).flatMap((proficency) =>
      Object.entries(SkillsJson.skills[proficency as keyof typeof SkillsJson.skills]).map(([word, weight]) =>
        makeWordCloudWord(word, weight as Weights, proficency as WordCloudWordCategory),
      ),
    );
    return html`
      <article>
        <partial-header .headingText=${"Franco N. Colaizzi"}> </partial-header>

        <figure class="figure">
          <picture>
            <source
              srcset=${this.themeConfig.themePhoto.src}
              type="image/jpeg"
            />
            <img
              loading="lazy"
              src=${this.themeConfig.themePhoto.src}
              alt=${this.themeConfig.themePhoto.alt}
            />
          </picture>
          <figcaption class="md-typescale-label-large">${this.themeConfig.themePhoto.figcaption}</figcaption>
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
          section-title="Education"
        >
          <ul
            class="education-list-grid"
            slot="section-grid-content"
          >
            ${EducationJson.education.map(
              (edu) => html`
                <li class="education-list-grid-item">
                  <span class="md-typescale-title-medium">${edu.institute}</span>

                  <span class="md-typescale-body-medium">${edu.location}</span>

                  <span class="md-typescale-title-small">${edu.degree}</span>

                  <time
                    class="md-typescale-body-medium"
                    .dateTime=${edu.graduationDate.value}
                  >
                    ${edu.graduationDate.label}
                  </time>
                </li>
              `,
            )}
          </ul>
        </profile-section>

        <profile-section
          class="cloud"
          section-title="Skills"
        >
          <word-cloud
            slot="section-grid-content"
            .words=${words}
            instant-clear
            grouping="category"
            sorting="by-weight"
            appearance="simultaneous"
            delay="150"
            threshold="0.1"
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
