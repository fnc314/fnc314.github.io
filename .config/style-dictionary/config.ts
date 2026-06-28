import fs from "node:fs";
import path from "node:path";
import StyleDictionary, { type Config, type TransformedToken } from "style-dictionary";
import {
  formats,
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
  transformGroups,
  transformTypes,
  transforms
} from "style-dictionary/enums";

const encodeSvgToUtf8: (svg: string) => string = (svg: string) =>
  svg
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/\s+/g, ' ')
    .trim();

const readTokenFileContents: (token: TransformedToken) => string = (token: TransformedToken) => {
  const filePath = path.resolve(token.value);
  if (!fs.existsSync(filePath)) return token.value;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return encodeSvgToUtf8(fileContent);
}

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

StyleDictionary.registerTransform({
  name: "iconEncodingToDataImageSvg",
  type: transformTypes.value,
  filter: (token: TransformedToken) => token.path.includes("icons"),
  transitive: false,
  transform: (token: TransformedToken) =>
    `"data:image/svg+xml;base64,${token.value}"`,
});

StyleDictionary.registerTransform({
  name: "iconToDataImageSvg",
  type: transformTypes.value,
  filter: (token: TransformedToken) => token.path.includes("icons"),
  transitive: false,
  transform: (token: TransformedToken) =>
    `"data:image/svg+xml;utf8,${readTokenFileContents(token)}"`,
});

StyleDictionary.registerTransform({
  name: "iconToDataImageSvgName",
  type: transformTypes.name,
  filter: (token: TransformedToken) => token.path.includes("icons"),
  transitive: false,
  transform: (token: TransformedToken) =>
    `${token.name}-data-image-svg-raw`,
});

StyleDictionary.registerTransform({
  name: "iconEncodingToDataImageSvgName",
  type: transformTypes.name,
  filter: (token: TransformedToken) => token.path.includes("icons"),
  transitive: false,
  transform: (token: TransformedToken) =>
    `${token.name}-data-image-svg`,
});

StyleDictionary.registerTransform({
  name: "urlForIcons",
  type: transformTypes.value,
  filter: (token: TransformedToken) => token.path.includes("icons"),
  transitive: false,
  transform: (token: TransformedToken) =>
    `url("data:image/svg+xml;base64,${token.value}")`,
});

StyleDictionary.registerTransform({
  name: "urlForIconsSvg",
  type: transformTypes.value,
  filter: (token: TransformedToken) => token.path.includes("icons"),
  transitive: false,
  transform: (token: TransformedToken) =>
    `url("data:image/svg+xml;utf8,${readTokenFileContents(token)}")`,
});

StyleDictionary.registerTransform({
  name: "urlForIconsName",
  type: transformTypes.name,
  filter: (token: TransformedToken) => token.path.includes("icons"),
  transitive: false,
  transform: (token: TransformedToken) =>
    `${token.name}-css-url`,
});

StyleDictionary.registerTransform({
  name: "urlForIconsNameSvg",
  type: transformTypes.name,
  filter: (token: TransformedToken) => token.path.includes("icons"),
  transitive: false,
  transform: (token: TransformedToken) =>
    `${token.name}-css-url-svg`,
});

const buildPaths = {
  css: `${process.cwd()}/packages/design-tokens/assets/css/`,
  json: `${process.cwd()}/packages/design-tokens/assets/json/`,
};

export default {
  source: [
    `${process.cwd()}/packages/design-tokens/tokens/**/*.json`,
    `!${process.cwd()}/packages/design-tokens/tokens/dtcg/**/*.json`,
  ],
  platforms: {
    iconsAsDataSvg: {
      transforms: [
        transforms.attributeCti,
        transforms.attributeColor,
        transforms.nameKebab,
        transforms.colorCss,
        transforms.assetBase64,
        "iconEncodingToDataImageSvg",
        "iconEncodingToDataImageSvgName"
      ],
      buildPath: buildPaths.css,
      files: [
        {
          destination: "data_image_svg_icons.css",
          format: formats.cssVariables,
          filter: "isIconToken",
          options: {
            outputReferences: true,
            outputReferenceFallbacks: true,
            sort: "name",
            formatting: {
              indentation: "  ",
              fileHeaderTimestamp: true,
              commentPosition: "above",
              commentStyle: "long",
            }
          }
        }
      ]
    },
    iconsAsDataSvgRaw: {
      transforms: [
        transforms.attributeCti,
        transforms.attributeColor,
        transforms.nameKebab,
        transforms.colorCss,
        transforms.assetPath,
        "iconToDataImageSvg",
        "iconToDataImageSvgName"
      ],
      buildPath: buildPaths.css,
      files: [
        {
          destination: "data_image_svg_icons_raw.css",
          format: formats.cssVariables,
          filter: "isIconToken",
          options: {
            outputReferences: true,
            outputReferenceFallbacks: true,
            sort: "name",
            formatting: {
              indentation: "  ",
              fileHeaderTimestamp: true,
              commentPosition: "above",
              commentStyle: "long",
            }
          }
        }
      ]
    },
    iconsAsCssUrl: {
      transforms: [
        transforms.attributeCti,
        transforms.attributeColor,
        transforms.nameKebab,
        transforms.colorCss,
        transforms.assetBase64,
        "urlForIcons",
        "urlForIconsName"
      ],
      buildPath: buildPaths.css,
      files: [
        {
          destination: "css_url_icons.css",
          format: formats.cssVariables,
          filter: "isIconToken",
          options: {
            outputReferences: true,
            outputReferenceFallbacks: true,
            sort: "name",
            formatting: {
              indentation: "  ",
              fileHeaderTimestamp: true,
              commentPosition: "above",
              commentStyle: "long",
            }
          }
        }
      ]
    },
    iconsAsCssUrlSvg: {
      transforms: [
        transforms.attributeCti,
        transforms.attributeColor,
        transforms.nameKebab,
        transforms.colorCss,
        transforms.assetPath,
        "urlForIconsSvg",
        "urlForIconsNameSvg"
      ],
      buildPath: buildPaths.css,
      files: [
        {
          destination: "css_url_icons_svg.css",
          format: formats.cssVariables,
          filter: "isIconToken",
          options: {
            outputReferences: true,
            outputReferenceFallbacks: true,
            sort: "name",
            formatting: {
              indentation: "  ",
              fileHeaderTimestamp: true,
              commentPosition: "above",
              commentStyle: "long",
            }
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
            outputReferences: true,
            outputReferenceFallbacks: true,
            sort: "name",
            formatting: {
              indentation: "  ",
              fileHeaderTimestamp: true,
              commentPosition: "above",
              commentStyle: "long",
            }
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
        transforms.assetBase64,
        "iconEncodingToDataImageSvg",
        "iconEncodingToDataImageSvgName"
      ],
      buildPath: buildPaths.css,
      files: [
        {
          destination: "_material-overrides.css",
          format: formats.cssVariables,
          filter: "isMaterialOverride",
          options: {
            outputReferences: true,
            outputReferenceFallbacks: true,
            sort: "name",
            formatting: {
              indentation: "  ",
              fileHeaderTimestamp: true,
              commentPosition: "above",
              commentStyle: "long",
            }
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
            outputReferences: true,
            outputReferenceFallbacks: true,
            sort: "name",
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
