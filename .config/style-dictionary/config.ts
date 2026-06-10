import pkg from "fs-extra";
import StyleDictionary, { type Config, type TransformedToken } from "style-dictionary";
import {
  formats,
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
  transformGroups,
  transforms
} from "style-dictionary/enums";
const { copySync, emptyDirSync } = pkg;

StyleDictionary.registerAction({
  name: "copy_themes",
  do: function(dictionary, config) {
    console.log("Copying /assets/themes");
    copySync("design-tokens/assets/themes", `${config.buildPath}themes`);
    console.log("assets/themes copied.");
  },
  undo: function(dictionary, config) {
    console.log("Deleting /dist/themes");
    emptyDirSync(`${config.buildPath}themes`);
    console.log("/dist/themes deleted.");
  }
});

StyleDictionary.registerAction({
  name: "copy_css_overrides",
  do: function(dictionary, config) {
    console.log("Copying /assets/css");
    copySync("design-tokens/assets/css", `${config.buildPath}css`);
    console.log("/assets/css copied.");
  },
  undo: function(dictionary, config) {
    console.log("Deleting /dist/css");
    emptyDirSync(`${config.buildPath}css`);
    console.log("/dist/css deleted.");
  }
});

StyleDictionary.registerAction({
  name: "copy_icon_images",
  do: function(dictionary, config) {
    console.log("Copying /assets/icons");
    copySync("design-tokens/assets/icons", `${config.buildPath}icons`);
    console.log("/assets/icons copied.");
  },
  undo: function(dictionary, config) {
    console.log("Deleting /dist/icons");
    emptyDirSync(`${config.buildPath}icons`);
    console.log("/dist/icons deleted.");
  }
});

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

export default {
  source: [
    `${process.cwd()}/design-tokens/tokens/**/*.json`,
  ],
  platforms: {
    cssIcons: {
      actions: [
        "copy_icon_images"
      ],
      transforms: [
        transforms.attributeCti,
        transforms.attributeColor,
        transforms.nameKebab,
        transforms.colorCss,
        transforms.assetBase64,
      ],
      buildPath: "design-tokens/dist/",
      files: [
        {
          destination: "css/_icons.css",
          format: formats.cssVariables,
          filter: "isIconToken",
        }
      ]
    },
    css: {
      actions: [
        "copy_themes",
        "copy_css_overrides",
      ],
      transformGroup: transformGroups.css,
      buildPath: "design-tokens/dist/",
      files: [
        {
          destination: "css/_variables.css",
          format: formats.cssVariables,
          filter: "isCustomToken",
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
      buildPath: "design-tokens/dist/",
      files: [
        {
          destination: "css/_material-overrides.css",
          format: formats.cssVariables,
          filter: "isMaterialOverride",
        }
      ],
    },
    dtcgJson: {
      transformGroup: transformGroups.web,
      buildPath: "design-tokens/dist/json/",
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
