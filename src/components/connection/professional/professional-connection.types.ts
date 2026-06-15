import ConnectionsJson from "@/data/connections.json" with { type: "json" };
import { type DesignTokenIcon } from "@fnc314/design-tokens/types/design-token-icon.js";

export const ProfessionalConnectionTypes = {
  linkedin: "linkedin" as const,
  github: "github" as const,
  medium: "medium" as const,
} as const;

export type ProfessionalConnectionType = keyof typeof ProfessionalConnectionTypes;

export type ProfessionalConnectionJsonData = {
  href: string;
  designToken: DesignTokenIcon;
  title: string;
}

export type ProfessionalConnectionJson = Record<ProfessionalConnectionType, ProfessionalConnectionJsonData>

export const ProfessionalConnections: ProfessionalConnectionJson = ConnectionsJson.professional as ProfessionalConnectionJson