#!/usr/bin/env zsh
#MISE description="Invokes `pnpm cem serve`"
#MISE alias="dx:t:@pwrs:cem:serve"
#USAGE flag="-p [port]" help="Chooses the serving port" default="1234"

export NODE_ENV="developmet"

typeset CEM_GENERATE_ARGS=(
  --config .config/@pwrs/cem/cem.yaml
  -p .
)