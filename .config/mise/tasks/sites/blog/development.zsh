#!/usr/bin/env zsh
#MISE description="Runs `vitepress` targeting `sites/blog`"
#MISE alias="s:b:d"

set -euo pipefail

pnpm vitepress dev sites/blog