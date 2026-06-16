import { BENTO_BOX_TYPES } from "@/components/bento-layout/bento-layout.types";
import "@/components/card/bento/bento-card";
import { WorkCardStyles } from "@/components/card/experience/experience-card.styles";
import "@/components/work/experience/work-experience";
import { data as WorkJson } from "@/components/work/experience/work-experience.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary WorkCard - A card component displaying work experience.
 *
 * @element experience-card
 */
@customElement("experience-card")
export class ExperienceCard extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    WorkCardStyles
  ];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override connectedCallback() {
    super.connectedCallback();
    this.id = "work";
  }

  override render() {
    return html`
      <bento-card
        class="work-container"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Experience"}
        .bentoTag=${BENTO_BOX_TYPES.work}
      >
        ${WorkJson.experiences.map(
          (exp) => html`
            <work-experience
              .isNested="${false}"
              .experienceOrg="${exp.employer}"
              .experienceRole="${exp.role}"
              .experienceSummary="${exp.summary}"
              .dateStart="${exp.dates.start}"
              .dateEnd="${exp.dates.end}"
              .jobs="${exp.jobs}"
              .summaries="${exp.summaries ?? []}"
            ></work-experience>
          `,
        )}
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "experience-card": ExperienceCard;
  }
}
