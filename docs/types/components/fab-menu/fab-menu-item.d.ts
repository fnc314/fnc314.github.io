import { type MaterialSymbol } from "@/types/material-symbols";
import { LitElement, type TemplateResult } from "lit";
export type { MaterialSymbol } from "@/types/material-symbols";
export declare class FabMenuItem extends LitElement {
    static styles: import("lit").CSSResult[];
    constructor();
    connectedCallback(): void;
    private _fab;
    label: string;
    icon: MaterialSymbol | "";
    focus(options?: FocusOptions): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "fab-menu-item": FabMenuItem;
    }
}
//# sourceMappingURL=fab-menu-item.d.ts.map