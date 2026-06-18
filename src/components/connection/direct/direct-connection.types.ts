import Connections from "@/data/connections.json" with { type: "json" };
import type { DesignTokenIcon } from "@fnc314/design-tokens/types/design-token-icon.js";

/**
 * The two variants of the {@link DirectConnection} widget
 */
export type DirectConnectionMethod = "phone" | "email";
export type DirectConnectionIcon = "call" | "mail";
export interface ConnectionInstance {
  href: string;
  mdIcon: DirectConnectionIcon;
  text: string;
  title: string;
  designToken: DesignTokenIcon;
}

export type ConnectionJsonDirect = Record<DirectConnectionMethod, ConnectionInstance>;

export const DirectConnections: ConnectionJsonDirect = Connections.direct as ConnectionJsonDirect;