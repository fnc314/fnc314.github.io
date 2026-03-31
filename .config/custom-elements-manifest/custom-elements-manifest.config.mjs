import { cemInheritancePlugin } from "@wc-toolkit/cem-inheritance";
import { cemSorterPlugin } from "@wc-toolkit/cem-sorter";
import { cemValidatorPlugin } from "@wc-toolkit/cem-validator";
import { jsDocTagsPlugin } from "@wc-toolkit/jsdoc-tags";
import { modulePathResolverPlugin } from "@wc-toolkit/module-path-resolver";
import { typeParserPlugin } from "@wc-toolkit/type-parser";

import { jsdocExamplePlugin } from "cem-plugin-jsdoc-example";
import { readmePlugin } from "cem-plugin-readme";
import { customElementVsCodePlugin } from "custom-element-vs-code-integration";

import process from "node:process";

const isDev = process.env.NODE_ENV === "development";

export default {
  globs: [
    "./src/components/**/*.ts",
    "./src/types/**/*.ts",
    "./src/themes/**/*.ts",
    "./src/data/*.json",
    "./node_modules/@material/web/**/*.ts",
  ],
  outdir: "./docs",
  outfile: "custom-elements.json",
  dev: isDev,
  verbose: isDev,
  dependencies: true,
  packagejson: true,
  litelement: true,

  // overrideModuleCreation({ ts, globs }) {
  //   const program = getTsProgram(ts, globs, "tsconfig.json");
  //   return program.getSourceFiles().filter((sf) => globs.find((glob) => sf.fileName.includes(glob)));
  // },

  plugins: [
    cemValidatorPlugin({
      logErrors: true,
      debug: isDev,
      skip: !isDev,
    }),
    cemSorterPlugin({
      deprecatedLast: true,
      debug: isDev,
      skip: !isDev,
    }),
    cemInheritancePlugin({
      debug: isDev,
      skip: !isDev,
    }),
    jsDocTagsPlugin({
      debug: isDev,
      skip: !isDev,
    }),
    modulePathResolverPlugin({
      debug: isDev,
      skip: !isDev,
    }),
    typeParserPlugin({
      debug: isDev,
      skip: !isDev,
    }),
    jsdocExamplePlugin(),
    readmePlugin({}),
    customElementVsCodePlugin({
      outdir: "./.vscode/custom-elements-manifest",
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
  ],
  // https://github.com/oxc-project/oxc-resolver?tab=readme-ov-file#options
  resolutionOptions: {
    extensions: [".js", ".ts", ".json"],
    mainFields: ["module", "main"],
    conditionNames: ["import", "require"],
    tsconfig: {
      configFile: "./tsconfig.json",
    },

    // ... other oxc-resolver options
  },
};
