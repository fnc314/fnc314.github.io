# Project: fnc314.github.io

This project is the personal website of Franco N. Colaizzi. It is a sophisticated, web-component-based portfolio built using [Lit](https://lit.dev/) and [Material Design Web Components](https://github.com/material-components/material-web).

## Architecture

- **Framework:** Lit (Web Components)
- **Design System:** Material Design 3
- **Build System:** Mise-driven, Vite-orchestrated builds where CLIs are wrapped in tasks from relative `.mise/tasks/` directories and sub-directories. Dependencies are managed by PNPM and exclusively use `--save-catalog-name=dependencies|devDependencies|...` in call dependency installs
- **Language:** TypeScript

## Design System

Design tokens are managed in a dedicated `@fnc314/design-tokens` package:

- **Orchestration:** All design token builds are performed via `vite` from within the `@fnc314/design-tokens/` directory.
- **Workflow:** Standardized through `mise` tasks residing in `./.mise/tasks/` or `design-tokens/.mise/tasks/`. No `mise` task should modify any `src` folder located "above" its definition directory.
- **Enforcement:** Exclusive use of design tokens (as CSS variables) is strictly enforced via `stylelint` (leveraging `stylelint-value-no-udl`). Build breaks on violations.

## Key Commands

### Documentation & Metadata

- `pnpm cem-analyze`: Generates/updates the Custom Elements Manifest (CEM).
- `pnpm typedoc:gen`: Generates TypeDoc documentation.
- `pnpm dx:wca`: Runs a comprehensive suite of Web Component Analyzer tasks (JSON, Markdown, and VS Code support).

## Development Conventions

- **File Structure:** Components are organized within `src/components/`, with data residing in `src/data/`
- **Styling:** Primarily uses Material Design variables and custom CSS properties. Tailwind CSS is used for some utility styling.
- **Standards:** Strictly TypeScript, using Lit conventions for web components.
- **CEM:** Custom Elements Manifest is utilized extensively to document component APIs, which powers IDE support and documentation generation.
- **TypeDoc:** Document everything extensively with `JSDoc`/`TSDoc` tags and annotations
