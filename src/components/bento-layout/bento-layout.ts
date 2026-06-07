import { type BentoBoxConfig, BentoBoxConfigs, type GridPosition } from "@/components/bento-layout/bento-layout.types";
import { readBreakpoint } from "@/styles/breakpoints";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { ROUTES, type Route } from "@/types/components/nav/routes";
import { LitElement, type PropertyValues, type TemplateResult, css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";

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
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        /**
         * Mobile styles use \\\`flex\\\` so this is only used when
         *   \\\`@media screen and (width >= 769px)\\\`
         * Tablet -> 769 <= 1200 -> 6
         * Desktop -> >= 1201 -> 12
         */
        --bento-layout-column-count: 1;

        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        display: block;
        padding-bottom: var(--spacing-padding-xl);
        width: 100%;
      }

      .bento-grid {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-s);
        padding: var(--spacing-padding-xs);
      }

      h1 {
        background-color: var(--md-sys-color-primary-fixed);
        border-color: var(--md-sys-color-on-primary-fixed);
        border-radius: var(--md-sys-shape-corner-large);
        border-width: var(--hairline-width);
        color: var(--md-sys-color-on-primary-fixed);
        margin-inline: auto;
        padding-block: var(--spacing-padding-l);
        text-align: center;
        width: 65%;
      }

      @media screen and ((width <= 1200px) and (width >= 769px)) {
        :host {
          --bento-layout-column-count: 6;
        }

        .bento-grid {
          align-items: unset;
          display: grid;
          gap: var(--spacing-margin-m);
          grid-auto-flow: dense;
          grid-template-columns: repeat(var(--bento-layout-column-count), 1fr);
          padding: var(--spacing-padding-s);
        }

        h1 {
          grid-area: span 1 / span var(--bento-layout-column-count);
        }
      }

      @media screen and (width >= 1201px) {
        :host {
          --bento-layout-column-count: 12;
        }

        .bento-grid {
          display: grid;
          gap: var(--spacing-margin-l);
          grid-auto-flow: dense;
          grid-template-columns: repeat(var(--bento-layout-column-count), 1fr);
          margin: var(--spacing-reset) auto;
          padding: var(--spacing-padding-m);
        }

        h1 {
          grid-area: span 1 / span var(--bento-layout-column-count);
        }
      }
    `
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

    let style: TemplateResult = html`${nothing}`;
    if ("column" in position && "row" in position) {
      const gridArea = position.area || `${position.row.start} / ${position.column.start} / ${position.row.end} / ${position.column.end}`;
      style = html`
        <style>
          .card-${config.type} {
            grid-area: ${gridArea};
          }
        </style>
      `;
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

    return html`${style}<div class="card-${config.type}">${cardContent}</div>`;
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
