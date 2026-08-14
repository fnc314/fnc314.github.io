/**
 * The two variants of the {@link @fnc314/packages.components!DirectConnection} widget
 */
export type DirectConnectionMethod = "phone" | "email";
export interface ConnectionInstance {
  href: string;
  text: string;
  title: string;
  label: string;
  iconifyIcon: string;
}

export type ConnectionJsonDirect = Record<DirectConnectionMethod, ConnectionInstance>;

export const ArtifactConnections = {
  googleDocs: "googleDoc" as const,
  pdf: "pdf" as const,
} as const;

export type ArtifactConnectionType = keyof typeof ArtifactConnections;
export interface ArtifactConnectionData {
  title: string;
  href: string;
  label: string;
  iconifyIcon: string;
};

export type ArtifactConnectionJsonData = Record<ArtifactConnectionType, ArtifactConnectionData>;

export const ProfessionalConnectionTypes = {
  linkedin: "linkedin" as const,
  github: "github" as const,
  medium: "medium" as const,
} as const;

export type ProfessionalConnectionType = keyof typeof ProfessionalConnectionTypes;

export interface ProfessionalConnectionJsonData {
  href: string;
  title: string;
  label: string;
  iconifyIcon: string;
};

export type ProfessionalConnectionJson = Record<ProfessionalConnectionType, ProfessionalConnectionJsonData>;
