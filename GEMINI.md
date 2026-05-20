# Project: fnc314.github.io

This project is the personal website of Franco N. Colaizzi. It is a sophisticated, web-component-based portfolio built using [Lit](https://lit.dev/) and [Material Design Web Components](https://github.com/material-components/material-web).

## Architecture

- **Framework:** Lit (Web Components)
- **Design System:** Material Design 3
- **Build System:** Rollup, with Vite-related tooling for development and PWA support.
- **Language:** TypeScript

## Key Commands

### Development

- `pnpm serve`: Starts the development server (`web-dev-server`).
- `pnpm build:website:watch`: Builds the project in watch mode for local development.

### Build & Deploy

- `pnpm build`: Executes the production build via Rollup.
- `pnpm deploy`: Cleans the `website/` directory and performs a production build.

### Linting & Formatting

- `pnpm lint`: Runs `lit-analyzer` and `eslint`.
- `pnpm format`: Runs `prettier` to format source files.

### Testing

- `pnpm test`: Runs the test suite using `web-test-runner` in both development and production modes.

### Documentation & Metadata

- `pnpm cem-analyze`: Generates/updates the Custom Elements Manifest (CEM).
- `pnpm typedoc:gen`: Generates TypeDoc documentation.
- `pnpm dx:wca`: Runs a comprehensive suite of Web Component Analyzer tasks (JSON, Markdown, and VS Code support).

## Development Conventions

- **File Structure:** Components are organized within `src/components/`, with data residing in `src/data/` and themes in `src/theme/`.
- **Styling:** Primarily uses Material Design variables and custom CSS properties. Tailwind CSS is used for some utility styling.
- **Standards:** Strictly TypeScript, using Lit conventions for web components.
- **CEM:** Custom Elements Manifest is utilized extensively to document component APIs, which powers IDE support and documentation generation.

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.

<!--VITE PLUS END-->