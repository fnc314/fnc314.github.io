import { configsService } from "@/services/configs";
import { MaterialTypescaleStyles } from "@/styles";
import { type AppConfigsChange, CONFIG_COLOR_SCHEME_NAMES } from "@/types";
import { type BlogPostJson } from "@/types/components/blog/blog-post";
import { LitElement, css, html } from "lit-element";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { customElement, property, state } from "lit/decorators.js";

/**
 * @summary Represents a published blog record, linking to the artifact
 *
 * @property {BlogPostJson} [blogPost={}] - The {@link BlogPostJson} record to render
 *
 * @cssprop --blog-post-animation - The duration of the animation for \`:focus\`, \`:hover\`,
 *   \`:focus-within\`, and \`:focus-visible\` states
 * @cssprop --blog-post-primary-text-color - The color of the primary text
 * @cssprop --blog-post-container-color - The color of the container, {@link MdElevatedCard}
 *   and {@link --md-elevated-card-container-color}
 * @cssprop --blog-post-word-tag-container-color - The color of the container, {@link WordTag}
 *
 * @see BlogPostJson
 * @export
 * @class BlogPost
 * @extends {LitElement}
 */
@customElement("blog-post")
export class BlogPost extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        container-type: inline-size;

        /**
         * @cssprop --blog-post-animation - The duration of the animation for \`:focus\`, \`:hover\`,
         *   \`:focus-within\`, and \`:focus-visible\` states
         */
        --blog-post-animation: 150ms;

        /**
         * @cssprop --blog-post-primary-text-color - The color of the primary text
         */
        --blog-post-primary-text-color: var(--md-sys-color-on-primary-container);

        /**
         * @cssprop --blog-post-secondary-text-color - The color of the secondary text
         */
        --blog-post-secondary-text-color: var(--md-sys-color-on-primary);
        --word-tag-color: var(--blog-post-secondary-text-color);

        /**
         * @cssprop --blog-post-container-color - The color of the container, {@link md-elevated-card}
         *   and {@link --md-elevated-card-container-color}
         */
        --blog-post-container-color: var(--md-sys-color-primary-container);
        --md-elevated-card-container-color: var(--blog-post-container-color);

        /**
         * @cssprop --blog-post-word-tag-container-color - The color of the container, {@link word-tag}
         */
        --blog-post-word-tag-container-color: var(--md-sys-color-primary);
        --word-tag-background-color: var(--blog-post-word-tag-container-color);

        transition:
          --blog-post-primary-text-color var(--blog-post-animation) ease-in-out,
          --blog-post-secondary-text-color var(--blog-post-animation) ease-in-out,
          --blog-post-container-color var(--blog-post-animation) ease-in-out,
          --blog-post-word-tag-container-color var(--blog-post-animation) ease-in-out,
          --word-tag-color var(--blog-post-animation) ease-in-out,
          --word-tag-background-color var(--blog-post-animation) ease-in-out;

        :hover,
        :focus,
        :focus-visible,
        :focus-within {
          --blog-post-primary-text-color: var(--md-sys-color-on-primary);
          --blog-post-container-color: var(--md-sys-color-primary);
          --md-elevated-card-container-color: var(--blog-post-container-color);
          --blog-post-secondary-text-color: var(--md-sys-color-on-primary-container);
          --word-tag-color: var(--blog-post-secondary-text-color);
          --blog-post-word-tag-container-color: var(--md-sys-color-primary-container);
          --word-tag-background-color: var(--blog-post-word-tag-container-color);
        }

        @media (prefers-reduced-motion: reduce) {
          --blog-post-animation: 0ms;

          transition: all 0ms ease-in-out;
        }
      }

      a {
        display: contents;
        color: currentcolor;
      }

      md-elevated-card {
        --md-elevated-card-container-elevation: 2;
        --md-elevated-card-container-shape: var(--md-sys-shape-corner-medium);

        container-type: inline-size;
        color: var(--blog-post-primary-text-color);
        padding: 1.5rem;
        transition:
          transform var(--blog-post-animation) ease-in-out,
          color var(--blog-post-animation) ease-in-out,
          --md-elevated-card-container-elevation var(--blog-post-animation) ease-in-out,
          --md-elevated-card-container-shape var(--blog-post-animation) ease-in-out,
          --md-elevated-card-container-color var(--blog-post-animation) ease-in-out;

        &:hover,
        &:focus,
        &:focus-visible,
        &:focus-within {
          --md-elevated-card-container-elevation: 4;
          --md-elevated-card-container-shape: var(--md-sys-shape-corner-large);

          transform: translateY(var(--hover-focus-animation-translate-y));
        }
      }

      section {
        display: grid;
        grid-template-areas:
          "icon header  header"
          ".    header  header"
          ".    summary summary"
          ".    tags    tags";
        grid-template-columns: 0.25fr 1fr 0.5fr;
        gap: 0.5rem;

        & > img {
          grid-area: icon;
          width: calc(2 * var(--md-icon-size));
          height: auto;
          aspect-ratio: 1;
          place-self: center;
        }

        header {
          grid-area: header;
          display: grid;
          grid-template-columns: subgrid;
          grid-template-rows: subgrid;
        }

        h2 {
          grid-row: 1 / 2;
          grid-column: 1 / -1;
          margin: 0;
        }

        h3 {
          grid-row: 2 / 3;
          grid-column: 1 / -1;
          margin: 0;
        }

        & > p {
          grid-area: summary;
        }

        & > ul.tags {
          grid-area: tags;
          display: flex;
          flex-flow: row wrap;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }

        @container (width > 600px) {
          grid-template-areas:
            "icon header  header  tags"
            ".    header  header  tags"
            ".    summary summary tags";

          & > ul.tags {
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    `,
  ];

  @property({ type: Object })
  blogPost: BlogPostJson = {} as BlogPostJson;

  @state()
  private darkMode = configsService.loadConfigs().colorScheme.name === CONFIG_COLOR_SCHEME_NAMES.DARK;

  private onAppConfigChange: (event: Event) => void = (event: Event) => {
    const appConfigsChange = event as AppConfigsChange;
    this.darkMode = appConfigsChange.detail?.appConfigs?.colorScheme?.name === CONFIG_COLOR_SCHEME_NAMES.DARK;
  };

  constructor() {
    super();
  }

  override connectedCallback(): void {
    super.connectedCallback();
    configsService.addEventListener("app-configs.change", this.onAppConfigChange);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    configsService.removeEventListener("app-configs.change", this.onAppConfigChange);
  }

  override render() {
    return html`
      <md-elevated-card>
        <a
          href=${ifDefined(this.blogPost.mediumUrl)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <section>
            <img
              loading="lazy"
              role="img"
              alt="Medium logo"
              .src=${`./assets/icons/brand/medium/medium-${this.darkMode ? "light" : "dark"}.svg`}
            />
            <header>
              <h2 class="md-typescale-headline-large">${this.blogPost.series}</h2>
              <h3 class="md-typescale-title-medium">${this.blogPost.title}</h3>
            </header>
            <p class="md-typescale-body-medium">${this.blogPost.summary}</p>
            <ul class="tags">
              ${this.blogPost.tags?.map((tag) => html` <li><word-tag .word=${tag}></word-tag></li> `)}
            </ul>
          </section>
        </a>
      </md-elevated-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "blog-post": BlogPost;
  }
}
