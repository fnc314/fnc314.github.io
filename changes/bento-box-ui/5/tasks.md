# Tasks: Bento Layout Componentization

- [ ] Create directory structure for new card components:
    - `src/components/card/skills/`
    - `src/components/card/education/`
    - `src/components/card/connect/`
    - `src/components/card/work/`
    - `src/components/card/code/`
    - `src/components/card/blog/`

- [ ] Implement `skills-card` (separate `.ts`, `.styles.ts`, `.test.ts`).
- [ ] Implement `education-card` (separate `.ts`, `.styles.ts`, `.test.ts`).
- [ ] Implement `connect-card` (separate `.ts`, `.styles.ts`, `.test.ts`).
- [ ] Implement `work-card` (separate `.ts`, `.styles.ts`, `.test.ts`).
- [ ] Implement `code-card` (separate `.ts`, `.styles.ts`, `.test.ts`).
- [ ] Implement `blog-card` (separate `.ts`, `.styles.ts`, `.test.ts`).

- [ ] Update `@src/components/bento-layout/bento-layout.ts`:
    - [ ] Import new card components.
    - [ ] Replace inline content rendering with new components in `renderBentoBox`.
    - [ ] Clean up unused imports/data dependencies if any.
