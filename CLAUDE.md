# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The personal portfolio website for Franco N. Colaizzi (fnc314.com), built as a single-page app of **Lit web components** styled with **Material Web (Material Design 3)**, written in TypeScript. It deploys as a static site to GitHub Pages, with a separate Firebase Functions backend in `functions/`.

## Toolchain: pnpm + mise

- Package manager is **pnpm 11.5** (not npm). Node 26, Firebase CLI, and other tools are pinned via **mise** (`mise.toml`). Run `mise install` before first use.
- Dependency *versions* are not in `package.json` — every dep reads `catalog:<group>` and the actual version is resolved from the catalogs in `pnpm-workspace.yaml`. To change a version, edit the catalog there, not `package.json`.
- `bin/*` are thin shell wrappers that `exec mise run <task>`. Task definitions live in `.mise/tasks/`.

## Build system: migrating Rollup → Vite

This branch (`feature/vite`) is mid-migration from Rollup to Vite. **Both build systems coexist** and write to separate output dirs:

- **Vite** (`vite.config.ts`) → `dist/vite/<development|production>/`. This is the source of truth for deploys — GitHub Pages publishes `dist/vite/production` (see `.github/workflows/gh-pages.yaml` → `mise run github:deploy` → `vite build -m production`).
- **Rollup** (`rollup.config.ts`) → `dist/rollup/<env>/`. Legacy path, still wired into the `build`/`deploy`/`serve` npm scripts.

When adding build behavior, prefer the Vite config unless explicitly working on the Rollup path.

## Common commands

```bash
mise run vite-prod-dev          # vite build for BOTH dev + prod (local), into dist/vite/*
mise run github:deploy          # production vite build (what CI deploys)
pnpm serve                      # @web/dev-server dev server (rollup-era)
pnpm build:website:watch        # rollup watch build for local dev
pnpm lint                       # lit-analyzer + eslint over src/**/*.ts
pnpm lint:eslint:fix            # eslint --fix
pnpm format                     # prettier --write over src
pnpm test                       # web-test-runner, dev + prod modes
pnpm test:watch                 # wtr --watch
pnpm build:tsc                  # type-check / emit .d.ts only (tsc)
pnpm cem-analyze                # regenerate the Custom Elements Manifest
```

Run a single test by filtering web-test-runner, e.g. `pnpm wtr --group default --files 'src/**/foo.test.ts'`. (No test files exist yet; `pnpm test` runs the default wtr config.)

## Generated files — do not hand-edit

- **`README.md`** is auto-generated web-component-analyzer markdown (`pnpm dx:wca`). Don't edit it by hand.
- **`docs/`** holds generated output: TypeDoc HTML (`pnpm typedoc:gen`), CEM JSON, and WCA markdown/JSON. Regenerate via the `dx:*` scripts rather than editing.
- The **Custom Elements Manifest** drives IDE autocomplete and the docs. After changing a component's public API (props, slots, CSS custom props, events), regenerate with `pnpm cem-analyze`. Manifest tooling config lives in `.cem.yaml` and `.config/`.

## Architecture

### Services — singleton `EventTarget`s wired by constructor DI

`src/services/` holds the app's shared state, each an exported singleton instance of a class extending `EventTarget`. They form a dependency chain via constructor injection (`storage → configs → theme`) and communicate with components by dispatching **`CustomEvent`s that bubble + compose**, with event types augmented onto `GlobalEventHandlersEventMap`:

- `storage-service` — typed `localStorage` wrapper.
- `configs-service` — persists `AppConfigs` (color scheme, FAB layout); dispatches `app-configs.change`. Also does forward-migration of older stored config shapes on load.
- `theme-service` — resolves the active `ThemeConfig` + Material scheme name from configs + `prefers-color-scheme`.
- `router-service` — hash-based routing; dispatches `router.change` / `router.back`.

Components listen for these events rather than holding references to the services where possible.

### Components, partials, and routing

- `src/components/` — reusable Lit elements (`app-shell` is the root; `nav-component`, `fab-menu`, dialogs, `word-cloud`, etc.).
- `src/partials/` — route-level view containers (`info`, `work`, `code`, `blog`).
- Routing is **hash-based**, no server routes. The route set is `ROUTES` in `src/types/components/nav/routes.ts` (`info`/`work`/`code`/`blog`). `app-shell` swaps the active partial; `nav-component` syncs tabs to `window.location.hash`.
- `src/index.ts` is the single entry: it side-effect-imports every component and Material element, instantiates the service singletons, and on `DOMContentLoaded` adopts the Material + typescale stylesheets into `document.adoptedStyleSheets` and applies the resolved theme.

### Theming

Multiple named themes (`chicago`, `inter`, `red`, `sunset`) live in `src/theme/<name>/`, each exporting a `ThemeConfig` built from JSON color-scheme data, aggregated into `THEME_CONFIGS`. Colors map to **M3 design tokens** (`--md-sys-color-*`) applied through a shared `MaterialCSSStyleSheet`. The scheme is the cross-product of mode (dark/light/system) × contrast (normal/medium/high). Component-local styling uses scoped CSS custom properties (e.g. `--word-tag-*`) that default to Material tokens.

### Data

Site content is data-driven from `src/data/*.json` (`bio`, `work`, `code`, `blog`, `skills`, `education`, `connections`, `photo`). Edit JSON to change content; components render from it.

### Path aliases

Imports use `@/*` → `src/*` (also `@/components/*`, `@/services/*`, `@/theme/*`, `@/types/*`), defined in `tsconfig.json` and mirrored in the build configs. Prefer aliases over deep relative paths.

## Firebase (`functions/`)

`functions/` is an independent package (its own `package.json`, `tsconfig`, eslint config) for Firebase Cloud Functions. `firebase.json` also configures Firestore rules (`firebase/firestore/`) and App Hosting. Build/lint/deploy from within that dir (`pnpm --prefix functions run build|lint|deploy`); its lint+build run as Firebase predeploy hooks.

## Conventions

- Strict TypeScript throughout; Lit decorators (`useDefineForClassFields: false`, `experimentalDecorators`).
- Linting is **lit-analyzer + eslint** (lit, lit-a11y, wc, tsdoc plugins) for TS, **stylelint** for CSS. The `ts-lit-plugin` and `custom-elements-lsp` give in-editor template type-checking against the CEM.
- Document component public API with TSDoc/JSDoc tags (`@slot`, `@cssprop`, `@fires`, etc.) — these feed the manifest and generated docs.
