import { type Config } from "stylelint";

const config: Config = {
  defaultSeverity: "warning",
  formatter: "verbose",
  ignoreFiles: [
    "./config/**/*.{js,mjs,ts,mts}",
    "dist/**/**",
    "docs/**/**",
    "design-tokens/.config/**/*.{js,mjs,ts,mts}",
    "design-tokens/scripts/**/*.ts",
    "design-tokens/index.ts",
  ].map((path) => `${process.cwd()}/${path}`),
  extends: [
    "stylelint-config-standard",
    "stylelint-config-alphabetical-order",
    "stylelint-plugin-logical-css/configs/recommended",
    "stylelint-plugin-rhythmguard/configs/strict",
    "stylelint-prettier/recommended",
  ],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  reportUnscopedDisables: true,
  languageOptions: {
    directionality: {
      block: "top-to-bottom",
      inline: "left-to-right",
    }
  },
  overrides: [
    {
      files: ["src/**/*.css"],
      customSyntax: "postcss-lit",
    }
  ],
  plugins: [
    "stylelint-plugin-logical-css",
    "stylelint-plugin-use-baseline",
    "stylelint-use-nesting",
    "stylelint-declaration-strict-value",
  ],
  rules: {
    "scale-unlimited/declaration-strict-value": [
      ["/color/", "fill", "stroke", "border-color", "padding", "margin", "gap", "font-size", "line-height", "font-weight", "border-radius"],
      {
        "ignoreValues": ["0", "inherit", "transparent", "initial", "none", "unset"],
        "message": "Use design tokens for ${property}. See `design-tokens/README.md` for guidance."
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
