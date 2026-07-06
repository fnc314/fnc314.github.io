#!/usr/bin/env zsh
#MISE description="Invokes `prettier` with `./.config/prettier/prettier.config.mts`"
#MISE alias="dx:t:prettier"
#MISE env={ NODE_OPTIONS = "--experimental-strip-types" }
#USAGE arg "<logLevel>" help="Determines `--log-level` passed to `prettier`" default="warn" {
#USAGE   choices "warn" "info" "debug"
#USAGE }
#USAGE arg "<mode>" help="Passes `--write`` or `--check`` to `prettier`" default="check" {
#USAGE   choices "check" "write"
#USAGE }
set -euo pipefail

typeset -a PRETTIER_FLAGS
PRETTIER_FLAGS=(
  --ignore-path ./.config/prettier/.prettierignore
  --config ./.config/prettier/prettier.config.mts
  --with-node-modules
  --log-level ${usage_log_level:=warn}
)

typeset PRETTIER_MODE="${usage_mode:=check}"
if [[ "$PRETTIER_MODE" == "write" ]]; then
  PRETTIER_FLAGS+=(
    --write
  )
elif [[ "$PRETTIER_MODE" == "check" ]]; then
  PRETTIER_FLAGS+=(
    --check
  )
else
  PRETTIER_FLAGS+=(
    --debug-check
  )
fi

print -r -f "${PRETTIER_FLAGS}\n\n"

pnpm prettier "./src/**/*.{css,json,ts}" "${PRETTIER_FLAGS[@]}"