## `sites:portfolio:production`

Runs `vite build` using `production` for mode AND `NODE_ENV`


- Depends: vite:build:packages -p

- **Usage**: `sites:portfolio:production [FLAGS]`
- **Aliases**: `s:p:b:p`

### Flags

#### `-l`

Logs the output to `logs/mise/tasks/sites/portfolio/production/YYYY/MM/DD/HH:MM:SS.log`

**Default:** `false`

#### `-w`

Passes `-w` to `vite build`

**Default:** `false`

#### `-d`

Passes `-d` to `vite build`

**Default:** `false`