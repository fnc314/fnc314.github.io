import eslint from "@eslint/js";
import lit from "eslint-plugin-lit";
import tsdoc from "eslint-plugin-tsdoc";
import wc from "eslint-plugin-wc";
import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../../");

/** @type {Record<string, any>} */
const tsRules = {
  ...tseslint.configs.recommendedTypeChecked.find(c => c.rules)?.rules,
  ...tseslint.configs.stylisticTypeChecked.find(c => c.rules)?.rules,
  ...wc.configs["flat/recommended"].rules,
  ...lit.configs["flat/recommended"].rules,
};

const ignores = [
  ".config/**/*",
  ".env/**/*",
  ".firebase/**/*",
  ".gemini/**/*",
  ".git/**/*",
  ".github/**/*",
  ".idea/**/*",
  ".mise/**/*",
  ".pnpm-store/**/*",
  ".vscode/**/*",
  ".well-known/**/*",
  "bin/**/*",
  "changes/**/*",
  "design-tokens/**/*",
  "docs/**/*",
  "dist/**/*",
  "firebase/**/*",
  "functions/**/*",
  "logs/**/*",
  "node_modules/**/*",
  "static/**/*",
  "stats/**/*",
  "**/*.html",
  "**/*.css",
];

export default defineConfig([
  {
    name: "app/global-ignores-strict",
    ignores: [".config/**/*"],
  },
  {
    name: "app/typescript",
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      wc,
      lit,
      tsdoc,
    },
    basePath: rootDir,
    files: [
      "src/**/*.ts",
      "!src/**/*.test.ts",
    ],
    ignores,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: [path.resolve(rootDir, "tsconfig.json")],
        tsconfigRootDir: rootDir,
        projectServices: true,
      },
      globals: {
        ...globals.browser,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...tsRules,
      "tsdoc/syntax": "warn", // Re-enable tsdoc/syntax
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^(HTMLElementTagNameMap)$",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      lit: {
        elementBaseClasses: ["ClassExtendingLitElement"], // Recognize `ClassExtendingLitElement` as a sub-class of LitElement
      },
      tsdoc: {
        tagDefinitions: [
          {
            tagName: "@slot",
            syntaxKind: "block",
            allowMultiple: true,
          },
        ],
      },
    },
    },
    {
    name: "app/typescript/tests",
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      wc,
      lit,
      tsdoc,
    },
    files: [
      "src/**/*.test.ts",
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
        tsconfigRootDir: rootDir,
        projectServices: true,
      },
      globals: {
        ...globals.mocha,
      },
    },
    rules: {
      ...tsRules,
      "tsdoc/syntax": "warn", // Re-enable tsdoc/syntax
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      lit: {
        elementBaseClasses: ["ClassExtendingLitElement"],
      },
    },
    },
    {
    name: "app/global-ignores",
    ignores: [
      "jsconfig.json",
      "manifest.json",
      "dist/",
      "docs/",
      "eleventy.config.js",
      "postcss.config.mjs",
      "prettier.config.mts",
      "rollup.config.ts",
      "stylelint.config.ts",
      "vite.config.ts",
      "typedoc.config.mjs",
      ...ignores,
    ],
  },
  {
    name: "app/js-recommended",
    ...eslint.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    ignores,
  },
  {
    name: "app/javascript-overrides",
    files: [
      path.join(rootDir, "src/**/*.js"),
      path.join(rootDir, "src/**/*.mjs"),
    ],
    ignores,
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
