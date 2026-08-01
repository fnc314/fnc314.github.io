#!/bin/bash
# Wrapper script to choose which transformation tool to use

echo "Choose transformation method:"
echo "1) Node.js (faster, requires Node.js installed)"
echo "2) Python (more robust, requires Python 3)"
echo "3) Check current status"

read -p "Enter choice (1-3): " choice

case $choice in
    1)
        if command -v node >/dev/null 2>&1; then
            bash scripts/token-rename.sh
        else
            echo "Node.js not found. Please install Node.js or choose option 2 (Python)."
        fi
        ;;
    2)
        if command -v python3 >/dev/null 2>&1; then
            python3.14 scripts/token-rename.py
        else
            echo "Python3 not found. Please install Python3 or choose option 1 (Node.js)."
        fi
        ;;
    3)
        echo "Checking current status..."
        echo "\nFiles that still have \$extensions as sibling to dark and light:"
        find packages/design-tokens/tokens/icons -name "*.json" -type f -exec grep -l '"\$extensions"' {} \; | xargs -I {} sh -c 'echo "\n{}:" && grep -A10 -B2 "\"\$extensions\"" "{}" | head -20'
        ;;
    *)
        echo "Invalid choice. Please run again and choose 1, 2, or 3."
        ;;
esac