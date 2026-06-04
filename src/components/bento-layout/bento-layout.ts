import { bentoLayoutStyles } from "@/components/bento-layout/bento-layout.styles";
import { type BlogPostJson } from "@/components/blog/blog-post";
import { type Weights, type WordCloudWordCategory, makeWordCloudWord } from "@/components/word/word-cloud/word-cloud.types";
import { data as WorkJson } from "@/components/work-experience/work-experience.types";
import BioJson from "@/data/bio.json" with { type: "json" };
import BlogJson from "@/data/blog.json" with { type: "json" };
import CodeJson from "@/data/code.json" with { type: "json" };
import Connections from "@/data/connections.json" with { type: "json" };
import EducationJson from "@/data/education.json" with { type: "json" };
import SkillsJson from "@/data/skills.json" with { type: "json" };
import { configsService } from "@/services/configs/configs-service";
import { themeService } from "@/services/theme/theme-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { THEME_CONFIGS } from "@/theme/theme";
import { type AppConfigs, type AppConfigsChange } from "@/types/configs/app-configs";
import {
  CONFIG_COLOR_CONTRAST_NAMES,
  CONFIG_COLOR_SCHEME_NAMES,
  type ColorScheme,
  type ColorSchemeContrast,
  colorSchemeConfigsToMaterialSchemeName
} from "@/types/theme/color-scheme-configs";
import { THEME_NAMES, type ThemeConfig, type ThemeName } from "@/types/theme/theme";
import { LitElement, type TemplateResult, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { abbreviatedSha as gitSha } from "~build/git";
import { version as buildVersion } from "~build/package";
import time from "~build/time";

import "../profile-bio-card/profile-bio-card";
import "../ui-mode-toggle/ui-mode-toggle";

interface BentoBoxConfig {
  type: "profile-photo-bio" | "work" | "code" | "blog" | "settings" | "connect" | "education" | "skills";
  columnSpan?: number;
  rowSpan?: number;
}

const BENTO_BOX_LAYOUT_CONFIG: BentoBoxConfig[] = [
  { type: "profile-photo-bio", columnSpan: 4, rowSpan: 2 },
  { type: "skills", columnSpan: 8 },
  { type: "education", columnSpan: 4 },
  { type: "work", columnSpan: 12 },
  { type: "code", columnSpan: 6 },
  { type: "blog", columnSpan: 6 },
  { type: "connect", columnSpan: 4 },
  { type: "settings", columnSpan: 4 },
];

/**
 * @summary BentoLayout - The primary layout component implementing a responsive Bento Grid.
 *   Consolidates profile photo, bio, configurations, contact info, skills, education,
 *   work experience, code projects, and blog posts into individual grid cards.
 *   Provides inline theme adjustments and design comparison controls.
 *
 * @element bento-layout
 */
@customElement("bento-layout")
export class BentoLayout extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    bentoLayoutStyles,
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        width: 100%;
        color: var(--md-sys-color-on-surface);
        background-color: var(--md-sys-color-surface);
        padding-bottom: var(--spacing-padding-xl);
      }

      .bento-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: var(--spacing-margin-l);
        width: 100%;
        max-width: 1400px;
        margin: var(--spacing-reset) auto;
        padding: var(--spacing-padding-m);
        grid-auto-flow: dense;
      }

      /* Bento Card base styling with premium glassmorphism and animations */
      .bento-card {
        border-radius: var(--md-sys-shape-corner-large);
        background-color: color(from var(--md-sys-color-surface-container-low) srgb r g b / 90%);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: var(--hairline-width) solid var(--md-sys-color-outline-variant);
        padding: var(--spacing-padding-m);
        transition:
          transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
          box-shadow 0.25s ease,
          border-color 0.25s ease,
          background-color 0.3s ease;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-s);
        box-shadow: var(--md-elevation-level-1);
      }

      .bento-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--md-elevation-level-3);
        border-color: var(--md-sys-color-outline);
        background-color: var(--md-sys-color-surface-container-high);
      }

      .bento-card h2 {
        margin: var(--spacing-reset);
        color: var(--md-sys-color-primary);
        font-family: var(--md-ref-typeface-brand);
        border-bottom: var(--hairline-width) dashed var(--md-sys-color-outline-variant);
        padding-bottom: var(--spacing-padding-xs);
      }



      /* Mobile layout (<=736px) */
      @media screen and (max-width: 736px) {
        .bento-grid {
          grid-template-columns: 1fr;
          gap: var(--spacing-margin-s);
          padding: var(--spacing-padding-s);
        }

        .bento-card {
          grid-column: span 1 !important;
          grid-row: span 1 !important;
        }
      }

      /* Card components internal styling */
      .profile-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--spacing-margin-xs);
      }

      .profile-picture {
        width: 100%;
        max-width: 180px;
        height: auto;
        border-radius: var(--md-sys-shape-corner-medium);
        object-fit: cover;
        border: 2px solid var(--md-sys-color-primary);
      }

      .profile-figcaption {
        font-style: italic;
        color: var(--md-sys-color-on-surface-variant);
      }

      .bio-content p {
        margin: var(--spacing-reset);
        line-height: 1.6;
        text-align: justify;
      }

      .education-list {
        list-style-type: none;
        padding: var(--spacing-reset);
        margin: var(--spacing-reset);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-s);
      }

      .education-item {
        border-left: 2px solid var(--md-sys-color-primary);
        padding-left: var(--spacing-padding-s);
      }

      .education-item span {
        display: block;
      }

      .connections-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-xs);
      }

      .connection-link {
        display: flex;
        align-items: center;
        gap: var(--spacing-margin-xs);
        text-decoration: none;
        color: var(--md-sys-color-primary);
        padding: var(--spacing-padding-xs);
        border-radius: var(--md-sys-shape-corner-small);
        transition: background-color 0.2s ease;
      }

      .connection-link:hover {
        background-color: color(from var(--md-sys-color-primary) srgb r g b / 10%);
      }

      /* Inline Form Elements for UI Configs */
      .configs-form {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-s);
      }

      .form-field {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-xxs);
      }

      .form-field label {
        font-size: var(--md-sys-typescale-label-large-size);
        color: var(--md-sys-color-on-surface-variant);
        font-weight: 500;
      }

      .form-field select,
      .form-field button {
        padding: var(--spacing-padding-xs);
        border-radius: var(--md-sys-shape-corner-small);
        border: var(--hairline-width) solid var(--md-sys-color-outline);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        font-family: inherit;
        font-size: 0.95rem;
      }

      .debugger-row {
        display: flex;
        gap: var(--spacing-margin-xs);
        align-items: center;
        justify-content: space-between;
        padding-top: var(--spacing-padding-xs);
        border-top: 1px dashed var(--md-sys-color-outline-variant);
      }

      .debugger-toggle {
        cursor: pointer;
        padding: var(--spacing-padding-xxs) var(--spacing-padding-xs);
        border-radius: var(--md-sys-shape-corner-small);
        border: 1px solid var(--md-sys-color-primary);
        background: transparent;
        color: var(--md-sys-color-primary);
        font-size: var(--md-sys-typescale-label-medium-size);
        font-weight: bold;
        transition: all 0.2s;
      }

      .debugger-toggle.active {
        background: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
      }

      /* List structures for items */
      .scrollable-list {
        max-height: 400px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-s);
        padding-right: var(--spacing-padding-xs);
      }

      /* Custom scrollbar for premium look */
      .scrollable-list::-webkit-scrollbar {
        width: 6px;
      }

      .scrollable-list::-webkit-scrollbar-track {
        background: transparent;
      }

      .scrollable-list::-webkit-scrollbar-thumb {
        background: var(--md-sys-color-outline-variant);
        border-radius: var(--md-sys-shape-corner-full);
      }

      .scrollable-list::-webkit-scrollbar-thumb:hover {
        background: var(--md-sys-color-outline);
      }

      .version-tag {
        font-size: var(--md-sys-typescale-body-small-size);
        color: var(--md-sys-color-on-surface-variant);
        text-align: center;
        margin-top: auto;
        border-top: 1px solid var(--md-sys-color-outline-variant);
        padding-top: var(--spacing-padding-xs);
      }
    `,
  ];

  @state()
  private _appConfigs: AppConfigs = configsService.loadConfigs();

  @state()
  private _themeConfig: ThemeConfig = themeService.currentThemeConfig();

  // Design Debugger states
  @state()
  private _debugFont: "roboto" | "inter" = "roboto";

  @state()
  private _debugIcons: "outlined" | "sharp" = "outlined";

  private onAppConfigsChange = (event: Event) => {
    this._appConfigs = (event as AppConfigsChange).detail.appConfigs;
    this._themeConfig = THEME_CONFIGS[this._appConfigs.colorScheme.theme];
  };

  private formattedDate: string = new Intl.DateTimeFormat(navigator.languages, {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(time);

  private formattedTime: string = new Intl.DateTimeFormat(navigator.languages, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(time);

  constructor() {
    super();
  }

  override connectedCallback() {
    super.connectedCallback();
    configsService.addEventListener("app-configs.change", this.onAppConfigsChange);

    // Apply initial debugger configurations to body/documentElement
    const savedFont = localStorage.getItem("debugger:font") as "roboto" | "inter";
    const savedIcons = localStorage.getItem("debugger:icons") as "outlined" | "sharp";

    if (savedFont) {
      this._debugFont = savedFont;
      document.body.setAttribute("data-debug-font", savedFont);
    }
    if (savedIcons) {
      this._debugIcons = savedIcons;
      document.body.setAttribute("data-debug-icons", savedIcons);
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    configsService.removeEventListener("app-configs.change", this.onAppConfigsChange);
  }





  private _onThemeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as ThemeName;
    const newColorScheme = {
      ...this._appConfigs.colorScheme,
      theme: value,
    };
    this._dispatchColorSchemeChange(newColorScheme);
  }

  private _onContrastChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as ColorSchemeContrast;
    const newColorScheme = {
      ...this._appConfigs.colorScheme,
      contrast: value,
    };
    this._dispatchColorSchemeChange(newColorScheme);
  }

  private _onModeToggle() {
    let nextMode: ColorScheme;
    if (this._appConfigs.colorScheme.name === CONFIG_COLOR_SCHEME_NAMES.SYSTEM) {
      nextMode = CONFIG_COLOR_SCHEME_NAMES.LIGHT;
    } else if (this._appConfigs.colorScheme.name === CONFIG_COLOR_SCHEME_NAMES.LIGHT) {
      nextMode = CONFIG_COLOR_SCHEME_NAMES.DARK;
    } else {
      nextMode = CONFIG_COLOR_SCHEME_NAMES.SYSTEM;
    }

    const newColorScheme = {
      ...this._appConfigs.colorScheme,
      name: nextMode,
    };
    this._dispatchColorSchemeChange(newColorScheme);
  }

  private _dispatchColorSchemeChange(colorScheme: AppConfigs["colorScheme"]) {
    this._appConfigs = {
      ...this._appConfigs,
      colorScheme,
    };

    configsService.saveConfigs(this._appConfigs);

    this.dispatchEvent(
      new CustomEvent("color_scheme.change", {
        bubbles: true,
        composed: true,
        detail: this._appConfigs.colorScheme,
      }),
    );

    updateMaterialCSSStyleSheet(
      themeService.currentThemeConfig().materialSchemes[
        colorSchemeConfigsToMaterialSchemeName(this._appConfigs.colorScheme)
      ],
    );
  }

  private _toggleDebugFont() {
    const nextFont = this._debugFont === "roboto" ? "inter" : "roboto";
    this._debugFont = nextFont;
    localStorage.setItem("debugger:font", nextFont);
    document.body.setAttribute("data-debug-font", nextFont);
  }

  private _toggleDebugIcons() {
    const nextIcons = this._debugIcons === "outlined" ? "sharp" : "outlined";
    this._debugIcons = nextIcons;
    localStorage.setItem("debugger:icons", nextIcons);
    document.body.setAttribute("data-debug-icons", nextIcons);
  }

  // Helper for skills
  private getSkillsForWordCloud() {
    return Object.keys(SkillsJson.skills).flatMap((proficiency) =>
      Object.entries(SkillsJson.skills[proficiency as keyof typeof SkillsJson.skills]).map(([word, weight]) =>
        makeWordCloudWord(word, weight as Weights, proficiency as WordCloudWordCategory),
      ),
    );
  }

  /**
   * Centralized method to render a bento box card based on its type and configuration.
   * @param box The type of bento box to render.
   * @param config The grid configuration for the bento box (columnSpan, rowSpan).
   * @returns A TemplateResult representing the rendered bento box.
   */
  private renderBentoBox(box: BentoBoxConfig["type"], config: { columnSpan?: number; rowSpan?: number }): TemplateResult {
    const style = html`
      <style>
        .card-${box} {
          grid-column: span ${config.columnSpan ?? 1};
          grid-row: span ${config.rowSpan ?? 1};
        }
      </style>
    `;

    switch (box) {
      case "profile-photo-bio":
        return html`
          ${style}
          <section id="bio" class="bento-card card-profile-photo-bio" aria-labelledby="profile-title">
            <profile-bio-card></profile-bio-card>
          </section>
        `;
      case "skills":
        return html`
          ${style}
          <section class="bento-card card-skills" aria-labelledby="skills-title">
            <h2 id="skills-title" class="md-typescale-title-large">Skills &amp; Technologies</h2>
            <word-cloud
              .words=${this.getSkillsForWordCloud()}
              instant-clear
              grouping="quartile"
              sorting="by-alphabet"
              appearance="sequential"
              delay="50"
              threshold="0.05"
            ></word-cloud>
          </section>
        `;
      case "education":
        return html`
          ${style}
          <section class="bento-card card-education" aria-labelledby="education-title">
            <h2 id="education-title" class="md-typescale-title-large">Education</h2>
            <ul class="education-list">
              ${EducationJson.education.map(
                (edu) => html`
                  <li class="education-item">
                    <span class="md-typescale-title-medium">${edu.institute}</span>
                    <span class="md-typescale-body-medium">${edu.location}</span>
                    <span class="md-typescale-title-small">${edu.degree}</span>
                    <span class="md-typescale-body-small">${edu.graduationDate.label}</span>
                  </li>
                `,
              )}
            </ul>
          </section>
        `;
      case "settings":
        return html`
          ${style}
          <section id="settings" class="bento-card card-settings" aria-labelledby="configs-title">
            <h2 id="configs-title" class="md-typescale-title-large">App Settings</h2>
            <div class="configs-form">
              <div class="form-field">
                <label for="theme-select">UI Theme</label>
                <select id="theme-select" @change=${this._onThemeChange}>
                  ${Object.values(THEME_NAMES).map(
                    (theme) => html`
                      <option ?selected=${this._appConfigs.colorScheme.theme === theme} value=${theme}>
                        ${theme.charAt(0).toUpperCase() + theme.slice(1)}
                      </option>
                    `,
                  )}
                </select>
              </div>

              <div class="form-field">
                <label for="contrast-select">UI Contrast</label>
                <select id="contrast-select" @change=${this._onContrastChange}>
                  ${Object.values(CONFIG_COLOR_CONTRAST_NAMES).map(
                    (contrast) => html`
                      <option ?selected=${this._appConfigs.colorScheme.contrast === contrast} value=${contrast}>
                        ${contrast.charAt(0) + contrast.slice(1).toLowerCase()}
                      </option>
                    `,
                  )}
                </select>
              </div>

              <ui-mode-toggle></ui-mode-toggle>



              <div class="debugger-row">
                <span class="md-typescale-label-medium">Debugger Font:</span>
                <button
                  class="debugger-toggle ${classMap({ active: this._debugFont === "inter" })}"
                  @click=${this._toggleDebugFont}
                >
                  Inter
                </button>
              </div>

              <div class="debugger-row">
                <span class="md-typescale-label-medium">Debugger Icons:</span>
                <button
                  class="debugger-toggle ${classMap({ active: this._debugIcons === "sharp" })}"
                  @click=${this._toggleDebugIcons}
                >
                  Sharp
                </button>
              </div>
            </div>
          </section>
        `;
      case "connect":
        return html`
          ${style}
          <section id="connect" class="bento-card card-connect" aria-labelledby="connect-title">
            <h2 id="connect-title" class="md-typescale-title-large">Let's Connect</h2>
            <div class="connections-list">
              ${Connections.connections.map(
                (category) => html`
                  <span class="md-typescale-title-small" style="margin-top: var(--spacing-margin-xs); color: var(--md-sys-color-secondary)">
                    ${category.label}
                  </span>
                  ${Object.values(category.connections).map(
                    (conn) => html`
                      <a href=${conn.href} target="_blank" rel="noopener noreferrer" class="connection-link md-typescale-body-medium">
                        ${unsafeHTML(conn.text)}
                      </a>
                    `,
                  )}
                `,
              )}
            </div>



            <div class="version-tag">
              <div>Version: ${buildVersion}</div>
              <div>SHA: ${gitSha}</div>
            </div>
          </section>
        `;
      case "work":
        return html`
          ${style}
          <section id="work" class="bento-card card-work" aria-labelledby="work-title">
            <h2 id="work-title" class="md-typescale-title-large">Work History</h2>
            <div class="scrollable-list">
              ${WorkJson.experiences.map(
                (exp) => html`
                  <work-experience
                    .isNested="${false}"
                    .experienceOrg="${exp.employer}"
                    .experienceRole="${exp.role}"
                    .experienceSummary="${exp.summary}"
                    .dateStart="${exp.dates.start}"
                    .dateEnd="${exp.dates.end}"
                    .jobs="${exp.jobs}"
                    .summaries="${exp.summaries ?? []}"
                  ></work-experience>
                `,
              )}
            </div>
          </section>
        `;
      case "code":
        return html`
          ${style}
          <section id="code" class="bento-card card-code" aria-labelledby="code-title">
            <h2 id="code-title" class="md-typescale-title-large">Code Projects</h2>
            <div class="scrollable-list">
              ${CodeJson.projects.map(
                (p) => html`
                  <div style="display: block; margin-bottom: var(--spacing-margin-xs);">
                    <code-project .codeProject="${p}"></code-project>
                  </div>
                `,
              )}
            </div>
          </section>
        `;
      case "blog":
        return html`
          ${style}
          <section id="blog" class="bento-card card-blog" aria-labelledby="blog-title">
            <h2 id="blog-title" class="md-typescale-title-large">Blog Posts</h2>
            <div class="scrollable-list">
              ${BlogJson.posts.map(
                (post: BlogPostJson) => html`
                  <div style="display: block; margin-bottom: var(--spacing-margin-xs);">
                    <blog-post .blogPost=${post}></blog-post>
                  </div>
                `,
              )}
            </div>
          </section>
        `;
      default:
        return html``;
    }
  }
  override render() {
    return html`
      <div class="bento-grid" role="main">
        ${BENTO_BOX_LAYOUT_CONFIG.map(boxConfig => this.renderBentoBox(boxConfig.type, boxConfig))}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bento-layout": BentoLayout;
  }
}
