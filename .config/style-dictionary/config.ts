import StyleDictionary, { type Config, type TransformedToken } from "style-dictionary";
import {
  formats,
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
  transformGroups,
  transforms
} from "style-dictionary/enums";

StyleDictionary.registerFilter({
  name: "isIconToken",
  filter: (token: TransformedToken) =>
    ["icons-size", "icons-font", "icons-font-sharp", "md", "sys", "ref"]
      .every(path => !token.path.includes(path)) && token.path.includes("icons")
});

StyleDictionary.registerFilter({
  name: "isMaterialOverride",
  filter: (token: TransformedToken) =>
    token.path.includes("sys") ||
    token.path.includes("ref") ||
    token.path.includes("md")
});

StyleDictionary.registerFilter({
  name: "isCustomToken",
  filter: (token: TransformedToken) =>
    ["icons", "sys", "ref", "md"].every(path => !token.path.includes(path))
});

const buildPaths = {
  css: `${process.cwd()}/design-tokens/css/`,
  json: `${process.cwd()}/design-tokens/dist/json/`,
}

export default {
  source: [
    `${process.cwd()}/design-tokens/tokens/**/*.json`,
  ],
  platforms: {
    cssIcons: {
      transforms: [
        transforms.attributeCti,
        transforms.attributeColor,
        transforms.nameKebab,
        transforms.colorCss,
        transforms.assetBase64,
      ],
      buildPath: buildPaths.css,
      files: [
        {
          destination: "_icons.css",
          format: formats.cssVariables,
          filter: "isIconToken",
          options: {
            outputReferences: true
          }
        }
      ]
    },
    css: {
      transformGroup: transformGroups.css,
      buildPath: buildPaths.css,
      files: [
        {
          destination: "_variables.css",
          format: formats.cssVariables,
          filter: "isCustomToken",
          options: {
            outputReferences: true
          }
        }
      ],
    },
    materialCss: {
      transforms: [
        transforms.attributeCti,
        transforms.attributeColor,
        transforms.nameKebab,
        transforms.colorCss,
      ],
      buildPath: buildPaths.css,
      files: [
        {
          destination: "_material-overrides.css",
          format: formats.cssVariables,
          filter: "isMaterialOverride",
          options: {
            outputReferences: true
          }
        }
      ],
    },
    dtcgJson: {
      transformGroup: transformGroups.web,
      buildPath: buildPaths.json,
      files: [
        {
          destination: "tokens.json",
          format: formats.jsonNested, // DTCG compliant format for now
          options: {
            outputReferences: true
          }
        }
      ]
    },
  },
  log: {
    warnings: logWarningLevels.warn,
    verbosity: logVerbosityLevels.verbose,
    errors: {
      brokenReferences: logBrokenReferenceLevels.throw,
    }
  }
} satisfies Config;
