import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
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

export default {
  logLevel: "debug",
  // input: {
  //   index: "./src/index.js",
  // },
  output: {
    dir: "./website",
    format: "es",
    name: "com.fnc314.website",
    sourcemap: isDev,
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      sourceMap: false,
      declarationMap: false,
      declaration: false,
      declarationMap: false,
    }),
    rollupPluginHTML({
      input: [
        "index.html",
      ],
      rootDir: "./src",
      minifyCss: false,
      minify: false,
      extractAssets: true,
      flattenOutput: false,
      absoluteBaseUrl: "https://fnc314.com"
    }),
    resolve(),
    copy({
      patterns: [ "assets/**/*.{svg,jpg}" ], rootDir: "./",
    }),
    copy({
      patterns: [ "files/**/*.pdf" ], rootDir: "./assets",
    }),
    json({
      compact: true,
      exclude: [
        "./assets/**/*.json",
        "./src/theme/**.json",
      ],
      include: [
        "./dist/**/**/*.json",
        "./src/partials/**/*.json",
      ]
    }),
    typescriptPaths({
      tsConfigPath: "./tsconfig.json",
    }),
    image({
      include: [
        "./assets/images/*.jpg",
        "./assets/icons/*.svg",
      ]
    }),
    commonjs(),
    !isDev && terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    summary(),
    progress({
      clearLine: false,
    }),
  ].filter(Boolean),
};