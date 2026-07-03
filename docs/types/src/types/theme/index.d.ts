import { type ColorSchemeConfigs, type ColorSchemeContrast, type MaterialSchemeName, type ThemeJsonSchemes } from "@fnc314/packages.types";
import { type CSSResult, type TemplateResult } from "lit";
export declare const colorSchemeContrastToIcon: (slot: "start" | "leading-icon", contrast: ColorSchemeContrast) => TemplateResult;
export declare function jsonIsThemeJsonSchemes(json: unknown): json is ThemeJsonSchemes;
export declare const readScheme: (jsonSchema: object) => CSSResult;
export declare function keyTransform(jsonKey: string, rgb: string): CSSResult;
export declare const colorSchemeConfigsToMaterialSchemeName: (colorSchemeSettings: ColorSchemeConfigs) => MaterialSchemeName;
