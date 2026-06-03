#!/usr/bin/env sh
#MISE description="Run dx-refresh"
#MISE alias="dxr"
#USAGE arg "[logstep]" help="Creates a .log file timestamped by execution point in ./logs/<choice>/<timestamp>.log" default="none" {
#USAGE   choices "none" "log-all" "mise-tasks" "typescript-types" "pwrs/cem" "cem-analyze" "wca" "typedoc"
#USAGE }

local LOG_STEP="${usage_logstep:=none}"
local MASTER_LOG

if [[ "$LOG_STEP" == "log-all" ]]; then
  MASTER_LOG="./logs/dx-refresh/$(date +%Y%m%d-%H%M%S).log"
  mkdir -pv "./logs/dx-refresh"
  exec &> >(tee -a "$MASTER_LOG")
fi

create_log() {
  if [ "$1" != "none" ]; then
    if [ ! -d "./logs/$1" ]; then
      mkdir -pv "./logs/$1"
    fi
    local log_file="./logs/$1/$(date +%Y%m%d-%H%M%S).log"
    if [[ "$LOG_STEP" == "log-all" ]]; then
      exec &> >(tee -a "$MASTER_LOG" > "$log_file")
    else
      exec &> "$log_file"
    fi
  fi
}

echo "Running dx-refresh"
echo
rm -rfv docs
echo

[[ "$LOG_STEP" == "mise-tasks" || "$LOG_STEP" == "log-all" ]] && create_log "mise-tasks"
echo "Recreate Mise Task Docs"
mkdir -p docs/mise/tasks
mise generate task-docs -m -o docs/mise/tasks
echo

[[ "$LOG_STEP" == "typescript-types" || "$LOG_STEP" == "log-all" ]] && create_log "typescript-types"
echo "Recreate TypeScript \`.d.ts\` files"
pnpm tsc --declaration --declarationMap false -p .
echo

[[ "$LOG_STEP" == "pwrs/cem" || "$LOG_STEP" == "log-all" ]] && create_log "pwrs/cem"
echo "dx:@pwrs:cem:generate"
pnpm run dx:@pwrs:cem:generate
echo

[[ "$LOG_STEP" == "cem-analyze" || "$LOG_STEP" == "log-all" ]] && create_log "cem-analyze"
echo "dx:cem-analyze"
pnpm run dx:cem-analyze
echo

[[ "$LOG_STEP" == "wca" || "$LOG_STEP" == "log-all" ]] && create_log "wca"
echo "dx:wca"
pnpm run dx:wca
echo

[[ "$LOG_STEP" == "typedoc" || "$LOG_STEP" == "log-all" ]] && create_log "typedoc"
echo "dx:typedoc"
pnpm run dx:typedoc
echo
echo "DONE"

# See https://mise.jdx.dev/tasks/file-tasks.html for more information