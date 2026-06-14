import { expect, fixture, html } from "@open-wc/testing";
import "./skills-card";
import { SkillsCard } from "./skills-card";

describe("SkillsCard Component", () => {
  it("should be defined as a custom element", () => {
    const el = document.createElement("skills-card");
    expect(el).to.be.instanceOf(SkillsCard);
  });

  it("should render the bento card and word cloud", async () => {
    const el = await fixture<SkillsCard>(html`<skills-card></skills-card>`);
    const bentoCard = el.shadowRoot?.querySelector("bento-card");
    expect(bentoCard).to.exist;
    
    const wordCloud = bentoCard?.querySelector("word-cloud");
    expect(wordCloud).to.exist;
  });
});
