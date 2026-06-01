---
name: component-migration
description: A skill to migrate and colocate component-related files (logic, types, and styles) into a unified directory structure using kebab-case filenames for the main entry file.
---

# Skill: Component File Colocation Migration

**Goal**: Standardize the `src/components` directory by moving logic, types, and styles into individual component folders using explicit kebab-case naming for the entry file.

## Target Structure
For a component named `my-element`:
```
src/components/group/my-element/
├── my-element.ts        # Main component logic (Kebab-case, NOT index.ts)
├── my-element.types.ts  # Interfaces and types
└── my-element.styles.ts # Lit styles (extracted)
```
where any `my-element.*.ts` file _already exists_.  There is no need to create ne files and extract/refactor existing code, we only aim to make changes which affect `import` blocks and file paths.

## Implementation Guidelines

1. **Type Migration**:
   - Relocate any definition from `src/types` and `src/styles` relating to a `src/components` into a new directory for that component.
   - Update the component to `import` these locally.

2. **Import Resolution**:
   - Prioritize relative imports for colocated siblings (e.g., `./my-element.types.ts` or `./my-element.styles.ts`).
   - Maintain `@/` aliases for all `import`s.

3. **Clean Up**:
   - As directories are emptied, remove any now-unnecessary files and folders (including barrel `index.ts` files).
   - Ensure `src/index.ts` is updated as necessary.
