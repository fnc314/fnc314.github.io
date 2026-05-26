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
import { VitePWA } from "vite-plugin-pwa";
import { vitePluginVersionMark } from "vite-plugin-version-mark";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const manifest = require("./static/manifest.json");
const packageJson = require("./package.json");

const getGitInfo = () => {
  try {
    return execSync("git rev-parse --short=10 HEAD").toString().trim();
  } catch {
    return "";
  }
};

const mode = process.env.NODE_ENV || "development";
const isProduction = mode === "production";
// In Vite+, the command is usually "build" during check/fix operations
const isBuild =
  process.argv.includes("build") || process.argv.includes("check") || process.argv.includes("fix");

export default defineConfig({
  html: {},
  json: {},
  root: path.resolve(__dirname),
  define: {
    "import.meta.env.VITE_GIT_COMMIT_HASH": JSON.stringify(getGitInfo()),
  },
  base: "/",
  publicDir: path.resolve(__dirname, "static"),
  assetsInclude: [
    path.resolve(__dirname, "static/files/pdfs/*.pdf"),
    path.resolve(__dirname, "static/images/**/*.jpg"),
    path.resolve(__dirname, "static/icons/**/*.{ico,svg,png}"),
  ],
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
    outDir: path.resolve(__dirname, `dist/vite/${mode}`),
    assetsDir: "./assets",
    license: true,
    manifest: true,
    emptyOutDir: true,
    copyPublicDir: true,
    rolldownOptions: {
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
    },
  },
  css: {
    devSourcemap: !isProduction,
    postcss: path.resolve(__dirname, "postcss.config.mjs"),
  },
  envDir: path.resolve(__dirname, ".env"),
  appType: "spa",
  logLevel: "info",
  // lint: {
  //   plugins: ["oxc", "typescript"],
  //   categories: {
  //     correctness: "warn",
  //   },
  //   options: {
  //     typeAware: true,
  //     typeCheck: true,
  //   },
  //   env: {
  //     builtin: true,
  //     browser: true,
  //   },
  //   ignorePatterns: [
  //     "jsconfig.json",
  //     "manifest.json",
  //     "website/",
  //     "docs/*",
  //     "functions/.eslintrc.js",
  //   ],
  //   rules: {
  //     "constructor-super": "error",
  //     "for-direction": "error",
  //     "getter-return": "error",
  //     "no-async-promise-executor": "error",
  //     "no-case-declarations": "error",
  //     "no-class-assign": "error",
  //     "no-compare-neg-zero": "error",
  //     "no-cond-assign": "error",
  //     "no-const-assign": "error",
  //     "no-constant-binary-expression": "error",
  //     "no-constant-condition": "error",
  //     "no-control-regex": "error",
  //     "no-debugger": "error",
  //     "no-delete-var": "error",
  //     "no-dupe-class-members": "error",
  //     "no-dupe-else-if": "error",
  //     "no-dupe-keys": "error",
  //     "no-duplicate-case": "error",
  //     "no-empty": "error",
  //     "no-empty-character-class": "error",
  //     "no-empty-pattern": "error",
  //     "no-empty-static-block": "error",
  //     "no-ex-assign": "error",
  //     "no-extra-boolean-cast": "error",
  //     "no-fallthrough": "error",
  //     "no-func-assign": "error",
  //     "no-global-assign": "error",
  //     "no-import-assign": "error",
  //     "no-invalid-regexp": "error",
  //     "no-irregular-whitespace": "error",
  //     "no-loss-of-precision": "error",
  //     "no-misleading-character-class": "error",
  //     "no-new-native-nonconstructor": "error",
  //     "no-nonoctal-decimal-escape": "error",
  //     "no-obj-calls": "error",
  //     "no-prototype-builtins": "error",
  //     "no-redeclare": "error",
  //     "no-regex-spaces": "error",
  //     "no-self-assign": "error",
  //     "no-setter-return": "error",
  //     "no-shadow-restricted-names": "error",
  //     "no-sparse-arrays": "error",
  //     "no-this-before-super": "error",
  //     "no-unassigned-vars": "error",
  //     "no-undef": "error",
  //     "no-unexpected-multiline": "error",
  //     "no-unreachable": "error",
  //     "no-unsafe-finally": "error",
  //     "no-unsafe-negation": "error",
  //     "no-unsafe-optional-chaining": "error",
  //     "no-unused-labels": "error",
  //     "no-unused-private-class-members": "error",
  //     "no-unused-vars": "error",
  //     "no-useless-assignment": "error",
  //     "no-useless-backreference": "error",
  //     "no-useless-catch": "error",
  //     "no-useless-escape": "error",
  //     "no-with": "error",
  //     "preserve-caught-error": "error",
  //     "require-yield": "error",
  //     "use-isnan": "error",
  //     "valid-typeof": "error",
  //   },
  //   overrides: [
  //     {
  //       files: ["./src/**/*.ts"],
  //       rules: {
  //         "no-array-constructor": "error",
  //         "no-unused-expressions": "error",
  //         "no-throw-literal": "off",
  //         "prefer-promise-reject-errors": "off",
  //         "require-await": "off",
  //         "no-empty-function": "error",
  //         "wc/no-constructor-attributes": "error",
  //         "wc/no-invalid-element-name": "error",
  //         "wc/no-self-class": "error",
  //         "lit/attribute-value-entities": "error",
  //         "lit/binding-positions": "error",
  //         "lit/no-duplicate-template-bindings": "error",
  //         "lit/no-invalid-html": "error",
  //         "lit/no-legacy-template-syntax": "error",
  //         "lit/no-property-change-update": "error",
  //         "tsdoc/syntax": "warn",
  //         "typescript/ban-ts-comment": "error",
  //         "typescript/no-duplicate-enum-values": "error",
  //         "typescript/no-empty-object-type": "error",
  //         "typescript/no-explicit-any": "error",
  //         "typescript/no-extra-non-null-assertion": "error",
  //         "typescript/no-misused-new": "error",
  //         "typescript/no-namespace": "error",
  //         "typescript/no-non-null-asserted-optional-chain": "error",
  //         "typescript/no-require-imports": "error",
  //         "typescript/no-this-alias": "error",
  //         "typescript/no-unnecessary-type-constraint": "error",
  //         "typescript/no-unsafe-declaration-merging": "error",
  //         "typescript/no-unsafe-function-type": "error",
  //         "typescript/no-wrapper-object-types": "error",
  //         "typescript/prefer-as-const": "error",
  //         "typescript/prefer-namespace-keyword": "error",
  //         "typescript/triple-slash-reference": "error",
  //         "typescript/await-thenable": "error",
  //         "typescript/no-array-delete": "error",
  //         "typescript/no-base-to-string": "error",
  //         "typescript/no-duplicate-type-constituents": "error",
  //         "typescript/no-floating-promises": "error",
  //         "typescript/no-for-in-array": "error",
  //         "typescript/no-implied-eval": "error",
  //         "typescript/no-misused-promises": "error",
  //         "typescript/no-redundant-type-constituents": "error",
  //         "typescript/no-unnecessary-type-assertion": "error",
  //         "typescript/no-unsafe-argument": "error",
  //         "typescript/no-unsafe-assignment": "error",
  //         "typescript/no-unsafe-call": "error",
  //         "typescript/no-unsafe-enum-comparison": "error",
  //         "typescript/no-unsafe-member-access": "error",
  //         "typescript/no-unsafe-return": "error",
  //         "typescript/no-unsafe-unary-minus": "error",
  //         "typescript/only-throw-error": "error",
  //         "typescript/prefer-promise-reject-errors": "error",
  //         "typescript/require-await": "error",
  //         "typescript/restrict-plus-operands": "error",
  //         "typescript/restrict-template-expressions": "error",
  //         "typescript/unbound-method": "error",
  //         "typescript/adjacent-overload-signatures": "error",
  //         "typescript/array-type": "error",
  //         "typescript/ban-tslint-comment": "error",
  //         "typescript/class-literal-property-style": "error",
  //         "typescript/consistent-generic-constructors": "error",
  //         "typescript/consistent-indexed-object-style": "error",
  //         "typescript/consistent-type-assertions": "error",
  //         "typescript/consistent-type-definitions": "error",
  //         "typescript/no-confusing-non-null-assertion": "error",
  //         "typescript/no-inferrable-types": "error",
  //         "typescript/prefer-for-of": "error",
  //         "typescript/prefer-function-type": "error",
  //         "typescript/dot-notation": "off",
  //         "typescript/non-nullable-type-assertion-style": "error",
  //         "typescript/prefer-find": "error",
  //         "typescript/prefer-includes": "error",
  //         "typescript/prefer-nullish-coalescing": "error",
  //         "typescript/prefer-optional-chain": "error",
  //         "typescript/prefer-regexp-exec": "error",
  //         "typescript/prefer-string-starts-ends-with": "error",
  //       },
  //       jsPlugins: ["eslint-plugin-wc", "eslint-plugin-lit", "eslint-plugin-tsdoc"],
  //     },
  //   ],
  // },
  plugins: [
    ...(!isBuild
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
        ...manifest,
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
      outputFile: (version: string) => ({
        path: `vite-plugin-version-mark/version.json`,
        content: JSON.stringify({ version }, null, 2),
      }),
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
      projectRoot: path.resolve(__dirname, "src"),
    }),
  ],
});