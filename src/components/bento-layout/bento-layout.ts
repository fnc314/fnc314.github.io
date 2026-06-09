import { type BentoBoxConfig, BentoBoxConfigs, type GridPosition } from "@/components/bento-layout/bento-layout.types";
import { type Breakpoint, readBreakpoint } from "@/styles/breakpoints";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, type PropertyValues, type TemplateResult, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { bentoLayoutStyles } from "./bento-layout.styles";

// New components
import "@/components/card/bento/bento-card";
import "@/components/card/blog/blog-card";
import "@/components/card/code/code-card";
import "@/components/card/connect/connect-card";
import "@/components/card/education/education-card";
import "@/components/card/profile-bio/profile-bio-card";
import "@/components/card/settings/settings-card";
import "@/components/card/skills/skills-card";
import "@/components/card/work/work-card";

/**
 * @summary BentoLayout - The primary layout component implementing a responsive Bento Grid.
 *   Consolidates profile photo, bio, configurations, contact info, skills, education,
 *   work experience, code projects, and blog posts into individual grid cards.
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

  @state()
  private _bentoBoxConfigs: BentoBoxConfig[] = BentoBoxConfigs();

  @state()
  private _currentBreakpoint: Breakpoint = readBreakpoint();

  private _windowResizeObserver: () => void = () => {
    this._currentBreakpoint = readBreakpoint();
  }

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this._windowResizeObserver);
  }

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this._windowResizeObserver);
  }

  private renderBentoBox(config: BentoBoxConfig): TemplateResult {
    const position: GridPosition = config.placementForBreakpoint(
      this._currentBreakpoint
    );

    let gridArea = "";
    if ("column" in position && "row" in position) {
      gridArea = position.area || `${position.row.start} / ${position.column.start} / ${position.row.end} / ${position.column.end}`;
    }

    console.log(
      `
      Position | gridArea | GridPostion
      ${JSON.stringify({ position, gridArea, breakpoint: this._currentBreakpoint }, null, 2)}
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
      <div
        class="card-${config.type}"
        style=${styleMap({ gridArea: gridArea || undefined })}
      >
        ${cardContent}
      </div>
    `;
  }

  override render() {
    return html`
      <div class="bento-grid" role="main" id="bento-root">
        <h1>Franco N. Colaizzi</h1>
        ${this._bentoBoxConfigs.map(boxConfig => this.renderBentoBox(boxConfig))}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bento-layout": BentoLayout;
  }
}
