export const Routes = {
  PROFILE: "profile",
  WORK: "work",
  CODE: "code",
} as const;

export type Route = typeof Routes[keyof typeof Routes];

export type RouteHashs = `#${Route}`;

export function hashToRoute(hash: string): Route {
  return (
    Object.values(Routes).find((route) => route === hash) || Routes.PROFILE
  );
}
