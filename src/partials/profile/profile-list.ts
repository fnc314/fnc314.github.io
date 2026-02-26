import { LitElement, css, html } from "lit-element";
import { customElement } from "lit/decorators.js";
import { ParialHeadingStyles } from "./../../styles/partial-styles.js";
import "./contact-list.js";
import ProfileJson from "./profile.json" with { type: "json" };

@customElement("profile-list")
export class ProfileList extends LitElement {
  static override styles = [
    ParialHeadingStyles,
    css`
      :root {

      }

      .profile-list {

      }

      .profile-sub-list {

      }

      dl {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 1rem;

        div {
          display: contents;
          /* padding-inline: 1rem; */
        }
      }

      dt {
        font-weight: 600;
        text-align: center;
      }

      dd {
        margin: unset;
      }

      a {
        color: var(--md-sys-color-on-surface-variant);
      }
    `,
  ];

  #capitalizeKey(key: string): string {
    return key.charAt(0).toUpperCase() + key.slice(1);
  }

  override render() {
    return html`
      <dl class="profile-list">
        ${
          Object.keys(ProfileJson)
            .map((key) => {
              if (key === "contactInfo" || key === "socialInfo") {
                return html`
                  <div>
                    <dt>${this.#capitalizeKey(key).replace("Info", "")}</dt>
                    <dd>
                      <dl class="profile-sub-list">
                        ${
                          ProfileJson[key].map(info => html`
                            <div>
                              <dt>
                                ${info.method}
                              </dt>
                              <dd
                                .innerHTML=${info.htmlNoIcon}
                                >
                              </dd>
                            </div>
                          `)
                        }
                      </dl>
                    </dd>
                  </div>
                `;
              } else if (key === "proficiencies" || key === "profilePhoto") {
                return;
              } else {
                return html`
                  <div>
                    <dt>${this.#capitalizeKey(key)}</dt>
                    <dd>${`${ProfileJson[key]}`}</dd>
                  </div>
                `;
              }
            })
        }
      </dl>
    `;
  }
};

declare global {
  interface HTMLElementTagNameMap {
    "profile-list": ProfileList;
  }
};