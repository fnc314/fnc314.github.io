import { type Config } from "prettier";

const config: Config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  printWidth: 120,
  quoteProps: "as-needed",
  semi: true,
  singleAttributePerLine: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  plugins: ["prettier-plugin-toml"],
};

export default config;
