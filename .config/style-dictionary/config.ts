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
import { type Config as SVGOConfig, loadConfig, optimize } from "svgo";

/**
 * The {@link SVGOConfig} defined elsewhere
 */
const svgoConfig: SVGOConfig = await loadConfig(".config/svgo/svgo.config.mjs", process.cwd());

/**
 * Passes {@link svg} through {@link svgo} to optimize before embedding in
 *   stylesheets
 *
 * @param svg - The `.svg` file content
 * @param path - The `.svg` file path
 * @returns The optimized and sanitized `.svg` content
 */
const optimizeSvg: (svg: string, path: string) => string =
  (svg: string, path: string) => {
    const { data } = optimize(svg, { ...svgoConfig, path });
    return data
      // 1. Remove line breaks and extra spacing to keep the CSS property on one line
      .replaceAll(/[\r\n\t]+/g, " ")
      .replaceAll(/\s{2,}/g, " ")

      // 2. Escape "#" because it indicates a URL fragment identifier
      .replaceAll("#", "%23")

      // 3. Escape "<" and ">" to comply with URL character safety standards
      .replaceAll("<", "%3C")
      .replaceAll(">", "%3E")

      // 4. Escape quotes depending on your outer CSS wrapper (assuming outer single quotes)
      .replaceAll("'", "%27")

      // 5. Escape double quotes if used inside the SVG attributes
      .replaceAll("\"", "%22")

      // 6. Escape parentheses as they would prematurely close the CSS url() function
      .replaceAll("(", "%28")
      .replaceAll(")", "%29")

      // 7. Escape "{" and "}"
      .replaceAll("{", "%7B")
      .replaceAll("}", "%7D");
  }

/**
 * Reads the file from {@link TransformedToken.value} and returns
 *   the string contents
 *
 * @param token - A token referring to an `.svg` file
 * @returns The `string` contents
 */
const readTokenFileContents: (token: TransformedToken) => string =
  (token: TransformedToken) => {
    const filePath = path.resolve(token.value);
    if (!fs.existsSync(filePath)) return token.value;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return optimizeSvg(fileContent, filePath);
  };

/**
 * Required portion of `url()` values in `css`
 *
 * @type {string}
 */
const DATA_IMAGE_SVG: string = "data:image/svg+xml"

StyleDictionary.registerFilter({
  name: "isIconToken",
  filter: (token: TransformedToken) =>
    (
      token.name.startsWith("icons-components") ||
      token.name.startsWith("icons-logos") ||
      token.name.startsWith("icons-material")
    ) &&
    token.type === "asset"
});

StyleDictionary.registerFilter({
  name: "isMaterialOverride",
  filter: (token: TransformedToken) => token.name.startsWith("md")
});

StyleDictionary.registerFilter({
  name: "isCustomToken",
  filter: (token: TransformedToken) =>
    ["icons", "sys", "ref", "md"].every(path => !token.path.includes(path))
});

StyleDictionary.registerTransform({
  name: "iconSvgToDataImageSvg",
  type: transformTypes.value,
  filter: (token: TransformedToken) => token.type === "asset",
  transitive: true,
  transform: (token: TransformedToken) =>
    `"${DATA_IMAGE_SVG};utf8,${readTokenFileContents(token)}"`
});

StyleDictionary.registerTransform({
  name: "iconSvgToDataImageSvgName",
  type: transformTypes.name,
  transitive: false,
  transform: (token: TransformedToken) =>
    `${token.name}-icon-svg`,
});

StyleDictionary.registerTransform({
  name: "iconSvgToUrlDataImageSvg",
  type: transformTypes.value,
  filter: (token: TransformedToken) => token.type === "asset",
  transitive: true,
  transform: (token: TransformedToken) =>
    `url("${DATA_IMAGE_SVG};utf8,${readTokenFileContents(token)}")`
});

StyleDictionary.registerTransform({
  name: "iconSvgToUrlDataImageSvgName",
  type: transformTypes.name,
  transitive: false,
  transform: (token: TransformedToken) =>
    `${token.name}-icon-svg-url`,
});

const files = {
  buildPaths: {
    css: `${process.cwd()}/packages/design-tokens/assets/css/`,
    json: `${process.cwd()}/packages/design-tokens/assets/json/`,
  },
  sources: [
    `${process.cwd()}/packages/design-tokens/tokens/**/*.json`,
    `!${process.cwd()}/packages/design-tokens/tokens/material-design/themes/**/*.json`,
  ]
};

const styleDictionaryConfig: Config = {
  source: files.sources,
  platforms: {
    iconSvg: {
      transforms: [
        transforms.attributeCti,
        transforms.attributeColor,
        transforms.nameKebab,
        transforms.colorCss,
        transforms.assetPath,
        "iconSvgToDataImageSvg",
        "iconSvgToDataImageSvgName"
      ],
      buildPath: files.buildPaths.css,
      files: [
        {
          destination: "icon-svg.css",
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
    iconSvgUrl: {
      transforms: [
        transforms.attributeCti,
        transforms.attributeColor,
        transforms.nameKebab,
        transforms.colorCss,
        transforms.assetPath,
        "iconSvgToUrlDataImageSvg",
        "iconSvgToUrlDataImageSvgName"
      ],
      buildPath: files.buildPaths.css,
      files: [
        {
          destination: "icon-svg-url.css",
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
      buildPath: files.buildPaths.css,
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
        transforms.assetPath,
        "iconSvgToDataImageSvg",
      ],
      buildPath: files.buildPaths.css,
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
      buildPath: files.buildPaths.json,
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
    warnings: logWarningLevels.error,
    verbosity: logVerbosityLevels.verbose,
    errors: {
      brokenReferences: logBrokenReferenceLevels.throw,
    }
  }
};

// console.log(JSON.stringify({ files, styleDictionaryConfig }, null, 2));

export default styleDictionaryConfig;