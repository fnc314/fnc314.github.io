import { expect, fixture, html } from "@open-wc/testing";
import "./bento-card";
import { BentoCard } from "./bento-card";

describe("BentoCard Component", () => {
  it("should be defined as a custom element", () => {
    const el = document.createElement("bento-card");
    expect(el).to.be.instanceOf(BentoCard);
  });

  it("should render a slot for content", async () => {
    const el = await fixture<BentoCard>(html`
      <bento-card>
        <div id="test-content">Content</div>
      </bento-card>
    `);
    const slot = el.shadowRoot?.querySelector("slot");
    expect(slot).to.exist;

    const assignedNodes = slot?.assignedNodes();
    const content = assignedNodes?.find(
      (node) => (node as HTMLElement).id === "test-content"
    );
    expect(content).to.exist;
  });

  it("should apply glassmorphism styles to the internal container", async () => {
    const el = await fixture<BentoCard>(html`<bento-card></bento-card>`);
    const container = el.shadowRoot?.querySelector(".bento-card");
    expect(container).to.exist;

    const styles = getComputedStyle(container!);
    // Verify backdrop-filter for glassmorphism
    const hasFilter = styles.backdropFilter.includes("blur(12px)") ||
                      styles.webkitBackdropFilter.includes("blur(12px)");
    expect(hasFilter).to.be.true;
  });

  it("should style slotted h2 elements as section headers", async () => {
    const el = await fixture<BentoCard>(html`
      <bento-card>
        <h2>Header</h2>
      </bento-card>
    `);
    const h2 = el.querySelector("h2");
    expect(h2).to.exist;

    const styles = getComputedStyle(h2!);
    expect(styles.borderBottomStyle).to.equal("dashed");
  });
});