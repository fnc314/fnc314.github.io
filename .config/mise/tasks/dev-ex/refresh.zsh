#!/usr/bin/env zsh
#MISE description="Run dx-refresh"
#MISE alias="dxr"
#USAGE arg "[logstep]" help="Creates a .log file timestamped by execution point in ./logs/<choice>/<timestamp>.log" default="none" {
#USAGE   choices "none" "log-all" "mise-tasks" "pwrs/cem" "cem-analyze" "wca" "typedoc"
#USAGE }

declare LOG_STEP="${usage_logstep:=none}"
declare MASTER_LOG

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

# [[ "$LOG_STEP" == "mise-tasks-design-tokens" || "$LOG_STEP" == "log-all" ]] && create_log "mise-tasks/design-tokens"
# echo "Recreate Mise Task Docs - Design Tokens"
# mkdir -p docs/mise/tasks/design-tokens
# mise generate task-docs -m -o docs/mise/tasks/design-tokens -C design-tokens
# echo

# [[ "$LOG_STEP" == "typescript-types" || "$LOG_STEP" == "log-all" ]] && create_log "typescript-types"
# echo "Recreate TypeScript \`.d.ts\` files"
# pnpm tsc --declaration --declarationMap false -p ./tsconfig.no-test.json
# echo

[[ "$LOG_STEP" == "cem-analyze" || "$LOG_STEP" == "log-all" ]] && create_log "cem-analyze"
echo "dx:cem-analyze"
NODE_ENV=development pnpm custom-elements-manifest analyze --config ./.config/custom-elements-manifest/custom-elements-manifest.config.mjs
echo

[[ "$LOG_STEP" == "pwrs/cem" || "$LOG_STEP" == "log-all" ]] && create_log "pwrs/cem"
echo "dx:@pwrs:cem:generate"
NODE_ENV=development pnpx @pwrs/cem generate --config .config/@pwrs/cem/cem.yaml -vvv -p .
echo

[[ "$LOG_STEP" == "wca" || "$LOG_STEP" == "log-all" ]] && create_log "wca"
echo "dx:wca"
pnpm web-component-analyzer "packages/{components,data,design-tokens,services,types}/lib/**/*.ts" --outFile ./docs/wca/json/web-component-analyzer.json --format json
pnpm web-component-analyzer "packages/{components,data,design-tokens,services,types}/lib/**/*.ts" --outDir ./docs/wca/json --format json
pnpm web-component-analyzer "packages/{components,data,design-tokens,services,types}/lib/**/*.ts" --outFile ./docs/wca/markdown/README.md --format markdown
pnpm web-component-analyzer "packages/{components,data,design-tokens,services,types}/lib/**/*.ts" --outDir ./docs/wca/markdown --format markdown
pnpm web-component-analyzer "packages/{components,data,design-tokens,services,types}/lib/**/*.ts" --outDir .vscode/wca --format vscode
echo

[[ "$LOG_STEP" == "typedoc" || "$LOG_STEP" == "log-all" ]] && create_log "typedoc"
echo "dx:typedoc"
pnpm typedoc --options ./.config/typedoc/typedoc.config.mjs
echo
echo "DONE"

# See https://mise.jdx.dev/tasks/file-tasks.html for more information