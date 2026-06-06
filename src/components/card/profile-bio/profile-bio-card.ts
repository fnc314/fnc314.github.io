import BioJson from "@/data/bio.json" with { type: "json" };
import PhotoJson from "@/data/photo.json" with { type: "json" };
import { configsService } from "@/services/configs/configs-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * @summary A responsive card component that displays a profile photo and biography.
 *
 * @element profile-bio-card
 */
@customElement("profile-bio-card")
export class ProfileBioCard extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        height: 100%;
      }

      .profile-bio-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-margin-s);
      }

      .profile-picture {
        width: 100%;
        max-height: 300px;
        object-fit: contain;
        border-radius: var(--md-sys-shape-corner-medium);
        border: 2px solid var(--md-sys-color-primary);
      }

      .profile-figcaption {
        color: var(--md-sys-color-on-surface-variant);
        font-size: var(--md-sys-typescale-body-small-size);
        text-align: center;
        margin-top: var(--spacing-margin-xs);
      }
    `,
  ];

  @property({ type: Object })
  private _photoData = PhotoJson[configsService.loadConfigs().colorScheme.theme as keyof typeof PhotoJson];

  @property({ type: String })
  bioText: string = BioJson.bio;

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
    this._photoData = PhotoJson[themeName as keyof typeof PhotoJson];
    this.requestUpdate();
  };

  override render() {
    return html`
      <bento-card class="profile-bio-wrapper" aria-labelledby="profile-title" scrollable>
        <h2 id="profile-title" class="md-typescale-title-large">Info</h2>
        <div class="profile-bio-container">
          <figure>
            <img
              class="profile-picture"
              loading="lazy"
              src=${this._photoData.src}
              alt=${this._photoData.alt}
            />
            <figcaption class="profile-figcaption">${this._photoData.figcaption}</figcaption>
          </figure>
          <div class="bio-text-area">
            <div class="bio-content md-typescale-body-large">
              <p>${unsafeHTML(this.bioText)}</p>
            </div>
          </div>
        </div>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-bio-card": ProfileBioCard;
  }
}
