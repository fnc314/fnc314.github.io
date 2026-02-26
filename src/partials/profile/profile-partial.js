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
import "./profile-list.js";
let ProfilePartial = class ProfilePartial extends LitElement {
    static { this.styles = [
        ParialHeadingStyles,
        css `
      :host {
        container-type: size;
      }

      .profile-container {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-areas:
          "header"
          "profile-list";
        gap: 1rem;

        header {
          border-radius: 1rem;
        }
      }

      @media (min-width: 600px) {
        .profile-container {
          grid-template-rows: auto 1fr;
          grid-template-columns: minmax(min-content, 1fr);
          grid-template-areas:
            "header"
            "profile-list";
        }
      }

      header {
        grid-area: header;
      }

      section {
        grid-area: profile-list;
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

        <section class="profile-list">
          <profile-list></profile-list>
        </section>
      </article>
    `;
    }
};
ProfilePartial = __decorate([
    customElement("profile-partial")
], ProfilePartial);
export { ProfilePartial };
;
