import { DevTools } from "@vitejs/devtools";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import versionInjector from "rollup-plugin-version-injector";
import visualizer from "rollup-plugin-visualizer";
import { type UserConfig, defineConfig } from "vite";
import VitePluginCustomElementsManifest from "vite-plugin-cem";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";
import manifest from "./assets/manifest.json" with { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getGitInfo = () => {
  try {
    return execSync("git rev-parse --short=10 HEAD").toString().trim();
  } catch {
    return "";
  }
};

export default defineConfig(async ({ command, mode, isSsrBuild, isPreview }) => {
  console.log(`Running Vite in ${__dirname} with command: ${command}, mode: ${mode}, isSsrBuild: ${isSsrBuild}, isPreview: ${isPreview}`);

  const isProduction = mode === "production";

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
    publicDir: path.resolve(__dirname, "assets"),
    assetsInclude: [
      path.resolve(__dirname, "assets/files/pdfs/*.pdf"),
      path.resolve(__dirname, "assets/images/**/*.jpg"),
      path.resolve(__dirname, "assets/icons/**/*.{ico,svg,png}"),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      tsconfigPaths: true,
      extensions: [".ts", ".mts", ".js", ".mjs", ".json", ".css"],
    },
    build: {
      ...userConfig.build,
      outDir: path.resolve(__dirname, "dist"),
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
      VitePWA({
        devOptions: {
          enabled: !isProduction,
        },
        manifest: {
          ...(manifest as Partial<ManifestOptions>),
          name: "fnc314.com",
        },
        manifestFilename: isProduction ? "manifest.json" : "manifest.dev.json",
        minify: isProduction,
        pwaAssets: {
          disabled: false,
          injectThemeColor: false,
          overrideManifestIcons: true,
          config: path.resolve(__dirname, ".config/pwa-assets/pwa-assets.config.ts"),
        },
        srcDir: path.resolve(__dirname, "assets"),
      }),
      VitePluginCustomElementsManifest({
        output: path.resolve(__dirname, "dist/custom-elements-manifest.json"),
        packageJson: true,
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
      visualizer({
        title: "Vite Bundle Visualizer",
        filename: path.resolve(__dirname, "stats/vite.visualizer.html"),
        sourcemap: (userConfig.build?.sourcemap === true) || !isProduction,
        template: "network",
        gzipSize: true,
        brotliSize: true,
        projectRoot: path.resolve(__dirname, "src"),
      }),
    ],
  };

  return finalConfig;
});
