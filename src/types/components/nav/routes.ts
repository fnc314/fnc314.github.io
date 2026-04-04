import type { MaterialSymbol } from "material-symbols";

export const ROUTES = {
  PROFILE: "profile" as const,
  WORK: "work" as const,
  CODE: "code" as const,
  BLOG: "blog" as const,
  // SETTINGS: "settings" as const,
  // CONNECT: "connect" as const,
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export type RouteHashs = `#${Route}`;

export function hashToRoute(hash: string): Route {
  return Object.fromEntries(Object.entries(ROUTES))[hash] ?? ROUTES.PROFILE;
}

interface NavComponentTabConfig {
  label: string;
  mdIcon: MaterialSymbol;
};

type NavComponentConfigs = Record<
  "tabs",
  Record<Route, NavComponentTabConfig>
>;

export const NavComponentConfig: NavComponentConfigs = {
  tabs: {
    profile: {
      label: "Bio",
      mdIcon: "account_box",
    },
    work: {
      label: "Work",
      mdIcon: "view_timeline",
    },
    code: {
      label: "Code",
      mdIcon: "code_blocks",
    },
    blog: {
      label: "Blog",
      mdIcon: "newsmode",
    }
  }
};
