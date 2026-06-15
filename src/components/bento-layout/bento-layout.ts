import { BentoLayoutStyles } from "@/components/bento-layout/bento-layout.styles";
import { type ABentoBoxConfig, BentoBoxConfigs, type GridPosition } from "@/components/bento-layout/bento-layout.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { type TemplateResult, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

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
    TextStyles,
    BentoLayoutStyles,
  ];

  @state()
  private _bentoBoxConfigs: ABentoBoxConfig[] = BentoBoxConfigs(this.breakpoint);

  private renderBentoBox(config: ABentoBoxConfig): TemplateResult {
    const position: GridPosition = config.placement[this.breakpoint];

    const gridArea = position.breakpoint !== "mobile"
      ? (position.area || `${position.row.start} / ${position.column.start} / ${position.row.end} / ${position.column.end}`)
      : undefined;

    let cardContent: TemplateResult;
    switch (config.type) {
      case "profile-photo-bio":
        cardContent = html`<profile-bio-card .expanded=${config.expanded}></profile-bio-card>`;
        break;
      case "connect":
        cardContent = html`<connect-card .expanded=${config.expanded}></connect-card>`;
        break;
      case "education":
        cardContent = html`<education-card .expanded=${config.expanded}></education-card>`;
        break;
      case "work":
        cardContent = html`<work-card .expanded=${config.expanded}></work-card>`;
        break;
      case "blog":
        cardContent = html`<blog-card .expanded=${config.expanded}></blog-card>`;
        break;
      case "code":
        cardContent = html`<code-card .expanded=${config.expanded}></code-card>`;
        break;
      case "skills":
        cardContent = html`<skills-card .expanded=${config.expanded}></skills-card>`;
        break;
      case "settings":
        cardContent = html`<settings-card .expanded=${config.expanded}></settings-card>`;
        break;
      default:
        return html`${nothing}`;
    }

    return html`
      <section
        class="card-${config.type}"
        style=${styleMap({ gridArea })}
      >
        ${cardContent}
      </section>
    `;
  }

  override render() {
    return html`
      <main id="bento-root">
        <h1 class="md-typescale-headline-large">Franco N. Colaizzi</h1>
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
