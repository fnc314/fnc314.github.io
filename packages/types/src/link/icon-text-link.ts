export const IconTextLinkOrientations = {
  ICON_FIRST: "icon-first",
  TEXT_FIRST: "text-first",
} as const;

export type IconTextLinkOrientation =
  | (typeof IconTextLinkOrientations)[keyof typeof IconTextLinkOrientations]
  | "icon-first"
  | "text-first"
  | "ICON_FIRST"
  | "TEXT_FIRST";
