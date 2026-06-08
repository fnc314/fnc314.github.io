#!/usr/bin/env zsh
#MISE description="Invokes `pnpm prettier` with `./.config/prettier/prettier.config.mts"
#MISE alias="dx:t:prettier"
#USAGE flag "--fix" help="Passes `--write` to `prettier` to fix files" default="false"
#USAGE arg "<logLevel>" help="Determines `--log-level` passed to `prettier`" default="warn" {
#USAGE   choices "warn" "info" "debug"
#USAGE }

declare PRETTIER_FIX="${usage_fix:=false}"
typeset -a PRETTIER_FLAGS
PRETTIER_FLAGS=(
  --ignore-path ./.config/prettier/.prettierignore
  --config ./.config/prettier/prettier.config.mts
  --with-node-modules
  --log-level ${usage_log_level:=warn}
)

if [[ "$PRETTIER_FIX" == "true" ]]; then
  PRETTIER_FLAGS+=(
    --write
  )
else
  PRETTIER_FLAGS+=(
    --debug-check
  )
fi

print -f "${PRETTIER_FLAGS}\n\n"

NODE_OPTIONS="--experimental-strip-types" pnpm prettier "./src/**/*.{css,html,js,json,ts}" "${PRETTIER_FLAGS[@]}"