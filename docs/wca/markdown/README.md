# app-shell

## Slots

| Name                                            | Description                                   |
|-------------------------------------------------|-----------------------------------------------|
| `app-content`                                   | The place for the dynamic application content |
| `object Object],[object Object],[object Object` |                                               |


# blog-post

## Properties

| Property                                        | Attribute  | Type           | Default |
|-------------------------------------------------|------------|----------------|---------|
| `blogPost`                                      | `blogPost` | `BlogPostJson` | {}      |
| `object Object],[object Object],[object Object` |            |                |         |

## CSS Custom Properties

| Property                                         | Description                                      |
|--------------------------------------------------|--------------------------------------------------|
| `--blog-post-animation`                          | The duration of the animation for \`:focus\`, \`:hover\`,<br />\`:focus-within\`, and \`:focus-visible\` states |
| `--blog-post-primary-text-color`                 | The color of the primary text                    |
| `object Object],[object Object`                  |                                                  |
| `object Object],[object Object],[object Object],[object Object` |                                                  |


# code-project

## Properties

| Property                        | Attribute     | Type              | Default |
|---------------------------------|---------------|-------------------|---------|
| `codeProject`                   | `codeProject` | `CodeProjectData` | {}      |
| `object Object],[object Object` |               |                   |         |

## Methods

| Method               | Type                 | Description                                     |
|----------------------|----------------------|-------------------------------------------------|
| `#generateCardBack`  | `(): TemplateResult` | [object Object],[object Object],[object Object] |
| `#generateCardFront` | `(): TemplateResult` | [object Object],[object Object],[object Object] |

## CSS Custom Properties

| Property                   | Default | Description                                   |
|----------------------------|---------|-----------------------------------------------|
| `--code-project-animation` | "200ms" | The duration of the subtle hover/focus effect |
| `--code-project-rotation`  | "800ms" | The duration of the card rotation effect      |


# fab-menu-item

An action item within a `fab-menu`.

## Properties

| Property | Attribute | Type                                             | Default | Description                                    |
|----------|-----------|--------------------------------------------------|---------|------------------------------------------------|
| `icon`   | `icon`    | `"" \| "function" \| "settings" \| "123" \| "360" \| "10k" \| "10mp" \| "11mp" \| "12mp" \| "13mp" \| "14mp" \| "15mp" \| "16mp" \| "17mp" \| "18_up_rating" \| "18mp" \| "19mp" \| "1k" \| "1k_plus" \| ... 3851 more ... \| "zoom_out_map"` | ""      | The icon to display inside the FAB item.       |
| `label`  | `label`   | `string`                                         | ""      | The text label displayed next to the FAB item. |

## Methods

| Method  | Type                                          | Description                                      |
|---------|-----------------------------------------------|--------------------------------------------------|
| `focus` | `(options?: FocusOptions \| undefined): void` | Focuses the underlying FAB element.<br /><br />**options**: Standard browser focus options. |

## CSS Custom Properties

| Property                        | Default | Description                              |
|---------------------------------|---------|------------------------------------------|
| `--fab-menu-item-padding-end`   | 0       | The logical `padding-inline-end` value   |
| `--fab-menu-item-padding-start` | 0       | The logical `padding-inline-start` value |
| `object Object],[object Object` |         |                                          |


# fab-menu

A floating action button that toggles a menu of actions.

## Properties

| Property                                        | Attribute     | Type                                             | Default   | Description                                      |
|-------------------------------------------------|---------------|--------------------------------------------------|-----------|--------------------------------------------------|
| `ariaLabel`                                     | `aria-label`  | `string`                                         | ""        | The `aria-label` of the FAB.                     |
| `direction`                                     | `direction`   | `string`                                         | "end"     | The direction in which the menu items should expand. |
| `icon`                                          | `icon`        | `"" \| "function" \| "settings" \| "123" \| "360" \| "10k" \| "10mp" \| "11mp" \| "12mp" \| "13mp" \| "14mp" \| "15mp" \| "16mp" \| "17mp" \| "18_up_rating" \| "18mp" \| "19mp" \| "1k" \| "1k_plus" \| ... 3851 more ... \| "zoom_out_map"` | "add"     | [object Object],[object Object],[object Object],[object Object],[object Object] |
| `label`                                         | `label`       | `string`                                         | ""        | [object Object],[object Object],[object Object]  |
| `object Object],[object Object],[object Object` |               |                                                  |           |                                                  |
| `open`                                          | `open`        | `boolean`                                        | false     | Whether the menu is currently open.              |
| `openedIcon`                                    | `opened-icon` | `"function" \| "settings" \| "123" \| "360" \| "10k" \| "10mp" \| "11mp" \| "12mp" \| "13mp" \| "14mp" \| "15mp" \| "16mp" \| "17mp" \| "18_up_rating" \| "18mp" \| "19mp" \| "1k" \| "1k_plus" \| "1x_mobiledata" \| ... 3850 more ... \| "zoom_out_map"` | "close"   | The icon to display when the menu is open.<br />Defaults to 'close'. |
| `size`                                          | `size`        | `"small" \| "medium" \| "large"`                 | "medium"  | The size of the FAB.<br />Can be 'small', 'medium', or 'large'.<br />Defaults to 'medium'. |
| `variant`                                       | `variant`     | `string`                                         | "primary" | The variant of the FAB.<br />Can be 'surface', 'primary', 'secondary', or 'tertiary'.<br />Defaults to 'primary'. |

## Slots

| Name                                            |
|-------------------------------------------------|
| `object Object],[object Object],[object Object` |

## CSS Custom Properties

| Property                                        | Default | Description                                      |
|-------------------------------------------------|---------|--------------------------------------------------|
| `--fab-menu-transition-duration`                | "200ms" | The duration of the menu's opening and closing animations |
| `object Object],[object Object],[object Object` |         |                                                  |


# info-section

A reusable section component for profile-related content.
Uses container queries to provide a responsive grid layout that adapts to available space.

API
--

## Properties

| Property       | Attribute       | Type     | Default | Description                                      |
|----------------|-----------------|----------|---------|--------------------------------------------------|
| `sectionTitle` | `section-title` | `string` | ""      | The title displayed in the section's header.<br />Maps to the `section-title` attribute. |


# nav-component

A navigation component that renders primary tabs synchronized with the application's URL hash routes.

## Methods

| Method                      | Type                                  | Description                                      |
|-----------------------------|---------------------------------------|--------------------------------------------------|
| `#handleHashChange`         | `(): void`                            | Syncs internal state with the URL hash.          |
| `#onTabChange`              | `(event: Event): void`                | Handles user clicks on tabs. Updates URL and UI.<br /><br />**event**: [object Object],[object Object],[object Object] |
| `#renderTabs`               | `(): TemplateResult`                  | [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object] |
| `#tabIndexAndRouteFromHash` | `():  index  : number, route: Route ` | [object Object],[object Object],[object Object],[object Object],[object Object],[object Object] |
| `#updateCarousel`           | `(index: number): void`               | Updates external DOM via style manipulations and blind queries<br /><br />**index**: [object Object],[object Object] |
| `#updateTabState`           | `(index: number): void`               | Updates the visual state of tabs and panels based on the index. |

## CSS Custom Properties

| Property                                 | Default | Description                                      |
|------------------------------------------|---------|--------------------------------------------------|
| `--nav-component-icon-animation`         | "225ms" | The duration of the icon's fill and color transition. |
| `--nav-component-icon-animation-reduced` | "1ms"   | The duration of the icon's transition when motion is reduced. |


# partial-header

A header component used for section titles with support for primary, secondary, and tertiary Material color variants.

## Properties

| Property      | Attribute      | Type                                             | Default   | Description                                      |
|---------------|----------------|--------------------------------------------------|-----------|--------------------------------------------------|
| `headerType`  | `header-type`  | `"primary" \| "secondary" \| "tertiary" \| "inverse"` | "primary" | The color variant theme for the header background and text.<br />Can be 'primary', 'secondary', or 'tertiary'. |
| `headingText` | `heading-text` | `string`                                         | ""        | The text to display within the header.           |


# word-cloud

A component that renders a cloud of words with various sorting and grouping options.

## Properties

| Property       | Attribute       | Type                  | Default      | Description                                      |
|----------------|-----------------|-----------------------|--------------|--------------------------------------------------|
| `appearance`   | `appearance`    | `WordCloudAppearance` | "SEQUENTIAL" | Controls the order in which words are animated/displayed.<br /><br />Can be 'sequential' (words appear one by one) or 'simultaneous' (words appear all at once). |
| `delay`        | `delay`         | `number \| "none"`    | "none"       | The delay in milliseconds between word appearances when using sequential mode.<br /><br />Set to "none" to use the component's internal default delays. |
| `grouping`     | `grouping`      | `WordCloudGrouping`   | "UNGROUPED"  | Controls how words are grouped together within the cloud.<br /><br />Supported modes: 'category', 'quartile', or 'ungrouped'. |
| `instantClear` | `instant-clear` | `boolean`             | false        | Whether to clear the word cloud instantly when it is no longer visible.<br />When true, the cloud resets instantly to opacity 0 instead of fading out. |
| `sorting`      | `sorting`       | `WordCloudSorting`    | "NONE"       | Controls how words are sorted within their groupings.<br /><br />Supported modes: 'by-weight', 'by-weight-reversed', 'by-alphabet', 'by-alphabet-reversed', or 'none'. |
| `threshold`    | `threshold`     | `number`              | 0.1          | The intersection observer threshold for visibility detection.<br /><br />A value between 0 and 1 indicating what percentage of the element must be visible to trigger animation. |
| `words`        | `words`         | `WordCloudWord[]`     | []           | The list of words to display in the cloud.       |

## CSS Custom Properties

| Property                                   | Default   | Description                                      |
|--------------------------------------------|-----------|--------------------------------------------------|
| `--word-cloud-animation`                   | "150ms"   | Duration of the entrance animation for each word. |
| `--word-cloud-animation-reduced`           | "1ms"     | Duration of the entrance animation when prefers-reduced-motion is active. |
| `--word-cloud-first-quartile-font-size`    | "1.75rem" | Font size for words in the first weight quartile (highest weight). |
| `--word-cloud-first-quartile-line-height`  | "1.75rem" | Line height for words in the first weight quartile. |
| `--word-cloud-fourth-quartile-font-size`   | "1rem"    | Font size for words in the fourth weight quartile (lowest weight). |
| `--word-cloud-fourth-quartile-line-height` | "1rem"    | Line height for words in the fourth weight quartile. |
| `--word-cloud-second-quartile-font-size`   | "1.5rem"  | Font size for words in the second weight quartile. |
| `--word-cloud-second-quartile-line-height` | "1.5rem"  | Line height for words in the second weight quartile. |
| `--word-cloud-third-quartile-font-size`    | "1.25rem" | Font size for words in the third weight quartile. |
| `--word-cloud-third-quartile-line-height`  | "1.25rem" | Line height for words in the third weight quartile. |


# word-tag

## Properties

| Property                                         | Attribute   | Type               | Default  | Description                                      |
|--------------------------------------------------|-------------|--------------------|----------|--------------------------------------------------|
| `heaviness`                                      | `heaviness` | `WordTagHeaviness` | "normal" | The weight of the tag (text & border), can be<br />`"normal"` (`--md-ref-typeface-weight-regular` & `--hairline-width`) or<br />`"heavy"` (`--md-ref-typeface-weight-bold` & `2.5 * --hairline-width`) |
| `hrefUrl`                                        | `hrefUrl`   | `string`           | ""       |                                                  |
| `object Object],[object Object],[object Object],[object Object` |             |                    |          |                                                  |
| `word`                                           | `word`      | `string`           | ""       | The tagged word                                  |

## CSS Custom Properties

| Property                      | Default                                  | Description                         |
|-------------------------------|------------------------------------------|-------------------------------------|
| `--word-tag-background-color` | "--md-sys-color-primary-container"       | The background color                |
| `--word-tag-border-radius`    | "--md-sys-shape-corner-small"            | The corner radius (for all corners) |
| `--word-tag-color`            | "--md-sys-color-on-primary-container"    | The text and border color           |
| `--word-tag-font-family`      | "--md-ref-typeface-brand"                | The font family                     |
| `--word-tag-font-size`        | "--md-typescale-body-large-font-size"    | The font size                       |
| `--word-tag-font-weight`      | "--md-ref-typeface-weight-regular"       | The font weight                     |
| `--word-tag-line-height`      | "--md-typescale-body-large-lingt-height" | The line height                     |


# work-experience

## Properties

| Property                                         | Attribute            | Type                  | Default                | Description                                      |
|--------------------------------------------------|----------------------|-----------------------|------------------------|--------------------------------------------------|
| `dateEnd`                                        | `date-end`           | `WorkDate`            | {"stamp":"","text":""} | End date information including machine-readable stamp and display text. |
| `dateStart`                                      | `date-start`         | `WorkDate`            | {"stamp":"","text":""} | Start date information including machine-readable stamp and display text. |
| `experienceOrg`                                  | `experience-org`     | `string`              | ""                     | The name of the organization or client.          |
| `experienceRole`                                 | `experience-role`    | `string`              | ""                     | The title of the professional role or project.   |
| `experienceSummary`                              | `experience-summary` | `string`              | ""                     | An optional summary of the overall role          |
| `isNested`                                       | `is-nested`          | `boolean`             | false                  | If true, adjusts font sizes and layout for a nested appearance. |
| `jobs`                                           | `jobs`               | `Job[]`               | []                     | A list of sub-jobs or project assignments to be rendered as nested experiences. |
| `object Object],[object Object],[object Object`  |                      |                       |                        |                                                  |
| `object Object],[object Object],[object Object],[object Object],[object Object` |                      |                       |                        |                                                  |
| `summaries`                                      | `summaries`          | `{ item: string; }[]` | []                     | A list of summary points describing achievements or responsibilities. |


# blog-partial


# code-partial


# info-partial


# work-partial
