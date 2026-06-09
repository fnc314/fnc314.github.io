import "@/components/card/bento/bento-card";
import { CodeCardStyles } from "@/components/card/code/code-card.styles";
import "@/components/code/project/code-project";
import CodeJson from "@/data/code.json" with { type: "json" };
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary CodeCard - A card component displaying code projects.
 *
 * @element code-card
 */
@customElement("code-card")
export class CodeCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [CodeCardStyles];

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
        aria-labelledby="code-title"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
      >
        <h2 slot="header" id="code-title" class="md-typescale-title-large">Code Projects</h2>
        <div class="code-list">
          ${CodeJson.projects.map(
            (p) => html`
              <code-project .codeProject="${p}"></code-project>
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
