import { BentoLayoutStyles } from "@/components/bento-layout/bento-layout.styles";
import { type BentoBoxConfig, BentoBoxConfigs, type GridPosition } from "@/components/bento-layout/bento-layout.types";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { type TemplateResult, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";

/**
 * @summary BentoLayout - The primary layout component implementing a responsive Bento Grid.
 *   Consolidates profile photo, bio, configurations, contact info, skills, education,
 *   work experience, code projects, and blog posts into individual grid cards.
 *
 * @element bento-layout
 */
@customElement("bento-layout")
export class BentoLayout extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    BentoLayoutStyles,
  ];

  @state()
  private _bentoBoxConfigs: BentoBoxConfig[] = BentoBoxConfigs();


  private renderBentoBox(config: BentoBoxConfig): TemplateResult {
    const position: GridPosition = config.placementForBreakpoint(
      this.breakpoint
    );

    let gridArea = "";
    if ("column" in position && "row" in position) {
      gridArea = position.area || `${position.row.start} / ${position.column.start} / ${position.row.end} / ${position.column.end}`;
    }

    console.log(
      `
      Position | gridArea | GridPostion
      ${JSON.stringify({ position, gridArea, breakpoint: this.breakpoint }, null, 2)}
      `
    );

    let cardContent: TemplateResult;
    switch (config.type) {
      case "profile-photo-bio":
        cardContent = html`<profile-bio-card .expanded=${config.expanded}></profile-bio-card>`;
        break;
      case "skills":
        cardContent = html`<skills-card .expanded=${config.expanded}></skills-card>`;
        break;
      case "education":
        cardContent = html`<education-card .expanded=${config.expanded}></education-card>`;
        break;
      case "settings":
        cardContent = html`<settings-card .expanded=${config.expanded}></settings-card>`;
        break;
      case "connect":
        cardContent = html`<connect-card .expanded=${config.expanded}></connect-card>`;
        break;
      case "work":
        cardContent = html`<work-card .expanded=${config.expanded}></work-card>`;
        break;
      case "code":
        cardContent = html`<code-card .expanded=${config.expanded}></code-card>`;
        break;
      case "blog":
        cardContent = html`<blog-card .expanded=${config.expanded}></blog-card>`;
        break;
      default:
        return html`${nothing}`;
    }

    return html`
      <section
        class="card-${config.type}"
        style=${styleMap({ gridArea: gridArea || undefined })}
      >
        ${cardContent}
      </section>
    `;
  }

  override render() {
    return html`
      <main class="bento-grid" id="bento-root">
        <h1>Franco N. Colaizzi</h1>
        ${this._bentoBoxConfigs.map(boxConfig => this.renderBentoBox(boxConfig))}
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bento-layout": BentoLayout;
  }
}
