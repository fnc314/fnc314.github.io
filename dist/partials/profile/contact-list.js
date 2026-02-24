var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit-element";
import { customElement, property } from "lit/decorators.js";
let ContactList = class ContactList extends LitElement {
    constructor() {
        super(...arguments);
        this.contactInfo = [];
    }
    static { this.styles = css `
    :host {
      display: contents;
    }

    dl {
      display: grid;
      grid-template-areas:
        "email-dt linkedin-dt"
        "email-dd linkedin-dd"
        "phone-dt github-dt"
        "phone-dd github-dd";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    dt {
      margin-block: 0.5rem;
      text-align: center;
    }

    dd {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      margin-inline-start: 0.5rem;
    }

    .email-dt {
      grid-area: email-dt;
    }

    .email-dd {
      grid-area: email-dd;
    }

    .phone-dt {
      grid-area: phone-dt;
    }

    .phone-dd {
      grid-area: phone-dd;
    }

    .linkedin-dt {
      grid-area: linkedin-dt;
    }

    .linkedin-dd {
      grid-area: linkedin-dd;
    }

    .github-dt {
      grid-area: github-dt;
    }

    .github-dd {
      grid-area: github-dd;
    }
  `; }
    render() {
        return html `
      <dl>
        ${this.contactInfo.map(info => html `
            <dt class=${info.method.toLowerCase()}-dt>
              ${info.method}
            </dt>
            <dd
              class=${info.method.toLowerCase()}-dd
              .innerHTML=${info.html}
              >
            </dd>
          `)}
      </dl>
    `;
    }
};
__decorate([
    property({ type: Array })
], ContactList.prototype, "contactInfo", void 0);
ContactList = __decorate([
    customElement("contact-list")
], ContactList);
export { ContactList };
//# sourceMappingURL=contact-list.js.map