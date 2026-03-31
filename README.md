## `src/components/index.ts`:

### Exports

| Kind | Name | Declaration | Module                                         | Package |
| ---- | ---- | ----------- | ---------------------------------------------- | ------- |
| `js` | `*`  | \*          | src/components/app-shell/app-shell             |         |
| `js` | `*`  | \*          | src/components/blog-post/blog-post             |         |
| `js` | `*`  | \*          | src/components/dialogs/configs/configs-dialog  |         |
| `js` | `*`  | \*          | src/components/dialogs/step-up/step-up-dialog  |         |
| `js` | `*`  | \*          | src/components/fab-menu/fab-menu               |         |
| `js` | `*`  | \*          | src/components/fab-menu/fab-menu-item          |         |
| `js` | `*`  | \*          | src/components/nav/nav-component               |         |
| `js` | `*`  | \*          | src/components/partial-header/partial-header   |         |
| `js` | `*`  | \*          | src/components/profile-section/profile-section |         |
| `js` | `*`  | \*          | src/components/word-cloud/word-cloud           |         |
| `js` | `*`  | \*          | src/components/work-experience/work-experience |         |

## `src/components/app-shell/app-shell.ts`:

### class: `AppShell`, `app-shell`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Slots

| Name          | Description                                   |
| ------------- | --------------------------------------------- |
| `app-nav`     | Where the {@link NavComponent} is placed      |
| `app-content` | The place for the dynamic application content |

<details><summary>Private API</summary>

#### Fields

| Name                  | Privacy | Type                                       | Default | Description                                                                                                      | Inherited From |
| --------------------- | ------- | ------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------- | -------------- |
| `appConfigs`          | private | `AppConfigs`                               |         | The current global application configuration state.                                                              |                |
| `_uiModeIcon`         | private | `"dark_mode" \| "light_mode" \| "routine"` |         | The icon associated with the current color scheme mode.                                                          |                |
| `configsDialog`       | private | `ConfigsDialog`                            |         | Reference to the configuration dialog.                                                                           |                |
| `fabMenu`             | private | `FabMenu`                                  |         | Reference to the FAB menu component.                                                                             |                |
| `settingsFabConfig`   | private | `FabConfig`                                |         | The configuration for the settings FAB.                                                                          |                |
| `connectDialog`       | private | `ConnectDialog`                            |         | Reference to the connect dialog.                                                                                 |                |
| `connectFab`          | private | `MdFab`                                    |         | Reference to the connect FAB.&#xA;This is an MdFab component.                                                    |                |
| `connectFabConfig`    | private | `FabConfig`                                |         |                                                                                                                  |                |
| `_openDialogCount`    | private | `number`                                   | `0`     |                                                                                                                  |                |
| `onFabChangeBind`     | private |                                            |         |                                                                                                                  |                |
| `onFabConfigBind`     | private |                                            |         |                                                                                                                  |                |
| `onColorSchemeChange` | private |                                            |         | Event handler for color scheme changes.&#xA;Updates the UI icon, Material theme variables, and meta theme color. |                |
| `onAppConfigsChange`  | private |                                            |         | Syncs the component state with the global application configuration.                                             |                |

#### Methods

| Name                  | Privacy | Description                                                                                                          | Parameters                                           | Return | Inherited From |
| --------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------ | -------------- |
| `onFabChange`         | private | Updates the state and DOM representation of a FAB when its configuration changes.                                    | `fab: "settings" \| "connect", fabConfig: FabConfig` |        |                |
| `uiModeIcon`          | private | Maps a color scheme name to a Material icon name.                                                                    | `colorScheme: AppConfigs["colorScheme"]`             |        |                |
| `_handleDialogOpened` | private | Tracks open dialogs to manage body scroll locking.                                                                   |                                                      |        |                |
| `_handleDialogClosed` | private | Tracks closed dialogs to manage body scroll restoration.                                                             |                                                      |        |                |
| `_onFabMenuItemClick` | private | Handles clicks on FAB menu items.&#xA;Closes the menu and opens the configuration dialog with the requested content. | `formContent: FormContent`                           |        |                |
| `_getFabLabel`        | private | Generates the label string for a FAB based on its configuration style.                                               | `fab: string, config: FabConfig`                     |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `js`                        | `AppShell`  | AppShell    | src/components/app-shell/app-shell.ts |         |
| `custom-element-definition` | `app-shell` | AppShell    | src/components/app-shell/app-shell.ts |         |

## `src/components/blog-post/blog-post.ts`:

### class: `BlogPost`, `blog-post`

#### Superclass

| Name         | Module | Package     |
| ------------ | ------ | ----------- |
| `LitElement` |        | lit-element |

#### Fields

| Name       | Privacy | Type                    | Default | Description | Inherited From |
| ---------- | ------- | ----------------------- | ------- | ----------- | -------------- |
| `blogPost` |         | `Partial<BlogPostJson>` | `{}`    |             |                |

#### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `blogPost` | blogPost |                |

<details><summary>Private API</summary>

#### Fields

| Name                | Privacy | Type                     | Default | Description | Inherited From |
| ------------------- | ------- | ------------------------ | ------- | ----------- | -------------- |
| `darkMode`          | private |                          |         |             |                |
| `onAppConfigChange` | private | `(event: Event) => void` |         |             |                |

</details>

<hr/>

### Exports

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `js`                        | `BlogPost`  | BlogPost    | src/components/blog-post/blog-post.ts |         |
| `custom-element-definition` | `blog-post` | BlogPost    | src/components/blog-post/blog-post.ts |         |

## `src/components/fab-menu/fab-menu-item.ts`:

### class: `FabMenuItem`, `fab-menu-item`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name    | Privacy | Type                   | Default | Description                                    | Inherited From |
| ------- | ------- | ---------------------- | ------- | ---------------------------------------------- | -------------- |
| `label` |         | `string`               | `""`    | The text label displayed next to the FAB item. |                |
| `icon`  |         | `MaterialSymbol \| ""` | `""`    | The icon to display inside the FAB item.       |                |

#### Methods

| Name    | Privacy | Description                         | Parameters              | Return | Inherited From |
| ------- | ------- | ----------------------------------- | ----------------------- | ------ | -------------- |
| `focus` |         | Focuses the underlying FAB element. | `options: FocusOptions` |        |                |

#### Attributes

| Name    | Field | Inherited From |
| ------- | ----- | -------------- |
| `label` | label |                |
| `icon`  | icon  |                |

#### CSS Properties

| Name                            | Default    | Description                                             |
| ------------------------------- | ---------- | ------------------------------------------------------- |
| `--fab-menu-item-direction`     | `row`      | The \`flex-direction\` of the {@link FabMenuItem}       |
| `--fab-menu-item-justify`       | `flex-end` | The Flex \`justify-content\` of the {@link FabMenuItem} |
| `--fab-menu-item-padding-end`   | `0`        | The logical \`padding-inline-end\` value                |
| `--fab-menu-item-padding-start` | `0`        | The logical \`padding-inline-start\` value              |

<details><summary>Private API</summary>

#### Fields

| Name   | Privacy | Type    | Default | Description | Inherited From |
| ------ | ------- | ------- | ------- | ----------- | -------------- |
| `_fab` | private | `MdFab` |         |             |                |

</details>

<hr/>

### Exports

| Kind                        | Name            | Declaration | Module                                   | Package |
| --------------------------- | --------------- | ----------- | ---------------------------------------- | ------- |
| `js`                        | `FabMenuItem`   | FabMenuItem | src/components/fab-menu/fab-menu-item.ts |         |
| `custom-element-definition` | `fab-menu-item` | FabMenuItem | src/components/fab-menu/fab-menu-item.ts |         |

## `src/components/fab-menu/fab-menu.ts`:

### class: `FabMenu`, `fab-menu`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name         | Privacy | Type                                                  | Default     | Description                                                                                                             | Inherited From |
| ------------ | ------- | ----------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- | -------------- |
| `open`       |         | `boolean`                                             | `false`     | Whether the menu is currently open.                                                                                     |                |
| `icon`       |         | `MaterialSymbol \| ""`                                | `"add"`     | The MaterialSymbol to display when the menu&#xA;is closed. Defaults to 'add'. An empty string&#xA;  suppresses the icon |                |
| `openedIcon` |         | `MaterialSymbol`                                      | `"close"`   | The icon to display when the menu is open.&#xA;Defaults to 'close'.                                                     |                |
| `variant`    |         | `"surface" \| "primary" \| "secondary" \| "tertiary"` | `"primary"` | The variant of the FAB.&#xA;Can be 'surface', 'primary', 'secondary', or 'tertiary'.&#xA;Defaults to 'primary'.         |                |
| `size`       |         | `"small" \| "medium" \| "large"`                      | `"medium"`  | The size of the FAB.&#xA;Can be 'small', 'medium', or 'large'.&#xA;Defaults to 'medium'.                                |                |
| `label`      |         | `string`                                              | `""`        | The label of the underlying MdFab.&#xA;Defaults to an empty string.                                                     |                |
| `ariaLabel`  |         | `string`                                              | `""`        | The \`aria-label\` of the FAB.                                                                                          |                |
| `direction`  |         | `"start" \| "end"`                                    | `"end"`     | The direction in which the menu items should expand.                                                                    |                |

#### Attributes

| Name          | Field      | Inherited From |
| ------------- | ---------- | -------------- |
| `open`        | open       |                |
| `icon`        | icon       |                |
| `opened-icon` | openedIcon |                |
| `variant`     | variant    |                |
| `size`        | size       |                |
| `label`       | label      |                |
| `aria-label`  | ariaLabel  |                |
| `direction`   | direction  |                |

#### CSS Properties

| Name                             | Default | Description                                                |
| -------------------------------- | ------- | ---------------------------------------------------------- |
| `--fab-menu-transition-duration` | `200ms` | The duration of the menu's opening and closing animations. |

#### Slots

| Name         | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| `menu-items` | The content of the menu, typically {@link FabMenuItem} elements. |

<details><summary>Private API</summary>

#### Fields

| Name                   | Privacy | Type                                                            | Default | Description | Inherited From |
| ---------------------- | ------- | --------------------------------------------------------------- | ------- | ----------- | -------------- |
| `_fab`                 | private | `MdFab`                                                         |         |             |                |
| `_items`               | private | `FabMenuItem[]`                                                 |         |             |                |
| `_focusableElements`   | private | `(HTMLElement & { focus: (options?: FocusOptions) => void })[]` |         |             |                |
| `_handleDocumentClick` | private |                                                                 |         |             |                |

#### Methods

| Name               | Privacy | Description | Parameters      | Return | Inherited From |
| ------------------ | ------- | ----------- | --------------- | ------ | -------------- |
| `_handleFocusTrap` | private |             | `e: FocusEvent` |        |                |
| `_toggle`          | private |             |                 |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name       | Declaration | Module                              | Package |
| --------------------------- | ---------- | ----------- | ----------------------------------- | ------- |
| `js`                        | `FabMenu`  | FabMenu     | src/components/fab-menu/fab-menu.ts |         |
| `custom-element-definition` | `fab-menu` | FabMenu     | src/components/fab-menu/fab-menu.ts |         |

## `src/components/partial-header/partial-header.ts`:

### class: `PartialHeader`, `partial-header`

#### Superclass

| Name         | Module | Package     |
| ------------ | ------ | ----------- |
| `LitElement` |        | lit-element |

#### Fields

| Name          | Privacy | Type                                                  | Default     | Description                                                                                                   | Inherited From |
| ------------- | ------- | ----------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- | -------------- |
| `headingText` |         | `string`                                              | `""`        | The text to display within the header.                                                                        |                |
| `headerType`  |         | `"primary" \| "secondary" \| "tertiary" \| "inverse"` | `"primary"` | The color variant theme for the header background and text.&#xA;Can be 'primary', 'secondary', or 'tertiary'. |                |

#### Attributes

| Name           | Field       | Inherited From |
| -------------- | ----------- | -------------- |
| `heading-text` | headingText |                |
| `header-type`  | headerType  |                |

<hr/>

### Exports

| Kind                        | Name             | Declaration   | Module                                          | Package |
| --------------------------- | ---------------- | ------------- | ----------------------------------------------- | ------- |
| `js`                        | `PartialHeader`  | PartialHeader | src/components/partial-header/partial-header.ts |         |
| `custom-element-definition` | `partial-header` | PartialHeader | src/components/partial-header/partial-header.ts |         |

## `src/components/profile-section/profile-section.ts`:

### class: `ProfileSection`, `profile-section`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name           | Privacy | Type     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                         | Inherited From |
| -------------- | ------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `sectionTitle` |         | `string` | `""`    | The text shown in the section heading (\`\<h2>\`). Corresponds to the attribute \`section-title\`. Slot API -- \<slot name="section-grid-content">: (required) Container for section body content. Preserves the responsive grid layout. Example: \`\`\`html \<profile-section section-title="Experience"> \<div slot="section-grid-content"> ...your list, cards, or details... \</div> \</profile-section> \`\`\` |                |

#### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `section-title` | sectionTitle |                |

<hr/>

### Exports

| Kind                        | Name              | Declaration    | Module                                            | Package |
| --------------------------- | ----------------- | -------------- | ------------------------------------------------- | ------- |
| `js`                        | `ProfileSection`  | ProfileSection | src/components/profile-section/profile-section.ts |         |
| `custom-element-definition` | `profile-section` | ProfileSection | src/components/profile-section/profile-section.ts |         |

## `src/components/nav/nav-component.ts`:

### class: `NavComponent`, `nav-component`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### CSS Properties

| Name                                     | Default | Description                                                   |
| ---------------------------------------- | ------- | ------------------------------------------------------------- |
| `--nav-component-icon-animation`         | `225ms` | The duration of the icon's fill and color transition.         |
| `--nav-component-icon-animation-reduced` | `1ms`   | The duration of the icon's transition when motion is reduced. |

<details><summary>Private API</summary>

#### Fields

| Name                 | Privacy | Type                               | Default                                                                                    | Description | Inherited From |
| -------------------- | ------- | ---------------------------------- | ------------------------------------------------------------------------------------------ | ----------- | -------------- |
| `_activeTabIndex`    | private | `number`                           | `0`                                                                                        |             |                |
| `_activeRoute`       | private | `Route`                            |                                                                                            |             |                |
| `_exitingRoute`      | private | `Route \| null`                    | `null`                                                                                     |             |                |
| `#inlineIconTimeout` | private | `number`                           | `0`                                                                                        |             |                |
| `#tabsRef`           | private | `Ref<MdTabs>`                      |                                                                                            |             |                |
| `_tabRefMap`         | private | `Record<Route, Ref<MdPrimaryTab>>` | `{ experience: createRef(), code: createRef(), profile: createRef(), blog: createRef(), }` |             |                |
| `#routes`            | private | `Route[]`                          |                                                                                            |             |                |
| `#boundListener`     | private |                                    |                                                                                            |             |                |

#### Methods

| Name                        | Privacy | Description                                                                                | Parameters      | Return           | Inherited From |
| --------------------------- | ------- | ------------------------------------------------------------------------------------------ | --------------- | ---------------- | -------------- |
| `#tabIndexAndRouteFromHash` | private | Reads window\.location.hash and returns an object containing the Route and indexing number |                 |                  |                |
| `#handleHashChange`         | private | Syncs internal state with the URL hash.                                                    |                 |                  |                |
| `#updateTabState`           | private | Updates the visual state of tabs and panels based on the index.                            | `index: number` |                  |                |
| `#updateCarousel`           | private |                                                                                            | `index: number` |                  |                |
| `#onTabChange`              | private | Handles user clicks on tabs. Updates URL and UI.                                           | `event: Event`  |                  |                |
| `#renderTabs`               | private | Creates a TemplateResult\[] consisting of MdPrimaryTabs and their child MdIcons            |                 | `TemplateResult` |                |

</details>

<hr/>

### Exports

| Kind                        | Name            | Declaration  | Module                              | Package |
| --------------------------- | --------------- | ------------ | ----------------------------------- | ------- |
| `js`                        | `NavComponent`  | NavComponent | src/components/nav/nav-component.ts |         |
| `custom-element-definition` | `nav-component` | NavComponent | src/components/nav/nav-component.ts |         |

## `src/components/word-cloud/word-cloud.ts`:

### class: `WordCloud`, `word-cloud`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name           | Privacy | Type                        | Default  | Description                                                                                                                                                                    | Inherited From |
| -------------- | ------- | --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `words`        |         | `WordCloudWord[]`           | `[]`     | The list of words to display in the cloud.                                                                                                                                     |                |
| `instantClear` |         | `boolean`                   | `false`  | Whether to clear the word cloud instantly when it is no longer visible.&#xA;When true, the cloud resets instantly to opacity 0 instead of fading out.                          |                |
| `appearance`   |         | `WordCloudAppearance`       |          | Controls the order in which words are animated/displayed.&#xA;&#xA;Can be 'sequential' (words appear one by one) or 'simultaneous' (words appear all at once).                 |                |
| `grouping`     |         | `WordCloudGrouping`         |          | Controls how words are grouped together within the cloud.&#xA;&#xA;Supported modes: 'category', 'quartile', or 'ungrouped'.                                                    |                |
| `sorting`      |         | `WordCloudSorting`          |          | Controls how words are sorted within their groupings.&#xA;&#xA;Supported modes: 'by-weight', 'by-weight-reversed', 'by-alphabet', 'by-alphabet-reversed', or 'none'.           |                |
| `delay`        |         | `number \| "none"`          | `"none"` | The delay in milliseconds between word appearances when using sequential mode.&#xA;&#xA;Set to "none" to use the component's internal default delays.                          |                |
| `threshold`    |         | `number`                    | `0.1`    | The intersection observer threshold for visibility detection.&#xA;&#xA;A value between 0 and 1 indicating what percentage of the element must be visible to trigger animation. |                |
| `_sortedWords` |         | `RenderableWordCloudWord[]` | `[]`     |                                                                                                                                                                                |                |

#### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `words`         | words        |                |
| `instant-clear` | instantClear |                |
| `appearance`    | appearance   |                |
| `grouping`      | grouping     |                |
| `sorting`       | sorting      |                |
| `delay`         | delay        |                |
| `threshold`     | threshold    |                |

#### CSS Properties

| Name                                       | Default   | Description                                                               |
| ------------------------------------------ | --------- | ------------------------------------------------------------------------- |
| `--word-cloud-animation`                   | `150ms`   | Duration of the entrance animation for each word.                         |
| `--word-cloud-animation-reduced`           | `1ms`     | Duration of the entrance animation when prefers-reduced-motion is active. |
| `--word-cloud-first-quartile-font-size`    | `1.75rem` | Font size for words in the first weight quartile (highest weight).        |
| `--word-cloud-first-quartile-line-height`  | `1.75rem` | Line height for words in the first weight quartile.                       |
| `--word-cloud-second-quartile-font-size`   | `1.5rem`  | Font size for words in the second weight quartile.                        |
| `--word-cloud-second-quartile-line-height` | `1.5rem`  | Line height for words in the second weight quartile.                      |
| `--word-cloud-third-quartile-font-size`    | `1.25rem` | Font size for words in the third weight quartile.                         |
| `--word-cloud-third-quartile-line-height`  | `1.25rem` | Line height for words in the third weight quartile.                       |
| `--word-cloud-fourth-quartile-font-size`   | `1rem`    | Font size for words in the fourth weight quartile (lowest weight).        |
| `--word-cloud-fourth-quartile-line-height` | `1rem`    | Line height for words in the fourth weight quartile.                      |

<details><summary>Private API</summary>

#### Fields

| Name                    | Privacy | Type                                | Default | Description | Inherited From |
| ----------------------- | ------- | ----------------------------------- | ------- | ----------- | -------------- |
| `_isVisible`            | private | `boolean`                           | `false` |             |                |
| `_listElement`          | private | `HTMLUListElement`                  |         |             |                |
| `_intersectionObserver` | private | `IntersectionObserver \| undefined` |         |             |                |

#### Methods

| Name                        | Privacy | Description | Parameters                  | Return                                                                              | Inherited From |
| --------------------------- | ------- | ----------- | --------------------------- | ----------------------------------------------------------------------------------- | -------------- |
| `_initIntersectionObserver` | private |             |                             |                                                                                     |                |
| `_processWords`             | private |             |                             | `RenderableWordCloudWord[]`                                                         |                |
| `_getSortFunction`          | private |             | `sorting: WordCloudSorting` | `((a: RenderableWordCloudWord, b: RenderableWordCloudWord) => number) \| undefined` |                |

</details>

<hr/>

### Exports

| Kind                        | Name         | Declaration | Module                                  | Package |
| --------------------------- | ------------ | ----------- | --------------------------------------- | ------- |
| `js`                        | `WordCloud`  | WordCloud   | src/components/word-cloud/word-cloud.ts |         |
| `custom-element-definition` | `word-cloud` | WordCloud   | src/components/word-cloud/word-cloud.ts |         |

## `src/components/work-experience/work-experience.ts`:

### class: `WorkExperience`, `work-experience`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name                   | Privacy | Type                 | Default                   | Description                                                                          | Inherited From |
| ---------------------- | ------- | -------------------- | ------------------------- | ------------------------------------------------------------------------------------ | -------------- |
| `isNested`             |         | `boolean`            | `false`                   | If true, adjusts font sizes and layout for a nested appearance.                      |                |
| `experienceRole`       |         | `string`             | `""`                      | The title of the professional role or project.                                       |                |
| `experienceOrg`        |         | `string`             | `""`                      | The name of the organization or client.                                              |                |
| `experienceSummary`    |         | `string`             | `""`                      |                                                                                      |                |
| `dateStart`            |         | `WorkDate`           | `{ stamp: "", text: "" }` | Start date information including machine-readable stamp and display text.            |                |
| `dateEnd`              |         | `WorkDate`           | `{ stamp: "", text: "" }` | End date information including machine-readable stamp and display text.              |                |
| `summaries`            |         | `{ item: string }[]` | `[]`                      | A list of summary points describing achievements or responsibilities.                |                |
| `jobs`                 |         | `Job[]`              | `[]`                      | A list of sub-jobs or project assignments to be rendered as nested experiences.      |                |
| `isNesting=false`      |         |                      |                           | Whether this is a nested instance                                                    |                |
| `experienceRole=""`    |         |                      |                           | The formal role from the {@link WorkExperience} instance                             |                |
| `experienceOrg=""`     |         |                      |                           | The employer formal name                                                             |                |
| `experienceSummary=""` |         |                      |                           | An optional summary of the overall role                                              |                |
| `dateStart={`          |         |                      |                           | stamp: "", text: "" } - A {@link WorkDate} instance describing employment start date |                |
| `dateEnd={`            |         |                      |                           | stamp: "", text: "" } - A {@link WorkDate} instance describing employment end date   |                |
| `summaries=[]`         |         |                      |                           | An array of \`{ item: string }\` objects describing the responsibilities             |                |
| `jobs=[]`              |         |                      |                           | An array of {@link Job}s rendered as nested {@link WorkExperience} instances         |                |

#### Attributes

| Name                 | Field             | Inherited From |
| -------------------- | ----------------- | -------------- |
| `is-nested`          | isNested          |                |
| `experience-role`    | experienceRole    |                |
| `experience-org`     | experienceOrg     |                |
| `experience-summary` | experienceSummary |                |
| `date-start`         | dateStart         |                |
| `date-end`           | dateEnd           |                |
| `summaries`          | summaries         |                |
| `jobs`               | jobs              |                |

<hr/>

### Exports

| Kind                        | Name              | Declaration    | Module                                            | Package |
| --------------------------- | ----------------- | -------------- | ------------------------------------------------- | ------- |
| `js`                        | `WorkExperience`  | WorkExperience | src/components/work-experience/work-experience.ts |         |
| `custom-element-definition` | `work-experience` | WorkExperience | src/components/work-experience/work-experience.ts |         |

## `src/components/dialogs/step-up/step-up-dialog.ts`:

### class: `StepUpDialog`, `step-up-dialog`

#### Superclass

| Name         | Module | Package     |
| ------------ | ------ | ----------- |
| `LitElement` |        | lit-element |

#### Fields

| Name                  | Privacy | Type                 | Default     | Description                                                         | Inherited From |
| --------------------- | ------- | -------------------- | ----------- | ------------------------------------------------------------------- | -------------- |
| `dialogStyle`         |         | `ConfirmDialogStyle` | `"confirm"` | The visual style variant of the dialog, affecting colors and icons. |                |
| `dialogContentString` |         | `string`             | `""`        | The text content to display in the dialog body.                     |                |

#### Methods

| Name         | Privacy | Description                            | Parameters | Return | Inherited From |
| ------------ | ------- | -------------------------------------- | ---------- | ------ | -------------- |
| `showDialog` |         | Shows the step-up confirmation dialog. |            |        |                |

#### Events

| Name             | Type          | Description                                              | Inherited From |
| ---------------- | ------------- | -------------------------------------------------------- | -------------- |
| `stepUpComplete` | `CustomEvent` | Dispatched when the user confirms or cancels the action. |                |

#### Attributes

| Name                  | Field               | Inherited From |
| --------------------- | ------------------- | -------------- |
| `dialogStyle`         | dialogStyle         |                |
| `dialogContentString` | dialogContentString |                |

#### Slots

| Name       | Description                                |
| ---------- | ------------------------------------------ |
| `headline` | The {@link MdDialog} headline {@link slot} |
| `content`  | The body of the {@link MdDialog}           |
| `actions`  | The area of dialog action buttons          |

<details><summary>Private API</summary>

#### Fields

| Name             | Privacy | Type                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                            | Description | Inherited From |
| ---------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | -------------- |
| `_mdDialog`      | private | `MdDialog`                                   |                                                                                                                                                                                                                                                                                                                                                                                                                    |             |                |
| `icons`          | private | `Record<ConfirmDialogStyle, TemplateResult>` | ``{ confirm: html`<md-icon slot="icon">check_circle</md-icon>`, warning: html`<md-icon slot="icon">warning</md-icon>`, attention: html`<md-icon slot="icon">report</md-icon>`, }``                                                                                                                                                                                                                                 |             |                |
| `primaryActions` | private | `Record<ConfirmDialogStyle, TemplateResult>` | ``{ confirm: html` <md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Confirm</md-filled-button> `, warning: html` <md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Continue</md-filled-button> `, attention: html` <md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Accept</md-filled-button> `, }`` |             |                |

#### Methods

| Name            | Privacy | Description | Parameters                               | Return | Inherited From |
| --------------- | ------- | ----------- | ---------------------------------------- | ------ | -------------- |
| `onButtonClick` | private |             | `isCancel: boolean, event: PointerEvent` |        |                |

</details>

<hr/>

### Exports

| Kind                        | Name             | Declaration  | Module                                           | Package |
| --------------------------- | ---------------- | ------------ | ------------------------------------------------ | ------- |
| `js`                        | `StepUpDialog`   | StepUpDialog | src/components/dialogs/step-up/step-up-dialog.ts |         |
| `custom-element-definition` | `step-up-dialog` | StepUpDialog | src/components/dialogs/step-up/step-up-dialog.ts |         |

## `src/components/dialogs/configs/configs-dialog.ts`:

### class: `ConfigsDialog`, `configs-dialog`

#### Superclass

| Name         | Module | Package     |
| ------------ | ------ | ----------- |
| `LitElement` |        | lit-element |

#### Methods

| Name         | Privacy | Description                     | Parameters                 | Return | Inherited From |
| ------------ | ------- | ------------------------------- | -------------------------- | ------ | -------------- |
| `showDialog` | public  | Shows the configuration dialog. | `formContent: FormContent` |        |                |
| `hideDialog` | public  | Hides the configuration dialog. |                            |        |                |

#### Events

| Name                  | Type          | Description                                                 | Inherited From |
| --------------------- | ------------- | ----------------------------------------------------------- | -------------- |
|                       | `Event`       |                                                             |                |
| `fab.change`          | `CustomEvent` | Dispatched when a FAB's position or style is modified.      |                |
| `color_scheme.change` | `CustomEvent` | Dispatched when the UI theme, mode, or contrast is changed. |                |
| `stepUpOpen`          | `CustomEvent` |                                                             |                |

<details><summary>Private API</summary>

#### Fields

| Name                                | Privacy | Type             | Default        | Description | Inherited From |
| ----------------------------------- | ------- | ---------------- | -------------- | ----------- | -------------- |
| `_configsMDDialog`                  | private | `MdDialog`       |                |             |                |
| `_darkModeToggle`                   | private | `DarkModeToggle` |                |             |                |
| `_stepUpDialog`                     | private | `StepUpDialog`   |                |             |                |
| `_darkModeEnabled`                  | private | `boolean`        | `false`        |             |                |
| `_appConfigs`                       | private | `AppConfigs`     |                |             |                |
| `_formContent`                      | private | `FormContent`    | `"ui-mode"`    |             |                |
| `_stepUpDialogContent`              | private | `string`         | `"all custom"` |             |                |
| `onAppConfigsChange`                | private |                  |                |             |                |
| `openStepUp`                        | private |                  |                |             |                |
| `completeStepUp`                    | private |                  |                |             |                |
| `colorSchemeChangeEventListener`    | private |                  |                |             |                |
| `permanentColorSchemeEventListener` | private |                  |                |             |                |

#### Methods

| Name                             | Privacy | Description | Parameters                                               | Return                             | Inherited From |
| -------------------------------- | ------- | ----------- | -------------------------------------------------------- | ---------------------------------- | -------------- |
| `_handleDialogEvent`             | private |             | `event: Event`                                           |                                    |                |
| `onFabChange`                    | private |             | `fab: "settings" \| "connect", newFabConfig: FabConfig`  |                                    |                |
| `onColorThemeModeContrastChange` | private |             | `colorScheme: AppConfigs["colorScheme"]`                 |                                    |                |
| `#renderFabSettingsFieldset`     | private |             | `fab: "settings" \| "connect", currentConfig: FabConfig` | `TemplateResult`                   |                |
| `#renderUIFieldset`              | private |             |                                                          | `TemplateResult`                   |                |
| `dialogContent`                  | private |             |                                                          | `TemplateResult \| typeof nothing` |                |
| `dialogTitle`                    | private |             |                                                          | `string`                           |                |

</details>

<hr/>

### Exports

| Kind                        | Name             | Declaration   | Module                                           | Package |
| --------------------------- | ---------------- | ------------- | ------------------------------------------------ | ------- |
| `js`                        | `ConfigsDialog`  | ConfigsDialog | src/components/dialogs/configs/configs-dialog.ts |         |
| `custom-element-definition` | `configs-dialog` | ConfigsDialog | src/components/dialogs/configs/configs-dialog.ts |         |

## `src/components/dialogs/connect/connect-dialog.ts`:

### class: `ConnectDialog`, `connect-dialog`

#### Superclass

| Name         | Module | Package     |
| ------------ | ------ | ----------- |
| `LitElement` |        | lit-element |

#### Methods

| Name         | Privacy | Description                                                                     | Parameters | Return | Inherited From |
| ------------ | ------- | ------------------------------------------------------------------------------- | ---------- | ------ | -------------- |
| `showDialog` |         | Shows the connect dialog and applies a custom border to the internal container. |            |        |                |
| `hideDialog` |         | Maps to MdDialog's close method                                                 |            |        |                |

#### Events

| Name | Type    | Description | Inherited From |
| ---- | ------- | ----------- | -------------- |
|      | `Event` |             |                |

#### CSS Properties

| Name                                  | Default | Description                                                         |
| ------------------------------------- | ------- | ------------------------------------------------------------------- |
| `--connect-dialog-content-transition` | `0.3s`  | The animation duration for expanding/collapsing connection details. |

<details><summary>Private API</summary>

#### Fields

| Name        | Privacy | Type       | Default                                 | Description | Inherited From |
| ----------- | ------- | ---------- | --------------------------------------- | ----------- | -------------- |
| `_mdDialog` | private | `MdDialog` |                                         |             |                |
| `date`      | private | `string`   | `"[VI]{date}[/VI]".split(" @ ").at(0)!` |             |                |
| `time`      | private | `string`   | `"[VI]{date}[/VI]".split(" @ ").at(1)!` |             |                |
| `version`   | private | `string`   | `"[VI]{version}[/VI]"`                  |             |                |

#### Methods

| Name                 | Privacy | Description | Parameters               | Return           | Inherited From |
| -------------------- | ------- | ----------- | ------------------------ | ---------------- | -------------- |
| `#rederConnections`  | private |             | `connection: Connection` | `TemplateResult` |                |
| `_handleDialogEvent` | private |             | `event: Event`           |                  |                |

</details>

<hr/>

### Exports

| Kind                        | Name             | Declaration   | Module                                           | Package |
| --------------------------- | ---------------- | ------------- | ------------------------------------------------ | ------- |
| `js`                        | `ConnectDialog`  | ConnectDialog | src/components/dialogs/connect/connect-dialog.ts |         |
| `custom-element-definition` | `connect-dialog` | ConnectDialog | src/components/dialogs/connect/connect-dialog.ts |         |

## `src/types/index.ts`:

### Exports

| Kind | Name | Declaration | Module                                               | Package |
| ---- | ---- | ----------- | ---------------------------------------------------- | ------- |
| `js` | `*`  | \*          | src/types/components/blog-post/blog-post             |         |
| `js` | `*`  | \*          | src/types/components/nav/routes                      |         |
| `js` | `*`  | \*          | src/types/components/word-cloud/word-cloud           |         |
| `js` | `*`  | \*          | src/types/components/work-experience/work-experience |         |
| `js` | `*`  | \*          | src/types/configs                                    |         |
| `js` | `*`  | \*          | src/types/theme                                      |         |

## `src/types/configs/app-configs.ts`:

### Variables

| Name                  | Description | Type                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `DEFAULT_APP_CONFIGS` |             | `{
  colorScheme: {
    theme: THEME_NAMES.inter,
    name: CONFIG_COLOR_SCHEME_NAMES.SYSTEM,
    contrast: CONFIG_COLOR_CONTRAST_NAMES.NORMAL,
    persist: false,
  } as const,
  fab: {
    settings: {
      position: FAB_POSITION.START_BOTTOM,
      style: FAB_STYLE.ICON_AND_TEXT,
    } as const,
    connect: {
      position: FAB_POSITION.END_BOTTOM,
      style: FAB_STYLE.ICON_AND_TEXT,
    } as const,
  } as const,
}` |

<hr/>

### Exports

| Kind | Name                  | Declaration           | Module                           | Package |
| ---- | --------------------- | --------------------- | -------------------------------- | ------- |
| `js` | `DEFAULT_APP_CONFIGS` | DEFAULT\_APP\_CONFIGS | src/types/configs/app-configs.ts |         |

## `src/types/configs/fab-configs.ts`:

### Variables

| Name                                 | Description | Type                                                                                                                                                                  |
| ------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FAB_POSITION_COMPONENTS_VERTICAL`   |             | `{
  TOP: "TOP" as const,
  BOTTOM: "BOTTOM" as const,
}`                                                                                                             |
| `FAB_POSITION_COMPONENTS_HORIZONTAL` |             | `{
  START: "START" as const,
  END: "END" as const,
}`                                                                                                               |
| `FAB_POSITION`                       |             | `{
  START_TOP: "START_TOP" as const,
  START_BOTTOM: "START_BOTTOM" as const,
  END_TOP: "END_TOP" as const,
  END_BOTTOM: "END_BOTTOM" as const,
}`                 |
| `FabPositions`                       |             | `FabPosition[]`                                                                                                                                                       |
| `FabPositionIcons`                   |             | `Record<FabPosition, TemplateResult>`                                                                                                                                 |
| `FAB_STYLE`                          |             | `{
  ICON_ONLY: "ICON_ONLY" as const,
  ICON_AND_TEXT: "ICON_AND_TEXT" as const,
  ICON_ONLY_SMALL: "ICON_ONLY_SMALL" as const,
  TEXT_ONLY: "TEXT_ONLY" as const,
}` |
| `FabStyles`                          |             | `FabStyle[]`                                                                                                                                                          |

<hr/>

### Functions

| Name                    | Description | Parameters                 | Return   |
| ----------------------- | ----------- | -------------------------- | -------- |
| `fabPositionToUi`       |             | `fabPosition: FabPosition` | `string` |
| `fabPositionComponents` |             | `fabPosition: FabPosition` |          |
| `fabStyleToUi`          |             | `fabStyle: FabStyle`       | `string` |
| `fabConfigToGrid`       |             | `config: FabConfig`        |          |
| `fabPositionClass`      |             | `fabPosition: FabPosition` |          |

<hr/>

### Exports

| Kind | Name                                 | Declaration                           | Module                           | Package |
| ---- | ------------------------------------ | ------------------------------------- | -------------------------------- | ------- |
| `js` | `FAB_POSITION_COMPONENTS_VERTICAL`   | FAB\_POSITION\_COMPONENTS\_VERTICAL   | src/types/configs/fab-configs.ts |         |
| `js` | `FAB_POSITION_COMPONENTS_HORIZONTAL` | FAB\_POSITION\_COMPONENTS\_HORIZONTAL | src/types/configs/fab-configs.ts |         |
| `js` | `FAB_POSITION`                       | FAB\_POSITION                         | src/types/configs/fab-configs.ts |         |
| `js` | `FabPositions`                       | FabPositions                          | src/types/configs/fab-configs.ts |         |
| `js` | `FabPositionIcons`                   | FabPositionIcons                      | src/types/configs/fab-configs.ts |         |
| `js` | `fabPositionToUi`                    | fabPositionToUi                       | src/types/configs/fab-configs.ts |         |
| `js` | `fabPositionComponents`              | fabPositionComponents                 | src/types/configs/fab-configs.ts |         |
| `js` | `FAB_STYLE`                          | FAB\_STYLE                            | src/types/configs/fab-configs.ts |         |
| `js` | `fabStyleToUi`                       | fabStyleToUi                          | src/types/configs/fab-configs.ts |         |
| `js` | `FabStyles`                          | FabStyles                             | src/types/configs/fab-configs.ts |         |
| `js` | `fabConfigToGrid`                    | fabConfigToGrid                       | src/types/configs/fab-configs.ts |         |
| `js` | `fabPositionClass`                   | fabPositionClass                      | src/types/configs/fab-configs.ts |         |

## `src/types/configs/index.ts`:

### Exports

| Kind | Name | Declaration | Module                        | Package |
| ---- | ---- | ----------- | ----------------------------- | ------- |
| `js` | `*`  | \*          | src/types/configs/app-configs |         |
| `js` | `*`  | \*          | src/types/configs/fab-configs |         |

## `src/types/theme/color-scheme-configs.ts`:

### Variables

| Name                          | Description | Type                                                                                     |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `CONFIG_COLOR_SCHEME_NAMES`   |             | `{
  DARK: "DARK" as const,
  LIGHT: "LIGHT" as const,
  SYSTEM: "SYSTEM" as const,
}`   |
| `CONFIG_COLOR_CONTRAST_NAMES` |             | `{
  NORMAL: "NORMAL" as const,
  MEDIUM: "MEDIUM" as const,
  HIGH: "HIGH" as const,
}` |

<hr/>

### Functions

| Name                                     | Description | Parameters                                                       | Return               |
| ---------------------------------------- | ----------- | ---------------------------------------------------------------- | -------------------- |
| `colorSchemeContrastToIcon`              |             | `slot: "start" \| "leading-icon", contrast: ColorSchemeContrast` |                      |
| `colorSchemeConfigsToMaterialSchemeName` |             | `colorSchemeSettings: ColorSchemeConfigs`                        | `MaterialSchemeName` |

<hr/>

### Exports

| Kind | Name                                     | Declaration                            | Module                                  | Package |
| ---- | ---------------------------------------- | -------------------------------------- | --------------------------------------- | ------- |
| `js` | `CONFIG_COLOR_SCHEME_NAMES`              | CONFIG\_COLOR\_SCHEME\_NAMES           | src/types/theme/color-scheme-configs.ts |         |
| `js` | `CONFIG_COLOR_CONTRAST_NAMES`            | CONFIG\_COLOR\_CONTRAST\_NAMES         | src/types/theme/color-scheme-configs.ts |         |
| `js` | `colorSchemeContrastToIcon`              | colorSchemeContrastToIcon              | src/types/theme/color-scheme-configs.ts |         |
| `js` | `colorSchemeConfigsToMaterialSchemeName` | colorSchemeConfigsToMaterialSchemeName | src/types/theme/color-scheme-configs.ts |         |

## `src/types/theme/index.ts`:

### Exports

| Kind | Name | Declaration | Module                               | Package |
| ---- | ---- | ----------- | ------------------------------------ | ------- |
| `js` | `*`  | \*          | src/types/theme/color-scheme-configs |         |
| `js` | `*`  | \*          | src/types/theme/theme                |         |

## `src/types/theme/theme.ts`:

### Variables

| Name            | Description | Type                                                                                                                                                  |
| --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `THEME_NAMES`   |             | `{
  chicago: "chicago" as const,
  inter: "inter" as const,
  red: "red" as const,
  // skyline: "skyline" as const,
  sunset: "sunset" as const,
}` |
| `PhotoJsonFile` |             | `PhotosJson`                                                                                                                                          |

<hr/>

### Functions

| Name                     | Description | Parameters                     | Return                     |
| ------------------------ | ----------- | ------------------------------ | -------------------------- |
| `jsonIsThemeJsonSchemes` |             | `json: unknown`                | `json is ThemeJsonSchemes` |
| `readScheme`             |             | `jsonSchema: object`           |                            |
| `keyTransform`           |             | `jsonKey: string, rgb: string` | `CSSResult`                |

<hr/>

### Exports

| Kind | Name                     | Declaration            | Module                   | Package |
| ---- | ------------------------ | ---------------------- | ------------------------ | ------- |
| `js` | `jsonIsThemeJsonSchemes` | jsonIsThemeJsonSchemes | src/types/theme/theme.ts |         |
| `js` | `THEME_NAMES`            | THEME\_NAMES           | src/types/theme/theme.ts |         |
| `js` | `PhotoJsonFile`          | PhotoJsonFile          | src/types/theme/theme.ts |         |
| `js` | `readScheme`             | readScheme             | src/types/theme/theme.ts |         |
| `js` | `keyTransform`           | keyTransform           | src/types/theme/theme.ts |         |

## `src/types/components/word-cloud/word-cloud.ts`:

### Variables

| Name                   | Description | Type                                                                                                                                                                                                                   |
| ---------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `WordCloudGroupings`   |             | `{
  CATEGORY: "category" as const,
  QUARTILE: "quartile" as const,
  UNGROUPED: "ungrouped" as const,
}`                                                                                                             |
| `WordCloudSortings`    |             | `{
  BY_WEIGHT: "by-weight" as const,
  BY_WEIGHT_REVERSED: "by-weight-reversed" as const,
  BY_ALPHABET: "by-alphabet" as const,
  BY_ALPHABET_REVERSED: "by-alphabet-reversed" as const,
  NONE: "none" as const,
}` |
| `WordCloudAppearances` |             | `{
  SIMULTANEOUS: "simultaneous" as const,
  SEQUENTIAL: "sequential" as const,
}`                                                                                                                                    |

<hr/>

### Functions

| Name                | Description                                  | Parameters                                                                         | Return          |
| ------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- | --------------- |
| `makeWordCloudWord` | A factory function to create a WordCloudWord | `word: string, weight: Weights, category: WordCloudWordCategory, extras: string[]` | `WordCloudWord` |

<hr/>

### Exports

| Kind | Name                   | Declaration          | Module                                        | Package |
| ---- | ---------------------- | -------------------- | --------------------------------------------- | ------- |
| `js` | `WordCloudGroupings`   | WordCloudGroupings   | src/types/components/word-cloud/word-cloud.ts |         |
| `js` | `WordCloudSortings`    | WordCloudSortings    | src/types/components/word-cloud/word-cloud.ts |         |
| `js` | `WordCloudAppearances` | WordCloudAppearances | src/types/components/word-cloud/word-cloud.ts |         |
| `js` | `makeWordCloudWord`    | makeWordCloudWord    | src/types/components/word-cloud/word-cloud.ts |         |

## `src/types/components/work-experience/work-experience.ts`:

### Variables

| Name   | Description | Type |
| ------ | ----------- | ---- |
| `data` |             |      |

<hr/>

### Exports

| Kind | Name   | Declaration | Module                                                  | Package |
| ---- | ------ | ----------- | ------------------------------------------------------- | ------- |
| `js` | `data` | data        | src/types/components/work-experience/work-experience.ts |         |

## `src/types/components/nav/routes.ts`:

### Variables

| Name     | Description | Type                                                                                                                                                                                              |
| -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Routes` |             | `{
  PROFILE: "profile" as const,
  EXPERIENCE: "experience" as const,
  CODE: "code" as const,
  BLOG: "blog" as const,
  // SETTINGS: "settings" as const,
  // CONNECT: "connect" as const,
}` |

<hr/>

### Functions

| Name          | Description | Parameters     | Return  |
| ------------- | ----------- | -------------- | ------- |
| `hashToRoute` |             | `hash: string` | `Route` |

<hr/>

### Exports

| Kind | Name          | Declaration | Module                             | Package |
| ---- | ------------- | ----------- | ---------------------------------- | ------- |
| `js` | `Routes`      | Routes      | src/types/components/nav/routes.ts |         |
| `js` | `hashToRoute` | hashToRoute | src/types/components/nav/routes.ts |         |
