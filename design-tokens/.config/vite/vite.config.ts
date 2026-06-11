import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    root: `${process.cwd()}/design-tokens`,
    publicDir: `${process.cwd()}/design-tokens/assets`,
    build: {
      lib: {
        entry: `${process.cwd()}/design-tokens/scripts/index.ts`,
        name: "@fnc314/design-tokens",
        fileName: "@fnc314.design-tokens",
        formats: ["es"],
      },
      rollupOptions: {
        external: [],
        tsconfig: `${process.cwd()}/design-tokens/tsconfig.json`,
      },
      outDir: `${process.cwd()}/design-tokens/dist`,
      emptyOutDir: false,
      copyPublicDir: true,
      minify: false,
    },
    plugins: [
      dts({
        // bundleTypes: true,
        tsconfigPath: `${process.cwd()}/design-tokens/tsconfig.json`,
        entryRoot: `${process.cwd()}/design-tokens/scripts`,
        root: `${process.cwd()}/design-tokens`,
        outDirs: `${process.cwd()}/design-tokens/dist/types`,
      })
    ]
  };
});