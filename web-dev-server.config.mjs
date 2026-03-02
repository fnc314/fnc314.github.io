import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { esbuildPlugin } from "@web/dev-server-esbuild";
import { importMapsPlugin } from "@web/dev-server-import-maps";
import { rollupAdapter } from "@web/dev-server-rollup";
import { fileURLToPath } from "url";

export default {
  open: false,
  watch: true,
  debug: true,
  appIndex: "./website/index.html",
  rootDir: "./",
  nodeResolve: {
    exportConditions: [
      "development",
    ]
  },
  mimeTypes: {
    "**/*.json": "application/json",
  },
  plugins: [
    importMapsPlugin(),
    esbuildPlugin({
      js: true,
      ts: true,
      json: true,
      target: "auto",
      tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url)),
    }),
    rollupAdapter(
      json({
        exclude: [
          "/assets/**/*.json",
        ],
        include: [
          "./src/partials/**/*.json",
        ]
      }),
      image({
        include: [
          "./assets/images/*.jpg",
          "./assets/icons/*.svg",
        ]
      }),
    )
  ]
}