import { type DesignTokenIcon, type MaskableDesignTokenIcon } from "@/lib/design-tokens";
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
export declare const ArtifactConnections: {
    readonly googleDocs: "googleDoc";
    readonly pdf: "pdf";
};
export type ArtifactConnectionType = keyof typeof ArtifactConnections;
export type ArtifactConnectionData = {
    title: string;
    href: string;
    designToken: DesignTokenIcon;
    mdIcon: string;
};
export type ArtifactConnectionJsonData = Record<ArtifactConnectionType, ArtifactConnectionData>;
export declare const ProfessionalConnectionTypes: {
    readonly linkedin: "linkedin";
    readonly github: "github";
    readonly medium: "medium";
};
export type ProfessionalConnectionType = keyof typeof ProfessionalConnectionTypes;
export type ProfessionalConnectionJsonData = {
    href: string;
    designToken: MaskableDesignTokenIcon;
    title: string;
};
export type ProfessionalConnectionJson = Record<ProfessionalConnectionType, ProfessionalConnectionJsonData>;
