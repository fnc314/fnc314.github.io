#!/usr/bin/env zsh
#MISE description="Creates a new sub `package.json` package"
#MISE alias="p:mnp"
#USAGE arg "<dir>" help="The directory for the new `package.json`"

declare TARGET_DIR="./packages/${usage_dir}"

printf "Creating package ${usage_dir}"
mkdir -vp "$TARGET_DIR"

printf "Setting up Mise"
mkdir -pv "$TARGET_DIR/.config/mise"
touch -v "$TARGET_DIR/.config/mise/config.toml"

printf "Adding Node and PNPM to Mise"
mise -C "$TARGET_DIR" use node@latest pnpm@latest npm:vite@latest tombi@latest usage@latest

printf "Adding Vite setup"
mkdir -pv "$TARGET_DIR/.config/vite"
touch "$TARGET_DIR/.config/vite/vite.config.ts"

printf "Creating \`package.json\`"
npm init -w "$TARGET_DIR"