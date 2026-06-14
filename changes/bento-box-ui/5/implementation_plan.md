# Implementation Plan - Bento Box UI Overhaul (Phase 5)

## Objective

Refactor `@src/components/bento-layout/bento-layout.ts` to delegate the content rendering of each bento box type to dedicated, reusable components within `@src/components/card/<type>/`. This will improve maintainability, testing, and modularity.

## Proposed Changes

- Create dedicated card components for:
  - Skills (`src/components/card/skills/skills-card.ts`)
  - Education (`src/components/card/education/education-card.ts`)
  - Connect (`src/components/card/connect/connect-card.ts`)
  - Work (`src/components/card/work/work-card.ts`)
  - Code (`src/components/card/code/code-card.ts`)
  - Blog (`src/components/card/blog/blog-card.ts`)
- Each component will:
  - Be a LitElement.
  - Include necessary styles (extending `BentoCard` styles if applicable).
  - Include unit tests using `@open-wc/testing`.
- Update `BentoLayout.renderBentoBox` to use these new components instead of rendering content inline.
- Enhance `bento-card` to include any scrolling styles like `.scrollable-list`
- For each `card` being built, devise scalable experiences to make the single-column mobile layout more appealing and usable.  This means cut down on the nested scrolling, or introduce horizontal scrolling for things like `code-card` or `blog-card`.
- For any `*-card`, make sure that the `scrollable` logic is in sync with the `bento-card`, structurally and that the *content* of a `bento-card` takes up most of the `bento-card` (look at `settings-card` for a good idea of space distribution).
- Review the theme switching mechanism and determine why the `profile-bio-card` does *not* update the image upon theme change.  This worked before.

## Technical Considerations

- Ensure consistent styling by leveraging existing CSS variables and shared styles.
- Maintain existing functionality and responsiveness.
- Update `bento-layout.ts` to import and use the new components.
- Ensure all new components are correctly registered as custom elements.

## Validation

- Verify all components render correctly in the layout.
- Ensure all automated tests pass.
- Run `pnpm lint` and `pnpm format` to ensure code quality and compliance.
