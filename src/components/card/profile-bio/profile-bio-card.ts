import BioJson from "@/data/bio.json" with { type: "json" };
import PhotoJson from "@/data/photo.json" with { type: "json" };
import { configsService } from "@/services/configs/configs-service";
import { TextStyles } from "@/styles/text";
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
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    css`
      :host {
        display: block;
        height: 100%;
      }

      .profile-bio-container {
        display: flex;
        flex-direction: column;
        gap: var(--spaces-gap-s);
      }

      .profile-picture {
        border: var(--sizes-thickness-xxs) solid var(--md-sys-color-primary);
        border-radius: var(--md-sys-shape-corner-medium);
        max-height: 300px;
        object-fit: contain;
        width: 100%;
      }

      .profile-figcaption {
        color: var(--md-sys-color-on-surface-variant);
        font-size: var(--md-sys-typescale-body-small-size);
        margin-top: var(--spaces-margin-xs);
        text-align: center;
      }
    `,
  ];

  @property({ type: Object, attribute: false, noAccessor: true, state: true })
  photoData = PhotoJson[
    configsService.loadConfigs().colorScheme.theme as keyof typeof PhotoJson
  ];

  @property({ type: String })
  bioText: string = BioJson.bio;

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
        <div class="profile-bio-container">
          <figure>
            <img
              class="profile-picture"
              loading="lazy"
              src=${this.photoData.src}
              alt=${this.photoData.alt}
            />
            <figcaption class="profile-figcaption">${this.photoData.figcaption}</figcaption>
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
