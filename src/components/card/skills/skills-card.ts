import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { skillsCardStyles } from "./skills-card.styles";
import { type Weights, type WordCloudWordCategory, makeWordCloudWord } from "@/components/word/word-cloud/word-cloud.types";
import SkillsJson from "@/data/skills.json" with { type: "json" };
import "@/components/card/bento/bento-card";
import "@/components/word/word-cloud/word-cloud";

/**
 * @summary SkillsCard - A card component displaying a skill word cloud.
 *
 * @element skills-card
 */
@customElement("skills-card")
export class SkillsCard extends LitElement {
  static override styles = [skillsCardStyles];

  private getSkillsForWordCloud() {
    return Object.keys(SkillsJson.skills).flatMap((proficiency) =>
      Object.entries(SkillsJson.skills[proficiency as keyof typeof SkillsJson.skills]).map(([word, weight]) =>
        makeWordCloudWord(word, weight as Weights, proficiency as WordCloudWordCategory),
      ),
    );
  }

  override render() {
    return html`
      <bento-card class="skills-container" aria-labelledby="skills-title" scrollable>
        <h2 id="skills-title" class="md-typescale-title-large">Skills &amp; Technologies</h2>
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
