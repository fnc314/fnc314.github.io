import { css, html, LitElement } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("contact-list")
export class ContactList extends LitElement {
  static override styles = css`
    :host {
      container-type: inline-size;
      background-color: yellow;
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

  `;

  @property({ type: Array })
  contactInfo: { method: string, identity: string, html: string }[] = [];

  override render() {
    return html`
      <dl>
        ${
          this.contactInfo.map(info => html`
            <dt>
              ${info.method}
            </dt>
            <dd
              .innerHTML=${info.html}
              >
            </dd>
          `)
        }
      </dl>
    `;
  }
}