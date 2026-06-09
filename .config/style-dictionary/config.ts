import pkg from "fs-extra";
import StyleDictionary, { type Config } from "style-dictionary";
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
  name: "copy_assets",
  do: function(dictionary, config) {
    console.log("Copying assets");
    copySync("design-tokens/assets", `${config.buildPath}`);
    console.log("Assets copied.");
  },
  undo: function(dictionary, config) {
    console.log("Deleting assets");
    emptyDirSync(`${config.buildPath}`);
    console.log("Assets deleted.");
  }
});

export default {
  source: [
    `${process.cwd()}/design-tokens/tokens/*.json`,
  ],
  platforms: {
    css: {
      actions: [
        "copy_assets",
      ],
      transforms: [
        transforms.assetBase64
      ],
      transformGroup: transformGroups.css,

      buildPath: "design-tokens/dist/",
      files: [{
        destination: "css/_variables.css",
        format: formats.cssVariables,
      }],
    },
    materialCss: {
      transforms: [
        transforms.assetBase64
      ],
      transformGroup: transformGroups.css,

      buildPath: "design-tokens/dist/",
      prefix: "md",
      files: [{
        destination: "css/_material-overrides.css",
        format: formats.cssVariables,
      }],
    },
    dtcgJson: {
      transformGroup: transformGroups.web,
      buildPath: "design-tokens/dist/json/",
      files: [{
        destination: "tokens.json",
        format: formats.jsonNested, // DTCG compliant format for now
        options: {
          outputReferences: true
        }
      }]
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
