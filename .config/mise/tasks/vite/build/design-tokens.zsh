#!/usr/bin/env zsh
#MISE description="Invokes `vite` within `design-tokens`"
#MISE alias="v:b:d-t"
#USAGE arg "mode" help="The `mode` flag for `vite`" default="development" {
#USAGE   choices "development" "production"
#USAGE }

declare -a VITE_CLI
VITE_CLI=(
  build
  -m "${usage_mode:=development}"
  --config ./packages/design-tokens/.config/vite/vite.config.ts
  packages/design-tokens
)

print -f "Building \`style-dictionary\`"
mise run dev-ex:tools:style-dictionary "${usage_mode:=development}"

print -f "Building final output with \`vite\`"
pnpm vite "${VITE_CLI[@]}"