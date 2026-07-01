# word-tag

## Properties

| Property                                         | Attribute   | Type               | Default     | Description                                      |
|--------------------------------------------------|-------------|--------------------|-------------|--------------------------------------------------|
| `heaviness`                                      | `heaviness` | `WordTagHeaviness` | "normal"    | The weight of the tag (text & border), can be<br />`"normal"` (`--md-ref-typeface-weight-regular` & `--sizes-thickness-hairline`) or<br />`"heavy"` (`--md-ref-typeface-weight-bold` & `2.5 * --sizes-thickness-hairline`) |
| `hrefUrl`                                        | `hrefUrl`   | `string`           | ""          |                                                  |
| `object Object],[object Object],[object Object],[object Object` |             |                    |             |                                                  |
| `variant`                                        | `variant`   | `WordTagVariant`   | "text-only" | [object Object],[object Object]                  |
| `word`                                           | `word`      | `string`           | ""          | The tagged word                                  |

## Slots

| Name                                            |
|-------------------------------------------------|
| `object Object],[object Object],[object Object` |

## CSS Custom Properties

| Property                      | Default                                  | Description                                     |
|-------------------------------|------------------------------------------|-------------------------------------------------|
| `--word-tag-background-color` | "--md-sys-color-primary-container"       | The background color                            |
| `--word-tag-border-radius`    | "--md-sys-shape-corner-small"            | The corner radius (for all corners)             |
| `--word-tag-color`            | "--md-sys-color-on-primary-container"    | The text and border color                       |
| `--word-tag-font-family`      | "--md-ref-typeface-brand"                | The font family                                 |
| `--word-tag-font-size`        | "--md-typescale-body-large-font-size"    | The font size                                   |
| `--word-tag-font-weight`      | "--md-ref-typeface-weight-regular"       | The font weight                                 |
| `--word-tag-gap`              | "--spaces-gap-xs"                        | The `gap` between `word` and any `slot`-ed icon |
| `--word-tag-line-height`      | "--md-typescale-body-large-lingt-height" | The line height                                 |
