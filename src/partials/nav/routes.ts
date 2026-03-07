export const Routes = {
  PROFILE: "profile",
  WORK: "work",
  CODE: "code"
} as const;

export type Route = typeof Routes[keyof typeof Routes];

export function hashToRoute(hash: string): Route {
  switch (hash) {
    case Routes.PROFILE:
      return Routes.PROFILE;
    case Routes.WORK:
      return Routes.WORK;
    case Routes.CODE:
      return Routes.CODE;
    default:
      return Routes.PROFILE;
  }
}