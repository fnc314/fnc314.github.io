#!/usr/bin/env zsh
#MISE description="Invokes `vite` within `design-tokens`"
#MISE alias="v:b:d-t"
#USAGE arg "mode" help="The `mode` flag for `vite`" default="development" {
#USAGE   choices "development" "production"
#USAGE }

typeset -a VITE_CLI
VITE_CLI=(
  build
  -m "${usage_mode:=development}"
  --config ./packages/design-tokens/.config/vite/vite.config.ts
  packages/design-tokens
)

print -r -f "Building \`style-dictionary\`"
mise run dev-ex:tools:style-dictionary "${usage_mode:=development}"

print -r -f "Building final output with \`vite\`"
pnpm vite "${VITE_CLI[@]}"