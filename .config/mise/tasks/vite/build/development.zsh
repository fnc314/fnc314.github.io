#!/usr/bin/env zsh
#MISE description="Runs `vite build` using `development` for mode AND `NODE_ENV`"
#MISE alias="v:b:d"
#MISE depends=["vite:build:design-tokens"]
#USAGE flag "-w" help="Passes `-w` to `vite build`" default="false"

typeset -a VITE_FLAGS
VITE_FLAGS=(
  -m development
  -c ./.config/vite/vite.config.ts
)

if [[ "${usage_w:=false}" == "true" ]]; then
  VITE_FLAGS+=(
    -w
  )
fi

NODE_ENV=development pnpm vite build "${VITE_FLAGS[@]}"