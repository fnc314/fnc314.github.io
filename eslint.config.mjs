import js from "@eslint/js";
import jsonSchemaValidator from "eslint-plugin-json-schema-validator";
import lit from "eslint-plugin-lit";
import wc from "eslint-plugin-wc";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // 1. Global Ignores (Equivalent to .eslintignore)
  {
    name: "app/global-ignores",
    ignores: ["jsconfig.json", "manifest.json", "website/index.js", "old/"],
  },
  // 2. Base JavaScript Rules
  {
    name: "app/js-recommended",
    ...js.configs.recommended,
  },
  // 3. TypeScript and Component Rules
  {
    name: "app/typescript",
    files: ["**/*.ts"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      wc.configs["flat/recommended"],
      lit.configs["flat/recommended"],
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // 4. JSON Validation
  {
    name: "app/json",
    files: ["**/*.json", "**/*.jsonc", "**/*.json5"],
    extends: [jsonSchemaValidator.configs["flat/recommended"]],
  },
  // 5. JavaScript / Config Files (Disable type checking)
  {
    name: "app/javascript-overrides",
    files: ["**/*.js", "**/*.mjs"],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
