import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { NavComponentConfig, ROUTES, type Route, hashToRoute } from "@/types/components/nav/routes";
import { LitElement, type PropertyValues, type TemplateResult, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

/**
 * A navigation component that renders primary tabs synchronized with the application's bento layout sections.
 * Uses an IntersectionObserver to perform scroll spy and highlight the active card.
 *
 * @element nav-component
 *
 * @cssprop [--nav-component-icon-animation=225ms] - The duration of the icon's fill and color transition.
 * @cssprop [--nav-component-icon-animation-reduced=1ms] - The duration of the icon's transition when motion is reduced.
 */
@customElement("nav-component")
export class NavComponent extends LitElement {
  /** {@link lit!css} */
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        --nav-component-icon-animation: 225ms;
        --nav-component-icon-animation-reduced: 1ms;
      }

      nav {
        position: sticky;
        top: 0;
        z-index: 100;
        width: 100%;
        background-color: var(--md-sys-color-surface-container-low);
        box-shadow: var(--md-elevation-level-1);
        padding: var(--spacing-padding-xs) 0;
      }

      .nav-buttons-container {
        display: flex;
        justify-content: center;
        gap: var(--spacing-margin-s);
      }

      .nav-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: var(--md-sys-color-on-surface-variant);
        padding: var(--spacing-padding-xs) var(--spacing-padding-s);
        border-radius: var(--md-sys-shape-corner-medium);
        transition:
          background-color 0.2s ease,
          color 0.2s ease;

        & md-icon {
          color: var(--md-sys-color-primary);
        }

        &:hover {
          background-color: var(--md-sys-color-surface-container-high);
          color: var(--md-sys-color-on-surface);
        }

        &.active {
          background-color: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);

          & md-icon {
            color: var(--md-sys-color-on-primary);
            font-variation-settings:
              "FILL" 1,
              "wght" 400,
              "GRAD" 200,
              "opsz" 48;
          }
        }
      }

      md-icon {
        font-family: var(--md-icon-font);
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 200,
          "opsz" 48;
        transition:
          font-variation-settings var(--nav-component-icon-animation) cubic-bezier(0.3, 0, 0, 1),
          color var(--nav-component-icon-animation) cubic-bezier(0.3, 0, 0, 1);

        @media (prefers-reduced-motion: reduce) {
          transition:
            font-variation-settings var(--nav-component-icon-animation-reduced) cubic-bezier(0.3, 0, 0, 1),
            color var(--nav-component-icon-animation-reduced) cubic-bezier(0.3, 0, 0, 1);
        }
      }

      md-icon[filled="true"] {
        font-variation-settings:
          "FILL" 1,
          "wght" 400,
          "GRAD" 200,
          "opsz" 48;
        color: var(--icon-fill-color);
      }



      md-icon {
        font-family: var(--md-icon-font);
        font-variation-settings:
          "FILL" 0,
          "wght" 400,
          "GRAD" 200,
          "opsz" 48;
        transition:
          font-variation-settings var(--nav-component-icon-animation) cubic-bezier(0.3, 0, 0, 1),
          color var(--nav-component-icon-animation) cubic-bezier(0.3, 0, 0, 1);

        @media (prefers-reduced-motion: reduce) {
          transition:
            font-variation-settings var(--nav-component-icon-animation-reduced) cubic-bezier(0.3, 0, 0, 1),
            color var(--nav-component-icon-animation-reduced) cubic-bezier(0.3, 0, 0, 1);
        }
      }

      md-icon[filled="true"] {
        font-variation-settings:
          "FILL" 1,
          "wght" 400,
          "GRAD" 200,
          "opsz" 48;
        color: var(--icon-fill-color);
      }
    `,
  ];

  @state()
  private _activeTabIndex = 0;

  @state()
  private _activeRoute: Route = ROUTES.INFO;

  @state()
  private _exitingRoute: Route | null = null;

  private _inlineIconTimeout = 0;



  private _routes: Route[] = Object.values(ROUTES);

  private _boundListener = this._handleHashChange.bind(this);

  private _scrollSpyObserver?: IntersectionObserver;

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener("hashchange", this._boundListener);
    this._boundListener();

    // Setup scroll spy to detect section visibility
    this._setupScrollSpy();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("hashchange", this._boundListener);
    this._scrollSpyObserver?.disconnect();
  }

  private _setupScrollSpy() {
    this._scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        // Find visible section
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const id = visibleEntry.target.id;
          const route = this._routeFromElementId(id);
          if (route) {
            const index = this._routes.indexOf(route);
            if (index >= 0 && this._activeTabIndex !== index) {
              this._activeTabIndex = index;
              this._activeRoute = route;
            }
          }
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px", // trigger when section occupies central viewport area
        threshold: 0.15,
      }
    );

    // Observe layout element targets after initial render delay
    setTimeout(() => {
      const targets = ["bio", "work", "code", "blog"];
      targets.forEach((id) => {
        const el = document.getElementById(id) || document.querySelector("bento-layout")?.shadowRoot?.getElementById(id);
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

  private _tabIndexAndRouteFromHash(): { index: number; route: Route } {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    const route = hashToRoute(hash);
    const index = this._routes.indexOf(route);
    return { index, route };
  }

  private _handleHashChange() {
    const { index, route }: { index: number; route: Route } = this._tabIndexAndRouteFromHash();
    const targetIndex = index >= 0 ? index : 0;

    if (this._activeTabIndex !== targetIndex) {
      const oldRoute = this._activeRoute;
      this._activeTabIndex = targetIndex;
      this._activeRoute = route;

      if (this.hasUpdated) {
        this._exitingRoute = oldRoute;

        window.clearTimeout(this._inlineIconTimeout);
        this._inlineIconTimeout = window.setTimeout(() => {
          this._exitingRoute = null;
        }, 250);
      } else {
        this._exitingRoute = null;
      }
    }
  }





  protected override firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
  }



  /**
   * Renders the navigation buttons based on the defined routes.
   * @returns A TemplateResult containing the navigation buttons.
   */
  private _renderNavButtons(): TemplateResult {
    return html`
      <div class="nav-buttons-container">
        ${this._routes.map(
          (route: Route) => html`
            <a
              href="#${route === ROUTES.INFO ? "bio" : route}"
              class="nav-button ${this._activeRoute === route ? "active" : ""}"
              @click=${(e: Event) => this._scrollToSection(e, route)}
            >
              <md-icon
                slot="icon"
                filled=${this._activeRoute === route || this._exitingRoute === route}
              >
                ${NavComponentConfig.tabs[route].mdIcon}
              </md-icon>
              <span>${NavComponentConfig.tabs[route].label}</span>
            </a>
          `,
        )}
      </div>
    `;
  }

  private _scrollToSection(e: Event, route: Route) {
    e.preventDefault();
    const targetId = route === ROUTES.INFO ? "bio" : route;
    const el = document.getElementById(targetId) || document.querySelector("bento-layout")?.shadowRoot?.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.history.pushState(null, "", `#${targetId}`);
  }

  override render() {
    return html`<nav>${this._renderNavButtons()}</nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nav-component": NavComponent;
  }
}
