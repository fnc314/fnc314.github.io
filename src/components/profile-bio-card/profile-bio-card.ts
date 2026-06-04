import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import BioJson from "@/data/bio.json" with { type: "json" };
import { themeService } from "@/services/theme/theme-service"; // Will need this to get themePhoto details

/**
 * @summary A responsive card component that displays a profile photo, name, and biography.
 *          It adapts its layout for desktop/tablet (3-column: Image | Text | Text)
 *          and mobile (centered image above 2-column text).
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
      }

      .profile-bio-container {
        display: grid;
        gap: var(--spacing-margin-s);
        align-items: start; /* Align items to the start of the grid cell */
      }

      /* Default to mobile layout: centered image above text */
      .profile-photo-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--spacing-margin-xs);
      }

      .profile-picture {
        width: 100%;
        max-width: 180px;
        height: auto;
        border-radius: var(--md-sys-shape-corner-medium);
        object-fit: cover;
        border: 2px solid var(--md-sys-color-primary);
      }

      .profile-figcaption {
        font-style: italic;
        color: var(--md-sys-color-on-surface-variant);
      }

      .bio-content p {
        margin: var(--spacing-reset);
        line-height: 1.6;
        text-align: justify;
      }

      /* Desktop/Tablet Grid assignments (>=737px, assuming 3 columns for profile/bio) */
      @media screen and (min-width: 737px) {
        .profile-bio-container {
          grid-template-columns: 1fr 2fr; /* Image | Bio Text */
        }

        .profile-photo-area {
          grid-column: span 1;
          align-items: start;
          text-align: left;
        }

        .profile-picture {
          max-width: 100%; /* Adjust for grid column */
        }

        .bio-text-area {
          grid-column: span 1;
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
          <h2 class="md-typescale-title-large">Franco N. Colaizzi</h2>
          <picture>
            <source srcset=${this.themePhoto.src} type="image/jpeg" />
            <img
              class="profile-picture"
              loading="lazy"
              src=${this.themePhoto.src}
              alt=${this.themePhoto.alt}
            />
          </picture>
          <figcaption class="profile-figcaption md-typescale-label-large">
            ${this.themePhoto.figcaption}
          </figcaption>
        </div>
        <div class="bio-text-area">
          <h2 class="md-typescale-title-large">Biography</h2>
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
