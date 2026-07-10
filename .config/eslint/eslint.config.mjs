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

/** @type {Record<string, any>} */
const tsRules = {
  ...tseslint.configs.recommendedTypeChecked.find(c => c.rules)?.rules,
  ...tseslint.configs.stylisticTypeChecked.find(c => c.rules)?.rules,
  ...(WCConfigs["flat/recommended"].rules ?? []),
  ...(LitConfigs["flat/recommended"].rules ?? []),
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
  "packages/{components,data,design-tokens,services,types}/lib/**/*.test.ts",
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
      "packages/{components,data,design-tokens,services,types}/lib/**/*.ts",
    ],
    ignores,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
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
      // Disabled: `tsdoc/syntax` enforces the strict @microsoft/tsdoc declaration-reference
      // grammar (package/member separated by `#`), but TypeDoc — the actual consumer of these
      // `{@link}`s — uses `!` as the module-source delimiter (e.g. `{@link @lit/reactive-element!css}`,
      // `{@link @fnc314/packages.types!WorkDate}`). The two grammars are incompatible for
      // cross-package links, so the rule only yields false positives here. See .config/typedoc/typedoc.config.mjs.
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
      "packages/{components,data,design-tokens,services,types}/lib/**/*.test.ts",
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
      // See the note on `tsdoc/syntax` in the "app/typescript" config above — TypeDoc's `!`
      // module-source syntax is incompatible with @microsoft/tsdoc's grammar.
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
    name: "app/global-ignores",
    ignores: [
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
      "index.ts",
      path.join(rootDir, "packages/{components,data,design-tokens,services,types}/lib/**/*.ts"),
    ],
    plugins: [
      tsdoc,
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
