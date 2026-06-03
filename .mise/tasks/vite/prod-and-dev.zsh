#!/usr/bin/env sh
#MISE description="Execute `vite build` for both production and development"
#MISE alias="vite-prod-dev"

BUILD_ENVIRONMENT=local NODE_ENV=development pnpm vite build -m development
BUILD_ENVIRONMENT=local NODE_ENV=production pnpm vite build -m production