## `vite:build:development`

Runs `vite build` using `development` for mode AND `NODE_ENV`


- Depends: vite:build:packages

- **Usage**: `vite:build:development [FLAGS]`
- **Aliases**: `v:b:d`

### Flags

#### `-w`

Passes `-w` to `vite build`

**Default:** `false`

#### `-d`

Passes `-d` to `vite build`

**Default:** `false`

#### `-l`

Logs the output to `logs/mise/tasks/vite/build/development/YYYY/MM/DD/HH:MM:SS.log`

**Default:** `false`