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

/**
 * Resolves a path relative to {@link process.cwd()}
 * @param {string[]} segments Path segments to resolve
 * @returns {string} Resolved absolute path
 */
function resolvePath(...segments) {
  return path.resolve(process.cwd(), ...segments);
}

const isDev = process.env.NODE_ENV === "development";

const docsDir = resolvePath("docs/custom-elements-manifest");
const customElementsManifestFileName = resolvePath("docs/custom-elements-manifest", "custom-elements-manifest.json");

console.warn(
  `Final Config is ${JSON.stringify({ customElementsManifestFileName, docsDir }, null, 2)}`
);

/** @type {import('@custom-elements-manifest/analyzer').Config & import('@custom-elements-manifest/analyzer').Plugin} */
// @ts-ignore
export default {
  globs: [
    "src/components/**/*.ts",
    "src/partials/**/*.ts",
    "src/theme/**/*.ts",
    "src/types/**/*.ts",
  ],
  exclude: [
    "src/data/**/*.json",
  ],
  outdir: path.resolve(process.cwd(), docsDir),
  dev: isDev,
  dependencies: true,
  packagejson: true,
  litelement: true,

  // https://github.com/oxc-project/oxc-resolver?tab=readme-ov-file#options
  resolutionOptions: {
    extensions: [".ts", ".js"],
    mainFields: ["module", "main"],
    conditionNames: ["import", "require"],
    tsconfig: {
      configFile: path.resolve(process.cwd(), "tsconfig.json"),
    },
    moduleType: true,
    // ... other oxc-resolver options
  },

  plugins: [
    cemValidatorPlugin({
      packageJsonPath: resolvePath("package.json"),
      cemFileName: resolvePath("docs/custom-elements-manifest", "custom-elements-manifest.json"),
      logErrors: true,
      debug: isDev,
      rules: {
        manifest: {
          schemaVersion: "error",
        }, // Removed undefined property to prevent validator crashes
      },
    }),
    jsdocExamplePlugin(),
    cemSorterPlugin({
      fileName: resolvePath("docs/custom-elements-manifest", "custom-elements-manifest.json"),
      outdir: docsDir,
      deprecatedLast: true,
      debug: isDev,
    }),
    cemInheritancePlugin({
      fileName: resolvePath("docs/custom-elements-manifest", "custom-elements-manifest.json"),
      outdir: docsDir,
      debug: isDev,
    }),
    jsDocTagsPlugin({
      debug: isDev,
    }),
    modulePathResolverPlugin({
      fileName: resolvePath("docs/custom-elements-manifest", "custom-elements-manifest.json"),
      outdir: docsDir,
      debug: isDev,
    }),
    typeParserPlugin({
      debug: isDev,
      parseObjectTypes: "full",
      parseParameters: true,
    }),
    readmePlugin({
      from: process.cwd(),
      to: "README.md",
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
      defaultIcon: "./assets/icons/icon.svg",
    }),
  ].filter((p) => p !== undefined),
};