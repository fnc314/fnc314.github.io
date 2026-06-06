import StyleDictionary from 'style-dictionary';
import pkg from 'fs-extra';
const { copySync, emptyDirSync } = pkg;

StyleDictionary.registerAction({
  name: 'copy_theme_images',
  do: function(dictionary, config) {
    console.log('Copying theme images...');
    emptyDirSync(`${config.buildPath}images/themes`);
    copySync('design-tokens/src/themes/images', `${config.buildPath}images/themes`);
    console.log('Theme images copied.');
  },
  undo: function(dictionary, config) {
    emptyDirSync(`${config.buildPath}images`);
  }
});

StyleDictionary.registerParser({
  name: 'material-theme-builder-parser',
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
  source: [
    "design-tokens/src/themes/**/*.mtb.json", // Existing theme JSONs
    "design-tokens/src/spacing.json",
    "design-tokens/src/breakpoints.json",
    "design-tokens/src/typography.json",
    "design-tokens/src/shapes.json",
    "design-tokens/src/icons.json",
    "design-tokens/src/globals.json"
  ],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "design-tokens/dist/css/",
      files: [{
        destination: "_variables.css",
        format: "css/variables",
        options: {
          outputReferences: true
        }
      }]
    },
    dtcgJson: {
      transformGroup: "web",
      buildPath: "design-tokens/dist/json/",
      files: [{
        destination: "tokens.json",
        format: "json/nested", // DTCG compliant format for now
        options: {
          outputReferences: true
        }
      }]
    },
  },
  actions: ['copy_theme_images']
};
