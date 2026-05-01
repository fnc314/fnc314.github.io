import { DevTools } from "@vitejs/devtools";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import versionInjector from "rollup-plugin-version-injector";
import visualizer from "rollup-plugin-visualizer";
import { type UserConfig, defineConfig } from "vite";
import VitePluginCustomElementsManifest from "vite-plugin-cem";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getGitInfo = () => {
  try {
    return execSync("git rev-parse --short=10 HEAD").toString().trim();
  } catch {
    return "";
  }
};

export default defineConfig(async ({ command, mode, isSsrBuild, isPreview }) => {
  const userConfig: UserConfig =
    command === "serve"
      ? {
          /* dev specific config */
          build: {
            minify: false,
            sourcemap: true,
          },
          css: {
            devSourcemap: true,
          },
          devtools: {
            enabled: true,
          },
          plugins: [
            DevTools({
              builtinDevTools: true,
              build: {
                withApp: true,
              },
            }),
          ],
        }
      : {
          /* build specific config */
          build: {
            minify: true,
            sourcemap: false,
          },
        };

  const finalConfig: UserConfig = {
    ...userConfig,
    root: path.resolve(__dirname, "src"),
    define: {
      "import.meta.env.VITE_GIT_COMMIT_HASH": JSON.stringify(getGitInfo()),
    },
    base: "/",
    publicDir: "",
    assetsInclude: [
      path.resolve(__dirname, "src/assets/files/pdfs/*.pdf"),
      path.resolve(__dirname, "src/assets/images/**/*.jpg"),
      path.resolve(__dirname, "src/assets/icons/**/*.{ico,svg,png}"),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      tsconfigPaths: true,
      extensions: [".ts", ".js", ".mjs", ".json", ".css"],
    },
    build: {
      ...userConfig.build,
      outDir: path.resolve(__dirname, "website"),
      assetsDir: "./assets",
      license: true,
      manifest: true,
      emptyOutDir: true,
      copyPublicDir: true,
      rolldownOptions: {},
    },
    css: {
      ...userConfig.css,
      postcss: path.resolve(__dirname, "postcss.config.mjs"),
    },
    envDir: path.resolve(__dirname, ".env"),
    appType: "spa",
    plugins: [
      ...(userConfig.plugins || []),
      VitePluginCustomElementsManifest({
        config: path.resolve(__dirname, ".config/custom-elements-manifest/custom-elements-manifest.config.mjs"),
      }),
      {
        name: "version-injector",
        ...versionInjector({
          injectInComments: false,
          injectInTags: {
            fileRegexp: /\.(js|ts|html|css)$/,
            tagId: "VI",
            dateFormat: "yyyy-mm-dd @ HH:MM:ss TT",
          },
          packageJson: "./package.json",
          logger: console,
          exclude: [],
        }),
      },
      visualizer(),
    ],
  };

  return finalConfig;
});
