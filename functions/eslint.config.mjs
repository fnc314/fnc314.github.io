import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig([
  {
    // Globally ignore build artifacts
    ignores: ["lib/**/*", "node_modules/**/*"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Use FlatCompat to handle legacy configs that aren't yet native Flat configs
  ...compat.extends(
    "google",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.builtin,
      },
    },
    rules: {
      quotes: ["error", "double"],
      "import/no-unresolved": 0,
      indent: ["error", 2],
    },
  },
]);