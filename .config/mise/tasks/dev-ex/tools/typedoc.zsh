#!/usr/bin/env zsh
#MISE description="Runs `typedoc`"
#MISE alias="dx:t:typedoc"
#USAGE flag "-l" help="Logs the output to `logs/mise/tasks/dev-ex/tools/typedoc/YYYY/MM/DD/HH:MM:SS.log`" default="false"
set -euo pipefail

typeset TYPEDOC_ARGS=(
  --options ./.config/typedoc/typedoc.config.mjs
)
typeset LOG_DIR="logs/mise/tasks/dev-ex/tools/typedoc"
typeset LOG_FILE_PATH
LOG_FILE_PATH="$(date +%Y/%m/%d/%H:%M:%S).log"
typeset LOG_FILE="$LOG_DIR/$LOG_FILE_PATH"


if [[ "${usage_l:=false}" == "true" ]]; then
mkdir -pv "$(dirname "$LOG_FILE")"
  pnpm typedoc "${TYPEDOC_ARGS[@]}" 2>&1 | tee -a "$LOG_FILE"
else
  pnpm typedoc "${TYPEDOC_ARGS[@]}"
fi