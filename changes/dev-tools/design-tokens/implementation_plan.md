# Change Plan - Dev Tools - Design Tokens Package

## Goal

Establish a dedicated `design-tokens` NPM package within the monorepo to centralize and manage design tokens, generate various consumable formats (CSS, DTCG JSON), and enforce their usage throughout the primary `fnc314.github.io` project using `stylelint`.

### Phase 1: Design Tokens Package Setup

#### 1.1 Create `design-tokens` directory

A new directory `design-tokens/` will be created at the project root.

#### 1.2 Initialize `design-tokens/package.json`

A `package.json` file will be created in `design-tokens/` with the following structure. `private` is set to `true` as it's intended for internal monorepo consumption. `type: module` aligns with the main project.

```json
{
  "name": "@fnc314/design-tokens",
  "version": "0.1.0",
  "description": "Design tokens for fnc314.github.io, managed by Style Dictionary.",
  "author": "Franco N. Colaizzi",
  "license": "MIT",
  "private": true,
  "type": "module",
  "main": "dist/index.js",
  "files": [
    "dist",
    "src"
  ],
  "dependencies": {},
  "devDependencies": {
    "style-dictionary": "catalog:devDependencies"
  },
  "keywords": [
    "design-tokens",
    "style-dictionary"
  ]
}
```

#### 1.3 Install Dependencies

Dependencies will be added to the `design-tokens/package.json` using `pnpm add -D --save-catalog-name=devDependencies <package-name>` from the project root, ensuring the command only modifies `design-tokens/package.json` by using proper workspace targeting or executing from the `design-tokens/` directory.

#### 1.4 Configure Orchestration

- Create `design-tokens/vite.config.ts` to orchestrate build steps.
- Create `.mise/tasks/` in `design-tokens/` for all CLI calls related to this package.
- All `mise` tasks must be `.zsh` files.
- No `mise` task should affect a `src` directory "above" it in the folder hierarchy.

#### 1.5 Configure Style Dictionary

A new directory `.config/style-dictionary/` will be created at the project root. This directory will contain `config.mjs` for Style Dictionary.

**`.config/style-dictionary/config.mjs` (initial structure):**

```javascript
import StyleDictionary from 'style-dictionary';

// Add custom transforms or formats here later if needed

export default {
  source: [
    "design-tokens/src/themes/**/*.json", // Existing theme JSONs
    "design-tokens/src/spacing.json",    // To be created from spacing.css
    "design-tokens/src/breakpoints.json", // To be created from breakpoints.css
    "design-tokens/src/typography.json",  // To be created from material-styles.ts
    "design-tokens/src/shapes.json",      // To be created from material-styles.ts
    "design-tokens/src/icons.json"        // To be created from material-styles.ts
  ],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "design-tokens/dist/css/",
      files: [{
        destination: "_variables.css",
        format: "css/variables",
        options: {
          outputReferences: true
        }
      }]
    },
    dtcgJson: {
      transformGroup: "web",
      buildPath: "design-tokens/dist/json/",
      files: [{
        destination: "tokens.json",
        format: "json/nested", // DTCG compliant format for now
        options: {
          outputReferences: true
        }
      }]
    },
    // Future: Add other platforms for KMP, etc.
  }
};
```

*Note: The `source` array includes placeholders for files that will be generated in Phase 2.*

#### 1.6 Create `design-tokens/mise.toml`

This file will define a `mise` task for generating design tokens within the `design-tokens` package.

```toml
[tasks]
generate = { cmd = "bash .mise/tasks/generate.zsh", aliases = ["gen"] }
```

#### 1.7 Create `design-tokens/.mise/tasks/generate.zsh`

This script will execute Style Dictionary via `vite` to build the design tokens.

```zsh
#!/usr/bin/env zsh
#MISE description="Generate design tokens using Style Dictionary"
#MISE alias="gen-tokens"

echo "Generating design tokens for @fnc314/design-tokens..."
pnpm vite ... # Orchestration logic here
echo "Design tokens generated successfully."
```

### Phase 2: Migration of Existing Tokens and Consumption

#### 2.1 Move Theme JSONs

All `*.material3-expressive-theme.json` files from `src/theme/chicago/`, `src/theme/inter/`, `src/theme/red/`, and `src/theme/sunset/` will be moved to `design-tokens/src/themes/`. This centralizes the source of truth for color schemes.

#### 2.2 Handle Theme Images

The images located in `static/images/themes/` correspond to the moved theme JSONs.

- Create a new directory `design-tokens/src/themes/images/`.
- Move all `profile-photo.jpg` images from `static/images/themes/*` into `design-tokens/src/themes/images/`.
- Update the Style Dictionary configuration to include a platform that copies these images to `design-tokens/dist/images/`. This might require a custom `copy` action in Style Dictionary or a separate build step if Style Dictionary's built-in `copy` is insufficient for the desired structure.

#### 2.3 Migrate `spacing.css` and `breakpoints.css`

- Convert the CSS variables defined in `src/stylesheets/spacing.css` into a JSON file (`design-tokens/src/spacing.json`) conforming to Style Dictionary's expected input format.
  - Example for `spacing.json`:

        ```json
        {
          "spacing": {
            "reset": { "value": "0" },
            "padding": {
              "xxs": { "value": "0.25rem" },
              "xs": { "value": "0.5rem" },
              "s": { "value": "1rem" },
              "m": { "value": "1.5rem" },
              "l": { "value": "2rem" },
              "xl": { "value": "3rem" }
            },
            "margin": {
              "xxs": { "value": "0.2rem" },
              "xs": { "value": "0.4rem" },
              "s": { "value": "0.8rem" },
              "m": { "value": "1.2rem" },
              "l": { "value": "1.6rem" },
              "xl": { "value": "2.4rem" }
            }
          }
        }
        ```

- Convert breakpoint values from `src/stylesheets/breakpoints.css` and potentially `src/data/layout.json` into `design-tokens/src/breakpoints.json`.
  - This will include `min-width` and `max-width` values. The `--breakpoint-label` property itself is more of a runtime utility and might not be a direct token, but the underlying pixel values will be.
- Remove `src/stylesheets/spacing.css` and `src/stylesheets/breakpoints.css` after their content has been successfully migrated to JSON and Style Dictionary is configured to generate them.

#### 2.4 Evaluate `material-overrides.css`

- `src/stylesheets/material-overrides.css` primarily contains overrides for Material Design's default typefaces, typescale values, and shape corner radii. These are fundamental design decisions.
- Migrate these overrides to dedicated token files within `design-tokens/src/`. Specifically, typeface (`--md-ref-typeface-*`), typescale (`--md-sys-typescale-*`), shape (`--md-sys-shape-corner-*`), and icon size (`--md-icon-size`) properties will be extracted into files like `design-tokens/src/typography.json`, `design-tokens/src/shapes.json`, and `design-tokens/src/icons.json`.
- The original `src/stylesheets/material-overrides.css` will be removed once its content is tokenized.

#### 2.5 Evaluate `breakpoints.ts` and `material-styles.ts`

- **`src/styles/breakpoints.ts`**: The `Breakpoint` type and `BREAKPOINT_NAMES` array are TypeScript constructs. The `readBreakpoint` function dynamically reads a CSS custom property. The underlying pixel values for breakpoints (e.g., 768px, 1200px) will become design tokens. The `Breakpoint` type and related logic can remain in TypeScript, but will need to be updated to reference the new tokenized values or generated TypeScript definitions if Style Dictionary can produce them.
- **`src/styles/material-styles.ts`**: The `MaterialOverrides` `CSSResult` will be simplified. Instead of defining the CSS variables directly, it will import and apply the generated CSS variables from `@fnc314/design-tokens/dist/css/_variables.css`. The TypeScript export `MaterialTypescaleStyles` which imports `@material/web/typography/md-typescale-styles.js` should remain as it brings in external styles.

#### 2.6 Update Root Project Consumption

- Modify `src/index.css` to remove `@import` statements for `breakpoints.css`, `spacing.css`, and `material-overrides.css`. Instead, it will `@import` the single generated CSS variables file: `@import url("@fnc314/design-tokens/dist/css/_variables.css");`.
- Update `src/env.d.ts` to declare modules for the new design token paths if needed.
- Adjust `src/services/theme/theme-service.ts` and `src/types/theme/theme.ts` to reference the theme JSONs directly from the `design-tokens` package's `src` folder (e.g., `import JsonTheme from "@fnc314/design-tokens/src/themes/chicago/chicago.material3-expressive-theme.json"`). This will ensure the theme photo paths are correctly resolved.
- Review all Lit components (`src/components/**/*.ts`) that currently use hardcoded spacing, color, or typography values, or directly reference the old CSS variable names. Update them to use the newly generated CSS custom properties (e.g., `var(--spacing-padding-s)`).

### Phase 3: Stylelint Enforcement

#### 3.1 Update `stylelint.config.ts`

- Install `stylelint-value-no-udl` (use-design-token-linter) or `stylelint-use-var` plugin for enforcing variable usage.
- Add new rules to `stylelint.config.ts` to enforce the usage of design tokens for specific properties.
  - Colors: `color`, `background-color`, `border-color`, etc. should use `var(--md-sys-color-...)`.
  - Spacing: `margin`, `padding`, `gap` should use `var(--spacing-...)`.
  - Typography: `font-size`, `line-height`, `font-family`, `font-weight` should use `var(--md-typescale-...)` or `var(--md-ref-typeface-...)`.
  - Shapes: `border-radius` should use `var(--md-sys-shape-corner-...)`.
- Ensure these rules apply correctly within `postcss-lit` blocks in TypeScript files.

#### 3.2 Document Non-Compliant Values

- Create a file `changes/dev-tools/design-tokens/follow_ups.md`.
- During the implementation and initial linting, any instances of hardcoded values that should be using design tokens will be documented here. Each entry will clearly state the location, the non-compliant value, and the recommended design token replacement, along with the smallest change necessary to fix it.

#### 3.3 Create `dev-ex/design-tokens/lint.zsh` task

- Create `design-tokens/.mise/tasks/dev-ex/design-tokens/lint.zsh`.
- This script will invoke `stylelint` for the main project, ensuring that the new token enforcement rules are applied.

```zsh
#!/usr/bin/env zsh
#MISE description="Run stylelint with design token enforcement"
#MISE alias="lint-tokens"

echo "Running stylelint with design token enforcement..."
pnpm stylelint "src/**/*.{css,ts}" --config stylelint.config.ts
echo "Stylelint check complete."
```

---
