import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { type ArtifactConnectionData, type ArtifactConnectionType } from "@fnc314/packages.types";
import { type CSSResult, type TemplateResult } from "lit";
export declare class ArtifactConnection extends UIAwareElement {
    static styles: CSSResult[];
    artifactConnectionType: ArtifactConnectionType;
    artifactConnectionData: ArtifactConnectionData;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "artifact-connection": ArtifactConnection;
    }
}
