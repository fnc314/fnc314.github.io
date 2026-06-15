import { html, fixture, expect } from "@open-wc/testing";
import { BentoLayout } from "./bento-layout";
import "./bento-layout";

describe("BentoLayout Component", () => {
  it("should be defined as a custom element", () => {
    const el = document.createElement("bento-layout");
    expect(el).to.be.instanceOf(BentoLayout);
  });

  it("should render the main bento grid container", async () => {
    const el = await fixture<BentoLayout>(html`<bento-layout></bento-layout>`);
    const grid = el.shadowRoot?.querySelector(".bento-grid");
    expect(grid).to.exist;
  });

  it("should render essential bento cards", async () => {
    const el = await fixture<BentoLayout>(html`<bento-layout></bento-layout>`);
    const profileCard = el.shadowRoot?.querySelector(".card-profile");
    const bioCard = el.shadowRoot?.querySelector(".card-bio");
    const configsCard = el.shadowRoot?.querySelector(".card-configs");
    const connectCard = el.shadowRoot?.querySelector(".card-connect");
    const skillsCard = el.shadowRoot?.querySelector(".card-skills");

    expect(profileCard).to.exist;
    expect(bioCard).to.exist;
    expect(configsCard).to.exist;
    expect(connectCard).to.exist;
    expect(skillsCard).to.exist;
  });
});
