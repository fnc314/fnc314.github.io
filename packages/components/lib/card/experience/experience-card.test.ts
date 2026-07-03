import { expect, fixture, html } from "@open-wc/testing";
import "./experience-card";
import { ExperienceCard } from "./experience-card";

describe("WorkCard Component", () => {
  it("should be defined as a custom element", () => {
    const el = document.createElement("work-card");
    expect(el).to.be.instanceOf(ExperienceCard);
  });

  it("should render work experiences", async () => {
    const el = await fixture<ExperienceCard>(html`<work-card></work-card>`);
    const bentoCard = el.shadowRoot?.querySelector("bento-card");
    expect(bentoCard).to.exist;

    const workExperience = bentoCard?.querySelector("work-experience");
    expect(workExperience).to.exist;
  });
});
