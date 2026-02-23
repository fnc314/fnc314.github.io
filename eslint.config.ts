import js from "@eslint/js";
import jsonSchemaValidator from "eslint-plugin-json-schema-validator";
import lit from "eslint-plugin-lit";
import wc from "eslint-plugin-wc";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  wc.configs?.recommended as any,
  lit.configs?.recommended as any,
  jsonSchemaValidator.configs.recommended,
  {
    // This config object is for custom settings and overrides
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        // or, in CommonJS, __dirname
      },
    },
    ignores: [
      "jsconfig.json",
      "manifest.json"
    ]
    // You can add global rules here, for example:
    // rules: {
    //   'no-console': 'warn',
    // }
  }
);