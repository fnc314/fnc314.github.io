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
This operates on `my-element.*.ts` files that **already exist** — relocate and rename them (creating the per-element directory via `git mv` to preserve history), but do **not** author new code or extract/refactor existing logic. The only edits to file *contents* are `import`/`export` paths and the JSDoc/TSDoc references that point at moved files.

## Implementation Guidelines

1. **Type & style migration — single-consumer rule only**:
   - Colocate a definition from `src/types` or `src/styles` into a component's folder **only when exactly one `src/components/**` unit imports it** *and* nothing else does.
   - When assessing "nothing else", **ignore `src/index.ts` and barrel `index.ts` files** — a side-effect import there does not count as a second consumer (but still update those paths afterward, see step 4).
   - If a definition has **more than one consumer** — e.g. a component *and* a `src/partials/**` view, or two components — **leave it in its shared location**. Do NOT pull a shared definition into one component's folder; that just creates a new cross-unit import into component internals.
   - Rename relocated files to the colocation convention: `<element>.types.ts` and `<element>.styles.ts`.
   - Update the owning component to `import` the relocated files.

2. **Import resolution**:
   - Use **relative** imports for colocated siblings (e.g. `./my-element.types`, `./my-element.styles`).
   - Use **`@/` aliases** for every non-sibling import. (Siblings are relative; everything else stays aliased — never a `@/` path to a file in the same folder.)

3. **Documentation references (mandatory)**:
   - When a file is moved or renamed, update **every** JSDoc/TSDoc reference that points at it so links still resolve: `{@link …}`, `{@linkcode …}`, `{@inheritDoc …}`, `@see`, `@module`, and any module-path mentions in prose comments — both in the moved file and in any file referencing it.
   - A move is not complete until these references resolve to the new location/symbol.

4. **Clean up**:
   - As directories are emptied, remove any now-unnecessary files and folders (including barrel `index.ts` files).
   - Update `src/index.ts` (and any barrels) to point at the new paths.

## Spaghetti-`import` detection

While migrating, watch for files whose import graph is a smell. Flag a file when **either**:

- **Fan-out** — it imports from **≥3 distinct, unrelated internal (`@/…`) areas**, or
- **Fan-in** — it is imported by **≥4 distinct files** spanning **≥2 unrelated areas**.

Exclude from these counts: external packages (`lit`, `@material/web`, …), a component's own children and `@/data` content, `src/index.ts`, and barrel `index.ts` files.

When a file trips either condition:

- Record the finding in a repo-root **`TODOS.md`** (create it if absent) under an `h2` (`##`) section titled exactly:
  `YYYY-MM-DD @ HH:mm:ss | Component Migration | Spaghetti `import`s`
  (use a real timestamp; one section per audit run — append findings to the existing run's section).
- For each finding, name the file, give the fan-out/fan-in counts and areas, and add a **small decoupling suggestion** — **unless this migration already resolves it** (e.g. the coupling disappears once a single-consumer type is colocated), in which case just say so.
- Distinguish *acceptable* high coupling (e.g. a dependency-free shared leaf like a design-token module) from genuine spaghetti, and mark it as such rather than inventing work.

Record findings in `TODOS.md`, not as inline comments scattered across the source files.
