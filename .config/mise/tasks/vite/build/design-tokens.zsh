#!/usr/bin/env zsh
#MISE description="Invokes `vite` within `design-tokens`"
#MISE alias="v:b:d-t"
#MISE depends=["dev-ex:tools:style-dictionary"]
#USAGE arg "mode" help="The `mode` flag for `vite`" default="development" {
#USAGE   choices "development" "production"
#USAGE }

declare -a VITE_CLI
VITE_CLI=(
  build
  -m "${usage_mode:=development}"
  --config ./design-tokens/.config/vite/vite.config.ts
  design-tokens
)

print -f "Building final output with \`vite\`"
pnpm vite "${VITE_CLI[@]}"