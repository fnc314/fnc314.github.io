import dts from "unplugin-dts/vite";
import { type UserConfigFnObject, defineConfig } from "vite";

export function bulidConfig(dirName: string): UserConfigFnObject {
  return defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    return {
      root: `${process.cwd()}/packages/${dirName}`,
      publicDir: `${process.cwd()}/packages/${dirName}/assets`,
      build: {
        lib: {
          entry: `${process.cwd()}/packages/${dirName}/index.ts`,
          name: `@fnc314/packages/${dirName}`,
          fileName: `@fnc314.packages.${dirName}`,
          cssFileName: `@fnc314.packages.${dirName}`,
          formats: ["es"],
        },
        rollupOptions: {
          external: [],
          tsconfig: `${process.cwd()}/packages/${dirName}/tsconfig.json`,
        },
        outDir: `${process.cwd()}/packages/${dirName}/dist`,
        emptyOutDir: true,
        copyPublicDir: true,
        minify: mode === "production",
      },
      plugins: [
        dts({
          // bundleTypes: true,
          tsconfigPath: `${process.cwd()}/packages/${dirName}/tsconfig.json`,
          entryRoot: `${process.cwd()}/packages/${dirName}/scripts`,
          root: `${process.cwd()}/packages/${dirName}`,
          outDirs: `${process.cwd()}/packages/${dirName}/dist/types`,
        })
      ]
    };
  });
}