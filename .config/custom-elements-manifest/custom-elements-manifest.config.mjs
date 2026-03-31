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
  // format: "vscode",
  plugins: [

    readmePlugin({

    }),
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
