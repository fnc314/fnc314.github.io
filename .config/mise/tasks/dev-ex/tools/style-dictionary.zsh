#!/usr/bin/env zsh
#MISE description="Invokes `style-dictionary` with `./.config/style-dictionary/config.ts`"
#MISE alias="dx:t:style-dictionary"

print -f "Cleaning design tokens for @fnc314/design-tokens..."
pnpm style-dictionary clean --verbose --config ./.config/style-dictionary/config.ts
print -f "Generating design tokens for @fnc314/design-tokens..."
pnpm style-dictionary build --verbose --config ./.config/style-dictionary/config.ts
print -f "Design tokens generated successfully."