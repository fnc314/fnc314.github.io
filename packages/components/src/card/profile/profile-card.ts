import { ProfileCardStyles } from "@/lib/card/profile/profile-card.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { Biography, Photos } from "@fnc314/packages.data";
import { configsService } from "@fnc314/packages.services";
import {
    APP_CONFIGS_CHANGE_EVENT_NAME,
    BENTO_BOX_TYPES,
    type BioExtended
} from "@fnc314/packages.types";
import { type TemplateResult, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * @summary A responsive card component that displays a profile photo and biography.
 *
 * @element profile-card
 */
@customElement("profile-card")
export class ProfileCard extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, ProfileCardStyles];

  @property({ type: Object, attribute: false, noAccessor: true, state: true })
  photoData = Photos[configsService.loadConfigs().colorScheme.theme];

  @property({ type: Object })
  aboutMe: BioExtended = Biography;

  @property({ type: Boolean })
  expanded = true;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override connectedCallback() {
    super.connectedCallback();
    this.id = BENTO_BOX_TYPES.profile;
    configsService.addEventListener(APP_CONFIGS_CHANGE_EVENT_NAME, this._onConfigChange);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    configsService.removeEventListener(APP_CONFIGS_CHANGE_EVENT_NAME, this._onConfigChange);
  }

  private _onConfigChange = () => {
    const themeName = configsService.loadConfigs().colorScheme.theme;
    this.photoData = Photos[themeName];
    this.requestUpdate();
  };

  private renderAboutMe(): TemplateResult {
    const sections = this.aboutMe.sections
      .filter((section) =>
        section.title.trim().length > 0
      )
      .map((section) => {
        let sectionContent: TemplateResult = html`${nothing}`
        if ("listLeadingParagraph" in section.content) {
          sectionContent = html`
            <p class="md-typescale-body-large">${unsafeHTML(section.content.listLeadingParagraph)}</p>
            <ul class="about-me-list">
              ${section.content.list.map((li) => html`<li class="md-typescale-body-large">${unsafeHTML(li)}</li>`)}
            </ul>
          `;
        } else if ("list" in section.content) {
          sectionContent = html`
            <ul class="about-me-list">
              ${section.content.list.map((li) => html`<li class="md-typescale-body-large">${unsafeHTML(li)}</li>`)}
            </ul>
          `;
        } else {
          sectionContent = html`
            <p class="md-typescale-body-large">
              ${unsafeHTML(section.content.content)}
            </p>
          `;
        }

        const sectionHeaderId = section.title.replaceAll(" ", "-").toLowerCase();

        return html`
          <section class="about-me-section" aria-label="${section.title}">
            <header>
              <h4
                class="md-typescale-title-large"
                id=${sectionHeaderId}
                >
                ${section.title}
              </h4>
            </header>
            <section>
              ${sectionContent}
            </section>
          </section>
        `;
      });

    return html`
      <article aria-label="About Me">
        <header>
          <h3 class="md-typescale-headline-small" id="about-me-heading">About Me</h3>
        </header>

        <section aria-label="Summary">
          <p class="md-typescale-body-large">${this.aboutMe.opener}</p>
        </section>

        ${sections}
      </article>
    `;
  }

  private imageSection(): TemplateResult {
    const srcSet = `
      ${this.photoData.srcSet.mobile} 750w,
      ${this.photoData.srcSet.tablet} 1200w,
      ${this.photoData.srcSet.desktop} 1500w
    `;
    return html`
      <section>
        <figure>
          <picture>
            <source
              type="image/webp"
              srcset=${srcSet}
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 33vw"
            />
            <img
              class="profile-picture"
              loading="eager"
              src=${this.photoData.src}
              alt=${this.photoData.alt}
              fetchpriority="high"
              decoding="sync"
            />
          </picture>
          <figcaption class="md-typescale-title-medium profile-figcaption">${this.photoData.figcaption}</figcaption>
        </figure>
      </section>
    `;
  }

  override render() {
    return html`
      <bento-card
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Profile"}
        .bentoTag=${BENTO_BOX_TYPES.profile}
      >
        <article>
          ${this.imageSection()}
          ${this.renderAboutMe()}
        </article>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-card": ProfileCard;
  }
}
