## `vite:build:production`

Runs `vite build` using `production` for mode AND `NODE_ENV`


- Depends: vite:build:packages -p

- **Usage**: `vite:build:production [FLAGS]`
- **Aliases**: `v:d:p`

### Flags

#### `-w`

Passes `-w` to `vite build`

**Default:** `false`

#### `-d`

Passes `-d` to `vite build`

**Default:** `false`

#### `-l`

Logs the output to `logs/mise/tasks/vite/build/production/YYYY/MM/DD/HH:MM:SS.log`

**Default:** `false`