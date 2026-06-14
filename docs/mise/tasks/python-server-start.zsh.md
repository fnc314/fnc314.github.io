## `python:server:start`

Start Python server at provided directory on given port


- **Usage**: `python:server:start [-p --port [port]] [directory]`
- **Aliases**: `python-server`

### Arguments

#### `[directory]`

Sets the directory for python -m http.server and updates LOCAL_BUILD_PYTHON_SERVER_DIR via mise set to keep vite produced manifest.json assets in sync

**Default:** `dist`

**Environment Variable:** `LOCAL_BUILD_PYTHON_SERVER_DIR`

### Flags

#### `-p --port [port]`

Sets the port for python -m http.server and updates LOCAL_BUILD_PYTHON_SERVER_PORT via mise set to keep vite produced manifest.json assets in sync

**Default:** `9999`

**Environment Variable:** `LOCAL_BUILD_PYTHON_SERVER_PORT`