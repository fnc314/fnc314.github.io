## `sites:portfolio:development`

Runs `vite build` using `development` for mode AND `NODE_ENV`


- Depends: vite:build:packages

- **Usage**: `sites:portfolio:development [FLAGS]`
- **Aliases**: `s:p:b:d`

### Flags

#### `-l`

Logs the output to `logs/mise/tasks/sites/portfolio/development/YYYY/MM/DD/HH:MM:SS.log`

**Default:** `false`

#### `-w`

Passes `-w` to `vite build`

**Default:** `false`

#### `-d`

Passes `-d` to `vite build`

**Default:** `false`