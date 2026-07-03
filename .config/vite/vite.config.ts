import { DevTools } from "@vitejs/devtools";
import { execSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import visualizer from "rollup-plugin-visualizer";
import Info from "unplugin-info/vite";
import { type UserConfig, defineConfig } from "vite";
import VitePluginCustomElementsManifest from "vite-plugin-cem";
import cp from "vite-plugin-cp";
import type { ManifestOptions } from "vite-plugin-pwa";
import { VitePWA } from "vite-plugin-pwa";
import { vitePluginVersionMark } from "vite-plugin-version-mark";
import manifest from "./../../manifest.json" with { type: "json" };
import packageJson from "./../../package.json" with { type: "json" };

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
  const pwa_manifest_scope = isProduction ? "https://fnc314.com/" : `http://localhost:${process.env.LOCAL_BUILD_PYTHON_SERVER_PORT}${base}`;
  const pwa = {
    manifest: {
      scope: pwa_manifest_scope,
      start_url: `${pwa_manifest_scope}`
    }
  };
  return {
    isProduction,
    isLocalBuild,
    outDirSuffix,
    outDir: path.resolve(process.cwd(), `dist/${outDirSuffix}`),
    publicDir: path.resolve(process.cwd(), "static"),
    base,
    pwa
  };
}

/**
 * Calls through to {@link execSync} to generate the current git hash from
 *   the external CLI
 *
 * @returns {string} The result of the `git` command, or an empty string
 */
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
        withApp: false,
        outDir: dynamicConfig.outDir,
      },
    }),
    VitePluginCustomElementsManifest({
      config: path.resolve(
        `${process.cwd()}`,
        ".config/custom-elements-manifest/custom-elements-manifest.config.mjs",
      ),
      lit: true,
      dev: !dynamicConfig.isProduction,
      packageJson: false,
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

  const userConfig: UserConfig = {
    devtools: {
      enabled: !dynamicConfig.isProduction,
      environments: [
        "development",
      ]
    },
    html: {},
    json: {},
    root: path.resolve(process.cwd()),
    define: {
      "import.meta.env.VITE_GIT_COMMIT_HASH": JSON.stringify(getGitInfo()),
    },
    base: dynamicConfig.base,
    publicDir: dynamicConfig.publicDir,
    optimizeDeps: {},
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"),
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
        tsconfig: path.resolve(process.cwd(), "tsconfig.json"),
        devtools: {},
        experimental: {
          // viteMode: true,
        },
        logLevel: "debug",
        platform: "browser",
        treeshake: dynamicConfig.isProduction,
      },
      reportCompressedSize: true,
    },
    css: {
      transformer: "postcss",
      devSourcemap: !dynamicConfig.isProduction,
      postcss: path.resolve(process.cwd(), ".config/postcss/postcss.config.mjs"),
    },
    envDir: path.resolve(process.cwd(), ".env"),
    appType: "spa",
    logLevel: "info",
    server: {
      forwardConsole: true,
      origin: dynamicConfig.pwa.manifest.scope.slice(0, -1),
      port: parseInt(process.env.LOCAL_BUILD_PYTHON_SERVER_PORT || "9999"),
      strictPort: true,
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
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 60_000_000,
        },
        manifestFilename: "manifest.json",
        minify: dynamicConfig.isProduction,
        outDir: dynamicConfig.outDir,
        pwaAssets: {
          disabled: false,
          injectThemeColor: false,
          overrideManifestIcons: false,
          config: path.resolve(process.cwd(), ".config/pwa-assets/pwa-assets.config.ts"),
        },
        srcDir: path.resolve(process.cwd(), "static"),
        disable: false,
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
        filename: path.resolve(process.cwd(), `stats/vite/visualizer/${mode}-${process.env.NODE_ENV}/${new Date().toISOString()}.html`),
        sourcemap: !dynamicConfig.isProduction,
        template: "network",
        gzipSize: true,
        brotliSize: true,
        projectRoot: path.resolve(process.cwd()),
      }),
      ...(!dynamicConfig.isProduction ? debugPlugins : [])
    ],
  };

  console.error(
    `
    VITE
    Dynamic Configs
      ${JSON.stringify(dynamicConfig, null, 2)}
    Returned Config
      ${JSON.stringify(userConfig, null, 2)}

    params
    MODE - ${mode}
    COMMAND - ${command}
    IS_SSR_BUILD - ${isSsrBuild}
    IS_PREVIEW - ${isPreview}
    process.ENV - ${JSON.stringify(process.env, null, 2)}

    CWD
      \`process.cwd()\` - ${process.cwd()}
      \`path.resolve(__dirname)\` - ${path.resolve(__dirname)}

    `.trim()
  );

  return userConfig;
});