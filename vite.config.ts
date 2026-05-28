import { DevTools } from "@vitejs/devtools";
import { execSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import visualizer from "rollup-plugin-visualizer";
import Info from "unplugin-info/vite";
import { defineConfig } from "vite";
import VitePluginCustomElementsManifest from "vite-plugin-cem";
import cp from "vite-plugin-cp";
import { type ManifestOptions, VitePWA } from "vite-plugin-pwa";
import { vitePluginVersionMark } from "vite-plugin-version-mark";
import manifest from "./manifest.json" with { type: "json" };
import packageJson from "./package.json" with { type: "json" };

interface DynamicConfigs {
  isProduction: boolean;
  isLocalBuild: boolean;
  outDirSuffix: string;
  outDir: string;
  publicDir: string;
  base: string;
  pwa: {
    manifest: {
      scope: string;
      start_url: string;
    }
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Creates {@link DynamicConfigs} from {@link process.env} and the `-m` parameter for `vite`
 *
 * @param {NodeJS.ProcessEnv} processEnv
 * @param {(string | "development" | "production")} mode
 * @returns {*}  {DynamicConfigs}
 */
function createDynamicConfig(
  processEnv: NodeJS.ProcessEnv,
  mode: string | "development" | "production",
): DynamicConfigs {
  const isProduction = processEnv.NODE_ENV === "production" && mode === "production";
  const isLocalBuild = processEnv.BUILD_ENVIRONMENT === "local";
  const outDirSuffix = `vite/${isProduction ? "production" : "development"}`;

  const base = isLocalBuild ? `/${outDirSuffix}/` : "/";
  const pwa_manifest_scope = isProduction ? "https://www.fnc314.com/" : `http://localhost:${process.env.LOCAL_BUILD_PYTHON_SERVER_PORT}${base}`;
  const pwa = {
    manifest: {
      scope: pwa_manifest_scope,
      start_url: `${pwa_manifest_scope}#info`
    }
  };
  return {
    isProduction,
    isLocalBuild,
    outDirSuffix,
    outDir: path.resolve(__dirname, `dist/${outDirSuffix}`),
    publicDir: path.resolve(__dirname, "static"),
    base,
    pwa
  };
}

const getGitInfo = () => {
  try {
    return execSync("git rev-parse --short=10 HEAD").toString().trim();
  } catch {
    return "";
  }
};

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const dynamicConfig: DynamicConfigs = createDynamicConfig(process.env, mode);

  const debugPlugins = [
    DevTools({
      builtinDevTools: true,
      build: {
        withApp: true,
      },
    }),
    VitePluginCustomElementsManifest({
      config: path.resolve(
        __dirname,
        ".config/custom-elements-manifest/custom-elements-manifest.config.mjs",
      ),
      lit: true,
      dev: !dynamicConfig.isProduction,
      packageJson: true,
    }),
    cp({
      targets: [
        {
          src: ".well-known/appspecific/com.chrome.devtools.json",
          dest: `${dynamicConfig.outDir}/.well-known/appspecific`,
        }
      ],
    })
  ];

  console.log(
    `

    VITE
    Dynamic Configs
    ${JSON.stringify(dynamicConfig, null, 2)}

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
    base: dynamicConfig.base,
    publicDir: dynamicConfig.publicDir,
    assetsInclude: [
      "files/pdfs/*.pdf",
      "images/**/*.jpg",
      "icons/**/*.{ico,svg,png",
    ].map((p) => path.resolve(dynamicConfig.publicDir, p)),
    optimizeDeps: {},
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      tsconfigPaths: true,
      extensions: [".ts", ".mts", ".js", ".mjs", ".json", ".css"],
    },
    build: {
      minify: dynamicConfig.isProduction,
      sourcemap: !dynamicConfig.isProduction,
      outDir: dynamicConfig.outDir,
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
        logLevel: "debug",
        platform: "browser",
      },
    },
    css: {
      devSourcemap: !dynamicConfig.isProduction,
      postcss: path.resolve(__dirname, "postcss.config.mjs"),
    },
    envDir: path.resolve(__dirname, ".env"),
    appType: "spa",
    logLevel: "info",
    server: {
      forwardConsole: true,
      origin: dynamicConfig.pwa.manifest.scope.slice(9, -1),
    },
    preview: {

    },
    plugins: [
      Info({
        github: "https://github.com/fnc314/fnc314.github.io",
        root: ".",
        cloudflare: false,
        package: {
          dependencies: true,
          devDependencies: true,
          optionalDependencies: true,
          overrides: true,
        },
        console: {
          environment: [
            "development",
            "production",
          ],
        }
      }),
      VitePWA({
        base: `${dynamicConfig.base}`,
        devOptions: {
          enabled: dynamicConfig.isLocalBuild,
        },
        manifest: {
          ...(manifest as Partial<ManifestOptions>),
          name: "fnc314.com",
          id: dynamicConfig.pwa.manifest.scope,
          scope: dynamicConfig.pwa.manifest.scope,
          start_url: dynamicConfig.pwa.manifest.start_url,
          icons: (manifest.icons || []).map((icon) => ({
            ...icon,
            src: `${dynamicConfig.pwa.manifest.scope}${icon.src}`,
          })),
          shortcuts: (manifest.shortcuts || []).map((shortcut) => ({
            ...shortcut,
            url: shortcut.url.replace("https://fnc314.com/", dynamicConfig.pwa.manifest.scope),
            icons: (shortcut.icons || []).map((icon) => ({
              ...icon,
              src: `${dynamicConfig.pwa.manifest.scope}${icon.src}`,
            })),
          })),
        },
        manifestFilename: "manifest.json",
        minify: dynamicConfig.isProduction,
        outDir: dynamicConfig.outDir,
        pwaAssets: {
          disabled: false,
          injectThemeColor: false,
          overrideManifestIcons: true,
          config: path.resolve(__dirname, ".config/pwa-assets/pwa-assets.config.ts"),
        },
        srcDir: path.resolve(__dirname, "static"),
      }),
      vitePluginVersionMark({
        name: "@fnc314/fnc314.github.io",
        ifShortSHA: true,
        version: packageJson.version,
        ifLog: true,
        ifMeta: true,
        ifGlobal: true,
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
        outputFile: (version: string) => ({
          path: `vite-plugin-version-mark.json`,
          content: JSON.stringify({ dynamicConfig, packageJson, gitShaVersion: version }, null, 2)
        })
      }),
      visualizer({
        title: "Vite Bundle Visualizer",
        filename: path.resolve(__dirname, `stats/vite/visualizer/${new Date().toISOString()}.html`),
        sourcemap: !dynamicConfig.isProduction,
        template: "network",
        gzipSize: true,
        brotliSize: true,
        projectRoot: path.resolve(__dirname),
      }),
      ...(!dynamicConfig.isProduction ? debugPlugins : [])
    ],
  };
});