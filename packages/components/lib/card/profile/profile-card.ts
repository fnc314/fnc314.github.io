import { ProfileCardStyles } from "@/lib/card/profile/profile-card.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { Biographies, Connections, Photos } from "@fnc314/packages.data";
import { configsService } from "@fnc314/packages.services";
import {
  type ArtifactConnectionData,
  type ArtifactConnectionType, BENTO_BOX_TYPES, type ConnectionInstance,
  type ProfessionalConnectionJsonData
} from "@fnc314/packages.types";
import { type TemplateResult, html } from "lit";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary A responsive card component that displays a profile photo and biography.
 *
 * @element profile-card
 */
@customElement("profile-card")
export class ProfileCard extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [
    TextStyles,
    ProfileCardStyles,
  ];

  @property({ type: Object, attribute: false, noAccessor: true, state: true })
  photoData = Photos[configsService.loadConfigs().colorScheme.theme];

  @property({ type: String })
  bioText: string = Biographies.bio.long;

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override connectedCallback() {
    super.connectedCallback();
    this.id = "bio";
    configsService.addEventListener("app-configs.change", this._onConfigChange);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    configsService.removeEventListener("app-configs.change", this._onConfigChange);
  }

  private _onConfigChange = () => {
    const themeName = configsService.loadConfigs().colorScheme.theme;
    this.photoData = Photos[themeName];
    this.requestUpdate();
  };

  private contactsSection(): TemplateResult {
    const directConnections = html`
      <tr>
        <th scope="row" class="md-typescale-title-large">Contact</th>
        ${
          Object.entries(Connections.direct)
            .map(([_, instance]: [string, ConnectionInstance]) => html`
              <td colspan="3">
                <direct-connection .connectionInstance=${instance}></direct-connection>
              </td>
            `)
        }
      </tr>
    `;
    const professionalConnections = html`
      <tr>
        <th scope="row" class="md-typescale-title-large">Network</th>
        ${
          Object.entries(Connections.social)
            .map(([type, data]: [string, ProfessionalConnectionJsonData]) => html`
              <td colspan="2">
                <professional-connection
                  .professionalConnectionType=${type}
                  .professionalConnectionData=${data}>
                </professional-connection>
              </td>
            `)
        }
      </tr>
    `;
    const artifactConnections = html`
      <tr>
        <th scope="row" class="md-typescale-title-large">Resume</th>
        ${
          Object.entries(Connections.resume)
            .map(([name, data]: [string, ArtifactConnectionData]) => html`
              <td colspan="3">
                <artifact-connection
                  .artifactConnectionType=${name as ArtifactConnectionType}
                  .artifactConnectionData=${data}>
                </artifact-connection>
              </td>
            `
            )
        }
      </tr>
    `;
    return html`
      <table>
        <tbody>
          ${directConnections}
          ${professionalConnections}
          ${artifactConnections}
        </tbody>
      </table>
    `;
  }

  private imageSection(): TemplateResult {
    const srcSet = `
      ${this.photoData.srcSet.mobile} 750w,
      ${this.photoData.srcSet.tablet} 1200w,
      ${this.photoData.srcSet.desktop} 15000w
    `;
    return html`
      <section>
        <figure>
          <picture>
            <source
              type="image/webp"
              srcset=${srcSet}
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 50vw, 33vw"
            >
            <img
              class="profile-picture"
              loading="lazy"
              src=${this.photoData.src}
              alt=${this.photoData.alt}
            />
          </picture>
          <figcaption class="md-typescale-title-medium profile-figcaption">${this.photoData.figcaption}</figcaption>
        </figure>

        ${unsafeHTML(this.bioText)}
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
          ${this.contactsSection()}
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
