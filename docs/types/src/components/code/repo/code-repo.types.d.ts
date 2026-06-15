import { type DesignTokenIcon } from "@fnc314/design-tokens/types/design-token-icon.js";
export declare const CSS_PROPERTY_CODE_REPO_WORD_TAG_SIZE = "--code-repo-word-tag-size";
export declare const WORD_TAG_SIZES: {
    readonly full: "full";
    readonly compact: "compact";
    readonly condensed: "condensed";
};
export type WordTagSize = typeof WORD_TAG_SIZES[keyof typeof WORD_TAG_SIZES];
export interface CodeRepoData {
    description: string;
    name: string;
    tech: CodeRepoTech[];
    url: string;
    repo: `fnc314/${string}`;
}
export interface CodeRepoTech {
    designToken: string | DesignTokenIcon;
    name: string;
    url: string;
}
