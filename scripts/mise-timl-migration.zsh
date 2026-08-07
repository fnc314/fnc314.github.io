#!/usr/bin/env zsh

# Halt on real command failures or unset variables
set -euo pipefail

print -r -- "Starting Mise configuration migration..."

# Explicitly initialize tracking counters
typeset -i migrated_count=0
typeset -i skipped_count=0
typeset -i deleted_count=0

# Helper for safe deletion of target paths
delete_old_config() {
  local target_path="${1:?old_config path required}"
  rm -rfv -- "$target_path"
}

# Loop through target directory paths
for old_config in {configs,packages}/*/.config/mise/config.toml(N); do

  # Resolve parent package root path cleanly using ZSH modifiers
  typeset pkg_dir="${old_config:h:h:h}"
  typeset new_config="$pkg_dir/mise.toml"

  print -r -- "----------------------------------------"
  print -r -- "Found legacy config: $old_config"

  # Avoid overwriting an active file
  if [[ -f "$new_config" ]]; then
    print -u2 -- "⚠️  Skipping: Destination already exists at $new_config"
    print -r -- "Deleting Old Config: $old_config"
    delete_old_config "$old_config"
    deleted_count+=1
    skipped_count+=1
    continue
  fi

  print -r -- "Migrating target directly to package root: $new_config"

  # Copy the settings over
  cp "$old_config" "$new_config"

  print -r -- "Deleting Old Config: $old_config"
  delete_old_config "$old_config"
  deleted_count+=1

  # Safe count incrementation (avoids exit code 1 when transitioning from 0)
  migrated_count+=1
done

print -r -- "========================================"
print -r -- "Migration completed successfully!"
print -r -- "Migrated: $migrated_count file(s)"
print -r -- "Deleted: $deleted_count file(s)"
print -r -- "Skipped:  $skipped_count file(s)"
