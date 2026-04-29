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
import process from "node:process";

const isDev = process.env.NODE_ENV === "development";

const fileName = "custom-elements.json";
const docsDir = "./docs/cem";

/** @type {import("@custom-elements-manifest/analyzer").Config & { plugins: any[]  }} */
export default {
  globs: [
    "./src/components/**/*.ts",
    "./src/types/**/*.ts",
    "./src/themes/**/*.ts",
    "./node_modules/@material/web/**/*.ts",
  ],
  outdir: docsDir,
  dev: isDev,
  dependencies: true,
  packagejson: true,
  litelement: true,

  // overrideModuleCreation({ ts, globs }) {
  //   const program = getTsProgram(ts, globs, "tsconfig.json");
  //   return program.getSourceFiles().filter((sf) => globs.find((glob) => sf.fileName.includes(glob)));
  // },

  // https://github.com/oxc-project/oxc-resolver?tab=readme-ov-file#options
  resolutionOptions: {
    extensions: [".js", ".ts", ".json"],
    mainFields: ["module", "main"],
    conditionNames: ["import", "require"],
    tsconfig: {
      configFile: "./tsconfig.json",
    },
    moduleType: true,
    // ... other oxc-resolver options
  },

  plugins: [
    cemValidatorPlugin({
      packageJsonPath: "./package.json",
      cemFileName: fileName,
      logErrors: true,
      debug: isDev,
      skip: !isDev,
    }),
    cemSorterPlugin({
      fileName: fileName,
      outdir: docsDir,
      deprecatedLast: true,
      debug: isDev,
      skip: !isDev,
    }),
    cemInheritancePlugin({
      fileName: fileName,
      outdir: docsDir,
      debug: isDev,
      skip: !isDev,
    }),
    jsDocTagsPlugin({
      debug: isDev,
      skip: !isDev,
    }),
    modulePathResolverPlugin({
      fileName: fileName,
      outdir: docsDir,
      debug: isDev,
      skip: !isDev,
      modulePathTemplate: (modulePath) => modulePath.replace("./src", "./dist").replace(".ts", ".js"),
    }),
    typeParserPlugin({
      debug: isDev,
      skip: !isDev,
    }),
    jsdocExamplePlugin(),
    readmePlugin({}),
    customElementVsCodePlugin({
      outdir: "./.vscode/cem",
      htmlFileName: "./.vscode/cem/vscode.html-custom-data.json",
      cssFileName: "./.vscode/cem/vscode.css-custom-data.json",
      descriptionSrc: "description",
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
      skip: !isDev,
    }),
    customElementJetBrainsPlugin({
      skip: !isDev,
      outdir: "./.idea",
      webTypesFileName: "web-types.json",
      packageJson: true,
      descriptionSrc: "description",
      hideSlotDocs: false,
      hideCssPartsDocs: false,
      hideCssPropertiesDocs: false,
      hideEventDocs: false,
      hideMethodDocs: false,
      hideLogs: false,
      excludeCss: false,
      excludeHtml: false,
      typesSrc: "type",
      defaultIcon: "./src/assets/icons/icon.svg",
    }),
  ].map((plugin) => () => plugin),
};
