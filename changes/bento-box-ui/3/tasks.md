# Checklist for Bento Box UI Overhaul (Phase 3)

- [x] Update `package.json#version` to "2.0.0"
- [x] Clean up `app-shell.ts`
  - [x] Remove `fab-menu` and `md-fab` triggers
  - [x] Remove logic related to `ConfigsDialog` and `ConnectDialog` triggers
- [x] Migrate navigation/smooth-scroll logic from `nav-component.ts` to `app-shell.ts`
- [x] Delete `nav-component.ts`
- [x] Refine `profile-bio-card.ts`
  - [x] Implement internal `3x3` grid (Desktop/Tablet)
  - [x] Implement fallback `3x2` grid (Mobile)
  - [x] Use `<picture>` element for portrait
- [x] Mark unused components as `@deprecated` (v2.0.0)
- [x] Clean up unnecessary `index.css` and DOM markup
- [ ] Final Verification
  - [ ] Build project
  - [ ] Verify `docs/*` directory consumption
  - [ ] Verify `profile-bio-card` layout
  - [ ] Verify deprecation markings
  - [ ] List unused dependencies in `TODO.md`
