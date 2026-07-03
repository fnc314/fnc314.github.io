import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { type CodeRepoData } from "@fnc314/packages.types";
import { type TemplateResult } from "lit";
export declare class CodeRepo extends UIAwareElement {
    codeRepo: CodeRepoData;
    static styles: import("lit").CSSResult[];
    private createWordTagLI;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "code-repo": CodeRepo;
    }
}
