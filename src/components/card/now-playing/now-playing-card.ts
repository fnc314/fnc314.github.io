import "@/components/card/bento/bento-card";
import { NowPlayingCardStyles } from "@/components/card/now-playing/now-playing-card.styles";
import { TextStyles } from "@/styles/text";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Task } from "@lit/task";

interface TrackData {
  title: string;
  artist: string;
  album: string | null;
  thumbnails: { url: string; width: number; height: number }[];
  videoId: string;
}

@customElement("now-playing-card")
export class NowPlayingCard extends UIAwareElement {
  static override styles = [
    TextStyles,
    NowPlayingCardStyles
  ];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  private _trackTask = new Task<[], TrackData>(this, {
    task: async () => {
      // In development, you might point this to your local Firebase Emulator URL.
      // E.g. "http://127.0.0.1:5001/YOUR_PROJECT/us-east1/nowplaying"
      // In production, we'll configure a rewrite or use the direct CF URL.
      const functionUrl = import.meta.env.DEV 
        ? "http://127.0.0.1:5001/nowplaying" 
        : "/nowplaying"; 
      
      const response = await fetch(functionUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch track data");
      }
      return response.json();
    },
    args: () => []
  });

  override render() {
    return html`
      <bento-card
        class="now-playing-container"
        aria-labelledby="now-playing-title"
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Now Playing"}
      >
        ${this._trackTask.render({
          pending: () => html`<div class="loading">Loading...</div>`,
          complete: (track) => {
            const thumbnailUrl = track.thumbnails?.[0]?.url || "";
            return html`
              <article>
                <figure>
                  ${thumbnailUrl ? html`<img src="${thumbnailUrl}" alt="Album Art" />` : html`<div></div>`}
                  <figcaption>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </figcaption>
                </figure>
                <header>
                  <h3 title="${track.title}">${track.title}</h3>
                  <p title="${track.artist}">${track.artist}</p>
                </header>
              </article>
            `;
          },
          error: (e) => html`<div class="error">Not playing anything</div>`
        })}
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "now-playing-card": NowPlayingCard;
  }
}
