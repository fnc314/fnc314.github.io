# Checklist for Bento Box UI Overhaul

- [x] Define global CSS variables for breakpoints in `src/index.css`
- [x] Create the new layout component `bento-layout.ts`
  - [x] Implement responsive Bento Grid structure for Mobile, Tablet, and Desktop
  - [x] Integrate existing partials (Bio, Photo, Education, Skills, Work, Code, Blog) as grid cards
  - [x] Embed Connect/Contact information directly into a Bento card
  - [x] Retain configuration dialog but add an inlineSettings option or toggle
  - [x] Implement "Design Debugger" UI toggle for comparing fonts and icon styles side-by-side
- [x] Enhance the `word-cloud` and `word-tag` components for mobile responsiveness
- [x] Modify `nav-component.ts` to support smooth scroll spy navigation across bento sections
- [x] Update `index.html` to replace the carousel/tab structure with `<bento-layout>`
- [x] Update `app-shell.ts` to simplify layout slots and remove redundant FABs if necessary
- [x] Update `src/index.ts` to handle hash changes for scroll navigation
- [x] Add unit tests for the new `bento-layout` component
- [x] Verify build and formatting using `mise` and `pnpm` tasks
- [x] Run `mise run dx-refresh` to ensure dev tools are updated
- [x] Add redundant `@material/web` components to `TODOS.md`
- [x] Define global spacing tokens in `src/styles/spacing.ts`
- [x] Apply spacing tokens to all component `.ts` files
