# TODOS

## 2026-06-01 @ 15:56:11 | Component Migration | Spaghetti `import`s

Findings from an import-coupling audit run while scoping the `component-migration`
skill (colocating component logic/types/styles). Two conditions were flagged:

- **Fan-out** — a file imports from many *unrelated* internal (`@/…`) areas.
- **Fan-in** — a file is imported by many *unrelated* files.

External packages (`lit`, `@material/web`, …), a component's own children/`@/data` content,
`src/index.ts`, and barrel `index.ts` files are excluded from the counts.

### Fan-out (file reaches into too many unrelated areas)

- [ ] **`src/components/dialog/configs/configs-dialog.ts`** — **12** internal modules across **5**
  unrelated areas (`services`×2, `styles`×3, `theme`, `types/configs`×2, `types/theme`×2) + a sibling
  component. Worst offender. The migration colocates **only** the single-consumer `configs-dialog`
  types; the rest stay. **Decouple:** the inline theme/config orchestration (`themeToIcon`,
  `updateMaterialCSSStyleSheet`, scheme-name utils) belongs behind `theme-service` /
  `configs-service`, not wired directly into the dialog.
- [ ] **`src/components/app-shell/app-shell.ts`** — **11** internal modules. The child-component
  imports (configs/connect dialogs, fab-menu) are legitimate shell composition; the cross-layer
  spread (`services`×3, `styles`×2, `types/configs`×2, `types/theme`) is not. **Decouple:** the
  theme/config wiring here duplicates logic in `styles/styles.ts` — centralize in a service.
- [ ] **`src/styles/styles.ts`** — **layering inversion**: a `styles/` module imports `services`
  (configs, theme), `@/theme`, and domain types. Not resolved by the migration. **Decouple:** move
  the `onThemeChange` side-effect/orchestration into a theme controller service; keep `styles/`
  limited to pure CSS (`CSSResult` / `CSSStyleSheet`) exports.
- [ ] **`src/partials/info/info-partial.ts`** — **9** internal modules (the 3 `@/data` imports are
  legitimate content; the theme/type spread is the concern). Also consumes
  `@/types/components/word/word-cloud`, **shared** with the `word-cloud` component — see "blockers".

### Fan-in (file imported by many unrelated files)

- `src/styles/material-styles.ts` — imported by **18** files. **Acceptable**: dependency-free leaf
  (only `lit` + a `@material/web` re-export). Action: *keep it dependency-free* so it stays a safe hub.
- `src/types/theme/theme.ts` — imported by **9** files. **Acceptable** shared domain type. App-level;
  not colocated by the migration. Keep under `types/theme/`.
- `src/types/theme/color-scheme-configs.ts` — imported by **7** files. **Acceptable** shared
  domain type/util. App-level; not colocated.
- `src/services/configs/configs-service.ts` — imported by **5** files. Expected for a singleton
  service; no action.

### Migration blockers — shared modules that must NOT be colocated

These are imported by **>1** unrelated unit, so the single-consumer rule keeps them shared. The
migration handles these by leaving them where they are — **no decoupling required**, recorded for
traceability:

- `src/types/components/blog/blog-post.ts` — `blog-post` component **+** `blog-partial`.
- `src/types/components/word/word-cloud.ts` — `word-cloud` component **+** `info-partial`.
- `src/types/components/work-experience/work-experience.ts` — `work-experience` component **+** `work-partial`.
- `src/styles/components/dialog/dialog.ts` (`DialogSizing`) — `configs-dialog` **+** `connect-dialog`.

### Safe to colocate (single consumer, for reference)

`word-tag`, `code-project`, `connect-dialog`, `step-up-dialog`, and `configs-dialog`'s own
`FormContent` type each have exactly one consumer and can be colocated cleanly.

## 2026-06-02 @ 16:15:00 | DX Infrastructure | CEM Analysis Failures

- [ ] **Fix `tsconfig.json` paths**: Ensure all `compilerOptions.paths` values are arrays (e.g. `"@/*": ["src/*"]`) to fix N-API resolver crash.
- [ ] **Resolve Circular JSON crash**: Update `.config/custom-elements-manifest/custom-elements-manifest.config.mjs` to exclude `src/index.ts` from globs.
- [ ] **Export `MaterialSymbol`**: Add `export type { MaterialSymbol }` to `fab-menu.ts` and `fab-menu-item.ts`.
- [ ] **Update CEM Schema**: Set `schemaVersion` to `2.1.0` in CEM config to satisfy validator.

## 2026-06-03 @ 10:00:00 | Bento Migration | Redundant Dependencies

Following the migration to the Bento Box layout, the following components/packages
should be audited for removal once inline cards fully replace their functionality:

- [ ] **@material/web/tabs**: Evaluate if `nav-component` still requires the full Tabs suite or if a lighter custom implementation suffices for scroll-spy.
- [ ] **@material/web/dialog**: Audit `configs-dialog` and `connect-dialog` usage vs. the new inline bento cards.

## 2026-06-03 @ 10:15:00 | Bento Verification | Mobile Responsiveness

Audit of the `word-cloud` and `word-tag` components on small viewports (Galaxy S22 Ultra):

- [ ] **Responsive Font Scaling**: Refactor quartile font-sizes (e.g., `--word-cloud-first-quartile-font-size`) to use `clamp()` or media queries for viewports `< 600px`. The current `1.75rem` is too large for portrait mobile layouts.

## 2026-06-03 @ 11:30:00 | Styling Toolkit | Spacing Token Migration

Defined `--spacing-padding-*` and `--spacing-margin-*` tokens. `bento-layout.ts` is 100% complete.
The following replacements are required in component source files once accessible:

- [x] **`blog-post.ts`**: Verified and updated with spacing tokens.
- [x] **`info-section.ts`**: Verified and updated with spacing tokens.
- [x] **`work-experience.ts`**: Verified and updated with spacing tokens.
- [x] **`code-project.ts`**: Verified and updated with spacing tokens.
- [x] **`configs-dialog.ts`**: Verified and updated with spacing tokens.
- [x] **`connect-dialog.ts`**: Verified and updated with spacing tokens.
- [x] **`step-up-dialog.ts`**: Verified (no direct spacing changes needed).
- [x] **`fab-menu-item.ts`**: Verified and updated with spacing tokens.
- [x] **`fab-menu.ts`**: Verified and updated with spacing tokens.
- [x] **`nav-component.ts`**: Verified (no direct spacing changes needed).
- [x] **`partial-header.ts`**: Verified and updated with spacing tokens.
- [x] **`word-cloud.ts`**: Verified and updated with spacing tokens.
- [x] **`word-tag.ts`**: Verified and updated with spacing tokens.
- [x] **`info-partial.ts`**: Verified and updated with spacing tokens.
- [x] **`work-partial.ts`**: Verified and updated with spacing tokens.
- [x] **`code-partial.ts`**: Verified and updated with spacing tokens.
- [x] **`blog-partial.ts`**: Verified and updated with spacing tokens.
- [x] **`configs-dialog.ts`**: Complete.
- [x] **`connect-dialog.ts`**: Complete.
- [x] **`info-partial.ts`**: Complete.
- [x] **`work-partial.ts`**: Complete.
- [x] **`code-partial.ts`**: Complete.
- [x] **`blog-partial.ts`**: Complete.
