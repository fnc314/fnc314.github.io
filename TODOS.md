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
