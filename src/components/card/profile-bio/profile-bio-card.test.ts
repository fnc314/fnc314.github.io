import { themeService } from "@/services/theme/theme-service";
import { expect, fixture, html } from "@open-wc/testing";
import { afterEach, before, beforeEach, it } from "node:test";
import { describe } from "~build/git";
import "./profile-bio-card";
import { ProfileBioCard } from "./profile-bio-card";

describe("ProfileBioCard Component", () => {
  let element: ProfileBioCard;
  let originalCurrentThemeConfig: () => unknown;

  const mockThemePhoto = {
    src: "/path/to/mock-image.jpg",
    alt: "Mock Profile Picture",
    figcaption: "Mock Figcaption",
  };
  const mockBioText = "This is a mock biography text.";

  before(() => {
    originalCurrentThemeConfig = themeService.currentThemeConfig;
  });

  beforeEach(async () => {
    // Mock themeService to return a consistent themePhoto
    themeService.currentThemeConfig = () => ({
      themePhoto: mockThemePhoto,
      materialSchemes: {}, // Not relevant for this test
    });

    element = await fixture<ProfileBioCard>(
      html`<profile-bio-card
        .themePhoto=${mockThemePhoto}
        .bioText=${mockBioText}
      ></profile-bio-card>`,
    );
  });

  afterEach(() => {
    // Restore original method
    themeService.currentThemeConfig = originalCurrentThemeConfig;
  });

  it("should be defined as a custom element", () => {
    expect(element).to.be.instanceOf(ProfileBioCard);
  });

  it("should render the main profile bio container", () => {
    const container = element.shadowRoot?.querySelector(".profile-bio-container");
    expect(container).to.exist;
  });

  it("should display the profile name", () => {
    const nameHeading = element.shadowRoot?.querySelector("h2");
    expect(nameHeading?.textContent).to.include("Franco N. Colaizzi");
  });

  it("should display the profile picture with correct attributes", () => {
    const img = element.shadowRoot?.querySelector(".profile-picture");
    expect(img).to.exist;
    expect(img?.src).to.include(mockThemePhoto.src);
    expect(img?.alt).to.equal(mockThemePhoto.alt);
  });

  it("should display the figcaption", () => {
    const figcaption = element.shadowRoot?.querySelector(".profile-figcaption");
    expect(figcaption?.textContent).to.equal(mockThemePhoto.figcaption);
  });

  it("should display the biography title", () => {
    const bioTitle = element.shadowRoot?.querySelectorAll("h2")[1]; // Assuming the second h2 is the bio title
    expect(bioTitle?.textContent).to.equal("Biography");
  });

  it("should display the biography text", () => {
    const bioParagraph = element.shadowRoot?.querySelector(".bio-content p");
    expect(bioParagraph?.textContent).to.equal(mockBioText);
  });

  // Test for properties overriding defaults
  it("should allow themePhoto property to be overridden", async () => {
    const customThemePhoto = {
      src: "/custom/image.png",
      alt: "Custom Alt",
      figcaption: "Custom Figcaption",
    };
    const customElement = await fixture<ProfileBioCard>(
      html`<profile-bio-card .themePhoto=${customThemePhoto}></profile-bio-card>`,
    );
    const img = customElement.shadowRoot?.querySelector<HTMLImageElement>(".profile-picture");
    expect(img?.src).to.include(customThemePhoto.src);
    expect(img?.alt).to.equal(customThemePhoto.alt);
  });

  it("should allow bioText property to be overridden", async () => {
    const customBioText = "This is a custom bio text.";
    const customElement = await fixture<ProfileBioCard>(
      html`<profile-bio-card .bioText=${customBioText}></profile-bio-card>`,
    );
    const bioParagraph = customElement.shadowRoot?.querySelector(".bio-content p");
    expect(bioParagraph?.textContent).to.equal(customBioText);
  });
});