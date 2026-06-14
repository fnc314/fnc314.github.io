#!/usr/bin/env zsh
#MISE description="Walks a directory and renames SVG files so they end in a uniform lowercase `.svg`; skips any other file type"
#MISE alias="u:fix-svg"
#USAGE arg "<dir>" help="Directory to walk recursively" default="design-tokens/assets/icons"
#USAGE flag "--dry-run" help="Print what would be renamed without touching the filesystem"

set -e

declare ROOT_DIR="${usage_dir:=design-tokens/assets/icons}"
declare DRY_RUN="${usage_dry_run:=false}"

if [[ ! -d "$ROOT_DIR" ]]; then
  print -u2 "fix-svg: not a directory: $ROOT_DIR"
  exit 1
fi

# Walk every regular file in the tree (.) ignoring case for globbing (N) to avoid errors on empty matches.
typeset -i RENAMED=0 SKIPPED=0
for file in "$ROOT_DIR"/**/*(.N); do
  # Only touch files that are actually SVG (XML with an <svg root); skip every other type.
  if ! grep -qil '<svg' "$file"; then
    continue
  fi

  declare dir="${file:h}" name="${file:t}"

  # Collapse any run of trailing `.svg`/`.SVG` endings down to a single lowercase `.svg`,
  # counting how many we strip; for an SVG with some other (or no) ending, append `.svg`.
  declare base="$name"
  typeset -i SVG_COUNT=0
  while [[ "${(L)base}" == *.svg ]]; do
    base="${base:r}"
    (( ++SVG_COUNT ))
  done
  declare target="$dir/$base.svg"

  # Already uniform — exactly one lowercase `.svg`, nothing to do.
  if [[ "$target" == "$file" ]]; then
    (( ++SKIPPED ))
    continue
  fi

  # Collision: disambiguate with `-<extra>`, where <extra> is the count of surplus `.svg`
  # endings (e.g. `foo.svg.svg` -> `foo-1.svg`). `-ef` lets a case-only rename pass through
  # untouched on case-insensitive filesystems (the target "exists" but is the same inode).
  if [[ -e "$target" && ! "$target" -ef "$file" ]]; then
    typeset -i EXTRA=$(( SVG_COUNT > 1 ? SVG_COUNT - 1 : 1 ))
    target="$dir/$base-${EXTRA}.svg"
  fi

  # Still colliding after disambiguation — leave it alone rather than clobber.
  if [[ -e "$target" && ! "$target" -ef "$file" ]]; then
    print "fix-svg: SKIP (target already exists): $file -> $target"
    (( ++SKIPPED ))
    continue
  fi

  if [[ "$DRY_RUN" == "true" ]]; then
    print "would rename: $file -> $target"
  else
    mv -v "$file" "$target"
  fi
  (( ++RENAMED ))
done

print "\nfix-svg: ${RENAMED} renamed, ${SKIPPED} skipped under '${ROOT_DIR}'"
