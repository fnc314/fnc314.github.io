import { BentoLayoutStyles } from "@/components/bento-layout/bento-layout.styles";
import { type ABentoBoxConfig, BENTO_BOX_TYPES, BentoBoxConfigs, type GridPosition } from "@/components/bento-layout/bento-layout.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { Breakpoints } from "@fnc314/design-tokens";
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

    const gridArea = position.breakpoint === Breakpoints.BreakpointLabels.mobile
      ? undefined
      : position.area;

    let cardContent: TemplateResult;
    switch (config.type) {
      case BENTO_BOX_TYPES.profile:
        cardContent = html`
          <profile-card
            style=${styleMap({ gridArea, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}>
          </profile-card>
        `;
        break;
      case BENTO_BOX_TYPES.education:
        cardContent = html`
          <education-card
            style=${styleMap({ gridArea, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}>
          </education-card>
        `;
        break;
      case BENTO_BOX_TYPES.work:
        cardContent = html`
          <experience-card
            style=${styleMap({ gridArea, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}>
          </experience-card>
        `;
        break;
      case BENTO_BOX_TYPES.blog:
        cardContent = html`
          <blog-card
            style=${styleMap({ gridArea, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}>
          </blog-card>
        `;
        break;
      case BENTO_BOX_TYPES.code:
        cardContent = html`
          <code-card
            style=${styleMap({ gridArea, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}>
          </code-card>
        `;
        break;
      case BENTO_BOX_TYPES.skills:
        cardContent = html`
          <skills-card
            style=${styleMap({ gridArea, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}>
          </skills-card>
        `;
        break;
      case BENTO_BOX_TYPES.settings:
        cardContent = html`
          <settings-card
            style=${styleMap({ gridArea, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}>
          </settings-card>
        `;
        break;
      default:
        return html`${nothing}`;
    }

    return cardContent;
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
