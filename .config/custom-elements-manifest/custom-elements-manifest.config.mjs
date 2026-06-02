import { cemInheritancePlugin } from "@wc-toolkit/cem-inheritance";
import { cemSorterPlugin } from "@wc-toolkit/cem-sorter";
import { cemValidatorPlugin } from "@wc-toolkit/cem-validator";
import { jsDocTagsPlugin } from "@wc-toolkit/jsdoc-tags";
import { modulePathResolverPlugin } from "@wc-toolkit/module-path-resolver";
import { typeParserPlugin } from "@wc-toolkit/type-parser";
import BetterLitTypesPlugin from "cem-plugin-better-lit-types";
import { jsdocExamplePlugin } from "cem-plugin-jsdoc-example";
import { readmePlugin } from "cem-plugin-readme";
import { customElementJetBrainsPlugin } from "custom-element-jet-brains-integration";
import { customElementVsCodePlugin } from "custom-element-vs-code-integration";
import path from "node:path";
import process from "node:process";

/** @typedef {import('@custom-elements-manifest/analyzer').Config} Config */
/** @typedef {import('@custom-elements-manifest/analyzer').Plugin} Plugin */

/**
 * Resolves a path relative to {@link process.cwd()}
 * @param {string[]} segments Path segments to resolve
 * @returns {string} Resolved absolute path
 */
function resolvePath(...segments) {
  return path.resolve(process.cwd(), ...segments);
}

const isDev = process.env.NODE_ENV === "development";

const docsDir = "docs/custom-elements-manifest";
const customElementsManifestFileName = "custom-elements-manifest.json";

const customElementsManifestJSON = resolvePath("docs", "custom-elements-manifest", "custom-elements.json")

console.warn(
  `Final Config is ${JSON.stringify({ customElementsManifestFileName, docsDir }, null, 2)}`
);

/** @type {import('@custom-elements-manifest/analyzer').Config & import('@custom-elements-manifest/analyzer').Plugin} */
// @ts-ignore
export default {
  globs: [
    "src/components/**/*.ts",
  ],
  exclude: [
    "**/*.json",
    "src/data/**/*.json",
    "src/index.ts",
    "~build/*",
  ],
  fast: false,
  outdir: docsDir,
  dev: isDev,
  dependencies: false,
  packagejson: true,
  litelement: true,

  // https://github.com/oxc-project/oxc-resolver?tab=readme-ov-file#options
  resolutionOptions: {
    extensions: [".ts", ".js", ".json"],
    mainFields: ["module", "main"],
    conditionNames: ["import", "require"],
    alias: {
      "@": [path.resolve(process.cwd(), "src")],
      "~build/git": [path.resolve(process.cwd(), ".config/custom-elements-manifest/empty-module.js")],
      "~build/package": [path.resolve(process.cwd(), ".config/custom-elements-manifest/empty-module.js")],
      "~build/time": [path.resolve(process.cwd(), ".config/custom-elements-manifest/empty-module.js")],
      "~build": [path.resolve(process.cwd(), "node_modules")]
    },
    tsconfig: {
      configFile: path.resolve(process.cwd(), "tsconfig.json"),
    },
  },

  plugins: [
    cemValidatorPlugin({
      packageJsonPath: resolvePath("package.json"),
      cemFileName: customElementsManifestJSON,
      logErrors: true,
      debug: true,
      // rules: {
      //   manifest: {
      //     schemaVersion: "error",
      //   }, // Removed undefined property to prevent validator crashes
      // },
      rules: {
        manifest: {
          schemaVersion: "warning",
        },
      },
    }),
    jsdocExamplePlugin(),
    cemSorterPlugin({
      fileName: customElementsManifestJSON,
      outdir: docsDir,
      deprecatedLast: true,
      debug: true,
    }),
    cemInheritancePlugin({
      fileName: customElementsManifestJSON,
      outdir: docsDir,
      debug: true,
    }),
    jsDocTagsPlugin({
      debug: true,
    }),
    modulePathResolverPlugin({
      fileName: customElementsManifestJSON,
      modulePathTemplate: (modulePath) => modulePath.replace("src", "dist/out").replace(".ts", ".js"),
      outdir: docsDir,
      debug: true,
    }),
    typeParserPlugin({
      debug: isDev,
      parseParameters: true,
      propertyName: "parsedType",
    }),
    BetterLitTypesPlugin,
    readmePlugin({
      from: process.cwd(),
      to: "docs/custom-elements-manifest/README.md",
      headingOffset: 0,
    }),
    customElementVsCodePlugin({
      outdir: "./.vscode/custom-elements-manifest",
      htmlFileName: "vscode.html-custom-data.json",
      cssFileName: "vscode.css-custom-data.json",
      descriptionSrc: "summary",
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
    }),
    customElementJetBrainsPlugin({
      outdir: "./.idea",
      webTypesFileName: "web-types.json",
      descriptionSrc: "summary",
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
      defaultIcon: "./static/icons/icon.svg",
    }),
  ].filter((p) => p !== undefined),
};