#!/usr/bin/env -S zsh

declare JSON_DIRECTORY="packages/design-tokens/assets/themes"

# Use (/:t) to find only directories (/) and extract just their trailing names (:t)
for themeDir in $JSON_DIRECTORY/*(/:t); do
  declare newFile="$JSON_DIRECTORY/$themeDir/$themeDir.scheme.mtb.json"
  if [[ -f "$newFile" ]]; then
    jq '
      with_entries(
        .key |= gsub("-([a-z])"; (.captures[0].string | ascii_upcase))
      )
    ' "$newFile"
  else
    jq .schemes "$JSON_DIRECTORY/$themeDir/$themeDir.mtb.json" > "$newFile"
  fi
done