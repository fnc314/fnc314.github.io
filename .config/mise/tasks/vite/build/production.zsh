#!/usr/bin/env zsh
#MISE description="Runs `vite build` using `production` for mode AND `NODE_ENV`"
#MISE alias="v:d:p"
#MISE depends=["vite:build:design-tokens"]

typeset -a VITE_FLAGS
VITE_FLAGS=(
  -d
  -m production
  -c ./.config/vite/vite.config.ts
)

NODE_ENV=production pnpm vite build "${VITE_FLAGS[@]}"