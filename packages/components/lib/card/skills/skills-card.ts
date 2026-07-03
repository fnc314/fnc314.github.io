import "@/lib/card/bento/bento-card";
import { SkillsCardStyles } from "@/lib/card/skills/skills-card.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import "@/lib/word/cloud/word-cloud";
import { type Weights, type WordCloudWordCategory, makeWordCloudWord } from "@/lib/word/cloud/word-cloud.types";
import { Skills } from "@fnc314/packages.data";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary SkillsCard - A card component displaying a skill word cloud.
 *
 * @element skills-card
 */
@customElement("skills-card")
export class SkillsCard extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [SkillsCardStyles];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  private getSkillsForWordCloud() {
    return Object.keys(Skills).flatMap((proficiency) =>
      Object.entries(Skills[proficiency as keyof typeof Skills]).map(([word, weight]) =>
        makeWordCloudWord(word, weight as Weights, proficiency as WordCloudWordCategory),
      ),
    );
  }

  override render() {
    return html`
      <bento-card
        class="skills-container"
        aria-labelledby="skills-title"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Skills"}
      >
        <word-cloud
          .words=${this.getSkillsForWordCloud()}
          instant-clear
          grouping="quartile"
          sorting="by-alphabet"
          appearance="sequential"
          delay="50"
          threshold="0.05"
        ></word-cloud>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "skills-card": SkillsCard;
  }
}
