import { html, fixture, expect, oneEvent } from "@open-wc/testing";
import { UiModeToggle } from "./ui-mode-toggle";
import "./ui-mode-toggle";
import { configsService } from "@/services/configs/configs-service";
import { themeService } from "@/services/theme/theme-service";
import { type AppConfigs } from "@/types/configs/app-configs";
import { CONFIG_COLOR_SCHEME_NAMES } from "@/types/theme/color-scheme-configs";
import type { ColorSchemeChangeEvent, PermanentColorSchemeEvent } from "dark-mode-toggle";

describe("UiModeToggle Component", () => {
  let element: UiModeToggle;
  let originalLoadConfigs: () => AppConfigs;
  let originalSaveConfigs: (_configs: AppConfigs) => void;
  let originalCurrentThemeConfig: () => any;

  const mockAppConfigs: AppConfigs = {
    colorScheme: {
      name: CONFIG_COLOR_SCHEME_NAMES.SYSTEM,
      theme: "material-theme",
      contrast: "standard",
      persist: false,
    },
    debugger: {
      active: false,
    },
    fontSize: "medium",
  };

  before(() => {
    originalLoadConfigs = configsService.loadConfigs;
    originalSaveConfigs = configsService.saveConfigs;
    originalCurrentThemeConfig = themeService.currentThemeConfig;
  });

  beforeEach(async () => {
    // Mock configsService
    configsService.loadConfigs = () => ({ ...mockAppConfigs });
    configsService.saveConfigs = (configs: AppConfigs) => {
      mockAppConfigs.colorScheme = configs.colorScheme;
    };
    // Mock themeService
    themeService.currentThemeConfig = () => ({
      themePhoto: { src: "", alt: "", figcaption: "" },
      materialSchemes: {
        light: {},
        dark: {},
        "light-high-contrast": {},
        "dark-high-contrast": {},
      },
    });

    element = await fixture<UiModeToggle>(html`<ui-mode-toggle></ui-mode-toggle>`);
  });

  afterEach(() => {
    // Restore original methods
    configsService.loadConfigs = originalLoadConfigs;
    configsService.saveConfigs = originalSaveConfigs;
    themeService.currentThemeConfig = originalCurrentThemeConfig;
  });

  it("should be defined as a custom element", () => {
    expect(element).to.be.instanceOf(UiModeToggle);
  });

  it("should render dark-mode-toggle internally", () => {
    const darkModeToggle = element.shadowRoot?.querySelector("dark-mode-toggle");
    expect(darkModeToggle).to.exist;
  });

  it("should initialize with mode 'system' and permanent 'false' by default", () => {
    expect(element.mode).to.equal("system");
    expect(element.permanent).to.be.false;
    const darkModeToggle = element.shadowRoot?.querySelector("dark-mode-toggle");
    expect(darkModeToggle?.mode).to.equal("system");
    expect(darkModeToggle?.permanent).to.be.false;
  });

  it("should update mode and permanent based on configsService changes", async () => {
    // Simulate a change in configsService
    const newConfigs: AppConfigs = {
      ...mockAppConfigs,
      colorScheme: {
        name: CONFIG_COLOR_SCHEME_NAMES.DARK,
        theme: "material-theme",
        contrast: "standard",
        persist: true,
      },
    };
    configsService.dispatchEvent(
      new CustomEvent("app-configs.change", { detail: { appConfigs: newConfigs } }),
    );
    await element.updateComplete;

    expect(element.mode).to.equal("dark");
    expect(element.permanent).to.be.true;
    const darkModeToggle = element.shadowRoot?.querySelector("dark-mode-toggle");
    expect(darkModeToggle?.mode).to.equal("dark");
    expect(darkModeToggle?.permanent).to.be.true;
  });

  it("should handle 'colorschemechange' event from dark-mode-toggle", async () => {
    const listener = oneEvent(element, "color_scheme.change");
    const darkModeToggle = element.shadowRoot?.querySelector("dark-mode-toggle");

    // Simulate colorschemechange event
    const changeEvent: ColorSchemeChangeEvent = new CustomEvent("colorschemechange", {
      detail: { colorScheme: "dark" },
    });
    darkModeToggle?.dispatchEvent(changeEvent);

    const event = await listener;
    expect(event).to.exist;
    expect(event.detail.name).to.equal(CONFIG_COLOR_SCHEME_NAMES.DARK);
    expect(element.mode).to.equal("dark");
  });

  it("should handle 'permanentcolorscheme' event from dark-mode-toggle", async () => {
    const darkModeToggle = element.shadowRoot?.querySelector("dark-mode-toggle");

    // Simulate permanentcolorscheme event
    const permanentEvent: PermanentColorSchemeEvent = new CustomEvent(
      "permanentcolorscheme",
      { detail: { permanent: true } },
    );
    darkModeToggle?.dispatchEvent(permanentEvent);
    await element.updateComplete;

    expect(element.permanent).to.be.true;
    expect(configsService.loadConfigs().colorScheme.persist).to.be.true; // Check if configsService was updated
  });

  it("should reset mode and permanent state correctly", async () => {
    // Set to a different state first
    element.mode = "dark";
    element.permanent = true;
    await element.updateComplete;

    element.reset();
    await element.updateComplete;

    // After reset, it should revert to the initial mockAppConfigs state
    expect(element.mode).to.equal("system");
    expect(element.permanent).to.be.false;
  });
});