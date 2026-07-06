#!/usr/bin/env zsh
#MISE description="Invokes `style-dictionary` with `./.config/style-dictionary/config.ts`"
#MISE alias="dx:t:style-dictionary"
#USAGE arg "mode, m" help="The `mode` flag for `vite`" default="development" {
#USAGE   choices "development" "production"
#USAGE }
#USAGE flag "-l" help="Writes the output to a file under `logs`" default="false"

set -euo pipefail

typeset LOG_DIR="logs/${MISE_TASK_FILE/$~MISE_MONOREPO_ROOT\/\.config\//}"
LOG_DIR="${LOG_DIR/".zsh"/}"
typeset LOG_FILE
LOG_FILE="${LOG_DIR}/$(date +%Y/%m/%d/%H:%M:%S).log"

typeset -a STYLE_DICTIONARY_CLI
STYLE_DICTIONARY_CLI=(
  --verbose
  --config ./.config/style-dictionary/config.ts
)

printf "Params for style-dictionary %s\n" "${STYLE_DICTIONARY_CLI[@]}"

if [[ "${usage_l:=false}" == "true" ]]; then
  mkdir -pv "$(dirname "$LOG_FILE")"
  printf "Cleaning design tokens for @fnc314/packages.design-tokens...\n\n"
  pnpm style-dictionary clean "${STYLE_DICTIONARY_CLI[@]}" 2>&1 | tee -a "${LOG_FILE}"
  print -r -f "Generating design tokens for @fnc314/packages.design-tokens...\n\n"
  pnpm style-dictionary build "${STYLE_DICTIONARY_CLI[@]}" 2>&1 | tee -a "${LOG_FILE}"
fi
printf "Cleaning design tokens\nfor @fnc314/packages.design-tokens...\n\n"
pnpm style-dictionary clean "${STYLE_DICTIONARY_CLI[@]}"
print -r -f "Generating design tokens for @fnc314/packages.design-tokens...\n\n"
pnpm style-dictionary build "${STYLE_DICTIONARY_CLI[@]}"

print -r -f "Design tokens generated successfully."