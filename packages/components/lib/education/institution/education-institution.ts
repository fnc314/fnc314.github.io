import { EducationInstitutionStyles } from "@/lib/education/institution/education-institution.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { readCSSProperty } from "@fnc314/packages.design-tokens";
import { type EducationInstitutionRecord } from "@fnc314/packages.types";
import { type CSSResult, type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("education-institution")
export class EducationInstitution extends UIAwareElement {
  static override styles: CSSResult[] = [
    TextStyles,
    EducationInstitutionStyles
  ]

  @property({ type: Object })
  institute: EducationInstitutionRecord = {} as EducationInstitutionRecord;

  override render(): TemplateResult {
    const datetimeAttr = `${this.institute.graduationDate.date.year}-${this.institute.graduationDate.date.month}`;
    const timeText = `${this.institute.graduationDate.text.month} ${this.institute.graduationDate.text.year}`
    const location =
      `${this.institute.location.city}, ${this.institute.location.state}, ${this.institute.location.country}`;
    return html`
      <div class="education-institution-container">
        <img
          loading="lazy"
          src=${readCSSProperty(
            this.darkMode ? this.institute.designToken.dark : this.institute.designToken.light
          )}
          alt=${`Logo for ${this.institute.institute}`}
        />
        <h3 class="md-typescale-title-large">${this.institute.institute}</h3>
        <span class="md-typescale-body-large">${location}</span>
        <h4 class="md-typescale-title-medium">${this.institute.degree}</h4>
        <time
          class="md-typescale-body-medium"
          datetime="${datetimeAttr}">
          ${timeText}
        </time>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "education-institution": EducationInstitution;
  }
}