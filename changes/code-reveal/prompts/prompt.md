# PROMPT: Fix 3D Folding Panel Split & Animation Lifecycle in Lit Components

## Objective

Implement a robust 3D folding panel effect (inspired by the CodyHouse 3D Folding Panel article and demo: <https://codyhouse.co/gem/3d-folding-panel>) inside a Lit-based web component architecture (`CodeRepo` and `CodeReveal`).

The primary design intent is to achieve an inline paper-folding effect where the `<code-repo>` card **always splits vertically** into a **TOP** portion and a **BOTTOM** portion when a `<word-tag>` is clicked.

* **Top Portion**: Contains the repository header and description, tilting backward along the horizontal center hinge.
* **Bottom Portion**: Contains the technology tags (`<ul>`), tilting forward along the horizontal center hinge.
* **Middle Section**: The `<code-reveal>` content unfolds modally and inline *directly between* the split top and bottom halves, exactly mirroring the split-fold mechanics shown in the CodyHouse reference.

---

## Technical Context & Files

- **Framework**: Lit (Web Components), TypeScript, Scoped CSS Modules.
* **Repository**: [https://github.com/fnc314/fnc314.github.io](https://github.com/fnc314/fnc314.github.io)
* **Reference Material**: [CodyHouse 3D Folding Panel Article](https://codyhouse.co/gem/3d-folding-panel)
* **Relevant Components**:
  * `CodeRepo` (`code-repo.ts` / `code-repo.styles.ts`): The parent card managing 3D perspective (`perspective: 1400px`), split wrapper sections (`.fold-top` and `.fold-bottom`), and active index state.
  * `CodeReveal` (`code-reveal.ts` / `code-reveal.styles.ts`): The inline expansion panel slotted between the top and bottom fold sections.

---

## Visual Intent & Session Recording References

*For explicit visual clarity, consider the user-provided screen recordings from this session:*

1. **Initial State**: Standard Bento box card layout showing repository details and technology word tags.
2. **Target Fold Action**: Clicking a word tag triggers a vertical split of the card.
   * **Top Half**: Header and summary text tilt back.
   * **Bottom Half**: Technology tags tilt forward.
   * **Unfolding Gap**: The active `<code-reveal>` card emerges smoothly right in the center gap.
3. **Dismissal**: Clicking close dismisses the reveal panel and smoothly collapses the card halves back to flat layout coordinates (`rotateX(0deg)`, `translateY(0px)`).

---

## Current Defects to Fix

1. **State Deadlocking / One-and-Done Bug**:
   * Once a technology tag is clicked, expanded, and closed via its close button, the component locks up. Subsequent clicks on any tech tag fail to trigger `code-reveal` again because internal closing classes (`.is-closing`) or animation states fail to reset cleanly upon unmounting or re-rendering.
   * *Requirement*: Utilize proper lifecycle methods (such as `disconnectedCallback` or reactive property updates) to completely reset internal close states, remove lingering animation classes, and allow infinite open/close cycles per card.

2. **Hinge Split & Animation Synchronization**:
   * Currently, the `.is-folded` skew/translation class on the parent article applies out-of-sync with `<code-reveal>`'s entrance animation, causing the card halves to tilt *after* or *independently* of the panel opening.
   * *Requirement*: Ensure that clicking a tag applies the folded class synchronously, and that `.fold-top` (transform origin: bottom center) and `.fold-bottom` (transform origin: top center) rotate and translate cleanly and simultaneously with the unfolding/folding animation of `code-reveal`.

3. **Restoration on Dismissal**:
   * When the reveal panel is dismissed, the parent card must smoothly reset back to its flat, default layout coordinates without getting stuck in a tilted or askew state.

---

## Expected Deliverables

Provide fully corrected, compiling TypeScript and CSS files for:

1. `code-repo.ts`
2. `code-repo.styles.ts`
3. `code-reveal.ts`
4. `code-reveal.styles.ts`
