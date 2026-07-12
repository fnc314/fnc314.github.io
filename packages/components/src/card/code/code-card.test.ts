import { expect, fixture, html } from "@open-wc/testing";
import "./code-card";
import { CodeCard } from "./code-card";

describe("CodeCard Component", () => {
  it("should be defined as a custom element", () => {
    const el = document.createElement("code-card");
    expect(el).to.be.instanceOf(CodeCard);
  });

  it("should render code projects", async () => {
    const el = await fixture<CodeCard>(html`<code-card></code-card>`);
    const bentoCard = el.shadowRoot?.querySelector("bento-card");
    expect(bentoCard).to.exist;
    
    const codeProjects = bentoCard?.querySelectorAll("code-project");
    expect(codeProjects?.length).to.be.greaterThan(0);
  });
});
