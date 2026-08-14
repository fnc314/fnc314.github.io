import Icons from '@iconify/unplugin/vite';
import minifyHTML from "@lit-labs/rollup-plugin-minify-html-literals";
import path from "node:path";
import process from "node:process";
import type { CodeSplittingGroup } from "rolldown";
import { bundleAnalyzerPlugin } from "rolldown/experimental";
import dts from "unplugin-dts/vite";
import Info from "unplugin-info/vite";
import { type LibraryFormats, type UserConfig, type UserConfigFnPromise } from "vite";

async function readPackageJson(dirName: string): Promise<any & { peerDependecies: Record<string, string> }> {
  const dirPath: string = path.resolve(process.cwd(), `packages/${dirName}`);
  const jsonFile = await import(`${dirPath}/package.json`, { with: { type: "json" } });
  return jsonFile.default;
}

export function buildConfig(dirName: string): UserConfigFnPromise {
  return async ({ command, mode, isSsrBuild, isPreview }) => {
    const pkjson = await readPackageJson(dirName);

    const codeSplittingGroups: CodeSplittingGroup[] = Object.keys(
      pkjson.peerDependencies || {}
    )
      .map((dep) => {
        const depGroupName = dep.replace("@fnc314/packages.", "");
        return {
          name: depGroupName,
          test: (moduleId: string) => moduleId.includes(`packages.${depGroupName}`),
        };
      })
      .concat(
        {
          name: "material",
          test: (moduleId: string) => moduleId.includes("material"),
        },
        {
          name: "lit",
          test: (moduleId: string) => moduleId.includes("lit"),
        },
      );

    const config: UserConfig = {
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
            }),
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
            name: `@fnc314/packages.${dirName}`,
            assetFileNames: `@fnc314.packages.${dirName}.[ext]`,
            codeSplitting: {
              groups: codeSplittingGroups,
            },
            chunkFileNames: ({
              name,
              isEntry,
              isDynamicEntry,
              facadeModuleId,
              moduleIds,
              exports,
            }: {
              name: string;
              isEntry: boolean;
              isDynamicEntry: boolean;
              facadeModuleId?: string;
              moduleIds: Array<string>;
              exports: Array<string>;
            }) => {
              console.log(
                JSON.stringify(
                  {
                    name,
                    isEntry,
                    isDynamicEntry,
                    facadeModuleId,
                    moduleIds,
                    exports,
                  },
                  null,
                  2
                )
              );
              return `deps/[name]-[hash].js`;
            },
            comments: mode !== "production",
            dir: `${process.cwd()}/packages/${dirName}/dist`,
            entryFileNames: `@fnc314.packages.${dirName}.js`,
            esModule: true,
            minify: false,
            strict: true,
          },
          transform: {
            assumptions: {
              // ignoreFunctionLength: true,
              noDocumentAll: true,
              // objectRestNoSymbols: true,
              pureGetters: true,
              setPublicClassFields: true,
            },
            typescript: {
              allowNamespaces: true,
              declaration: {
                sourcemap: mode !== "production",
              },
              rewriteImportExtensions: true,
              onlyRemoveTypeImports: true,
              removeClassFieldsWithoutInitializer: true,
            },
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
          "@lit/context",
          "@lit/reactive-element",
          "@material/web",
          "material-symbols",
        ],
      },
      plugins: [
        // postcssLit.rollupPostCSSLit({
        //   globInclude: path.resolve(
        //     process.cwd(),
        //     `packages/${dirName}`,
        //     "src/**/*.styles.ts",
        //   ),
        // }),
        Icons({
          compiler: "raw",
          css: "embed",
          allowAPI: true,
          cssHash: {
            length: 15,
            throwOnCollision: true,
          },
          mode: "svg",
          namespace: "iconify",
        }),
        minifyHTML({
          include: [path.resolve(process.cwd(), `packages/${dirName}`, "src/**/*.ts")],
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
            shouldMinify: () => mode === "production",
          },
        }),
        dts({
          // bundleTypes: true,
          tsconfigPath: `${process.cwd()}/packages/${dirName}/tsconfig.json`,
          entryRoot: `${process.cwd()}/packages/${dirName}/src`,
          root: `${process.cwd()}/packages/${dirName}`,
          outDirs: `${process.cwd()}/packages/${dirName}/dist/types`,
          compilerOptions: {
            declarationMap: mode === "development",
          },
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
            environment: ["development"],
          },
        }),
      ],
    };

    console.log(
      JSON.stringify(
        {
          dirName,
          pkjson,
          config,
        },
        null,
        2,
      ),
    );

    return config;
  };
}
