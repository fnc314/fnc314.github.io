import { type CodeProjectData } from "./code-project.types";
import { LitElement, type TemplateResult } from "lit";
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
//# sourceMappingURL=code-project.d.ts.map