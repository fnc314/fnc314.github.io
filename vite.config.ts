import { defineConfig } from "vite";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => ({
  root: "website",
  base: "/",
  devtools: true,
  publicDir: "./../assets",
  clearScreen: false,
  build: {
    outDir: "website",
    assetsDir: "assets",
    cssMinify: true,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    forwardConsole: true,
  }
}));