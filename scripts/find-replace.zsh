#!/usr/bin/env zsh

# ==============================================================================
# ENVIRONMENT SETUP
# emulate -L zsh: Ensures standard ZSH behavior and cleans up options on exit
# extended_glob: Enables advanced pattern matching natively
# ==============================================================================
emulate -L zsh
setopt extended_glob

# Load required ZSH native modules (ZERO external dependencies)
zmodload zsh/mapfile
zmodload zsh/datetime

# ==============================================================================
# LOGGING UTILITY
# ==============================================================================
log_msg() {
  local level="$1"
  shift
  # Output to stderr for standard tool logging
  printf "[%s] %-5s: %s\n" "$(strftime "%Y-%m-%d %H:%M:%S" "$EPOCHSECONDS")" "$level" "$*" >&2
}

# ==============================================================================
# ARGUMENT PARSING
# ==============================================================================
typeset find_str=""
typeset replace_str=""
typeset in_dirs_str=""
typeset file_formats_str=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --find)
      find_str="$2"; shift 2 ;;
    --replace)
      replace_str="$2"; shift 2 ;;
    --in)
      in_dirs_str="$2"; shift 2 ;;
    --file-formats)
      file_formats_str="$2"; shift 2 ;;
    *)
      log_msg "ERROR" "Unknown option: $1"
      exit 1
      ;;
  esac
done

# ==============================================================================
# VALIDATION
# ==============================================================================
if [[ -z "$find_str" ]]; then
  log_msg "ERROR" "--find argument is required."
  exit 1
fi

if [[ -z "$in_dirs_str" ]]; then
  log_msg "ERROR" "--in argument is required (comma-separated list of directories)."
  exit 1
fi

# ==============================================================================
# FILE DISCOVERY
# ==============================================================================
# Parse comma-separated inputs into ZSH arrays using the (s:,:) flag
typeset -a in_dirs exts all_files target_files
in_dirs=(${(s:,:)in_dirs_str})
exts=(${(s:,:)file_formats_str})

log_msg "INFO" "Scanning root files..."
# Root files ONLY (.)
all_files=( *(.N) )

for d in "${in_dirs[@]}"; do
  if [[ -d "$d" ]]; then
    log_msg "INFO" "Scanning directory: $d..."
    # Recursive search within target directory (.) for regular files
    all_files+=( "$d"/**/*(.N) )
  else
    log_msg "WARN" "Directory not found, skipping: $d"
  fi
done

# ==============================================================================
# FORMAT FILTERING
# ==============================================================================
for f in "${all_files[@]}"; do
  # Ensure it is a regular file and writable
  [[ -f "$f" && -w "$f" ]] || continue

  if [[ ${#exts[@]} -gt 0 ]]; then
    # Extract extension natively using :e modifier
    typeset ext="${f:e}"
    # If the extension is NOT in the exts array, skip it
    if [[ ${exts[(I)$ext]} -eq 0 ]]; then
      continue
    fi
  fi

  target_files+=( "$f" )
done

if [[ ${#target_files[@]} -eq 0 ]]; then
  log_msg "INFO" "No files matched the criteria. Exiting cleanly."
  exit 0
fi

log_msg "INFO" "Discovered ${#target_files[@]} target files. Starting Find-and-Replace..."

# ==============================================================================
# IN-MEMORY FIND AND REPLACE
# ==============================================================================
typeset modified_count=0

for f in "${target_files[@]}"; do
  # Read entire file into memory natively
  typeset current_content="${mapfile[$f]}"

  # Perform global literal string replacement using parameter expansion
  typeset new_content="${current_content//${find_str}/${replace_str}}"

  if [[ "$current_content" != "$new_content" ]]; then
    # Write directly back to the file via memory mapping
    mapfile[$f]="$new_content"
    ((modified_count++))
    log_msg "INFO" "Replaced content in: $f"
  fi
done

# ==============================================================================
# TEARDOWN
# ==============================================================================
# Free memory explicitly (optional, but good practice)
zmodload -u mapfile

log_msg "INFO" "Complete. Modified $modified_count files."
