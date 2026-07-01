import { BENTO_BOX_TYPES } from "@/components/bento-layout/bento-layout.types";
import "@/components/card/bento/bento-card";
import { CodeCardStyles } from "@/components/card/code/code-card.styles";
import "@/components/code/repo/code-repo";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { Projects } from "@fnc314/packages.data";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary CodeCard - A card component displaying code projects.
 *
 * @element code-card
 */
@customElement("code-card")
export class CodeCard extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    CodeCardStyles
  ];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override connectedCallback() {
    super.connectedCallback();
    this.id = "code";
  }

  override render() {
    return html`
      <bento-card
        class="code-container"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Code"}
        .bentoTag=${BENTO_BOX_TYPES.code}
      >
        <div class="code-list">
          ${Projects.map(
            (p) => html`
              <code-repo .codeRepo="${p}"></code-repo>
            `,
          )}
        </div>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-card": CodeCard;
  }
}
