import { BentoLayoutStyles, TransitionStyles } from "@/lib/bento-layout/bento-layout.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { BentoBoxConfigsArray, titles } from "@fnc314/packages.data";
import { type ABentoBoxConfig, BENTO_BOX_TYPES, BreakpointLabels } from "@fnc314/packages.types";
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
    let cardStyles = { };
    if (this.breakpoint !== BreakpointLabels.mobile) {
      cardStyles = { gridArea: config.type };
    }

    cardStyles = {
      ...cardStyles,
      blockSize: "100%"
    };

    switch (config.type) {
      case BENTO_BOX_TYPES.profile:
        return html`
          <profile-card
            class="animate-entry"
            style=${styleMap({ ...cardStyles })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </profile-card>
        `;
      case BENTO_BOX_TYPES.connections:
        return html`
          <connections-card
            class="animate-entry"
            style=${styleMap({ ...cardStyles })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </connections-card>
        `;
      case BENTO_BOX_TYPES.education:
        return html`
          <education-card
            class="animate-entry"
            style=${styleMap({ ...cardStyles })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </education-card>
        `;
      case BENTO_BOX_TYPES.experience:
        return html`
          <experience-card
            class="animate-entry"
            style=${styleMap({ ...cardStyles })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </experience-card>
        `;
      case BENTO_BOX_TYPES.blog:
        return html`
          <blog-card
            class="animate-entry"
            style=${styleMap({ ...cardStyles })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </blog-card>
        `;
      case BENTO_BOX_TYPES.code:
        return html`
          <code-card
            class="animate-entry"
            style=${styleMap({ ...cardStyles })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </code-card>
        `;
      case BENTO_BOX_TYPES.skills:
        return html`
          <skills-card
            class="animate-entry"
            style=${styleMap({ ...cardStyles })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </skills-card>
        `;
      case BENTO_BOX_TYPES.settings:
        return html`
          <settings-card
            class="animate-entry"
            style=${styleMap({ ...cardStyles })}
            .expanded=${config.isExpanded(this.breakpoint)}
          >
          </settings-card>
        `;
      default:
        return html`${nothing}`;
    }
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
