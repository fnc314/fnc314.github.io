#!/usr/bin/env zsh
#MISE description="Invokes `style-dictionary` with `./.config/style-dictionary/config.ts`"
#MISE alias="dx:t:style-dictionary"

echo "Cleaning design tokens for @fnc314/design-tokens..."
pnpm style-dictionary clean -v -c ./.config/style-dictionary/config.ts
echo "Generating design tokens for @fnc314/design-tokens..."
pnpm style-dictionary build -v -c ./.config/style-dictionary/config.ts
echo "Design tokens generated successfully."