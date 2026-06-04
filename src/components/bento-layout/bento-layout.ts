import { bentoLayoutStyles } from "@/components/bento-layout/bento-layout.styles";
import { BENTO_BOX_LAYOUT_CONFIG, type BentoBoxConfig, type BentoBoxType } from "@/components/bento-layout/bento-layout.types";
import { type BlogPostJson } from "@/components/blog/blog-post";
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
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, type TemplateResult, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
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
    bentoLayoutStyles,
    MaterialTypescaleStyles,
  ];

  constructor() {
    super();
  }

  override connectedCallback() {
    super.connectedCallback();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
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
   * @param box - The type of bento box to render.
   * @param config - The grid configuration for the bento box (columnSpan, rowSpan).
   * @returns A TemplateResult representing the rendered bento box.
   */
  private renderBentoBox(box: BentoBoxType, config: Omit<BentoBoxConfig, "type">): TemplateResult {
    const style = html`
      <style>
        .card-${box} {
          grid-column-start: ${config.column.start};
          grid-column-end: ${config.column.end};
          grid-row-start: ${config.row.start};
          grid-row-end: ${config.row.end};
          outline: solid 1px red;
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
            <settings-card></settings-card>
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
        return html`${nothing}`;
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
