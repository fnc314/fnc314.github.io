#!/usr/bin/env zsh
#MISE description="Runs `vite build` using `development` for mode AND `NODE_ENV`"
#MISE alias="s:p:b:d"
#MISE depends=["vite:build:packages"]
#MISE env={ NODE_ENV = "development" }
#USAGE flag "-l" help="Logs the output to `logs/mise/tasks/sites/portfolio/development/YYYY/MM/DD/HH:MM:SS.log`" default="false"
#USAGE flag "-w" help="Passes `-w` to `vite build`" default="false"
#USAGE flag "-d" help="Passes `-d` to `vite build`" default="false"

set -euo pipefail

typeset LOG_DIR="logs/mise/tasks/sites/portfolio/development"
# Use new directory structure for date logging
typeset LOG_FILE_PATH
LOG_FILE_PATH="$(date +%Y/%m/%d/%H:%M:%S).log"
typeset LOG_FILE="$LOG_DIR/$LOG_FILE_PATH"

typeset -a VITE_FLAGS
VITE_FLAGS=(
  -m "${NODE_ENV}"
  -c ./sites/portfolio/.config/vite/vite.config.ts
)

if [[ "${usage_w:=false}" == "true" ]]; then
  VITE_FLAGS+=(
    -w
  )
fi

if [[ "${usage_d:=false}" == "true" ]]; then
  VITE_FLAGS+=(
    -d
  )
fi

# Ensure full nested log directory exists if logging is enabled
if [[ "${usage_l:=false}" == "true" ]]; then
  mkdir -pv "$(dirname "$LOG_FILE")"
  pnpm vite build "${VITE_FLAGS[@]}" 2>&1 | tee -a "$LOG_FILE"
else
  pnpm vite build "${VITE_FLAGS[@]}"
fi
