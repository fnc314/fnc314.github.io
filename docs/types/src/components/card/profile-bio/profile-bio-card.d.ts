import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class ProfileBioCard extends UIAwareElement {
    static styles: import("lit").CSSResult[];
    photoData: {
        src: string;
        figcaption: string;
        alt: string;
    } | {
        src: string;
        figcaption: string;
        alt: string;
    } | {
        src: string;
        figcaption: string;
        alt: string;
    } | {
        src: string;
        figcaption: string;
        alt: string;
    };
    bioText: string;
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onConfigChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "profile-bio-card": ProfileBioCard;
    }
}
