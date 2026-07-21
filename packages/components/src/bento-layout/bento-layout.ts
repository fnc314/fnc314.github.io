import { BentoLayoutStyles, TransitionStyles } from "@/lib/bento-layout/bento-layout.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { BentoBoxConfigsArray, titles } from "@fnc314/packages.data";
import { type ABentoBoxConfig, BENTO_BOX_TYPES, BreakpointLabels, type GridPosition } from "@fnc314/packages.types";
import { type TemplateResult, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { author } from "~build/package";

/**
 * @summary BentoLayout - The primary layout component implementing a responsive Bento Grid.
 *   Consolidates profile photo, bio, configurations, contact info, skills, education,
 *   work experience, code projects, and blog posts into individual grid cards.
 *
 * @element bento-layout
 */
@customElement("bento-layout")
export class BentoLayout extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, BentoLayoutStyles, TransitionStyles];

  @state()
  private _bentoBoxConfigs: ABentoBoxConfig[] = BentoBoxConfigsArray(this.breakpoint);

  private renderBentoBox(config: ABentoBoxConfig): TemplateResult {
    const position: GridPosition = config.placement[this.breakpoint];

    let gridStyles = {};
    if (position.breakpoint !== BreakpointLabels.mobile) {
      const rowOffset = `${position?.offsets?.row ? `${position?.offsets?.row} / ` : ""}`;
      const colOffset = `${position?.offsets?.col ? `${position?.offsets?.col} / ` : ""}`;
      gridStyles = {
        gridColumn: `${colOffset} span ${position.span.colSpan}`,
        gridRow: `${rowOffset} span ${position.span.rowSpan}`,
      };
    }

    let cardContent: TemplateResult;
    switch (config.type) {
      case BENTO_BOX_TYPES.profile:
        cardContent = html`
          <profile-card
            class="animate-entry"
            style=${styleMap({ ...gridStyles, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </profile-card>
        `;
        break;
      case BENTO_BOX_TYPES.education:
        cardContent = html`
          <education-card
            class="animate-entry"
            style=${styleMap({ ...gridStyles, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </education-card>
        `;
        break;
      case BENTO_BOX_TYPES.experience:
        cardContent = html`
          <experience-card
            class="animate-entry"
            style=${styleMap({ ...gridStyles, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </experience-card>
        `;
        break;
      case BENTO_BOX_TYPES.blog:
        cardContent = html`
          <blog-card
            class="animate-entry"
            style=${styleMap({ ...gridStyles, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </blog-card>
        `;
        break;
      case BENTO_BOX_TYPES.code:
        cardContent = html`
          <code-card
            class="animate-entry"
            style=${styleMap({ ...gridStyles, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </code-card>
        `;
        break;
      case BENTO_BOX_TYPES.skills:
        cardContent = html`
          <skills-card
            class="animate-entry"
            style=${styleMap({ ...gridStyles, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </skills-card>
        `;
        break;
      case BENTO_BOX_TYPES.settings:
        cardContent = html`
          <settings-card
            class="animate-entry"
            style=${styleMap({ ...gridStyles, blockSize: "100%" })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </settings-card>
        `;
        break;
      default:
        return html`${nothing}`;
    }

    return cardContent;
  }

  override render() {
    const header = html`
      <header class="animate-entry">
        <h1 class="md-typescale-display-large">${author}</h1>
        <p class="md-typescale-title-medium">
          ${unsafeHTML(titles)}
        </p>
      </header>
    `;
    const boxes = this._bentoBoxConfigs.map((boxConfig) => this.renderBentoBox(boxConfig));
    return html`
      <main id="bento-root">
        ${header}
        ${boxes}
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bento-layout": BentoLayout;
  }
}
