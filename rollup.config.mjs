import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { copy } from "@web/rollup-plugin-copy";
import { rollupPluginHTML } from "@web/rollup-plugin-html";
import buildStatistics from "rollup-plugin-build-statistics";
import clear from "rollup-plugin-clear";
import progress from "rollup-plugin-progress";
import summary from "rollup-plugin-summary";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import versionInjector from "rollup-plugin-version-injector";

const isDev = process.env.NODE_ENV === "development";
const manifestJson = isDev ? "manifest.dev.json" : "manifest.json";

/**
 * @type RollupOptions
 * @type {@import("rollup").RollupOptions}
 * @satisfies RollupOptions
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
  plugins: [
    clear({
      targets: ["./website"],
      watch: isDev,
    }),
    versionInjector({
      injectInComments: false,
      injectInTags: {
        dateFormat: "yyyy-mm-dd @ HH:MM:ss"
      },
      packageJson: "./package.json",
      logger: console,
      logLevel: isDev ? "log" : "error",
      exclude: [],
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
            `,
          ),
      ],
      absoluteBaseUrl: isDev ? "http://localhost:8000" : "https://www.fnc314.com",
    }),
    copy({
      patterns: [
        isDev ? "assets\/manifest.dev.json" : "assets\/manifest.json",
        "assets\/icons\/icon.svg",
        "assets\/icons\/icon-maskable.svg",
        "assets\/icons\/brand\/*.svg",
        "assets\/icons\/components\/**\/*.svg",
        "assets\/icons\/shortcuts\/**\/icon-filled-512.{svg,png}",
        "assets\/images\/themes\/**\/*.{jpg,png}",
      ],
      rootDir: "./src",
    }),
    copy({
      patterns: ["files\/**\/*.pdf"],
      rootDir: "./src/assets",
    }),
    json({
      compact: !isDev,
      preferConst: true,
      namedExports: true,
      includeArbitraryNames: true,
      exclude: [
        "./src/assets/**/*.json",
      ],
      include: [
        "./src/data/*.json",
        "./src/theme/**/*.json",
      ],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        sourceMap: isDev,
        declaration: isDev,
        declarationMap: isDev,
        outDir: "./website"
      },
    }),
    typescriptPaths({
      tsConfigPath: "./tsconfig.json",
    }),
    resolve({
      rootDir: "./src",
    }),
    commonjs(),
    !isDev && terser({
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
      projectName: "fnc314.com"
    }),
    progress({
      clearLine: false,
    }),
    isDev && copy({
      patterns: [".well-known/appspecific/com.chrome.devtools.json"],
      rootDir: "./",
    }),
  ].filter(Boolean),
};
