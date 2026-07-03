<html><head></head><body>**@fnc314/com.fnc314.website v2.0.5**

---

# bento-layout

# blog-entry

## Properties

| Property    | Attribute   | Type            | Default | Description               |
| ----------- | ----------- | --------------- | ------- | ------------------------- |
| `blogEntry` | `blogEntry` | `BlogEntryJson` | {}      | The JSON record to render |

# bento-card

## Properties

| Property         | Attribute        | Type           | Default   | Description                                                                                                                              |
| ---------------- | ---------------- | -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `bentoCardTitle` | `bentoCardTitle` | `string`       | ""        | The clickable text for the `<h2>` in the `<summary>` element. When provided,<br> the exposed `slot[name="header"]` is suppressed.        |
| `bentoTag`       | `bentoTag`       | `BentoBoxType` | "profile" | [object Object],[object Object]                                                                                                          |
| `enableFocus`    | `enableFocus`    | `boolean`      | false     | Whether to enable enhanced border and shadow styling on focus-within.<br>Defaults to `false`.                                            |
| `enableHover`    | `enableHover`    | `boolean`      | false     | Whether to enable the lift-on-hover effect.<br>Defaults to `false` to minimize visual motion in dense layout grids.                      |
| `expanded`       | `expanded`       | `boolean`      | false     | Reflects and controls the open state of the underlying `<details>` element.<br>When `true`, the card is expanded and content is visible. |
| `scrollable`     | `scrollable`     | `boolean`      | false     | Whether to enable scrolling for content                                                                                                  |
| `spreadContent`  | `spreadContent`  | `boolean`      | false     | Whether to spread content over the entire body                                                                                           |

## Slots

| Name     | Description                                                                               |
| -------- | ----------------------------------------------------------------------------------------- |
|          | Default slot for card content. Slotted `h2` elements receive standardized header styling. |
| `header` | Content to be displayed in the card's header/summary area.                                |

# blog-card

## Properties

| Property      | Attribute     | Type      | Default |
| ------------- | ------------- | --------- | ------- |
| `enableFocus` | `enableFocus` | `boolean` | false   |
| `enableHover` | `enableHover` | `boolean` | false   |
| `expanded`    | `expanded`    | `boolean` | false   |

# code-card

## Properties

| Property      | Attribute     | Type      | Default |
| ------------- | ------------- | --------- | ------- |
| `enableFocus` | `enableFocus` | `boolean` | false   |
| `enableHover` | `enableHover` | `boolean` | false   |
| `expanded`    | `expanded`    | `boolean` | false   |

# education-card

## Properties

| Property      | Attribute     | Type      | Default |
| ------------- | ------------- | --------- | ------- |
| `enableFocus` | `enableFocus` | `boolean` | false   |
| `enableHover` | `enableHover` | `boolean` | false   |
| `expanded`    | `expanded`    | `boolean` | false   |

# experience-card

## Properties

| Property      | Attribute     | Type      | Default |
| ------------- | ------------- | --------- | ------- |
| `enableFocus` | `enableFocus` | `boolean` | false   |
| `enableHover` | `enableHover` | `boolean` | false   |
| `expanded`    | `expanded`    | `boolean` | false   |

# now-playing-card

## Properties

| Property      | Attribute     | Type      | Default |
| ------------- | ------------- | --------- | ------- |
| `enableFocus` | `enableFocus` | `boolean` | false   |
| `enableHover` | `enableHover` | `boolean` | false   |
| `expanded`    | `expanded`    | `boolean` | false   |

# profile-card

## Properties

| Property      | Attribute     | Type        | Default                                                  |
| ------------- | ------------- | ----------- | -------------------------------------------------------- |
| `bioText`     | `bioText`     | `string`    | "long"                                                   |
| `enableFocus` | `enableFocus` | `boolean`   | false                                                    |
| `enableHover` | `enableHover` | `boolean`   | false                                                    |
| `expanded`    | `expanded`    | `boolean`   | false                                                    |
| `photoData`   |               | `PhotoJson` | "Photos[configsService.loadConfigs().colorScheme.theme]" |

# settings-card

## Properties

| Property      | Attribute     | Type      | Default |
| ------------- | ------------- | --------- | ------- |
| `enableFocus` | `enableFocus` | `boolean` | false   |
| `enableHover` | `enableHover` | `boolean` | false   |
| `expanded`    | `expanded`    | `boolean` | false   |

## Events

| Event                 | Type                              |
| --------------------- | --------------------------------- |
| `color_scheme.change` | `CustomEvent<colorschemeconfigs>` |

# skills-card

## Properties

| Property      | Attribute     | Type      | Default |
| ------------- | ------------- | --------- | ------- |
| `enableFocus` | `enableFocus` | `boolean` | false   |
| `enableHover` | `enableHover` | `boolean` | false   |
| `expanded`    | `expanded`    | `boolean` | false   |

# code-repo

[object Object],[object Object],[object Object]

## Properties

| Property                                        | Attribute  | Type           | Default | Description                     |
| ----------------------------------------------- | ---------- | -------------- | ------- | ------------------------------- |
| `codeRepo`                                      | `codeRepo` | `CodeRepoData` | {}      | [object Object],[object Object] |
| `object Object],[object Object],[object Object` |            |                |         |                                 |

# artifact-connection

## Properties

| Property                 | Attribute                | Type                     | Default |
| ------------------------ | ------------------------ | ------------------------ | ------- |
| `artifactConnectionData` | `artifactConnectionData` | `ArtifactConnectionData` | {}      |
| `artifactConnectionType` | `artifactConnectionType` | `"googleDocs" \| "pdf"`  | ""      |

# direct-connection

[object Object],[object Object]

## Properties

| Property             | Attribute             | Type                 | Default |
| -------------------- | --------------------- | -------------------- | ------- |
| `connectionInstance` | `connection-instance` | `ConnectionInstance` | {}      |

# professional-connection

## Properties

| Property                     | Attribute                    | Type                                 | Default |
| ---------------------------- | ---------------------------- | ------------------------------------ | ------- |
| `professionalConnectionData` | `professionalConnectionData` | `ProfessionalConnectionJsonData`     | {}      |
| `professionalConnectionType` | `professionalConnectionType` | `"linkedin" \| "github" \| "medium"` | ""      |

# education-institution

## Properties

| Property    | Attribute   | Type                         | Default |
| ----------- | ----------- | ---------------------------- | ------- |
| `institute` | `institute` | `EducationInstitutionRecord` | {}      |

# ui-mode-toggle

## Properties

| Property    | Attribute   | Type                            | Default  | Description                                                                         |
| ----------- | ----------- | ------------------------------- | -------- | ----------------------------------------------------------------------------------- |
| `mode`      | `mode`      | `"light" \| "dark" \| "system"` | "system" | Reflects the currently active color scheme mode.                                    |
| `permanent` | `permanent` | `boolean`                       | false    | Controls whether the selected color scheme preference is persisted across sessions. |

## Methods

| Method  | Type       | Description                                        |
| ------- | ---------- | -------------------------------------------------- |
| `reset` | `(): void` | Resets the UI mode toggle to its default settings. |

## Events

| Event                  | Type                              | Description                                                                                                                                      |
| ---------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `color_scheme.change`  | `CustomEvent<colorschemeconfigs>` | Dispatched when the UI mode (light/dark/system) or color scheme contrast is changed,<br>propagating the new `AppConfigs["colorScheme"]` details. |
| `colorschemechange`    |                                   | Event from `dark-mode-toggle` when the scheme changes.                                                                                           |
| `permanentcolorscheme` |                                   | Event from `dark-mode-toggle` when the persistence changes.                                                                                      |

# version-tag

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

# word-tag

## Properties

| Property                                                        | Attribute   | Type               | Default     | Description                                                                                                                                                                                                                        |
| --------------------------------------------------------------- | ----------- | ------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heaviness`                                                     | `heaviness` | `WordTagHeaviness` | "normal"    | The weight of the tag (text &amp; border), can be<br>`"normal"` (`--md-ref-typeface-weight-regular` &amp; `--sizes-thickness-hairline`) or<br>`"heavy"` (`--md-ref-typeface-weight-bold` &amp; `2.5 * --sizes-thickness-hairline`) |
| `hrefUrl`                                                       | `hrefUrl`   | `string`           | ""          |                                                                                                                                                                                                                                    |
| `object Object],[object Object],[object Object],[object Object` |             |                    |             |                                                                                                                                                                                                                                    |
| `variant`                                                       | `variant`   | `WordTagVariant`   | "text-only" | [object Object],[object Object]                                                                                                                                                                                                    |
| `word`                                                          | `word`      | `string`           | ""          | The tagged word                                                                                                                                                                                                                    |

## Slots

| Name                                            |
| ----------------------------------------------- |
| `object Object],[object Object],[object Object` |

## CSS Custom Properties

| Property                      | Default                                  | Description                                     |
| ----------------------------- | ---------------------------------------- | ----------------------------------------------- |
| `--word-tag-background-color` | "--md-sys-color-primary-container"       | The background color                            |
| `--word-tag-border-radius`    | "--md-sys-shape-corner-small"            | The corner radius (for all corners)             |
| `--word-tag-color`            | "--md-sys-color-on-primary-container"    | The text and border color                       |
| `--word-tag-font-family`      | "--md-ref-typeface-brand"                | The font family                                 |
| `--word-tag-font-size`        | "--md-typescale-body-large-font-size"    | The font size                                   |
| `--word-tag-font-weight`      | "--md-ref-typeface-weight-regular"       | The font weight                                 |
| `--word-tag-gap`              | "--spaces-gap-xs"                        | The `gap` between `word` and any `slot`-ed icon |
| `--word-tag-line-height`      | "--md-typescale-body-large-lingt-height" | The line height                                 |

# work-experience

## Properties

| Property                                                                        | Attribute            | Type                  | Default                | Description                                                                     |
| ------------------------------------------------------------------------------- | -------------------- | --------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| `dateEnd`                                                                       | `date-end`           | `WorkDate`            | {"stamp":"","text":""} | End date information including machine-readable stamp and display text.         |
| `dateStart`                                                                     | `date-start`         | `WorkDate`            | {"stamp":"","text":""} | Start date information including machine-readable stamp and display text.       |
| `experienceOrg`                                                                 | `experience-org`     | `string`              | ""                     | The name of the organization or client.                                         |
| `experienceRole`                                                                | `experience-role`    | `string`              | ""                     | The title of the professional role or project.                                  |
| `experienceSummary`                                                             | `experience-summary` | `string`              | ""                     | An optional summary of the overall role                                         |
| `isNested`                                                                      | `is-nested`          | `boolean`             | false                  | If true, adjusts font sizes and layout for a nested appearance.                 |
| `jobs`                                                                          | `jobs`               | `Job[]`               | []                     | A list of sub-jobs or project assignments to be rendered as nested experiences. |
| `object Object],[object Object],[object Object`                                 |                      |                       |                        |                                                                                 |
| `object Object],[object Object],[object Object],[object Object],[object Object` |                      |                       |                        |                                                                                 |
| `summaries`                                                                     | `summaries`          | `{ item: string; }[]` | []                     | A list of summary points describing achievements or responsibilities.           |

## Documents

- [docs/wca/markdown/artifact-connection](docs/wca/markdown/artifact-connection/README.md)
- [docs/wca/markdown/bento-card](docs/wca/markdown/bento-card/README.md)
- [docs/wca/markdown/bento-layout](docs/wca/markdown/bento-layout/README.md)
- [docs/wca/markdown/blog-card](docs/wca/markdown/blog-card/README.md)
- [docs/wca/markdown/blog-entry](docs/wca/markdown/blog-entry/README.md)
- [docs/wca/markdown/code-card](docs/wca/markdown/code-card/README.md)
- [docs/wca/markdown/code-repo](docs/wca/markdown/code-repo/README.md)
- [docs/wca/markdown/direct-connection](docs/wca/markdown/direct-connection/README.md)
- [docs/wca/markdown/education-card](docs/wca/markdown/education-card/README.md)
- [docs/wca/markdown/education-institution](docs/wca/markdown/education-institution/README.md)
- [docs/wca/markdown/experience-card](docs/wca/markdown/experience-card/README.md)
- [docs/wca/markdown/now-playing-card](docs/wca/markdown/now-playing-card/README.md)
- [docs/wca/markdown/professional-connection](docs/wca/markdown/professional-connection/README.md)
- [docs/wca/markdown/profile-card](docs/wca/markdown/profile-card/README.md)
- [docs/wca/markdown/README](docs/wca/markdown/README/README.md)
- [docs/wca/markdown/settings-card](docs/wca/markdown/settings-card/README.md)
- [docs/wca/markdown/skills-card](docs/wca/markdown/skills-card/README.md)
- [docs/wca/markdown/ui-mode-toggle](docs/wca/markdown/ui-mode-toggle/README.md)
- [docs/wca/markdown/version-tag](docs/wca/markdown/version-tag/README.md)
- [docs/wca/markdown/word-cloud](docs/wca/markdown/word-cloud/README.md)
- [docs/wca/markdown/word-tag](docs/wca/markdown/word-tag/README.md)
- [docs/wca/markdown/work-experience](docs/wca/markdown/work-experience/README.md)

## Modules

- [src/components/bento-layout/bento-layout.styles](src/components/bento-layout/bento-layout.styles/README.md)
- [src/components/bento-layout/bento-layout](src/components/bento-layout/bento-layout/README.md)
- [src/components/bento-layout/bento-layout.types](src/components/bento-layout/bento-layout.types/README.md)
- [src/components/blog/entry/blog-entry](src/components/blog/entry/blog-entry/README.md)
- [src/components/card/bento/bento-card](src/components/card/bento/bento-card/README.md)
- [src/components/card/blog/blog-card](src/components/card/blog/blog-card/README.md)
- [src/components/card/code/code-card](src/components/card/code/code-card/README.md)
- [src/components/card/education/education-card](src/components/card/education/education-card/README.md)
- [src/components/card/experience/experience-card](src/components/card/experience/experience-card/README.md)
- [src/components/card/profile/profile-card](src/components/card/profile/profile-card/README.md)
- [src/components/card/settings/settings-card](src/components/card/settings/settings-card/README.md)
- [src/components/card/skills/skills-card](src/components/card/skills/skills-card/README.md)
- [src/components/code/repo/code-repo.styles](src/components/code/repo/code-repo.styles/README.md)
- [src/components/code/repo/code-repo](src/components/code/repo/code-repo/README.md)
- [src/components/connection/direct/direct-connection](src/components/connection/direct/direct-connection/README.md)
- [src/components/ui-mode-toggle/ui-mode-toggle.styles](src/components/ui-mode-toggle/ui-mode-toggle.styles/README.md)
- [src/components/ui-mode-toggle/ui-mode-toggle](src/components/ui-mode-toggle/ui-mode-toggle/README.md)
- [src/components/word/cloud/word-cloud](src/components/word/cloud/word-cloud/README.md)
- [src/components/word/cloud/word-cloud.types](src/components/word/cloud/word-cloud.types/README.md)
- [src/components/word/tag/word-tag](src/components/word/tag/word-tag/README.md)
- [src/components/word/tag/word-tag.types](src/components/word/tag/word-tag.types/README.md)
- [src/components/work/experience/work-experience](src/components/work/experience/work-experience/README.md)
- [src/mixins/ui-aware-element/ui-aware-element](src/mixins/ui-aware-element/ui-aware-element/README.md)
- [src/styles/interaction-styles](src/styles/interaction-styles/README.md)
- [src/styles/text](src/styles/text/README.md)
- [src/types/theme](src/types/theme/README.md)
  </colorschemeconfigs></colorschemeconfigs></details></summary></h2></body></html>
