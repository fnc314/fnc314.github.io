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
  path.join(rootDir, ".config/**/*.*"),
  path.join(rootDir, ".env/**/*.*"),
  path.join(rootDir, ".firebase/**/*.*"),
  path.join(rootDir, ".gemini/**/*.*"),
  path.join(rootDir, ".git/**/*.*"),
  path.join(rootDir, ".github/**/*.*"),
  path.join(rootDir, ".idea/**/*.*"),
  path.join(rootDir, ".mise/**/*.*"),
  path.join(rootDir, ".pnpm-store/**/*.*"),
  path.join(rootDir, ".vscode/**/*.*"),
  path.join(rootDir, ".well-known/**/*.*"),
  path.join(rootDir, "bin/**/*.*"),
  path.join(rootDir, "changes/**/*.*"),
  path.join(rootDir, "design-tokens/**/*.*"),
  path.join(rootDir, "docs/**/*.*"),
  path.join(rootDir, "dist/**/*.*"),
  path.join(rootDir, "firebase/**/*.*"),
  path.join(rootDir, "functions/**/*.*"),
  path.join(rootDir, "logs/**/*.*"),
  path.join(rootDir, "node_modules/**/*.*"),
  path.join(rootDir, "static/**/*.*"),
  path.join(rootDir, "stats/**/*.*"),
  path.join(rootDir, "**/*.html"),
];

export default defineConfig([
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
      path.join(rootDir, "src/**/*.ts"),
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
      "tsdoc/syntax": "warn",
    },
    settings: {
      lit: {
        elementBaseClasses: ["ClassExtendingLitElement"], // Recognize `ClassExtendingLitElement` as a sub-class of LitElement
      },
    },
  },
  {
    name: "app/global-ignores",
    ignores: [
      path.join(rootDir, "jsconfig.json"),
      path.join(rootDir, "manifest.json"),
      path.join(rootDir, "dist/"),
      path.join(rootDir, "docs/"),
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
