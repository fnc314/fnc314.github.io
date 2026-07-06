#!/usr/bin/env zsh
#MISE description="Invokes `pnpm cem generate` across packages"
#MISE alias="dx:t:@pwrs:cem:generate"
#MISE depends=["vite:build:packages"]
#USAGE flag "-w" help="Passes `--watch` to `pnpm cem generate`" default="false"
#USAGE flag "-l" help="Logs the output to `logs/mise/tasks/dev-ex/tools/@pwrs/cem/generate/YYYY/MM/DD/HH:MM:SS.log`" default="false"
#USAGE flag "-d" help="Enables debug logging via `-vv` flag to `pnpm cem`" default="false"
#USAGE flag "--trace" help="Enables trace logging via `-vvv` flag to `pnpm cem`" default="false"
set -euo pipefail

printf "Usage_trace %s\nUsage_d %s\nUsage_w\nLog %s\n" "${usage_trace}" "${usage_d}" "${usage_w}" "${usage_l}"

typeset LOG_DIR="logs/mise/tasks/dev-ex/tools/@pwrs/cem/generate"
# Use new directory structure for date logging
typeset LOG_FILE_PATH
LOG_FILE_PATH="$(date +%Y/%m/%d/%H:%M:%S).log"
typeset LOG_FILE="$LOG_DIR/$LOG_FILE_PATH"
export NODE_ENV=development

typeset PACKAGES=(
  types
  data
  design-tokens
  services
  components
)

typeset SHARED_CONFIG="packages/.config/@pwrs/cem/cem.yaml"
typeset DOCS_DIR="docs/@pwrs/cem/packages"

typeset BASE_CEM_ARGS=(
  --config "${SHARED_CONFIG}"
)

if [[ "${usage_w:=false}" == "true" ]]; then
  BASE_CEM_ARGS+=(
    --watch
  )
fi

if [[ "${usage_trace:=false}" == "true" ]]; then
  BASE_CEM_ARGS+=(
    -vvv
  )
elif [[ "${usage_d:=false}" == "true" ]]; then
  BASE_CEM_ARGS+=(
    -vv
  )
else
  BASE_CEM_ARGS+=(
    -v
  )
fi

# Ensure full nested log directory exists if logging is enabled
if [[ "${usage_l:=false}" == "true" ]]; then
  mkdir -pv "$(dirname "$LOG_FILE")"
fi

for pkg in "${PACKAGES[@]}"; do
  if [[ -d "packages/${pkg}" ]]; then
    typeset CEM_GENERATE_ARGS=(
      "${BASE_CEM_ARGS[@]}"
      -p "packages/${pkg}"
    )

    printf "\nRunning cem generate for packages/%s...\n" "${pkg}"
    printf "CEM_GENERATE_ARGS %s\n" "${CEM_GENERATE_ARGS[@]}"

    if [[ "${usage_l:=false}" == "true" ]]; then
      # Append to the same log file for all packages
      pnpm cem generate "${CEM_GENERATE_ARGS[@]}" 2>&1 | tee -a "$LOG_FILE" || {
        printf "Failed to generate"
        exit 1
      }
    else
      pnpm cem generate "${CEM_GENERATE_ARGS[@]}" || {
        printf "Failed to generate"
        exit 1
      }
    fi

    # Copy the generated manifest to the central docs directory for the LSP
    mkdir -p "${DOCS_DIR}/${pkg}"
    cp "packages/${pkg}/custom-elements.json" "${DOCS_DIR}/${pkg}/custom-elements.json"
    printf "Copied manifest to %s\n" "${DOCS_DIR}/${pkg}/custom-elements.json"
  fi
done