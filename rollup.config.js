import image from '@rollup/plugin-image';
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import { copy } from "@web/rollup-plugin-copy";
import { rollupPluginHTML } from "@web/rollup-plugin-html";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

export default {
  output: {
    dir: "./website",
    format: "es",
    name: "com.fnc314.website",
    // file: "./website/index.js",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    rollupPluginHTML({
      input: "index.html",
      rootDir: "./src",
      minifyCss: false,
      minify: false,
      flattenOutput: false,
      absoluteBaseUrl: "https://fnc314.com"
    }),
    resolve(),
    copy({
      patterns: [ "**/*.{svg,jpg,json}" ], rootDir: "./assets",
    }),
    copy({
      patterns: [ "partials/**/*.json" ], rootDir: "./src",
    }),
    json({
      compact: true,
      exclude: [
        "./assets/**/*.json",
        "./src/theme/**.json",
      ],
      include: [
        "./src/**/*.json",
      ]
    }),
    typescriptPaths({
      tsConfigPath: "./tsconfig.json",
    }),
    image({
      include: [
        "./assets/images/*.jpg"
      ]
    }),
  ]
};