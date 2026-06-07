#!/usr/bin/env zsh
#MISE description="Generate design tokens using Style Dictionary"
#MISE alias="gen-dt"

echo "Generating design tokens for @fnc314/design-tokens..."
pnpx style-dictionary build --config ./.config/style-dictionary/config.ts
echo "Design tokens generated successfully."

echo "Copying theme images..."
mkdir -p dist/themes
cp -r src/themes/* dist/themes/
echo "Theme images copied successfully."