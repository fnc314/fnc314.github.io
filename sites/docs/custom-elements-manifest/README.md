# `packages/components/src/bento-layout/bento-layout.styles.ts`:

## Variables

| Name                | Description                                                          | Type |
| ------------------- | -------------------------------------------------------------------- | ---- |
| `BentoLayoutStyles` |                                                                      |      |
| `TransitionStyles`  | Standardized transition animations for page loads and state changes. |      |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                                      | Package |
| ---- | ------------------- | ----------------- | ----------------------------------------------------------- | ------- |
| `js` | `BentoLayoutStyles` | BentoLayoutStyles | packages/components/src/bento-layout/bento-layout.styles.ts |         |
| `js` | `TransitionStyles`  | TransitionStyles  | packages/components/src/bento-layout/bento-layout.styles.ts |         |

# `packages/components/src/bento-layout/bento-layout.ts`:

## class: `BentoLayout`, `bento-layout`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name             | Privacy   | Description                                                                   | Parameters                                         | Return           | Inherited From |
| ---------------- | --------- | ----------------------------------------------------------------------------- | -------------------------------------------------- | ---------------- | -------------- |
| `getActiveIcon`  | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants`                           | `TemplateResult` | UIAwareElement |
| `renderBentoBox` | private   |                                                                               | `configName: BentoBoxType, config: BentoBoxConfig` | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                                               | Package |
| --------------------------- | -------------- | ----------- | ---------------------------------------------------- | ------- |
| `custom-element-definition` | `bento-layout` | BentoLayout | packages/components/src/bento-layout/bento-layout.ts |         |
| `js`                        | `BentoLayout`  | BentoLayout | packages/components/src/bento-layout/bento-layout.ts |         |

# `packages/components/src/card/bento/bento-card.styles.ts`:

## Variables

| Name              | Description | Type |
| ----------------- | ----------- | ---- |
| `BentoCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                                  | Package |
| ---- | ----------------- | --------------- | ------------------------------------------------------- | ------- |
| `js` | `BentoCardStyles` | BentoCardStyles | packages/components/src/card/bento/bento-card.styles.ts |         |

# `packages/components/src/card/bento/bento-card.ts`:

## class: `BentoCard`, `bento-card`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name             | Privacy | Type | Default | Description                                                                                                                                    | Inherited From |
| ---------------- | ------- | ---- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `bentoCardTitle` |         |      |         | The clickable text for the \`\<h2>\` in the \`\<summary>\` element.  When provided,&#xA;  the exposed \`slot\[name="header"]\` is suppressed.  |                |
| `enableFocus`    |         |      |         | Whether to enable enhanced border and shadow styling on focus-within.&#xA;Defaults to \`false\`.                                               |                |
| `enableHover`    |         |      |         | Whether to enable the lift-on-hover effect.&#xA;Defaults to \`false\` to minimize visual motion in dense layout grids.                         |                |
| `expanded`       |         |      |         | Reflects and controls the open state of the underlying \`\<details>\` element.&#xA;When \`true\`, the card is expanded and content is visible. |                |
| `scrollable`     |         |      |         | Whether to enable scrolling for content                                                                                                        |                |
| `spreadContent`  |         |      |         | Whether to spread content over the entire body                                                                                                 |                |

### Methods

| Name       | Privacy | Description                                                          | Parameters | Return | Inherited From |
| ---------- | ------- | -------------------------------------------------------------------- | ---------- | ------ | -------------- |
| `bentoTag` |         | Uniquely identifies this \`BentoCard\` via {@link BENTO\_BOX\_TYPES} |            |        |                |

### Attributes

| Name             | Field          | Inherited From |
| ---------------- | -------------- | -------------- |
| `bentoCardTitle` | bentoCardTitle |                |
| `bentoTag`       | bentoTag       |                |
| `enableFocus`    | enableFocus    |                |
| `enableHover`    | enableHover    |                |
| `expanded`       | expanded       |                |
| `scrollable`     | scrollable     |                |
| `spreadContent`  | spreadContent  |                |

### Slots

| Name     | Description                                                                                 |
| -------- | ------------------------------------------------------------------------------------------- |
|          | Default slot for card content. Slotted \`h2\` elements receive standardized header styling. |
| `header` | Content to be displayed in the card's header/summary area.                                  |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                                                                                          | Parameters               | Return           | Inherited From |
| --------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `_handleToggle` | private   | Synchronizes the \`expanded\` property with the state of the \`\<details>\` element&#xA;whenever the user interacts with the toggle icon or summary. | `e: Event`               |                  |                |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                        | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration  | Module                                           | Package |
| --------------------------- | -------------- | ------------ | ------------------------------------------------ | ------- |
| `custom-element-definition` | `bento-card`   | BentoCard    | packages/components/src/card/bento/bento-card.ts |         |
| `js`                        | `BentoBoxType` | BentoBoxType | @fnc314/packages.types                           |         |
| `js`                        | `BentoCard`    | BentoCard    | packages/components/src/card/bento/bento-card.ts |         |

# `packages/components/src/card/blog/blog-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `BlogCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                | Package |
| ---- | ---------------- | -------------- | ----------------------------------------------------- | ------- |
| `js` | `BlogCardStyles` | BlogCardStyles | packages/components/src/card/blog/blog-card.styles.ts |         |

# `packages/components/src/card/blog/blog-card.ts`:

## class: `BlogCard`, `blog-card`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

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

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                         | Package |
| --------------------------- | ----------- | ----------- | ---------------------------------------------- | ------- |
| `custom-element-definition` | `blog-card` | BlogCard    | packages/components/src/card/blog/blog-card.ts |         |
| `js`                        | `BlogCard`  | BlogCard    | packages/components/src/card/blog/blog-card.ts |         |

# `packages/components/src/card/code/code-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `CodeCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                | Package |
| ---- | ---------------- | -------------- | ----------------------------------------------------- | ------- |
| `js` | `CodeCardStyles` | CodeCardStyles | packages/components/src/card/code/code-card.styles.ts |         |

# `packages/components/src/card/code/code-card.ts`:

## class: `CodeCard`, `code-card`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

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

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                         | Package |
| --------------------------- | ----------- | ----------- | ---------------------------------------------- | ------- |
| `custom-element-definition` | `code-card` | CodeCard    | packages/components/src/card/code/code-card.ts |         |
| `js`                        | `CodeCard`  | CodeCard    | packages/components/src/card/code/code-card.ts |         |

# `packages/components/src/card/connections/connections-card.styles.ts`:

## Variables

| Name                    | Description | Type        |
| ----------------------- | ----------- | ----------- |
| `ConnectionsCardStyles` |             | `CSSResult` |
| `DL_DIV_COLUMN_COUNT`   |             | `number`    |

<hr/>

## Exports

| Kind | Name                    | Declaration            | Module                                                              | Package |
| ---- | ----------------------- | ---------------------- | ------------------------------------------------------------------- | ------- |
| `js` | `ConnectionsCardStyles` | ConnectionsCardStyles  | packages/components/src/card/connections/connections-card.styles.ts |         |
| `js` | `DL_DIV_COLUMN_COUNT`   | DL\_DIV\_COLUMN\_COUNT | packages/components/src/card/connections/connections-card.styles.ts |         |

# `packages/components/src/card/connections/connections-card.ts`:

## class: `ConnectionsCard`, `connections-card`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      | `true`  |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name                     | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| ------------------------ | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `contactsDefinitionList` | private   |                                                                               |                          | `TemplateResult` |                |
| `getActiveIcon`          | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name               | Declaration     | Module                                                       | Package |
| --------------------------- | ------------------ | --------------- | ------------------------------------------------------------ | ------- |
| `custom-element-definition` | `connections-card` | ConnectionsCard | packages/components/src/card/connections/connections-card.ts |         |
| `js`                        | `ConnectionsCard`  | ConnectionsCard | packages/components/src/card/connections/connections-card.ts |         |

# `packages/components/src/card/education/education-card.styles.ts`:

## Variables

| Name                  | Description | Type |
| --------------------- | ----------- | ---- |
| `EducationCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                                                          | Package |
| ---- | --------------------- | ------------------- | --------------------------------------------------------------- | ------- |
| `js` | `EducationCardStyles` | EducationCardStyles | packages/components/src/card/education/education-card.styles.ts |         |

# `packages/components/src/card/education/education-card.ts`:

## class: `EducationCard`, `education-card`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      |         |             |                |

### Methods

| Name                 | Privacy | Description | Parameters | Return | Inherited From |
| -------------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `_educationJsonData` |         |             |            |        |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                         | Declaration                | Module                                                   | Package |
| --------------------------- | ---------------------------- | -------------------------- | -------------------------------------------------------- | ------- |
| `custom-element-definition` | `education-card`             | EducationCard              | packages/components/src/card/education/education-card.ts |         |
| `js`                        | `EducationCard`              | EducationCard              | packages/components/src/card/education/education-card.ts |         |
| `js`                        | `EducationInstitutionRecord` | EducationInstitutionRecord | @fnc314/packages.types                                   |         |

# `packages/components/src/card/experience/experience-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `WorkCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                            | Package |
| ---- | ---------------- | -------------- | ----------------------------------------------------------------- | ------- |
| `js` | `WorkCardStyles` | WorkCardStyles | packages/components/src/card/experience/experience-card.styles.ts |         |

# `packages/components/src/card/experience/experience-card.ts`:

## class: `ExperienceCard`, `experience-card`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

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

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name              | Declaration    | Module                                                     | Package |
| --------------------------- | ----------------- | -------------- | ---------------------------------------------------------- | ------- |
| `custom-element-definition` | `experience-card` | ExperienceCard | packages/components/src/card/experience/experience-card.ts |         |
| `js`                        | `ExperienceCard`  | ExperienceCard | packages/components/src/card/experience/experience-card.ts |         |

# `packages/components/src/card/profile/profile-card.styles.ts`:

## Variables

| Name                | Description | Type        |
| ------------------- | ----------- | ----------- |
| `ProfileCardStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                                      | Package |
| ---- | ------------------- | ----------------- | ----------------------------------------------------------- | ------- |
| `js` | `ProfileCardStyles` | ProfileCardStyles | packages/components/src/card/profile/profile-card.styles.ts |         |

# `packages/components/src/card/profile/profile-card.ts`:

## class: `ProfileCard`, `profile-card`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type | Default | Description | Inherited From |
| ------------- | ------- | ---- | ------- | ----------- | -------------- |
| `enableFocus` |         |      |         |             |                |
| `enableHover` |         |      |         |             |                |
| `expanded`    |         |      | `true`  |             |                |

### Methods

| Name        | Privacy | Description | Parameters | Return | Inherited From |
| ----------- | ------- | ----------- | ---------- | ------ | -------------- |
| `aboutMe`   |         |             |            |        |                |
| `photoData` |         |             |            |        |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `aboutMe`     | aboutMe     |                |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `_onConfigChange`    | private   |                                          |                                                  |                                                                                                                                                                              |                |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |
| `imageSection`  | private   |                                                                               |                          | `TemplateResult` |                |
| `renderAboutMe` | private   |                                                                               |                          | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                                               | Package |
| --------------------------- | -------------- | ----------- | ---------------------------------------------------- | ------- |
| `js`                        | `BioExtended`  | BioExtended | @fnc314/packages.types                               |         |
| `custom-element-definition` | `profile-card` | ProfileCard | packages/components/src/card/profile/profile-card.ts |         |
| `js`                        | `ProfileCard`  | ProfileCard | packages/components/src/card/profile/profile-card.ts |         |

# `packages/components/src/card/settings/settings-card.styles.ts`:

## Variables

| Name                 | Description | Type        |
| -------------------- | ----------- | ----------- |
| `SettingsCardStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                                        | Package |
| ---- | -------------------- | ------------------ | ------------------------------------------------------------- | ------- |
| `js` | `SettingsCardStyles` | SettingsCardStyles | packages/components/src/card/settings/settings-card.styles.ts |         |

# `packages/components/src/card/settings/settings-card.ts`:

## class: `SettingsCard`, `settings-card`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

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

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name                         | Privacy   | Description                                                                   | Parameters                               | Return           | Inherited From |
| ---------------------------- | --------- | ----------------------------------------------------------------------------- | ---------------------------------------- | ---------------- | -------------- |
| `_appConfigs`                | private   |                                                                               |                                          |                  |                |
| `_dispatchColorSchemeChange` | private   |                                                                               | `colorScheme: AppConfigs["colorScheme"]` |                  |                |
| `_formatThemeName`           | private   | Formats the provided ThemeName into a proper-for-display format               | `themeName: ThemeName`                   | `string`         |                |
| `_onContrastChange`          | private   |                                                                               | `event: Event`                           |                  |                |
| `_onThemeChange`             | private   |                                                                               | `event: Event`                           |                  |                |
| `_uiContrastFieldSet`        | private   |                                                                               |                                          | `TemplateResult` |                |
| `_uiThemeFieldSet`           | private   |                                                                               |                                          | `TemplateResult` |                |
| `getActiveIcon`              | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants`                 | `TemplateResult` | UIAwareElement |
| `onAppConfigsChange`         | private   |                                                                               |                                          |                  |                |

</details>

<hr/>

## Exports

| Kind                        | Name            | Declaration  | Module                                                 | Package |
| --------------------------- | --------------- | ------------ | ------------------------------------------------------ | ------- |
| `custom-element-definition` | `settings-card` | SettingsCard | packages/components/src/card/settings/settings-card.ts |         |
| `js`                        | `SettingsCard`  | SettingsCard | packages/components/src/card/settings/settings-card.ts |         |

# `packages/components/src/card/skills/skills-card.styles.ts`:

## Variables

| Name               | Description | Type |
| ------------------ | ----------- | ---- |
| `SkillsCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name               | Declaration      | Module                                                    | Package |
| ---- | ------------------ | ---------------- | --------------------------------------------------------- | ------- |
| `js` | `SkillsCardStyles` | SkillsCardStyles | packages/components/src/card/skills/skills-card.styles.ts |         |

# `packages/components/src/card/skills/skills-card.ts`:

## class: `SkillsCard`, `skills-card`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

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

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name                    | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| ----------------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon`         | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |
| `getSkillsForWordCloud` | private   |                                                                               |                          |                  |                |

</details>

<hr/>

## Exports

| Kind                        | Name          | Declaration | Module                                             | Package |
| --------------------------- | ------------- | ----------- | -------------------------------------------------- | ------- |
| `custom-element-definition` | `skills-card` | SkillsCard  | packages/components/src/card/skills/skills-card.ts |         |
| `js`                        | `SkillsCard`  | SkillsCard  | packages/components/src/card/skills/skills-card.ts |         |

# `packages/components/src/code/repo/code-repo.styles.ts`:

## Variables

| Name             | Description                                            | Type        |
| ---------------- | ------------------------------------------------------ | ----------- |
| `CodeRepoStyles` | The CSSResult for @fnc314/packages.components!CodeRepo | `CSSResult` |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                | Package |
| ---- | ---------------- | -------------- | ----------------------------------------------------- | ------- |
| `js` | `CodeRepoStyles` | CodeRepoStyles | packages/components/src/code/repo/code-repo.styles.ts |         |

# `packages/components/src/code/repo/code-repo.ts`:

## class: `CodeRepo`, `code-repo`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Methods

| Name       | Privacy | Description                                 | Parameters | Return | Inherited From |
| ---------- | ------- | ------------------------------------------- | ---------- | ------ | -------------- |
| `codeRepo` |         | {@link @fnc314/packages.types!CodeRepoData} |            |        |                |

### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `codeRepo` | codeRepo |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `activeRevealIndex`  | private   |                                          |                                                  | The index of the technology tag currently expanded in the reveal panel.                                                                                                      |                |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `codeRevealComp`     | private   | `CodeReveal`                             |                                                  |                                                                                                                                                                              |                |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `isClosing`          | private   |                                          |                                                  | True if the reveal panel is currently playing its closing animation.                                                                                                         |                |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `pendingRevealIndex` | private   |                                          |                                                  | The index of the technology tag waiting to expand after the current panel closes.                                                                                            |                |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |
| `wordTags`           | private   |                                          |                                                  |                                                                                                                                                                              |                |

### Methods

| Name                 | Privacy   | Description                                                                   | Parameters                              | Return           | Inherited From |
| -------------------- | --------- | ----------------------------------------------------------------------------- | --------------------------------------- | ---------------- | -------------- |
| `_handleGridKeyDown` | private   |                                                                               | `e: KeyboardEvent`                      |                  |                |
| `_restoreFocus`      | private   |                                                                               | `index: number`                         |                  |                |
| `_toggleReveal`      | private   |                                                                               | `tech: CodeRepoTech, wordIndex: number` |                  |                |
| `createWordTagLI`    | private   |                                                                               | `tech: CodeRepoTech, wordIndex: number` | `TemplateResult` |                |
| `getActiveIcon`      | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants`                | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration  | Module                                         | Package |
| --------------------------- | -------------- | ------------ | ---------------------------------------------- | ------- |
| `custom-element-definition` | `code-repo`    | CodeRepo     | packages/components/src/code/repo/code-repo.ts |         |
| `js`                        | `CodeRepo`     | CodeRepo     | packages/components/src/code/repo/code-repo.ts |         |
| `js`                        | `CodeRepoData` | CodeRepoData | @fnc314/packages.types                         |         |

# `packages/components/src/code/reveal/code-reveal.styles.ts`:

## Variables

| Name               | Description                                                              | Type        |
| ------------------ | ------------------------------------------------------------------------ | ----------- |
| `CodeRevealStyles` | The CSSResult for inline reveals in @fnc314/packages.components!CodeRepo | `CSSResult` |

<hr/>

## Exports

| Kind | Name               | Declaration      | Module                                                    | Package |
| ---- | ------------------ | ---------------- | --------------------------------------------------------- | ------- |
| `js` | `CodeRevealStyles` | CodeRevealStyles | packages/components/src/code/reveal/code-reveal.styles.ts |         |

# `packages/components/src/code/reveal/code-reveal.ts`:

## class: `CodeReveal`, `code-reveal`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name   | Privacy | Type                   | Default | Description                                                                                               | Inherited From |
| ------ | ------- | ---------------------- | ------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| `tech` |         | `CodeRepoTech \| null` |         | The active technology data object to render.&#xA;When this is set to null, the component renders nothing. |                |

### Methods

| Name           | Privacy | Description | Parameters | Return | Inherited From |
| -------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `triggerClose` | public  |             |            |        |                |

### Events

| Name                | Type          | Description                                                                                     | Inherited From |
| ------------------- | ------------- | ----------------------------------------------------------------------------------------------- | -------------- |
| `hide-reveal`       | `CustomEvent` | Dispatched when the folding animation completely finishes, signaling the parent to reset state. |                |
| `start-hide-reveal` | `CustomEvent` | Dispatched when the user initiates closing, triggering the fold animation.                      |                |

### Attributes

| Name   | Field | Inherited From |
| ------ | ----- | -------------- |
| `tech` | tech  |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `_isClosing`         | private   |                                          |                                                  |                                                                                                                                                                              |                |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name                  | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `_handleAnimationEnd` | private   |                                                                               | `e: AnimationEvent`      |                  |                |
| `_handleKeyDown`      | private   |                                                                               |                          |                  |                |
| `getActiveIcon`       | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration  | Module                                             | Package |
| --------------------------- | -------------- | ------------ | -------------------------------------------------- | ------- |
| `custom-element-definition` | `code-reveal`  | CodeReveal   | packages/components/src/code/reveal/code-reveal.ts |         |
| `js`                        | `CodeRepoData` | CodeRepoData | @fnc314/packages.types                             |         |
| `js`                        | `CodeRepoTech` | CodeRepoTech | @fnc314/packages.types                             |         |
| `js`                        | `CodeReveal`   | CodeReveal   | packages/components/src/code/reveal/code-reveal.ts |         |

# `packages/components/src/connection/artifact/artifact-connection.styles.ts`:

## Variables

| Name                       | Description | Type        |
| -------------------------- | ----------- | ----------- |
| `ConnectionArtifactStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                       | Declaration              | Module                                                                    | Package |
| ---- | -------------------------- | ------------------------ | ------------------------------------------------------------------------- | ------- |
| `js` | `ConnectionArtifactStyles` | ConnectionArtifactStyles | packages/components/src/connection/artifact/artifact-connection.styles.ts |         |

# `packages/components/src/connection/artifact/artifact-connection.ts`:

## class: `ArtifactConnection`, `artifact-connection`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Methods

| Name                     | Privacy | Description | Parameters | Return | Inherited From |
| ------------------------ | ------- | ----------- | ---------- | ------ | -------------- |
| `artifactConnectionData` |         |             |            |        |                |
| `artifactConnectionType` |         |             |            |        |                |

### Attributes

| Name                     | Field                  | Inherited From |
| ------------------------ | ---------------------- | -------------- |
| `artifactConnectionData` | artifactConnectionData |                |
| `artifactConnectionType` | artifactConnectionType |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                     | Declaration            | Module                                                             | Package |
| --------------------------- | ------------------------ | ---------------------- | ------------------------------------------------------------------ | ------- |
| `custom-element-definition` | `artifact-connection`    | ArtifactConnection     | packages/components/src/connection/artifact/artifact-connection.ts |         |
| `js`                        | `ArtifactConnection`     | ArtifactConnection     | packages/components/src/connection/artifact/artifact-connection.ts |         |
| `js`                        | `ArtifactConnectionData` | ArtifactConnectionData | @fnc314/packages.types                                             |         |
| `js`                        | `ArtifactConnectionType` | ArtifactConnectionType | @fnc314/packages.types                                             |         |

# `packages/components/src/connection/direct/direct-connection.styles.ts`:

## Variables

| Name                     | Description | Type        |
| ------------------------ | ----------- | ----------- |
| `DirectConnectionStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                     | Declaration            | Module                                                                | Package |
| ---- | ------------------------ | ---------------------- | --------------------------------------------------------------------- | ------- |
| `js` | `DirectConnectionStyles` | DirectConnectionStyles | packages/components/src/connection/direct/direct-connection.styles.ts |         |

# `packages/components/src/connection/direct/direct-connection.ts`:

## class: `DirectConnection`, `direct-connection`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Methods

| Name                 | Privacy | Description | Parameters | Return | Inherited From |
| -------------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `connectionInstance` |         |             |            |        |                |

### Attributes

| Name                  | Field              | Inherited From |
| --------------------- | ------------------ | -------------- |
| `connection-instance` | connectionInstance |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                 | Declaration        | Module                                                         | Package |
| --------------------------- | -------------------- | ------------------ | -------------------------------------------------------------- | ------- |
| `js`                        | `ConnectionInstance` | ConnectionInstance | @fnc314/packages.types                                         |         |
| `custom-element-definition` | `direct-connection`  | DirectConnection   | packages/components/src/connection/direct/direct-connection.ts |         |
| `js`                        | `DirectConnection`   | DirectConnection   | packages/components/src/connection/direct/direct-connection.ts |         |

# `packages/components/src/connection/professional/professional-connection.styles.ts`:

## Variables

| Name                           | Description | Type        |
| ------------------------------ | ----------- | ----------- |
| `ProfessionalConnectionStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                           | Declaration                  | Module                                                                            | Package |
| ---- | ------------------------------ | ---------------------------- | --------------------------------------------------------------------------------- | ------- |
| `js` | `ProfessionalConnectionStyles` | ProfessionalConnectionStyles | packages/components/src/connection/professional/professional-connection.styles.ts |         |

# `packages/components/src/connection/professional/professional-connection.ts`:

## class: `ProfessionalConnection`, `professional-connection`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Methods

| Name                         | Privacy | Description | Parameters | Return | Inherited From |
| ---------------------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `professionalConnectionData` |         |             |            |        |                |
| `professionalConnectionType` |         |             |            |        |                |

### Attributes

| Name                         | Field                      | Inherited From |
| ---------------------------- | -------------------------- | -------------- |
| `professionalConnectionData` | professionalConnectionData |                |
| `professionalConnectionType` | professionalConnectionType |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                             | Declaration                    | Module                                                                     | Package |
| --------------------------- | -------------------------------- | ------------------------------ | -------------------------------------------------------------------------- | ------- |
| `custom-element-definition` | `professional-connection`        | ProfessionalConnection         | packages/components/src/connection/professional/professional-connection.ts |         |
| `js`                        | `ProfessionalConnection`         | ProfessionalConnection         | packages/components/src/connection/professional/professional-connection.ts |         |
| `js`                        | `ProfessionalConnectionJsonData` | ProfessionalConnectionJsonData | @fnc314/packages.types                                                     |         |
| `js`                        | `ProfessionalConnectionType`     | ProfessionalConnectionType     | @fnc314/packages.types                                                     |         |

# `packages/components/src/education/institution/education-institution.styles.ts`:

## Variables

| Name                         | Description | Type        |
| ---------------------------- | ----------- | ----------- |
| `EducationInstitutionStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                         | Declaration                | Module                                                                        | Package |
| ---- | ---------------------------- | -------------------------- | ----------------------------------------------------------------------------- | ------- |
| `js` | `EducationInstitutionStyles` | EducationInstitutionStyles | packages/components/src/education/institution/education-institution.styles.ts |         |

# `packages/components/src/education/institution/education-institution.ts`:

## class: `EducationInstitution`, `education-institution`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Methods

| Name        | Privacy | Description                                                                        | Parameters | Return | Inherited From |
| ----------- | ------- | ---------------------------------------------------------------------------------- | ---------- | ------ | -------------- |
| `institute` |         | The particular {@link @fnc314/packages.types!EducationInstitutionRecord} to render |            |        |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `institute` | institute |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                                     | Default                                          | Description                                                                                                                                                                  | Inherited From |
| -------------------- | --------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`                        | `readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL)` | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected | `boolean`                                |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: AppConfigsChangeEvent) => void` |                                                  |                                                                                                                                                                              | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`                             |                                                  |                                                                                                                                                                              | UIAwareElement |
| `touchScreen`        | protected | `boolean`                                |                                                  | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             | UIAwareElement |

### Methods

| Name            | Privacy   | Description                                                                   | Parameters               | Return           | Inherited From |
| --------------- | --------- | ----------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `getActiveIcon` | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render | `variants: IconVariants` | `TemplateResult` | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                    | Declaration          | Module                                                                 | Package |
| --------------------------- | ----------------------- | -------------------- | ---------------------------------------------------------------------- | ------- |
| `custom-element-definition` | `education-institution` | EducationInstitution | packages/components/src/education/institution/education-institution.ts |         |
| `js`                        | `EducationInstitution`  | EducationInstitution | packages/components/src/education/institution/education-institution.ts |         |

# `packages/components/src/index.ts`:

## Exports

| Kind | Name                           | Declaration                  | Module                                                       | Package |
| ---- | ------------------------------ | ---------------------------- | ------------------------------------------------------------ | ------- |
| `js` | `ArtifactConnection`           | ArtifactConnection           | @/lib/connection/artifact/artifact-connection                |         |
| `js` | `BentoCard`                    | BentoCard                    | @/lib/card/bento/bento-card                                  |         |
| `js` | `BentoCardStyles`              | BentoCardStyles              | @/lib/card/bento/bento-card.styles                           |         |
| `js` | `BentoLayout`                  | BentoLayout                  | @/lib/bento-layout/bento-layout                              |         |
| `js` | `BentoLayoutStyles`            | BentoLayoutStyles            | @/lib/bento-layout/bento-layout.styles                       |         |
| `js` | `BlogCard`                     | BlogCard                     | @/lib/card/blog/blog-card                                    |         |
| `js` | `BlogCardStyles`               | BlogCardStyles               | @/lib/card/blog/blog-card.styles                             |         |
| `js` | `BlogEntry`                    | BlogEntry                    | @/lib/publication/blog/entry/blog-entry                      |         |
| `js` | `BlogEntryStyles`              | BlogEntryStyles              | @/lib/publication/blog/entry/blog-entry.styles               |         |
| `js` | `CodeCard`                     | CodeCard                     | @/lib/card/code/code-card                                    |         |
| `js` | `CodeCardStyles`               | CodeCardStyles               | @/lib/card/code/code-card.styles                             |         |
| `js` | `CodeRepo`                     | CodeRepo                     | @/lib/code/repo/code-repo                                    |         |
| `js` | `CodeRepoStyles`               | CodeRepoStyles               | @/lib/code/repo/code-repo.styles                             |         |
| `js` | `CodeReveal`                   | CodeReveal                   | @/lib/code/reveal/code-reveal                                |         |
| `js` | `ConnectionArtifactStyles`     | ConnectionArtifactStyles     | @/lib/connection/artifact/artifact-connection.styles         |         |
| `js` | `ConnectionsCard`              | ConnectionsCard              | @/lib/card/connections/connections-card                      |         |
| `js` | `ConnectionsCardStyles`        | ConnectionsCardStyles        | @/lib/card/connections/connections-card.styles               |         |
| `js` | `Constructor`                  | Constructor                  | @/lib/mixins/size-observer-element/size-observer-element     |         |
| `js` | `DirectConnection`             | DirectConnection             | @/lib/connection/direct/direct-connection                    |         |
| `js` | `DirectConnectionStyles`       | DirectConnectionStyles       | @/lib/connection/direct/direct-connection.styles             |         |
| `js` | `DL_DIV_COLUMN_COUNT`          | DL\_DIV\_COLUMN\_COUNT       | @/lib/card/connections/connections-card.styles               |         |
| `js` | `DynamicBorderStyles`          | DynamicBorderStyles          | @/lib/styles/dynamic-border                                  |         |
| `js` | `EducationCard`                | EducationCard                | @/lib/card/education/education-card                          |         |
| `js` | `EducationCardStyles`          | EducationCardStyles          | @/lib/card/education/education-card.styles                   |         |
| `js` | `EducationInstitution`         | EducationInstitution         | @/lib/education/institution/education-institution            |         |
| `js` | `EducationInstitutionStyles`   | EducationInstitutionStyles   | @/lib/education/institution/education-institution.styles     |         |
| `js` | `ExperienceCard`               | ExperienceCard               | @/lib/card/experience/experience-card                        |         |
| `js` | `ProfessionalConnection`       | ProfessionalConnection       | @/lib/connection/professional/professional-connection        |         |
| `js` | `ProfessionalConnectionStyles` | ProfessionalConnectionStyles | @/lib/connection/professional/professional-connection.styles |         |
| `js` | `ProfileCard`                  | ProfileCard                  | @/lib/card/profile/profile-card                              |         |
| `js` | `ProfileCardStyles`            | ProfileCardStyles            | @/lib/card/profile/profile-card.styles                       |         |
| `js` | `SettingsCard`                 | SettingsCard                 | @/lib/card/settings/settings-card                            |         |
| `js` | `SettingsCardStyles`           | SettingsCardStyles           | @/lib/card/settings/settings-card.styles                     |         |
| `js` | `SizeObserverElement`          | SizeObserverElement          | @/lib/mixins/size-observer-element/size-observer-element     |         |
| `js` | `SkillsCard`                   | SkillsCard                   | @/lib/card/skills/skills-card                                |         |
| `js` | `SkillsCardStyles`             | SkillsCardStyles             | @/lib/card/skills/skills-card.styles                         |         |
| `js` | `TextStyles`                   | TextStyles                   | @/lib/styles/text                                            |         |
| `js` | `TransitionStyles`             | TransitionStyles             | @/lib/bento-layout/bento-layout.styles                       |         |
| `js` | `UIAwareElement`               | UIAwareElement               | @/lib/mixins/ui-aware-element/ui-aware-element               |         |
| `js` | `UiModeToggle`                 | UiModeToggle                 | @/lib/ui-mode-toggle/ui-mode-toggle                          |         |
| `js` | `UIModeToggleStyles`           | UIModeToggleStyles           | @/lib/ui-mode-toggle/ui-mode-toggle.styles                   |         |
| `js` | `VersionTag`                   | VersionTag                   | @/lib/version-tag/version-tag                                |         |
| `js` | `WordCloud`                    | WordCloud                    | @/lib/word/cloud/word-cloud                                  |         |
| `js` | `WordCloudStyles`              | WordCloudStyles              | @/lib/word/cloud/word-cloud.styles                           |         |
| `js` | `WordDialog`                   | WordDialog                   | @/lib/word/dialog/word-dialog                                |         |
| `js` | `WordPopover`                  | WordPopover                  | @/lib/word/popover/word-popover                              |         |
| `js` | `WordPopoverStyles`            | WordDialogStyles             | @/lib/word/dialog/word-dialog.styles                         |         |
| `js` | `WordTag`                      | WordTag                      | @/lib/word/tag/word-tag                                      |         |
| `js` | `WordTagStyles`                | WordTagStyles                | @/lib/word/tag/word-tag.styles                               |         |
| `js` | `WorkCardStyles`               | WorkCardStyles               | @/lib/card/experience/experience-card.styles                 |         |
| `js` | `WorkExperience`               | WorkExperience               | @/lib/work/experience/work-experience                        |         |
| `js` | `WorkExperienceStyles`         | WorkExperienceStyles         | @/lib/work/experience/work-experience.styles                 |         |

# `packages/components/src/mixins/size-observer-element/size-observer-element.ts`:

## mixin: `SizeObserverElement`

### Parameters

| Name   | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `Base` | `T`  |         |             |

<details><summary>Private API</summary>

### Fields

| Name                   | Privacy   | Type                                | Default | Description | Inherited From |
| ---------------------- | --------- | ----------------------------------- | ------- | ----------- | -------------- |
| `intersectionObserver` | protected | `IntersectionObserver \| undefined` |         |             |                |
| `resizeObserver`       | protected | `ResizeObserver \| undefined`       |         |             |                |

### Methods

| Name            | Privacy | Description | Parameters | Return | Inherited From |
| --------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `initObservers` | private |             |            |        |                |

</details>

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                                                                        | Package |
| ---- | --------------------- | ------------------- | ----------------------------------------------------------------------------- | ------- |
| `js` | `SizeObserverElement` | SizeObserverElement | packages/components/src/mixins/size-observer-element/size-observer-element.ts |         |

# `packages/components/src/mixins/ui-aware-element/ui-aware-element.ts`:

## class: `UIAwareElement`, `**`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

<details><summary>Private API</summary>

### Methods

| Name                 | Privacy   | Description                                                                                                                                                                                  | Parameters               | Return           | Inherited From |
| -------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `breakpoint`         | protected | The {@link @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel} as determined by \*SCREEN\* width against&#xA;  {@link @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS} |                          |                  |                |
| `darkMode`           | protected |                                                                                                                                                                                              |                          |                  |                |
| `getActiveIcon`      | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                                                                | `variants: IconVariants` | `TemplateResult` |                |
| `onAppConfigChange`  | private   |                                                                                                                                                                                              |                          |                  |                |
| `onBreakpointChange` | private   |                                                                                                                                                                                              |                          |                  |                |
| `touchScreen`        | protected | Reads {@link @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN} from \`:root\`&#xA;  and tests against \`"true"\`,                                                     |                          |                  |                |

</details>

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                              | Package |
| ---- | ---------------- | -------------- | ------------------------------------------------------------------- | ------- |
| `js` | `UIAwareElement` | UIAwareElement | packages/components/src/mixins/ui-aware-element/ui-aware-element.ts |         |

# `packages/components/src/publication/blog/entry/blog-entry.styles.ts`:

## Variables

| Name              | Description | Type        |
| ----------------- | ----------- | ----------- |
| `BlogEntryStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                                              | Package |
| ---- | ----------------- | --------------- | ------------------------------------------------------------------- | ------- |
| `js` | `BlogEntryStyles` | BlogEntryStyles | packages/components/src/publication/blog/entry/blog-entry.styles.ts |         |

# `packages/components/src/publication/blog/entry/blog-entry.ts`:

## class: `BlogEntry`, `blog-entry`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Methods

| Name        | Privacy | Description               | Parameters | Return | Inherited From |
| ----------- | ------- | ------------------------- | ---------- | ------ | -------------- |
| `blogEntry` |         | The JSON record to render |            |        |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `blogEntry` | blogEntry |                |

<details><summary>Private API</summary>

### Methods

| Name                 | Privacy   | Description                                                                                                                                                                  | Parameters               | Return           | Inherited From |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `breakpoint`         | protected | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS |                          |                  | UIAwareElement |
| `darkMode`           | protected |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `getActiveIcon`      | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                                                | `variants: IconVariants` | `TemplateResult` | UIAwareElement |
| `onAppConfigChange`  | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `touchScreen`        | protected | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             |                          |                  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name            | Declaration   | Module                                                       | Package |
| --------------------------- | --------------- | ------------- | ------------------------------------------------------------ | ------- |
| `custom-element-definition` | `blog-entry`    | BlogEntry     | packages/components/src/publication/blog/entry/blog-entry.ts |         |
| `js`                        | `BlogEntry`     | BlogEntry     | packages/components/src/publication/blog/entry/blog-entry.ts |         |
| `js`                        | `BlogEntryJson` | BlogEntryJson | @fnc314/packages.types                                       |         |

# `packages/components/src/styles/dynamic-border.ts`:

## Variables

| Name                  | Description | Type        |
| --------------------- | ----------- | ----------- |
| `DynamicBorderStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                                           | Package |
| ---- | --------------------- | ------------------- | ------------------------------------------------ | ------- |
| `js` | `DynamicBorderStyles` | DynamicBorderStyles | packages/components/src/styles/dynamic-border.ts |         |

# `packages/components/src/styles/index.ts`:

## Exports

| Kind | Name                  | Declaration         | Module                      | Package                                     |
| ---- | --------------------- | ------------------- | --------------------------- | ------------------------------------------- |
| `js` | `*`                   | \*                  |                             | @material/web/divider/divider               |
| `js` | `*`                   | \*                  |                             | @material/web/elevation/elevation           |
| `js` | `*`                   | \*                  |                             | @material/web/focus/md-focus-ring           |
| `js` | `*`                   | \*                  |                             | @material/web/icon/icon                     |
| `js` | `*`                   | \*                  |                             | @material/web/iconbutton/filled-icon-button |
| `js` | `*`                   | \*                  |                             | @material/web/iconbutton/icon-button        |
| `js` | `*`                   | \*                  |                             | @material/web/labs/card/elevated-card       |
| `js` | `*`                   | \*                  |                             | @material/web/labs/card/filled-card         |
| `js` | `*`                   | \*                  |                             | @material/web/labs/card/outlined-card       |
| `js` | `*`                   | \*                  |                             | @material/web/list/list                     |
| `js` | `*`                   | \*                  |                             | @material/web/list/list-item                |
| `js` | `*`                   | \*                  |                             | @material/web/select/outlined-select        |
| `js` | `*`                   | \*                  |                             | @material/web/select/select-option          |
| `js` | `DynamicBorderStyles` | DynamicBorderStyles | @/lib/styles/dynamic-border |                                             |
| `js` | `TextStyles`          | TextStyles          | @/lib/styles/text           |                                             |

# `packages/components/src/styles/text.ts`:

## Variables

| Name         | Description                                                                  | Type        |
| ------------ | ---------------------------------------------------------------------------- | ----------- |
| `TextStyles` | A CSSResult merging in MaterialTypescaleStyles&#xA;  with some sane defaults | `CSSResult` |

<hr/>

## Exports

| Kind | Name         | Declaration | Module                                 | Package |
| ---- | ------------ | ----------- | -------------------------------------- | ------- |
| `js` | `TextStyles` | TextStyles  | packages/components/src/styles/text.ts |         |

# `packages/components/src/ui-mode-toggle/ui-mode-toggle.styles.ts`:

## Variables

| Name                 | Description                  | Type        |
| -------------------- | ---------------------------- | ----------- |
| `UIModeToggleStyles` | A CSSResult for UiModeToggle | `CSSResult` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                                          | Package |
| ---- | -------------------- | ------------------ | --------------------------------------------------------------- | ------- |
| `js` | `UIModeToggleStyles` | UIModeToggleStyles | packages/components/src/ui-mode-toggle/ui-mode-toggle.styles.ts |         |

# `packages/components/src/ui-mode-toggle/ui-mode-toggle.ts`:

## class: `UiModeToggle`, `ui-mode-toggle`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

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

| Name                   | Type | Description                                                                                                                                      | Inherited From |
| ---------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `color_scheme.change`  |      | Dispatched when the UI mode (light/dark/system) or color scheme contrast is changed, propagating the new \`AppConfigs\["colorScheme"]\` details. |                |
| `colorschemechange`    |      | Event from \`dark-mode-toggle\` when the scheme changes.                                                                                         |                |
| `permanentcolorscheme` |      | Event from \`dark-mode-toggle\` when the persistence changes.                                                                                    |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `mode`      | mode      |                |
| `permanent` | permanent |                |

<details><summary>Private API</summary>

### Fields

| Name              | Privacy | Type             | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Inherited From |
| ----------------- | ------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `_darkModeToggle` | private | `DarkModeToggle` |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |
| `_ready`          | private |                  |         | Guards against the synthetic \`colorschemechange\` / \`permanentcolorscheme\`&#xA;  events that \`dark-mode-toggle\` dispatches at the end of its&#xA;  \`connectedCallback\` (which runs \*during\* this element's first render).&#xA;  Reacting to that echo would mutate reactive state mid-update — triggering&#xA;  Lit's \`change-in-update\` warning — and would clobber a \`SYSTEM\` preference&#xA;  with the resolved light/dark value. We only honor these events once the&#xA;  first render has completed (i.e. after a genuine user toggle). |                |

### Methods

| Name                                | Privacy   | Description                                                                                                                                                                  | Parameters                               | Return           | Inherited From |
| ----------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------- | -------------- |
| `_appConfigs`                       | private   |                                                                                                                                                                              |                                          |                  |                |
| `breakpoint`                        | protected | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS |                                          |                  | UIAwareElement |
| `colorSchemeChangeEventListener`    | private   |                                                                                                                                                                              |                                          |                  |                |
| `darkMode`                          | protected |                                                                                                                                                                              |                                          |                  | UIAwareElement |
| `getActiveIcon`                     | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                                                | `variants: IconVariants`                 | `TemplateResult` | UIAwareElement |
| `onAppConfigChange`                 | private   |                                                                                                                                                                              |                                          |                  | UIAwareElement |
| `onAppConfigsChange`                | private   |                                                                                                                                                                              |                                          |                  |                |
| `onBreakpointChange`                | private   |                                                                                                                                                                              |                                          |                  | UIAwareElement |
| `onColorThemeModeContrastChange`    | private   |                                                                                                                                                                              | `colorScheme: AppConfigs["colorScheme"]` |                  |                |
| `permanentColorSchemeEventListener` | private   |                                                                                                                                                                              |                                          |                  |                |
| `touchScreen`                       | protected | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             |                                          |                  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name             | Declaration  | Module                                                   | Package |
| --------------------------- | ---------------- | ------------ | -------------------------------------------------------- | ------- |
| `custom-element-definition` | `ui-mode-toggle` | UiModeToggle | packages/components/src/ui-mode-toggle/ui-mode-toggle.ts |         |
| `js`                        | `UiModeToggle`   | UiModeToggle | packages/components/src/ui-mode-toggle/ui-mode-toggle.ts |         |

# `packages/components/src/version-tag/version-tag.ts`:

## class: `VersionTag`, `version-tag`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

<details><summary>Private API</summary>

### Methods

| Name                 | Privacy   | Description                                                                                                                                                                  | Parameters               | Return           | Inherited From |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `breakpoint`         | protected | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS |                          |                  | UIAwareElement |
| `darkMode`           | protected |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `formattedDate`      | private   | Creates an {@link Intl.DateTimeFormat} and calls {@link Intl.DateTimeFormat.format}&#xA;  on {@link time} to render the user presented timestamp                             |                          |                  |                |
| `getActiveIcon`      | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                                                | `variants: IconVariants` | `TemplateResult` | UIAwareElement |
| `onAppConfigChange`  | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `touchScreen`        | protected | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             |                          |                  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name          | Declaration | Module                                             | Package |
| --------------------------- | ------------- | ----------- | -------------------------------------------------- | ------- |
| `custom-element-definition` | `version-tag` | VersionTag  | packages/components/src/version-tag/version-tag.ts |         |
| `js`                        | `VersionTag`  | VersionTag  | packages/components/src/version-tag/version-tag.ts |         |

# `packages/components/src/word/cloud/word-cloud.styles.ts`:

## Variables

| Name              | Description | Type        |
| ----------------- | ----------- | ----------- |
| `WordCloudStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                                  | Package |
| ---- | ----------------- | --------------- | ------------------------------------------------------- | ------- |
| `js` | `WordCloudStyles` | WordCloudStyles | packages/components/src/word/cloud/word-cloud.styles.ts |         |

# `packages/components/src/word/cloud/word-cloud.ts`:

## class: `WordCloud`, `word-cloud`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

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

| Name                        | Privacy   | Description                                                                                                                                                                  | Parameters                  | Return                                                                              | Inherited From |
| --------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------- | -------------- |
| `_getSortFunction`          | private   |                                                                                                                                                                              | `sorting: WordCloudSorting` | `((a: RenderableWordCloudWord, b: RenderableWordCloudWord) => number) \| undefined` |                |
| `_initIntersectionObserver` | private   |                                                                                                                                                                              |                             |                                                                                     |                |
| `_processWords`             | private   |                                                                                                                                                                              |                             | `RenderableWordCloudWord[]`                                                         |                |
| `breakpoint`                | protected | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS |                             |                                                                                     | UIAwareElement |
| `darkMode`                  | protected |                                                                                                                                                                              |                             |                                                                                     | UIAwareElement |
| `getActiveIcon`             | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                                                | `variants: IconVariants`    | `TemplateResult`                                                                    | UIAwareElement |
| `onAppConfigChange`         | private   |                                                                                                                                                                              |                             |                                                                                     | UIAwareElement |
| `onBreakpointChange`        | private   |                                                                                                                                                                              |                             |                                                                                     | UIAwareElement |
| `touchScreen`               | protected | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             |                             |                                                                                     | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                      | Declaration             | Module                                           | Package |
| --------------------------- | ------------------------- | ----------------------- | ------------------------------------------------ | ------- |
| `js`                        | `RenderableWordCloudWord` | RenderableWordCloudWord | @fnc314/packages.types                           |         |
| `custom-element-definition` | `word-cloud`              | WordCloud               | packages/components/src/word/cloud/word-cloud.ts |         |
| `js`                        | `WordCloud`               | WordCloud               | packages/components/src/word/cloud/word-cloud.ts |         |
| `js`                        | `WordCloudAppearance`     | WordCloudAppearance     | @fnc314/packages.types                           |         |
| `js`                        | `WordCloudGrouping`       | WordCloudGrouping       | @fnc314/packages.types                           |         |
| `js`                        | `WordCloudSorting`        | WordCloudSorting        | @fnc314/packages.types                           |         |
| `js`                        | `WordCloudWord`           | WordCloudWord           | @fnc314/packages.types                           |         |

# `packages/components/src/word/dialog/word-dialog-animations.styles.ts`:

## Variables

| Name                   | Description                                                            | Type        |
| ---------------------- | ---------------------------------------------------------------------- | ----------- |
| `WordDialogAnimations` | The CSSResult for animations in @fnc314/packages.components!WordDialog | `CSSResult` |

<hr/>

## Exports

| Kind | Name                   | Declaration          | Module                                                               | Package |
| ---- | ---------------------- | -------------------- | -------------------------------------------------------------------- | ------- |
| `js` | `WordDialogAnimations` | WordDialogAnimations | packages/components/src/word/dialog/word-dialog-animations.styles.ts |         |

# `packages/components/src/word/dialog/word-dialog.styles.ts`:

## Variables

| Name               | Description                                              | Type        |
| ------------------ | -------------------------------------------------------- | ----------- |
| `WordDialogStyles` | The CSSResult for @fnc314/packages.components!WordDialog | `CSSResult` |

<hr/>

## Exports

| Kind | Name               | Declaration      | Module                                                    | Package |
| ---- | ------------------ | ---------------- | --------------------------------------------------------- | ------- |
| `js` | `WordDialogStyles` | WordDialogStyles | packages/components/src/word/dialog/word-dialog.styles.ts |         |

# `packages/components/src/word/dialog/word-dialog.ts`:

## class: `WordDialog`, `word-dialog`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name           | Privacy | Type                | Default                        | Description | Inherited From |
| -------------- | ------- | ------------------- | ------------------------------ | ----------- | -------------- |
| `closeButton`  |         | `HTMLElement`       |                                |             |                |
| `dialog`       |         | `HTMLDialogElement` |                                |             |                |
| `footerURL`    |         |                     | `{ text: this.word, url: "" }` |             |                |
| `lastClosedAt` | public  |                     |                                |             |                |
| `word`         |         |                     |                                |             |                |

### Methods

| Name        | Privacy | Description | Parameters | Return | Inherited From |
| ----------- | ------- | ----------- | ---------- | ------ | -------------- |
| `close`     | public  |             |            |        |                |
| `popoverId` |         |             |            |        |                |
| `showModal` | public  |             |            |        |                |

### Events

| Name          | Type          | Description | Inherited From |
| ------------- | ------------- | ----------- | -------------- |
| `hide-dialog` | `CustomEvent` |             |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `popoverId` | popoverId |                |
| `word`      | word      |                |

<details><summary>Private API</summary>

### Fields

| Name                    | Privacy | Type | Default | Description | Inherited From |
| ----------------------- | ------- | ---- | ------- | ----------- | -------------- |
| `_previousBodyOverflow` | private |      |         |             |                |
| `_previousBodyPosition` | private |      |         |             |                |
| `_previousBodyTop`      | private |      |         |             |                |
| `_previousBodyWidth`    | private |      |         |             |                |
| `currentScrollY`        | private |      |         |             |                |

### Methods

| Name                 | Privacy   | Description                                                                                                                                                                  | Parameters               | Return           | Inherited From |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `_handleClosed`      | private   |                                                                                                                                                                              |                          |                  |                |
| `_handleDialogClick` | private   | Close the dialog when clicking outside the \`.content\` card&#xA;(i.e., on the transparent dialog surface).                                                                  | `e: MouseEvent`          |                  |                |
| `breakpoint`         | protected | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS |                          |                  | UIAwareElement |
| `darkMode`           | protected |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `getActiveIcon`      | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                                                | `variants: IconVariants` | `TemplateResult` | UIAwareElement |
| `onAppConfigChange`  | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `touchScreen`        | protected | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             |                          |                  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name          | Declaration | Module                                             | Package |
| --------------------------- | ------------- | ----------- | -------------------------------------------------- | ------- |
| `custom-element-definition` | `word-dialog` | WordDialog  | packages/components/src/word/dialog/word-dialog.ts |         |
| `js`                        | `WordDialog`  | WordDialog  | packages/components/src/word/dialog/word-dialog.ts |         |

# `packages/components/src/word/popover/word-popover.animations.styles.ts`:

## Variables

| Name                    | Description                                                             | Type        |
| ----------------------- | ----------------------------------------------------------------------- | ----------- |
| `WordPopoverAnimations` | The CSSResult for animations in @fnc314/packages.components!WordPopover | `CSSResult` |

<hr/>

## Exports

| Kind | Name                    | Declaration           | Module                                                                 | Package |
| ---- | ----------------------- | --------------------- | ---------------------------------------------------------------------- | ------- |
| `js` | `WordPopoverAnimations` | WordPopoverAnimations | packages/components/src/word/popover/word-popover.animations.styles.ts |         |

# `packages/components/src/word/popover/word-popover.styles.ts`:

## Variables

| Name                | Description                                               | Type        |
| ------------------- | --------------------------------------------------------- | ----------- |
| `WordPopoverStyles` | The CSSResult for @fnc314/packages.components!WordPopover | `CSSResult` |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                                      | Package |
| ---- | ------------------- | ----------------- | ----------------------------------------------------------- | ------- |
| `js` | `WordPopoverStyles` | WordPopoverStyles | packages/components/src/word/popover/word-popover.styles.ts |         |

# `packages/components/src/word/popover/word-popover.ts`:

## class: `WordPopover`, `word-popover`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name             | Privacy | Type          | Default                        | Description | Inherited From |
| ---------------- | ------- | ------------- | ------------------------------ | ----------- | -------------- |
| `footerURL`      |         |               | `{ text: this.word, url: "" }` |             |                |
| `lastClosedAt`   | public  |               |                                |             |                |
| `popoverElement` |         | `HTMLElement` |                                |             |                |
| `word`           |         |               |                                |             |                |

### Methods

| Name        | Privacy | Description | Parameters | Return | Inherited From |
| ----------- | ------- | ----------- | ---------- | ------ | -------------- |
| `close`     | public  |             |            |        |                |
| `popoverId` |         |             |            |        |                |
| `showModal` | public  |             |            |        |                |

### Events

| Name           | Type          | Description | Inherited From |
| -------------- | ------------- | ----------- | -------------- |
| `hide-popover` | `CustomEvent` |             |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `popoverId` | popoverId |                |
| `word`      | word      |                |

<details><summary>Private API</summary>

### Methods

| Name                 | Privacy   | Description                                                                                                                                                                  | Parameters               | Return           | Inherited From |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `_handleToggle`      | private   |                                                                                                                                                                              | `e: ToggleEvent`         |                  |                |
| `breakpoint`         | protected | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS |                          |                  | UIAwareElement |
| `darkMode`           | protected |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `getActiveIcon`      | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                                                | `variants: IconVariants` | `TemplateResult` | UIAwareElement |
| `onAppConfigChange`  | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `touchScreen`        | protected | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             |                          |                  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                                               | Package |
| --------------------------- | -------------- | ----------- | ---------------------------------------------------- | ------- |
| `custom-element-definition` | `word-popover` | WordPopover | packages/components/src/word/popover/word-popover.ts |         |
| `js`                        | `WordPopover`  | WordPopover | packages/components/src/word/popover/word-popover.ts |         |

# `packages/components/src/word/tag/word-tag.styles.ts`:

## Variables

| Name            | Description | Type        |
| --------------- | ----------- | ----------- |
| `WordTagStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name            | Declaration   | Module                                              | Package |
| ---- | --------------- | ------------- | --------------------------------------------------- | ------- |
| `js` | `WordTagStyles` | WordTagStyles | packages/components/src/word/tag/word-tag.styles.ts |         |

# `packages/components/src/word/tag/word-tag.ts`:

## class: `WordTag`, `word-tag`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name           | Privacy | Type               | Default     | Description                                                                                                                                                                                                                   | Inherited From |
| -------------- | ------- | ------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `ariaControls` |         |                    |             |                                                                                                                                                                                                                               |                |
| `ariaExpanded` |         |                    |             |                                                                                                                                                                                                                               |                |
| `heaviness`    |         | `WordTagHeaviness` | `normal`    | The weight of the tag (text & border), can be \`"normal"\` (\`--md-ref-typeface-weight-regular\` & \`--sizes-thickness-hairline\`) or \`"heavy"\` (\`--md-ref-typeface-weight-bold\` & \`2.5 \* --sizes-thickness-hairline\`) |                |
| `hrefUrl`      |         |                    |             | A URL which, when provided, wraps this {@link WordTag} in a {@link HTMLAnchorElement}                                                                                                                                         |                |
| `variant`      |         | `WordTagVariant`   | `text-only` | {@link WordTagVariantAttributeConverter}                                                                                                                                                                                      |                |
| `word`         |         |                    |             | The tagged word                                                                                                                                                                                                               |                |

### Methods

| Name    | Privacy | Description | Parameters                                                   | Return | Inherited From |
| ------- | ------- | ----------- | ------------------------------------------------------------ | ------ | -------------- |
| `focus` |         |             | `options: { focusVisible: boolean, preventScroll: boolean }` |        |                |

### Attributes

| Name            | Field        | Inherited From |
| --------------- | ------------ | -------------- |
| `aria-controls` | ariaControls |                |
| `aria-expanded` | ariaExpanded |                |
| `heaviness`     | heaviness    |                |
| `hrefUrl`       | hrefUrl      |                |
| `variant`       | variant      |                |
| `word`          | word         |                |

### CSS Properties

| Name                          | Default                                    | Description                                           |
| ----------------------------- | ------------------------------------------ | ----------------------------------------------------- |
| `--word-tag-color`            | `"--md-sys-color-on-primary-container"`    | The text and border color                             |
| `--word-tag-background-color` | `"--md-sys-color-primary-container"`       | The background color                                  |
| `--word-tag-font-family`      | `"--md-ref-typeface-brand"`                | The font family                                       |
| `--word-tag-font-size`        | `"--md-typescale-body-large-font-size"`    | The font size                                         |
| `--word-tag-font-weight`      | `"--md-ref-typeface-weight-regular"`       | The font weight                                       |
| `--word-tag-line-height`      | `"--md-typescale-body-large-lingt-height"` | The line height                                       |
| `--word-tag-border-radius`    | `"--md-sys-shape-corner-small"`            | The corner radius (for all corners)                   |
| `--word-tag-gap`              | `"--spaces-gap-xs"`                        | The \`gap\` between \`word\` and any \`slot\`-ed icon |

### Slots

| Name   | Description                                                                       |
| ------ | --------------------------------------------------------------------------------- |
| `icon` | The optional space available for, and positioned by, the {@link variant} property |

<details><summary>Private API</summary>

### Methods

| Name                 | Privacy   | Description                                                                                                                                                                  | Parameters                 | Return           | Inherited From |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------------- | -------------- |
| `breakpoint`         | protected | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS |                            |                  | UIAwareElement |
| `buildWord`          | private   |                                                                                                                                                                              |                            | `TemplateResult` |                |
| `darkMode`           | protected |                                                                                                                                                                              |                            |                  | UIAwareElement |
| `getActiveIcon`      | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                                                | `variants: IconVariants`   | `TemplateResult` | UIAwareElement |
| `layoutForVariant`   | private   |                                                                                                                                                                              |                            | `TemplateResult` |                |
| `onAppConfigChange`  | private   |                                                                                                                                                                              |                            |                  | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                                                                                              |                            |                  | UIAwareElement |
| `touchScreen`        | protected | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             |                            |                  | UIAwareElement |
| `wrapContents`       | private   |                                                                                                                                                                              | `contents: TemplateResult` | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name               | Declaration      | Module                                       | Package |
| --------------------------- | ------------------ | ---------------- | -------------------------------------------- | ------- |
| `custom-element-definition` | `word-tag`         | WordTag          | packages/components/src/word/tag/word-tag.ts |         |
| `js`                        | `WordTag`          | WordTag          | packages/components/src/word/tag/word-tag.ts |         |
| `js`                        | `WordTagHeaviness` | WordTagHeaviness | @fnc314/packages.types                       |         |
| `js`                        | `WordTagVariant`   | WordTagVariant   | @fnc314/packages.types                       |         |

# `packages/components/src/work/experience/work-experience.styles.ts`:

## Variables

| Name                   | Description | Type        |
| ---------------------- | ----------- | ----------- |
| `WorkExperienceStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                   | Declaration          | Module                                                            | Package |
| ---- | ---------------------- | -------------------- | ----------------------------------------------------------------- | ------- |
| `js` | `WorkExperienceStyles` | WorkExperienceStyles | packages/components/src/work/experience/work-experience.styles.ts |         |

# `packages/components/src/work/experience/work-experience.ts`:

## class: `WorkExperience`, `work-experience`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name                | Privacy | Type       | Default                   | Description                                                                     | Inherited From |
| ------------------- | ------- | ---------- | ------------------------- | ------------------------------------------------------------------------------- | -------------- |
| `dateEnd`           |         | `WorkDate` | `{ stamp: "", text: "" }` | End date information including machine-readable stamp and display text.         |                |
| `dateStart`         |         | `WorkDate` | `{ stamp: "", text: "" }` | Start date information including machine-readable stamp and display text.       |                |
| `experienceOrg`     |         |            |                           | The name of the organization or client.                                         |                |
| `experienceRole`    |         |            |                           | The title of the professional role or project.                                  |                |
| `experienceSummary` |         |            |                           | An optional summary of the overall role                                         |                |
| `isNested`          |         |            |                           | If true, adjusts font sizes and layout for a nested appearance.                 |                |
| `jobs`              |         |            | ``                        | A list of sub-jobs or project assignments to be rendered as nested experiences. |                |
| `summaries`         |         |            | ``                        | An array of \`{ item: string }\` objects describing the responsibilities        |                |

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

<details><summary>Private API</summary>

### Methods

| Name                 | Privacy   | Description                                                                                                                                                                  | Parameters               | Return           | Inherited From |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------- |
| `breakpoint`         | protected | The @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel as determined by \*SCREEN\* width against&#xA;  @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT\_LABELS |                          |                  | UIAwareElement |
| `darkMode`           | protected |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `getActiveIcon`      | protected | Parses the provided \`variant\` for the proper TemplateResult&#xA;  to render                                                                                                | `variants: IconVariants` | `TemplateResult` | UIAwareElement |
| `onAppConfigChange`  | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                                                                                              |                          |                  | UIAwareElement |
| `touchScreen`        | protected | Reads @fnc314/packages.design-tokens!TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                             |                          |                  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name              | Declaration    | Module                                                     | Package |
| --------------------------- | ----------------- | -------------- | ---------------------------------------------------------- | ------- |
| `js`                        | `Job`             | Job            | @fnc314/packages.types                                     |         |
| `custom-element-definition` | `work-experience` | WorkExperience | packages/components/src/work/experience/work-experience.ts |         |
| `js`                        | `WorkDate`        | WorkDate       | @fnc314/packages.types                                     |         |
| `js`                        | `WorkExperience`  | WorkExperience | packages/components/src/work/experience/work-experience.ts |         |

# `packages/data/src/bento-layout/index.ts`:

## Variables

| Name               | Description                                                                        | Type              |
| ------------------ | ---------------------------------------------------------------------------------- | ----------------- |
| `BENTO_BOX_CONFIG` | The final rendered BentoBoxConfigs                                                 | `BentoBoxConfigs` |
| `titles`           | Titles to grab attention, joined with \`\|\` but in HTML Entity Code (\`\&#124;\`) | `string`          |

<hr/>

## Exports

| Kind | Name               | Declaration        | Module                                  | Package |
| ---- | ------------------ | ------------------ | --------------------------------------- | ------- |
| `js` | `BENTO_BOX_CONFIG` | BENTO\_BOX\_CONFIG | packages/data/src/bento-layout/index.ts |         |
| `js` | `titles`           | titles             | packages/data/src/bento-layout/index.ts |         |

# `packages/data/src/bio/index.ts`:

## Variables

| Name        | Description | Type          |
| ----------- | ----------- | ------------- |
| `Biography` |             | `BioExtended` |

<hr/>

## Exports

| Kind | Name        | Declaration | Module                         | Package |
| ---- | ----------- | ----------- | ------------------------------ | ------- |
| `js` | `Biography` | Biography   | packages/data/src/bio/index.ts |         |

# `packages/data/src/blog/index.ts`:

## Variables

| Name    | Description | Type              |
| ------- | ----------- | ----------------- |
| `Blogs` |             | `BlogEntryJson[]` |

<hr/>

## Exports

| Kind | Name    | Declaration | Module                          | Package |
| ---- | ------- | ----------- | ------------------------------- | ------- |
| `js` | `Blogs` | Blogs       | packages/data/src/blog/index.ts |         |

# `packages/data/src/code/index.ts`:

## Variables

| Name       | Description | Type             |
| ---------- | ----------- | ---------------- |
| `Projects` |             | `CodeRepoData[]` |

<hr/>

## Exports

| Kind | Name       | Declaration | Module                          | Package |
| ---- | ---------- | ----------- | ------------------------------- | ------- |
| `js` | `Projects` | Projects    | packages/data/src/code/index.ts |         |

# `packages/data/src/connections/index.ts`:

## Variables

| Name          | Description | Type                                                                                                                                                                                                                                                                                                                                 |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Connections` |             | `{
  direct: {
    phone: ConnectionInstance;
    email: ConnectionInstance;
  };
  social: {
    linkedIn: ProfessionalConnectionJsonData;
    github: ProfessionalConnectionJsonData;
    medium: ProfessionalConnectionJsonData;
  };
  resume: {
    googleDoc: ArtifactConnectionData;
    pdf: ArtifactConnectionData;
  };
}` |

<hr/>

## Exports

| Kind | Name          | Declaration | Module                                 | Package |
| ---- | ------------- | ----------- | -------------------------------------- | ------- |
| `js` | `Connections` | Connections | packages/data/src/connections/index.ts |         |

# `packages/data/src/education/index.ts`:

## Variables

| Name                | Description | Type                           |
| ------------------- | ----------- | ------------------------------ |
| `EducationJsonData` |             | `EducationInstitutionRecord[]` |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                               | Package |
| ---- | ------------------- | ----------------- | ------------------------------------ | ------- |
| `js` | `EducationJsonData` | EducationJsonData | packages/data/src/education/index.ts |         |

# `packages/data/src/experience/index.ts`:

## Variables

| Name          | Description | Type           |
| ------------- | ----------- | -------------- |
| `Experiences` |             | `Experience[]` |

<hr/>

## Exports

| Kind | Name          | Declaration | Module                                | Package |
| ---- | ------------- | ----------- | ------------------------------------- | ------- |
| `js` | `Experiences` | Experiences | packages/data/src/experience/index.ts |         |

# `packages/data/src/index.ts`:

## Exports

| Kind | Name | Declaration | Module | Package            |
| ---- | ---- | ----------- | ------ | ------------------ |
| `js` | `*`  | \*          |        | @/lib/bento-layout |
| `js` | `*`  | \*          |        | @/lib/bio          |
| `js` | `*`  | \*          |        | @/lib/blog         |
| `js` | `*`  | \*          |        | @/lib/code         |
| `js` | `*`  | \*          |        | @/lib/connections  |
| `js` | `*`  | \*          |        | @/lib/education    |
| `js` | `*`  | \*          |        | @/lib/experience   |
| `js` | `*`  | \*          |        | @/lib/photo        |
| `js` | `*`  | \*          |        | @/lib/skills       |

# `packages/data/src/photo/index.ts`:

## Variables

| Name     | Description | Type         |
| -------- | ----------- | ------------ |
| `Photos` |             | `PhotosJson` |

<hr/>

## Exports

| Kind | Name     | Declaration | Module                           | Package |
| ---- | -------- | ----------- | -------------------------------- | ------- |
| `js` | `Photos` | Photos      | packages/data/src/photo/index.ts |         |

# `packages/data/src/skills/index.ts`:

## Variables

| Name     | Description | Type     |
| -------- | ----------- | -------- |
| `Skills` |             | `object` |

<hr/>

## Exports

| Kind | Name     | Declaration | Module                            | Package |
| ---- | -------- | ----------- | --------------------------------- | ------- |
| `js` | `Skills` | Skills      | packages/data/src/skills/index.ts |         |

# `packages/design-tokens/src/dark-mode-toggle/index.ts`:

## Variables

| Name                 | Description | Type     |
| -------------------- | ----------- | -------- |
| `DarkModeToggleSvgs` |             | `object` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                               | Package |
| ---- | -------------------- | ------------------ | ---------------------------------------------------- | ------- |
| `js` | `DarkModeToggleSvgs` | DarkModeToggleSvgs | packages/design-tokens/src/dark-mode-toggle/index.ts |         |

# `packages/design-tokens/src/index.ts`:

## Exports

| Kind | Name    | Declaration | Module            | Package                        |
| ---- | ------- | ----------- | ----------------- | ------------------------------ |
| `js` | `*`     | \*          |                   | @/css/\_material-overrides.css |
| `js` | `*`     | \*          |                   | @/css/\_variables.css          |
| `js` | `*`     | \*          |                   | @/css/breakpoints.css          |
| `js` | `*`     | \*          |                   | @/css/icon-svg.css             |
| `js` | `*`     | \*          |                   | @/css/touch-screen.css         |
| `js` | `*`     | \*          |                   | @/lib/dark-mode-toggle         |
| `js` | `*`     | \*          |                   | @/lib/read-css-property        |
| `js` | `Icons` | Icons       | @/assets/ts/icons |                                |

# `packages/design-tokens/src/read-css-property/index.ts`:

## Functions

| Name              | Description                                    | Parameters                                                                                         | Return |
| ----------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------ |
| `readCSSProperty` | Returns the value of the provided \`property\` | `property: string, element: HTMLElement\|null\|undefined, logComputedPropertyTransaction: boolean` |        |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                                | Package |
| ---- | ----------------- | --------------- | ----------------------------------------------------- | ------- |
| `js` | `readCSSProperty` | readCSSProperty | packages/design-tokens/src/read-css-property/index.ts |         |

# `packages/services/src/configs/index.ts`:

## Variables

| Name             | Description | Type             |
| ---------------- | ----------- | ---------------- |
| `configsService` |             | `ConfigsService` |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                 | Package |
| ---- | ---------------- | -------------- | -------------------------------------- | ------- |
| `js` | `configsService` | configsService | packages/services/src/configs/index.ts |         |

# `packages/services/src/index.ts`:

## Exports

| Kind | Name | Declaration | Module | Package       |
| ---- | ---- | ----------- | ------ | ------------- |
| `js` | `*`  | \*          |        | @/lib/configs |
| `js` | `*`  | \*          |        | @/lib/storage |
| `js` | `*`  | \*          |        | @/lib/theme   |

# `packages/services/src/storage/index.ts`:

## Variables

| Name             | Description | Type             |
| ---------------- | ----------- | ---------------- |
| `storageService` |             | `StorageService` |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                 | Package |
| ---- | ---------------- | -------------- | -------------------------------------- | ------- |
| `js` | `storageService` | storageService | packages/services/src/storage/index.ts |         |

# `packages/services/src/theme/atl-in-white/index.ts`:

## Variables

| Name                    | Description | Type          |
| ----------------------- | ----------- | ------------- |
| `AtlInWhiteThemeConfig` |             | `ThemeConfig` |
| `json`                  |             |               |

<hr/>

## Exports

| Kind | Name                    | Declaration           | Module                                            | Package |
| ---- | ----------------------- | --------------------- | ------------------------------------------------- | ------- |
| `js` | `AtlInWhiteThemeConfig` | AtlInWhiteThemeConfig | packages/services/src/theme/atl-in-white/index.ts |         |

# `packages/services/src/theme/chicago/index.ts`:

## Variables

| Name                 | Description | Type          |
| -------------------- | ----------- | ------------- |
| `ChicagoThemeConfig` |             | `ThemeConfig` |
| `json`               |             |               |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                       | Package |
| ---- | -------------------- | ------------------ | -------------------------------------------- | ------- |
| `js` | `ChicagoThemeConfig` | ChicagoThemeConfig | packages/services/src/theme/chicago/index.ts |         |

# `packages/services/src/theme/downtown/index.ts`:

## Variables

| Name                  | Description | Type          |
| --------------------- | ----------- | ------------- |
| `DowntownThemeConfig` |             | `ThemeConfig` |
| `json`                |             |               |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                                        | Package |
| ---- | --------------------- | ------------------- | --------------------------------------------- | ------- |
| `js` | `DowntownThemeConfig` | DowntownThemeConfig | packages/services/src/theme/downtown/index.ts |         |

# `packages/services/src/theme/index.ts`:

## Variables

| Name                    | Description | Type            |
| ----------------------- | ----------- | --------------- |
| `MaterialCSSStyleSheet` |             | `CSSStyleSheet` |
| `name`                  |             |                 |
| `THEME_CONFIGS`         |             | `ThemeConfigs`  |
| `themeService`          |             | `ThemeService`  |

<hr/>

## Functions

| Name                                     | Description | Parameters                               | Return               |
| ---------------------------------------- | ----------- | ---------------------------------------- | -------------------- |
| `colorSchemeConfigsToMaterialSchemeName` |             | `colorSchemeSettings: ColorSchemeConfig` | `MaterialSchemeName` |
| `onThemeChange`                          |             | `event: MediaQueryListEvent`             |                      |

<hr/>

## Exports

| Kind | Name                                     | Declaration                            | Module                               | Package                    |
| ---- | ---------------------------------------- | -------------------------------------- | ------------------------------------ | -------------------------- |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/atl-in-white   |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/chicago        |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/downtown       |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/inter          |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/leather-jacket |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/ponder         |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/red            |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/roman-bus      |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/skyline        |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/sunset         |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/utils          |
| `js` | `colorSchemeConfigsToMaterialSchemeName` | colorSchemeConfigsToMaterialSchemeName | packages/services/src/theme/index.ts |                            |
| `js` | `MaterialCSSStyleSheet`                  | MaterialCSSStyleSheet                  | packages/services/src/theme/index.ts |                            |
| `js` | `onThemeChange`                          | onThemeChange                          | packages/services/src/theme/index.ts |                            |
| `js` | `THEME_CONFIGS`                          | THEME\_CONFIGS                         | packages/services/src/theme/index.ts |                            |
| `js` | `themeService`                           | themeService                           | packages/services/src/theme/index.ts |                            |

# `packages/services/src/theme/inter/index.ts`:

## Variables

| Name               | Description | Type          |
| ------------------ | ----------- | ------------- |
| `InterThemeConfig` |             | `ThemeConfig` |
| `json`             |             |               |

<hr/>

## Exports

| Kind | Name               | Declaration      | Module                                     | Package |
| ---- | ------------------ | ---------------- | ------------------------------------------ | ------- |
| `js` | `InterThemeConfig` | InterThemeConfig | packages/services/src/theme/inter/index.ts |         |

# `packages/services/src/theme/leather-jacket/index.ts`:

## Variables

| Name                       | Description | Type          |
| -------------------------- | ----------- | ------------- |
| `json`                     |             |               |
| `LeatherJacketThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name                       | Declaration              | Module                                              | Package |
| ---- | -------------------------- | ------------------------ | --------------------------------------------------- | ------- |
| `js` | `LeatherJacketThemeConfig` | LeatherJacketThemeConfig | packages/services/src/theme/leather-jacket/index.ts |         |

# `packages/services/src/theme/ponder/index.ts`:

## Variables

| Name                | Description | Type          |
| ------------------- | ----------- | ------------- |
| `json`              |             |               |
| `PonderThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                      | Package |
| ---- | ------------------- | ----------------- | ------------------------------------------- | ------- |
| `js` | `PonderThemeConfig` | PonderThemeConfig | packages/services/src/theme/ponder/index.ts |         |

# `packages/services/src/theme/red/index.ts`:

## Variables

| Name             | Description | Type          |
| ---------------- | ----------- | ------------- |
| `json`           |             |               |
| `RedThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                   | Package |
| ---- | ---------------- | -------------- | ---------------------------------------- | ------- |
| `js` | `RedThemeConfig` | RedThemeConfig | packages/services/src/theme/red/index.ts |         |

# `packages/services/src/theme/roman-bus/index.ts`:

## Variables

| Name                  | Description | Type          |
| --------------------- | ----------- | ------------- |
| `json`                |             |               |
| `RomanBusThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                                         | Package |
| ---- | --------------------- | ------------------- | ---------------------------------------------- | ------- |
| `js` | `RomanBusThemeConfig` | RomanBusThemeConfig | packages/services/src/theme/roman-bus/index.ts |         |

# `packages/services/src/theme/skyline/index.ts`:

## Variables

| Name                 | Description | Type          |
| -------------------- | ----------- | ------------- |
| `json`               |             |               |
| `SkylineThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                       | Package |
| ---- | -------------------- | ------------------ | -------------------------------------------- | ------- |
| `js` | `SkylineThemeConfig` | SkylineThemeConfig | packages/services/src/theme/skyline/index.ts |         |

# `packages/services/src/theme/sunset/index.ts`:

## Variables

| Name                | Description | Type          |
| ------------------- | ----------- | ------------- |
| `json`              |             |               |
| `SunsetThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                      | Package |
| ---- | ------------------- | ----------------- | ------------------------------------------- | ------- |
| `js` | `SunsetThemeConfig` | SunsetThemeConfig | packages/services/src/theme/sunset/index.ts |         |

# `packages/services/src/theme/utils.ts`:

## Functions

| Name                        | Description                                                                                                           | Parameters                                                         | Return           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------- |
| `colorSchemeContrastToIcon` | A convenience method to return TemplateResults of \`\<md-icon>\`                                                      | `contrast: ColorSchemeContrast, slot: ("start" \| "leading-icon")` | `TemplateResult` |
| `jsonIsThemeJsonSchemes`    | Checks if the provided JSON conforms to the expected theme schemes structure                                          | `json: unknown`                                                    |                  |
| `keyTransform`              | Converts \`jsonKey\` and corresponding \`rgb\` value into a CSS custom property&#xA;  via css and unsafeCSS functions | `jsonKey: string, rgb: string`                                     | `lit!`           |
| `readScheme`                | Reads a \`.json\` defined object and produces a CSSResult                                                             | `jsonSchema: Record<ColorSchemeRoles, ColorString>`                |                  |

<hr/>

## Exports

| Kind | Name                        | Declaration               | Module                               | Package |
| ---- | --------------------------- | ------------------------- | ------------------------------------ | ------- |
| `js` | `colorSchemeContrastToIcon` | colorSchemeContrastToIcon | packages/services/src/theme/utils.ts |         |
| `js` | `jsonIsThemeJsonSchemes`    | jsonIsThemeJsonSchemes    | packages/services/src/theme/utils.ts |         |
| `js` | `keyTransform`              | keyTransform              | packages/services/src/theme/utils.ts |         |
| `js` | `readScheme`                | readScheme                | packages/services/src/theme/utils.ts |         |

# `packages/types/src/bento-layout/index.ts`:

## Variables

| Name              | Description                          | Type                                                                                                                                                                                                                                                                |
| ----------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BENTO_BOX_TYPES` | A Record of BentoBoxType definitions | `{
  profile: "profile" as const,
  experience: "experience" as const,
  code: "code" as const,
  blog: "blog" as const,
  settings: "settings" as const,
  education: "education" as const,
  skills: "skills" as const,
  connections: "connections" as const,
}` |

<hr/>

## Exports

| Kind | Name              | Declaration       | Module                                   | Package |
| ---- | ----------------- | ----------------- | ---------------------------------------- | ------- |
| `js` | `BENTO_BOX_TYPES` | BENTO\_BOX\_TYPES | packages/types/src/bento-layout/index.ts |         |

# `packages/types/src/code/index.ts`:

## Variables

| Name                                   | Description                                              | Type                                                                                             |
| -------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `CSS_PROPERTY_CODE_REPO_WORD_TAG_SIZE` | The \`const\` for the \`CSS                              | `string`                                                                                         |
| `WORD_TAG_SIZES`                       | A Record of pre-defined values exposed as a custom \`CSS | `{
  full: "full" as const,
  compact: "compact" as const,
  condensed: "condensed" as const,
}` |

<hr/>

## Exports

| Kind | Name                                   | Declaration                                | Module                           | Package |
| ---- | -------------------------------------- | ------------------------------------------ | -------------------------------- | ------- |
| `js` | `CSS_PROPERTY_CODE_REPO_WORD_TAG_SIZE` | CSS\_PROPERTY\_CODE\_REPO\_WORD\_TAG\_SIZE | packages/types/src/code/index.ts |         |
| `js` | `WORD_TAG_SIZES`                       | WORD\_TAG\_SIZES                           | packages/types/src/code/index.ts |         |

# `packages/types/src/configs/index.ts`:

## Variables

| Name                                      | Description | Type                                                                                                                                                                                 |
| ----------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `APP_CONFIGS_CHANGE_EVENT_NAME`           |             | `string`                                                                                                                                                                             |
| `COLOR_SCHEME_CHANGE_EVENT_NAME`          |             | `string`                                                                                                                                                                             |
| `DEFAULT_APP_CONFIGS`                     |             | `{
  colorScheme: {
    theme: THEME_NAMES.inter,
    name: CONFIG_COLOR_SCHEME_NAMES.SYSTEM,
    contrast: CONFIG_COLOR_CONTRAST_NAMES.NORMAL,
    persist: false,
  } as const,
}` |
| `ELEMENT_ID_META_TAG`                     |             | `string`                                                                                                                                                                             |
| `WINDOW_MEDIA_PREFERS_COLOR_SCHEME`       |             | `string`                                                                                                                                                                             |
| `WINDOW_MEDIA_PREFERS_COLOR_SCHEME_DARK`  |             | `string`                                                                                                                                                                             |
| `WINDOW_MEDIA_PREFERS_COLOR_SCHEME_LIGHT` |             | `string`                                                                                                                                                                             |

<hr/>

## Exports

| Kind | Name                                      | Declaration                                  | Module                              | Package |
| ---- | ----------------------------------------- | -------------------------------------------- | ----------------------------------- | ------- |
| `js` | `APP_CONFIGS_CHANGE_EVENT_NAME`           | APP\_CONFIGS\_CHANGE\_EVENT\_NAME            | packages/types/src/configs/index.ts |         |
| `js` | `COLOR_SCHEME_CHANGE_EVENT_NAME`          | COLOR\_SCHEME\_CHANGE\_EVENT\_NAME           | packages/types/src/configs/index.ts |         |
| `js` | `DEFAULT_APP_CONFIGS`                     | DEFAULT\_APP\_CONFIGS                        | packages/types/src/configs/index.ts |         |
| `js` | `ELEMENT_ID_META_TAG`                     | ELEMENT\_ID\_META\_TAG                       | packages/types/src/configs/index.ts |         |
| `js` | `WINDOW_MEDIA_PREFERS_COLOR_SCHEME`       | WINDOW\_MEDIA\_PREFERS\_COLOR\_SCHEME        | packages/types/src/configs/index.ts |         |
| `js` | `WINDOW_MEDIA_PREFERS_COLOR_SCHEME_DARK`  | WINDOW\_MEDIA\_PREFERS\_COLOR\_SCHEME\_DARK  | packages/types/src/configs/index.ts |         |
| `js` | `WINDOW_MEDIA_PREFERS_COLOR_SCHEME_LIGHT` | WINDOW\_MEDIA\_PREFERS\_COLOR\_SCHEME\_LIGHT | packages/types/src/configs/index.ts |         |

# `packages/types/src/connections/index.ts`:

## Variables

| Name                          | Description | Type                                                                                             |
| ----------------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `ArtifactConnections`         |             | `{
  googleDocs: "googleDoc" as const,
  pdf: "pdf" as const,
}`                                 |
| `ProfessionalConnectionTypes` |             | `{
  linkedin: "linkedin" as const,
  github: "github" as const,
  medium: "medium" as const,
}` |

<hr/>

## Exports

| Kind | Name                          | Declaration                 | Module                                  | Package |
| ---- | ----------------------------- | --------------------------- | --------------------------------------- | ------- |
| `js` | `ArtifactConnections`         | ArtifactConnections         | packages/types/src/connections/index.ts |         |
| `js` | `ProfessionalConnectionTypes` | ProfessionalConnectionTypes | packages/types/src/connections/index.ts |         |

# `packages/types/src/design-tokens/index.ts`:

## Variables

| Name                            | Description                                                                    | Type                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| `BREAKPOINT_LABELS`             | Iterable set of BreakpointLabel                                                | `BreakpointLabel[]`                                                                            |
| `BreakpointLabels`              | Type-safe constants exposed to perform checks                                  | `{
  mobile: "mobile" as const,
  tablet: "tablet" as const,
  desktop: "desktop" as const,
}` |
| `BREAKPOINTS`                   | A static implementation of Breakpoints                                         | `Breakpoints`                                                                                  |
| `CSS_VARIABLE_BREAKPOINT_LABEL` | The CSS Variable changed across device breakpoints                             | `"--breakpoint-label"`                                                                         |
| `CSS_VARIABLE_TOUCH_SCREEN`     | The CSS Variable set by \`@media\` query of \`screen\` and \`pointer: coarse\` | `string`                                                                                       |

<hr/>

## Exports

| Kind | Name                            | Declaration                      | Module                                    | Package |
| ---- | ------------------------------- | -------------------------------- | ----------------------------------------- | ------- |
| `js` | `BREAKPOINT_LABELS`             | BREAKPOINT\_LABELS               | packages/types/src/design-tokens/index.ts |         |
| `js` | `BreakpointLabels`              | BreakpointLabels                 | packages/types/src/design-tokens/index.ts |         |
| `js` | `BREAKPOINTS`                   | BREAKPOINTS                      | packages/types/src/design-tokens/index.ts |         |
| `js` | `CSS_VARIABLE_BREAKPOINT_LABEL` | CSS\_VARIABLE\_BREAKPOINT\_LABEL | packages/types/src/design-tokens/index.ts |         |
| `js` | `CSS_VARIABLE_TOUCH_SCREEN`     | CSS\_VARIABLE\_TOUCH\_SCREEN     | packages/types/src/design-tokens/index.ts |         |

# `packages/types/src/index.ts`:

## Exports

| Kind | Name | Declaration | Module | Package             |
| ---- | ---- | ----------- | ------ | ------------------- |
| `js` | `*`  | \*          |        | @/lib/bento-layout  |
| `js` | `*`  | \*          |        | @/lib/bio           |
| `js` | `*`  | \*          |        | @/lib/blog          |
| `js` | `*`  | \*          |        | @/lib/code          |
| `js` | `*`  | \*          |        | @/lib/configs       |
| `js` | `*`  | \*          |        | @/lib/connections   |
| `js` | `*`  | \*          |        | @/lib/design-tokens |
| `js` | `*`  | \*          |        | @/lib/education     |
| `js` | `*`  | \*          |        | @/lib/experience    |
| `js` | `*`  | \*          |        | @/lib/theme         |
| `js` | `*`  | \*          |        | @/lib/word/cloud    |
| `js` | `*`  | \*          |        | @/lib/word/tag      |

# `packages/types/src/theme/index.ts`:

## Variables

| Name                          | Description | Type                                                                                                                                                                                                                                                                                                                              |
| ----------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CONFIG_COLOR_CONTRAST_NAMES` |             | `{
  NORMAL: "NORMAL" as const,
  MEDIUM: "MEDIUM" as const,
  HIGH: "HIGH" as const,
}`                                                                                                                                                                                                                                          |
| `CONFIG_COLOR_SCHEME_NAMES`   |             | `{
  DARK: "DARK" as const,
  LIGHT: "LIGHT" as const,
  SYSTEM: "SYSTEM" as const,
}`                                                                                                                                                                                                                                            |
| `THEME_NAMES`                 |             | `{
  atlInWhite: "atlInWhite" as const,
  chicago: "chicago" as const,
  downtown: "downtown" as const,
  inter: "inter" as const,
  leatherJacket: "leatherJacket" as const,
  ponder: "ponder" as const,
  red: "red" as const,
  romanBus: "romanBus" as const,
  skyline: "skyline" as const,
  sunset: "sunset" as const,
}` |

<hr/>

## Functions

| Name      | Description | Parameters                   | Return |
| --------- | ----------- | ---------------------------- | ------ |
| `setRGBA` |             | `color: T & ValidateRGBA<T>` |        |

<hr/>

## Exports

| Kind | Name                          | Declaration                    | Module                            | Package |
| ---- | ----------------------------- | ------------------------------ | --------------------------------- | ------- |
| `js` | `CONFIG_COLOR_CONTRAST_NAMES` | CONFIG\_COLOR\_CONTRAST\_NAMES | packages/types/src/theme/index.ts |         |
| `js` | `CONFIG_COLOR_SCHEME_NAMES`   | CONFIG\_COLOR\_SCHEME\_NAMES   | packages/types/src/theme/index.ts |         |
| `js` | `MaterialSymbol`              | MaterialSymbol                 | material-symbols                  |         |
| `js` | `setRGBA`                     | setRGBA                        | packages/types/src/theme/index.ts |         |
| `js` | `THEME_NAMES`                 | THEME\_NAMES                   | packages/types/src/theme/index.ts |         |

# `packages/types/src/word/cloud/index.ts`:

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

| Kind | Name                   | Declaration          | Module                                 | Package |
| ---- | ---------------------- | -------------------- | -------------------------------------- | ------- |
| `js` | `makeWordCloudWord`    | makeWordCloudWord    | packages/types/src/word/cloud/index.ts |         |
| `js` | `WordCloudAppearances` | WordCloudAppearances | packages/types/src/word/cloud/index.ts |         |
| `js` | `WordCloudGroupings`   | WordCloudGroupings   | packages/types/src/word/cloud/index.ts |         |
| `js` | `WordCloudSortings`    | WordCloudSortings    | packages/types/src/word/cloud/index.ts |         |

# `packages/types/src/word/tag/index.ts`:

## Variables

| Name                               | Description                                                        | Type                                                                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `WordTagVariantAttributeConverter` | Implements ComplexAttributeConverter for WordTagVariant properties | `ComplexAttributeConverter<WordTagVariant, WordTagVariant>`                                                                                       |
| `WordTagVariants`                  |                                                                    | `{ readonly "text-only": "text-only"; readonly "icon-text": "icon-text"; readonly "text-icon": "text-icon"; readonly "icon-only": "icon-only"; }` |

<hr/>

## Exports

| Kind | Name                               | Declaration                      | Module                               | Package |
| ---- | ---------------------------------- | -------------------------------- | ------------------------------------ | ------- |
| `js` | `WordTagVariantAttributeConverter` | WordTagVariantAttributeConverter | packages/types/src/word/tag/index.ts |         |
| `js` | `WordTagVariants`                  | WordTagVariants                  | packages/types/src/word/tag/index.ts |         |
