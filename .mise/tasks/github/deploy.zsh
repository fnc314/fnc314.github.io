#!/usr/bin/env zsh
#MISE description="The Mise Task to use for GitHub Actions"
#MISE alias="github-deploy"

echo
echo "Building for Deployment"
echo
NODE_ENV=production pnpm vite build -m production