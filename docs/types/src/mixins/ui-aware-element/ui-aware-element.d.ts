import { type BreakpointLabel } from "@fnc314/design-tokens/types/breakpoints.js";
import { LitElement } from "lit";
export declare abstract class UIAwareElement extends LitElement {
    protected darkMode: boolean;
    private onAppConfigChange;
    protected breakpoint: BreakpointLabel;
    private onBreakpointChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
