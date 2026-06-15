#!/usr/bin/env zsh
#MISE description="Runs `stylelint`"
#MISE alias="dx:t:stylelint"
#USAGE flag "--fix" help="Passes `--fix` to `stylelint`" default="false"
#USAGE flag "--analyze" help="Passes `--cei` to `stylelint`" default="false"
#USAGE flag "--log" help="Creates a `HHMMSS.log` file at `./logs/stylelint/{YYYYMMDD}" default="false"
#USAGE flag "--verbose" help="Passes `-f verbose` to `stylelint`" default="false"
#USAGE flag "--config-inspector" help="Runs `stylelint-config-inspector` instead" default="false"

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

if [[ "${usage_verbose:=false}" == "true" ]]; then
  STYLELINT_FLAGS+=(
    -f verbose
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

if [[ "${usage_config_inspector:=false}" == "true" ]]; then
  print -f "Running stylelint-config-inspector\n\n"
  pnpm stylelint-config-inspector --config ./config/stylelint/stylelint.config.ts
  exit 0
else
  pnpm stylelint "src" "${STYLELINT_FLAGS[@]}"
fi
