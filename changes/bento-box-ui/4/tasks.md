# Checklist for Bento Box UI Overhaul (Phase 4)

- [x] Fix `mise run dx-refresh`
- [x] Create `settings-card.ts`
  - [x] Implement settings functionality (migrated from config dialog)
  - [x] Implement version/time display
  - [x] Add TSDoc/JSDoc
  - [x] Add `settings-card.test.ts`
- [x] Relocate `profile-bio-card.ts` to `src/components/card/profile-bio/profile-bio-card.ts`
  - [x] Update imports in `bento-layout.ts`
- [x] Final Verification
  - [x] Build project
  - [x] Verify `docs/*` directory consumption
  - [x] Verify `profile-bio-card` layout
  - [x] Verify `settings-card` layout
  - [x] Verify deprecation markings
  - [x] List unused dependencies in `TODO.md`
