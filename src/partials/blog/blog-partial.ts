import BlogJson from "@/data/blog.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles";
import { type BlogPostJson } from "@/types/components/blog/blog-post";
import { LitElement, css, html } from "lit-element";
import { customElement } from "lit/decorators.js";

@customElement("blog-partial")
export class BlogPartial extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
      }

      article {
        display: grid;
        grid-template-areas:
          "header"
          "posts";
        grid-template-columns: 1fr;
        grid-template-rows: min-content auto;
        grid-auto-rows: auto;
        gap: 1rem;
        padding-inline: 1rem;
        padding-bottom: 1rem;

        partial-header {
          grid-area: header;
        }

        .posts {
          grid-area: posts;
          display: flex;
          flex-flow: column nowrap;
          gap: 1rem;
        }
      }
    `,
  ];

  override render() {
    return html`
      <article>
        <partial-header
          .headerType=${"inverse"}
          .headingText=${"Blog Posts"}
        ></partial-header>
        <div class="posts">
          ${BlogJson.posts.map(
            (post: BlogPostJson) =>
              html` <blog-post .blogPost=${post}></blog-post> `,
          )}
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "blog-partial": BlogPartial;
  }
}
