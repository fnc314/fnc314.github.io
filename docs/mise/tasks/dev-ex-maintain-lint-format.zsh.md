## `dev-ex:maintain:lint-format`

- **Usage**: `dev-ex:maintain:lint-format [suite] [target]`
- **Aliases**: `dx:m:lf`

Runs the linter and formatter across `src`

### Arguments

#### `[suite]`

Which maintenaince suite to run: linter, formatter, or full

**Choices:**

- `linter`
- `formatter`
- `full`

**Default:** `full`

#### `[target]`

Determine which source files are targeted: js, css, or all

**Choices:**

- `js`
- `css`
- `all`

**Default:** `all`