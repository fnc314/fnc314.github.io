import { cemInheritancePlugin } from "@wc-toolkit/cem-inheritance";
import { cemSorterPlugin } from "@wc-toolkit/cem-sorter";
import { cemValidatorPlugin } from "@wc-toolkit/cem-validator";
import { jsDocTagsPlugin } from "@wc-toolkit/jsdoc-tags";
import { modulePathResolverPlugin } from "@wc-toolkit/module-path-resolver";
import { typeParserPlugin } from "@wc-toolkit/type-parser";
import BetterLitTypesPlugin from "cem-plugin-better-lit-types";
import { jsdocExamplePlugin } from "cem-plugin-jsdoc-example";
import { readmePlugin } from "cem-plugin-readme";
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

const docsDir = "sites/docs/custom-elements-manifest";
const customElementsManifestFileName = "custom-elements-manifest.json";

const customElementsManifestJSON = `sites/docs/custom-elements-manifest/${customElementsManifestFileName}`;

const packages = [
  "packages/components",
  "packages/data",
  "packages/design-tokens",
  "packages/services",
  "packages/types",
].map((pkg) => `${resolvePath(pkg, "src")}/**/*.ts`);

const excludes = packages.map((pkg) => pkg.replace("**/*.ts", "**/*.test.ts"))

console.warn(
  `Final Config is ${JSON.stringify({ packages, excludes, customElementsManifestJSON, customElementsManifestFileName, docsDir }, null, 2)}`
);

/** @type {import('@custom-elements-manifest/analyzer').Config & import('@custom-elements-manifest/analyzer').Plugin} */
// @ts-ignore
export default {
  globs: [
    ...packages
  ],
  exclude: [
    ...excludes,
    "~build/*",
  ],
  fast: false,
  outdir: docsDir,
  dev: false,
  dependencies: true,
  packagejson: false,
  litelement: true,

  // https://github.com/oxc-project/oxc-resolver?tab=readme-ov-file#options
  resolutionOptions: {
    extensions: [".ts", ".js", ".json"],
    mainFields: ["module", "main", "exports"],
    conditionNames: ["import", "require", "development", "production", "default"],
    alias: {
      "~build/git": [path.resolve(process.cwd(), ".config/custom-elements-manifest/empty-module.js")],
      "~build/package": [path.resolve(process.cwd(), ".config/custom-elements-manifest/empty-module.js")],
      "~build/time": [path.resolve(process.cwd(), ".config/custom-elements-manifest/empty-module.js")],
      "~build": [path.resolve(process.cwd(), "node_modules")],
    },
    moduleType: true,
    tsconfig: "auto",
    modules: [
      "node_modules",
      "packages",
      "configs",
    ],
    moduleType: true,
    preferRelative: true,
    // tsconfig: {
    //   configFile: path.resolve(process.cwd(), "tsconfig.json"),
    // },
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
    typeParserPlugin({
      debug: isDev,
      parseObjectTypes: "full",
      parseParameters: true,
      propertyName: "parsedType",
    }),
    BetterLitTypesPlugin,
    modulePathResolverPlugin({
      fileName: customElementsManifestJSON,
      modulePathTemplate: (modulePath) => {
        console.info(
          JSON.stringify({
            modulePath,
          }, null, 2)
        );
        return modulePath.replace("src", "dist/types").replace(".ts", ".js");
      },
      outdir: docsDir,
      debug: true,
    }),
    readmePlugin({
      from: process.cwd(),
      to: "sites/docs/custom-elements-manifest/README.md",
      headingOffset: 0,
    }),
    // customElementVsCodePlugin({
    //   outdir: "./.vscode/custom-elements-manifest",
    //   htmlFileName: "vscode.html-custom-data.json",
    //   cssFileName: "vscode.css-custom-data.json",
    //   descriptionSrc: "summary",
    //   hideSlotDocs: false,
    //   hideCssPartsDocs: false,
    //   hideCssPropertiesDocs: false,
    //   hideEventDocs: false,
    //   hideMethodDocs: false,
    //   hideLogs: false,
    //   labels: {
    //     slots: "Slots",
    //     cssParts: "CSS Parts",
    //     cssProperties: "CSS Properties",
    //     events: "Events",
    //     methods: "Methods",
    //   },
    // }),
    // customElementJetBrainsPlugin({
    //   outdir: "./.idea",
    //   webTypesFileName: "web-types.json",
    //   descriptionSrc: "summary",
    //   packageJson: true,
    //   hideSlotDocs: false,
    //   hideCssPartsDocs: false,
    //   hideCssPropertiesDocs: false,
    //   hideEventDocs: false,
    //   hideMethodDocs: false,
    //   hideLogs: false,
    //   excludeCss: false,
    //   excludeHtml: false,
    //   labels: {
    //     slots: "Slots",
    //     cssParts: "CSS Parts",
    //     cssProperties: "CSS Properties",
    //     events: "Events",
    //     methods: "Methods",
    //   },
    //   defaultIcon: "./static/icons/icon.svg",
    // }),
  ].filter((p) => p !== undefined),
};