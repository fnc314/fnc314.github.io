# Implementation Plan - Bento Box UI Overhaul (Phase 2)

Enhance the Bento Box UI implemented in Phase 1 to improve content structure, simplify the layout management, and refactor configuration components.

Comment: Make sure all new code is documented properly. Use `mise run dx-refresh` to ensure developer tools are not broken during changes.

## Goals

1.  **Component Relocatability:** Implement a data-driven structure for Bento widgets to easily identify and rearrange them.
2.  **Navigation Cleanup:** Remove tabbed navigation entirely; rely on smooth-scrolling anchors.
3.  **Responsive Consolidation:** Combine Profile and Bio into a single, responsive 3-column layout.
4.  **UI Mode Toggle Refactoring:** Relocate customization to the end of the document flow and extract the toggle into a standalone `ui-mode-toggle` component.

## User Review Required (Feedback from Implementation Plan 1)

> [!IMPORTANT]
> **Widget Relocation:**
> Moving from hardcoded CSS grid class names to a data-driven configuration in `bento-layout.ts` will allow defining the grid structure, order, and spans in a single configuration object.

> [!IMPORTANT]
> **Refactoring Settings & Connect Dialogs:**
> The UI mode functionality will be refactored into a new component `ui-mode-toggle` to support embedding in Bento cards rather than relying solely on dialogs.

## Open Questions

1.  **Widget Mapping:** Is a JS-based grid configuration approach (mapping components to grid slots dynamically) acceptable?
2.  **Profile/Bio Merge:** Should the combined entity be a new, dedicated `profile-bio-card` component, or managed within `bento-layout.ts` rendering as a single grid element?
3.  **Customization Toggle:** Does the new `ui-mode-toggle` need to manage its own state via the `configsService` directly, or should it remain a stateless wrapper that dispatches events?

## Proposed Changes

We will group changes under layout components, navigation, and configuration refactoring.

---

### Layout Components

#### [MODIFY] [bento-layout.ts](file:///Users/fnc314/Code/websites/fnc314.github.io/src/components/bento-layout/bento-layout.ts)

- Implement a data-driven card mapping to allow easy reordering of grid items.
- Merge `renderProfileCard` and `renderBioCard` into a single responsive structure.
- Reorder `renderConfigsCard` to be the last card in the layout.

#### [NEW] [ui-mode-toggle.ts](file:///Users/fnc314/Code/websites/fnc314.github.io/src/components/ui-mode-toggle/ui-mode-toggle.ts)

Comment: Ensure thorough TSDoc/JSDoc/TypeDoc comments are provided for this new component.

- Extract the `<darkmodetoggle>` logic and necessary styles from `configs-dialog.ts`.
- Ensure it properly integrates with the application theme and configuration services.

---

### Navigation

#### [MODIFY] [nav-component.ts](file:///Users/fnc314/Code/websites/fnc314.github.io/src/components/nav/nav-component.ts)

- Remove dependencies on `@material/web/tabs`.
- Implement simple link buttons with smooth-scrolling functionality for section navigation.

---

### Configuration Refactoring

#### [MODIFY] [configs-dialog.ts](file:///Users/fnc314/Code/websites/fnc314.github.io/src/components/dialog/configs/configs-dialog.ts)

- Refactor `render()` to use the new `ui-mode-toggle` component.
- Remove redundant state logic and styles that have been offloaded to the new component.

---

### Index & Style Foundation

#### [MODIFY] [index.css](file:///Users/fnc314/Code/websites/fnc314.github.io/src/index.css)

- Update CSS to support the new grid order and the combined profile/bio responsiveness (3-column on Desktop/Tablet, stack on Mobile).

## Verification Plan

### Automated Tests

- **New Component Testing**: Write unit tests for `ui-mode-toggle` to ensure functionality and event dispatching.
- **Refactoring Validation**: Update existing `bento-layout.test.ts` to match the new structure.
- Build and verify: `pnpm build`
- Run linting/formatting: `pnpm lint` and `pnpm format`
- Run the test suite: `pnpm test`

### Manual Verification

- Verify the new order of components (config card at the bottom).
- Verify the Profile/Bio combination behaves responsively.
- Confirm tabs are removed and smooth-scrolling via anchors works for section navigation.
- Verify the `ui-mode-toggle` functions correctly within the bento card and updates the theme properly.
