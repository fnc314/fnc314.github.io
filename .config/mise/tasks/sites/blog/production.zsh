#!/usr/bin/env zsh
#MISE description="Runs `vitepress` targeting `sites/blog`"
#MISE alias="s:b:p"

set -euo pipefail

pnpm vitepress build sites/blog