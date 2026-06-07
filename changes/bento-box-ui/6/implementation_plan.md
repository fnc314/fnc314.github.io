# Implementation Plan - Bento Box UI Overhaul (Phase 6)

## Objective

We aim to extend existing `bento-card`-based components by integrating `<details>` and `<summary>` HTML tags, coupled with enhanced animations (a la the removed [`connect-dialog.ts`](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/dialog/connect/connect-dialog.ts#L87)).  We will, also, refine the general layout mechanisms of `bento-layout` to more efficiently use the design concept of bento boxes.  We will investigate `bento-card`-specific navigation/stacking to improve how content like `code-card`, `blog-card`, and `word-card` are displayed.  The goal is to handle *a lot* of content in *a little* amount of space.

## Proposed Changes

1. Exhance `bento-card` functionality by integrating with `<details>` and `<summary>` HTML tags.  Use the former [`connect-dialog`](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/dialog/connect/connect-dialog.ts#L87) for animation enhancements.  Each `bento-card` used across `bento-layout` should operate independently, and there should be an explicit `@propery` available to drive initial rendering (`closed` or `open`) on page load.  Use the same `md-icon` solution from `connect-dialog` as visual indicator of the collapsed/expanded state of a given `bento-card`
2. Review `bento-layout.types.ts`, particularly the `BentoBoxConfigs` function.  This function is meant to provide the ordering and placement of `bento-box`-based widgets within the larger `bento-layout` entity.  We want to devise an enhancement to this solution which still:

- respects the variations of `--breakpoint-label`
- includes the `collapsed`/`expanded` state of a given widget
- leverages `grid-template-areas` (maybe?)

Naturally, these changes will also come with changes to `bento-layout`'s styles
3. For now, suppress (but *do not remove*) the subtle hover/focus effect which each `bento-card` exhibits.  Do not remove the functionality, just suppress it behind a conditional style controllable via a `@property`.

## Technical Considerations

- Use `mise run vite:build:development` to test changes.  There's already a server for `dist/vite/development` running at `http://localhost:9999`
- Where appropriate, ensure the use of `@fnc314/design-tokens` is strictly adhered to

## Validation

- Project should properly build via `mise run vite:build:[development,production]`
- Stylelint should be satisfied via `mise run dev-ex:design-tokens:lint`
- Appropriate `*.test.ts` files are updated (there is no runner, yet, so do not worry about executing them or having them pass, just have them *up-to-date*)
