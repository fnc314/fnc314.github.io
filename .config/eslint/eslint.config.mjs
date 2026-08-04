import eslint from "@eslint/js";
import lit, { configs as LitConfigs } from "eslint-plugin-lit";
import tsdoc from "eslint-plugin-tsdoc";
import wc, { configs as WCConfigs } from "eslint-plugin-wc";
import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../../");

// FIXED: Use object spreading for rules objects instead of array spreading
const tsRules = {
  ...tseslint.configs.recommendedTypeChecked.find(c => c.rules)?.rules,
  ...tseslint.configs.stylisticTypeChecked.find(c => c.rules)?.rules,
  ...(WCConfigs["flat/recommended"]?.rules ?? {}),
  ...(LitConfigs["flat/recommended"]?.rules ?? {}),
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
  "docs/**/*",
  "dist/**/*",
  "firebase/**/*",
  "logs/**/*",
  "node_modules/**/*",
  "packages/{components,data,design-tokens,services,types}/{.config,node_modules,dist}/**/*",
  "packages/{components,data,design-tokens,services,types}/src/**/*.test.ts",
  "static/**/*",
  "stats/**/*",
  "sites/docs",
  "**/*.html",
  "**/*.css",
];

export default defineConfig([
  // FIXED: Top-level global ignores must have ONLY the 'ignores' key (no 'name' key allowed)
  {
    ignores: [
      "manifest.json",
      "dist/",
      "docs/",
      "eleventy.config.js",
      "postcss.config.mjs",
      "prettier.config.mts",
      "stylelint.config.ts",
      "vite.config.ts",
      "typedoc.config.mjs",
      ...ignores,
    ],
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
      "packages/{components,data,design-tokens,services,types}/src/**/*.ts",
      "sites/{docs,portfolio}/src/**/*.ts",
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: rootDir,
        projectServices: true,
      },
      // FIXED: Spread the browser library object properly
      globals: {
        ...globals.browser,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...tsRules,
      "no-undef": "off",
      "tsdoc/syntax": "off",
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
        elementBaseClasses: ["ClassExtendingLitElement"],
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
      "packages/{components,data,design-tokens,services,types}/src/**/*.test.ts",
      "sites/{docs,portfolio}/src/**/*.test.ts",
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: rootDir,
        projectServices: true,
      },
      globals: {
        ...globals.mocha,
      },
    },
    rules: {
      ...tsRules,
      "no-undef": "off",
      "tsdoc/syntax": "off",
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
    name: "app/js-recommended",
    ...eslint.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    name: "app/javascript-overrides",
    files: [
      "index.ts",
      "packages/{components,data,design-tokens,services,types}/src/**/*.ts",
      "sites/{docs,portfolio}/src/**/*.ts",
    ],
    // FIXED: Plugins must be an object map, not an array
    plugins: {
      tsdoc,
    },
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
