export const Routes = {
  PROFILE: "profile" as const,
  WORK: "work" as const,
  CODE: "code" as const,
  // BLOG: "blog" as const,
  // SETTINGS: "settings" as const,
  // CONNECT: "connect" as const,
} as const;

export type Route = (typeof Routes)[keyof typeof Routes];

export type RouteHashs = `#${Route}`;

export function hashToRoute(hash: string): Route {
  return Object.values(Routes).find((route) => route === hash) ?? Routes.PROFILE;
}
