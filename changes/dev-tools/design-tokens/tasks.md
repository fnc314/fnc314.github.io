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
-   [x] Convert `src/stylesheets/spacing.css` into Style Dictionary compatible JSON (`design-tokens/src/spacing.json`).
-   [x] Convert `src/stylesheets/breakpoints.css` into Style Dictionary compatible JSON (`design-tokens/src/breakpoints.json`).
-   [x] Extract typeface, typescale, shape, and icon size declarations into Style Dictionary compatible JSON files.
- [x] **Generate and expose TypeScript definitions (`.d.ts`) for design tokens from `@design-tokens/src/`.**
- [x] Update `src/styles/breakpoints.ts` to consume generated tokens/types.
- [x] Modify `src/index.css` to `@import` the single generated CSS variables file from `design-tokens/dist/css/_variables.css`.
- [x] Update `src/env.d.ts` to declare modules for the new design token paths if necessary.
-   [ ] Update `src/services/theme/theme-service.ts` and `src/types/theme/theme.ts` to reference theme JSONs directly from the `design-tokens` package.
-   [ ] Review and update relevant Lit components (`src/components/**/*.ts`) to use the new CSS custom properties.

### Phase 3: Stylelint Enforcement

-   [x] Install `stylelint-value-no-udl` or `stylelint-use-var` plugin.
-   [x] Update `stylelint.config.ts` to enforce usage of design tokens.
-   [x] Create `changes/dev-tools/design-tokens/follow_ups.md`.
-   [x] Create `design-tokens/.mise/tasks/dev-ex/design-tokens/lint.zsh` to run stylelint checks.

**Current Progress: ~77% Complete**