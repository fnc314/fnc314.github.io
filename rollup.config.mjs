import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { copy } from "@web/rollup-plugin-copy";
import { rollupPluginHTML } from "@web/rollup-plugin-html";
import process from "node:process";
import postcssLit from "postcss-lit";
import { defineConfig } from "rollup";
import buildStatistics from "rollup-plugin-build-statistics";
import clear from "rollup-plugin-clear";
import gitInfo from "rollup-plugin-git-info";
import postcss from "rollup-plugin-postcss";
import progress from "rollup-plugin-progress";
import summary from "rollup-plugin-summary";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import versionInjector from "rollup-plugin-version-injector";

const isDev = process.env.NODE_ENV === "development";
const manifestJson = isDev ? "manifest.dev.json" : "manifest.json";
const { rollupPostCSSLit } = postcssLit;

export default defineConfig({
  logLevel: "debug",
  treeshake: true,
  input: "src/index.html", // Correctly specify the main HTML file as the input
  output: {
    dir: "./website",
    format: "es",
    name: "com.fnc314.website",
    sourcemap: isDev,
    interop: "auto",
    sourcemapDebugIds: isDev,
    strict: true,
    esModule: true,
    exports: "auto",
  },
  plugins: [
    clear({
      targets: ["./website"],
      watch: isDev,
    }),
    rollupPostCSSLit({
      globInclude: [
        "./src/components/**/*.ts",
        "./src/partials/**/*.ts",
      ],
      globExclude: ["./node_modules/**"]
    }),
    postcss({
      sourceMap: isDev,
      config: {
        path: "./postcss.config.mjs",
        ctx: {},
      },
      include: [
        "**/*.css"
      ],
      // Ensure we don't try to process TS files here
      exclude: ["**/*.ts"]
    }),

    copy({
      exclude: [],
      patterns: ["material-symbols-{outlined,sharp}.woff2"],
      rootDir: "./node_modules/material-symbols",
    }),
    versionInjector({
      injectInComments: false,
      injectInTags: {
        fileRegexp: /\.(js|ts|html|css)$/,
        tagId: "VI",
        dateFormat: "yyyy-mm-dd @ HH:MM:ss TT",
      },
      packageJson: "./package.json",
      logger: console,
      logLevel: isDev ? "log" : "error",
      exclude: [],
    }),
    gitInfo.default({
      abbrev: 10,
    }),
    rollupPluginHTML({
      input: "index.html",
      rootDir: "./src",
      bundleCss: true,
      minifyCss: !isDev,
      minify: !isDev,
      extractAssets: true,
      flattenOutput: false,
      transformHtml: [
        (html) =>
          html.replace(
            "<head>",
            `<head>
            <meta charset="utf-8" />
            <link rel="manifest" href="./assets/${manifestJson}" />
          `,
          ),
      ],
      absoluteBaseUrl: isDev ? "http://localhost:8000" : "https://www.fnc314.com",
      strictCSPInlineScripts: !isDev,
    }),
    copy({
      exclude: [],
      patterns: [
        `assets/${manifestJson}`,
        "assets/icons/icon.svg",
        "assets/icons/brand/**/*.svg",
        "assets/icons/components/**/*.{png,svg}",
        "assets/icons/maskable/*.{png,svg}",
        "assets/icons/shortcuts/**/icon-*-512.{svg,png}",
        "assets/images/themes/**/*.{jpg,png}",
      ],
      rootDir: "./src",
    }),
    copy({
      exclude: [],
      patterns: ["files/**/*.pdf"],
      rootDir: "./src/assets",
    }),
    json({
      compact: !isDev,
      preferConst: true,
      namedExports: true,
      includeArbitraryNames: true,
      exclude: ["./src/assets/**/*.json"],
      include: ["./src/data/*.json", "./src/theme/**/*.json"],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        sourceMap: isDev,
        declaration: isDev,
        declarationMap: isDev,
        declarationDir: isDev ? "./website" : undefined,
      },
    }),
    typescriptPaths({
      tsConfigPath: "./tsconfig.json",
    }),
    resolve({
      rootDir: "./src",
      browser: true,
    }),
    commonjs({
      sourceMap: isDev,
    }),
    !isDev &&
      terser({
        ecma: 2020,
        module: true,
        mangle: true,
      }),
    summary({
      showBrotliSize: true,
      showGzippedSize: true,
      showMinifiedSize: true,
    }),
    buildStatistics({
      projectName: "fnc314.com",
    }),
    progress({
      clearLine: true,
    }),
    isDev &&
      copy({
        exclude: [],
        patterns: [".well-known/appspecific/com.chrome.devtools.json"],
        rootDir: "./",
      }),
  ],
});
