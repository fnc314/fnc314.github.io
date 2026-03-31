import { type Config } from "stylelint";

export const config: Config = {
  extends: [
    "stylelint-config-standard"
  ],
  ignoreFiles: [
    "./.config/*",
    "./.gemini/*",
    "./.github/*",
    "./.idea/**/*",
    "./.vscode/*",
    "./.well-known/*",
    "./bun-build/*",
    "./dist/*",
    "./node_modules/**/*",
    "./old/**/*",
    "./custom-elements-manifest.config.mjs",
    "./eslint.config.mjs",
    "./postcss.config.mjs",
    "./rollup.config.jms",
    "./stylelint.config.ts",
    "./website/*",
  ],
  rules: {
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: [
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
        ]
      }
    ]
  },
};

export default config;