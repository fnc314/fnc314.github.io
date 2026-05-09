import {
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

console.error(`Current is ${process.cwd()}`)
export default defineConfig({
  preset: minimal2023Preset,
  headLinkOptions: {
    preset: "2023",
    includeId: true,
  },
  images: [
    "assets/icons/icon.svg"
  ],
  logLevel: "info",
  // overrideAssets: false,
});