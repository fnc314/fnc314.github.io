### Phase 1: Design Tokens Package Setup

-   [x] Create `design-tokens/` directory at the project root.
-   [x] Create `design-tokens/package.json` with the specified content.
-   [x] Add `style-dictionary` to root `package.json` `devDependencies` using `pnpm add -D --save-catalog-name=devDependencies style-dictionary`.
-   [x] Create `.config/style-dictionary/` directory.
-   [x] Create `.config/style-dictionary/config.mjs` with initial configuration for CSS variables and DTCG JSON output.
-   [x] Create `design-tokens/mise.toml` for `generate` task.
-   [x] Create `design-tokens/.mise/tasks/generate.zsh` script.

### Phase 2: Migration of Existing Tokens and Consumption

-   [x] Move `src/theme/**/*.material3-expressive-theme.json` to `design-tokens/src/themes/`.
-   [ ] Create `design-tokens/src/themes/images/` and move `static/images/themes/*` into it.
-   [ ] Update Style Dictionary configuration (`.config/style-dictionary/config.mjs`) to include a custom action or platform to copy images from `design-tokens/src/themes/images/` to `design-tokens/dist/images/`.
-   [x] Convert `src/stylesheets/spacing.css` into Style Dictionary compatible JSON (`design-tokens/src/spacing.json`). Delete original file.
-   [x] Convert `src/stylesheets/breakpoints.css` into Style Dictionary compatible JSON (`design-tokens/src/breakpoints.json`). Delete original file.
-   [x] Extract typeface, typescale, shape, and icon size declarations from `src/stylesheets/material-overrides.css` and `src/styles/material-styles.ts` into Style Dictionary compatible JSON files (e.g., `design-tokens/src/typography.json`, `design-tokens/src/shapes.json`, `design-tokens/src/icons.json`). Delete original `src/stylesheets/material-overrides.css` and update `src/styles/material-styles.ts` to consume generated tokens.
-   [ ] Update `src/styles/breakpoints.ts` to consume generated tokens/types.
-   [ ] Modify `src/index.css` to `@import` the single generated CSS variables file from `design-tokens/dist/css/_variables.css`.
-   [ ] Update `src/env.d.ts` to declare modules for the new design token paths if necessary.
-   [ ] Update `src/services/theme/theme-service.ts` and `src/types/theme/theme.ts` to reference theme JSONs directly from the `design-tokens` package.
-   [ ] Review and update relevant Lit components (`src/components/**/*.ts`) to use the new CSS custom properties for spacing, colors, and typography.

### Phase 3: Stylelint Enforcement

-   [ ] Install `stylelint-value-no-udl` or `stylelint-use-var` plugin.
-   [ ] Update `stylelint.config.ts` to enforce usage of `var(--md-sys-color-...)`, `var(--spacing-...)`, `var(--md-typescale-...)`, etc., for relevant CSS properties, leveraging `postcss-lit` for TypeScript files.
-   [ ] Create `changes/dev-tools/design-tokens/follow_ups.md` to document non-compliant existing values.
-   [ ] Create `design-tokens/.mise/tasks/dev-ex/design-tokens/lint.zsh` to run stylelint checks.