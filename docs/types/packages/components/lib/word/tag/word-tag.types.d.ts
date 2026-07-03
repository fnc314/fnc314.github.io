import type { ComplexAttributeConverter } from "lit";
export type WordTagHeaviness = "normal" | "heavy";
export type WordTagVariant = "text-only" | "icon-text" | "text-icon" | "icon-only";
export declare const WordTagVariantAttributeConverter: ComplexAttributeConverter<WordTagVariant, WordTagVariant>;
