var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit-element";
import { customElement } from "lit/decorators.js";
import { ParialHeadingStyles } from "./../../styles/partial-styles.js";
import "./contact-list.js";
import ProfileJson from "./profile.json" with { type: "json" };
let ProfilePartial = class ProfilePartial extends LitElement {
    static { this.styles = [
        ParialHeadingStyles,
        css `
      :host {
        container-type: inline-size;
      }

      .profile-container {
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
          "header"
          "bio"
          "contact";
        gap: 1rem;

        header, aside, section {
          position: relative;
          --md-elevation-level: 3;
          border-radius: 1rem;
        }
      }

      @media (min-width: 600px) {
        .profile-container {
          grid-template-rows: auto 1fr;
          grid-template-columns: minmax(min-content, 2fr) minmax(min-content, 1fr);
          grid-template-areas:
            "header header"
            "bio contact";
        }
      }

      header {
        grid-area: header;
      }

      .about-me {
        grid-area: bio;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;

        h2 {
          margin: unset;
        }

        p::first-letter {
          text-transform: uppercase;
          font-size: 2rem;
        }
      }

      .contact {
        grid-area: contact;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 1rem;

        h2 {
          align-self: center;
          margin: unset;
        }
      }

    `,
    ]; }
    render() {
        return html `
      <article class="profile-container">
        <header>
          <md-elevation></md-elevation>
          <h1 class="md-typescale-title-medium">Franco N. Colaizzi</h1>
        </header>

        <section class="about-me">
          <md-elevation></md-elevation>
          <h2>About Me</h2>
          <p>${ProfileJson.bio}</p>
        </section>

        <aside class="contact">
          <md-elevation></md-elevation>
          <h2>Contact</h2>
          <contact-list .contactInfo=${ProfileJson.contactInfo}></contact-list>
        </aside>
      </article>
    `;
    }
};
ProfilePartial = __decorate([
    customElement("profile-partial")
], ProfilePartial);
export { ProfilePartial };
;
