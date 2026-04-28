import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { copy } from "@web/rollup-plugin-copy";
import { rollupPluginHTML } from "@web/rollup-plugin-html";
import { createRequire } from "node:module";
import path from "node:path";
import process from "node:process";
import { defineConfig } from "rollup";
import buildStatistics from "rollup-plugin-build-statistics";
import clear from "rollup-plugin-clear";
import gitInfo from "rollup-plugin-git-info";
import postcss from "rollup-plugin-postcss";
import progress from "rollup-plugin-progress";
import summary from "rollup-plugin-summary";
import versionInjector from "rollup-plugin-version-injector";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const isDev = process.env.NODE_ENV === "development";
const manifestJson = isDev ? "manifest.dev.json" : "manifest.json";

export default defineConfig({
  logLevel: isDev ? "debug" : "silent",
  treeshake: true,
  input: "src/index.html", // Correctly specify the main HTML file as the input
  //external: Object.keys(pkg.dependencies),
  perf: true,
  output: {
    assetFileNames: "[name].[hash][extname]",
    chunkFileNames: "[name].[hash].js",
    compact: !isDev,
    dir: "./website",
    entryFileNames: "[name].[hash].js",
    esModule: true,
    exports: "auto",
    format: "module",
    interop: "auto",
    name: "@fnc314/com.fnc314.website",
    sourcemap: isDev,
    sourcemapDebugIds: isDev,
    strict: true,
  },
  plugins: [
    clear({
      targets: ["./website"],
      watch: isDev,
    }),
    !isDev &&
      strip({
        include: ["./src/**/*.ts"],
        functions: ["console.*", "assert.*"],
        debugger: true,
        sourceMap: false,
      }),
    postcss({
      sourceMap: isDev,
      config: {
        path: "./postcss.config.mjs",
        ctx: {},
      },
      include: ["**/*.css"],
      // Ensure we don't try to process TS files here
      exclude: ["**/*.ts"],
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
        "assets/icons/*.{png,svg,ico}",
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
    alias({
      entries: [{ find: /^@\/(.*)/, replacement: path.resolve(process.cwd(), "src") + "/$1" }],
    }),
    resolve({
      browser: true,
      extensions: [".ts", ".js", ".json"],
    }),
    json({
      compact: !isDev,
      preferConst: true,
      namedExports: true,
      exclude: ["**/assets/**/*.json"],
      include: ["**/data/*.json", "**/theme/**/*.json"],
    }),
    typescript({
      sourceMap: isDev,
      tsconfig: "./tsconfig.json",
      declaration: isDev,
      declarationDir: "./website/types",
      outputToFilesystem: true,
      compilerOptions: {
        noEmit: false, // Override tsconfig noEmit to allow rollup to receive code
        emitDeclarationOnly: false,
      },
    }),
    commonjs({
      sourceMap: isDev,
      exclude: ["**/src/**"], // Correctly match absolute paths to your source
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
      projectName: "@fnc314/com.fnc314.website",
    }),
    progress({
      clearLine: !isDev,
    }),
    isDev &&
      copy({
        exclude: [],
        patterns: [".well-known/appspecific/com.chrome.devtools.json"],
        rootDir: "./",
      }),
  ],
});
