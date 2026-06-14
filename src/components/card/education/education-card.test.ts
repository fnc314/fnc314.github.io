import { expect, fixture, html } from "@open-wc/testing";
import "./education-card";
import { EducationCard } from "./education-card";

describe("EducationCard Component", () => {
  it("should be defined as a custom element", () => {
    const el = document.createElement("education-card");
    expect(el).to.be.instanceOf(EducationCard);
  });

  it("should render the education list", async () => {
    const el = await fixture<EducationCard>(html`<education-card></education-card>`);
    const bentoCard = el.shadowRoot?.querySelector("bento-card");
    expect(bentoCard).to.exist;
    
    const list = bentoCard?.querySelector(".education-list");
    expect(list).to.exist;
    expect(list?.children.length).to.be.greaterThan(0);
  });
});
