import js from "@eslint/js";
import jsonSchemaValidator from "eslint-plugin-json-schema-validator";
import lit from "eslint-plugin-lit";
import wc from "eslint-plugin-wc";
import tseslint from "typescript-eslint";

export default defaultConfig({
  extends: [
    js.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    wc.configs?.recommended,
    lit.configs?.recommended,
    jsonSchemaValidator.configs.recommended,
  ]
});

// export default tseslint.config(

//   {
//     // This config object is for custom settings and overrides
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//       },
//       parserOptions: {
//         projectService: true,
//         tsconfigRootDir: import.meta.dirname,
//         // or, in CommonJS, __dirname
//       },
//     },
//     ignores: [
//       "jsconfig.json",
//       "manifest.json"
//     ]
//     // You can add global rules here, for example:
//     // rules: {
//     //   'no-console': 'warn',
//     // }
//   }
// );