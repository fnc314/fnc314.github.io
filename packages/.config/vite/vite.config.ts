import minifyHTML from "@lit-labs/rollup-plugin-minify-html-literals";
import path from "node:path";
import process from "node:process";
import { bundleAnalyzerPlugin } from "rolldown/experimental";
import dts from "unplugin-dts/vite";
import Info from "unplugin-info/vite";
import { type LibraryFormats, type UserConfigFnPromise } from "vite";

async function readPackageJson(dirName: string): Promise<any & { peerDependecies: Record<string, string> }> {
  const dirPath: string = path.resolve(
    process.cwd(),
    `packages/${dirName}`
  );
  const jsonFile = await import(`${dirPath}/package.json`, { with: { type: 'json' } });
  return jsonFile.default;
}

export function buildConfig(dirName: string): UserConfigFnPromise {
  return async ({ command, mode, isSsrBuild, isPreview }) => {
    const pkjson = await readPackageJson(dirName);

    const config = {
      root: `${process.cwd()}/packages/${dirName}`,
      publicDir: `${process.cwd()}/packages/${dirName}/assets`,
      build: {
        lib: {
          entry: `${process.cwd()}/packages/${dirName}/src/index.ts`,
          name: `@fnc314.packages.${dirName}`,
          fileName: `@fnc314.packages.${dirName}`,
          cssFileName: `@fnc314.packages.${dirName}`,
          formats: ["es" as LibraryFormats],
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
            ...Object.keys(pkjson.peerDependencies || {}),
            /^lit($|\/)/,
            /^lit-element($|\/)/,
            /^lit-html($|\/)/,
            /^@lit($|\/)/,
            // /^@material\/web($|\/)/,
            // /^material-symbols($|\/)/,
          ],
          output: {
            assetFileNames: `@fnc314.packages.${dirName}.[ext]`,
            codeSplitting: {
              groups: Object.keys(pkjson.peerDependencies || {}).map((dep) => {
                const depGroupName = dep.replace("@fnc314/packages.", "");
                return {
                  name: depGroupName,
                  test: new RegExp(`/packages\.${depGroupName}/`)
                };
              })
            },
            comments: mode !== "production",
            dir: `${process.cwd()}/packages/${dirName}/dist`,
            entryFileNames: `@fnc314.packages.${dirName}.js`,
            esModule: true,
            minify: false,
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
              rewriteImportExtensions: true,
            }
          },
          treeshake: false,
          tsconfig: `${process.cwd()}/packages/${dirName}/tsconfig.json`,
        },
        outDir: `${process.cwd()}/packages/${dirName}/dist`,
        emptyOutDir: true,
        copyPublicDir: true,
        minify: false,
        cssMinify: false,
        cssCodeSplit: false,
        sourcemap: mode !== "production",
        platform: "browser",
        reportCompressedSize: true,
      },
      resolve: {
        preserveSymlinks: true,
        tsconfigPaths: true,
        extensions: [".ts", ".mts", ".js", ".mjs", ".json", ".css"],
        tsconfig: `${process.cwd()}/packages/${dirName}/tsconfig.json`,
        dedupe: [
          "@fnc314/packages.components",
          "@fnc314/packages.data",
          "@fnc314/packages.design-tokens",
          "@fnc314/packages.services",
          "@fnc314/packages.types",
          "lit",
          "lit-html",
          "lit-element",
          "@lit/reactive-element",
          "@material/web",
          "material-symbols",
        ]
      },
      plugins: [
        // postcssLit.rollupPostCSSLit({
        //   globInclude: path.resolve(
        //     process.cwd(),
        //     `packages/${dirName}`,
        //     "src/**/*.styles.ts",
        //   ),
        // }),
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
            // Breaks with dynamic svg insertion
            "**/code/repo/code-repo.ts",
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

    console.log(
      JSON.stringify(
        {
          dirName,
          pkjson,
          config
        },
        null,
        2
      )
    );

    return config;
  }
}