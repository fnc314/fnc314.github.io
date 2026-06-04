# Implementation Plan - Bento Box UI Overhaul

Plan a complete UI overhaul of [fnc314.com](https://fnc314.com) to migrate from a tabbed carousel layout to a flat, responsive Bento Box UI, maintaining existing Material Design 3 tokens and theme systems, improving accessibility, and flattening navigation.

Comment: Make sure all new code is documented properly.  use `mise run dx-refresh` to make sure developer tools are not broken during changes

## User Review Required

> [!IMPORTANT]
> **Refactoring Settings & Connect Dialogs to Inline Bento Cards:**
> We propose moving the settings configuration form and the contact/connect information directly into inline Bento Box cards instead of using floating FABs and modal dialogs. This streamlines the visual experience and eliminates dialog-based clutter. Please let us know if you prefer to retain the modal dialogs as secondary layers or if they should be completely replaced by the inline cards.
>> Comment: I'm not so quick to *remove* dialogs completely from the design language, they may be a convenient place to surface controls like those for theming.  I'm aligned with embedding the contact information directly into the bento design.  Propose a dialog-less solution and one that, maybe, uses dialogs in select, one-off experiences.

> [!IMPORTANT]
> **Comparison Debugging UI:**
> To compare proposed stylistic updates (e.g., trying a different typography pairing like Inter/Outfit, or switching to sharp vs. rounded icons), we will add a dedicated "Design Debugger" component or inline card option. This toggle will render elements side-by-side or trigger a real-time font-swap on the page for comparison.
>> Comment: This sounds fantastic.  If, for a simpler implementation, we needed to use build flags, that'd be acceptable too.

## Open Questions

> [!NOTE]
> Please provide feedback on these questions directly in your response so we can refine the plan.

1. **Bento Grid Column Structure:**
   Do you have a preferred column arrangement on Desktop (>1200px)? We propose a 12-column grid system allowing for varied card widths (`grid-column: span X`):
   - **Row 1:** Profile Card (span 4, height 2 rows), Bio Card (span 8, height 1 row)
   - **Row 2:** Theme Configuration Card (span 4, height 1 row), Connect/Contact Card (span 4, height 1 row)
   - **Row 3:** Skills Word-Cloud Card (span 8, height 2 rows), Education Card (span 4, height 2 rows)
   - **Row 4:** Work History Card (span 12, height auto)
   - **Row 5:** Code Projects Card (span 6, height auto), Blog Posts Card (span 6, height auto)

   Would you prefer a different ordering or sizing of cards?

   A. Comment: I have no preference as of now, but make sure the implementation is such that I can easily re-arrange elements without reworking architecture.

2. **Navigation Bar Update:**
   Since tabs are being removed, how should the top navigation bar `<nav-component>` behave? We propose:
   - Converting the navigation links into smooth-scroll shortcuts linking to corresponding cards or sections (e.g. `#bio`, `#work`, `#code`, `#blog`, `#settings`).
   - Adding a sticky/scroll-spied indicator to show which section is currently in view.

   A. Comment: This proposal sounds *fantastic*

3. **Breakpoints and CSS Grid Transitions:**
   We plan to use CSS Media Queries to redefine grid layouts across Mobile (<=736px), Tablet (<=1200px), and Desktop (>1200px).
   To implement "smooth transitions when crossing boundaries", we propose using CSS transition interpolation for `grid-template-columns` and card transforms. Is this standard-supported transition path acceptable, or would you prefer a custom wrapper?

   A. Comment: The goal is broadest browser support and simplest to maintain (plus refer back to).  So long as any decision implemented is thoroughly documented and does not introduce edge case behaviors, standard implementations are preferred.

## Proposed Changes

We will group changes under layout components, navigation, index entries, and styles.

---

### Layout Components

#### [NEW] [bento-layout.ts](file:///Users/fnc314/Code/websites/fnc314.github.io/src/components/bento-layout/bento-layout.ts)

Comment: Ensure thorough TSDoc/JSDoc/TypeDoc comments are provided for each new component and any public parts thereof.

- Create a new Lit component `bento-layout` representing the main Bento Grid wrapper.
- Consolidates the layout that was previously divided across tabs into a single responsive grid.
- Defines bento card slots and structures:
  - Profile & Header Card
  - Bio Card
  - Skills Word-Cloud Card
  - Education Card
  - Work Experience Card
  - Code Projects Card
  - Blog Posts Card
  - Settings/Configuration Card (replacing dialog)
  - Connect Card (replacing dialog)
- Implements the "Design Debugger" comparisons toggle (e.g. switching fonts/icons side-by-side or in-place).

Comment: The exisitng `word-cloud` and `word-tag` implementations leave some room for improvement, especially on my Galaxy S22 Ultra in portrait orientation.  Consider necessary enhancements (maybe shrinking the final `word-tag` for smaller screens?) to improve the existing component.  Likewise, if the new design works better *without* the `word-cloud` or `word-tag`, that's fine too.

#### [MODIFY] [app-shell.ts](file:///Users/fnc314/Code/websites/fnc314.github.io/src/components/app-shell/app-shell.ts)

- Restructure slots to simplify page composition.
- Remove redundant floating FAB container, FabMenu, and overlay dialogs if they are migrated into inline bento cards.
- Retain only core shell features (theme stylesheet updates, viewport/page scroll handling, meta tags).

---

### Navigation

#### [MODIFY] [nav-component.ts](file:///Users/fnc314/Code/websites/fnc314.github.io/src/components/nav/nav-component.ts)

- Refactor the `@material/web` tabs wrapper.
- Map links to hash-anchors on the flat page rather than triggering translate changes.
- Implement smooth scrolling to the targets (Bio, Work, Code, Blog, Settings).

---

### Index & Style Foundation

#### [MODIFY] [index.html](file:///Users/fnc314/Code/websites/fnc314.github.io/index.html)

- Replace `<div class="carousel-track" id="tabs-container">` structure with a single `<bento-layout>` tag.
- Clean up any slot definitions no longer needed.

#### [MODIFY] [index.css](file:///Users/fnc314/Code/websites/fnc314.github.io/src/index.css)

- Remove carousel track animations and translation styles.
- Add bento layout rules using CSS Grid.
- Add breakpoint layouts:
  - Mobile (<=736px): 1-column layout.
  - Tablet (<=1200px): 6-column layout.
  - Desktop (>1200px): 12-column layout.
- Define smooth transition effects for container size shifts and hover animations on cards.

Comment: If not defined, create (and use) global CSS Variables for these values (or any other key breakpoint-related values).  DO NOT sprinkle these values throughout the codebase, that's not maintainable

#### [MODIFY] [TODOS.md](file:///Users/fnc314/Code/websites/fnc314.github.io/TODOS.md)

- Log any redundant packages (e.g. `@material/web/tabs` or `dialog` dependencies) to be cleaned up after migration.

## Verification Plan

### Automated Tests

- Build and verify the application compiles successfully: `pnpm build`
  - Comment: You'll be better off using a combination of `mise` tasks.  Run, in one process, `mise run python:server:start dist` and after changes, run `NODE_ENV=development pnpm vite build -m development`.  That will create a new website build and push it to the same dir that's watched by python.  Visit `localhost:9999/vite/development/index.html` to view changes
- Run linting and formatting: `pnpm lint` and `pnpm format`
- Run the test suite: `pnpm test`
  - Comment: Write tests for new components, there are no existing tests and, therefore, no existing testing infrastructure to use...

### Manual Verification

- Deploy to local server `pnpm serve` and review in browser.
  - Comment: See comments about `mise` tasks
- Resize window to check layout adaptivity across breakpoints:
  - Desktop (>1200px)
  - Tablet (<=1200px and >736px)
  - Mobile (<=736px)
- Validate smooth grid transitions when resizing and interactive hover effects.
- Test inline theme configurations, mode switches, and contrast selectors.
- Verify side-by-side design comparison debugger functionality for fonts and icons.
