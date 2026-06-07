# `dist/out/components/app-shell/app-shell.js`:

## class: `AppShell`, `app-shell`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Slots

| Name          | Description                                                         |
| ------------- | ------------------------------------------------------------------- |
| `app-content` | The place for the dynamic application content                       |
| `app-nav`     | Where the {@link @fnc314/com.fnc314.website!NavComponent} is placed |

<details><summary>Private API</summary>

### Fields

| Name                  | Privacy | Type                                | Default | Description                                                                                                      | Inherited From |
| --------------------- | ------- | ----------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- | -------------- |
| `_activeRoute`        | private | `Route`                             |         |                                                                                                                  |                |
| `_boundListener`      | private |                                     |         |                                                                                                                  |                |
| `_inlineIconTimeout`  | private | `number`                            | `0`     |                                                                                                                  |                |
| `_scrollSpyObserver`  | private | `IntersectionObserver \| undefined` |         |                                                                                                                  |                |
| `onAppConfigsChange`  | private |                                     |         | Syncs the component state with the global application configuration.                                             |                |
| `onColorSchemeChange` | private |                                     |         | Event handler for color scheme changes.&#xA;Updates the UI icon, Material theme variables, and meta theme color. |                |

### Methods

| Name                  | Privacy | Description | Parameters   | Return          | Inherited From |
| --------------------- | ------- | ----------- | ------------ | --------------- | -------------- |
| `_handleHashChange`   | private |             |              |                 |                |
| `_routeFromElementId` | private |             | `id: string` | `Route \| null` |                |
| `_setupScrollSpy`     | private |             |              |                 |                |

</details>

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `custom-element-definition` | `app-shell` | AppShell    | src/components/app-shell/app-shell.ts |         |
| `js`                        | `AppShell`  | AppShell    | src/components/app-shell/app-shell.ts |         |

# `dist/out/components/bento-layout/bento-layout.js`:

## class: `BentoLayout`, `bento-layout`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy | Type                                | Default | Description | Inherited From |
| -------------------- | ------- | ----------------------------------- | ------- | ----------- | -------------- |
| `_activeRoute`       | private | `Route`                             |         |             |                |
| `_bentoBoxConfigs`   | private | `BentoBoxConfig[]`                  |         |             |                |
| `_scrollSpyObserver` | private | `IntersectionObserver \| undefined` |         |             |                |

### Methods

| Name                  | Privacy | Description | Parameters               | Return           | Inherited From |
| --------------------- | ------- | ----------- | ------------------------ | ---------------- | -------------- |
| `_routeFromElementId` | private |             | `id: string`             | `Route \| null`  |                |
| `_setupScrollSpy`     | private |             |                          |                  |                |
| `renderBentoBox`      | private |             | `config: BentoBoxConfig` | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                                      | Package |
| --------------------------- | -------------- | ----------- | ------------------------------------------- | ------- |
| `custom-element-definition` | `bento-layout` | BentoLayout | src/components/bento-layout/bento-layout.ts |         |
| `js`                        | `BentoLayout`  | BentoLayout | src/components/bento-layout/bento-layout.ts |         |

# `src/components/bento-layout/bento-layout.types.ts`:

## Functions

| Name              | Description                                                                       | Parameters | Return |
| ----------------- | --------------------------------------------------------------------------------- | ---------- | ------ |
| `BentoBoxConfigs` | Produces an Array of BentoBoxConfig instances used to populate&#xA;  BentoLayout. |            |        |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                            | Package |
| ---- | ----------------- | --------------- | ------------------------------------------------- | ------- |
| `js` | `BentoBoxConfigs` | BentoBoxConfigs | src/components/bento-layout/bento-layout.types.ts |         |

# `dist/out/components/blog/blog-post.js`:

## class: `BlogPost`, `blog-post`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Methods

| Name       | Privacy | Description                               | Parameters | Return | Inherited From |
| ---------- | ------- | ----------------------------------------- | ---------- | ------ | -------------- |
| `blogPost` |         | The {@link BlogPostJson} record to render |            |        |                |

### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `blogPost` | blogPost |                |

### CSS Properties

| Name                                   | Default | Description                                                                                                                   |
| -------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `--blog-post-animation`                |         | The duration of the animation for \\\`:focus\\\`, \\\`:hover\\\`, \\\`:focus-within\\\`, and \\\`:focus-visible\\\` states    |
| `--blog-post-primary-text-color`       |         | The color of the primary text                                                                                                 |
| `--blog-post-container-color`          |         | The color of the container, {@link @material/web!MdElevatedCard} and {@link @material/web!--md-elevated-card-container-color} |
| `--blog-post-word-tag-container-color` |         | The color of the container, {@link @fnc314/com.fnc314.website!WordTag}                                                        |

<details><summary>Private API</summary>

### Methods

| Name                | Privacy | Description | Parameters | Return | Inherited From |
| ------------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `darkMode`          | private |             |            |        |                |
| `onAppConfigChange` | private |             |            |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration  | Module                            | Package |
| --------------------------- | -------------- | ------------ | --------------------------------- | ------- |
| `custom-element-definition` | `blog-post`    | BlogPost     | src/components/blog/blog-post.ts  |         |
| `js`                        | `BlogPost`     | BlogPost     | src/components/blog/blog-post.ts  |         |
| `js`                        | `BlogPostJson` | BlogPostJson | @/components/blog/blog-post.types |         |

# `src/components/card/bento/bento-card.styles.ts`:

## Variables

| Name              | Description | Type |
| ----------------- | ----------- | ---- |
| `bentoCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                         | Package |
| ---- | ----------------- | --------------- | ---------------------------------------------- | ------- |
| `js` | `bentoCardStyles` | bentoCardStyles | src/components/card/bento/bento-card.styles.ts |         |

# `dist/out/components/card/bento/bento-card.js`:

## class: `BentoCard`, `bento-card`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type | Default | Description                                                                                                                                | Inherited From |
| ------------- | ------- | ---- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `enableFocus` |         |      |         | Whether to enable enhanced border and shadow styling on focus-within.&#xA;Defaults to false.                                               |                |
| `enableHover` |         |      |         | Whether to enable the lift-on-hover effect.&#xA;Defaults to false to minimize visual motion in dense layout grids.                         |                |
| `expanded`    |         |      |         | Reflects and controls the open state of the underlying \`\<details>\` element.&#xA;When true, the card is expanded and content is visible. |                |
| `scrollable`  |         |      |         | Enables internal vertical scrolling for content.                                                                                           |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |
| `scrollable`  | scrollable  |                |

### Slots

| Name     | Description                                                                                 |
| -------- | ------------------------------------------------------------------------------------------- |
|          | Default slot for card content. Slotted \`h2\` elements receive standardized header styling. |
| `header` | Content to be displayed in the card's header/summary area.                                  |

<details><summary>Private API</summary>

### Methods

| Name            | Privacy | Description                                                                                                                                          | Parameters | Return | Inherited From |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ | -------------- |
| `_handleToggle` | private | Synchronizes the \`expanded\` property with the state of the \`\<details>\` element&#xA;whenever the user interacts with the toggle icon or summary. | `e: Event` |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name         | Declaration | Module                                  | Package |
| --------------------------- | ------------ | ----------- | --------------------------------------- | ------- |
| `custom-element-definition` | `bento-card` | BentoCard   | src/components/card/bento/bento-card.ts |         |
| `js`                        | `BentoCard`  | BentoCard   | src/components/card/bento/bento-card.ts |         |

# `src/components/card/blog/blog-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `blogCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                       | Package |
| ---- | ---------------- | -------------- | -------------------------------------------- | ------- |
| `js` | `blogCardStyles` | blogCardStyles | src/components/card/blog/blog-card.styles.ts |         |

# `dist/out/components/card/blog/blog-card.js`:

## class: `BlogCard`, `blog-card`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      |         |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `custom-element-definition` | `blog-card` | BlogCard    | src/components/card/blog/blog-card.ts |         |
| `js`                        | `BlogCard`  | BlogCard    | src/components/card/blog/blog-card.ts |         |

# `src/components/card/code/code-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `codeCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                       | Package |
| ---- | ---------------- | -------------- | -------------------------------------------- | ------- |
| `js` | `codeCardStyles` | codeCardStyles | src/components/card/code/code-card.styles.ts |         |

# `dist/out/components/card/code/code-card.js`:

## class: `CodeCard`, `code-card`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      |         |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `custom-element-definition` | `code-card` | CodeCard    | src/components/card/code/code-card.ts |         |
| `js`                        | `CodeCard`  | CodeCard    | src/components/card/code/code-card.ts |         |

# `src/components/card/connect/connect-card.styles.ts`:

## Variables

| Name                | Description | Type |
| ------------------- | ----------- | ---- |
| `connectCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                             | Package |
| ---- | ------------------- | ----------------- | -------------------------------------------------- | ------- |
| `js` | `connectCardStyles` | connectCardStyles | src/components/card/connect/connect-card.styles.ts |         |

# `dist/out/components/card/connect/connect-card.js`:

## class: `ConnectCard`, `connect-card`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      |         |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                                      | Package |
| --------------------------- | -------------- | ----------- | ------------------------------------------- | ------- |
| `custom-element-definition` | `connect-card` | ConnectCard | src/components/card/connect/connect-card.ts |         |
| `js`                        | `ConnectCard`  | ConnectCard | src/components/card/connect/connect-card.ts |         |

# `src/components/card/education/education-card.styles.ts`:

## Variables

| Name                  | Description | Type |
| --------------------- | ----------- | ---- |
| `educationCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                                                 | Package |
| ---- | --------------------- | ------------------- | ------------------------------------------------------ | ------- |
| `js` | `educationCardStyles` | educationCardStyles | src/components/card/education/education-card.styles.ts |         |

# `dist/out/components/card/education/education-card.js`:

## class: `EducationCard`, `education-card`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      |         |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<hr/>

## Exports

| Kind                        | Name             | Declaration   | Module                                          | Package |
| --------------------------- | ---------------- | ------------- | ----------------------------------------------- | ------- |
| `custom-element-definition` | `education-card` | EducationCard | src/components/card/education/education-card.ts |         |
| `js`                        | `EducationCard`  | EducationCard | src/components/card/education/education-card.ts |         |

# `dist/out/components/card/profile-bio/profile-bio-card.js`:

## class: `ProfileBioCard`, `profile-bio-card`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      |         |             |                |

### Methods

| Name      | Privacy | Description | Parameters | Return | Inherited From |
| --------- | ------- | ----------- | ---------- | ------ | -------------- |
| `bioText` |         |             |            |        |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `_photoData`  | \_photoData |                |
| `bioText`     | bioText     |                |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<details><summary>Private API</summary>

### Methods

| Name              | Privacy | Description | Parameters | Return | Inherited From |
| ----------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `_onConfigChange` | private |             |            |        |                |
| `_photoData`      | private |             |            |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name               | Declaration    | Module                                              | Package |
| --------------------------- | ------------------ | -------------- | --------------------------------------------------- | ------- |
| `custom-element-definition` | `profile-bio-card` | ProfileBioCard | src/components/card/profile-bio/profile-bio-card.ts |         |
| `js`                        | `ProfileBioCard`   | ProfileBioCard | src/components/card/profile-bio/profile-bio-card.ts |         |

# `dist/out/components/card/settings/settings-card.js`:

## class: `SettingsCard`, `settings-card`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      |         |             |                |

### Events

| Name                  | Type          | Description | Inherited From |
| --------------------- | ------------- | ----------- | -------------- |
| `color_scheme.change` | `CustomEvent` |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<details><summary>Private API</summary>

### Methods

| Name                         | Privacy | Description                                                                                                                                      | Parameters                               | Return | Inherited From |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------ | -------------- |
| `_appConfigs`                | private |                                                                                                                                                  |                                          |        |                |
| `_dispatchColorSchemeChange` | private |                                                                                                                                                  | `colorScheme: AppConfigs["colorScheme"]` |        |                |
| `_onContrastChange`          | private |                                                                                                                                                  | `event: Event`                           |        |                |
| `_onThemeChange`             | private |                                                                                                                                                  | `event: Event`                           |        |                |
| `formattedDate`              | private | Creates an {@link Intl.DateTimeFormat} and calls {@link Intl.DateTimeFormat.format}&#xA;  on {@link time} to render the user presented timestamp |                                          |        |                |
| `onAppConfigsChange`         | private |                                                                                                                                                  |                                          |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name            | Declaration  | Module                                        | Package |
| --------------------------- | --------------- | ------------ | --------------------------------------------- | ------- |
| `custom-element-definition` | `settings-card` | SettingsCard | src/components/card/settings/settings-card.ts |         |
| `js`                        | `SettingsCard`  | SettingsCard | src/components/card/settings/settings-card.ts |         |

# `src/components/card/skills/skills-card.styles.ts`:

## Variables

| Name               | Description | Type |
| ------------------ | ----------- | ---- |
| `skillsCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name               | Declaration      | Module                                           | Package |
| ---- | ------------------ | ---------------- | ------------------------------------------------ | ------- |
| `js` | `skillsCardStyles` | skillsCardStyles | src/components/card/skills/skills-card.styles.ts |         |

# `dist/out/components/card/skills/skills-card.js`:

## class: `SkillsCard`, `skills-card`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      |         |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<details><summary>Private API</summary>

### Methods

| Name                    | Privacy | Description | Parameters | Return | Inherited From |
| ----------------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `getSkillsForWordCloud` | private |             |            |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name          | Declaration | Module                                    | Package |
| --------------------------- | ------------- | ----------- | ----------------------------------------- | ------- |
| `custom-element-definition` | `skills-card` | SkillsCard  | src/components/card/skills/skills-card.ts |         |
| `js`                        | `SkillsCard`  | SkillsCard  | src/components/card/skills/skills-card.ts |         |

# `src/components/card/work/work-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `workCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                       | Package |
| ---- | ---------------- | -------------- | -------------------------------------------- | ------- |
| `js` | `workCardStyles` | workCardStyles | src/components/card/work/work-card.styles.ts |         |

# `dist/out/components/card/work/work-card.js`:

## class: `WorkCard`, `work-card`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      |         |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `custom-element-definition` | `work-card` | WorkCard    | src/components/card/work/work-card.ts |         |
| `js`                        | `WorkCard`  | WorkCard    | src/components/card/work/work-card.ts |         |

# `dist/out/components/code/code-project/code-project.js`:

## class: `CodeProject`, `code-project`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Methods

| Name          | Privacy | Description | Parameters | Return | Inherited From |
| ------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `codeProject` |         |             |            |        |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `codeProject` | codeProject |                |

<details><summary>Private API</summary>

### Fields

| Name      | Privacy | Type | Default | Description | Inherited From |
| --------- | ------- | ---- | ------- | ----------- | -------------- |
| `flipped` | private |      |         |             |                |

### Methods

| Name                 | Privacy | Description                                                  | Parameters | Return           | Inherited From |
| -------------------- | ------- | ------------------------------------------------------------ | ---------- | ---------------- | -------------- |
| `#generateCardBack`  | private | Builds the back of the @material/web!MdOutlinedCard content  |            | `TemplateResult` |                |
| `#generateCardFront` | private | Builds the front of the @material/web!MdOutlinedCard content |            | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name              | Declaration     | Module                                            | Package |
| --------------------------- | ----------------- | --------------- | ------------------------------------------------- | ------- |
| `custom-element-definition` | `code-project`    | CodeProject     | src/components/code/code-project/code-project.ts  |         |
| `js`                        | `CodeProject`     | CodeProject     | src/components/code/code-project/code-project.ts  |         |
| `js`                        | `CodeProjectData` | CodeProjectData | @/components/code/code-project/code-project.types |         |

# `dist/out/components/dialog/step-up/step-up-dialog.js`:

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

| Kind                        | Name                | Declaration       | Module                                           | Package |
| --------------------------- | ------------------- | ----------------- | ------------------------------------------------ | ------- |
| `custom-element-definition` | `step-up-dialog`    | StepUpDialog      | src/components/dialog/step-up/step-up-dialog.ts  |         |
| `js`                        | `StepUpDialog`      | StepUpDialog      | src/components/dialog/step-up/step-up-dialog.ts  |         |
| `js`                        | `StepUpDialogStyle` | StepUpDialogStyle | @/components/dialog/step-up/step-up-dialog.types |         |

# `dist/out/components/fab-menu/fab-menu-item.js`:

## class: `FabMenuItem`, `fab-menu-item`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name    | Privacy | Type                   | Default | Description                                    | Inherited From |
| ------- | ------- | ---------------------- | ------- | ---------------------------------------------- | -------------- |
| `icon`  |         | `MaterialSymbol \| ""` |         | The icon to display inside the FAB item.       |                |
| `label` |         |                        |         | The text label displayed next to the FAB item. |                |

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

| Kind                        | Name             | Declaration    | Module                                   | Package |
| --------------------------- | ---------------- | -------------- | ---------------------------------------- | ------- |
| `custom-element-definition` | `fab-menu-item`  | FabMenuItem    | src/components/fab-menu/fab-menu-item.ts |         |
| `js`                        | `FabMenuItem`    | FabMenuItem    | src/components/fab-menu/fab-menu-item.ts |         |
| `js`                        | `MaterialSymbol` | MaterialSymbol | @/types/material-symbols                 |         |

# `dist/out/components/fab-menu/fab-menu.js`:

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

| Kind                        | Name             | Declaration    | Module                              | Package |
| --------------------------- | ---------------- | -------------- | ----------------------------------- | ------- |
| `custom-element-definition` | `fab-menu`       | FabMenu        | src/components/fab-menu/fab-menu.ts |         |
| `js`                        | `FabMenu`        | FabMenu        | src/components/fab-menu/fab-menu.ts |         |
| `js`                        | `MaterialSymbol` | MaterialSymbol | @/types/material-symbols            |         |

# `dist/out/components/info-section/info-section.js`:

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

# `dist/out/components/partial-header/partial-header.js`:

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

# `dist/out/components/ui-mode-toggle/ui-mode-toggle.js`:

## class: `UiModeToggle`, `ui-mode-toggle`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name        | Privacy | Type | Default  | Description                                                                         | Inherited From |
| ----------- | ------- | ---- | -------- | ----------------------------------------------------------------------------------- | -------------- |
| `mode`      |         |      | `system` | Reflects the currently active color scheme mode.                                    |                |
| `permanent` |         |      |          | Controls whether the selected color scheme preference is persisted across sessions. |                |

### Methods

| Name    | Privacy | Description                                        | Parameters | Return | Inherited From |
| ------- | ------- | -------------------------------------------------- | ---------- | ------ | -------------- |
| `reset` | public  | Resets the UI mode toggle to its default settings. |            | `void` |                |

### Events

| Name                   | Type          | Description                                                                                                                                      | Inherited From |
| ---------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `color_scheme.change`  | `CustomEvent` | Dispatched when the UI mode (light/dark/system) or color scheme contrast is changed, propagating the new \`AppConfigs\["colorScheme"]\` details. |                |
| `colorschemechange`    |               | Event from \`dark-mode-toggle\` when the scheme changes.                                                                                         |                |
| `permanentcolorscheme` |               | Event from \`dark-mode-toggle\` when the persistence changes.                                                                                    |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `mode`      | mode      |                |
| `permanent` | permanent |                |

<details><summary>Private API</summary>

### Fields

| Name              | Privacy | Type             | Default | Description | Inherited From |
| ----------------- | ------- | ---------------- | ------- | ----------- | -------------- |
| `_darkModeToggle` | private | `DarkModeToggle` |         |             |                |

### Methods

| Name                                | Privacy | Description | Parameters                               | Return | Inherited From |
| ----------------------------------- | ------- | ----------- | ---------------------------------------- | ------ | -------------- |
| `_appConfigs`                       | private |             |                                          |        |                |
| `colorSchemeChangeEventListener`    | private |             |                                          |        |                |
| `onAppConfigsChange`                | private |             |                                          |        |                |
| `onColorThemeModeContrastChange`    | private |             | `colorScheme: AppConfigs["colorScheme"]` |        |                |
| `permanentColorSchemeEventListener` | private |             |                                          |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name             | Declaration  | Module                                          | Package |
| --------------------------- | ---------------- | ------------ | ----------------------------------------------- | ------- |
| `custom-element-definition` | `ui-mode-toggle` | UiModeToggle | src/components/ui-mode-toggle/ui-mode-toggle.ts |         |
| `js`                        | `UiModeToggle`   | UiModeToggle | src/components/ui-mode-toggle/ui-mode-toggle.ts |         |

# `dist/out/components/word/word-cloud/word-cloud.js`:

## class: `WordCloud`, `word-cloud`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name           | Privacy | Type               | Default | Description                                                                                                                                                                    | Inherited From |
| -------------- | ------- | ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `_sortedWords` |         |                    | ``      |                                                                                                                                                                                |                |
| `delay`        |         | `number \| "none"` | `none`  | The delay in milliseconds between word appearances when using sequential mode.&#xA;&#xA;Set to "none" to use the component's internal default delays.                          |                |
| `instantClear` |         |                    |         | Whether to clear the word cloud instantly when it is no longer visible.&#xA;When true, the cloud resets instantly to opacity 0 instead of fading out.                          |                |
| `threshold`    |         |                    | `0.1`   | The intersection observer threshold for visibility detection.&#xA;&#xA;A value between 0 and 1 indicating what percentage of the element must be visible to trigger animation. |                |
| `words`        |         |                    | ``      | The list of words to display in the cloud.                                                                                                                                     |                |

### Methods

| Name         | Privacy | Description                                                                                                                                                          | Parameters | Return | Inherited From |
| ------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ | -------------- |
| `appearance` |         | Controls the order in which words are animated/displayed.&#xA;&#xA;Can be 'sequential' (words appear one by one) or 'simultaneous' (words appear all at once).       |            |        |                |
| `grouping`   |         | Controls how words are grouped together within the cloud.&#xA;&#xA;Supported modes: 'category', 'quartile', or 'ungrouped'.                                          |            |        |                |
| `sorting`    |         | Controls how words are sorted within their groupings.&#xA;&#xA;Supported modes: 'by-weight', 'by-weight-reversed', 'by-alphabet', 'by-alphabet-reversed', or 'none'. |            |        |                |

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

| Name                    | Privacy | Type               | Default | Description | Inherited From |
| ----------------------- | ------- | ------------------ | ------- | ----------- | -------------- |
| `_intersectionObserver` | private |                    |         |             |                |
| `_isVisible`            | private |                    |         |             |                |
| `_listElement`          | private | `HTMLUListElement` |         |             |                |

### Methods

| Name                        | Privacy | Description | Parameters                  | Return                                                                              | Inherited From |
| --------------------------- | ------- | ----------- | --------------------------- | ----------------------------------------------------------------------------------- | -------------- |
| `_getSortFunction`          | private |             | `sorting: WordCloudSorting` | `((a: RenderableWordCloudWord, b: RenderableWordCloudWord) => number) \| undefined` |                |
| `_initIntersectionObserver` | private |             |                             |                                                                                     |                |
| `_processWords`             | private |             |                             | `RenderableWordCloudWord[]`                                                         |                |

</details>

<hr/>

## Exports

| Kind                        | Name                      | Declaration             | Module                                        | Package |
| --------------------------- | ------------------------- | ----------------------- | --------------------------------------------- | ------- |
| `js`                        | `RenderableWordCloudWord` | RenderableWordCloudWord | @/components/word/word-cloud/word-cloud.types |         |
| `custom-element-definition` | `word-cloud`              | WordCloud               | src/components/word/word-cloud/word-cloud.ts  |         |
| `js`                        | `WordCloud`               | WordCloud               | src/components/word/word-cloud/word-cloud.ts  |         |
| `js`                        | `WordCloudAppearance`     | WordCloudAppearance     | @/components/word/word-cloud/word-cloud.types |         |
| `js`                        | `WordCloudGrouping`       | WordCloudGrouping       | @/components/word/word-cloud/word-cloud.types |         |
| `js`                        | `WordCloudSorting`        | WordCloudSorting        | @/components/word/word-cloud/word-cloud.types |         |
| `js`                        | `WordCloudWord`           | WordCloudWord           | @/components/word/word-cloud/word-cloud.types |         |

# `src/components/word/word-cloud/word-cloud.types.ts`:

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

| Kind | Name                   | Declaration          | Module                                             | Package |
| ---- | ---------------------- | -------------------- | -------------------------------------------------- | ------- |
| `js` | `makeWordCloudWord`    | makeWordCloudWord    | src/components/word/word-cloud/word-cloud.types.ts |         |
| `js` | `WordCloudAppearances` | WordCloudAppearances | src/components/word/word-cloud/word-cloud.types.ts |         |
| `js` | `WordCloudGroupings`   | WordCloudGroupings   | src/components/word/word-cloud/word-cloud.types.ts |         |
| `js` | `WordCloudSortings`    | WordCloudSortings    | src/components/word/word-cloud/word-cloud.types.ts |         |

# `dist/out/components/word/word-tag/word-tag.js`:

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

| Kind                        | Name               | Declaration      | Module                                    | Package |
| --------------------------- | ------------------ | ---------------- | ----------------------------------------- | ------- |
| `custom-element-definition` | `word-tag`         | WordTag          | src/components/word/word-tag/word-tag.ts  |         |
| `js`                        | `WordTag`          | WordTag          | src/components/word/word-tag/word-tag.ts  |         |
| `js`                        | `WordTagHeaviness` | WordTagHeaviness | @/components/word/word-tag/word-tag.types |         |

# `dist/out/components/work-experience/work-experience.js`:

## class: `WorkExperience`, `work-experience`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name                | Privacy | Type | Default                   | Description                                                                     | Inherited From |
| ------------------- | ------- | ---- | ------------------------- | ------------------------------------------------------------------------------- | -------------- |
| `dateEnd`           |         |      | `{ stamp: "", text: "" }` | End date information including machine-readable stamp and display text.         |                |
| `dateStart`         |         |      | `{ stamp: "", text: "" }` | Start date information including machine-readable stamp and display text.       |                |
| `experienceOrg`     |         |      |                           | The name of the organization or client.                                         |                |
| `experienceRole`    |         |      |                           | The title of the professional role or project.                                  |                |
| `experienceSummary` |         |      |                           | An optional summary of the overall role                                         |                |
| `isNested`          |         |      |                           | If true, adjusts font sizes and layout for a nested appearance.                 |                |
| `jobs`              |         |      | ``                        | A list of sub-jobs or project assignments to be rendered as nested experiences. |                |
| `summaries`         |         |      | ``                        | A list of summary points describing achievements or responsibilities.           |                |

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

| Kind                        | Name              | Declaration    | Module                                             | Package |
| --------------------------- | ----------------- | -------------- | -------------------------------------------------- | ------- |
| `js`                        | `Job`             | Job            | @/components/work-experience/work-experience.types |         |
| `custom-element-definition` | `work-experience` | WorkExperience | src/components/work-experience/work-experience.ts  |         |
| `js`                        | `WorkDate`        | WorkDate       | @/components/work-experience/work-experience.types |         |
| `js`                        | `WorkExperience`  | WorkExperience | src/components/work-experience/work-experience.ts  |         |

# `src/components/work-experience/work-experience.types.ts`:

## Variables

| Name   | Description | Type |
| ------ | ----------- | ---- |
| `data` |             |      |

<hr/>

## Exports

| Kind | Name   | Declaration | Module                                                  | Package |
| ---- | ------ | ----------- | ------------------------------------------------------- | ------- |
| `js` | `data` | data        | src/components/work-experience/work-experience.types.ts |         |
