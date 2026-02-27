var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import { ParialHeadingStyles } from "./../../styles/partial-styles.js";
let ProfileList = class ProfileList extends LitElement {
    constructor() {
        super(...arguments);
        this.contactInfo = [];
        this.socialInfo = [];
        this.bio = "";
    }
    static { this.styles = [
        ParialHeadingStyles,
        css `
      :host {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
      }

      .profile-list {
        min-height: 100%;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 3rem 1rem;

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
        color: var(--md-sys-color-primary);
      }
    `,
    ]; }
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
        <div>
          <dt class="md-typescale-title-medium">
            Bio
          </dt>
          <dd>${this.bio}</dd>
        </div>
        <div>
          <dt class="md-typescale-title-medium">
            Contact
          </dt>
          <dd>
            ${this.#renderSubList(this.contactInfo)}
          </dd>
        </div>
        <div>
          <dt class="md-typescale-title-medium">
            Social
          </dt>
          <dd>
            ${this.#renderSubList(this.socialInfo)}
          </dd>
        </div>
      </dl>
    `;
    }
};
__decorate([
    property({ type: Array })
], ProfileList.prototype, "contactInfo", void 0);
__decorate([
    property({ type: Array })
], ProfileList.prototype, "socialInfo", void 0);
__decorate([
    property({ type: String })
], ProfileList.prototype, "bio", void 0);
ProfileList = __decorate([
    customElement("profile-list")
], ProfileList);
export { ProfileList };
;
;
