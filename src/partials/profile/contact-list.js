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
      container-type: inline-size;
    }

    @container (min-inline-size: auto) {
      dl {
        background-color: teal;
      }
    }

    dd {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      margin-inline-start: 0.5rem;
    }

    dt {
      margin-block-start: 0.25rem;
    }

    @media (min-width: 800px) {
      dt {
        margin-block: 0.5rem;
      }
    }

  `; }
    render() {
        return html `
      <dl>
        ${this.contactInfo.map(info => html `
            <dt>
              ${info.method}
            </dt>
            <dd
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
