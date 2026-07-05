#!/usr/bin/env zsh
#MISE description="Runs `vite build` across `packages/`.  Mode controlled by `-p` or `--prod` flag"
#MISE alias="v:d:pkgs"
#USAGE flag "-p" help="Builds for `production`" default="false"
#USAGE flag "-l" help="Logs the output to `logs/mise/tasks/vite/build/packages/YYYY/MM/DD/HH:MM:SS.log`" default="false"

typeset PACKAGES_DIR="packages"
typeset VITE_CONFIG_FILEPATH=".config/vite/vite.config.ts"

typeset LOG_DIR="logs/mise/tasks/vite/build/packages"
# Use new directory structure for date logging
typeset LOG_FILE_PATH
LOG_FILE_PATH="$(date +%Y/%m/%d/%H:%M:%S).log"
typeset LOG_FILE="$LOG_DIR/$LOG_FILE_PATH"

typeset MODE="development"
if [[ "${usage_p:=false}" == "true" ]]; then
  MODE="production"
fi

export NODE_ENV="${MODE}"

typeset PACKAGES=(
  types
  data
  design-tokens
  services
  components
)

typeset BASE_VITE_PARAMS=(
  -m "${MODE}"
  -v
)

typeset VITE_PARAMS=(
  "${BASE_VITE_PARAMS[@]}"
)

# Ensure full nested log directory exists if logging is enabled
if [[ "${usage_l:=false}" == "true" ]]; then
  mkdir -pv "$(dirname "$LOG_FILE")"
fi

for pkg in "${PACKAGES[@]}"; do
  if [[ -d "${PACKAGES_DIR}/${pkg}" ]]; then

    if [[ -d "${PACKAGES_DIR}/${pkg}/dist" ]]; then
      rm -rfv "${PACKAGES_DIR}/${pkg}/dist"
    fi

    VITE_PARAMS+=(
      -c "${PACKAGES_DIR}/${pkg}/${VITE_CONFIG_FILEPATH}"
    )

    printf "Vite Params for %s/%s: %s\n" "${PACKAGES_DIR}" "${pkg}" "${VITE_PARAMS[@]}"

    if [[ "${usage_l:=false}" == "true" ]]; then
      # Append to the same log file for all packages
      pnpm vite build "${VITE_PARAMS[@]}" 2>&1 | tee -a "$LOG_FILE"
      if (( "${pipestatus[1]}" != 0 )); then
        print -r -- "Build failed for ${PACKAGES_DIR}/${pkg}, aborting" >&2
        exit 1
      fi
    else
      pnpm vite build "${VITE_PARAMS[@]}" || {
        echo "Build failed for ${PACKAGES_DIR}/${pkg}, aborting" >&2
        exit 1
      }
    fi
  fi
  VITE_PARAMS=("${BASE_VITE_PARAMS[@]}")
done