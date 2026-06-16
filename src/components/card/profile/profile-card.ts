import { ProfileCardStyles } from "@/components/card/profile/profile-card.styles";
import { type ArtifactConnectionData, ArtifactConnectionJson, type ArtifactConnectionType } from "@/components/connection/artifact/artifact-connection.types";
import { type ConnectionInstance, DirectConnections } from "@/components/connection/direct/direct-connection.types";
import { type ProfessionalConnectionJsonData, type ProfessionalConnectionType, ProfessionalConnections } from "@/components/connection/professional/professional-connection.types";
import BioJson from "@/data/bio.json" with { type: "json" };
import PhotoJson from "@/data/photo.json" with { type: "json" };
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { configsService } from "@/services/configs/configs-service";
import { TextStyles } from "@/styles/text";
import { type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

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

  private contactSection(): TemplateResult {
    const directConnections = Object.entries(DirectConnections)
      .map(([method, instance]: [string, ConnectionInstance]) => html`
        <li>
          <direct-connection .connectionInstance=${instance}></direct-connection>
        </li>
      `);
    return html`
      <section class="sub-section">
        <h3 class="md-typescale-title-small">Contact</h3>
        <ul>
          ${directConnections}
        </ul>
      </section>
    `;
  }

  private networkSection(): TemplateResult {
    const professionalConnections = Object.entries(ProfessionalConnections)
      .map(([type, data]: [string, ProfessionalConnectionJsonData]) => html`
        <li>
          <professional-connection
            .professionalConnectionType=${type as ProfessionalConnectionType}
            .professionalConnectionData=${data}>
          </professional-connection>
        </li>
      `);
    return html`
      <section class="sub-section">
        <h3 class="md-typescale-title-small">Network</h3>
        <ul>
          ${professionalConnections}
        </ul>
      </section>
    `;
  }

  private cardContent(): TemplateResult {


     const artifactConnections = Object.entries(ArtifactConnectionJson)
      .map(([name, data]: [string, ArtifactConnectionData]) => html`
        <li>
          <artifact-connection
            .artifactConnectionType=${name as ArtifactConnectionType}
            .artifactConnectionData=${data}>
          </artifact-connection>
        </li>
      `
      );
    return html`
      <article>
        <section>
          <figure>
            <img
              class="profile-picture"
              loading="lazy"
              src=${this.photoData.src}
              alt=${this.photoData.alt}
            />
            <figcaption class="profile-figcaption">${this.photoData.figcaption}</figcaption>
          </figure>

          <div class="md-typescale-body-large">
            ${unsafeHTML(this.bioText)}
          </div>
        </section>
        ${this.contactSection()}
        ${this.networkSection()}
        <section class="sub-section">
          <h3 class="md-typescale-title-small">Resume</h3>
          <ul>
            ${artifactConnections}
          </ul>
        </section>
      </article>
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
        .bentoCardTitle=${"Info"}
      >
        ${this.cardContent()}
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-card": ProfileCard;
  }
}
