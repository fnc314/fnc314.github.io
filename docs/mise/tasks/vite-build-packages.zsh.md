## `vite:build:packages`

Runs `vite build` across `packages/`.  Mode controlled by `-p` or `--prod` flag


- **Usage**: `vite:build:packages [-p] [-l]`
- **Aliases**: `v:d:pkgs`

### Flags

#### `-p`

Builds for `production`

**Default:** `false`

#### `-l`

Logs the output to `logs/mise/tasks/vite/build/packages/YYYY/MM/DD/HH:MM:SS.log`

**Default:** `false`