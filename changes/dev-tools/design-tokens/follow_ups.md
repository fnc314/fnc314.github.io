# Design Token Migration Follow-ups

This document tracks non-compliant CSS values that require manual migration to use the new design tokens from `@fnc314/design-tokens`.

## Violations
- [ ] Run `mise x -- pnpm stylelint "src/**/*.{css,ts}"` (once configuration issues are resolved) to identify all remaining violations.
- [ ] For each violation:
    - Identify the component/file.
    - Identify the hardcoded value (e.g., color hex code, pixel spacing).
    - Map it to the corresponding token in `@fnc314/design-tokens`.
    - Apply the fix.
