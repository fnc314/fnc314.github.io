import { ParialHeadingStyles } from "@/styles/partial-styles";
import { LitElement, css, html } from "lit-element";
import { customElement, property } from "lit/decorators.js";

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
  ];

  @property({ type: Array })
  links: { method: string, htmlNoIcon: string }[] = [];

  #renderSubList(contents: {method: string, htmlNoIcon: string}[]) {
    return html`
      <dl class="profile-sub-list">
        ${
          contents.map((info) => html`
            <div class="sub-list-wrapper-div">
              <dt class="md-typescale-title-small">
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

declare global {
  interface HTMLElementTagNameMap {
    "profile-list": ProfileList;
  }
};