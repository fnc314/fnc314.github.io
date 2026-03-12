import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { copy } from "@web/rollup-plugin-copy";
import { rollupPluginHTML } from "@web/rollup-plugin-html";
import progress from "rollup-plugin-progress";
import summary from "rollup-plugin-summary";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

const isDev = process.env.NODE_ENV === "development";
const manifestJson = isDev ? "manifest.dev.json" : "manifest.json";

/**
 * @type RollupOptions
 * @type @import("rollup").RollupOptions
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
      patterns: ["assets/**/*.{jpg,svg,png}"],
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
    progress({
      clearLine: false,
    }),
    isDev && copy({
      patterns: [".well-known/appspecific/com.chrome.devtools.json"],
      rootDir: "./",
    }),
  ].filter(Boolean),
};
