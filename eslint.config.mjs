import eslint from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import lit from "eslint-plugin-lit";
import tsdoc from "eslint-plugin-tsdoc";
import wc from "eslint-plugin-wc";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/** @type {Record<string, any>} */
const tsRules = {
  ...(tsPlugin.configs.recommended?.rules ?? {}),
  ...(tsPlugin.configs["recommended-requiring-type-checking"]?.rules ?? {}),
  ...(tsPlugin.configs.stylistic?.rules ?? {}),
  ...(tsPlugin.configs["stylistic-type-checked"]?.rules ?? {}),
  ...(Array.isArray(wc.configs?.["flat/recommended"])
    ? wc.configs["flat/recommended"][0]?.rules
    : wc.configs?.["flat/recommended"]?.rules),
  ...(Array.isArray(lit.configs?.["flat/recommended"])
    ? lit.configs["flat/recommended"][0]?.rules
    : lit.configs?.["flat/recommended"]?.rules),
};

export default defineConfig([
  {
    name: "app/global-ignores",
    ignores: ["jsconfig.json", "manifest.json", "website/", "old/"],
  },
  {
    name: "app/js-recommended",
    ...eslint.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    name: "app/typescript",
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      wc,
      lit,
      tsdoc,
    },
    files: [
      "./src/**/*.ts",
    ],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        projectServices: true,
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...tsRules,
      "tsdoc/syntax": "warn",
    },
    settings: {
      lit: {
        elementBaseClasses: ["ClassExtendingLitElement"], // Recognize `ClassExtendingLitElement` as a sub-class of LitElement
      },
    },
  },
  {
    name: "app/javascript-overrides",
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
  },
]);
