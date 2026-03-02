var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ParialHeadingStyles } from "@/styles/partial-styles";
import { LitElement, css, html } from "lit-element";
import { customElement, property } from "lit/decorators.js";
let ProfileList = class ProfileList extends LitElement {
    constructor() {
        super(...arguments);
        this.links = [];
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

        .wrapper-div {
          display: contents;

          dt {
            color: var(--md-sys-color-tertiary);
          }
        }
      }

      .profile-sub-list-container {
        container-type: size;
      }

      @container (min-inline-size: 400px) {
        .profile-sub-list {
          display: grid;
          grid-template-rows: max-content 1fr;

          .sub-list-wrapper-div {
            display: contents;
          }

          dd {
            text-align: center;
          }
        }
      }

      .profile-sub-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        gap: 2rem 1rem;

        .sub-list-wrapper-div {
          display: block;

          dt {
            color: var(--md-sys-color-secondary);
          }
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
            <div class="sub-list-wrapper-div">
              <dt class="md-typescale-title-small">
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
        <div class="wrapper-div">
          <dt class="md-typescale-title-medium">
            Links
          </dt>
          <dd class="profile-sub-list-container">
            ${this.#renderSubList(this.links)}
          </dd>
        </div>
      </dl>
    `;
    }
};
__decorate([
    property({ type: Array })
], ProfileList.prototype, "links", void 0);
ProfileList = __decorate([
    customElement("profile-list")
], ProfileList);
export { ProfileList };
;
;
