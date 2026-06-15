import { type CodeRepoData } from "@/components/code/repo/code-repo.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class CodeRepo extends UIAwareElement {
    codeRepo: CodeRepoData;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "code-repo": CodeRepo;
    }
}
