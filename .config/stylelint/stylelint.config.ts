import { type Config } from "stylelint";

const config: Config = {
  defaultSeverity: "warning",
  formatter: "verbose",
  ignoreFiles: [
    "./config/**/*.{js,mjs,ts,mts}",
    "dist/**/**",
    "docs/**/**",
    "packages/.config/**/*.ts",
    "packages/{components,data,design-tokens,services,types}/{.config,node_modules,dist}/**/*.ts",
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
      files: ["packages/{components,data,design-tokens,services,types}/src/**/*.ts"],
      customSyntax: "postcss-lit",
    },
  ],
  plugins: [
    "stylelint-plugin-logical-css",
    "stylelint-plugin-use-baseline",
    "stylelint-use-nesting",
    "stylelint-declaration-strict-value",
  ],
  rules: {
    "import-notation": "string",
    "scale-unlimited/declaration-strict-value": [
      ["/color/", "fill", "stroke", "border-color", "padding", "margin", "gap", "font-size", "line-height", "font-weight", "border-radius"],
      {
        "ignoreValues": ["0", "inherit", "transparent", "initial", "none", "unset"],
        "message": "Use design tokens for ${property}. See `packages/design-tokens/README.md` for guidance."
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
