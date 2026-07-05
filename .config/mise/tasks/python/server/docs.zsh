#!/usr/bin/env sh
#MISE description="Run python-server-docs"
#MISE alias="python@docs"

print -r -- "Running python-server-dist"
python -m http.server --directory docs 9998 --bind localhost

# See https://mise.jdx.dev/tasks/file-tasks.html for more information