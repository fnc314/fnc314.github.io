import { customElementVsCodePlugin } from "custom-element-vs-code-integration";

export default {
  globs: [
    "./src/components/**/*.ts",
    "./src/types/**/*.ts",
    "./src/themes/**/*.ts",
    "./node_modules/@material/web/**/*.ts",
  ],
  outdir: "./dist",
  dev: true,
  dependencies: true,
  packagejson: true,
  litelement: true,
  plugins: [
    customElementVsCodePlugin({
      outdir: "./dist",
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
      skip: false,
      typesSrc: "types",
    }),
  ],
  // https://github.com/oxc-project/oxc-resolver?tab=readme-ov-file#options
  resolutionOptions: {
    extensions: [".js", ".ts"],
    mainFields: ["module", "main"],
    conditionNames: ["import", "require"],
    // ... other oxc-resolver options
  },
};
