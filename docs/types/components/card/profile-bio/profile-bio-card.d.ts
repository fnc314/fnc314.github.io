import { LitElement } from "lit";
export declare class ProfileBioCard extends LitElement {
    static styles: import("lit").CSSResult[];
    themePhoto: import("../../../types/theme/theme").PhotoJson;
    bioText: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "profile-bio-card": ProfileBioCard;
    }
}
//# sourceMappingURL=profile-bio-card.d.ts.map