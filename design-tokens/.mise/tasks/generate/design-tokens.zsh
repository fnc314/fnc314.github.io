#!/usr/bin/env zsh
#MISE description="Generate design tokens using Style Dictionary"
#MISE alias="gen-dt"

echo "Cleaning design tokens for @fnc314/design-tokens..."
pnpm style-dictionary clean -v -c ./.config/style-dictionary/config.js
echo "Generating design tokens for @fnc314/design-tokens..."
pnpm style-dictionary build -v -c ./.config/style-dictionary/config.js
echo "Design tokens generated successfully."

# echo "Copying theme images..."
# mkdir -p dist/themes
# cp -r src/themes/* dist/themes/
# echo "Theme images copied successfully."