import { ProfileCardStyles } from "@/components/card/profile/profile-card.styles";
import BioJson from "@/data/bio.json" with { type: "json" };
import PhotoJson from "@/data/photo.json" with { type: "json" };
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { configsService } from "@/services/configs/configs-service";
import { TextStyles } from "@/styles/text";
import { html } from "lit";
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
              ${unsafeHTML(this.bioText)}
            </div>
          </div>
        </div>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-card": ProfileCard;
  }
}
