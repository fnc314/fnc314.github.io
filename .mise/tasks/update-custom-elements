#!/usr/bin/env zsh
#MISE description="Run update-custom-elements"
#MISE alias="uce"

echo "Running update-custom-elements"
echo
rm -rfv docs
echo
echo "Recreate Mise Task Docs"
mkdir -p docs/mise/tasks
mise generate task-docs -m -o docs/mise/tasks
echo
echo "@pwrs:cem:generate"
pnpm run @pwrs:cem:generate
echo
echo "cem-analyze"
pnpm run cem-analyze
echo
echo "wca:json:file"
pnpm run wca:json:file
echo
echo "wca:json:files"
pnpm run wca:json:files
echo
echo "wca:markdown:file"
pnpm run wca:markdown:file
echo
echo "wca:markdown:files"
pnpm run wca:markdown:files
echo
echo "wca:vscode"
pnpm run wca:vscode
echo
echo "typedoc"
pnpm run typedoc:gen
echo
echo "DONE"

# See https://mise.jdx.dev/tasks/file-tasks.html for more information