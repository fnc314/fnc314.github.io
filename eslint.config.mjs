import tsPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import lit from "eslint-plugin-lit";
import wc from "eslint-plugin-wc";
import { fileURLToPath } from "url";

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from "globals";
import tseslint from 'typescript-eslint';

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/** @type {Record<string, any>} */
const tsRules = {
  ...(tsPlugin.configs.recommended?.rules ?? {}),
  ...(tsPlugin.configs["recommended-requiring-type-checking"]?.rules ?? {}),
  ...(tsPlugin.configs.stylistic?.rules ?? {}),
  ...(tsPlugin.configs["stylistic-type-checked"]?.rules ?? {}),
  ...(Array.isArray(wc.configs?.["flat/recommended"]) ? wc.configs["flat/recommended"][0]?.rules : wc.configs?.["flat/recommended"]?.rules),
  ...(Array.isArray(lit.configs?.["flat/recommended"]) ? lit.configs["flat/recommended"][0]?.rules : lit.configs?.["flat/recommended"]?.rules),
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
    files: ["**/*.ts", "**/*.mts", "./.config/*.ts", "./.config/*.mts"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      wc,
      lit,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: tsRules,
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
