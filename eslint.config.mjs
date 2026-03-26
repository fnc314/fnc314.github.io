import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsonSchemaValidator from "eslint-plugin-json-schema-validator";
import lit from "eslint-plugin-lit";
import prettier from "eslint-plugin-prettier";
import wc from "eslint-plugin-wc";
import globals from "globals";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const tsRules = {
  ...tsPlugin.configs.recommended?.rules,
  ...tsPlugin.configs["recommended-requiring-type-checking"]?.rules,
  ...tsPlugin.configs.stylistic?.rules,
  ...tsPlugin.configs["stylistic-type-checked"]?.rules,
  ...(Array.isArray(wc.configs?.["flat/recommended"]) ? wc.configs["flat/recommended"][0]?.rules : wc.configs?.["flat/recommended"]?.rules),
  ...(Array.isArray(lit.configs?.["flat/recommended"]) ? lit.configs["flat/recommended"][0]?.rules : lit.configs?.["flat/recommended"]?.rules),
};

export default [
  {
    name: "app/global-ignores",
    ignores: ["jsconfig.json", "manifest.json", "website/index.js", "old/"],
  },
  {
    name: "app/js-recommended",
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    name: "app/typescript",
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      wc,
      lit,
      prettier,
    },
    languageOptions: {
      parser: tsParser,
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
  ...jsonSchemaValidator.configs["flat/recommended"],
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
];
