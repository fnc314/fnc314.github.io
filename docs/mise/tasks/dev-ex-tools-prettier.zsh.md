## `dev-ex:tools:prettier`

Invokes `prettier` with `./.config/prettier/prettier.config.mts`


- **Usage**: `dev-ex:tools:prettier [--write] [logLevel] [mode]`
- **Aliases**: `dx:t:prettier`

### Arguments

#### `[logLevel]`

Determines `--log-level` passed to `prettier`

**Choices:**

- `warn`
- `info`
- `debug`

**Default:** `warn`

#### `[mode]`

Passes `--write`` or `--check`` to `prettier`

**Choices:**

- `check`
- `write`

**Default:** `check`

### Flags

#### `--write`

Passes `--write` to `prettier`

**Default:** `false`