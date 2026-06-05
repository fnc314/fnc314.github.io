import "@/components/card/bento/bento-card";
import "@/components/code/code-project/code-project";
import CodeJson from "@/data/code.json" with { type: "json" };
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { codeCardStyles } from "./code-card.styles";

/**
 * @summary CodeCard - A card component displaying code projects.
 *
 * @element code-card
 */
@customElement("code-card")
export class CodeCard extends LitElement {
  static override styles = [codeCardStyles];

  override render() {
    return html`
      <bento-card class="code-container" aria-labelledby="code-title" scrollable>
        <h2 id="code-title" class="md-typescale-title-large">Code Projects</h2>
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
