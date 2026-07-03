import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type TemplateResult } from "lit";
export declare class ProfileCard extends UIAwareElement {
    static styles: any[];
    photoData: import("@fnc314/packages.types").PhotoJson;
    bioText: string;
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onConfigChange;
    private contactsSection;
    private imageSection;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "profile-card": ProfileCard;
    }
}
