# `src/components/app-shell/app-shell.ts`:

## class: `AppShell`, `app-shell`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Slots

| Name          | Description                                   |
| ------------- | --------------------------------------------- |
| `app-content` | The place for the dynamic application content |
| `app-nav`     | Where the {@link NavComponent} is placed      |

<details><summary>Private API</summary>

### Fields

| Name                  | Privacy | Type                                       | Default | Description                                                                                                      | Inherited From |
| --------------------- | ------- | ------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------- | -------------- |
| `_openDialogCount`    | private | `number`                                   | `0`     |                                                                                                                  |                |
| `_uiModeIcon`         | private | `"dark_mode" \| "light_mode" \| "routine"` |         | The icon associated with the current color scheme mode.                                                          |                |
| `appConfigs`          | private | `AppConfigs`                               |         | The current global application configuration state.                                                              |                |
| `configsDialog`       | private | `ConfigsDialog`                            |         | Reference to the configuration dialog.                                                                           |                |
| `connectDialog`       | private | `ConnectDialog`                            |         | Reference to the connect dialog.                                                                                 |                |
| `connectFab`          | private | `MdFab`                                    |         | Reference to the connect FAB.&#xA;This is an MdFab component.                                                    |                |
| `connectFabConfig`    | private | `FabConfig`                                |         |                                                                                                                  |                |
| `fabMenu`             | private | `FabMenu`                                  |         | Reference to the FAB menu component.                                                                             |                |
| `onAppConfigsChange`  | private |                                            |         | Syncs the component state with the global application configuration.                                             |                |
| `onColorSchemeChange` | private |                                            |         | Event handler for color scheme changes.&#xA;Updates the UI icon, Material theme variables, and meta theme color. |                |
| `onFabChangeBind`     | private |                                            |         |                                                                                                                  |                |
| `onFabConfigBind`     | private |                                            |         |                                                                                                                  |                |
| `settingsFabConfig`   | private | `FabConfig`                                |         | The configuration for the settings FAB.                                                                          |                |

### Methods

| Name                  | Privacy | Description                                                                                                          | Parameters                                           | Return | Inherited From |
| --------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------ | -------------- |
| `_getFabLabel`        | private | Generates the label string for a FAB based on its configuration style.                                               | `fab: string, config: FabConfig`                     |        |                |
| `_handleDialogClosed` | private | Tracks closed dialogs to manage body scroll restoration.                                                             |                                                      |        |                |
| `_handleDialogOpened` | private | Tracks open dialogs to manage body scroll locking.                                                                   |                                                      |        |                |
| `_onFabMenuItemClick` | private | Handles clicks on FAB menu items.&#xA;Closes the menu and opens the configuration dialog with the requested content. | `formContent: FormContent`                           |        |                |
| `onFabChange`         | private | Updates the state and DOM representation of a FAB when its configuration changes.                                    | `fab: "settings" \| "connect", fabConfig: FabConfig` |        |                |
| `uiModeIcon`          | private | Maps a color scheme name to a Material icon name.                                                                    | `colorScheme: AppConfigs["colorScheme"]`             |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `custom-element-definition` | `app-shell` | AppShell    | src/components/app-shell/app-shell.ts |         |
| `js`                        | `AppShell`  | AppShell    | src/components/app-shell/app-shell.ts |         |

# `src/components/blog/blog-post.ts`:

## class: `BlogPost`, `blog-post`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name       | Privacy | Type           | Default | Description                               | Inherited From |
| ---------- | ------- | -------------- | ------- | ----------------------------------------- | -------------- |
| `blogPost` |         | `BlogPostJson` | `{}`    | The {@link BlogPostJson} record to render |                |

### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `blogPost` | blogPost |                |

### CSS Properties

| Name                                   | Default | Description                                                                                                                |
| -------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `--blog-post-animation`                |         | The duration of the animation for \\\`:focus\\\`, \\\`:hover\\\`, \\\`:focus-within\\\`, and \\\`:focus-visible\\\` states |
| `--blog-post-primary-text-color`       |         | The color of the primary text                                                                                              |
| `--blog-post-container-color`          |         | The color of the container, {@link MdElevatedCard} and {@link --md-elevated-card-container-color}                          |
| `--blog-post-word-tag-container-color` |         | The color of the container, {@link WordTag}                                                                                |

<details><summary>Private API</summary>

### Fields

| Name                | Privacy | Type                     | Default | Description | Inherited From |
| ------------------- | ------- | ------------------------ | ------- | ----------- | -------------- |
| `darkMode`          | private |                          |         |             |                |
| `onAppConfigChange` | private | `(event: Event) => void` |         |             |                |

</details>

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                           | Package |
| --------------------------- | ----------- | ----------- | -------------------------------- | ------- |
| `custom-element-definition` | `blog-post` | BlogPost    | src/components/blog/blog-post.ts |         |
| `js`                        | `BlogPost`  | BlogPost    | src/components/blog/blog-post.ts |         |

# `src/components/code/code-project.ts`:

## class: `CodeProject`, `code-project`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type              | Default | Description | Inherited From |
| ------------- | ------- | ----------------- | ------- | ----------- | -------------- |
| `codeProject` |         | `CodeProjectData` | `{}`    |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `codeProject` | codeProject |                |

<details><summary>Private API</summary>

### Fields

| Name      | Privacy | Type      | Default | Description | Inherited From |
| --------- | ------- | --------- | ------- | ----------- | -------------- |
| `flipped` | private | `boolean` | `false` |             |                |

### Methods

| Name                 | Privacy | Description                                    | Parameters | Return           | Inherited From |
| -------------------- | ------- | ---------------------------------------------- | ---------- | ---------------- | -------------- |
| `#generateCardBack`  | private | Builds the back of the MdOutlinedCard content  |            | `TemplateResult` |                |
| `#generateCardFront` | private | Builds the front of the MdOutlinedCard content |            | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                              | Package |
| --------------------------- | -------------- | ----------- | ----------------------------------- | ------- |
| `custom-element-definition` | `code-project` | CodeProject | src/components/code/code-project.ts |         |
| `js`                        | `CodeProject`  | CodeProject | src/components/code/code-project.ts |         |

# `src/components/dialog/configs/configs-dialog.ts`:

## class: `ConfigsDialog`, `configs-dialog`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Methods

| Name         | Privacy | Description                     | Parameters                 | Return | Inherited From |
| ------------ | ------- | ------------------------------- | -------------------------- | ------ | -------------- |
| `hideDialog` | public  | Hides the configuration dialog. |                            |        |                |
| `showDialog` | public  | Shows the configuration dialog. | `formContent: FormContent` |        |                |

### Events

| Name                  | Type          | Description                                                 | Inherited From |
| --------------------- | ------------- | ----------------------------------------------------------- | -------------- |
|                       | `Event`       |                                                             |                |
| `color_scheme.change` | `CustomEvent` | Dispatched when the UI theme, mode, or contrast is changed. |                |
| `fab.change`          | `CustomEvent` | Dispatched when a FAB's position or style is modified.      |                |
| `stepUpOpen`          | `CustomEvent` |                                                             |                |

<details><summary>Private API</summary>

### Fields

| Name                                | Privacy | Type             | Default        | Description | Inherited From |
| ----------------------------------- | ------- | ---------------- | -------------- | ----------- | -------------- |
| `_appConfigs`                       | private | `AppConfigs`     |                |             |                |
| `_configsMDDialog`                  | private | `MdDialog`       |                |             |                |
| `_darkModeEnabled`                  | private | `boolean`        | `false`        |             |                |
| `_darkModeToggle`                   | private | `DarkModeToggle` |                |             |                |
| `_formContent`                      | private | `FormContent`    | `"ui-mode"`    |             |                |
| `_stepUpDialog`                     | private | `StepUpDialog`   |                |             |                |
| `_stepUpDialogContent`              | private | `string`         | `"all custom"` |             |                |
| `_wasOpened`                        | private | `boolean`        | `false`        |             |                |
| `colorSchemeChangeEventListener`    | private |                  |                |             |                |
| `completeStepUp`                    | private |                  |                |             |                |
| `onAppConfigsChange`                | private |                  |                |             |                |
| `openStepUp`                        | private |                  |                |             |                |
| `permanentColorSchemeEventListener` | private |                  |                |             |                |

### Methods

| Name                             | Privacy | Description | Parameters                                               | Return                             | Inherited From |
| -------------------------------- | ------- | ----------- | -------------------------------------------------------- | ---------------------------------- | -------------- |
| `_handleDialogEvent`             | private |             | `event: Event`                                           |                                    |                |
| `#renderFabSettingsFieldset`     | private |             | `fab: "settings" \| "connect", currentConfig: FabConfig` | `TemplateResult`                   |                |
| `#renderUIFieldset`              | private |             |                                                          | `TemplateResult`                   |                |
| `dialogContent`                  | private |             |                                                          | `TemplateResult \| typeof nothing` |                |
| `dialogTitle`                    | private |             |                                                          | `string`                           |                |
| `onColorThemeModeContrastChange` | private |             | `colorScheme: AppConfigs["colorScheme"]`                 |                                    |                |
| `onFabChange`                    | private |             | `fab: "settings" \| "connect", newFabConfig: FabConfig`  |                                    |                |

</details>

<hr/>

## Exports

| Kind                        | Name             | Declaration   | Module                                          | Package |
| --------------------------- | ---------------- | ------------- | ----------------------------------------------- | ------- |
| `custom-element-definition` | `configs-dialog` | ConfigsDialog | src/components/dialog/configs/configs-dialog.ts |         |
| `js`                        | `ConfigsDialog`  | ConfigsDialog | src/components/dialog/configs/configs-dialog.ts |         |

# `src/components/dialog/connect/connect-dialog.ts`:

## class: `ConnectDialog`, `connect-dialog`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Methods

| Name         | Privacy | Description                                                                     | Parameters | Return | Inherited From |
| ------------ | ------- | ------------------------------------------------------------------------------- | ---------- | ------ | -------------- |
| `hideDialog` |         | Maps to MdDialog's close method                                                 |            |        |                |
| `showDialog` |         | Shows the connect dialog and applies a custom border to the internal container. |            |        |                |

### Events

| Name | Type    | Description | Inherited From |
| ---- | ------- | ----------- | -------------- |
|      | `Event` |             |                |

### CSS Properties

| Name                                  | Default | Description                                                         |
| ------------------------------------- | ------- | ------------------------------------------------------------------- |
| `--connect-dialog-content-transition` | `0.3s`  | The animation duration for expanding/collapsing connection details. |

<details><summary>Private API</summary>

### Fields

| Name        | Privacy | Type       | Default                                 | Description | Inherited From |
| ----------- | ------- | ---------- | --------------------------------------- | ----------- | -------------- |
| `_mdDialog` | private | `MdDialog` |                                         |             |                |
| `date`      | private | `string`   | `"[VI]{date}[/VI]".split(" @ ").at(0)!` |             |                |
| `time`      | private | `string`   | `"[VI]{date}[/VI]".split(" @ ").at(1)!` |             |                |
| `version`   | private | `string`   | `"[VI]{version}[/VI]"`                  |             |                |

### Methods

| Name                 | Privacy | Description | Parameters               | Return           | Inherited From |
| -------------------- | ------- | ----------- | ------------------------ | ---------------- | -------------- |
| `_handleDialogEvent` | private |             | `event: Event`           |                  |                |
| `#rederConnections`  | private |             | `connection: Connection` | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name             | Declaration   | Module                                          | Package |
| --------------------------- | ---------------- | ------------- | ----------------------------------------------- | ------- |
| `custom-element-definition` | `connect-dialog` | ConnectDialog | src/components/dialog/connect/connect-dialog.ts |         |
| `js`                        | `ConnectDialog`  | ConnectDialog | src/components/dialog/connect/connect-dialog.ts |         |

# `src/components/dialog/step-up/step-up-dialog.ts`:

## class: `StepUpDialog`, `step-up-dialog`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name                  | Privacy | Type                | Default     | Description                                 | Inherited From |
| --------------------- | ------- | ------------------- | ----------- | ------------------------------------------- | -------------- |
| `dialogContentString` |         | `string`            | `""`        | The central content of the {@link MdDialog} |                |
| `dialogStyle`         |         | `StepUpDialogStyle` | `"confirm"` | Determines which {@link StepUpDialogStyle}  |                |

### Methods

| Name         | Privacy | Description                            | Parameters | Return | Inherited From |
| ------------ | ------- | -------------------------------------- | ---------- | ------ | -------------- |
| `showDialog` |         | Shows the step-up confirmation dialog. |            |        |                |

### Events

| Name             | Type          | Description                                              | Inherited From |
| ---------------- | ------------- | -------------------------------------------------------- | -------------- |
| `stepUpComplete` | `CustomEvent` | Dispatched when the user confirms or cancels the action. |                |

### Attributes

| Name                  | Field               | Inherited From |
| --------------------- | ------------------- | -------------- |
| `dialogContentString` | dialogContentString |                |
| `dialogStyle`         | dialogStyle         |                |

### Slots

| Name       | Description                                |
| ---------- | ------------------------------------------ |
| `actions`  | The area of dialog action buttons          |
| `content`  | The body of the {@link MdDialog}           |
| `headline` | The {@link MdDialog} headline {@link slot} |

<details><summary>Private API</summary>

### Fields

| Name             | Privacy | Type                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                            | Description | Inherited From |
| ---------------- | ------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | -------------- |
| `_mdDialog`      | private | `MdDialog`                                  |                                                                                                                                                                                                                                                                                                                                                                                                                    |             |                |
| `icons`          | private | `Record<StepUpDialogStyle, TemplateResult>` | ``{ confirm: html`<md-icon slot="icon">check_circle</md-icon>`, warning: html`<md-icon slot="icon">warning</md-icon>`, attention: html`<md-icon slot="icon">report</md-icon>`, }``                                                                                                                                                                                                                                 |             |                |
| `primaryActions` | private | `Record<StepUpDialogStyle, TemplateResult>` | ``{ confirm: html` <md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Confirm</md-filled-button> `, warning: html` <md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Continue</md-filled-button> `, attention: html` <md-filled-button @click=${(event: PointerEvent) => this.onButtonClick(false, event)}>Accept</md-filled-button> `, }`` |             |                |

### Methods

| Name            | Privacy | Description | Parameters                               | Return | Inherited From |
| --------------- | ------- | ----------- | ---------------------------------------- | ------ | -------------- |
| `onButtonClick` | private |             | `isCancel: boolean, event: PointerEvent` |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name             | Declaration  | Module                                          | Package |
| --------------------------- | ---------------- | ------------ | ----------------------------------------------- | ------- |
| `custom-element-definition` | `step-up-dialog` | StepUpDialog | src/components/dialog/step-up/step-up-dialog.ts |         |
| `js`                        | `StepUpDialog`   | StepUpDialog | src/components/dialog/step-up/step-up-dialog.ts |         |

# `src/components/fab-menu/fab-menu-item.ts`:

## class: `FabMenuItem`, `fab-menu-item`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name    | Privacy | Type                   | Default | Description                                    | Inherited From |
| ------- | ------- | ---------------------- | ------- | ---------------------------------------------- | -------------- |
| `icon`  |         | `MaterialSymbol \| ""` | `""`    | The icon to display inside the FAB item.       |                |
| `label` |         | `string`               | `""`    | The text label displayed next to the FAB item. |                |

### Methods

| Name    | Privacy | Description                         | Parameters              | Return | Inherited From |
| ------- | ------- | ----------------------------------- | ----------------------- | ------ | -------------- |
| `focus` |         | Focuses the underlying FAB element. | `options: FocusOptions` |        |                |

### Attributes

| Name    | Field | Inherited From |
| ------- | ----- | -------------- |
| `icon`  | icon  |                |
| `label` | label |                |

### CSS Properties

| Name                            | Default    | Description                                             |
| ------------------------------- | ---------- | ------------------------------------------------------- |
| `--fab-menu-item-direction`     | `row`      | The \`flex-direction\` of the {@link FabMenuItem}       |
| `--fab-menu-item-justify`       | `flex-end` | The Flex \`justify-content\` of the {@link FabMenuItem} |
| `--fab-menu-item-padding-end`   | `0`        | The logical \`padding-inline-end\` value                |
| `--fab-menu-item-padding-start` | `0`        | The logical \`padding-inline-start\` value              |

<details><summary>Private API</summary>

### Fields

| Name   | Privacy | Type    | Default | Description | Inherited From |
| ------ | ------- | ------- | ------- | ----------- | -------------- |
| `_fab` | private | `MdFab` |         |             |                |

</details>

<hr/>

## Exports

| Kind                        | Name            | Declaration | Module                                   | Package |
| --------------------------- | --------------- | ----------- | ---------------------------------------- | ------- |
| `custom-element-definition` | `fab-menu-item` | FabMenuItem | src/components/fab-menu/fab-menu-item.ts |         |
| `js`                        | `FabMenuItem`   | FabMenuItem | src/components/fab-menu/fab-menu-item.ts |         |

# `src/components/fab-menu/fab-menu.ts`:

## class: `FabMenu`, `fab-menu`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name         | Privacy | Type                                                  | Default     | Description                                                                             | Inherited From |
| ------------ | ------- | ----------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------- | -------------- |
| `ariaLabel`  |         | `string`                                              | `""`        | An override for the \`aria-label\` attribute                                            |                |
| `direction`  |         | `"start" \| "end"`                                    | `"end"`     | The direction of the menu, one of \`"start"\`, \`"end"\`                                |                |
| `icon`       |         | `MaterialSymbol \| ""`                                | `"close"`   | The {@link MaterialSymbol} to display when menu is opened                               |                |
| `label`      |         | `string`                                              | `""`        | The label to display when both opened and closed                                        |                |
| `open`       |         | `boolean`                                             | `false`     | Indicator of open/closed state                                                          |                |
| `openedIcon` |         | `MaterialSymbol`                                      | `"close"`   | The icon to display when the menu is open.&#xA;Defaults to 'close'.                     |                |
| `size`       |         | `"small" \| "medium" \| "large"`                      | `"medium"`  | The size of the underlying {@link MdFab}, one of \`"small"\`, \`"medium"\`, \`"large"\` |                |
| `variant`    |         | `"surface" \| "primary" \| "secondary" \| "tertiary"` | `"primary"` | The variant, one of \`"primary"\`, \`"secondary"\`, \`"tertiary"\`, \`"surface"\`       |                |

### Attributes

| Name          | Field      | Inherited From |
| ------------- | ---------- | -------------- |
| `aria-label`  | ariaLabel  |                |
| `direction`   | direction  |                |
| `icon`        | icon       |                |
| `label`       | label      |                |
| `open`        | open       |                |
| `opened-icon` | openedIcon |                |
| `size`        | size       |                |
| `variant`     | variant    |                |

### CSS Properties

| Name                             | Default                     | Description                                               |
| -------------------------------- | --------------------------- | --------------------------------------------------------- |
| `--fab-menu-transition-duration` | `200ms`                     | The duration of the menu's opening and closing animations |
| `--fab-menu-animation-spec`      | `cubic-bezier(0.4,0,0.2,1)` | The animation spec for {@link FabMenu} \`transition\`s    |

### Slots

| Name         | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| `menu-items` | The content of the menu, typically {@link FabMenuItem} elements |

<details><summary>Private API</summary>

### Fields

| Name                   | Privacy | Type                                                           | Default | Description | Inherited From |
| ---------------------- | ------- | -------------------------------------------------------------- | ------- | ----------- | -------------- |
| `_fab`                 | private | `MdFab`                                                        |         |             |                |
| `_focusableElements`   | private | `(HTMLElement&{ focus: (options?: FocusOptions) => void; })[]` |         |             |                |
| `_handleDocumentClick` | private |                                                                |         |             |                |
| `_items`               | private | `FabMenuItem[]`                                                |         |             |                |
| `_scrim`               | private | `HTMLDivElement`                                               |         |             |                |

### Methods

| Name                | Privacy   | Description | Parameters      | Return             | Inherited From |
| ------------------- | --------- | ----------- | --------------- | ------------------ | -------------- |
| `_handleFocusTrap`  | private   |             | `e: FocusEvent` |                    |                |
| `_toggle`           | private   |             |                 |                    |                |
| `getUpdateComplete` | protected |             |                 | `Promise<boolean>` |                |

</details>

<hr/>

## Exports

| Kind                        | Name       | Declaration | Module                              | Package |
| --------------------------- | ---------- | ----------- | ----------------------------------- | ------- |
| `custom-element-definition` | `fab-menu` | FabMenu     | src/components/fab-menu/fab-menu.ts |         |
| `js`                        | `FabMenu`  | FabMenu     | src/components/fab-menu/fab-menu.ts |         |

# `src/components/info-section/info-section.ts`:

## class: `InfoSection`, `info-section`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name           | Privacy | Type     | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                   | Inherited From |
| -------------- | ------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `sectionTitle` |         | `string` | `""`    | The text shown in the section heading (\`\<h2>\`). Corresponds to the attribute \`section-title\`. Slot API -- \<slot name="section-grid-content">: (required) Container for section body content. Preserves the responsive grid layout. Example: \`\`\`html \<info-section section-title="Experience"> \<div slot="section-grid-content"> ...your list, cards, or details... \</div> \</info-section> \`\`\` |                |

### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `section-title` | sectionTitle |                |

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                                      | Package |
| --------------------------- | -------------- | ----------- | ------------------------------------------- | ------- |
| `custom-element-definition` | `info-section` | InfoSection | src/components/info-section/info-section.ts |         |
| `js`                        | `InfoSection`  | InfoSection | src/components/info-section/info-section.ts |         |

# `src/components/nav/nav-component.ts`:

## class: `NavComponent`, `nav-component`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### CSS Properties

| Name                                     | Default | Description                                                   |
| ---------------------------------------- | ------- | ------------------------------------------------------------- |
| `--nav-component-icon-animation`         | `225ms` | The duration of the icon's fill and color transition.         |
| `--nav-component-icon-animation-reduced` | `1ms`   | The duration of the icon's transition when motion is reduced. |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy | Type                               | Default                                                                           | Description | Inherited From |
| -------------------- | ------- | ---------------------------------- | --------------------------------------------------------------------------------- | ----------- | -------------- |
| `_activeRoute`       | private | `Route`                            |                                                                                   |             |                |
| `_activeTabIndex`    | private | `number`                           | `0`                                                                               |             |                |
| `_exitingRoute`      | private | `Route \| null`                    | `null`                                                                            |             |                |
| `_tabRefMap`         | private | `Record<Route, Ref<MdPrimaryTab>>` | `{ work: createRef(), code: createRef(), info: createRef(), blog: createRef(), }` |             |                |
| `#boundListener`     | private |                                    |                                                                                   |             |                |
| `#inlineIconTimeout` | private | `number`                           | `0`                                                                               |             |                |
| `#routes`            | private | `Route[]`                          |                                                                                   |             |                |
| `#tabsRef`           | private | `Ref<MdTabs>`                      |                                                                                   |             |                |

### Methods

| Name                        | Privacy | Description                                                                                | Parameters      | Return           | Inherited From |
| --------------------------- | ------- | ------------------------------------------------------------------------------------------ | --------------- | ---------------- | -------------- |
| `#handleHashChange`         | private | Syncs internal state with the URL hash.                                                    |                 |                  |                |
| `#onTabChange`              | private | Handles user clicks on tabs. Updates URL and UI.                                           | `event: Event`  |                  |                |
| `#renderTabs`               | private | Creates a TemplateResult consisting of MdTabs, MdPrimaryTab, and MdIcons                   |                 | `TemplateResult` |                |
| `#tabIndexAndRouteFromHash` | private | Reads window\.location.hash and returns an object containing the Route and indexing number |                 | `index`          |                |
| `#updateCarousel`           | private | Updates external DOM via style manipulations and blind queries                             | `index: number` |                  |                |
| `#updateTabState`           | private | Updates the visual state of tabs and panels based on the index.                            | `index: number` |                  |                |

</details>

<hr/>

## Exports

| Kind                        | Name            | Declaration  | Module                              | Package |
| --------------------------- | --------------- | ------------ | ----------------------------------- | ------- |
| `custom-element-definition` | `nav-component` | NavComponent | src/components/nav/nav-component.ts |         |
| `js`                        | `NavComponent`  | NavComponent | src/components/nav/nav-component.ts |         |

# `src/components/partial-header/partial-header.ts`:

## class: `PartialHeader`, `partial-header`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type                                                  | Default     | Description                                                                                                   | Inherited From |
| ------------- | ------- | ----------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- | -------------- |
| `headerType`  |         | `"primary" \| "secondary" \| "tertiary" \| "inverse"` | `"primary"` | The color variant theme for the header background and text.&#xA;Can be 'primary', 'secondary', or 'tertiary'. |                |
| `headingText` |         | `string`                                              | `""`        | The text to display within the header.                                                                        |                |

### Attributes

| Name           | Field       | Inherited From |
| -------------- | ----------- | -------------- |
| `header-type`  | headerType  |                |
| `heading-text` | headingText |                |

<hr/>

## Exports

| Kind                        | Name             | Declaration   | Module                                          | Package |
| --------------------------- | ---------------- | ------------- | ----------------------------------------------- | ------- |
| `custom-element-definition` | `partial-header` | PartialHeader | src/components/partial-header/partial-header.ts |         |
| `js`                        | `PartialHeader`  | PartialHeader | src/components/partial-header/partial-header.ts |         |

# `src/components/word/word-cloud.ts`:

## class: `WordCloud`, `word-cloud`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name           | Privacy | Type                        | Default  | Description                                                                                                                                                                    | Inherited From |
| -------------- | ------- | --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `_sortedWords` |         | `RenderableWordCloudWord[]` | `[]`     |                                                                                                                                                                                |                |
| `appearance`   |         | `WordCloudAppearance`       |          | Controls the order in which words are animated/displayed.&#xA;&#xA;Can be 'sequential' (words appear one by one) or 'simultaneous' (words appear all at once).                 |                |
| `delay`        |         | `number \| "none"`          | `"none"` | The delay in milliseconds between word appearances when using sequential mode.&#xA;&#xA;Set to "none" to use the component's internal default delays.                          |                |
| `grouping`     |         | `WordCloudGrouping`         |          | Controls how words are grouped together within the cloud.&#xA;&#xA;Supported modes: 'category', 'quartile', or 'ungrouped'.                                                    |                |
| `instantClear` |         | `boolean`                   | `false`  | Whether to clear the word cloud instantly when it is no longer visible.&#xA;When true, the cloud resets instantly to opacity 0 instead of fading out.                          |                |
| `sorting`      |         | `WordCloudSorting`          |          | Controls how words are sorted within their groupings.&#xA;&#xA;Supported modes: 'by-weight', 'by-weight-reversed', 'by-alphabet', 'by-alphabet-reversed', or 'none'.           |                |
| `threshold`    |         | `number`                    | `0.1`    | The intersection observer threshold for visibility detection.&#xA;&#xA;A value between 0 and 1 indicating what percentage of the element must be visible to trigger animation. |                |
| `words`        |         | `WordCloudWord[]`           | `[]`     | The list of words to display in the cloud.                                                                                                                                     |                |

### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `appearance`    | appearance   |                |
| `delay`         | delay        |                |
| `grouping`      | grouping     |                |
| `instant-clear` | instantClear |                |
| `sorting`       | sorting      |                |
| `threshold`     | threshold    |                |
| `words`         | words        |                |

### CSS Properties

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

### Fields

| Name                    | Privacy | Type                                | Default | Description | Inherited From |
| ----------------------- | ------- | ----------------------------------- | ------- | ----------- | -------------- |
| `_intersectionObserver` | private | `IntersectionObserver \| undefined` |         |             |                |
| `_isVisible`            | private | `boolean`                           | `false` |             |                |
| `_listElement`          | private | `HTMLUListElement`                  |         |             |                |

### Methods

| Name                        | Privacy | Description | Parameters                  | Return                                                                              | Inherited From |
| --------------------------- | ------- | ----------- | --------------------------- | ----------------------------------------------------------------------------------- | -------------- |
| `_getSortFunction`          | private |             | `sorting: WordCloudSorting` | `((a: RenderableWordCloudWord, b: RenderableWordCloudWord) => number) \| undefined` |                |
| `_initIntersectionObserver` | private |             |                             |                                                                                     |                |
| `_processWords`             | private |             |                             | `RenderableWordCloudWord[]`                                                         |                |

</details>

<hr/>

## Exports

| Kind                        | Name         | Declaration | Module                            | Package |
| --------------------------- | ------------ | ----------- | --------------------------------- | ------- |
| `custom-element-definition` | `word-cloud` | WordCloud   | src/components/word/word-cloud.ts |         |
| `js`                        | `WordCloud`  | WordCloud   | src/components/word/word-cloud.ts |         |

# `src/components/word/word-tag.ts`:

## class: `WordTag`, `word-tag`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name        | Privacy | Type               | Default    | Description                                                                                                                                                                                               | Inherited From |
| ----------- | ------- | ------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `heaviness` |         | `WordTagHeaviness` | `"normal"` | The weight of the tag (text & border), can be \`"normal"\` (\`--md-ref-typeface-weight-regular\` & \`--hairline-width\`) or \`"heavy"\` (\`--md-ref-typeface-weight-bold\` & \`2.5 \* --hairline-width\`) |                |
| `hrefUrl`   |         | `string`           | `""`       | A URL which, when provided, wraps this {@link WordTag} in a {@link HTMLAnchorElement}                                                                                                                     |                |
| `word`      |         | `string`           | `""`       | The tagged word                                                                                                                                                                                           |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `heaviness` | heaviness |                |
| `hrefUrl`   | hrefUrl   |                |
| `word`      | word      |                |

### CSS Properties

| Name                          | Default                                  | Description                         |
| ----------------------------- | ---------------------------------------- | ----------------------------------- |
| `--word-tag-color`            | `--md-sys-color-on-primary-container`    | The text and border color           |
| `--word-tag-background-color` | `--md-sys-color-primary-container`       | The background color                |
| `--word-tag-font-family`      | `--md-ref-typeface-brand`                | The font family                     |
| `--word-tag-font-size`        | `--md-typescale-body-large-font-size`    | The font size                       |
| `--word-tag-font-weight`      | `--md-ref-typeface-weight-regular`       | The font weight                     |
| `--word-tag-line-height`      | `--md-typescale-body-large-lingt-height` | The line height                     |
| `--word-tag-border-radius`    | `--md-sys-shape-corner-small`            | The corner radius (for all corners) |

<hr/>

## Exports

| Kind                        | Name       | Declaration | Module                          | Package |
| --------------------------- | ---------- | ----------- | ------------------------------- | ------- |
| `custom-element-definition` | `word-tag` | WordTag     | src/components/word/word-tag.ts |         |
| `js`                        | `WordTag`  | WordTag     | src/components/word/word-tag.ts |         |

# `src/components/work-experience/work-experience.ts`:

## class: `WorkExperience`, `work-experience`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name                | Privacy | Type                      | Default                   | Description                                                                  | Inherited From |
| ------------------- | ------- | ------------------------- | ------------------------- | ---------------------------------------------------------------------------- | -------------- |
| `dateEnd`           |         | `WorkDate`                | `{ stamp: "", text: "" }` | A {@link WorkDate} instance describing employment end date                   |                |
| `dateStart`         |         | `WorkDate`                | `{ stamp: "", text: "" }` | A {@link WorkDate} instance describing employment start date                 |                |
| `experienceOrg`     |         | `string`                  | `""`                      | The employer formal name                                                     |                |
| `experienceRole`    |         | `string`                  | `""`                      | The formal role from the {@link WorkExperience} instance                     |                |
| `experienceSummary` |         | `string`                  | `""`                      | An optional summary of the overall role                                      |                |
| `isNested`          |         | `boolean`                 | `false`                   | Whether this is a nested instance                                            |                |
| `jobs`              |         | `Array<Job>`              | `[]`                      | An array of {@link Job}s rendered as nested {@link WorkExperience} instances |                |
| `summaries`         |         | `Array<{ item: string }>` | `[]`                      | An array of \`{ item: string }\` objects describing the responsibilities     |                |

### Attributes

| Name                 | Field             | Inherited From |
| -------------------- | ----------------- | -------------- |
| `date-end`           | dateEnd           |                |
| `date-start`         | dateStart         |                |
| `experience-org`     | experienceOrg     |                |
| `experience-role`    | experienceRole    |                |
| `experience-summary` | experienceSummary |                |
| `is-nested`          | isNested          |                |
| `jobs`               | jobs              |                |
| `summaries`          | summaries         |                |

<hr/>

## Exports

| Kind                        | Name              | Declaration    | Module                                            | Package |
| --------------------------- | ----------------- | -------------- | ------------------------------------------------- | ------- |
| `custom-element-definition` | `work-experience` | WorkExperience | src/components/work-experience/work-experience.ts |         |
| `js`                        | `WorkExperience`  | WorkExperience | src/components/work-experience/work-experience.ts |         |

# `src/types/components/nav/routes.ts`:

## Variables

| Name                 | Description | Type                                                                                                                                                                            |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NavComponentConfig` |             | `NavComponentConfigs`                                                                                                                                                           |
| `ROUTES`             |             | `{
  INFO: "info" as const,
  WORK: "work" as const,
  CODE: "code" as const,
  BLOG: "blog" as const,
  // SETTINGS: "settings" as const,
  // CONNECT: "connect" as const,
}` |

<hr/>

## Functions

| Name          | Description | Parameters     | Return  |
| ------------- | ----------- | -------------- | ------- |
| `hashToRoute` |             | `hash: string` | `Route` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                             | Package |
| ---- | -------------------- | ------------------ | ---------------------------------- | ------- |
| `js` | `hashToRoute`        | hashToRoute        | src/types/components/nav/routes.ts |         |
| `js` | `NavComponentConfig` | NavComponentConfig | src/types/components/nav/routes.ts |         |
| `js` | `ROUTES`             | ROUTES             | src/types/components/nav/routes.ts |         |

# `src/types/components/word/word-cloud.ts`:

## Variables

| Name                   | Description | Type                                                                                                                                                                                                                   |
| ---------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `WordCloudAppearances` |             | `{
  SIMULTANEOUS: "simultaneous" as const,
  SEQUENTIAL: "sequential" as const,
}`                                                                                                                                    |
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

<hr/>

## Functions

| Name                | Description                                  | Parameters                                                                         | Return          |
| ------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- | --------------- |
| `makeWordCloudWord` | A factory function to create a WordCloudWord | `word: string, weight: Weights, category: WordCloudWordCategory, extras: string[]` | `WordCloudWord` |

<hr/>

## Exports

| Kind | Name                   | Declaration          | Module                                  | Package |
| ---- | ---------------------- | -------------------- | --------------------------------------- | ------- |
| `js` | `makeWordCloudWord`    | makeWordCloudWord    | src/types/components/word/word-cloud.ts |         |
| `js` | `WordCloudAppearances` | WordCloudAppearances | src/types/components/word/word-cloud.ts |         |
| `js` | `WordCloudGroupings`   | WordCloudGroupings   | src/types/components/word/word-cloud.ts |         |
| `js` | `WordCloudSortings`    | WordCloudSortings    | src/types/components/word/word-cloud.ts |         |

# `src/types/components/work-experience/work-experience.ts`:

## Variables

| Name   | Description | Type |
| ------ | ----------- | ---- |
| `data` |             |      |

<hr/>

## Exports

| Kind | Name   | Declaration | Module                                                  | Package |
| ---- | ------ | ----------- | ------------------------------------------------------- | ------- |
| `js` | `data` | data        | src/types/components/work-experience/work-experience.ts |         |

# `src/types/configs/app-configs.ts`:

## Variables

| Name                  | Description | Type                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DEFAULT_APP_CONFIGS` |             | `{
  colorScheme: {
    theme: THEME_NAMES.sunset,
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

## Exports

| Kind | Name                  | Declaration           | Module                           | Package |
| ---- | --------------------- | --------------------- | -------------------------------- | ------- |
| `js` | `DEFAULT_APP_CONFIGS` | DEFAULT\_APP\_CONFIGS | src/types/configs/app-configs.ts |         |

# `src/types/configs/fab-configs.ts`:

## Variables

| Name                                 | Description | Type                                                                                                                                                                  |
| ------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FAB_POSITION`                       |             | `{
  START_TOP: "START_TOP" as const,
  START_BOTTOM: "START_BOTTOM" as const,
  END_TOP: "END_TOP" as const,
  END_BOTTOM: "END_BOTTOM" as const,
}`                 |
| `FAB_POSITION_COMPONENTS_HORIZONTAL` |             | `{
  START: "START" as const,
  END: "END" as const,
}`                                                                                                               |
| `FAB_POSITION_COMPONENTS_VERTICAL`   |             | `{
  TOP: "TOP" as const,
  BOTTOM: "BOTTOM" as const,
}`                                                                                                             |
| `FAB_STYLE`                          |             | `{
  ICON_ONLY: "ICON_ONLY" as const,
  ICON_AND_TEXT: "ICON_AND_TEXT" as const,
  ICON_ONLY_SMALL: "ICON_ONLY_SMALL" as const,
  TEXT_ONLY: "TEXT_ONLY" as const,
}` |
| `FabPositionIcons`                   |             | `Record<FabPosition, TemplateResult>`                                                                                                                                 |
| `FabPositions`                       |             | `FabPosition[]`                                                                                                                                                       |
| `FabStyles`                          |             | `FabStyle[]`                                                                                                                                                          |

<hr/>

## Functions

| Name                    | Description | Parameters                 | Return   |
| ----------------------- | ----------- | -------------------------- | -------- |
| `fabConfigToGrid`       |             | `config: FabConfig`        |          |
| `fabPositionClass`      |             | `fabPosition: FabPosition` |          |
| `fabPositionComponents` |             | `fabPosition: FabPosition` |          |
| `fabPositionToUi`       |             | `fabPosition: FabPosition` | `string` |
| `fabStyleToUi`          |             | `fabStyle: FabStyle`       | `string` |

<hr/>

## Exports

| Kind | Name                                 | Declaration                           | Module                           | Package |
| ---- | ------------------------------------ | ------------------------------------- | -------------------------------- | ------- |
| `js` | `FAB_POSITION`                       | FAB\_POSITION                         | src/types/configs/fab-configs.ts |         |
| `js` | `FAB_POSITION_COMPONENTS_HORIZONTAL` | FAB\_POSITION\_COMPONENTS\_HORIZONTAL | src/types/configs/fab-configs.ts |         |
| `js` | `FAB_POSITION_COMPONENTS_VERTICAL`   | FAB\_POSITION\_COMPONENTS\_VERTICAL   | src/types/configs/fab-configs.ts |         |
| `js` | `FAB_STYLE`                          | FAB\_STYLE                            | src/types/configs/fab-configs.ts |         |
| `js` | `fabConfigToGrid`                    | fabConfigToGrid                       | src/types/configs/fab-configs.ts |         |
| `js` | `fabPositionClass`                   | fabPositionClass                      | src/types/configs/fab-configs.ts |         |
| `js` | `fabPositionComponents`              | fabPositionComponents                 | src/types/configs/fab-configs.ts |         |
| `js` | `FabPositionIcons`                   | FabPositionIcons                      | src/types/configs/fab-configs.ts |         |
| `js` | `FabPositions`                       | FabPositions                          | src/types/configs/fab-configs.ts |         |
| `js` | `fabPositionToUi`                    | fabPositionToUi                       | src/types/configs/fab-configs.ts |         |
| `js` | `FabStyles`                          | FabStyles                             | src/types/configs/fab-configs.ts |         |
| `js` | `fabStyleToUi`                       | fabStyleToUi                          | src/types/configs/fab-configs.ts |         |

# `src/types/theme/color-scheme-configs.ts`:

## Variables

| Name                          | Description | Type                                                                                     |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `CONFIG_COLOR_CONTRAST_NAMES` |             | `{
  NORMAL: "NORMAL" as const,
  MEDIUM: "MEDIUM" as const,
  HIGH: "HIGH" as const,
}` |
| `CONFIG_COLOR_SCHEME_NAMES`   |             | `{
  DARK: "DARK" as const,
  LIGHT: "LIGHT" as const,
  SYSTEM: "SYSTEM" as const,
}`   |

<hr/>

## Functions

| Name                                     | Description | Parameters                                                       | Return               |
| ---------------------------------------- | ----------- | ---------------------------------------------------------------- | -------------------- |
| `colorSchemeConfigsToMaterialSchemeName` |             | `colorSchemeSettings: ColorSchemeConfigs`                        | `MaterialSchemeName` |
| `colorSchemeContrastToIcon`              |             | `slot: "start" \| "leading-icon", contrast: ColorSchemeContrast` |                      |

<hr/>

## Exports

| Kind | Name                                     | Declaration                            | Module                                  | Package |
| ---- | ---------------------------------------- | -------------------------------------- | --------------------------------------- | ------- |
| `js` | `colorSchemeConfigsToMaterialSchemeName` | colorSchemeConfigsToMaterialSchemeName | src/types/theme/color-scheme-configs.ts |         |
| `js` | `colorSchemeContrastToIcon`              | colorSchemeContrastToIcon              | src/types/theme/color-scheme-configs.ts |         |
| `js` | `CONFIG_COLOR_CONTRAST_NAMES`            | CONFIG\_COLOR\_CONTRAST\_NAMES         | src/types/theme/color-scheme-configs.ts |         |
| `js` | `CONFIG_COLOR_SCHEME_NAMES`              | CONFIG\_COLOR\_SCHEME\_NAMES           | src/types/theme/color-scheme-configs.ts |         |

# `src/types/theme/theme.ts`:

## Variables

| Name            | Description | Type                                                                                                                                                  |
| --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PhotoJsonFile` |             | `PhotosJson`                                                                                                                                          |
| `THEME_NAMES`   |             | `{
  chicago: "chicago" as const,
  inter: "inter" as const,
  red: "red" as const,
  // skyline: "skyline" as const,
  sunset: "sunset" as const,
}` |

<hr/>

## Functions

| Name                     | Description                                                                                                   | Parameters                     | Return |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------ |
| `jsonIsThemeJsonSchemes` | Checks if the provided JSON conforms to the expected theme schemes structure                                  | `json: unknown`                |        |
| `keyTransform`           | Converts jsonKey and corresponding rgb value into a CSS custom property&#xA;  via css and unsafeCSS functions | `jsonKey: string, rgb: string` |        |
| `readScheme`             |                                                                                                               | `jsonSchema: object`           |        |

<hr/>

## Exports

| Kind | Name                     | Declaration            | Module                   | Package |
| ---- | ------------------------ | ---------------------- | ------------------------ | ------- |
| `js` | `jsonIsThemeJsonSchemes` | jsonIsThemeJsonSchemes | src/types/theme/theme.ts |         |
| `js` | `keyTransform`           | keyTransform           | src/types/theme/theme.ts |         |
| `js` | `PhotoJsonFile`          | PhotoJsonFile          | src/types/theme/theme.ts |         |
| `js` | `readScheme`             | readScheme             | src/types/theme/theme.ts |         |
| `js` | `THEME_NAMES`            | THEME\_NAMES           | src/types/theme/theme.ts |         |
