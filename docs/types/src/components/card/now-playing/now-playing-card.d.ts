import "@/components/card/bento/bento-card";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class NowPlayingCard extends UIAwareElement {
    static styles: import("lit").CSSResult[];
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    private _trackTask;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "now-playing-card": NowPlayingCard;
    }
}
