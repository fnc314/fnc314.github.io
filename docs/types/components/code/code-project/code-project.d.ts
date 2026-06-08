import { type CodeProjectData } from "@/components/code/code-project/code-project.types";
import { LitElement, type TemplateResult } from "lit";
export { type CodeProjectData } from "@/components/code/code-project/code-project.types";
export declare class CodeProject extends LitElement {
    #private;
    codeProject: CodeProjectData;
    private flipped;
    static styles: import("lit").CSSResult[];
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "code-project": CodeProject;
    }
}
