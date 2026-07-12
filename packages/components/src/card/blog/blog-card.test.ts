import { expect, fixture, html } from "@open-wc/testing";
import "./blog-card";
import { BlogCard } from "./blog-card";

describe("BlogCard Component", () => {
  it("should be defined as a custom element", () => {
    const el = document.createElement("blog-card");
    expect(el).to.be.instanceOf(BlogCard);
  });

  it("should render blog posts", async () => {
    const el = await fixture<BlogCard>(html`<blog-card></blog-card>`);
    const bentoCard = el.shadowRoot?.querySelector("bento-card");
    expect(bentoCard).to.exist;

    const blogPosts = bentoCard?.querySelectorAll("blog-post");
    expect(blogPosts?.length).to.be.greaterThan(0);
  });
});
