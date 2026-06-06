import { type BentoBoxConfig, BentoBoxConfigs, type GridPosition } from "@/components/bento-layout/bento-layout.types";
import { type Breakpoint, readBreakpoint } from "@/styles/breakpoints";
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
        display: block;
        width: 100%;
        color: var(--md-sys-color-on-surface);
        background-color: var(--md-sys-color-surface);
        padding-bottom: var(--spacing-padding-xl);
      }

      .bento-grid {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: var(--spacing-margin-xs);
        padding: var(--spacing-padding-xxs);
      }

      h1 {
        text-align: center;
        grid-area: span 1 / span 12;
        border-radius: var(--md-sys-shape-corner-large);
        color: var(--md-sys-color-on-primary-fixed);
        background-color: var(--md-sys-color-primary-fixed);
        border-color: var(--md-sys-color-on-primary-fixed);
        border-width: var(--hairline-width);
        width: 65%;
        padding-block: var(--spacing-padding-l);
        margin-inline: auto;
      }

      @media screen and ((width <= 1200px) and (width >= 769px)) {
        .bento-grid {
          align-items: unset;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: var(--spacing-margin-l);
          margin: var(--spacing-reset) auto;
          padding: var(--spacing-padding-m);
          grid-auto-flow: dense;
          width: 100%;
          max-width: 1400px;
        }
      }

      @media screen and (width >= 1201px) {
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: var(--spacing-margin-l);
          margin: var(--spacing-reset) auto;
          padding: var(--spacing-padding-m);
          grid-auto-flow: dense;
          width: 100%;
          max-width: 1400px;
        }
      }
    `
  ];

  @state()
  private _currentBreakpoint: Breakpoint = readBreakpoint();

  @state()
  private _bentoBoxConfigs: BentoBoxConfig[] = BentoBoxConfigs();

  private _scrollSpyObserver?: IntersectionObserver;
  private _activeRoute: Route = ROUTES.INFO;

  private _onWindowResize = () => {
    this._currentBreakpoint = readBreakpoint();
  };

  override connectedCallback() {
    super.connectedCallback();
    this._onWindowResize();
    window.addEventListener("resize", this._onWindowResize);
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
    window.removeEventListener("resize", this._onWindowResize);
    this._scrollSpyObserver?.disconnect();
  }

  private renderBentoBox(config: BentoBoxConfig): TemplateResult {
    const { row, column }: GridPosition = config.placementForBreakpoint(
      readBreakpoint()
    );

    console.info(`this._currentBreakpoint: ${this._currentBreakpoint}|readBreakpoint: ${readBreakpoint()}`);

    const style = this._currentBreakpoint !== "mobile" ? html`
      <style>
        .card-${config.type} {
          grid-column-start: ${column.start};
          grid-column-end: ${column.end};
          grid-row-start: ${row.start};
          grid-row-end: ${row.end};
        }
      </style>
    ` : html`${nothing}`;

    let cardContent: TemplateResult;
    switch (config.type) {
      case "profile-photo-bio":
        cardContent = html`<profile-bio-card></profile-bio-card>`;
        break;
      case "skills":
        cardContent = html`<skills-card></skills-card>`;
        break;
      case "education":
        cardContent = html`<education-card></education-card>`;
        break;
      case "settings":
        cardContent = html`<settings-card></settings-card>`;
        break;
      case "connect":
        cardContent = html`<connect-card></connect-card>`;
        break;
      case "work":
        cardContent = html`<work-card></work-card>`;
        break;
      case "code":
        cardContent = html`<code-card></code-card>`;
        break;
      case "blog":
        cardContent = html`<blog-card></blog-card>`;
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
