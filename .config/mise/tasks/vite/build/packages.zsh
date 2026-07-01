#!/usr/bin/env zsh
#MISE description="Runs `vite build` across `packages/`.  Mode controlled by `-p` or `--prod` flag"
#MISE alias="v:d:pkgs"
#USAGE flag "-p" help="Builds for `production`" default="false"

set -e

declare MODE="development"
if [[ "${usage_p:=false}" == "true" ]]; then
  MODE="production"
fi

declare PACKAGES=(
  types
  data
  design-tokens
)

for pkg in "${PACKAGES[@]}"; do
  if [ -d "packages/$pkg" ]; then
    rm -rfv "packages/${pkg}/dist"
    NODE_ENV=${MODE} pnpm vite build -m ${MODE} -c "packages/${pkg}/.config/vite/vite.config.ts" -v || {
      echo "Build failed for packages/${pkg}, aborting" >&2
      exit 1
    }
  fi
done