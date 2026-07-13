import { DevTools } from "@vitejs/devtools";
import { execSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { type PreRenderedAsset } from "rolldown";
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

/**
 * Creates {@link DynamicConfigs} from {@link process.env} and the `-m` parameter for `vite`
 *
 * @param processEnv - The {@link process.env}
 * @param mode - Either `production` or `development`
 * @returns An instance of {@link DynamicConfigs}
 */
function createDynamicConfig(
  processEnv: NodeJS.ProcessEnv,
  mode: string | "development" | "production",
): DynamicConfigs {
  const isProduction = processEnv.NODE_ENV === "production" && mode === "production";
  const isLocalBuild = processEnv.BUILD_ENVIRONMENT === "local";
  const outDirSuffix = `vite/${mode}`;

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
          src: path.resolve(
            process.cwd(),
            ".well-known/appspecific/com.chrome.devtools.json"
          ),
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
    css: {
      transformer: "postcss",
      devSourcemap: !dynamicConfig.isProduction,
      postcss: path.resolve(process.cwd(), ".config/postcss/postcss.config.mjs"),
    },
    json: {},
    root: path.resolve(process.cwd(), "sites/portfolio"),
    define: {
      "import.meta.env.VITE_GIT_COMMIT_HASH": JSON.stringify(getGitInfo()),
    },
    base: dynamicConfig.base,
    publicDir: dynamicConfig.publicDir,
    optimizeDeps: {},
    resolve: {
      mainFields: ["exports", "module"],
      tsconfigPaths: true,
      extensions: [".ts", ".mts", ".js", ".mjs", ".json", ".css"],
    },
    build: {
      minify: dynamicConfig.isProduction,
      chunkSizeWarningLimit: 600,
      cssMinify: dynamicConfig.isProduction,
      cssCodeSplit: dynamicConfig.isProduction,
      sourcemap: !dynamicConfig.isProduction,
      outDir: dynamicConfig.outDir,
      assetsDir: "./assets",
      license: true,
      manifest: true,
      emptyOutDir: true,
      copyPublicDir: true,
      terserOptions: {
        compress: {
          ecma: 2025,
          builtins_ecma: 2025,
          dead_code: true,
          drop_console: dynamicConfig.isProduction,
          drop_debugger: dynamicConfig.isProduction,
          unused: true,
        },
        ecma: 2025,
        format: {
          ecma: 2025,
          braces: true,
          comments: "all",
          indent_level: 2,
          indent_start: 0,
          max_line_len: 120,
          quote_keys: true,
          quote_style: 2,
          semicolons: true,
          wrap_func_args: true,
          webkit: true,
        }
      },
      rolldownOptions: {
        tsconfig: path.resolve(process.cwd(), "tsconfig.json"),
        devtools: {},
        experimental: {
          // viteMode: true,
        },
        logLevel: "debug",
        output: {
          assetFileNames: (chunkInfo: PreRenderedAsset) => {
            if (chunkInfo.names.at(0)?.endsWith("css") ?? false) {
              return `@fnc314/site.portfolio-[hash].[ext]`;
            }
            return `${chunkInfo.names.at(0)!.replaceAll(/\..*/g, "-[hash].[ext]")}`;
          },
          codeSplitting: true,
          comments: !dynamicConfig.isProduction,
          dir: dynamicConfig.outDir,
          entryFileNames: `@fnc314/site.portfolio-[hash].js`,
          esModule: true,
          format: "esm",
          minify: !dynamicConfig.isProduction,
          // preserveModules: true,
          // preserveModulesRoot: "node_modules/.pnpm/",
          strict: true,
        },
        platform: "browser",
        transform: {
          typescript: {
            allowNamespaces: true,
            declaration: {
              sourcemap: !dynamicConfig.isProduction,
            },
            rewriteImportExtensions: "remove",
          }
        },
        treeshake: dynamicConfig.isProduction,
      },
      reportCompressedSize: true,
      // watch: {
      //   clearScreen: true,
      //   buildDelay: 250,
      // }
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
          // icons: (manifest.icons || []).map((icon) => ({
          //   ...icon,
          //   src: `${dynamicConfig.pwa.manifest.scope}${icon.src}`,
          // })),
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

    \`process.cwd()\` - ${process.cwd()}

    `.trim()
  );

  return userConfig;
});