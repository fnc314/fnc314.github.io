#!/usr/bin/env zsh
#MISE description="Runs `vite build` using `production` for mode AND `NODE_ENV` across `packages/`"
#MISE alias="v:d:pkgs"

for pkg in types data design-tokens; do
  if [ -d "packages/$pkg" ]; then
    NODE_ENV=production pnpm vite build -m production -c "packages/${pkg}/.config/vite/vite.config.ts" -v
  fi
done