import { css, html, LitElement } from "lit-element";
import { customElement } from "lit/decorators.js";
import { ParialHeadingStyles } from "./../../../dist/styles/partial-styles";
import "./contact-list";
import ProfileJson from "./profile.json" with { type: "json" };

@customElement("profile-partial")
export class ProfilePartial extends LitElement {
  static override styles = [
    ParialHeadingStyles,
    css`
      :host {}

      .profile-container {
        padding-block-start: 1rem;
        display: grid;
        grid-template-areas:
          "header header header"
          "contact bio bio";
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;

        header, aside, section {
          position: relative;
          --md-elevation-level: 3;
          border-radius: 1rem;
          padding: 1rem;
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

        h2 {
          align-self: center;
          margin: unset;
        }
      }

    `,
  ];

  override render() {
    return html`
      <article class="profile-container">
        <header>
          <md-elevation></md-elevation>
          <h1>Profile</h1>
        </header>

        <aside class="contact">
          <md-elevation></md-elevation>
          <h2>Contact</h2>
          <contact-list .contactInfo=${ProfileJson.contactInfo}></contact-list>
        </aside>

        <section class="about-me">
          <md-elevation></md-elevation>
          <h2>About Me</h2>
          <p>${ProfileJson.bio}</p>
        </section>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-partial": ProfilePartial;
  }

};