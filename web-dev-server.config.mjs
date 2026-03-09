import json from "@rollup/plugin-json";
import { esbuildPlugin } from "@web/dev-server-esbuild";
import { importMapsPlugin } from "@web/dev-server-import-maps";
import { rollupAdapter } from "@web/dev-server-rollup";
import { fileURLToPath } from "url";

export default {
  open: false,
  watch: true,
  debug: true,
  appIndex: "index.html",
  rootDir: "./website",
  nodeResolve: {
    exportConditions: [
      "development",
    ]
  },
  mimeTypes: {
    "**/*.json": "application/json",
    "**/*.css": "text/css",
  },
  plugins: [
    importMapsPlugin(),
    esbuildPlugin({
      js: true,
      ts: true,
      json: false,
      target: "auto",
      tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url)),
    }),
    rollupAdapter(
      json({
        exclude: [
          "./assets/*.json",
          "./assets/**/*.json",
        ],
        include: [
          "./src/partials/**/*.json",
        ]
      }),
    )
  ]
}