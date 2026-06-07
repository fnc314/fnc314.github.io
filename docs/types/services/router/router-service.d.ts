export interface RouterService extends EventTarget {
    thing(): Promise<void>;
}
declare class RouterServiceImpl extends EventTarget implements RouterService {
    constructor();
    thing(): Promise<void>;
}
export declare const routerService: RouterServiceImpl;
export type RouterChange = CustomEvent<{
    newUrl: string;
    oldUrl: string;
} | {
    state: unknown;
}>;
export type RouterReverse = CustomEvent<{
    state: unknown;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        "router.change": RouterChange;
        "router.back": RouterReverse;
    }
}
export {};
