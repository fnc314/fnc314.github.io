# Implementation Plan - Bento Box UI Overhaul (Phase 4)

Enhance the Bento Box UI implemented in Phase 3 to fix `mise run dx-refresh`, create `settings-card`, and relocate `profile-bio-card`.

Before starting anything, Update [`tasks.md](./tasks.md) with detailed steps (and sub-steps, where applicable) and, as progress is made, mark entries as complete.

## Goals

1. **Fix `mise run dx-refresh`:** Fix the command `mise run dx-refresh` such that no step throws any error.
2. **Add `settings-card`:** Create `src/components/card/settings/settings-card.ts` and migrate existing configuration functionality. Provide documentation and an accompanying `*.test.ts` file. Ensure `~build/time` and other related data are present.
3. **Relocate `profile-bio-card`:** Relocate `profile-bio-card` to `src/components/card/profile-bio/profile-bio-card.ts`.

## Open Questions

1. **`settings-card` Content:** Does this card need to support the `Design Debugger` toggle in addition to theme/contrast settings, or should those remain elsewhere?
2. **FAB Settings:** Should the `settings-card` include the FAB settings that were previously in `app-shell.ts`?
3. **Relocation Order:** Is it preferable to relocate `profile-bio-card` *before* implementing `settings-card`, or is it better to wait until `settings-card` is implemented to minimize `bento-layout.ts` import changes?

## Proposed Changes

Further enhancements from Phase 3.

---

## Verification Plan

### Automated Tests

- Flatter overall application structure.
- `mise run dx-refresh` is successful and resulting `docs/*` directory contents are consumable.  Use `mise run python:server:start docs -p 9998` to navigate directory contents via `http://localhost:9998`.
- There's an existing `python` server open on `http://localhost:9999`.  Test changes by invoking `NODE_ENV=development pnpm vite build -m development` and refreshing `Chrome`
- *DO NOT* run `pnpm build|test|lint|format`

### Manual Verification

- `NODE_ENV=development pnpm vite build -m development` succeeds

