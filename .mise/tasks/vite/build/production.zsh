#!/usr/bin/env zsh
#MISE description="Runs `vite build` using `production` for mode AND `NODE_ENV`"
#MISE alias="vite-build-prod"

NODE_ENV=production pnpm vite build -m production