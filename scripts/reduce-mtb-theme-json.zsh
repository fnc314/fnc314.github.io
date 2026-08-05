#!/usr/bin/env -S zsh

declare JSON_DIRECTORY="packages/design-tokens/assets/themes"

# Use (/:t) to find only directories (/) and extract just their trailing names (:t)
for themeDir in $JSON_DIRECTORY/*(/:t); do
  declare newFile="$JSON_DIRECTORY/$themeDir/$themeDir.scheme.mtb.json"
  if [[ ! -f "$newFile" ]]; then
    jq '.schemes' "$JSON_DIRECTORY/$themeDir/$themeDir.mtb.json" > "$newFile"
  fi

  tmpFile="$(mktemp -t "$themeDir")"

  print -f "TEMP FILE %s\nNEW FILE %s\n" "$tmpFile" "$newFile"

  jq '
    with_entries(
      .key |= (
        split("-") as $parts
        | $parts[0] as $first
        | [
            $first,
            ($parts[1:] | map(
              . as $word
              | ($word[0:1] | ascii_upcase) + ($word[1:] | ascii_downcase)
            ))[]
          ]
        | join("")
      )
    )
  ' "$newFile" > "$tmpFile"

  mv "$tmpFile" "$newFile"
done