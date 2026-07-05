## `dev-ex:tools:@pwrs:cem:generate`

Invokes `pnpm cem generate` across packages


- Depends: vite:build:packages

- **Usage**: `dev-ex:tools:@pwrs:cem:generate [FLAGS]`
- **Aliases**: `dx:t:@pwrs:cem:generate`

### Flags

#### `-w`

Passes `--watch` to `pnpm cem generate`

**Default:** `false`

#### `-l`

Logs the output to `logs/mise/tasks/dev-ex/tools/@pwrs/cem/generate/YYYY/MM/DD/HH:MM:SS.log`

**Default:** `false`

#### `-d`

Enables debug logging via `-vv` flag to `pnpm cem`

**Default:** `false`

#### `--trace`

Enables trace logging via `-vvv` flag to `pnpm cem`

**Default:** `false`