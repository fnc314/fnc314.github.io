# Implementation Plan - Bento Box UI Overhaul (Phase 3)

Enhance the Bento Box UI implemented in Phase 2 to update the `package.json#version` to `2.0.0`, further clean up deprecated widgets, update documentation and `TODO.md`, and refine `profile-bio-card.ts`.

Before starting anything, Update [`tasks.md](./tasks.md) with detailed steps (and sub-steps, where applicable) and, as progress is made, mark entries as complete.

## Goals

1. **Update `package.json#version`:** Update `package.json` at `version` to `"2.0.0"`.
  **Question:** Are there specific 3rd-party packages you want to move from `dependencies` to `devDependencies` or remove entirely (e.g., if we are no longer using `@material/web/tabs` or specific dialog components)?
  **Answer:** I do not want to touch `package.json` or `pnpm-workspace.yaml` or anything related to `package.json#dependencies` or `package.json#devDependencies`.
  **Question:** To confirm, I should only modify the version field in `package.json` and avoid running `pnpm update` or changing any package entries?
  **Answer:** Yes, EXPLICITLY and *EXCLUSIVELY* update `package.json#version` to `"2.0.0"`.  *NOTHING ELSE* and *DO NOT USE ANY "AUTOMATIC" UPDATING TOOL*.  There is **NO NEED** to use `pnpm`.
2. **Clean up `app-shell.ts`:** Remaining `md-fab` and `md-fab-menu` need to be removed from the UI, flattening the entire site structure where possible.
  **Question:** Are these features being migrated to dedicated, permanent cards within the Bento grid (as proposed in Phase 1), or will they be triggered by new elements in the header/footer? If they are cards, should they always be visible, or should the `ConfigsDialog` and `ConnectDialog` themselves still exist as modals triggered by links?
  **Answer:** We are moving away from the dialogs *in general*.  We will not only remove the UI triggers, but any supporting (logic) code as well.  Reducing the `app-shell.ts` logic is the overall goal.
3. **Navigation Cleanup:** Assess the need of `nav-component.ts` and remove any UI widgets it contributes to the over-all UI.
  **Question:** Since the "tabs" are being removed in favor of a flat layout, should the logic for listening to hash changes (e.g., `#work`, `#blog`) and triggering smooth scrolls be moved directly into `app-shell.ts` or `index.ts`? If `nav-component.ts` no longer renders any `HTML`, it may be cleaner to delete the component entirely rather than keeping it as a "headless" abstraction.
  **Answer:** This logic can move to `app-shell.ts` or to `bento-layout.ts`.  Do not add it to `index.ts` and we can remove `nav-component.ts` versus keeping the headless abstraction layer it represents.
4. **Deprecated Docs:** For `src/components` no longer used, mark the source as `@deprecated` (referencing `2.0.0` as the version).
  **Question:** Based on the current plan, are the following the primary candidates for deprecation?
    - `fab-menu` and `fab-menu-item`
    - `step-up-dialog`
    - `md-tabs` wrappers
    - Any carousel/tab-panel transition logic in `index.css`
      Note: If `ConfigsDialog` and `ConnectDialog` are being fully inlined as cards, they should likely be marked as well.
  **Answer:** The `Config|ConnectDialog`s will be removed, so marking them is superfluous.  We will be re-integrating `step-up-dialog` into a new (Phase 4) `settings-box` component, for now, we can leave it be.  Updates are mainly going to `fab-menu` and `fab-menu-item` documentation.  Please remove any unnecessary `index.css` as well as any uneeded `DOM` markup.  Anything from the current navigation/UI (tabs) is candidate to remove.
5. **2nd Pass on `profile-bio-card.ts`:** Rework `profile-bio-card.ts` to have an internal `grid` in which it presesnts the picture and text *vertically* and across a lot of space.  Use a `3x3` grid, dividing the content such that the portrait takes up the upper `2x3` (row x column) `subgrid` and the text occupies the lower `1x3` (row x column) `subgrid`.
  **Question:** How should this layout behave on mobile (Compact) breakpoints? On a narrow screen, a $2 \times 3$ block for a portrait followed by a $1 \times 3$ block for text might result in the text being very cramped or the image being disproportionately tall. Should we revert to a standard stack (image top, text bottom) for mobile, or keep the grid structure constant?
  **Answer:** For mobile, or as the viewport narrows, we can drop from a `3x3` grid (row x column) to a `3x2` grid (row x column), where the picture takes the top `2x2` grid (row x column) and the text occupies the remaining `1x2` grid (row x column).
  **Question:** For the portrait spanning the top $2 \times 3$, would you prefer it to be a single large image container, or should we implement it as a "hero" area that could potentially host other elements (like the "Design Debugger" toggle) in the future?
  **Answer:** Implement the top `2x2` grid (row x column) such that it contains a *single* `<picture>` element, as implemented in `src/partials/info/info-partial.ts`.

## Open Questions

Please provide any questions

## Proposed Changes

Further enhancements from Phase 2.

---

### Project Metadata

#### [MODIFY] [package.json](file:///Users/fnc314/Code/websites/fnc314.github.io/package.json)

- Update `version` to `2.0.0`.

---

### Shell & Layout

#### [MODIFY] app-shell.ts

- Remove `fab-menu` and `md-fab` triggers.
- Remove logic related to `ConfigsDialog` and `ConnectDialog` triggers.
- Integrate smooth-scroll and hash-change listening logic formerly in `nav-component.ts`.

#### [MODIFY] profile-bio-card.ts

- Implement an internal `3x3` grid for Desktop/Tablet.
- Implement a fallback `3x2` grid for Mobile.
- Use a `<picture>` element for the portrait as seen in `info-partial.ts`.

### Navigation

#### [DELETE] nav-component.ts

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
