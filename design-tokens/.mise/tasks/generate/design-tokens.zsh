#!/usr/bin/env zsh
#MISE description="Generate design tokens using Style Dictionary"
#MISE alias="gen-dt"

echo "Cleaning design tokens for @fnc314/design-tokens..."
pnpm style-dictionary clean -v -c ./.config/style-dictionary/config.ts
echo "Generating design tokens for @fnc314/design-tokens..."
pnpm style-dictionary build -v -c ./.config/style-dictionary/config.ts
echo "Design tokens generated successfully."