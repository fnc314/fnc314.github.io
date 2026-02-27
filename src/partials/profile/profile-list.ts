import { LitElement, css, html } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import { ParialHeadingStyles } from "./../../styles/partial-styles.js";

@customElement("profile-list")
export class ProfileList extends LitElement {
  static override styles = [
    ParialHeadingStyles,
    css`
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
  ];

  @property({ type: Array })
  contactInfo: { method: string, htmlNoIcon: string }[] = [];

  @property({ type: Array })
  socialInfo: { method: string, htmlNoIcon: string }[] = [];

  @property({ type: String })
  bio: string = "";

  #renderSubList(contents: {method: string, htmlNoIcon: string}[]) {
    return html`
      <dl class="profile-sub-list">
        ${
          contents.map((info) => html`
            <div>
              <dt>
                ${info.method}
              </dt>
              <dd .innerHTML=${info.htmlNoIcon}></dd>
            </div>
          `)
        }
      </dl>
    `;
  }

  override render() {
    return html`
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

declare global {
  interface HTMLElementTagNameMap {
    "profile-list": ProfileList;
  }
};