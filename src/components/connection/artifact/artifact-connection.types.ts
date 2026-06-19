import Connections from "@/data/connections.json" with { type: "json" };
import { type DesignTokenIcon } from "@fnc314/design-tokens/types/design-token-icon.js";

export const ArtifactConnections = {
  googleDocs: "googleDocs" as const,
  pdf: "pdf" as const,
} as const;

export type ArtifactConnectionType = keyof typeof ArtifactConnections;
export type ArtifactConnectionData = { title: string, href: string, designToken: DesignTokenIcon, mdIcon: string }

export type ArtifactConnectionJsonData = Record<ArtifactConnectionType, ArtifactConnectionData>;

export const ArtifactConnectionJson = Connections.artifacts as ArtifactConnectionJsonData;