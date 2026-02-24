import { css, html, LitElement } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("contact-list")
export class ContactList extends LitElement {
  static override styles = css`
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
  `;

  @property({ type: Array })
  contactInfo: { method: string, identity: string, html: string }[] = [];

  override render() {
    return html`
      <dl>
        ${
          this.contactInfo.map(info => html`
            <dt class=${info.method.toLowerCase()}-dt>
              ${info.method}
            </dt>
            <dd
              class=${info.method.toLowerCase()}-dd
              .innerHTML=${info.html}
              >
            </dd>
          `)
        }
      </dl>
    `;
  }
}