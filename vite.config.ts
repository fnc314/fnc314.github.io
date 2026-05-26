import { DevTools } from "@vitejs/devtools";
import { execSync } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import versionInjector from "rollup-plugin-version-injector";
import visualizer from "rollup-plugin-visualizer";
import Info from "unplugin-info/vite";
import { defineConfig } from "vite";
import VitePluginCustomElementsManifest from "vite-plugin-cem";
import { type ManifestOptions, VitePWA } from "vite-plugin-pwa";
import { vitePluginVersionMark } from "vite-plugin-version-mark";
import manifest from "./manifest.json" with { type: "json" };
import packageJson from "./package.json" with { type: "json" };


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const getGitInfo = () => {
  try {
    return execSync("git rev-parse --short=10 HEAD").toString().trim();
  } catch {
    return "";
  }
};

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const isProduction = process.env.NODE_ENV === "production" && mode === "production";
  const outDirSuffix = `vite/${isProduction ? "production" : "development"}`;
  const outDir = path.resolve(__dirname, `dist/${outDirSuffix}`);
  const publicDir = path.resolve(__dirname, "static");
  const base = process.env.BUILD_ENVIRONMENT === "local" ? `/${outDirSuffix}/` : "/";

  console.log(
    `

    VITE
    Command >${command}<
    mode >${mode}<
    Preview? ${isPreview}
    SSR Build? (Server-Side Rendering) ${isSsrBuild}

    base >${base}<
    outDir >${outDir}<
    publicDir >${publicDir}<
    NODE_ENV >${process.env.NODE_ENV}<
    isProduction >${isProduction}<
    CWD
      \`process.cwd()\` - ${process.cwd()}
      \`path.resolve(__dirname)\` - ${path.resolve(__dirname)}

    `
  );

  return {
    html: {},
    json: {},
    root: path.resolve(__dirname),
    define: {
      "import.meta.env.VITE_GIT_COMMIT_HASH": JSON.stringify(getGitInfo()),
    },
    base,
    publicDir,
    assetsInclude: [
      "files/pdfs/*.pdf",
      "images/**/*.jpg",
      "icons/**/*.{ico,svg,png",
    ].map((p) => path.resolve(publicDir, p)),
    optimizeDeps: {},
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      tsconfigPaths: true,
      extensions: [".ts", ".mts", ".js", ".mjs", ".json", ".css"],
    },
    build: {
      minify: isProduction,
      sourcemap: !isProduction,
      outDir,
      assetsDir: "./assets",
      license: true,
      manifest: true,
      emptyOutDir: true,
      copyPublicDir: true,
      rolldownOptions: {
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        devtools: {},
        experimental: {
          viteMode: true,
        },
        platform: "browser",
      },
    },
    css: {
      devSourcemap: !isProduction,
      postcss: path.resolve(__dirname, "postcss.config.mjs"),
    },
    envDir: path.resolve(__dirname, ".env"),
    appType: "spa",
    logLevel: "info",
    plugins: [
      ...(!isProduction
        ? [
          DevTools({
            builtinDevTools: true,
            build: {
              withApp: true,
            },
          }),
        ]
        : []),
      Info({
        cloudflare: false,
        package: {
          dependencies: true,
          devDependencies: true,
          optionalDependencies: true,
          overrides: true,
        }
      }),
      VitePWA({
        devOptions: {
          enabled: !isProduction,
        },
        manifest: {
          ...(manifest as Partial<ManifestOptions>),
          name: "fnc314.com",
          id: isProduction ? "https://www.fnc314.com" : `http://localhost:${process.env.LOCAL_BUILD_PYTHON_SERVER_PORT}`,
          start_url: "/#info",
          scope: isProduction ? "https://www.fnc314.com" : `http://localhost:${process.env.LOCAL_BUILD_PYTHON_SERVER_PORT}`,
        },
        manifestFilename: "manifest.json",
        minify: isProduction,
        outDir,
        pwaAssets: {
          disabled: false,
          injectThemeColor: false,
          overrideManifestIcons: true,
          config: path.resolve(__dirname, ".config/pwa-assets/pwa-assets.config.ts"),
        },
        srcDir: path.resolve(__dirname, "static"),
      }),
      !isProduction &&
      VitePluginCustomElementsManifest({
        config: path.resolve(
          __dirname,
          ".config/custom-elements-manifest/custom-elements-manifest.config.mjs",
        ),
        lit: true,
        dev: !isProduction,
        //output: path.resolve(__dirname, "docs/custom-elements-manifest/custom-elements-manifest.json"),
        //endpoint: path.resolve(__dirname, "docs/custom-elements-manifest/custom-elements-manifest.json"),
        packageJson: true,
      }),
      vitePluginVersionMark({
        name: "@fnc314/fnc314.github.io",
        ifGitSHA: true,
        ifShortSHA: true,
        version: packageJson.version,
        ifLog: true,
        ifMeta: true,
        command: {
          commands: [
            {
              alias: "shortSHA",
              cmd: "git rev-parse --short=10 HEAD",
              fallback: getGitInfo(),
            },
            {
              alias: "version",
              cmd: "jq -r '.version' package.json",
              fallback: packageJson.version,
            },
          ],
          format: "v{version}-{shortSHA}",
          parallel: true,
        },
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
        filename: path.resolve(__dirname, `stats/vite/visualizer/${new Date().toISOString()}.html`),
        sourcemap: !isProduction,
        template: "network",
        gzipSize: true,
        brotliSize: true,
        projectRoot: path.resolve(__dirname),
      }),
    ],
  };
});