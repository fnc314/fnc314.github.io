#!/usr/bin/env zsh
#MISE description="Run stylelint with design token enforcement"
#MISE alias="lint-tokens"

echo "Running stylelint with design token enforcement..."
pnpm stylelint "src/**/*.{css,ts}" --config ./config/stylelint/stylelint.config.ts
echo "Stylelint check complete."
