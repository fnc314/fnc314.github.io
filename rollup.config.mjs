import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { copy } from "@web/rollup-plugin-copy";
import { rollupPluginHTML } from "@web/rollup-plugin-html";
import process from "node:process";
import buildStatistics from "rollup-plugin-build-statistics";
import clear from "rollup-plugin-clear";
import css from "rollup-plugin-css-only";
import gitInfo from "rollup-plugin-git-info";
import progress from "rollup-plugin-progress";
import summary from "rollup-plugin-summary";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import versionInjector from "rollup-plugin-version-injector";

const isDev = process.env.NODE_ENV === "development";
const manifestJson = isDev ? "manifest.dev.json" : "manifest.json";

/**
 * @type {import("rollup").RollupOptions}
 */
export default {
  logLevel: "debug",
  treeshake: true,
  input: "src/index.html", // Correctly specify the main HTML file as the input
  output: {
    dir: "./website",
    format: "es",
    name: "com.fnc314.website",
    sourcemap: isDev,
    interop: "auto",
  },
  plugins: /** @type {import('rollup').InputPluginOption[]} */ (
    [
      clear({
        targets: ["./website"],
        watch: isDev,
      }),
      versionInjector({
        injectInComments: false,
        injectInTags: {
          fileRegexp: /\.(js|html|css)$/,
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
      css({
        output: "assets/material-symbold.css",
        include: ["./node_modules/material-symbols/index.css"],
        name: "styles",
        fileName: "assets/material-symbold.css",
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
          (html, args) =>
            html.replace(
              "<head>",
              `<head>
              <meta charset="utf-8" />
              <link rel="manifest" href="./assets/${manifestJson}" />
              <link rel="stylesheet" href="./assets/material-symbols.css" />
            `,
            ),
        ],
        absoluteBaseUrl: isDev ? "http://localhost:8000" : "https://www.fnc314.com",
      }),
      copy({
        exclude: [],
        patterns: [
          `assets/${manifestJson}`,
          "assets/icons/icon.svg",
          "assets/icons/icon-maskable.svg",
          "assets/icons/brand/*.svg",
          "assets/icons/components/**/*.svg",
          "assets/icons/maskable/*.{png,svg}",
          "assets/icons/shortcuts/**/icon-filled-512.{svg,png}",
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
          // outDir: "./website",
        },
      }),
      typescriptPaths({
        tsConfigPath: "./tsconfig.json",
      }),
      resolve({
        rootDir: "./src",
        browser: true,
      }),
      commonjs(),
      !isDev &&
        terser({
          ecma: 2020,
          module: true,
          warnings: true,
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
        clearLine: false,
      }),
      isDev &&
        copy({
          exclude: [],
          patterns: [".well-known/appspecific/com.chrome.devtools.json"],
          rootDir: "./",
        }),
    ].filter(Boolean)
  ),
};
