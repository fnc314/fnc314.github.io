import type { BlogEntryJson } from "@/components/blog/entry/blog-entry.types";
import BlogJson from "@/data/blog.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("blog-partial")
export class BlogPartial extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
      }

      article {
        display: grid;
        gap: 1rem;
        grid-auto-rows: auto;
        grid-template-areas:
          "header"
          "posts";
        grid-template-columns: 1fr;
        grid-template-rows: min-content auto;
        padding-inline: 1rem;
        padding-bottom: 1rem;

        partial-header {
          grid-area: header;
        }

        .posts {
          display: flex;
          flex-flow: column nowrap;
          gap: 1rem;
          grid-area: posts;
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
            (entry: BlogEntryJson) =>
              html` <blog-entry .blogEntry=${entry}></blog-entry> `,
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
