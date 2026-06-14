## `dev-ex:tools:eslint`

Runs `eslint`


- **Usage**: `dev-ex:tools:eslint [FLAGS] [print]`
- **Aliases**: `dx:t:eslint`

### Arguments

#### `[print]`

Passes `--print-config` and the given file to `eslint`

**Default:** ``

### Flags

#### `-d --debug`

Passes `--debug` to `eslint`

**Default:** `false`

#### `--fix`

Passes `--fix` to `eslint`

**Default:** `false`

#### `--inspector`

Passes `--inspect-config` to `eslint`

**Default:** `false`

#### `--log [format]`

Creates a new file of type `format` in `./logs/eslint/{YYYYMMDD}/{format}`

**Choices:**

- `none`
- `json`
- `html`

**Default:** `none`

#### `--stats`

Passes `--stats` to `eslint`

**Default:** `false`