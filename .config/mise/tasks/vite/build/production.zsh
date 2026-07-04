#!/usr/bin/env zsh
#MISE description="Runs `vite build` using `production` for mode AND `NODE_ENV`"
#MISE alias="v:d:p"
#MISE depends=["vite:build:packages -p"]
#USAGE flag "-w" help="Passes `-w` to `vite build`" default="false"
#USAGE flag "-d" help="Passes `-d` to `vite build`" default="false"
#USAGE flag "-l" help="Logs the output to `logs/mise/tasks/vite/build/production/YYYY/MM/DD/HH:MM:SS.log`" default="false"

export NODE_ENV="production"

declare LOG_DIR="logs/mise/tasks/vite/build/production"
# Use new directory structure for date logging
declare LOG_FILE_PATH="$(date +%Y/%m/%d/%H:%M:%S).log"
declare LOG_FILE="$LOG_DIR/$LOG_FILE_PATH"

typeset -a VITE_FLAGS
VITE_FLAGS=(
  -m ${NODE_ENV}
  -c ./.config/vite/vite.config.ts
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