#!/usr/bin/env zsh
#MISE description="Runs `vite build` using `production` for mode AND `NODE_ENV`"
#MISE alias="v:d:p"
#MISE depends=["vite:build:packages -p"]
#USAGE flag "-w" help="Passes `-w` to `vite build`" default="false"
#USAGE flag "-d" help="Passes `-d` to `vite build`" default="false"

export NODE_ENV="production"

typeset -a VITE_FLAGS
VITE_FLAGS=(
  -m ${NODE_ENV}
  -c ./.config/vite/vite.config.ts
)

if [[ "${usage_w:=false}" == "true" ]]; then
  VITE_FLAGS+=(
    -w
  )
fi

if [[ "${usage_d:=false}" == "true" ]]; then
  VITE_FLAGS+=(
    -d
  )
fi

pnpm vite build "${VITE_FLAGS[@]}"