import { ParialHeadingStyles, typescaleStyles } from "@/styles/partial-styles";
import { css, html, LitElement, PropertyValues, TemplateResult } from "lit-element";
import { createRef, ref, Ref } from "lit-html/directives/ref.js";
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

        min-height: 100dvh;
      }

      article {
        display: grid;
        grid-template-areas:
          "header"
          "figure"
          "bio"
          "education"
          "contact-info"
          "links";
        grid-template-rows: auto;
        grid-auto-rows: 1fr;
        gap: 1rem;
        padding: 1rem;
      }

      .section-grid {
        display: grid;
        grid-template-rows: min-content minmax(min-content, 1fr);
        grid-template-areas:
          "section-grid-title"
          "section-grid-content";
        gap: 1rem;
        container-type: size;
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
        place-self: center;
        padding-inline: 1rem;
      }

      header {
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
        color: var(--section-grid-color);

        &.bio {
          grid-area: bio;

          > p {
            grid-area: section-grid-content;
          }
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

        &.cloud {
          grid-area: cloud;

          .cloud-container {
            grid-area: section-grid-content;
            outline: 1px solid red;
            min-height: 100%;
            position: relative;
            /* display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(25ch, 100%), 1fr)); */

            & span:nth-child(n) {
              transform: rotate(45deg);
            }

            & span:nth-child(2n) {
              transform: rotate(-45deg);
            }

            & span:nth-child(3n) {
              transform: rotate(50deg);
            }

            & span:nth-child(4n) {
              transform: rotate(-20deg);
            }

            & span:nth-child(5n) {
              transform: rotate(90deg);
            }

            & span:nth-child(6n) {
              transform: rotate(-30deg);
            }

            & span:nth-child(7n) {
              transform: rotate(20deg);
            }

            .tech, .practice {
              -webkit-text-stroke: 0.1px black;
              /* font-size: calc(6cqi / ((var(--weight)) + 1 + 2cqb)); */
              font-size: var(--md-sys-typescale-body-large-size) * var(--weight);
              color: var(--color);
              //line-height: calc(calc(6cqi / ((var(--weight)) + 1 + 2cqb)) * 1.2);
            }
          }
        }
      }

      @container (min-width: 600px) {
        article {
          grid-template-areas:
            "header"
            "figure"
            "bio"
            "education"
            "contact-info"
            "links";
          gap: 1rem;
          grid-template-rows: auto;
          grid-auto-rows: 1fr;
          grid-template-columns: 1fr;
        }

        .section-grid {
          grid-template-areas:
            "section-grid-title"
            "section-grid-content";
          grid-template-rows: min-content 1fr;
        }
      }

      @container (min-width: 900px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure bio"
            "education contact-info"
            "links links";
          gap: 1rem;
          grid-template-rows: auto;
          grid-auto-rows: 1fr;
          grid-template-columns: fit-content(40%) 1fr;
        }

        .section-grid {
          grid-template-areas:
            "section-grid-title"
            "section-grid-content";
          column-gap: 1rem;
          grid-template-rows: min-content 1fr;
        }
      }

      @container (min-width: 1200px) {
        article {
          grid-template-areas:
            "header header"
            "figure bio"
            "figure bio"
            "figure education"
            "figure contact-info"
            "figure links";
          gap: 1rem;
          grid-template-rows: auto;
          grid-auto-rows: 1fr;
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
            "figure bio"
            "figure education"
            "figure contact-info"
            "figure links";

          gap: 1rem;
          grid-template-rows: auto;
          grid-auto-rows: 1fr;
          grid-template-columns: fit-content(40%) 1fr;
        }

        .section-grid {
          grid-template-areas: "section-grid-title section-grid-content";
          grid-template-columns: auto 1fr;
          grid-template-rows: unset;
        }
      }
    `,
  ];

  #cloudContainer: Ref<HTMLDivElement> = createRef();
  #cloudSection: Ref<HTMLSectionElement> = createRef();
  // #cloudCanvas: Ref<HTMLCanvasElement> = createRef();

  // #cloudList: [string, number, string][] = Object.keys(ProfileJson.proficiencies)
  //   .flatMap((profKey) =>
  //     (Object.entries(ProfileJson.proficiencies[profKey as keyof typeof ProfileJson.proficiencies]) as [string, number][])
  //       .map((collection: [string, number]) =>
  //         [...collection, profKey]
  //       )
  //   ) as [string, number, string][];

  // #materialColorVars: string[] = [
  //   "primary",
  //   "surface-tint",
  //   "primary-container",
  //   "on-primary-container",
  //   "secondary",
  //   "secondary-container",
  //   "on-secondary-container",
  //   "tertiary",
  //   "tertiary-container",
  //   "on-tertiary-container",
  //   "error",
  //   "error-container",
  //   "on-error-container",
  //   "on-background",
  //   "on-surface",
  //   "surface-variant",
  //   "on-surface-variant",
  //   "outline",
  //   "outline-variant",
  //   "inverse-surface",
  //   "inverse-primary",
  //   // "primary-fixed",
  //   "on-primary-fixed",
  //   "primary-fixed-dim",
  //   "on-primary-fixed-variant",
  //   // "secondary-fixed",
  //   "on-secondary-fixed",
  //   "secondary-fixed-dim",
  //   "on-secondary-fixed-variant",
  //   "tertiary-fixed",
  //   "on-tertiary-fixed",
  //   "tertiary-fixed-dim",
  //   "on-tertiary-fixed-variant",
  // ].map((color) => `--color: var(--md-sys-color-${color})`);

  // #colorList: CSSResult[] = [
  //   "primary",
  //   "surface-tint",
  //   "primary-container",
  //   "on-primary-container",
  //   "secondary",
  //   "secondary-container",
  //   "on-secondary-container",
  //   "tertiary",
  //   "tertiary-container",
  //   "on-tertiary-container",
  //   "error",
  //   "error-container",
  //   "on-error-container",
  //   "on-background",
  //   "on-surface",
  //   "surface-variant",
  //   "on-surface-variant",
  //   "outline",
  //   "outline-variant",
  //   "inverse-surface",
  //   "inverse-primary",
  //   "primary-fixed",
  //   "on-primary-fixed",
  //   "primary-fixed-dim",
  //   "on-primary-fixed-variant",
  //   "secondary-fixed",
  //   "on-secondary-fixed",
  //   "secondary-fixed-dim",
  //   "on-secondary-fixed-variant",
  //   "tertiary-fixed",
  //   "on-tertiary-fixed",
  //   "tertiary-fixed-dim",
  //   "on-tertiary-fixed-variant",
  // ]
  //   .map((color) => unsafeCSS(`var(--md-sys-color-${color})`))
  //   .map((_color, index) =>  css`
  //     .cloud-container span:nth-child(${index}) {
  //       color: ${_color} !important;
  //       -webkit-text-stroke: 1px black;
  //     }
  //   `);

  constructor() {
    super();
  }

  protected override async firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    // this.#cloudList.map(([word, weight, category]: [string, number, string], index: number) => {
    //   const span = document.createElement("span");
    //   span.innerText = word;
    //   span.classList.add(category);
    //   span.setAttribute("style", `--weight: ${weight/10}; ${this.#materialColorVars.at(Math.floor(Math.random() * this.#materialColorVars.length)) ?? ""}`);
    //   span.style.marginBlockStart = `-${(weight * Math.random() * Math.random() * Math.random())}rem`;
    //   span.style.writingMode = (Math.random() > 0.8 && weight > 3) ? "vertical-rl" : "horizontal-tb";
    //   return span;
    // }).forEach((span, index) => this.#cloudContainer.value?.appendChild(span))
    // if (this.#cloudContainer.value && this.#cloudSection.value /* && this.#cloudCanvas.value */) {
    //   const sectionRect = this.#cloudSection.value.getClientRects()[0];
    //   const containerRect = this.#cloudContainer.value.getClientRects()[0];

    //   const x = (containerRect.right - containerRect.left) / 2;
    //   const y = containerRect.height > 0 ? (containerRect.bottom - containerRect.top) / 2 : (sectionRect.bottom - sectionRect.top) / 2;

    //   const config: WordCloud.Options = {
    //     list: this.#cloudList,
    //     fontFamily: "Roboto",
    //     backgroundColor: "transparent",
    //     weightFactor: (weight: number) => 2 * weight,
    //     minRotation: -Math.PI,
    //     maxRotation: Math.PI,
    //     rotateRatio: 0.5,
    //     shuffle: true,
    //     shrinkToFit: true,
    //     drawOutOfBound: true,
    //     // origin: [sectionRect.width / 2, sectionRect.height * 2],
    //     classes: (word: string, weight: string | number, fontSize: number, extraData: string | number) =>
    //       `word-${word} weight-${weight} fontSize-${fontSize} ${extraData}`,
    //     // color: (word: string, weight: string | number, fontSize: number, distance: number, theta: number) => "random-light",

    //     // shape: "circle",
    //     shape: (theta: number) => {
    //       console.info(`THETA ${theta}`);
    //       return 1 - (Math.cos(theta / 2) ** 2);
    //     }
    //   };

    //   console.info(JSON.stringify({ config, sectionRect, containerRect }, null, 2));


    //   WordCloud(
    //     this.#cloudContainer.value,
    //     config
    //   );
    //   this.#colorList
    //     .map((css) => css.styleSheet)
    //     .filter((css) => css !== undefined)
    //     .forEach((css) => this.shadowRoot?.adoptedStyleSheets.push(css))
    // }
  }

  #renderDlList(contents: { method: string, htmlNoIcon: string[] }[]): TemplateResult {
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

  #renderEducation(education: { institute: string, degree: string, location: string, graduationDate: { value: string, label: string } }[]): TemplateResult {
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

  #renderCloud(): TemplateResult {
    return html`
      <section ${ref(this.#cloudSection)} class="cloud section-grid">
        <h2 class="md-typescale-headline-small">Skills</h2>
        <div class="cloud-container" ${ref(this.#cloudContainer)}></div>
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

        <!-- ${this.#renderCloud()} -->

      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-partial": ProfilePartial;
  }
};