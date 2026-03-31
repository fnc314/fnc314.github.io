import { type Config } from "stylelint";

export const config: Config = {
  extends: [
    "stylelint-config-standard"
  ],
  ignoreFiles: [
    "./node_modules/**/*",
    "./dist/**/*",
    "./bun-build/**/*",
    "./website/*",
    "./stylelint.config.ts",
    "./postcss.config.mjs",
    "./rollup.config.jms",
    "./.config/*",
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