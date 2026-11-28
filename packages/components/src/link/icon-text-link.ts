import { IconTextLinkStyles } from "@/lib/link/icon-text-link.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import {
  type IconTextLinkOrientation,
  IconTextLinkOrientations,
  type IconVariants,
} from "@fnc314/packages.types";
import "iconify-icon";
import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

export {
  type IconTextLinkOrientation,
  IconTextLinkOrientations,
} from "@fnc314/packages.types";

export const TAG_NAME_ICON_TEXT_LINK: string = "icon-text-link";

/**
 * @summary A standardized link component combining an icon and a text label with configurable orientation.
 *
 * @property {IconTextLinkOrientation} [orientation="icon-first"] - ICON_FIRST or TEXT_FIRST
 * @property {string} [text=""] - The label text for the link
 * @property {string | IconVariants} [icon] - An Iconify icon slug string, an SVG string, or IconVariants
 * @property {string} [link=""] - Destination URL for click
 * @property {boolean} [newTab=true] - When true, opens in a new tab with rel="noopener noreferrer"
 */
@customElement(TAG_NAME_ICON_TEXT_LINK)
export class IconTextLink extends UIAwareElement {
  static override styles = [TextStyles, IconTextLinkStyles];

  @property({ type: String })
  orientation: IconTextLinkOrientation = IconTextLinkOrientations.ICON_FIRST;

  @property({ type: String })
  text: string = "";

  @property({ type: Object })
  icon: string | IconVariants = "";

  @property({ type: String })
  link: string = "";

  @property({ type: Boolean })
  newTab: boolean = true;

  @property({ type: String })
  ariaLabelText?: string;

  private _isIconFirst(): boolean {
    const norm = String(this.orientation).toLowerCase().replace(/_/g, "-");
    return norm === "icon-first";
  }

  private _renderIcon() {
    if (!this.icon) {
      return html`<slot name="icon"></slot>`;
    }

    if (typeof this.icon === "string") {
      const trimmed = this.icon.trim();
      if (trimmed.startsWith("<svg") || trimmed.includes("</svg>")) {
        return html`
          <span class="icon-wrapper" aria-hidden="true">
            ${unsafeSVG(trimmed)}
          </span>
        `;
      }
      return html`
        <span class="icon-wrapper" aria-hidden="true">
          <iconify-icon
            width="none"
            height="none"
            icon=${trimmed}
          ></iconify-icon>
        </span>
      `;
    }

    const svgResult = this.getActiveIcon(this.icon as IconVariants, true);
    return html`
      <span class="icon-wrapper" aria-hidden="true">
        ${svgResult}
      </span>
    `;
  }

  override render() {
    if (!this.link) {
      return nothing;
    }

    const isIconFirst = this._isIconFirst();
    const orientationClass = isIconFirst
      ? "orientation-icon-first"
      : "orientation-text-first";

    const target = this.newTab ? "_blank" : undefined;
    const rel = this.newTab ? "noopener noreferrer" : undefined;

    return html`
      <a
        href=${this.link}
        target=${ifDefined(target)}
        rel=${ifDefined(rel)}
        class=${orientationClass}
        aria-label=${ifDefined(this.ariaLabelText || this.text)}
        title=${ifDefined(this.ariaLabelText || this.text)}
      >
        ${
          isIconFirst
            ? html`
              ${this._renderIcon()}
              <span class="text-label">${this.text}</span>
            `
            : html`
              <span class="text-label">${this.text}</span>
              ${this._renderIcon()}
            `
        }
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME_ICON_TEXT_LINK]: IconTextLink;
  }
}
