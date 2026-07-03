import type { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
export type Constructor<T> = new (...args: any[]) => T;
export declare const SizeObserverElement: <T extends Constructor<UIAwareElement>>(Base: T) => T;
