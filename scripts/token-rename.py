#!/usr/bin/env python3
"""
Transform icon JSON files according to the ask:
Move $extensions from sibling level to both dark and light

Usage:
    python3 transform-icons.py [--check-only] [--dry-run]

Options:
    --check-only    Only check which files need transformation, don't transform
    --dry-run       Show what would be transformed without actually doing it
"""

import json
import os
import sys
import argparse
from pathlib import Path


def has_wrong_structure(obj):
    """Check if an object has $extensions as sibling to both dark and light"""
    if isinstance(obj, dict):
        if '$extensions' in obj and 'dark' in obj and 'light' in obj:
            return True
        for value in obj.values():
            if isinstance(value, dict) and has_wrong_structure(value):
                return True
    return False


def transform_file(file_path):
    """Transform a single icon JSON file"""
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)
    except Exception as e:
        print(f"ERROR: Failed to read {file_path}: {e}")
        return False

    def transform(obj):
        if isinstance(obj, dict):
            # Check if we have the pattern to transform
            if '$extensions' in obj and 'dark' in obj and 'light' in obj:
                print(f"  Found pattern in: {file_path}")
                print(f"    Moving $extensions to both dark and light")

                # Move $extensions to both dark and light
                obj['dark']['$extensions'] = obj['$extensions']
                obj['light']['$extensions'] = obj['$extensions']

                # Remove $extensions from sibling level
                del obj['$extensions']
                print(f"    ✓ Removed $extensions from sibling level")

            # Continue recursion for nested objects
            for key, value in list(obj.items()):
                if key != '$extensions' and isinstance(value, dict):
                    transform(value)

    try:
        transform(data)

        with open(file_path, 'w') as f:
            json.dump(data, f, indent=2)
            f.write('\n')

        print(f"✓ Transformed: {file_path}")
        return True
    except Exception as e:
        print(f"ERROR: Failed to transform {file_path}: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Transform icon JSON files to move $extensions from sibling level to dark and light"
    )
    parser.add_argument('--check-only', action='store_true',
                        help='Only check which files need transformation, don\'t transform')
    parser.add_argument('--dry-run', action='store_true',
                        help='Show what would be transformed without actually doing it')
    parser.add_argument('--root-dir', default='packages/design-tokens/tokens/icons',
                        help='Root directory containing icon JSON files')

    args = parser.parse_args()

    root_dir = Path(args.root_dir)

    if not root_dir.exists():
        print(f"ERROR: Directory '{root_dir}' not found!")
        sys.exit(1)

    # Collect all JSON files
    all_files = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.json'):
                all_files.append(Path(root) / file)

    print(f"Found {len(all_files)} icon JSON files")

    # First pass: identify files that need transformation
    files_to_transform = []
    skipped = 0

    for file_path in all_files:
        if has_wrong_structure(json.loads(file_path.read_text())):
            files_to_transform.append(file_path)
        else:
            skipped += 1

    print(f"\nFiles that need transformation: {len(files_to_transform)}")
    print(f"Files already correct or wrong pattern: {skipped}")

    if args.check_only:
        print("\nFiles that need transformation:")
        for file_path in files_to_transform:
            print(f"  - {file_path}")
        return

    if args.dry_run:
        print("\nDry run - would transform the following files:")
        for file_path in files_to_transform:
            print(f"  - {file_path}")
        return

    # Transform files
    print(f"\nTransforming {len(files_to_transform)} files...")

    processed = 0
    failed = 0

    for file_path in files_to_transform:
        print(f"\nProcessing: {file_path}")
        if transform_file(str(file_path)):
            processed += 1
        else:
            failed += 1

    # Summary
    print("\n" + "=" * 70)
    print("TRANSFORMATION COMPLETE")
    print("=" * 70)
    print(f"Total files processed: {processed}")
    print(f"Total files failed: {failed}")
    print(f"Files skipped (no transform needed): {skipped}")

    # Quick verification
    print("\n" + "=" * 70)
    print("QUICK VERIFICATION")
    print("=" * 70)

    verified = 0
    correct = 0

    # Just check first 5 files for verification
    for file_path in files_to_transform[:5]:
        try:
            with open(file_path, 'r') as f:
                data = json.load(f)

            def verify(obj, path=""):
                nonlocal verified, correct
                if isinstance(obj, dict):
                    if '$extensions' in obj:
                        verified += 1
                        if 'dark' in obj and 'light' in obj:
                            correct += 1
                            print(f"✗ {path}: $extensions is sibling to both dark and light (still wrong)")
                        else:
                            print(f"✓ {path}: $extensions is correctly nested")

                    for key, value in obj.items():
                        if isinstance(value, dict):
                            verify(value, f"{path}.{key}" if path else key)

            verify(data)
        except Exception as e:
            print(f"✗ Error verifying {file_path}: {e}")

    print(f"\nVerification complete: {verified} files checked")
    print(f"Files still with wrong structure: {correct}")

    if correct == 0:
        print("\n✅ SUCCESS: All files have correct $extensions placement!")
    else:
        print(f"\n⚠️ WARNING: {correct} files still have wrong structure")


if __name__ == "__main__":
    main()