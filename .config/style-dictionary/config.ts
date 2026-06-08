import pkg from "fs-extra";
import StyleDictionary from "style-dictionary";
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
  undo: function(dictionary, config) {}
});

StyleDictionary.registerParser({
  name: "material-theme-builder-parser",
  pattern: /\.mtb\.json$/,
  parser: ({ contents }) => {
    const raw = JSON.parse(contents);
    const tokens = {
      schemes: {}
    };

    if (raw.schemes) {
      for (const schemeName in raw.schemes) {
        if (Object.prototype.hasOwnProperty.call(raw.schemes, schemeName)) {
          tokens.schemes[schemeName] = {};
          for (const colorRole in raw.schemes[schemeName]) {
            if (Object.prototype.hasOwnProperty.call(raw.schemes[schemeName], colorRole)) {
              tokens.schemes[schemeName][colorRole] = { value: raw.schemes[schemeName][colorRole] };
            }
          }
        }
      }
    }
    return tokens;
  }
});

export default {
  // usesDtcg: true,
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
};
