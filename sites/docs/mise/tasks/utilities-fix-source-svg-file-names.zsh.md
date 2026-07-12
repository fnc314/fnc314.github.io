## `utilities:fix-source-svg-file-names`

Walks a directory and renames SVG files so they end in a uniform lowercase `.svg`; skips any other file type


- **Usage**: `utilities:fix-source-svg-file-names [--dry-run] [dir]`
- **Aliases**: `u:fix-svg`

### Arguments

#### `[dir]`

Directory to walk recursively

**Default:** `design-tokens/assets/icons`

### Flags

#### `--dry-run`

Print what would be renamed without touching the filesystem