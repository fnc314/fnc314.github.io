#!/usr/bin/env zsh
#MISE description="Runs `vite build` across `packages/`.  Mode controlled by `-p` or `--prod` flag"
#MISE alias="v:d:pkgs"
#USAGE flag "-p" help="Builds for `production`" default="false"

declare MODE="development"
if [[ "${usage_p:=false}" == "true" ]]; then
  MODE="production"
fi

for pkg in types data design-tokens; do
  if [ -d "packages/$pkg" ]; then
    NODE_ENV=${MODE} pnpm vite build -m ${MODE} -c "packages/${pkg}/.config/vite/vite.config.ts" -v
  fi
done