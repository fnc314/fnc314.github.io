import { type BlogPostJson } from "@/components/blog/blog-post.types";
import { configsService } from "@/services/configs/configs-service";
import { MaterialTypescaleStyles } from "@/styles";
import { InteractionStyles } from "@/styles/interaction-styles";
import { type AppConfigsChange } from "@/types/configs/app-configs";
import { CONFIG_COLOR_SCHEME_NAMES } from "@/types/theme/color-scheme-configs";
import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
export { type BlogPostJson } from "@/components/blog/blog-post.types";

/**
 * @summary Represents a published blog record, linking to the artifact
 *
 * @property {BlogPostJson} [blogPost={}] - The {@link BlogPostJson} record to render
 *
 * @cssprop --blog-post-animation - The duration of the animation for \`:focus\`, \`:hover\`,
 *   \`:focus-within\`, and \`:focus-visible\` states
 * @cssprop --blog-post-primary-text-color - The color of the primary text
 * @cssprop --blog-post-container-color - The color of the container, {@link @material/web!MdElevatedCard}
 *   and {@link @material/web!--md-elevated-card-container-color}
 *
 * @see BlogPostJson
 * @export
 * @class BlogPost
 * @extends {LitElement}
 */
@customElement("blog-post")
export class BlogPost extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    InteractionStyles,
    css`
      :host {
        /**
         * @cssprop --blog-post-animation - The duration of the animation for \`:focus\`, \`:hover\`,
         *   \`:focus-within\`, and \`:focus-visible\` states
         */
        --blog-post-animation: var(--motion-duration-short);

        /**
         * @cssprop --blog-post-primary-text-color - The color of the primary text
         */
        --blog-post-primary-text-color: var(--md-sys-color-on-secondary-container);

        /**
         * @cssprop --blog-post-secondary-text-color - The color of the secondary text
         */
        --blog-post-secondary-text-color: var(--md-sys-color-on-secondary);

        /**
         * @cssprop --blog-post-container-color - The color of the container, {@link @material/web!md-elevated-card}
         *   and {@link @material/web!--md-elevated-card-container-color}
         */
        --blog-post-container-color: var(--md-sys-color-secondary-container);
        --md-elevated-card-container-color: var(--blog-post-container-color);

        /**
         * @cssprop --blog-post-header-divider-color - The color for the {@link @material/web!MdDivider} used in the \`<header>\`
         *   element of the \`blog-post\`.  Defaults to \`--blog-post-primary-text-color\`
         */
        --blog-post-header-divider-color: var(--blog-post-primary-text-color);

        container-type: inline-size;
        display: block;
        transition:
          --blog-post-primary-text-color var(--blog-post-animation) var(--motion-easing-base),
          --blog-post-secondary-text-color var(--blog-post-animation) var(--motion-easing-base),
          --blog-post-container-color var(--blog-post-animation) var(--motion-easing-base),
          --blog-post-header-divider-color var(--blog-post-animation) var(--motion-easing-base);

        :hover,
        :focus,
        :focus-visible,
        :focus-within {
          --blog-post-primary-text-color: var(--md-sys-color-on-secondary);
          --blog-post-header-divider-color: var(--blog-post-primary-text-color);
          --blog-post-container-color: var(--md-sys-color-secondary);
          --md-elevated-card-container-color: var(--blog-post-container-color);
          --blog-post-secondary-text-color: var(--md-sys-color-on-secondary-container);
        }

        @media (prefers-reduced-motion: reduce) {
          --blog-post-animation: 0ms;

          transition: all 0ms var(--motion-easing-base);
        }
      }

      a {
        color: var(--blog-post-primary-text-color);
      }

      md-elevated-card {
        --md-elevated-card-container-elevation: var(--motion-elevation-level-1);
        --md-elevated-card-container-shape: var(--md-sys-shape-corner-medium);
        --md-divider-color: var(--blog-post-header-divider-color);

        color: var(--blog-post-primary-text-color);
        container-type: inline-size;
        margin: var(--spacing-margin-xxs);
        padding: var(--spacing-padding-m);
        transition:
          transform var(--blog-post-animation) var(--motion-easing-emphasized),
          color var(--blog-post-animation) var(--motion-easing-base),
          --md-elevated-card-container-elevation var(--blog-post-animation) var(--motion-easing-base),
          --md-elevated-card-container-shape var(--blog-post-animation) var(--motion-easing-base),
          --md-elevated-card-container-color var(--blog-post-animation) var(--motion-easing-base);
        will-change: transform;

        &:hover,
        &:focus,
        &:focus-visible,
        &:focus-within {
          --md-elevated-card-container-elevation: var(--motion-elevation-level-3);
          --md-elevated-card-container-shape: var(--md-sys-shape-corner-large);
        }
      }

      section {
        display: grid;
        gap: var(--spacing-gap-xs);
        grid-template-areas:
          "icon    icon"
          "header  header"
          "header  header"
          "header  header"
          "summary summary";
        grid-template-columns: 1fr 1fr;

        img {
          aspect-ratio: 1;
          grid-area: icon;
          height: auto;
          place-self: center;
          width: calc(2 * var(--md-icon-size));
        }

        header {
          display: grid;
          grid-area: header;
          grid-template-columns: subgrid;
          grid-template-rows: subgrid;
        }

        h2 {
          grid-column: 1 / -1;
          grid-row: 1 / 2;
          margin: var(--spacing-reset);
        }

        md-divider {
          grid-column: 1 / -1;
          margin-block: var(--spacing-margin-s);
        }

        h3 {
          grid-column: 1 / -1;
          grid-row: 2 / 3;
          margin: var(--spacing-reset);
        }

        p {
          grid-area: summary;
          margin: var(--spacing-reset);
          margin-block-start: var(--spacing-margin-xs);
        }

        @container (width > 1000px) {
          grid-template-areas:
            "icon header  header"
            "icon header  header"
            "icon header  header"
            ".    summary summary";
          grid-template-columns: 0.25fr 1fr 1fr;
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
      <md-elevated-card class="hover-lift">
        <section>
          <img
            loading="lazy"
            role="img"
            alt="Medium logo"
            .src=${`./icons/brand/medium/medium-${this.darkMode ? "light" : "dark"}.svg`}
          />
          <header>
            <h2 class="md-typescale-headline-large">${this.blogPost.title}</h2>
            <md-divider inset></md-divider>
            <h3 class="md-typescale-title-medium">${this.blogPost.series}</h3>
          </header>
          <p class="md-typescale-body-medium">
            ${this.blogPost.summary}
            <br /><br />
            <a
              href=${ifDefined(this.blogPost.mediumUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium&reg;
            </a>
          </p>
        </section>
      </md-elevated-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "blog-post": BlogPost;
  }
}
