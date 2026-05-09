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
