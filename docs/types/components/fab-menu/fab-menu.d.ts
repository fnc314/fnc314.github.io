import "@/components/fab-menu/fab-menu-item";
import { type MaterialSymbol } from "@/types/material-symbols";
import { type PropertyValues } from "@lit/reactive-element";
import { LitElement } from "lit";
export declare class FabMenu extends LitElement {
    static styles: import("lit").CSSResult[];
    private _fab;
    private _scrim;
    private readonly _items;
    open: boolean;
    icon: MaterialSymbol | "";
    openedIcon: MaterialSymbol;
    variant: "surface" | "primary" | "secondary" | "tertiary";
    size: "small" | "medium" | "large";
    label: string;
    ariaLabel: string;
    direction: "start" | "end";
    private get _focusableElements();
    private _handleFocusTrap;
    private _handleDocumentClick;
    private _toggle;
    protected getUpdateComplete(): Promise<boolean>;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected update(changedProperties: PropertyValues): void;
    protected updated(_changedProperties: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "fab-menu": FabMenu;
    }
}
