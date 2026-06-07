#!/usr/bin/env zsh
#MISE description="Runs `eslint`"
#MISE alias="dx:t:eslint"
#USAGE arg "<print>" help="Passes `--print-config` and the given file to `eslint`" default=""
#USAGE flag "--fix" help="Passes `--fix` to `eslint`" default="false"
#USAGE flag "--inspector" help="Passes `--inspect-config` to `eslint`" default="false"
#USAGE flag "--debug, -d" help="Passes `--debug` to `eslint`" default="false"

declare ESLINT_LOG_DIR
ESLINT_LOG_DIR="./logs/eslint/$(date +%Y%m%d)"
declare ESLINT_CONFIG_FILE=".config/eslint/eslint.config.mjs"

typeset -a ESLINT_FLAGS
ESLINT_FLAGS=(
  -c "${ESLINT_CONFIG_FILE}"
  -f json
  -o "${ESLINT_LOG_DIR}/$(date +%H%M%S).json"
  --stats
)

if [[ "${usage_fix:=false}" == "true" ]]; then
  ESLINT_FLAGS+=(--fix)
fi

if [[ "${usage_inspector:=false}" == "true" ]]; then
  ESLINT_FLAGS+=(--inspect-config)
fi

if [[ "${usage_debug:=false}" == "true" ]]; then
  ESLINT_FLAGS+=(--debug)
fi

if [[ "${usage_print:=""}" != "" ]]; then
  ESLINT_FLAGS+=(
    --print-config "$usage_print"
  )
fi

print -f "%s" "${ESLINT_FLAGS[@]}"

TIMING=all pnpm eslint "${ESLINT_FLAGS[@]}"