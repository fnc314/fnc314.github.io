import Connections from "@/data/connections.json" with { type: "json" };

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
}

export type ConnectionJsonDirect = Record<DirectConnectionMethod, ConnectionInstance>;

export const DirectConnections: ConnectionJsonDirect = Connections.direct as ConnectionJsonDirect;