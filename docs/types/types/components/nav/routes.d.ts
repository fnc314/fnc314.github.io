import type { MaterialSymbol } from "material-symbols";
export declare const ROUTES: {
    readonly INFO: "info";
    readonly WORK: "work";
    readonly CODE: "code";
    readonly BLOG: "blog";
};
export type Route = (typeof ROUTES)[keyof typeof ROUTES];
export type RouteHashs = `#${Route}`;
export declare function hashToRoute(hash: string): Route;
interface NavComponentTabConfig {
    label: string;
    mdIcon: MaterialSymbol;
}
type NavComponentConfigs = Record<"tabs", Record<Route, NavComponentTabConfig>>;
export declare const NavComponentConfig: NavComponentConfigs;
export {};
//# sourceMappingURL=routes.d.ts.map