import { type Config } from "stylelint";

export const config: Config = {
  defaultSeverity: "warning",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-alphabetical-order",
    "stylelint-prettier/recommended"
  ],
  languageOptions: {
    directionality: {
      block: "top-to-bottom",
      inline: "left-to-right",
    }
  },
  ignoreFiles: [
    ".config/custom-elements-manifest/custom-elements-manifest.config.mjs",
    ".config/tailwind/*.ts",
    ".gemini/*",
    ".github/*",
    ".idea/**/*",
    ".vscode/*",
    ".well-known/*",
    "dist/**/*.{ts,js,css}",
    "docs/**/*.{ts,js,css}",
    "node_modules/**/*",
    "eleventy.config.js",
    "eslint.config.mjs",
    "postcss.config.mjs",
    "prettier.config.mts",
    "rollup.config.ts",
    "stylelint.config.ts",
    "vite.config.ts",
    "website/**/*.ts",
  ],
  plugins: ["stylelint-plugin-use-baseline"],
  rules: {
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: [
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["src/**/*.ts"],
      customSyntax: "postcss-lit",
    }
  ]
};

export default config;