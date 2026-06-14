import { LitElement } from "lit";
export declare class ProfileBioCard extends LitElement {
    static styles: import("lit").CSSResult[];
    private _photoData;
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
