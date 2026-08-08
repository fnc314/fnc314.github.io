import { type IconVariants } from "@/lib/design-tokens";

/**
 * The two variants of the {@link @fnc314/packages.components!DirectConnection} widget
 */
export type DirectConnectionMethod = "phone" | "email";
export interface ConnectionInstance {
  href: string;
  text: string;
  title: string;
  designToken: IconVariants;
  label: string;
}

export type ConnectionJsonDirect = Record<DirectConnectionMethod, ConnectionInstance>;

export const ArtifactConnections = {
  googleDocs: "googleDoc" as const,
  pdf: "pdf" as const,
} as const;

export type ArtifactConnectionType = keyof typeof ArtifactConnections;
export type ArtifactConnectionData = {
  title: string;
  href: string;
  designToken: IconVariants;
  label: string;
};

export type ArtifactConnectionJsonData = Record<ArtifactConnectionType, ArtifactConnectionData>;

export const ProfessionalConnectionTypes = {
  linkedin: "linkedin" as const,
  github: "github" as const,
  medium: "medium" as const,
} as const;

export type ProfessionalConnectionType = keyof typeof ProfessionalConnectionTypes;

export type ProfessionalConnectionJsonData = {
  href: string;
  designToken: IconVariants;
  title: string;
  label: string;
};

export type ProfessionalConnectionJson = Record<ProfessionalConnectionType, ProfessionalConnectionJsonData>;
