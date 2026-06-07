# Contributing to fnc314.github.io

Thank you for contributing to this project!

## Development Standards

- **Design Tokens:** All design-related values (colors, spacing, typography) MUST be sourced from the `@fnc314/design-tokens` package as CSS custom properties.
- **Enforcement:** `stylelint` is configured to enforce the exclusive use of these design tokens. If you encounter a build failure due to `stylelint`, ensure you are using the correct design token for the property you are styling.
- **Task Orchestration:** Use `mise` for all CLI tasks. Task definitions are located in `.mise/tasks/`.
- **TypeScript:** Use strict TypeScript. Lit components should follow established patterns.

## Design Tokens Workflow

1. **Adding/Updating Tokens:** If you need new tokens, propose them within the `@fnc314/design-tokens` package. Do not hardcode new design values in the main application.
2. **Linting:** Before submitting, run the design token lint check:
   ```bash
   mise run lint-tokens
   ```
3. **Regenerating Tokens:** If you make changes to token source JSON files, regenerate the tokens:
   ```bash
   mise run gen-tokens
   ```

## Documentation

- **Components:** Document all public APIs (properties, slots, events) using TSDoc/JSDoc tags.
- **Metadata:** The Custom Elements Manifest (CEM) is auto-generated. Run `pnpm cem-analyze` if you modify component interfaces.
