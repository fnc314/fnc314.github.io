import Connections from "@/data/connections.json" with { type: "json" };

/**
 * The two variants of the {@link DirectConnection} widget
 */
export type DirectConnectionMethod = "phone" | "email";
export type DirectConnectionIcon = "call" | "mail";
export interface ConnectionInstance {
  method: DirectConnectionMethod;
  href: string;
  mdIcon: DirectConnectionIcon;
  text: string;
}
export type ConnectionJsonDirect = {
  direct: Record<DirectConnectionMethod, ConnectionInstance>;
}

export const DirectConnections: ConnectionJsonDirect = Connections as ConnectionJsonDirect;