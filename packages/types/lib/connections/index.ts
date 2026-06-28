import { type DesignTokenIcon, type MaskableDesignTokenIcon } from "@/lib/design-token-icon";

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

export const ArtifactConnections = {
  googleDocs: "googleDoc" as const,
  pdf: "pdf" as const,
} as const;

export type ArtifactConnectionType = keyof typeof ArtifactConnections;
export type ArtifactConnectionData = { title: string, href: string, designToken: DesignTokenIcon, mdIcon: string }

export type ArtifactConnectionJsonData = Record<ArtifactConnectionType, ArtifactConnectionData>;

export const ProfessionalConnectionTypes = {
  linkedin: "linkedin" as const,
  github: "github" as const,
  medium: "medium" as const,
} as const;

export type ProfessionalConnectionType = keyof typeof ProfessionalConnectionTypes;

export type ProfessionalConnectionJsonData = {
  href: string;
  designToken: MaskableDesignTokenIcon;
  title: string;
}

export type ProfessionalConnectionJson = Record<ProfessionalConnectionType, ProfessionalConnectionJsonData>