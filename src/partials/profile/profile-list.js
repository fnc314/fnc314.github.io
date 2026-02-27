var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from "lit-element";
import { customElement } from "lit/decorators.js";
import { ParialHeadingStyles } from "./../../styles/partial-styles.js";
import ProfileJson from "./profile.json" with { type: "json" };
let ProfileList = class ProfileList extends LitElement {
    static { this.styles = [
        ParialHeadingStyles,
        css `
      :host {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
      }

      .profile-list {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 2rem 3rem;
        padding-inline: 1rem;

        div {
          display: contents;
        }
      }

      .profile-sub-list {
        display: grid;
        grid-template-rows: max-content 1fr;
        gap: 1rem;

        div {
          display: contents;
        }

        dd {
          text-align: center;
        }
      }

      dt {
        font-weight: 600;
        text-align: center;
      }

      dd {
        margin: unset;
        color: var(--md-sys-color-on-surface-variant);
        overflow-wrap: anywhere;
      }

      a {
        color: var(--md-sys-color-on-surface-variant);
      }
    `,
    ]; }
    #capitalizeKey(key) {
        return key.charAt(0).toUpperCase() + key.slice(1);
    }
    #renderSubList(contents) {
        return html `
      <dl class="profile-sub-list">
        ${contents.map((info) => html `
            <div>
              <dt>
                ${info.method}
              </dt>
              <dd .innerHTML=${info.htmlNoIcon}></dd>
            </div>
          `)}
      </dl>
    `;
    }
    render() {
        return html `
      <dl class="profile-list">
        ${Object.keys(ProfileJson)
            .map((key) => {
            if (key === "contactInfo" || key === "socialInfo") {
                return html `
                  <div>
                    <dt>${this.#capitalizeKey(key).replace("Info", "")}</dt>
                    <dd>
                      ${this.#renderSubList(ProfileJson[key])}
                    </dd>
                  </div>
                `;
            }
            else if (key === "proficiencies" || key === "photo") {
                return;
            }
            else {
                return html `
                  <div>
                    <dt>${this.#capitalizeKey(key)}</dt>
                    <dd>${ProfileJson[`${key}`]}</dd>
                  </div>
                `;
            }
        })}
      </dl>
    `;
    }
};
ProfileList = __decorate([
    customElement("profile-list")
], ProfileList);
export { ProfileList };
;
;
