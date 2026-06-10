#!/usr/bin/env zsh
#MISE description="Runs `stylelint`"
#MISE alias="dx:t:stylelint"
#USAGE flag "--fix" help="Passes `--fix` to `stylelint`" default="false"
#USAGE flag "--analyze" help="Passes `--cei` to `stylelint`" default="false"
#USAGE flag "--log" help="Creates a `HHMMSS.log` file at `./logs/stylelint/{YYYYMMDD}" default="false"

declare STYLELINT_LOG_DIR
STYLELINT_LOG_DIR="./logs/stylelint/$(date +%Y%m%d)"
declare STYLELINT_CONFIG_FILE=".config/stylelint/stylelint.config.ts"
declare STYLELINT_IGNORE_FILE=".config/stylelint/.stylelintignore"

typeset -a STYLELINT_FLAGS
STYLELINT_FLAGS=(
  -c "$STYLELINT_CONFIG_FILE"
  --ignore-path "$STYLELINT_IGNORE_FILE"
)

if [[ "${usage_log:=false}" == "true" ]]; then
  mkdir -pv "$STYLELINT_LOG_DIR"
  STYLELINT_FLAGS+=(
    -o "${STYLELINT_LOG_DIR}/$(date +%H%M%S).log"
  )
fi

if [[ "${usage_analyze:=false}" == "true" ]]; then
  STYLELINT_FLAGS+=(
    --cei
  )
fi

if [[ "${usage_fix:=false}" == "true" ]]; then
  STYLELINT_FLAGS+=(
    --fix
  )
fi

print -f "${STYLELINT_FLAGS}\n\n"

pnpm stylelint "src/**/*.{css,ts}" "${STYLELINT_FLAGS[@]}"