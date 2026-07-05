#!/usr/bin/env sh
#MISE description="Start Python server at provided directory on given port"
#MISE alias="python-server"
#USAGE arg "<directory>" help="The directory to serve (default: dist)" long_help="Sets the directory for python -m http.server and updates LOCAL_BUILD_PYTHON_SERVER_DIR via mise set to keep vite produced manifest.json assets in sync" env="LOCAL_BUILD_PYTHON_SERVER_DIR" default="dist"
#USAGE flag "-p --port [port]" help="The port to serve on (default: 9999)" long_help="Sets the port for python -m http.server and updates LOCAL_BUILD_PYTHON_SERVER_PORT via mise set to keep vite produced manifest.json assets in sync" env="LOCAL_BUILD_PYTHON_SERVER_PORT" default="9999"

typeset ARG_USAGE_DIR="${usage_directory:=${LOCAL_BUILD_PYTHON_SERVER_DIR:=dist}}"
print -r -- "Updating LOCAL_BUILD_PYTHON_SERVER_DIR to $ARG_USAGE_DIR"
print -r --
export LOCAL_BUILD_PYTHON_SERVER_DIR="$ARG_USAGE_DIR"
mise set LOCAL_BUILD_PYTHON_SERVER_DIR="$ARG_USAGE_DIR"
echo
typeset ARG_USAGE_PORT="${usage_port:=${LOCAL_BUILD_PYTHON_SERVER_PORT:=9999}}"
print -r -- "Updating LOCAL_BUILD_PYTHON_SERVER_PORT to $ARG_USAGE_PORT"
print -r --
export LOCAL_BUILD_PYTHON_SERVER_PORT="$ARG_USAGE_PORT"
mise set LOCAL_BUILD_PYTHON_SERVER_PORT="$ARG_USAGE_PORT"

print -r -- "Starting Python server at directory $ARG_USAGE_DIR on port $ARG_USAGE_PORT"
python -m http.server -d "$LOCAL_BUILD_PYTHON_SERVER_DIR" "$LOCAL_BUILD_PYTHON_SERVER_PORT" --bind localhost
