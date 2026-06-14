import { expect, fixture, html } from "@open-wc/testing";
import "./connect-card";
import { ConnectCard } from "./connect-card";

describe("ConnectCard Component", () => {
  it("should be defined as a custom element", () => {
    const el = document.createElement("connect-card");
    expect(el).to.be.instanceOf(ConnectCard);
  });

  it("should render connection links", async () => {
    const el = await fixture<ConnectCard>(html`<connect-card></connect-card>`);
    const bentoCard = el.shadowRoot?.querySelector("bento-card");
    expect(bentoCard).to.exist;
    
    const links = bentoCard?.querySelectorAll(".connection-link");
    expect(links?.length).to.be.greaterThan(0);
  });
});
