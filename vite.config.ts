import { DevTools } from "@vitejs/devtools";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { type UserConfig, defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const userConfig: UserConfig =
    command === "serve"
      ? {
          /* dev specific config */
          build: {
            minify: false,
            sourcemap: true,
          },
          devtools: {
            enabled: true,
          },
          plugins: [DevTools({})],
        }
      : {
          /* build specific config */
          build: {
            minify: true,
            sourcemap: false,
          },
        };

  return {
    ...userConfig,
    root: "./src",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      tsconfigPaths: true,
    },
    build: {
      ...userConfig.build,
      outDir: path.resolve(__dirname, "website"),
      assetDir: "./assets",
      emptyOutDir: true,
    },
    css: {
      ...userConfig.css,
      postcss: path.resolve(__dirname, "postcss.config.mjs"),
    },
    envDir: path.resolve(__dirname, ".env"),
    appType: "spa",
    plugins: [...(userConfig.plugins || [])],
  };
});
