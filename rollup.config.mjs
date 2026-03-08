import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { copy } from "@web/rollup-plugin-copy";
import { rollupPluginHTML } from "@web/rollup-plugin-html";
import fs from "node:fs";
import progress from "rollup-plugin-progress";
import summary from "rollup-plugin-summary";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

const isDev = process.env.NODE_ENV === "development";

/**
 * @type RollupOptions
 * @typedef RollupOptions
 * @satisfies RollupOptions
 */
export default {
  logLevel: "debug",
  treeshake: true,
  // input: {
  //   index: "./src/index.js"
  // },
  output: {
    dir: "./website",
    format: "es",
    name: "com.fnc314.website",
    sourcemap: false,
    plugins: [

    ]
  },
  plugins: [
    rollupPluginHTML({
      input: "index.html",
      rootDir: "./src",
      bundleCss: true,
      minifyCss: false,
      minify: false,
      extractAssets: true,
      flattenOutput: false,
      absoluteBaseUrl: isDev ? "http://localhost:8000" : "https://fnc314.com",
      transformAsset: [
        (content, filePath) => {
          if (filePath.endsWith("manifest.json") && isDev) {
            return fs.readFileSync("./assets/manifest.dev.json", { encoding: "utf-8" });
          }
          return content;
        }
      ],
      transformHtml: [
        (html, args) => html.replace(
          "<head>",
          `<head><link rel="manifest" href="./assets/${isDev ? "manifest.dev.json" : "manifest.json"}" />`
        )
      ]
    }),
    copy({
      patterns: ["assets/**/*.{jpg,svg,png}"], rootDir: "./",
    }),
    copy({
      patterns: ["files/**/*.pdf"], rootDir: "./assets",
    }),
    copy({
      patterns: [isDev ? "assets/manifest.dev.json" : "assets/manifest.json"], rootDir: "./",
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
        "./src/partials/**/*.json",
      ]
    }),
    image({
      include: [
        "./assets/images/*.jpg",
        "./assets/icons/*.svg",
      ]
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
    resolve(),
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
  ].filter(Boolean),
};