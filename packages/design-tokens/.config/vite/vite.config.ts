import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    root: `${process.cwd()}/packages/design-tokens`,
    publicDir: `${process.cwd()}/packages/design-tokens/assets`,
    build: {
      lib: {
        entry: `${process.cwd()}/packages/design-tokens/index.ts`,
        name: "@fnc314/packages.design-tokens",
        fileName: "@fnc314.packages.design-tokens",
        formats: ["es"],
        cssFileName: "@fnc314.packages.design-tokens",
      },
      rollupOptions: {
        external: [],
        tsconfig: `${process.cwd()}/packages/design-tokens/tsconfig.json`,
      },
      outDir: `${process.cwd()}/packages/design-tokens/dist`,
      emptyOutDir: true,
      copyPublicDir: true,
      minify: mode == "production",
    },
    plugins: [
      dts({
        // bundleTypes: true,
        tsconfigPath: `${process.cwd()}/packages/design-tokens/tsconfig.json`,
        entryRoot: `${process.cwd()}/packages/design-tokens/scripts`,
        root: `${process.cwd()}/packages/design-tokens`,
        outDirs: `${process.cwd()}/packages/design-tokens/dist/types`,
      })
    ]
  };
});