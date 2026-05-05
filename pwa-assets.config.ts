import {
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  preset: minimal2023Preset,
  headLinkOptions: {
    preset: "2023",
  },
  images: [
    "src/assets/icons/icon.svg"
  ]
});