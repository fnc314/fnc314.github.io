# Implementation Plan - Bento Box UI Overhaul (Phase 3)

Enhance the Bento Box UI implemented in Phase 2 to update the `package.json#version` to `2.0.0`, further clean up deprecated widgets, update documentation and `TODO.md`, and refine `profile-bio-card.ts`.

## Goals

1. **Update `package.json#version`:** Update `package.json` at `version` to `"2.0.0"`.
2. **Clean up `app-shell.ts`:** Remaining `md-fab` and `md-fab-menu` need to be removed from the UI, flattening the entire site structure where possible.
3. **Navigation Cleanup:** Assess the need of `nav-component.ts` and remove any UI widgets it contributes to the over-all UI.
4. **Deprecated Docs:** For `src/components` no longer used, mark the source as `@deprecated` (referencing `2.0.0` as the version)
5. **2nd Pass on `profile-bio-card.ts`:** Rework `profile-bio-card.ts` to have an internal `grid` in which it presesnts the picture and text *vertically* and across a lot of space.  Use a `3x3` grid, dividing the content such that the portrait takes up the upper `2x3` (row x column) `subgrid` and the text occupies the lower `1x3` (row x column) `subgrid`.

## Open Questions

Please provide any questions

## Proposed Changes

We will group changes under layout components, navigation, and configuration refactoring.

---

---

### Navigation

#### [REFINE] [nav-component.ts](file:///Users/fnc314/Code/websites/fnc314.github.io/src/components/nav/nav-component.ts)

- Assess overall need of this layer of abstraction
- Remove any widget contributed to overall site UI

---

### Deprecating `src/components`

#### [UPDATE] [src/components](file:///Users/fnc314/Code/websites/fnc314.github.io/src/components)

- For anything within `src/components` nolonger used, ensure `@deprecated` annotations are provided pointing to `version` `2.0.0`

---

## Verification Plan

### Automated Tests

- Flatter overall application structure.
- `mise run dx-refresh` is successful and resulting `docs/*` directory contents are consumable.  Use `mise run python:server:start docs -p 9998` to navigate directory contents via `http://localhost:9998`.
- There's an existing `python` server open on `http://localhost:9999`.  Test changes by invoking `NODE_ENV=development pnpm vite build -m development` and refreshing `Chrome`
- *DO NOT* run `pnpm build|test|lint|format`

### Manual Verification

- `profile-bio-card.ts` should look as described
- `pnpm vite build` succeeds
- Any unused `src/components` is marked as `@deprecated`
- Unused 3rd-party dependencies are listed in `TODO.md`
