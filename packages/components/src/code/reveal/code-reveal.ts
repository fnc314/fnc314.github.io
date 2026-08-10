import { CodeRevealStyles } from "@/lib/code/reveal/code-reveal.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { Icons } from "@fnc314/packages.design-tokens";
import { type CodeRepoTech } from "@fnc314/packages.types";
import { MdIconButton } from "@material/web/iconbutton/icon-button";
import { type TemplateResult, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { when } from "lit/directives/when.js";

export { type CodeRepoData, type CodeRepoTech } from "@fnc314/packages.types";

/**
 * @summary An inline reveal panel displaying expanded technology details inside {@link CodeRepo}
 *
 * @fires start-hide-reveal - Dispatched when the user initiates closing, triggering the fold animation.
 * @fires hide-reveal - Dispatched when the folding animation completely finishes, signaling the parent to reset state.
 *
 * @class CodeReveal
 * @extends {UIAwareElement}
 */
@customElement("code-reveal")
export class CodeReveal extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, CodeRevealStyles];

  /**
   * The active technology data object to render.
   * When this is set to null, the component renders nothing.
   */
  @property({ type: Object })
  tech: CodeRepoTech | null = null;

  @state()
  private _isClosing = false;

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", this._handleKeyDown);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("keydown", this._handleKeyDown);
  }

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      this.triggerClose();
    }
  };

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has("tech") && this.tech && !this._isClosing) {
      this.updateComplete.then(() => {
        const closeBtn = this.shadowRoot?.querySelector("md-icon-button") as MdIconButton & {
          updateComplete?: Promise<boolean>;
        };
        if (closeBtn) {
          // Material Web components often need an additional tick to render their internal shadow DOM
          const ready = closeBtn.updateComplete || Promise.resolve(true);
          ready.then(() => {
            requestAnimationFrame(() => closeBtn.focus());
          });
        }
      });
    }
  }

  override willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("tech")) {
      this._isClosing = false;
    }
    super.willUpdate(changedProperties);
  }

  public triggerClose() {
    if (this._isClosing || !this.tech) return;
    this._isClosing = true;
    this.dispatchEvent(new CustomEvent("start-hide-reveal", { composed: true, bubbles: true }));
  }

  private _handleAnimationEnd(e: AnimationEvent) {
    if (e.animationName === "fold-panel") {
      this._isClosing = false;
      this.dispatchEvent(
        new CustomEvent("hide-reveal", {
          composed: true,
          bubbles: true,
        }),
      );
    }
  }

  override render(): TemplateResult {
    if (!this.tech) return html`${nothing}`;

    const popoverContent = when(
      Array.isArray(this.tech.popoverContent),
      () => html`
        <ul slot="reveal-content">
          ${map(
            this.tech!.popoverContent,
            (content: string) => html` <li class="md-typescale-body-large">${unsafeHTML(content)}</li> `,
          )}
        </ul>
      `,
      () => html`
        <p
          slot="reveal-content"
          class="md-typescale-body-large"
        >
          ${unsafeHTML(this.tech!.popoverContent as string)}
        </p>
      `,
    );

    const classes = {
      "reveal-card": true,
      "is-closing": this._isClosing,
    };

    return html`
      <article
        id="reveal-panel"
        role="region"
        aria-labelledby="reveal-header"
        class=${classMap(classes)}
        aria-live="polite"
        @animationend=${this._handleAnimationEnd}
      >
        <md-icon-button
          autofocus
          class="close-btn"
          aria-label="Close details for ${this.tech.name}"
          @click=${() => this.triggerClose()}
        >
          ${Icons.Material.Close.default}
        </md-icon-button>
        <header>
          <slot name="header-icon"></slot>
          <h3
            id="reveal-header"
            class="md-typescale-headline-medium"
          >
            ${this.tech.name}
          </h3>
        </header>

        <section>${popoverContent}</section>

        <footer>
          <a
            class="md-typescale-body-large"
            title="Open ${this.tech.name} homepage as a new tab"
            href="${this.tech.url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${this.tech.name}
          </a>
        </footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "code-reveal": CodeReveal;
  }
}
