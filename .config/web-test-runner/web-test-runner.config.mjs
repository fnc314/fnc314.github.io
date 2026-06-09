import { esbuildPlugin } from "@web/dev-server-esbuild";
import { playwrightLauncher } from "@web/test-runner-playwright";
import { fileURLToPath } from "url";

/** @type {import("@web/test-runner").TestRunnerConfig} */
export default {
  files: "src/**/*.test.ts",
  nodeResolve: {
    exportConditions: ["development"],
  },
  esbuildTarget: "esnext",
  plugins: [
    esbuildPlugin({
      ts: true,
      target: "esnext",
      tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url)),
    }),
  ],
  browsers: [
    playwrightLauncher({ product: "chromium" }),
  ],
};
