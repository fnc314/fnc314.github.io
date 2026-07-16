import minifyHTML from "@lit-labs/rollup-plugin-minify-html-literals";
import path from "node:path";
import process from "node:process";
import { bundleAnalyzerPlugin } from "rolldown/experimental";
import dts from "unplugin-dts/vite";
import Info from "unplugin-info/vite";
import { type UserConfigFnObject, defineConfig } from "vite";

export function buildConfig(dirName: string): UserConfigFnObject {
  return defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    return {
      root: `${process.cwd()}/packages/${dirName}`,
      publicDir: `${process.cwd()}/packages/${dirName}/assets`,
      build: {
        lib: {
          entry: `${process.cwd()}/packages/${dirName}/src/index.ts`,
          name: `@fnc314.packages.${dirName}`,
          fileName: `@fnc314.packages.${dirName}`,
          cssFileName: `@fnc314.packages.${dirName}`,
          formats: ["es"],
        },
        rolldownOptions: {
          plugins: [
            bundleAnalyzerPlugin({
              fileName: "bundle-analysis.md",
              format: "md",
            })
          ],
          checks: {
            circularDependency: true,
          },
          external: [
            /^lit($|\/)/,
            /^lit-element($|\/)/,
            /^lit-html($|\/)/,
            /^@lit($|\/)/,
            // /^@material\/web($|\/)/,
            // /^material-symbols($|\/)/,
          ],
          logLevel: "debug",
          output: {
            assetFileNames: `@fnc314.packages.${dirName}.[ext]`,
            codeSplitting: {
              groups: [
                {
                  name: "material",
                  test: /material/
                },
                {
                  name: "lit",
                  test: /lit/
                }
              ]
            },
            comments: mode !== "production",
            dir: `${process.cwd()}/packages/${dirName}/dist`,
            entryFileNames: `@fnc314.packages.${dirName}.js`,
            esModule: true,
            format: "esm",
            minify: mode === "production",
            // preserveModules: true,
            // preserveModulesRoot: "lib",
            strict: true,
          },
          transform: {
            typescript: {
                allowNamespaces: true,
                declaration: {
                  sourcemap: mode !== "production",
                },
                rewriteImportExtensions: "remove",
              }
          },
          treeshake: mode === "production",
          tsconfig: `${process.cwd()}/packages/${dirName}/tsconfig.json`,
        },
        outDir: `${process.cwd()}/packages/${dirName}/dist`,
        emptyOutDir: true,
        copyPublicDir: true,
        minify: mode === "production",
        cssMinify: mode === "production",
        cssCodeSplit: mode === "production",
        sourcemap: mode !== "production",
        platform: "browser",
        reportCompressedSize: true,
      },
      resolve: {
        tsconfigPaths: true,
        extensions: [".ts", ".mts", ".js", ".mjs", ".json", ".css"],
        tsconfig: `${process.cwd()}/packages/${dirName}/tsconfig.json`,
        dedupe: [
          "lit",
          "lit-html",
          "lit-element",
          "@lit/reactive-element",
          "@material/web",
          "material-symbols",
        ]
      },
      plugins: [
        minifyHTML({
          include: [
            path.resolve(
              process.cwd(),
              `packages/${dirName}`,
              "src/**/*.ts"
            )
          ],
          exclude: [
            // CSS nesting (&::part) crashes the plugin's CSS parser
            "**/ui-mode-toggle/ui-mode-toggle.styles.ts",
            // Ternary css`` interpolations confuse splitHTMLByPlaceholder
            "**/word/tag/word-tag.ts",
          ],
          failOnError: true,
          options: {
            shouldMinify: () => mode === "production"
          }
        }),
        dts({
          // bundleTypes: true,
          tsconfigPath: `${process.cwd()}/packages/${dirName}/tsconfig.json`,
          entryRoot: `${process.cwd()}/packages/${dirName}/src`,
          root: `${process.cwd()}/packages/${dirName}`,
          outDirs: `${process.cwd()}/packages/${dirName}/dist/types`,
          compilerOptions: {
            declarationMap: mode === "development"
          }
        }),
        Info({
          github: `https://github.com/fnc314/fnc314.github.io/tree/main/packages/${dirName}`,
          root: process.cwd(),
          cloudflare: false,
          package: {
            dependencies: true,
            devDependencies: true,
            optionalDependencies: true,
            overrides: true,
          },
          console: {
            environment: [
              "development",
            ],
          }
        }),
      ]
    };
  });
}