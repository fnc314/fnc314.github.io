#!/usr/bin/env zsh
#MISE description="Invokes `style-dictionary` with `./.config/style-dictionary/config.ts`"
#MISE alias="dx:t:style-dictionary"
#USAGE arg "mode, m" help="The `mode` flag for `vite`" default="development" {
#USAGE   choices "development" "production"
#USAGE }

print -f "Copying \`design-tokens/assets/themes\` to \`design-tokens/dist/themes\`"
cp -vr design-tokens/assets/themes design-tokens/dist/themes

declare -a STYLE_DICTIONARY_CLI
STYLE_DICTIONARY_CLI=(
  --verbose
  --config ./.config/style-dictionary/config.ts
)

print -f "Cleaning design tokens for @fnc314/design-tokens..."
pnpm style-dictionary clean "${STYLE_DICTIONARY_CLI[@]}"
print -f "Generating design tokens for @fnc314/design-tokens..."
pnpm style-dictionary build "${STYLE_DICTIONARY_CLI[@]}"
print -f "Design tokens generated successfully."

declare -a VITE_CLI
VITE_CLI=(
  build
  -m ${usage_mode:=development}
  --config ./design-tokens/.config/vite/vite.config.ts
  design-tokens
)

print -f "Building final output with \`vite\`"
pnpm vite "${VITE_CLI[@]}"