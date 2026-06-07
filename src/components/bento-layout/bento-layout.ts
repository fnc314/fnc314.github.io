import { type BentoBoxConfig, BentoBoxConfigs, type GridPosition } from "@/components/bento-layout/bento-layout.types";
import { readBreakpoint } from "@/styles/breakpoints";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { ROUTES, type Route } from "@/types/components/nav/routes";
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

  private _scrollSpyObserver?: IntersectionObserver;
  private _activeRoute: Route = ROUTES.INFO;

  override connectedCallback() {
    super.connectedCallback();
  }

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this._setupScrollSpy();
  }

  private _setupScrollSpy() {
    this._scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const id = visibleEntry.target.id;
          const route = this._routeFromElementId(id);
          if (route && this._activeRoute !== route) {
            this._activeRoute = route;
          }
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0.15,
      }
    );

    setTimeout(() => {
      const targets = ["bio", "work", "code", "blog"];
      targets.forEach((id) => {
        const el = this.shadowRoot?.getElementById(id);
        if (el) {
          this._scrollSpyObserver?.observe(el);
        }
      });
    }, 500);
  }

  private _routeFromElementId(id: string): Route | null {
    if (id === "bio") return ROUTES.INFO;
    if (id === "work") return ROUTES.WORK;
    if (id === "code") return ROUTES.CODE;
    if (id === "blog") return ROUTES.BLOG;
    return null;
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._scrollSpyObserver?.disconnect();
  }

  private renderBentoBox(config: BentoBoxConfig): TemplateResult {
    const position: GridPosition = config.placementForBreakpoint(
      readBreakpoint()
    );

    let gridArea = "";
    if ("column" in position && "row" in position) {
      gridArea = position.area || `${position.row.start} / ${position.column.start} / ${position.row.end} / ${position.column.end}`;
    }

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
