import { type Config } from "stylelint";

const config: Config = {
  defaultSeverity: "warning",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-alphabetical-order",
    "stylelint-plugin-rhythmguard/configs/strict",
    "stylelint-prettier/recommended",
  ],
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
    "src/**/*.d.ts",
  ],
  languageOptions: {
    directionality: {
      block: "top-to-bottom",
      inline: "left-to-right",
    }
  },
  overrides: [
    {
      files: ["src/**/*.ts"],
      customSyntax: "postcss-lit",
    }
  ],
  plugins: [
    "stylelint-plugin-use-baseline",
    "stylelint-use-nesting",
    "stylelint-declaration-strict-value",
  ],
  rules: {
    "scale-unlimited/declaration-strict-value": [
      ["/color/", "fill", "stroke", "border-color", "padding", "margin", "gap", "font-size", "line-height", "font-weight", "border-radius"],
      {
        "ignoreValues": ["0", "inherit", "transparent", "initial", "none", "unset"],
        "message": "Use design tokens for ${property}. See https://fnc314.github.io/docs/design-tokens/ for guidance."
      }
    ],
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
  }
};

export default config satisfies Config;
