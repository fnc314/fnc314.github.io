import { BENTO_BOX_TYPES } from "@/components/bento-layout/bento-layout.types";
import { ProfileCardStyles } from "@/components/card/profile/profile-card.styles";
import { type ProfessionalConnectionJsonData, type ProfessionalConnectionType } from "@/components/connection/professional/professional-connection.types";
import BioJson from "@/data/bio.json" with { type: "json" };
import PhotoJson from "@/data/photo.json" with { type: "json" };
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { configsService } from "@/services/configs/configs-service";
import { TextStyles } from "@/styles/text";
import { Connections } from "@fnc314/packages.data";
import { type ArtifactConnectionData, type ArtifactConnectionType, type ConnectionInstance } from "@fnc314/packages.types";
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
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    ProfileCardStyles,
  ];

  @property({ type: Object, attribute: false, noAccessor: true, state: true })
  photoData = PhotoJson[
    configsService.loadConfigs().colorScheme.theme as keyof typeof PhotoJson
  ];

  @property({ type: String })
  bioText: string = BioJson.bio.long;

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
    this.photoData = PhotoJson[themeName as keyof typeof PhotoJson];
    this.requestUpdate();
  };

  private contactsSection(): TemplateResult {
    const directConnections = html`
      <tr>
        <th scope="row" class="md-typescale-title-large">Contact</th>
        ${
          Object.entries(Connections.direct)
            .map(([method, instance]: [string, ConnectionInstance]) => html`
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
            .map(([type, data]: [ProfessionalConnectionType, ProfessionalConnectionJsonData]) => html`
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
    return html`
      <section>
        <figure>
          <img
            class="profile-picture"
            loading="lazy"
            src=${this.photoData.src}
            alt=${this.photoData.alt}
          />
          <figcaption class="md-typescale-title-medium profile-figcaption">${this.photoData.figcaption}</figcaption>
        </figure>

        <p class="md-typescale-body-large">${unsafeHTML(this.bioText)}</p>
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
