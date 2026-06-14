# Grid Layout and Accessibility (A11y) Reference Guide

Juggling the flexibility of CSS Grid with accessibility requirements is a classic "Source Order vs. Visual Order" problem. In a Bento layout, where items shift significantly across breakpoints, it is easy to create a confusing experience for screen reader users or keyboard navigators.

## 1. The Core Conflict: Source Order vs. Visual Order

Keyboard navigation (the Tab key) and screen readers follow the **DOM order**, not the visual CSS Grid layout.

* **The Risk:** If your data array lists "Settings" first, but your CSS Grid places it in the bottom-right corner of the desktop layout, a keyboard user will start their journey at the bottom of the page.
* **The Rule:** Your configuration array should always represent the **logical reading order**. If a user should see/interact with the "Profile" card first, it must be the first entry in your data object, regardless of where it sits on the grid visually.

## 2. A11y & Grid: The "Gold Standard" Guide

### Rule A: Logical Sequence (WCAG 1.3.2 & 2.4.3)

Ensure the sequence of information remains meaningful without the grid.

* **Action:** If you disable CSS entirely, does the page still make sense?
* **Implementation:** Keep your `_bentoBoxConfigs` array sorted by importance/logical flow. Use your grid placement logic only to move items visually, not to re-prioritize them in the DOM.

### Rule B: Avoid `grid-auto-flow: dense`

The `dense` packing algorithm is tempting for Bento layouts because it fills in gaps. However, it is a primary culprit for shuffling elements out of source order.

* **The Problem:** `dense` can take an element that appears later in the DOM and pop it into a visual gap earlier in the layout.
* **The Fix:** Explicitly define your `row` and `column` starts/ends (as is currently done in the config) to maintain a predictable tab path.

### Rule C: Tabindex is a Smell

If you find yourself tempted to use `tabindex` values greater than 0 to "fix" focus order, you have a DOM order problem.

* **The Fix:** Reorder the entries in your configuration array until the default focus order matches the visual flow of the grid as closely as possible.

## 3. Maintainable Format Strategy

To keep `bento-layout.types.ts` maintainable while respecting DOM precedence, use a **"DOM-First, Grid-Second"** approach.

### The "Sequence over Placement" Pattern

Instead of a flat lookup object, keep the **Array** as the source of truth for the DOM.

```typescript
export const BentoBoxConfigs: ABentoBoxConfig[] = [
  {
    type: "profile-photo-bio", // 1. Important info first in DOM
    placement: {
        desktop: { row: { start: 1, end: 3 }, column: { start: 1, end: 5 } },
        // ...
    }
  },
  {
    type: "work", // 2. Logical next step
    placement: { /* ... */ }
  }
];
```

## 4. Detecting "Overlap" Issues

Since bento layouts often involve manual coordinate definitions, there is a risk of overlapping areas. While CSS Grid allows this, screen readers might interpret overlapping content in a way that feels disconnected.

* **Audit Tool:** Use the browser's Accessibility Tree (Chrome DevTools -> Elements -> Accessibility) to see how the browser interprets the layout.
* **Overlap Check:** If two components occupy the same row/column intersection, ensure it is intentional (e.g., a background decoration). Data-driven content overlaps are generally an error.

## 5. Recommended Reading

* **MDN:** CSS Grid Layout and Accessibility
* **WCAG:** Success Criterion 1.3.2 (Meaningful Sequence)
* **The A11y Project:** Grid and Flexbox
