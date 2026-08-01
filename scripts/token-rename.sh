#!/bin/bash

# Transform icon JSON files according to the ask:
# Move $extensions from sibling level to both dark and light

echo "Transforming icon JSON files..."
echo "Looking for files where $extensions is sibling to both dark and light"
echo "============================================================="

# Directory containing icon JSON files
ROOT_DIR="packages/design-tokens/tokens/icons"

# Check if directory exists
if [ ! -d "$ROOT_DIR" ]; then
    echo "ERROR: Directory '$ROOT_DIR' not found!"
    exit 1
fi

# Count files
all_files=$(find "$ROOT_DIR" -name "*.json" -type f)
total_files=$(echo "$all_files" | wc -l)
echo "Found $total_files icon JSON files"
echo ""

# Function to check if a file needs transformation
needs_transformation() {
    local file_path="$1"
    local content

    # Read the file content
    content=$(cat "$file_path")

    # Check if it has the pattern: $extensions as sibling to both dark and light
    # We need to handle nested structure properly
    local has_pattern=false

    # Use python to check the structure
    if python3 -c "
import json
import sys

def check(obj):
    if isinstance(obj, dict):
        if '\$extensions' in obj and 'dark' in obj and 'light' in obj:
            return True
        for value in obj.values():
            if isinstance(value, dict) and check(value):
                return True
    return False

with open('$file_path') as f:
    data = json.load(f)

if check(data):
    print('YES')
else:
    print('NO')
" 2>/dev/null == "YES"); then
        has_pattern=true
    fi

    if [ "$has_pattern" = true ]; then
        echo "✓ $file_path needs transformation"
        return 0
    else
        return 1
    fi
}

# Function to transform a single file
transform_file() {
    local file_path="$1"

    echo "Transforming: $file_path"

    # Use python to perform the transformation
    python3 -c "
import json

file_path = '$file_path'

with open(file_path, 'r') as f:
    data = json.load(f)

def transform(obj):
    if isinstance(obj, dict):
        # Check if we have the pattern: $extensions is sibling to dark and light
        if '\$extensions' in obj and 'dark' in obj and 'light' in obj:
            # Move \$extensions to both dark and light
            obj['dark']['\$extensions'] = obj['\$extensions']
            obj['light']['\$extensions'] = obj['\$extensions']

            # Remove \$extensions from sibling level
            del obj['\$extensions']

        # Continue recursion for nested objects
        for key, value in list(obj.items()):
            if key != '\$extensions' and isinstance(value, dict):
                transform(value)

transform(data)

with open(file_path, 'w') as f:
    json.dump(data, f, indent=2)
    f.write('\\n')
"

    if [ $? -eq 0 ]; then
        echo "✓ Successfully transformed: $file_path"
        return 0
    else
        echo "✗ Failed to transform: $file_path"
        return 1
    fi
}

# Main transformation process
echo "Identifying files that need transformation..."
echo ""

# Process all files
processed=0
failed=0
skipped=0

for file_path in $all_files; do
    if needs_transformation "$file_path"; then
        if transform_file "$file_path"; then
            processed=$((processed + 1))
        else
            failed=$((failed + 1))
        fi
    else
        skipped=$((skipped + 1))
        echo "⏭ Skipping (no transformation needed): $file_path"
    fi
done

# Summary
echo ""
echo "============================================================="
echo "TRANSFORMATION COMPLETE"
echo "============================================================="
echo "Total files: $total_files"
echo "Successfully transformed: $processed"
echo "Skipped (no transform needed): $skipped"
echo "Failed: $failed"
echo ""

# Quick verification
echo "Quick verification (checking a few files):"
echo ""

verified=0
correct=0

for file_path in $all_files; do
    # Only check first 5 files for speed
    if [ $verified -lt 5 ]; then
        verified=$((verified + 1))

        if python3 -c "
import json
file_path = '$file_path'
with open(file_path, 'r') as f:
    data = json.load(f)

def verify(obj, path=''):\n    if isinstance(obj, dict):\n        if '\$extensions' in obj:
            if 'dark' in obj and 'light' in obj:
                print(f'✗ {path}: \$extensions is still at sibling level')\n            else:\n                print(f'✓ {path}: \$extensions is correctly nested')\n        \n        for key, value in obj.items():\n            if isinstance(value, dict):\n                verify(value, f\"{path}.{key}\" if path else key)\n\nverify(data)\n" 2>/dev/null; then
            :
        fi
    fi
done

echo ""
echo "Transformation complete!"