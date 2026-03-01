import image from '@rollup/plugin-image';
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import { copy } from "@web/rollup-plugin-copy";
import { rollupPluginHTML } from "@web/rollup-plugin-html";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

export default {
  input: "./src/index.html",
  output: { dir: "website" },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    rollupPluginHTML({
      input: "./src/index.html",
      minifyCss: true,
      minify: true,
      flattenOutput: false,
      absoluteBaseUrl: "https://fnc314.com"
    }),
    resolve(),
    copy({
      patterns: [
        //"./src/*.html",
        "./src/**/*.json",
      ],
      exclude: [
        "package.json",
        "package-lock.json",
        "tsconfig.json",
        ".prettierrc.json",
        "jsconfig.json",
        "./old",
        "./node_modules",
        "./website",
        "./src",
      ]
    }),
    json({
      compact: true,
    }),
    typescriptPaths(),
    image({
      include: [
        "./assets/images/*.jpg"
      ]
    }),
  ]
};