#!/usr/bin/env zsh
#MISE description="Runs `vite build` across `packages/`.  Mode controlled by `-p` or `--prod` flag"
#MISE alias="v:d:pkgs"
#USAGE flag "-p" help="Builds for `production`" default="false"

set -e

declare PACKAGES_DIR="packages"
declare VITE_CONFIG_FILEPATH=".config/vite/vite.config.ts"

declare MODE="development"
if [[ "${usage_p:=false}" == "true" ]]; then
  MODE="production"
fi

declare PACKAGES=(
  types
  data
  design-tokens
  services
  components
)

declare BASE_VITE_PARAMS=(
  -m "${MODE}"
  -v
)

declare VITE_PARAMS=(
  "${BASE_VITE_PARAMS[@]}"
)

for pkg in "${PACKAGES[@]}"; do
  if [ -d "${PACKAGES_DIR}/${pkg}" ]; then
    rm -rfv "${PACKAGES_DIR}/${pkg}/dist"
    VITE_PARAMS+=(
      -c "${PACKAGES_DIR}/${pkg}/${VITE_CONFIG_FILEPATH}"
    )
    printf "Vite Params for ${PACKAGES_DIR}/${pkg}: %s\n" "${VITE_PARAMS[@]}"
    NODE_ENV=${MODE} pnpm vite build "${VITE_PARAMS[@]}" || {
      echo "Build failed for ${PACKAGES_DIR}/${pkg}, aborting" >&2
      exit 1
    }
  fi
  VITE_PARAMS=("${BASE_VITE_PARAMS[@]}")
done