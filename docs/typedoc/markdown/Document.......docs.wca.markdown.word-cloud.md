<html><head></head><body>[@fnc314/com.fnc314.website](../wiki/Home) / ../../docs/wca/markdown/word-cloud

# word-cloud

A component that renders a cloud of words with various sorting and grouping options.

## Properties

| Property       | Attribute       | Type                  | Default      | Description                                                                                                                                                                  |
| -------------- | --------------- | --------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appearance`   | `appearance`    | `WordCloudAppearance` | "SEQUENTIAL" | Controls the order in which words are animated/displayed.<br><br>Can be 'sequential' (words appear one by one) or 'simultaneous' (words appear all at once).                 |
| `delay`        | `delay`         | `number \| "none"`    | "none"       | The delay in milliseconds between word appearances when using sequential mode.<br><br>Set to "none" to use the component's internal default delays.                          |
| `grouping`     | `grouping`      | `WordCloudGrouping`   | "UNGROUPED"  | Controls how words are grouped together within the cloud.<br><br>Supported modes: 'category', 'quartile', or 'ungrouped'.                                                    |
| `instantClear` | `instant-clear` | `boolean`             | false        | Whether to clear the word cloud instantly when it is no longer visible.<br>When true, the cloud resets instantly to opacity 0 instead of fading out.                         |
| `sorting`      | `sorting`       | `WordCloudSorting`    | "NONE"       | Controls how words are sorted within their groupings.<br><br>Supported modes: 'by-weight', 'by-weight-reversed', 'by-alphabet', 'by-alphabet-reversed', or 'none'.           |
| `threshold`    | `threshold`     | `number`              | 0.1          | The intersection observer threshold for visibility detection.<br><br>A value between 0 and 1 indicating what percentage of the element must be visible to trigger animation. |
| `words`        | `words`         | `WordCloudWord[]`     | []           | The list of words to display in the cloud.                                                                                                                                   |

## CSS Custom Properties

| Property                                   | Default   | Description                                                               |
| ------------------------------------------ | --------- | ------------------------------------------------------------------------- |
| `--word-cloud-animation`                   | "150ms"   | Duration of the entrance animation for each word.                         |
| `--word-cloud-animation-reduced`           | "1ms"     | Duration of the entrance animation when prefers-reduced-motion is active. |
| `--word-cloud-first-quartile-font-size`    | "1.75rem" | Font size for words in the first weight quartile (highest weight).        |
| `--word-cloud-first-quartile-line-height`  | "1.75rem" | Line height for words in the first weight quartile.                       |
| `--word-cloud-fourth-quartile-font-size`   | "1rem"    | Font size for words in the fourth weight quartile (lowest weight).        |
| `--word-cloud-fourth-quartile-line-height` | "1rem"    | Line height for words in the fourth weight quartile.                      |
| `--word-cloud-second-quartile-font-size`   | "1.5rem"  | Font size for words in the second weight quartile.                        |
| `--word-cloud-second-quartile-line-height` | "1.5rem"  | Line height for words in the second weight quartile.                      |
| `--word-cloud-third-quartile-font-size`    | "1.25rem" | Font size for words in the third weight quartile.                         |
| `--word-cloud-third-quartile-line-height`  | "1.25rem" | Line height for words in the third weight quartile.                       |

</body></html>
