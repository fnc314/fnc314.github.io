import { BlogPostStyles } from "@/components/blog/post/blog-post.styles";
import { type BlogPostJson } from "@/components/blog/post/blog-post.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { MaterialTypescaleStyles } from "@/styles";
import { InteractionStyles } from "@/styles/interaction-styles";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
export { type BlogPostJson } from "@/components/blog/post/blog-post.types";

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
 * @extends {UIAwareElement}
 */
@customElement("blog-post")
export class BlogPost extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    InteractionStyles,
    BlogPostStyles
  ];

  @property({ type: Object })
  blogPost: BlogPostJson = {} as BlogPostJson;

  constructor() {
    super();
  }

  override render() {
    return html`
      <md-elevated-card class="hover-lift">
        <section>
          <header>
            <h3 class="md-typescale-title-large">${this.blogPost.title}</h3>
            <h4 class="md-typescale-title-small">${this.blogPost.series}</h4>
            <md-divider inset></md-divider>
          </header>
          <p class="md-typescale-body-medium">
            ${this.blogPost.summary}
            <br /><br />
            <a
              href=${ifDefined(this.blogPost.mediumUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                role="img"
                alt="Medium logo"
                .src=${`./icons/brand/medium/medium-${this.darkMode ? "light" : "dark"}.svg`}
              />
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
