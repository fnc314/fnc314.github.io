#!/usr/bin/env zsh
#MISE description="Runs `vite build` using `development` for mode AND `NODE_ENV`"
#MISE alias="vite-build-dev"

NODE_ENV=development pnpm vite build -m development