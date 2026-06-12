import "@/components/info-section/info-section";
import "@/components/partial-header/partial-header";
import "@/components/word/word-cloud/word-cloud";
import { type Weights, type WordCloudWordCategory, makeWordCloudWord } from "@/components/word/word-cloud/word-cloud.types";
import BioJson from "@/data/bio.json" with { type: "json" };
import EducationJson from "@/data/education.json" with { type: "json" };
import SkillsJson from "@/data/skills.json" with { type: "json" };
import { themeService } from "@/services/theme/theme-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { THEME_CONFIGS } from "@/theme/theme";
import { type ColorSchemeConfigChange } from "@/types/theme/color-scheme-configs";
import { type ThemeConfig } from "@/types/theme/theme";
import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("info-partial")
export class InfoPartial extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        container-type: inline-size;
        display: block;
      }

      article {
        display: grid;
        gap: 1rem;
        grid-auto-rows: min-content;
        grid-template-areas:
          "header"
          "figure"
          "bio"
          "education"
          "cloud";
        grid-template-rows: min-content;
        height: min-content;
        padding-inline: 1rem;
      }

      .education-list-grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-evenly;
        padding: unset;
        place-self: center;

        ul& {
          list-style-type: none;
        }

        .education-list-grid-item {
          align-items: baseline;
          display: grid;
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
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        grid-area: figure;
        justify-content: flex-start;
        margin: unset;

        picture {
          display: grid;
        }

        img {
          border-radius: 1rem;
          height: auto;
          max-width: 100%;
          object-fit: scale-down;
          place-self: center;
        }

        figcaption {
          background-color: var(--md-sys-color-inverse-surface);
          border-radius: 1rem;
          color: var(--md-sys-color-inverse-on-surface);
          font-style: italic;
          margin-block: 0.5rem;
          padding: var(--spaces-padding-xs);
          text-align: center;
        }
      }

      .bio {
        grid-area: bio;

        [slot="section-grid-content"] {
          &::first-line {
            font-family: var(--md-ref-typeface-brand);
            font-size: var(--md-sys-typescale-headline-small-size);
            overflow-wrap: break-word;
            text-align: justify;
            text-indent: 0.5rem;
            text-justify: inter-word;
            white-space: pre-wrap;
          }

          @container (min-width: 500px) {
            column-gap: 2rem;
            column-rule: var(--md-sys-color-inverse-on-surface) solid var(--hairline-width);
            columns: 40cqi 2;
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
          gap: 1rem;
          grid-template-areas:
            "header header"
            "figure figure"
            "bio bio"
            "education education"
            "cloud cloud";
          grid-template-columns: auto 1fr;
        }
      }

      @media screen and (width >= 600px) {
        .education-list-grid {
          place-self: stretch;

          .education-list-grid-item {
            gap: 0.5rem;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);

            span:nth-child(2n - 1) {
              border-block-end: 0.1rem solid currentcolor;
              border-inline-end: 0.1rem solid currentcolor;
              justify-self: flex-end;
              padding-block-end: 0.25rem;
              padding-inline: 0.5rem 0.25rem;
              text-align: end;
            }
          }
        }
      }

      @container (min-width: 900px) {
        article {
          grid-auto-rows: auto;
          grid-template-areas:
            "header header"
            "figure bio"
            "figure education"
            "cloud cloud";
          grid-template-columns: fit-content(40%) minmax(0, 1fr);
          grid-template-rows: minmax(auto, min-content);
        }
      }

      @container (min-width: 1200px) {
        article {
          grid-auto-rows: auto;
          grid-template-areas:
            "header header"
            "figure bio"
            "figure education"
            "cloud cloud";
          grid-template-columns: fit-content(40%) minmax(0, 1fr);
          grid-template-rows: minmax(auto, min-content);
        }
      }

      @container (min-width: 1500px) {
        article {
          grid-auto-rows: min-content;
          grid-template-areas:
            "header   header         header         header"
            "figure   bio            bio            bio"
            "figure   education      education      education"
            "cloud    cloud          cloud          cloud";
          grid-template-columns:
            fit-content(30%) minmax(0, 1fr) minmax(0, 1fr)
            minmax(0, 1fr);
          grid-template-rows: minmax(auto, min-content);
        }
      }
    `,
  ];

  @state()
  private themeConfig: ThemeConfig = themeService.currentThemeConfig();

  private onColorConfigsChange = ((event: Event) => {
    const customEvent = event as ColorSchemeConfigChange;
    this.themeConfig = THEME_CONFIGS[customEvent.detail.theme];
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

        <info-section
          class="bio"
          section-title="Bio"
        >
          <p
            slot="section-grid-content"
            class="md-typescale-body-large"
          >
            ${BioJson.bio}
          </p>
        </info-section>

        <info-section
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
        </info-section>

        <info-section
          class="cloud"
          section-title="Skills"
        >
          <word-cloud
            slot="section-grid-content"
            .words=${words}
            instant-clear
            grouping="quartile"
            sorting="by-alphabet"
            appearance="sequential"
            delay="150"
            threshold="0.1"
          ></word-cloud>
        </info-section>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "info-partial": InfoPartial;
  }
}
