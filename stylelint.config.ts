import { type Config } from "stylelint";

export const config: Config = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  ignoreFiles: [
    "./.config/custom-elements-manifest/custom-elements-manifest.config.mjs",
    "./.config/tailwind/*.ts",
    "./.gemini/*",
    "./.github/*",
    "./.idea/**/*",
    "./.vscode/*",
    "./.well-known/*",
    "./bunfig.toml",
    "./dist/**/*",
    "./docs/**/*",
    "./node_modules/**/*",
    "./eslint.config.mjs",
    "./postcss.config.mjs",
    "./prettier.config.mts",
    "./rollup.config.ts",
    "./stylelint.config.ts",
    "./website/*",
  ],
  plugins: ["stylelint-plugin-use-baseline"],
  customSyntax: "postcss-lit",
  rules: {
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: ["grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows"],
      },
    ],
  },
};

export default config;
