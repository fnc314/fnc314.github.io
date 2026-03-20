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
    sourcemap: false,
    interop: "auto",
  },
  plugins: [
    clear({
      targets: ["./website"],
      watch: isDev,
    }),
    // url({
    //   include: [ "**/*.woff2" ],
    //   sourceDir: "node_modules/material-symbols",
    //   destDir: "./website/assets",
    //   fileName: "[name][hash][extname]",
    //   limit: 0,
    //   publicPath: "./website/assets"
    // }),
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
    // manifestJSON({
    //   input: `./assets/${manifestJson}`,
    //   minify: !isDev,
    //   output: `./assets/${manifestJson}`,
    //   manifest: {
    //     name: "fnc314.com",
    //     short_name: "fnc314.com",
    //   }
    // }),
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
            `<head><link rel="manifest" href="./assets/${manifestJson}" />`,
          ),
      ],
      absoluteBaseUrl: isDev ? "http://localhost:8000" : "https://fnc314.com",
    }),
    copy({
      patterns: ["assets/images/themes/**/*.{jpg,png}"],
      rootDir: "./",
    }),
    copy({
      patterns: ["assets/icons/**/**/*.svg"],
      rootDir: "./",
    }),
    copy({
      patterns: ["files/**/*.pdf"],
      rootDir: "./assets",
    }),
    copy({
      patterns: [isDev ? "assets/manifest.dev.json" : "assets/manifest.json"],
      rootDir: "./",
    }),
    json({
      compact: !isDev,
      preferConst: true,
      exclude: [
        "./assets/**/*.json",
        "./src/theme/**.json",
      ],
      include: [
        "./website/scripts/partials/**/*.json",
        "./src/**/**/*.json",
      ],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      sourceMap: false,
      declarationMap: false,
      declaration: false,
      declarationMap: false,
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
