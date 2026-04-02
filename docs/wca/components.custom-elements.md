# app-shell

The core layout component for the application.
Handles theme switching, FAB configurations, and navigation slotting.
Uses Material Design 3 tokens and components.

## Slots

| Name                                            | Description                                   |
|-------------------------------------------------|-----------------------------------------------|
| `app-content`                                   | The place for the dynamic application content |
| `object Object],[object Object],[object Object` |                                               |


# blog-post

## Properties

| Property   | Attribute  | Type           | Default |
|------------|------------|----------------|---------|
| `blogPost` | `blogPost` | `BlogPostJson` | {}      |


# configs-dialog

A comprehensive configuration dialog for managing application settings.
Allows users to toggle dark mode, change color themes, adjust contrast,
and customize Floating Action Button (FAB) behaviors.

## Methods

| Method                       | Type                                             | Description                                      |
|------------------------------|--------------------------------------------------|--------------------------------------------------|
| `#renderFabSettingsFieldset` | `(fab: "settings" \| "connect", currentConfig: FabConfig): TemplateResult` |                                                  |
| `#renderUIFieldset`          | `(): TemplateResult`                             |                                                  |
| `hideDialog`                 | `(): Promise<void>`                              | Hides the configuration dialog.                  |
| `showDialog`                 | `(formContent?: FormContent): Promise<void>`     | Shows the configuration dialog.<br /><br />**formContent**: The initial section to display in the dialog. Defaults to "ui-mode". |

## Events

| Event                 | Type                                             | Description                                      |
|-----------------------|--------------------------------------------------|--------------------------------------------------|
| `color_scheme.change` | `CustomEvent<any>`                               | Dispatched when the UI theme, mode, or contrast is changed. |
| `fab.change`          | `CustomEvent<{ fab: "settings" \| "connect"; newFabConfig: FabConfig; }>` | Dispatched when a FAB's position or style is modified. |
| `stepUpOpen`          | `CustomEvent<{}>`                                |                                                  |


# connect-dialog

A dialog component that provides various contact methods and social links.
It features collapsible sections for different connection categories.

## Methods

| Method              | Type                                       | Description                                      |
|---------------------|--------------------------------------------|--------------------------------------------------|
| `#rederConnections` | `(connection: Connection): TemplateResult` |                                                  |
| `hideDialog`        | `(): Promise<void>`                        | [object Object],[object Object],[object Object]  |
| `showDialog`        | `(): Promise<void>`                        | Shows the connect dialog and applies a custom border to the internal container. |

## CSS Custom Properties

| Property                              | Default | Description                                      |
|---------------------------------------|---------|--------------------------------------------------|
| `--connect-dialog-content-transition` | "0.3s"  | The animation duration for expanding/collapsing connection details. |


# step-up-dialog

A versatile confirmation dialog used to verify user intent before performing
significant actions like resetting settings.

## Properties

| Property              | Attribute             | Type                 | Default   | Description                                      |
|-----------------------|-----------------------|----------------------|-----------|--------------------------------------------------|
| `dialogContentString` | `dialogContentString` | `string`             | ""        | The text content to display in the dialog body.  |
| `dialogStyle`         | `dialogStyle`         | `ConfirmDialogStyle` | "confirm" | The visual style variant of the dialog, affecting colors and icons. |

## Methods

| Method       | Type                | Description                            |
|--------------|---------------------|----------------------------------------|
| `showDialog` | `(): Promise<void>` | Shows the step-up confirmation dialog. |

## Events

| Event            | Type                                             | Description                                      |
|------------------|--------------------------------------------------|--------------------------------------------------|
| `stepUpComplete` | `CustomEvent<{ cancelled: boolean; confirmed: boolean; }>` | Dispatched when the user confirms or cancels the action. |

## Slots

| Name                                             | Description                       |
|--------------------------------------------------|-----------------------------------|
| `actions`                                        | The area of dialog action buttons |
| `object Object],[object Object`                  |                                   |
| `object Object],[object Object],[object Object],[object Object` |                                   |


# fab-menu-item

An action item within a `fab-menu`.

## Properties

| Property | Attribute | Type                                             | Default | Description                                    |
|----------|-----------|--------------------------------------------------|---------|------------------------------------------------|
| `icon`   | `icon`    | `"" \| "function" \| "settings" \| "bubbles" \| "warning" \| "123" \| "360" \| "10k" \| "10mp" \| "11mp" \| "12mp" \| "13mp" \| "14mp" \| "15mp" \| "16mp" \| "17mp" \| "18_up_rating" \| "18mp" \| "19mp" \| ... 3821 more ... \| "zoom_out_map"` | ""      | The icon to display inside the FAB item.       |
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

| Property     | Attribute     | Type                                             | Default   | Description                                      |
|--------------|---------------|--------------------------------------------------|-----------|--------------------------------------------------|
| `ariaLabel`  | `aria-label`  | `string`                                         | ""        | The `aria-label` of the FAB.                     |
| `direction`  | `direction`   | `"start" \| "end"`                               | "end"     | The direction in which the menu items should expand. |
| `icon`       | `icon`        | `"" \| "function" \| "settings" \| "bubbles" \| "warning" \| "123" \| "360" \| "10k" \| "10mp" \| "11mp" \| "12mp" \| "13mp" \| "14mp" \| "15mp" \| "16mp" \| "17mp" \| "18_up_rating" \| "18mp" \| "19mp" \| ... 3821 more ... \| "zoom_out_map"` | "add"     | [object Object],[object Object],[object Object],[object Object],[object Object] |
| `label`      | `label`       | `string`                                         | ""        | [object Object],[object Object],[object Object]  |
| `open`       | `open`        | `boolean`                                        | false     | Whether the menu is currently open.              |
| `openedIcon` | `opened-icon` | `"function" \| "settings" \| "bubbles" \| "warning" \| "123" \| "360" \| "10k" \| "10mp" \| "11mp" \| "12mp" \| "13mp" \| "14mp" \| "15mp" \| "16mp" \| "17mp" \| "18_up_rating" \| "18mp" \| "19mp" \| ... 3821 more ... \| "zoom_out_map"` | "close"   | The icon to display when the menu is open.<br />Defaults to 'close'. |
| `size`       | `size`        | `"small" \| "medium" \| "large"`                 | "medium"  | The size of the FAB.<br />Can be 'small', 'medium', or 'large'.<br />Defaults to 'medium'. |
| `variant`    | `variant`     | `"surface" \| "primary" \| "secondary" \| "tertiary"` | "primary" | The variant of the FAB.<br />Can be 'surface', 'primary', 'secondary', or 'tertiary'.<br />Defaults to 'primary'. |

## Slots

| Name                                            |
|-------------------------------------------------|
| `object Object],[object Object],[object Object` |

## CSS Custom Properties

| Property                         | Default | Description                                      |
|----------------------------------|---------|--------------------------------------------------|
| `--fab-menu-transition-duration` | "200ms" | The duration of the menu's opening and closing animations. |


# nav-component

A navigation component that renders primary tabs synchronized with the application's URL hash routes.

## Methods

| Method                      | Type                    | Description                                      |
|-----------------------------|-------------------------|--------------------------------------------------|
| `#handleHashChange`         | `(): void`              | Syncs internal state with the URL hash.          |
| `#onTabChange`              | `(event: Event): void`  | Handles user clicks on tabs. Updates URL and UI. |
| `#renderTabs`               | `(): TemplateResult`    | [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object] |
| `#tabIndexAndRouteFromHash` | `(): IndexRoute`        | [object Object],[object Object],[object Object],[object Object],[object Object],[object Object] |
| `#updateCarousel`           | `(index: number): void` |                                                  |
| `#updateTabState`           | `(index: number): void` | Updates the visual state of tabs and panels based on the index. |

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


# profile-section

A reusable section component for profile-related content.
Uses container queries to provide a responsive grid layout that adapts to available space.

API
--

## Properties

| Property       | Attribute       | Type     | Default | Description                                      |
|----------------|-----------------|----------|---------|--------------------------------------------------|
| `sectionTitle` | `section-title` | `string` | ""      | The title displayed in the section's header.<br />Maps to the `section-title` attribute. |


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


# work-experience

A component for displaying professional work experience entries.
Supports nesting for sub-roles or specific project assignments under a single employer.

## Properties

| Property                                         | Attribute            | Type                  | Default                | Description                                      |
|--------------------------------------------------|----------------------|-----------------------|------------------------|--------------------------------------------------|
| `dateEnd`                                        | `date-end`           | `WorkDate`            | {"stamp":"","text":""} | End date information including machine-readable stamp and display text. |
| `dateStart`                                      | `date-start`         | `WorkDate`            | {"stamp":"","text":""} | Start date information including machine-readable stamp and display text. |
| `experienceOrg`                                  | `experience-org`     | `string`              | ""                     | The name of the organization or client.          |
| `experienceOrg=""`                               |                      |                       |                        | The employer formal name                         |
| `experienceRole`                                 | `experience-role`    | `string`              | ""                     | The title of the professional role or project.   |
| `experienceSummary`                              | `experience-summary` | `string`              | ""                     |                                                  |
| `experienceSummary=""`                           |                      |                       |                        | An optional summary of the overall role          |
| `isNested`                                       | `is-nested`          | `boolean`             | false                  | If true, adjusts font sizes and layout for a nested appearance. |
| `isNested=false`                                 |                      |                       |                        | Whether this is a nested instance                |
| `jobs`                                           | `jobs`               | `Job[]`               | []                     | A list of sub-jobs or project assignments to be rendered as nested experiences. |
| `object Object],[object Object],[object Object`  |                      |                       |                        |                                                  |
| `object Object],[object Object],[object Object],[object Object],[object Object` |                      |                       |                        |                                                  |
| `summaries`                                      | `summaries`          | `{ item: string; }[]` | []                     | A list of summary points describing achievements or responsibilities. |
| `summaries=[]`                                   |                      |                       |                        | An array of `{ item: string }` objects describing the responsibilities |
