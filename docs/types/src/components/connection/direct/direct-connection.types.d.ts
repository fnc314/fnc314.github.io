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
};
export declare const DirectConnections: ConnectionJsonDirect;
