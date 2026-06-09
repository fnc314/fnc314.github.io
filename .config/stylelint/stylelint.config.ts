import { type Config } from "stylelint";

const config: Config = {
  defaultSeverity: "warning",
  formatter: "verbose",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-alphabetical-order",
    "stylelint-plugin-rhythmguard/configs/strict",
    "stylelint-prettier/recommended",
  ],
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
