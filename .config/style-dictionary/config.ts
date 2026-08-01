import fs from "node:fs";
import path from "node:path";
import StyleDictionary, { type Config, type TransformedToken } from "style-dictionary";
import {
    commentStyles,
    formats,
    logBrokenReferenceLevels,
    logVerbosityLevels,
    logWarningLevels,
    transformGroups,
    transformTypes,
    transforms
} from "style-dictionary/enums";
import { fileHeader } from "style-dictionary/utils";
import { type Config as SVGOConfig, loadConfig, optimize } from "svgo";

/**
 * The {@link SVGOConfig} defined elsewhere
 */
const svgoConfig: SVGOConfig = await loadConfig(".config/svgo/svgo.config.mjs", process.cwd());

/**
 * Passes {@link svg} through {@link svgo} to optimize before embedding in
 *   stylesheets or Lit components
 *
 * @param svg - The `.svg` file content
 * @param path - The `.svg` file path
 * @returns The optimized and sanitized `.svg` content
 */
const optimizeSvg: (svg: string, path: string) => string =
  (svg: string, path: string) => {
    const { data } = optimize(svg, { ...svgoConfig, path });
    return data;
  };

/**
 * Passes {@link svg} through {@link svgo} and encodes for CSS data URIs
 */
const optimizeSvgForCss: (svg: string, path: string) => string =
  (svg: string, path: string) => {
    const data = optimizeSvg(svg, path);
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
 *   the string contents optimized for CSS
 *
 * @param token - A token referring to an `.svg` file
 * @returns The `string` contents
 */
const readTokenFileContentsForCss: (token: TransformedToken) => string =
  (token: TransformedToken) => {
    const filePath = path.resolve(token.value);
    if (!fs.existsSync(filePath)) return token.value;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return optimizeSvgForCss(fileContent, filePath);
  };

StyleDictionary.registerFilter({
  name: "isIconToken",
  filter: (token: TransformedToken) =>
    (
      token.name.startsWith("icons-components") ||
      token.name.startsWith("icons-logos") ||
      token.name.startsWith("icons-material")
    ) &&
    token.$type === "asset"
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

/**
 * Custom format to generate Lit `svg` template TypeScript modules from asset tokens
 */
StyleDictionary.registerFormat({
  name: "typescript/lit-svg",
  format: async function ({ dictionary, file, options }) {
    const header = await fileHeader({ file, commentStyle: commentStyles.long, formatting: {}, options });

    let code = `${header}\nimport { svg, type TemplateResult } from "lit";\n\n`;

    for (const token of dictionary.allTokens) {
      const filePath = path.resolve(token.$value);
      if (!fs.existsSync(filePath)) continue;

      const rawSvg = fs.readFileSync(filePath, "utf-8");
      const optimizedSvg = optimizeSvg(rawSvg, filePath).trim();

      // Convert kebab-case token name (e.g., icons-components-github) to camelCase constant name
      const constName = token.name
        .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
        .replace(/-/g, "");

      code += `/** ${token.description || token.name} */\n`;
      code += `export const ${constName}: TemplateResult = svg\`${optimizedSvg}\`;\n\n`;
    }

    return code;
  },
});

/**
 * Has to use `'` (single quotes) to bypass postcss process **AND** retain
 *   usefulness within `img.src` and `background-image` use cases
 */
StyleDictionary.registerTransform({
  name: "iconSvgToDataImageSvg",
  type: transformTypes.value,
  filter: (token: TransformedToken) => token.type === "asset",
  transitive: true,
  transform: (token: TransformedToken) =>
    `'data:image/svg+xml;utf8,${readTokenFileContentsForCss(token)}'`
});

StyleDictionary.registerTransform({
  name: "iconSvgToDataImageSvgName",
  type: transformTypes.name,
  transitive: false,
  transform: (token: TransformedToken) =>
    `${token.name}-icon-svg`,
});

const files = {
  buildPaths: {
    css: `${process.cwd()}/packages/design-tokens/assets/css/`,
    ts: `${process.cwd()}/packages/design-tokens/assets/ts/`,
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
    litSvg: {
      transforms: [
        transforms.attributeCti,
        transforms.nameKebab,
        transforms.assetPath
      ],
      buildPath: files.buildPaths.ts,
      files: [
        {
          destination: "icons.ts",
          format: "typescript/lit-svg",
          filter: "isIconToken",
          options: {
            formatting: {
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
  },
  log: {
    warnings: logWarningLevels.error,
    verbosity: logVerbosityLevels.verbose,
    errors: {
      brokenReferences: logBrokenReferenceLevels.throw,
    }
  }
};

export default styleDictionaryConfig;