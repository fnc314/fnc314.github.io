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
import visualizer from "rollup-plugin-visualizer";
import InfoPlugin from "unplugin-info/rollup";

const require = createRequire(import.meta.url);
const pkg = require("../../package.json");


const isDev = process.env.NODE_ENV === "development";
const manifestJson = isDev ? "manifest.dev.json" : "manifest.json";
const outputDir = path.resolve(process.cwd(), `dist/rollup/${process.env.NODE_ENV ?? "development"}`)

export default defineConfig({
  logLevel: isDev ? "debug" : "silent",
  treeshake: true,
  input: "index.html", // Correctly specify the main HTML file as the input
  //external: Object.keys(pkg.dependencies),
  perf: true,
  output: {
    assetFileNames: "[name].[hash][extname]",
    chunkFileNames: "[name].[hash].js",
    compact: !isDev,
    dir: outputDir,
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
      targets: [outputDir],
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
    InfoPlugin({
      cloudflare: false,
      package: {
        dependencies: true,
        devDependencies: true,
        optionalDependencies: true,
        overrides: true,
      }
    }),
    gitInfo.default({
      abbrev: 10,
    }),
    rollupPluginHTML({
      input: "index.html",
      rootDir: process.cwd(),
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
                <link rel="manifest" href="./static/${manifestJson}" />
          `,
          )
      ],
      absoluteBaseUrl: isDev ? "http://localhost:8000" : "https://www.fnc314.com",
      strictCSPInlineScripts: !isDev,
    }),
    copy({
      exclude: [],
      patterns: [
        `${manifestJson}`,
        "icons/*.{png,svg,ico}",
        "icons/brand/**/*.svg",
        "icons/components/**/*.{png,svg}",
        "icons/maskable/*.{png,svg}",
        "icons/shortcuts/**/icon-*-512.{svg,png}",
        "images/themes/**/*.{jpg,png}",
      ],
      rootDir: "./static",
    }),
    copy({
      exclude: [],
      patterns: ["files/**/*.pdf"],
      rootDir: "./static",
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
      exclude: ["**/static/**/*.json"],
      include: ["**/data/*.json", "**/theme/**/*.json"],
    }),
    typescript({
      sourceMap: isDev,
      tsconfig: path.resolve(process.cwd(), "./tsconfig.json"),
      declaration: isDev,
      declarationDir: `${outputDir}/types`,
      outputToFilesystem: true,
      compilerOptions: {
        noEmit: false, // Override tsconfig noEmit to allow rollup to receive code
        emitDeclarationOnly: false,
        outDir: `${outputDir}/types`,
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
    isDev &&
      copy({
        exclude: [],
        patterns: [".well-known/appspecific/com.chrome.devtools.json"],
        rootDir: "./",
      }),
    isDev &&
      visualizer({
        title: "Rollup Bundle Visualizer",
        filename: `stats/rollup/visualizer/${new Date().toISOString()}.html`,
        sourcemap: true,
        template: "treemap-3d",
        gzipSize: true,
        brotliSize: true,
        projectRoot: ".",
      }),
    summary({
      showBrotliSize: true,
      showGzippedSize: true,
      showMinifiedSize: true,
    }),
    buildStatistics({
      projectName: "@fnc314/com.fnc314.website",
      // summaryLogFilename: `rollup/${process.env.NODE_ENV || "development"}/build/stats/summary/${new Date().toISOString()}`
      // summaryLogFilename: `rollup.${process.env.NODE_ENV || "development"}.build.stats.summary.${new Date().toISOString()}`
    }),
    progress({
      clearLine: !isDev,
    }),
  ],
});
