#!/usr/bin/env zsh
#MISE description="Cycles through `static/images/themes` and converts `.jpg` to `.webp` in 3 sizes"
#MISE alias="u:j2w"

for img in static/images/themes/*/profile-photo.jpg; do
  base="${img%.*}"
  magick "$img" -auto-orient -quality 85 "${base}-750.webp" &
  magick "$img" -resize 1200 -auto-orient -quality 85 "${base}-1200.webp" &
  magick "$img" -resize 1500 -auto-orient -quality 85 "${base}-1500.webp" &
  wait
done