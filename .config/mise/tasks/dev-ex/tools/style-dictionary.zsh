#!/usr/bin/env zsh
#MISE description="Invokes `style-dictionary` with `./.config/style-dictionary/config.ts`"
#MISE alias="dx:t:style-dictionary"
#USAGE arg "mode, m" help="The `mode` flag for `vite`" default="development" {
#USAGE   choices "development" "production"
#USAGE }

typeset -a STYLE_DICTIONARY_CLI
STYLE_DICTIONARY_CLI=(
  --verbose
  --config ./.config/style-dictionary/config.ts
)

print -r -f "Cleaning design tokens for @fnc314/packages.design-tokens..."
pnpm style-dictionary clean "${STYLE_DICTIONARY_CLI[@]}"
print -r -f "Generating design tokens for @fnc314/packages.design-tokens..."
pnpm style-dictionary build "${STYLE_DICTIONARY_CLI[@]}"
print -r -f "Design tokens generated successfully."

typeset -a VITE_CLI
VITE_CLI=(
  build
  -m ${usage_mode:=development}
  --config ./packages/design-tokens/.config/vite/vite.config.ts
  packages/design-tokens
)

print -r -f "Building final output with \`vite\`"
pnpm vite "${VITE_CLI[@]}"