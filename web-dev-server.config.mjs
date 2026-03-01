import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fileURLToPath } from "url";

export default {
  open: false,
  watch: true,
  debug: true,
  appIndex: "./website/index.html",
  rootDir: "./website",
  // basePath: "/",
  nodeResolve: {
    exportConditions: [
      "development",
    ]
  },
  plugins: [
    esbuildPlugin({
      js: true,
      ts: true,
      json: true,
      target: "auto",
      tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url)),
    }),
  ]
}