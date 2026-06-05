import BioJson from "@/data/bio.json" with { type: "json" };
import { themeService } from "@/services/theme/theme-service";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * @summary A responsive card component that displays a profile photo and biography
 *          using an internal grid layout for optimal space distribution.
 *
 * @element profile-bio-card
 * @property {Object} themePhoto - An object containing `src`, `alt`, and `figcaption` for the profile picture.
 * @property {string} bioText - The biography text to display.
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

      /* Base Mobile Grid (3x2: Row x Column) */
      .profile-bio-container {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-margin-s);
        height: 100%;
      }

      .profile-photo-area {
        grid-row: span 2;
        grid-column: span 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .profile-picture {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--md-sys-shape-corner-medium);
        border: 2px solid var(--md-sys-color-primary);
      }

      .bio-text-area {
        grid-row: span 1;
        grid-column: span 2;
        overflow-y: auto;
      }

      /* Desktop/Tablet Grid (3x3) */
      @media screen and (width >= 737px) {
        .profile-bio-container {
          grid-template-rows: repeat(3, 1fr);
          grid-template-columns: repeat(3, 1fr);
        }

        .profile-photo-area {
          grid-row: span 2;
          grid-column: span 3;
        }

        .bio-text-area {
          grid-row: span 1;
          grid-column: span 3;
        }
      }
    `,
  ];

  @property({ type: Object })
  themePhoto = themeService.currentThemeConfig().themePhoto;

  @property({ type: String })
  bioText: string = BioJson.bio;

  override render() {
    return html`
      <div class="profile-bio-container">
        <div class="profile-photo-area">
          <picture>
            <source srcset=${this.themePhoto.src} type="image/jpeg" />
            <img
              class="profile-picture"
              loading="lazy"
              src=${this.themePhoto.src}
              alt=${this.themePhoto.alt}
            />
          </picture>
        </div>
        <div class="bio-text-area">
          <h2 class="md-typescale-title-medium">Bio</h2>
          <div class="bio-content md-typescale-body-large">
            <p>${unsafeHTML(this.bioText)}</p>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-bio-card": ProfileBioCard;
  }
}
