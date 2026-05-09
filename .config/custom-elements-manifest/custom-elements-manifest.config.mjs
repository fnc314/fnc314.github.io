import { cemInheritancePlugin } from "@wc-toolkit/cem-inheritance";
import { cemSorterPlugin } from "@wc-toolkit/cem-sorter";
import { cemValidatorPlugin } from "@wc-toolkit/cem-validator";
import { jsDocTagsPlugin } from "@wc-toolkit/jsdoc-tags";
import { modulePathResolverPlugin } from "@wc-toolkit/module-path-resolver";
import { typeParserPlugin } from "@wc-toolkit/type-parser";
import { jsdocExamplePlugin } from "cem-plugin-jsdoc-example";
import { readmePlugin } from "cem-plugin-readme";
import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";
import { customElementVsCodePlugin } from "custom-element-vs-code-integration";
import path from "node:path";
import process from "node:process";

/** @typedef {import('@custom-elements-manifest/analyzer').Config} Config */
/** @typedef {import('@custom-elements-manifest/analyzer').Plugin} Plugin */

const isDev = process.env.NODE_ENV === "development";

const fileName = "custom-elements-manifest.json";
const docsDir = "./docs/custom-elements-manifest";

/** @type {Config} */
const config = {
  globs: [
    "./src/components/**/*.ts",
    "./src/partials/**/*.ts",
    "./src/theme/**/*.ts",
    "./src/types/**/*.ts",
  ],
  outdir: docsDir,
  dev: isDev,
  dependencies: true,
  packagejson: true,
  litelement: true,

  // https://github.com/oxc-project/oxc-resolver?tab=readme-ov-file#options
  resolutionOptions: {
    extensions: [".js", ".ts", ".json"],
    mainFields: ["module", "main"],
    conditionNames: ["import", "require"],
    tsconfig: {
      configFile: path.resolve(process.cwd(), "tsconfig.json"),
    },
    moduleType: true,
    // ... other oxc-resolver options
  },

  plugins: /** @type {any} */ (
    [
      cemValidatorPlugin({
        packageJsonPath: "./package.json",
        cemFileName: fileName,
        logErrors: true,
        debug: isDev,
        rules: {
          manifest: {} // Removed undefined property to prevent validator crashes
        }
      }),
      jsdocExamplePlugin(),
      cemSorterPlugin({
        fileName: fileName,
        outdir: docsDir,
        deprecatedLast: true,
        debug: isDev,
      }),
      cemInheritancePlugin({
        fileName: fileName,
        outdir: docsDir,
        debug: isDev,
      }),
      jsDocTagsPlugin({
        debug: isDev,
      }),
      modulePathResolverPlugin({
        fileName: fileName,
        outdir: docsDir,
        debug: isDev,
      typeParserPlugin({
        debug: isDev,
        parseObjectTypes: "full",
        parseParameters: true,
        propertyName: "parsedType",
      }),
      readmePlugin({
        from: process.cwd(),
        to: "README.md",
        headingOffset: 0,
      customElementVsCodePlugin({
        outdir: "./.vscode/custom-elements-manifest",
        htmlFileName: "vscode.html-custom-data.json",
        cssFileName: "vscode.css-custom-data.json",
        packageJson: true,
        hideSlotDocs: false,
        hideCssPartsDocs: false,
        hideCssPropertiesDocs: false,
        hideEventDocs: false,
        hideMethodDocs: false,
        hideLogs: false,
        labels: {
          slots: "Slots",
          cssParts: "CSS Parts",
          cssProperties: "CSS Properties",
          events: "Events",
          methods: "Methods",
        },
        defaultIcon: "./assets/icons/icon.svg",
      }),
      customElementJetBrainsPlugin({
        outdir: "./.idea",
        webTypesFileName: "web-types.json",
        packageJson: true,
        hideSlotDocs: false,
        hideCssPartsDocs: false,
        hideCssPropertiesDocs: false,
        hideEventDocs: false,
        hideMethodDocs: false,
        hideLogs: false,
        excludeCss: false,
        excludeHtml: false,
        labels: {
          slots: "Slots",
          cssParts: "CSS Parts",
          cssProperties: "CSS Properties",
          events: "Events",
          methods: "Methods",
        },
        defaultIcon: "./assets/icons/icon.svg",
      }),    ].filter((p) => p !== undefined)
  ), // Keep filter to ensure no 'undefined' values are passed
};

export default config;
