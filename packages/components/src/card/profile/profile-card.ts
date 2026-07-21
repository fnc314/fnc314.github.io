import { ProfileCardStyles } from "@/lib/card/profile/profile-card.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { Biographies, Connections, Photos } from "@fnc314/packages.data";
import { configsService } from "@fnc314/packages.services";
import {
    APP_CONFIGS_CHANGE_EVENT_NAME,
    type ArtifactConnectionData,
    type ArtifactConnectionType,
    BENTO_BOX_TYPES,
    type BioExtended,
    type ConnectionInstance,
    type ProfessionalConnectionJsonData,
} from "@fnc314/packages.types";
import { type TemplateResult, html, unsafeCSS } from "lit";
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
  aboutMe: BioExtended = Biographies.bio.extended;

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override connectedCallback() {
    super.connectedCallback();
    this.id = "bio";
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
    const summary = this.aboutMe.summary
      .map((sentence) => html`
        <p class="md-typescale-body-large">
          ${sentence}
        </p>
      `);
    const sections = this.aboutMe.sections
      .filter((section) =>
        section.title.length > 0 &&
        (
          section.content.length > 0 &&
          section.content.filter((content) => content.trim().length > 0).length > 0
        )
      )
      .map((section) => html`
        <section aria-label="${section.title}">
          <header>
            <h4
              class="md-typescale-title-small"
              id="about-me-section-header"
              >
              ${section.title}
            </h4>
          </header>
          <ul>
          ${
            section.content
              .map((sentence) => html`
                <li class="md-typescale-body-large">${unsafeHTML(sentence)}</li>
              `)
          }
          </ul>
        </section>
      `);
    return html`
      <article aria-labelledby="about-me-heading">
        <header>
          <h3 class="md-typescale-title-small" id="about-me-heading">About Me</h3>
          <p class="md-typescale-label-medium">${this.aboutMe.opener}</p>
        </header>

        <section aria-label="summary">
          ${summary}
        </section>

        ${sections}

        <footer>
          <p class="md-typescale-body-large accented">${this.aboutMe.closer}</p>
        </footer>
      </article>
    `;
  }

  private contactsDefinitionList(): TemplateResult {
    const directConnectionsCount = Object.entries(Connections.direct).length;
    const directConnectionsColSpan = Math.floor(9 / directConnectionsCount);
    const contact = html`
      <div>
        <dt class="md-typescale-title-large">Contact</dt>
        ${
          Object.entries(Connections.direct).map(
            ([_, instance]: [string, ConnectionInstance], index: number) =>
              html`
                <dd style="${unsafeCSS(`grid-column: ${index === 0 ? 2 : index * (1 + directConnectionsColSpan)} / span ${directConnectionsColSpan}`)}">
                  <direct-connection
                    .connectionInstance=${instance}>
                  </direct-connection>
                </dd>
              `
          )
        }
      </div>
    `;

    const socialConnectionsCount = Object.entries(Connections.social).length;
    const socialConnectionsColSpan = Math.floor(9 / socialConnectionsCount);
    const network = html`
      <div>
        <dt class="md-typescale-title-large">Network</dt>
        ${Object.entries(Connections.social).map(
          ([type, data]: [string, ProfessionalConnectionJsonData], index: number) => html`
            <dd style="${unsafeCSS(`grid-column: ${(index * socialConnectionsColSpan) + 1} / span ${socialConnectionsColSpan}`)}">
              <professional-connection
                .professionalConnectionType=${type}
                .professionalConnectionData=${data}
              >
              </professional-connection>
            </dd>
          `,
        )}
      </div>
    `;

    const resumeConnectionsCount = Object.entries(Connections.resume).length;
    const resumeConnectionsColSpan = Math.floor(9 / resumeConnectionsCount);
    const resume = html`
      <div>
        <dt class="md-typescale-title-large">Resume</dt>
        ${Object.entries(Connections.resume).map(
          ([name, data]: [string, ArtifactConnectionData], index: number) => html`
            <dd style="${unsafeCSS(`grid-column: ${index === 0 ? 2 : index * (1 + resumeConnectionsColSpan)} / span ${resumeConnectionsColSpan}`)}">
              <artifact-connection
                .artifactConnectionType=${name as ArtifactConnectionType}
                .artifactConnectionData=${data}
              >
              </artifact-connection>
            </dd>
          `,
        )}
      </div>
    `;

    return html`
      <dl>
        ${contact}
        ${network}
        ${resume}
      </dl>
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
        class="profile-bio-wrapper"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Profile"}
        .bentoTag=${BENTO_BOX_TYPES.profile}
      >
        <article>
          ${this.imageSection()}
          <!-- ${this.renderAboutMe()} -->
          ${unsafeHTML(Biographies.bio.long)}
          ${this.contactsDefinitionList()}
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
