# Local Tool Config Packages — Implementation Plan (Draft)

> **Status:** Draft — open decisions flagged with **[DECISION]**.
> Author: bionic agent · Branch: `main` · Target: `changes/local-configs`

## Overview

The repo root currently centralizes all tool configs in `.config/<tool>/`, and the mise tasks
(`.config/mise/tasks/dev-ex/tools/*.zsh`) hardcode those absolute repo-root paths. Meanwhile
`configs/` holds private packages (`@fnc314/configs.*`) intended to *own* and *expose* those
configs. `configs/typescript` is the proven reference: packages `extends`/depend on it.

Goal: move each tool's config into its `configs/<tool>` package, expose it via the package
`exports`, make `packages/*` depend on those config packages, and rewire the mise tasks to run
each tool per-package using the local (package-exported) config. Alongside, resolve the
TS6/TS7 split so `tsc` uses `@typescript/typescript6` while source stays on
`@typescript/typescript` (7.x).

## Current state (verified)

| Tool | Config package | Real config today | Exported? | Consumed? |
| --- | --- | --- | --- | --- |
| typescript | `@fnc314/configs.typescript` | `configs/typescript/tsconfig.json` | ✅ `"."` → `./tsconfig.json` | ✅ packages `extends` + `workspace:*` |
| eslint | `@fnc314/configs.eslint` | `configs/eslint/eslint.config.mjs` (dup of `.config/eslint/…`) | ✅ `"."` → `./eslint.config.mjs` | ❌ task uses `.config/eslint/…` |
| prettier | `@fnc314/configs.prettier` | `.config/prettier/prettier.config.mts` + `.prettierignore` | ❌ | ❌ |
| typedoc | `@fnc314/configs.typedoc` | `.config/typedoc/typedoc.config.mjs` | ❌ | ❌ |
| @pwrs-cem | `@fnc314/configs.@pwrs-cem` | `packages/.config/@pwrs/cem/cem.yaml` + `.config/custom-elements-manifest/…` | ❌ | ❌ |
| stylelint, style-dictionary, vite, svgo, postcss, pwa-assets, web-test-runner, custom-elements-manifest | — (none) | `.config/<tool>/…` | — | ❌ |

TS split today: every `package.json` uses `"typescript": "catalog:typescript"` (= TS 7.0.2).
`pnpm-workspace.yaml` already defines a `typescript:` catalog:
`typescript` → `npm:@typescript/typescript6@6.0.2`, `typescript7` → `npm:@typescript/typescript@7.0.2`.

## Phase 0 — Decisions to confirm [DECISION]

- **D0.1 Scope of config packages:** migrate only `eslint` + `prettier` (as literally requested), or also
  `typedoc` + `@pwrs-cem` (packages already exist)? Create packages for un-bundled tools
  (stylelint, style-dictionary, …) or leave them repo-root for now?
- **D0.2 Config duplication:** once moved into `configs/<tool>`, should the repo-root
  `.config/eslint|prettier|typedoc` copies be deleted (config package becomes canonical), or kept in sync?
- **D0.3 Dependency placement:** standardize config deps as `devDependencies` across all packages
  (today `configs.typescript` is inconsistently in `dependencies` for some, `devDependencies` for others).
- **D0.4 Mise-task shape:** per-package task files (e.g. `.config/mise/tasks/dev-ex/packages/<pkg>/eslint.zsh`)
  vs. parameterize the existing `dev-ex/tools/*.zsh` to accept a package arg; and whether tasks `cd` into
  the package so its `node_modules` binaries resolve.
- **D0.5 Lockfile:** regenerate `pnpm-lock.yaml` after `package.json` edits (`pnpm install`).
- **D0.6 Verification depth:** run install + the migrated tools (eslint/prettier/tsc) to green, or
  structure-only for now?

## Phase 1 — Prettier config package

1. Move `.config/prettier/prettier.config.mts` → `configs/prettier/prettier.config.mts`.
2. Move `.config/prettier/.prettierignore` → `configs/prettier/.prettierignore`.
3. Update `configs/prettier/package.json`: add `version`, `exports` (`"."` → config, plus
   `"./ignore"` → `.prettierignore` if needed).

## Phase 2 — Eslint config package (finish wiring)

1. Keep `configs/eslint/eslint.config.mjs` canonical; add missing exports/files if any.
2. Ensure config references resolve regardless of CWD (already uses `import.meta.url`-based `rootDir`).

## Phase 3 — Typedoc + @pwrs-cem config packages

1. Move configs into `configs/typedoc` / `configs/@pwrs-cem`; wire `exports` in each `package.json`.

## Phase 4 — Make `packages/*` depend on config packages

For `packages/{components,data,design-tokens,services,types}` add `workspace:*` devDependencies on
each config package consumed, e.g. `@fnc314/configs.prettier`, `@fnc314/configs.eslint`,
`@fnc314/configs.typedoc`, `@fnc314/configs.@pwrs-cem` (plus existing `configs.typescript`).

## Phase 5 — Rewire / add mise tasks

- Add per-package tool tasks under `.config/mise/tasks/dev-ex/packages/<pkg>/` (or parameterize
  `dev-ex/tools/*.zsh`), pointing `--config` at the package-exported config and running within each
  package dir: eslint, prettier, typedoc, stylelint, cem.

## ~~Phase 6 — TS6/TS7 split (`tsc` on typescript6, source on typescript7)~~ - DONE

For every `package.json` currently using `"typescript": "catalog:typescript"`
(root, `packages/*`, `firebase/functions/node`):

- change to `"typescript": "catalog:typescript"` (→ `@typescript/typescript6`, TS 6, so `tsc`/eslint tooling works);
- add/keep a TS7 identity for source/toolchain, e.g. `"typescript7": "catalog:typescript"` (→ `@typescript/typescript` 7.x).
- confirm any vite/`unplugin-dts`/`ts-node` references that should consume `typescript7`.

## Phase 7 — Regenerate lockfile + verify

1. `pnpm install` to refresh `pnpm-lock.yaml`.
2. `pnpm exec / pnpm run` the migrated tools on a representative package (e.g. `packages/components`).
3. `tsc --build` (or repo equivalent) to confirm TS6 `tsc` works and TS7 source compiles.

## Open questions (see D0.*)

- Exact scope, config canonical location, dep placement, task shape, verification depth.
