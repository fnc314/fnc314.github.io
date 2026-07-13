import {
    defineConfig,
    minimal2023Preset,
} from "@vite-pwa/assets-generator/config";
import path from "node:path";
import process from "node:process";

export default defineConfig({
  preset: minimal2023Preset,
  root: `${path.resolve(process.cwd())}/sites/portfolio`,
  headLinkOptions: {
    preset: "2023",
    includeId: true,
  },
  images: [
    path.resolve(
      process.cwd(),
      "static/icons/icon.svg"
    )
  ],
  logLevel: "info",
  manifestIconsEntry: true,
  // overrideAssets: false,
});