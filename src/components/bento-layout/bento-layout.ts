import { bentoLayoutStyles } from "@/components/bento-layout/bento-layout.styles";
import { type BentoBoxConfig, BentoBoxConfigs, type GridPosition } from "@/components/bento-layout/bento-layout.types";
import { type BlogPostJson } from "@/components/blog/blog-post";
import "@/components/card/bento/bento-card";
import "@/components/card/profile-bio/profile-bio-card";
import "@/components/card/settings/settings-card";
import "@/components/ui-mode-toggle/ui-mode-toggle";
import { type Weights, type WordCloudWordCategory, makeWordCloudWord } from "@/components/word/word-cloud/word-cloud.types";
import { data as WorkJson } from "@/components/work-experience/work-experience.types";
import BlogJson from "@/data/blog.json" with { type: "json" };
import CodeJson from "@/data/code.json" with { type: "json" };
import Connections from "@/data/connections.json" with { type: "json" };
import EducationJson from "@/data/education.json" with { type: "json" };
import SkillsJson from "@/data/skills.json" with { type: "json" };
import { BREAKPOINT_NAMES, type Breakpoint, readBreakpoint } from "@/styles/breakpoints";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, type TemplateResult, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

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
    MaterialTypescaleStyles,
    bentoLayoutStyles,
  ];

  /**
   * The {@link Breakpoint} as calculated by {@link readBreakpoint}
   *
   * @private
   * @type {Breakpoint}
   */
  @state({
    hasChanged(value: Breakpoint, oldValue: Breakpoint): boolean {
      console.info(
        `

        @state called
        newValue: ${value}
          Length: ${value?.length}
        oldValue: ${oldValue}
          Length: ${oldValue?.length}

        `
      );
      if (!value?.length || !BREAKPOINT_NAMES.includes(value)) {
        return false;
      }
      return value !== oldValue;
    }
  })
  private _currentBreakpoint: Breakpoint = "unknown";

  /**
   * The callback passed to {@link window.addEventListener} and
   *   {@link window.removeEventListener}
   */
  private _onWindowResize: () => void = () => {
    console.info(
      `
      Current _breakpointLabel ${this._currentBreakpoint}
      Read Breakpoint ${readBreakpoint()}
      `
    );
    this._currentBreakpoint = readBreakpoint();
    console.info(
      `
      New _breakpointLabel ${this._currentBreakpoint}
      `
    );
  };

  protected override connectedCallback() {
    super.connectedCallback();
    console.info(`ConnectedCallback ${this._currentBreakpoint}`);
    this._onWindowResize();
    window.addEventListener("resize", this._onWindowResize);
  }

  protected override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this._onWindowResize);
  }

  /**
   * Retrieves the list of skills formatted for the word cloud.
   *
   * @private
   * @memberof BentoLayout
   */
  private getSkillsForWordCloud() {
    return Object.keys(SkillsJson.skills).flatMap((proficiency) =>
      Object.entries(SkillsJson.skills[proficiency as keyof typeof SkillsJson.skills]).map(([word, weight]) =>
        makeWordCloudWord(word, weight as Weights, proficiency as WordCloudWordCategory),
      ),
    );
  }

  /**
   * Centralized method to render a bento box card based on its type and configuration.
   * @param config - The configuration for the bento box
   * @returns A TemplateResult representing the rendered bento box.
   */
  private renderBentoBox(config: BentoBoxConfig): TemplateResult {

    const { row, column, breakpoint }: GridPosition = config.placementForBreakpoint(
      this._currentBreakpoint
    );

    console.info(
      `Inputs to 'renderBentoBox' ${
        JSON.stringify({
          breakpointLabel: this._currentBreakpoint,
          config,
          breakpoint,
          row,
          column,
        })
      }`
    );

    const style = html`
      <style>
        .card-${config.type} {
          grid-column-start: ${column.start};
          grid-column-end: ${column.end};
          grid-row-start: ${row.start};
          grid-row-end: ${row.end};
        }
      </style>
    `;

    switch (config.type) {
      case "profile-photo-bio":
        return html`
          ${style}
          <bento-card id="bio" class="card-profile-photo-bio" aria-labelledby="profile-title">
            <h2 id="profile-bio-title" class="md-typescale-title-large">Franco N. Colaizzi</h2>
            <profile-bio-card></profile-bio-card>
          </bento-card>
        `;

      case "skills":
        return html`
          ${style}
          <bento-card class="card-skills" aria-labelledby="skills-title">
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
          </bento-card>
        `;

      case "education":
        return html`
          ${style}
          <bento-card class="card-education" aria-labelledby="education-title">
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
          </bento-card>
        `;

      case "settings":
        return html`
          ${style}
          <bento-card id="settings" class="card-settings" aria-labelledby="configs-title">
            <h2 id="configs-title" class="md-typescale-title-large">App Settings</h2>
            <settings-card></settings-card>
          </bento-card>
        `;

      case "connect":
        return html`
          ${style}
          <bento-card id="connect" class="card-connect" aria-labelledby="connect-title">
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
          </bento-card>
        `;

      case "work":
        return html`
          ${style}
          <bento-card id="work" class="card-work" aria-labelledby="work-title">
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
          </bento-card>
        `;

      case "code":
        return html`
          ${style}
          <bento-card id="code" class="card-code" aria-labelledby="code-title">
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
          </bento-card>
        `;

      case "blog":
        return html`
          ${style}
          <bento-card id="blog" class="card-blog" aria-labelledby="blog-title">
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
          </bento-card>
        `;

      default:
        return html`${nothing}`;
    }
  }

  override render() {
    this._onWindowResize();
    return html`
      <div class="bento-grid" role="main" id="bento-root">
        ${BentoBoxConfigs().map(boxConfig => this.renderBentoBox(boxConfig))}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bento-layout": BentoLayout;
  }
}
