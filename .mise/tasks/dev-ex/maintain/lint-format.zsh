#!/usr/bin/env zsh
#MISE description="Runs the linter and formatter across `src`"
#MISE alias="dx:m:lf"
#USAGE arg "[suite]" help="Which maintenaince suite to run: linter, formatter, or full" default="full" {
#USAGE   choices "linter" "formatter" "full"
#USAGE }
#USAGE arg "[target]" help="Determine which source files are targeted: js, css, or all" default="all" {
#USAGE   choices "js" "css" "all"
#USAGE }

declare SUITE="${usage_suite:=full}"
declare TARGET="${usage_target:=all}"

declare STYLELINT_LOG_DIR
STYLELINT_LOG_DIR="./logs/stylelint/${SUITE}/${TARGET}/$(date +%Y%m%d)"
declare STYLELINT_CONFIG_FILE=".config/stylelint/stylelint.config.ts"
declare STYLELINT_IGNORE_FILE=".config/stylelint/.stylelintignore"

typeset -a STYLELINT_FLAGS
STYLELINT_FLAGS=(
  -o "${STYLELINT_LOG_DIR}/$(date +%H%M%S).log"
  -c "$STYLELINT_CONFIG_FILE"
  --ignore-path "$STYLELINT_IGNORE_FILE"
  --cei
)

declare ESLINT_LOG_DIR
ESLINT_LOG_DIR="./logs/eslint/${SUITE}/${TARGET}/$(date +%Y%m%d)"
declare ESLINT_CONFIG_FILE=".config/eslint/eslint.config.mjs"

typeset -a ESLINT_FLAGS
ESLINT_FLAGS=(
  -c "$ESLINT_CONFIG_FILE"
  -f json
  -o "${ESLINT_LOG_DIR}/$(date +%H%M%S).json"
  --stats
  --debug
)

style_linter() {
  pnpm stylelint "src/**/*.{css,ts}" "${STYLELINT_FLAGS[@]}"
}

style_formatter() {
  pnpm stylelint "src/**/*.{css,ts}" "${STYLELINT_FLAGS[@]}" --fix
}

script_linter() {
  TIMING=all pnpm eslint "${ESLINT_FLAGS[@]}"
}

script_formatter() {
  TIMING=all pnpm eslint --fix "${ESLINT_FLAGS[@]}"
}

print -r "Running maintenaince suite: $SUITE"
print -r "Running maintenaince on target: $TARGET"

print -r "Creating log dirs"
mkdir -pv "$STYLELINT_LOG_DIR"
mkdir -pv "$ESLINT_LOG_DIR"

print -r "With STYLELINT_FLAGS"
print -r "${STYLELINT_FLAGS[@]}"

print -r "With ESLINT_FLAGS"
print -r "${ESLINT_FLAGS[@]}"


case $SUITE in
  "linter")
    if [[ "$TARGET" == "js" ]] || [[ "$TARGET" == "all" ]]; then
      script_linter
    fi
    if [[ "$TARGET" == "css" ]] || [[ "$TARGET" == "all" ]]; then
      style_linter
    fi
    ;;
  "formatter")
    if [[ "$TARGET" == "js" ]] || [[ "$TARGET" == "all" ]]; then
      script_formatter
    fi
    if [[ "$TARGET" == "css" ]] || [[ "$TARGET" == "all" ]]; then
      style_formatter
    fi
    ;;
  "full")
    if [[ "$TARGET" == "js" ]] || [[ "$TARGET" == "all" ]]; then
      script_linter
      script_formatter
    fi
    if [[ "$TARGET" == "css" ]] || [[ "$TARGET" == "all" ]]; then
      style_linter
      style_formatter
    fi
    ;;
  "*")
    print -r "UNEXEPCTED $SUITE for $TARGET"
    print -r "Please use \`linter\`, \`formatter\`, or \`full\` for $SUITE"
    print -r "Please use \`js\`, \`css\`, or \`all\` for $TARGET"
    ;;
esac

echo "DONE"