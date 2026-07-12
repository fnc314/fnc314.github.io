import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type CSSResult, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { abbreviatedSha as gitSha } from "~build/git";
import { version as buildVersion } from "~build/package";
import time from "~build/time";

@customElement("version-tag")
export class VersionTag extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles: CSSResult[] = [
    css`
      :host {
        color: var(--md-sys-color-on-surface-variant);
        font-size: var(--md-sys-typescale-body-small-size);
        text-align: center;
      }

      div {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: var(--spaces-gap-m);
        justify-content: center;

        p {
          margin: var(--spaces-none);
        }
      }
    `,
  ];

  /**
   * Creates an {@link Intl.DateTimeFormat} and calls {@link Intl.DateTimeFormat.format}
   *   on {@link time} to render the user presented timestamp
   *
   * @private
   * @type {string}
   */
  private formattedDate: string = new Intl.DateTimeFormat(navigator.languages, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour12: false,
  }).format(time);

  override render() {
    return html`
      <div class="version-tag">
        <p>Version: ${buildVersion} (Built: <time datetime="${time.toISOString()}">${this.formattedDate}</time>)</p>
        <p>SHA: ${gitSha}</p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "version-tag": VersionTag;
  }
}
