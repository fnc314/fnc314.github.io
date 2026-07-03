# `packages/components/lib/bento-layout/bento-layout.styles.ts`:

## Variables

| Name                | Description                                                          | Type |
| ------------------- | -------------------------------------------------------------------- | ---- |
| `BentoLayoutStyles` |                                                                      |      |
| `TransitionStyles`  | Standardized transition animations for page loads and state changes. |      |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                                      | Package |
| ---- | ------------------- | ----------------- | ----------------------------------------------------------- | ------- |
| `js` | `BentoLayoutStyles` | BentoLayoutStyles | packages/components/lib/bento-layout/bento-layout.styles.ts |         |
| `js` | `TransitionStyles`  | TransitionStyles  | packages/components/lib/bento-layout/bento-layout.styles.ts |         |

# `packages/components/lib/bento-layout/bento-layout.js`:

## class: `BentoLayout`, `bento-layout`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

### Methods

| Name               | Privacy | Description | Parameters                | Return           | Inherited From |
| ------------------ | ------- | ----------- | ------------------------- | ---------------- | -------------- |
| `_bentoBoxConfigs` | private |             |                           |                  |                |
| `renderBentoBox`   | private |             | `config: ABentoBoxConfig` | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                                               | Package |
| --------------------------- | -------------- | ----------- | ---------------------------------------------------- | ------- |
| `custom-element-definition` | `bento-layout` | BentoLayout | packages/components/lib/bento-layout/bento-layout.ts |         |
| `js`                        | `BentoLayout`  | BentoLayout | packages/components/lib/bento-layout/bento-layout.ts |         |

# `packages/components/lib/bento-layout/bento-layout.types.ts`:

## Variables

| Name               | Description                          | Type                                                                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `BENTO_BOX_CONFIG` | The final rendered BentoBoxConfigs   | `BentoBoxConfigs`                                                                                                                                                                                                                                                        |
| `BENTO_BOX_TYPES`  | A Record of BentoBoxType definitions | `{
  profile: "profile" as const,
  experience: "experience" as const,
  code: "code" as const,
  blog: "blog" as const,
  settings: "settings" as const,
  education: "education" as const,
  skills: "skills" as const,
  // "now-playing": "now-playing" as const,
}` |

<hr/>

## Functions

| Name                   | Description                                                                                                                                                     | Parameters                    | Return              |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------- |
| `BentoBoxConfigsArray` | Produces an array of ABentoBoxConfig instances sorted for proper DOM order.                                                                                     | `breakpoint: BreakpointLabel` | `ABentoBoxConfig[]` |
| `getBentoDOMOrder`     | Determines the logical DOM order for bento box types based on grid placement.&#xA;Reading order follows Top-to-Bottom, then Start-to-End (Leading-to-Trailing). | `breakpoint: BreakpointLabel` |                     |

<hr/>

## Exports

| Kind | Name                   | Declaration          | Module                                                     | Package |
| ---- | ---------------------- | -------------------- | ---------------------------------------------------------- | ------- |
| `js` | `BENTO_BOX_CONFIG`     | BENTO\_BOX\_CONFIG   | packages/components/lib/bento-layout/bento-layout.types.ts |         |
| `js` | `BENTO_BOX_TYPES`      | BENTO\_BOX\_TYPES    | packages/components/lib/bento-layout/bento-layout.types.ts |         |
| `js` | `BentoBoxConfigsArray` | BentoBoxConfigsArray | packages/components/lib/bento-layout/bento-layout.types.ts |         |
| `js` | `getBentoDOMOrder`     | getBentoDOMOrder     | packages/components/lib/bento-layout/bento-layout.types.ts |         |

# `packages/components/lib/card/bento/bento-card.styles.ts`:

## Variables

| Name              | Description | Type |
| ----------------- | ----------- | ---- |
| `BentoCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                                  | Package |
| ---- | ----------------- | --------------- | ------------------------------------------------------- | ------- |
| `js` | `BentoCardStyles` | BentoCardStyles | packages/components/lib/card/bento/bento-card.styles.ts |         |

# `packages/components/lib/card/bento/bento-card.js`:

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

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

### Methods

| Name            | Privacy | Description                                                                                                                                          | Parameters | Return | Inherited From |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ | -------------- |
| `_handleToggle` | private | Synchronizes the \`expanded\` property with the state of the \`\<details>\` element&#xA;whenever the user interacts with the toggle icon or summary. | `e: Event` |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name         | Declaration | Module                                           | Package |
| --------------------------- | ------------ | ----------- | ------------------------------------------------ | ------- |
| `custom-element-definition` | `bento-card` | BentoCard   | packages/components/lib/card/bento/bento-card.ts |         |
| `js`                        | `BentoCard`  | BentoCard   | packages/components/lib/card/bento/bento-card.ts |         |

# `packages/components/lib/card/blog/blog-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `BlogCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                | Package |
| ---- | ---------------- | -------------- | ----------------------------------------------------- | ------- |
| `js` | `BlogCardStyles` | BlogCardStyles | packages/components/lib/card/blog/blog-card.styles.ts |         |

# `packages/components/lib/card/blog/blog-card.js`:

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

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                         | Package |
| --------------------------- | ----------- | ----------- | ---------------------------------------------- | ------- |
| `custom-element-definition` | `blog-card` | BlogCard    | packages/components/lib/card/blog/blog-card.ts |         |
| `js`                        | `BlogCard`  | BlogCard    | packages/components/lib/card/blog/blog-card.ts |         |

# `packages/components/lib/card/code/code-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `CodeCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                | Package |
| ---- | ---------------- | -------------- | ----------------------------------------------------- | ------- |
| `js` | `CodeCardStyles` | CodeCardStyles | packages/components/lib/card/code/code-card.styles.ts |         |

# `packages/components/lib/card/code/code-card.js`:

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

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                         | Package |
| --------------------------- | ----------- | ----------- | ---------------------------------------------- | ------- |
| `custom-element-definition` | `code-card` | CodeCard    | packages/components/lib/card/code/code-card.ts |         |
| `js`                        | `CodeCard`  | CodeCard    | packages/components/lib/card/code/code-card.ts |         |

# `packages/components/lib/card/education/education-card.styles.ts`:

## Variables

| Name                  | Description | Type |
| --------------------- | ----------- | ---- |
| `EducationCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                                                          | Package |
| ---- | --------------------- | ------------------- | --------------------------------------------------------------- | ------- |
| `js` | `EducationCardStyles` | EducationCardStyles | packages/components/lib/card/education/education-card.styles.ts |         |

# `packages/components/lib/card/education/education-card.js`:

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

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name             | Declaration   | Module                                                   | Package |
| --------------------------- | ---------------- | ------------- | -------------------------------------------------------- | ------- |
| `custom-element-definition` | `education-card` | EducationCard | packages/components/lib/card/education/education-card.ts |         |
| `js`                        | `EducationCard`  | EducationCard | packages/components/lib/card/education/education-card.ts |         |

# `packages/components/lib/card/experience/experience-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `WorkCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                            | Package |
| ---- | ---------------- | -------------- | ----------------------------------------------------------------- | ------- |
| `js` | `WorkCardStyles` | WorkCardStyles | packages/components/lib/card/experience/experience-card.styles.ts |         |

# `packages/components/lib/card/experience/experience-card.js`:

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

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name              | Declaration    | Module                                                     | Package |
| --------------------------- | ----------------- | -------------- | ---------------------------------------------------------- | ------- |
| `custom-element-definition` | `experience-card` | ExperienceCard | packages/components/lib/card/experience/experience-card.ts |         |
| `js`                        | `ExperienceCard`  | ExperienceCard | packages/components/lib/card/experience/experience-card.ts |         |

# `packages/components/lib/card/profile/profile-card.styles.ts`:

## Variables

| Name                | Description | Type        |
| ------------------- | ----------- | ----------- |
| `ProfileCardStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                                      | Package |
| ---- | ------------------- | ----------------- | ----------------------------------------------------------- | ------- |
| `js` | `ProfileCardStyles` | ProfileCardStyles | packages/components/lib/card/profile/profile-card.styles.ts |         |

# `packages/components/lib/card/profile/profile-card.js`:

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
| `expanded`    |         |      |         |             |                |

### Methods

| Name        | Privacy | Description | Parameters | Return | Inherited From |
| ----------- | ------- | ----------- | ---------- | ------ | -------------- |
| `bioText`   |         |             |            |        |                |
| `photoData` |         |             |            |        |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `bioText`     | bioText     |                |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `_onConfigChange`    | private   |                          |                                                                |                                                                                                    |                |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

### Methods

| Name              | Privacy | Description | Parameters | Return           | Inherited From |
| ----------------- | ------- | ----------- | ---------- | ---------------- | -------------- |
| `contactsSection` | private |             |            | `TemplateResult` |                |
| `imageSection`    | private |             |            | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                                               | Package |
| --------------------------- | -------------- | ----------- | ---------------------------------------------------- | ------- |
| `custom-element-definition` | `profile-card` | ProfileCard | packages/components/lib/card/profile/profile-card.ts |         |
| `js`                        | `ProfileCard`  | ProfileCard | packages/components/lib/card/profile/profile-card.ts |         |

# `packages/components/lib/card/settings/settings-card.styles.ts`:

## Variables

| Name                 | Description | Type        |
| -------------------- | ----------- | ----------- |
| `SettingsCardStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                                        | Package |
| ---- | -------------------- | ------------------ | ------------------------------------------------------------- | ------- |
| `js` | `SettingsCardStyles` | SettingsCardStyles | packages/components/lib/card/settings/settings-card.styles.ts |         |

# `packages/components/lib/card/settings/settings-card.js`:

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

### Fields

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

### Methods

| Name                         | Privacy | Description | Parameters                               | Return | Inherited From |
| ---------------------------- | ------- | ----------- | ---------------------------------------- | ------ | -------------- |
| `_appConfigs`                | private |             |                                          |        |                |
| `_dispatchColorSchemeChange` | private |             | `colorScheme: AppConfigs["colorScheme"]` |        |                |
| `_onContrastChange`          | private |             | `event: Event`                           |        |                |
| `_onThemeChange`             | private |             | `event: Event`                           |        |                |
| `onAppConfigsChange`         | private |             |                                          |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name            | Declaration  | Module                                                 | Package |
| --------------------------- | --------------- | ------------ | ------------------------------------------------------ | ------- |
| `custom-element-definition` | `settings-card` | SettingsCard | packages/components/lib/card/settings/settings-card.ts |         |
| `js`                        | `SettingsCard`  | SettingsCard | packages/components/lib/card/settings/settings-card.ts |         |

# `packages/components/lib/card/skills/skills-card.styles.ts`:

## Variables

| Name               | Description | Type |
| ------------------ | ----------- | ---- |
| `SkillsCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name               | Declaration      | Module                                                    | Package |
| ---- | ------------------ | ---------------- | --------------------------------------------------------- | ------- |
| `js` | `SkillsCardStyles` | SkillsCardStyles | packages/components/lib/card/skills/skills-card.styles.ts |         |

# `packages/components/lib/card/skills/skills-card.js`:

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

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

### Methods

| Name                    | Privacy | Description | Parameters | Return | Inherited From |
| ----------------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `getSkillsForWordCloud` | private |             |            |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name          | Declaration | Module                                             | Package |
| --------------------------- | ------------- | ----------- | -------------------------------------------------- | ------- |
| `custom-element-definition` | `skills-card` | SkillsCard  | packages/components/lib/card/skills/skills-card.ts |         |
| `js`                        | `SkillsCard`  | SkillsCard  | packages/components/lib/card/skills/skills-card.ts |         |

# `packages/components/lib/code/repo/code-repo.styles.ts`:

## Variables

| Name             | Description                                         | Type        |
| ---------------- | --------------------------------------------------- | ----------- |
| `CodeRepoStyles` | The CSSResult for @fnc314/fnc314.github.io!CodeRepo | `CSSResult` |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                | Package |
| ---- | ---------------- | -------------- | ----------------------------------------------------- | ------- |
| `js` | `CodeRepoStyles` | CodeRepoStyles | packages/components/lib/code/repo/code-repo.styles.ts |         |

# `packages/components/lib/code/repo/code-repo.js`:

## class: `CodeRepo`, `code-repo`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Methods

| Name       | Privacy | Description          | Parameters | Return | Inherited From |
| ---------- | ------- | -------------------- | ---------- | ------ | -------------- |
| `codeRepo` |         | {@link CodeRepoData} |            |        |                |

### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `codeRepo` | codeRepo |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

### Methods

| Name              | Privacy | Description | Parameters           | Return           | Inherited From |
| ----------------- | ------- | ----------- | -------------------- | ---------------- | -------------- |
| `createWordTagLI` | private |             | `tech: CodeRepoTech` | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name        | Declaration | Module                                         | Package |
| --------------------------- | ----------- | ----------- | ---------------------------------------------- | ------- |
| `custom-element-definition` | `code-repo` | CodeRepo    | packages/components/lib/code/repo/code-repo.ts |         |
| `js`                        | `CodeRepo`  | CodeRepo    | packages/components/lib/code/repo/code-repo.ts |         |

# `packages/components/lib/connection/artifact/artifact-connection.styles.ts`:

## Variables

| Name                       | Description | Type        |
| -------------------------- | ----------- | ----------- |
| `ConnectionArtifactStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                       | Declaration              | Module                                                                    | Package |
| ---- | -------------------------- | ------------------------ | ------------------------------------------------------------------------- | ------- |
| `js` | `ConnectionArtifactStyles` | ConnectionArtifactStyles | packages/components/lib/connection/artifact/artifact-connection.styles.ts |         |

# `packages/components/lib/connection/artifact/artifact-connection.js`:

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

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                  | Declaration        | Module                                                             | Package |
| --------------------------- | --------------------- | ------------------ | ------------------------------------------------------------------ | ------- |
| `custom-element-definition` | `artifact-connection` | ArtifactConnection | packages/components/lib/connection/artifact/artifact-connection.ts |         |
| `js`                        | `ArtifactConnection`  | ArtifactConnection | packages/components/lib/connection/artifact/artifact-connection.ts |         |

# `packages/components/lib/connection/direct/direct-connection.styles.ts`:

## Variables

| Name                     | Description | Type        |
| ------------------------ | ----------- | ----------- |
| `DirectConnectionStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                     | Declaration            | Module                                                                | Package |
| ---- | ------------------------ | ---------------------- | --------------------------------------------------------------------- | ------- |
| `js` | `DirectConnectionStyles` | DirectConnectionStyles | packages/components/lib/connection/direct/direct-connection.styles.ts |         |

# `packages/components/lib/connection/direct/direct-connection.js`:

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

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                | Declaration      | Module                                                         | Package |
| --------------------------- | ------------------- | ---------------- | -------------------------------------------------------------- | ------- |
| `custom-element-definition` | `direct-connection` | DirectConnection | packages/components/lib/connection/direct/direct-connection.ts |         |
| `js`                        | `DirectConnection`  | DirectConnection | packages/components/lib/connection/direct/direct-connection.ts |         |

# `packages/components/lib/connection/professional/professional-connection.styles.ts`:

## Variables

| Name                           | Description | Type        |
| ------------------------------ | ----------- | ----------- |
| `ProfessionalConnectionStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                           | Declaration                  | Module                                                                            | Package |
| ---- | ------------------------------ | ---------------------------- | --------------------------------------------------------------------------------- | ------- |
| `js` | `ProfessionalConnectionStyles` | ProfessionalConnectionStyles | packages/components/lib/connection/professional/professional-connection.styles.ts |         |

# `packages/components/lib/connection/professional/professional-connection.js`:

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

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                      | Declaration            | Module                                                                     | Package |
| --------------------------- | ------------------------- | ---------------------- | -------------------------------------------------------------------------- | ------- |
| `custom-element-definition` | `professional-connection` | ProfessionalConnection | packages/components/lib/connection/professional/professional-connection.ts |         |
| `js`                        | `ProfessionalConnection`  | ProfessionalConnection | packages/components/lib/connection/professional/professional-connection.ts |         |

# `packages/components/lib/education/institution/education-institution.styles.ts`:

## Variables

| Name                         | Description | Type        |
| ---------------------------- | ----------- | ----------- |
| `EducationInstitutionStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                         | Declaration                | Module                                                                        | Package |
| ---- | ---------------------------- | -------------------------- | ----------------------------------------------------------------------------- | ------- |
| `js` | `EducationInstitutionStyles` | EducationInstitutionStyles | packages/components/lib/education/institution/education-institution.styles.ts |         |

# `packages/components/lib/education/institution/education-institution.js`:

## class: `EducationInstitution`, `education-institution`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Methods

| Name        | Privacy | Description | Parameters | Return | Inherited From |
| ----------- | ------- | ----------- | ---------- | ------ | -------------- |
| `institute` |         |             |            |        |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `institute` | institute |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name                    | Declaration          | Module                                                                 | Package |
| --------------------------- | ----------------------- | -------------------- | ---------------------------------------------------------------------- | ------- |
| `custom-element-definition` | `education-institution` | EducationInstitution | packages/components/lib/education/institution/education-institution.ts |         |
| `js`                        | `EducationInstitution`  | EducationInstitution | packages/components/lib/education/institution/education-institution.ts |         |

# `packages/components/lib/index.ts`:

## Exports

| Kind | Name                               | Declaration                      | Module                                                   | Package |
| ---- | ---------------------------------- | -------------------------------- | -------------------------------------------------------- | ------- |
| `js` | `ABentoBoxConfig`                  | ABentoBoxConfig                  | ./bento-layout/bento-layout.types                        |         |
| `js` | `ArtifactConnection`               | ArtifactConnection               | ./connection/artifact/artifact-connection                |         |
| `js` | `BENTO_BOX_CONFIG`                 | BENTO\_BOX\_CONFIG               | ./bento-layout/bento-layout.types                        |         |
| `js` | `BENTO_BOX_TYPES`                  | BENTO\_BOX\_TYPES                | ./bento-layout/bento-layout.types                        |         |
| `js` | `BentoBoxConfigs`                  | BentoBoxConfigs                  | ./bento-layout/bento-layout.types                        |         |
| `js` | `BentoBoxConfigsArray`             | BentoBoxConfigsArray             | ./bento-layout/bento-layout.types                        |         |
| `js` | `BentoBoxType`                     | BentoBoxType                     | ./bento-layout/bento-layout.types                        |         |
| `js` | `BentoCard`                        | BentoCard                        | ./card/bento/bento-card                                  |         |
| `js` | `BentoCardStyles`                  | BentoCardStyles                  | ./card/bento/bento-card.styles                           |         |
| `js` | `BentoLayout`                      | BentoLayout                      | ./bento-layout/bento-layout                              |         |
| `js` | `BentoLayoutStyles`                | BentoLayoutStyles                | ./bento-layout/bento-layout.styles                       |         |
| `js` | `BlogCard`                         | BlogCard                         | ./card/blog/blog-card                                    |         |
| `js` | `BlogCardStyles`                   | BlogCardStyles                   | ./card/blog/blog-card.styles                             |         |
| `js` | `BlogEntry`                        | BlogEntry                        | ./publication/blog/entry/blog-entry                      |         |
| `js` | `BlogEntryStyles`                  | BlogEntryStyles                  | ./publication/blog/entry/blog-entry.styles               |         |
| `js` | `CodeCard`                         | CodeCard                         | ./card/code/code-card                                    |         |
| `js` | `CodeCardStyles`                   | CodeCardStyles                   | ./card/code/code-card.styles                             |         |
| `js` | `CodeRepo`                         | CodeRepo                         | ./code/repo/code-repo                                    |         |
| `js` | `CodeRepoStyles`                   | CodeRepoStyles                   | ./code/repo/code-repo.styles                             |         |
| `js` | `ConnectionArtifactStyles`         | ConnectionArtifactStyles         | ./connection/artifact/artifact-connection.styles         |         |
| `js` | `Constructor`                      | Constructor                      | ./mixins/size-observer-element/size-observer-element     |         |
| `js` | `DirectConnection`                 | DirectConnection                 | ./connection/direct/direct-connection                    |         |
| `js` | `DirectConnectionStyles`           | DirectConnectionStyles           | ./connection/direct/direct-connection.styles             |         |
| `js` | `DynamicBorderStyles`              | DynamicBorderStyles              | ./styles/dynamic-border                                  |         |
| `js` | `EducationCard`                    | EducationCard                    | ./card/education/education-card                          |         |
| `js` | `EducationCardStyles`              | EducationCardStyles              | ./card/education/education-card.styles                   |         |
| `js` | `EducationInstitution`             | EducationInstitution             | ./education/institution/education-institution            |         |
| `js` | `EducationInstitutionStyles`       | EducationInstitutionStyles       | ./education/institution/education-institution.styles     |         |
| `js` | `ExperienceCard`                   | ExperienceCard                   | ./card/experience/experience-card                        |         |
| `js` | `getBentoDOMOrder`                 | getBentoDOMOrder                 | ./bento-layout/bento-layout.types                        |         |
| `js` | `GridPosition`                     | GridPosition                     | ./bento-layout/bento-layout.types                        |         |
| `js` | `GridSpan`                         | GridSpan                         | ./bento-layout/bento-layout.types                        |         |
| `js` | `makeWordCloudWord`                | makeWordCloudWord                | ./word/cloud/word-cloud.types                            |         |
| `js` | `ProfessionalConnection`           | ProfessionalConnection           | ./connection/professional/professional-connection        |         |
| `js` | `ProfessionalConnectionStyles`     | ProfessionalConnectionStyles     | ./connection/professional/professional-connection.styles |         |
| `js` | `ProfileCard`                      | ProfileCard                      | ./card/profile/profile-card                              |         |
| `js` | `ProfileCardStyles`                | ProfileCardStyles                | ./card/profile/profile-card.styles                       |         |
| `js` | `RenderableWordCloudWord`          | RenderableWordCloudWord          | ./word/cloud/word-cloud.types                            |         |
| `js` | `SettingsCard`                     | SettingsCard                     | ./card/settings/settings-card                            |         |
| `js` | `SettingsCardStyles`               | SettingsCardStyles               | ./card/settings/settings-card.styles                     |         |
| `js` | `SizeObserverElement`              | SizeObserverElement              | ./mixins/size-observer-element/size-observer-element     |         |
| `js` | `SkillsCard`                       | SkillsCard                       | ./card/skills/skills-card                                |         |
| `js` | `SkillsCardStyles`                 | SkillsCardStyles                 | ./card/skills/skills-card.styles                         |         |
| `js` | `TextStyles`                       | TextStyles                       | ./styles/text                                            |         |
| `js` | `TransitionStyles`                 | TransitionStyles                 | ./bento-layout/bento-layout.styles                       |         |
| `js` | `UIAwareElement`                   | UIAwareElement                   | ./mixins/ui-aware-element/ui-aware-element               |         |
| `js` | `UiModeToggle`                     | UiModeToggle                     | ./ui-mode-toggle/ui-mode-toggle                          |         |
| `js` | `UIModeToggleStyles`               | UIModeToggleStyles               | ./ui-mode-toggle/ui-mode-toggle.styles                   |         |
| `js` | `VersionTag`                       | VersionTag                       | ./version-tag/version-tag                                |         |
| `js` | `WeightQuartile`                   | WeightQuartile                   | ./word/cloud/word-cloud.types                            |         |
| `js` | `Weights`                          | Weights                          | ./word/cloud/word-cloud.types                            |         |
| `js` | `WordCloud`                        | WordCloud                        | ./word/cloud/word-cloud                                  |         |
| `js` | `WordCloudAppearance`              | WordCloudAppearance              | ./word/cloud/word-cloud.types                            |         |
| `js` | `WordCloudAppearances`             | WordCloudAppearances             | ./word/cloud/word-cloud.types                            |         |
| `js` | `WordCloudGrouping`                | WordCloudGrouping                | ./word/cloud/word-cloud.types                            |         |
| `js` | `WordCloudGroupings`               | WordCloudGroupings               | ./word/cloud/word-cloud.types                            |         |
| `js` | `WordCloudSorting`                 | WordCloudSorting                 | ./word/cloud/word-cloud.types                            |         |
| `js` | `WordCloudSortings`                | WordCloudSortings                | ./word/cloud/word-cloud.types                            |         |
| `js` | `WordCloudStyles`                  | WordCloudStyles                  | ./word/cloud/word-cloud.styles                           |         |
| `js` | `WordCloudWord`                    | WordCloudWord                    | ./word/cloud/word-cloud.types                            |         |
| `js` | `WordCloudWordCategory`            | WordCloudWordCategory            | ./word/cloud/word-cloud.types                            |         |
| `js` | `WordTag`                          | WordTag                          | ./word/tag/word-tag                                      |         |
| `js` | `WordTagHeaviness`                 | WordTagHeaviness                 | ./word/tag/word-tag.types                                |         |
| `js` | `WordTagStyles`                    | WordTagStyles                    | ./word/tag/word-tag.styles                               |         |
| `js` | `WordTagVariant`                   | WordTagVariant                   | ./word/tag/word-tag.types                                |         |
| `js` | `WordTagVariantAttributeConverter` | WordTagVariantAttributeConverter | ./word/tag/word-tag.types                                |         |
| `js` | `WorkCardStyles`                   | WorkCardStyles                   | ./card/experience/experience-card.styles                 |         |
| `js` | `WorkExperience`                   | WorkExperience                   | ./work/experience/work-experience                        |         |
| `js` | `WorkExperienceStyles`             | WorkExperienceStyles             | ./work/experience/work-experience.styles                 |         |

# `packages/components/lib/mixins/size-observer-element/size-observer-element.ts`:

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
| `js` | `SizeObserverElement` | SizeObserverElement | packages/components/lib/mixins/size-observer-element/size-observer-element.ts |         |

# `packages/components/lib/mixins/ui-aware-element/ui-aware-element.js`:

## class: `UIAwareElement`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

<details><summary>Private API</summary>

### Methods

| Name                 | Privacy   | Description                                                                                                        | Parameters | Return | Inherited From |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------ | -------------- |
| `breakpoint`         | protected | The {@link BreakpointLabel} as determined by \*SCREEN\* width against&#xA;  {@link Breakpoints.BREAKPOINT\_LABELS} |            |        |                |
| `darkMode`           | protected |                                                                                                                    |            |        |                |
| `onAppConfigChange`  | private   |                                                                                                                    |            |        |                |
| `onBreakpointChange` | private   |                                                                                                                    |            |        |                |
| `touchScreen`        | protected | Reads {@link TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN} from \`:root\`&#xA;  and tests against \`"true"\`,          |            |        |                |

</details>

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                              | Package |
| ---- | ---------------- | -------------- | ------------------------------------------------------------------- | ------- |
| `js` | `UIAwareElement` | UIAwareElement | packages/components/lib/mixins/ui-aware-element/ui-aware-element.ts |         |

# `packages/components/lib/publication/blog/entry/blog-entry.styles.ts`:

## Variables

| Name              | Description | Type        |
| ----------------- | ----------- | ----------- |
| `BlogEntryStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                                              | Package |
| ---- | ----------------- | --------------- | ------------------------------------------------------------------- | ------- |
| `js` | `BlogEntryStyles` | BlogEntryStyles | packages/components/lib/publication/blog/entry/blog-entry.styles.ts |         |

# `packages/components/lib/publication/blog/entry/blog-entry.js`:

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

| Name                 | Privacy   | Description                                                                                        | Parameters | Return | Inherited From |
| -------------------- | --------- | -------------------------------------------------------------------------------------------------- | ---------- | ------ | -------------- |
| `breakpoint`         | protected | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS |            |        | UIAwareElement |
| `darkMode`           | protected |                                                                                                    |            |        | UIAwareElement |
| `onAppConfigChange`  | private   |                                                                                                    |            |        | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                    |            |        | UIAwareElement |
| `touchScreen`        | protected | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  |            |        | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name         | Declaration | Module                                                       | Package |
| --------------------------- | ------------ | ----------- | ------------------------------------------------------------ | ------- |
| `custom-element-definition` | `blog-entry` | BlogEntry   | packages/components/lib/publication/blog/entry/blog-entry.ts |         |
| `js`                        | `BlogEntry`  | BlogEntry   | packages/components/lib/publication/blog/entry/blog-entry.ts |         |

# `packages/components/lib/styles/dynamic-border.ts`:

## Variables

| Name                  | Description | Type        |
| --------------------- | ----------- | ----------- |
| `DynamicBorderStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                                           | Package |
| ---- | --------------------- | ------------------- | ------------------------------------------------ | ------- |
| `js` | `DynamicBorderStyles` | DynamicBorderStyles | packages/components/lib/styles/dynamic-border.ts |         |

# `packages/components/lib/styles/index.ts`:

## Exports

| Kind | Name                  | Declaration         | Module           | Package                                     |
| ---- | --------------------- | ------------------- | ---------------- | ------------------------------------------- |
| `js` | `*`                   | \*                  |                  | @material/web/divider/divider               |
| `js` | `*`                   | \*                  |                  | @material/web/elevation/elevation           |
| `js` | `*`                   | \*                  |                  | @material/web/focus/md-focus-ring           |
| `js` | `*`                   | \*                  |                  | @material/web/icon/icon                     |
| `js` | `*`                   | \*                  |                  | @material/web/iconbutton/filled-icon-button |
| `js` | `*`                   | \*                  |                  | @material/web/iconbutton/icon-button        |
| `js` | `*`                   | \*                  |                  | @material/web/labs/card/elevated-card       |
| `js` | `*`                   | \*                  |                  | @material/web/labs/card/filled-card         |
| `js` | `*`                   | \*                  |                  | @material/web/labs/card/outlined-card       |
| `js` | `*`                   | \*                  |                  | @material/web/list/list                     |
| `js` | `*`                   | \*                  |                  | @material/web/list/list-item                |
| `js` | `*`                   | \*                  |                  | @material/web/select/outlined-select        |
| `js` | `*`                   | \*                  |                  | @material/web/select/select-option          |
| `js` | `DynamicBorderStyles` | DynamicBorderStyles | ./dynamic-border |                                             |
| `js` | `TextStyles`          | TextStyles          | ./text           |                                             |

# `packages/components/lib/styles/text.ts`:

## Variables

| Name         | Description                                                                  | Type        |
| ------------ | ---------------------------------------------------------------------------- | ----------- |
| `TextStyles` | A CSSResult merging in MaterialTypescaleStyles&#xA;  with some sane defaults | `CSSResult` |

<hr/>

## Exports

| Kind | Name         | Declaration | Module                                 | Package |
| ---- | ------------ | ----------- | -------------------------------------- | ------- |
| `js` | `TextStyles` | TextStyles  | packages/components/lib/styles/text.ts |         |

# `packages/components/lib/ui-mode-toggle/ui-mode-toggle.styles.ts`:

## Variables

| Name                 | Description | Type        |
| -------------------- | ----------- | ----------- |
| `UIModeToggleStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                                          | Package |
| ---- | -------------------- | ------------------ | --------------------------------------------------------------- | ------- |
| `js` | `UIModeToggleStyles` | UIModeToggleStyles | packages/components/lib/ui-mode-toggle/ui-mode-toggle.styles.ts |         |

# `packages/components/lib/ui-mode-toggle/ui-mode-toggle.js`:

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

| Name              | Privacy | Type             | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Inherited From |
| ----------------- | ------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `_darkModeToggle` | private | `DarkModeToggle` |         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |
| `_ready`          | private |                  |         | Guards against the synthetic \`colorschemechange\` / \`permanentcolorscheme\`&#xA;  events that \`dark-mode-toggle\` dispatches at the end of its&#xA;  \`connectedCallback\` (which runs \*during\* this element's first render).&#xA;  Reacting to that echo would mutate reactive state mid-update — triggering&#xA;  Lit's \`change-in-update\` warning — and would clobber a \`SYSTEM\` preference&#xA;  with the resolved light/dark value. We only honor these events once the&#xA;  first render has completed (i.e. after a genuine user toggle). |                |

### Methods

| Name                                | Privacy   | Description                                                                                        | Parameters                               | Return | Inherited From |
| ----------------------------------- | --------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------ | -------------- |
| `_appConfigs`                       | private   |                                                                                                    |                                          |        |                |
| `breakpoint`                        | protected | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS |                                          |        | UIAwareElement |
| `colorSchemeChangeEventListener`    | private   |                                                                                                    |                                          |        |                |
| `darkMode`                          | protected |                                                                                                    |                                          |        | UIAwareElement |
| `onAppConfigChange`                 | private   |                                                                                                    |                                          |        | UIAwareElement |
| `onAppConfigsChange`                | private   |                                                                                                    |                                          |        |                |
| `onBreakpointChange`                | private   |                                                                                                    |                                          |        | UIAwareElement |
| `onColorThemeModeContrastChange`    | private   |                                                                                                    | `colorScheme: AppConfigs["colorScheme"]` |        |                |
| `permanentColorSchemeEventListener` | private   |                                                                                                    |                                          |        |                |
| `touchScreen`                       | protected | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  |                                          |        | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name             | Declaration  | Module                                                   | Package |
| --------------------------- | ---------------- | ------------ | -------------------------------------------------------- | ------- |
| `custom-element-definition` | `ui-mode-toggle` | UiModeToggle | packages/components/lib/ui-mode-toggle/ui-mode-toggle.ts |         |
| `js`                        | `UiModeToggle`   | UiModeToggle | packages/components/lib/ui-mode-toggle/ui-mode-toggle.ts |         |

# `packages/components/lib/version-tag/version-tag.js`:

## class: `VersionTag`, `version-tag`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

<details><summary>Private API</summary>

### Methods

| Name                 | Privacy   | Description                                                                                                                                      | Parameters | Return | Inherited From |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------ | -------------- |
| `breakpoint`         | protected | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS                                               |            |        | UIAwareElement |
| `darkMode`           | protected |                                                                                                                                                  |            |        | UIAwareElement |
| `formattedDate`      | private   | Creates an {@link Intl.DateTimeFormat} and calls {@link Intl.DateTimeFormat.format}&#xA;  on {@link time} to render the user presented timestamp |            |        |                |
| `onAppConfigChange`  | private   |                                                                                                                                                  |            |        | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                                                                  |            |        | UIAwareElement |
| `touchScreen`        | protected | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                                |            |        | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name          | Declaration | Module                                             | Package |
| --------------------------- | ------------- | ----------- | -------------------------------------------------- | ------- |
| `custom-element-definition` | `version-tag` | VersionTag  | packages/components/lib/version-tag/version-tag.ts |         |
| `js`                        | `VersionTag`  | VersionTag  | packages/components/lib/version-tag/version-tag.ts |         |

# `packages/components/lib/word/cloud/word-cloud.styles.ts`:

## Variables

| Name              | Description | Type        |
| ----------------- | ----------- | ----------- |
| `WordCloudStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                                  | Package |
| ---- | ----------------- | --------------- | ------------------------------------------------------- | ------- |
| `js` | `WordCloudStyles` | WordCloudStyles | packages/components/lib/word/cloud/word-cloud.styles.ts |         |

# `packages/components/lib/word/cloud/word-cloud.js`:

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

| Name                        | Privacy   | Description                                                                                        | Parameters                  | Return                                                                              | Inherited From |
| --------------------------- | --------- | -------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------- | -------------- |
| `_getSortFunction`          | private   |                                                                                                    | `sorting: WordCloudSorting` | `((a: RenderableWordCloudWord, b: RenderableWordCloudWord) => number) \| undefined` |                |
| `_initIntersectionObserver` | private   |                                                                                                    |                             |                                                                                     |                |
| `_processWords`             | private   |                                                                                                    |                             | `RenderableWordCloudWord[]`                                                         |                |
| `breakpoint`                | protected | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS |                             |                                                                                     | UIAwareElement |
| `darkMode`                  | protected |                                                                                                    |                             |                                                                                     | UIAwareElement |
| `onAppConfigChange`         | private   |                                                                                                    |                             |                                                                                     | UIAwareElement |
| `onBreakpointChange`        | private   |                                                                                                    |                             |                                                                                     | UIAwareElement |
| `touchScreen`               | protected | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  |                             |                                                                                     | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name         | Declaration | Module                                           | Package |
| --------------------------- | ------------ | ----------- | ------------------------------------------------ | ------- |
| `custom-element-definition` | `word-cloud` | WordCloud   | packages/components/lib/word/cloud/word-cloud.ts |         |
| `js`                        | `WordCloud`  | WordCloud   | packages/components/lib/word/cloud/word-cloud.ts |         |

# `packages/components/lib/word/cloud/word-cloud.types.ts`:

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

| Kind | Name                   | Declaration          | Module                                                 | Package |
| ---- | ---------------------- | -------------------- | ------------------------------------------------------ | ------- |
| `js` | `makeWordCloudWord`    | makeWordCloudWord    | packages/components/lib/word/cloud/word-cloud.types.ts |         |
| `js` | `WordCloudAppearances` | WordCloudAppearances | packages/components/lib/word/cloud/word-cloud.types.ts |         |
| `js` | `WordCloudGroupings`   | WordCloudGroupings   | packages/components/lib/word/cloud/word-cloud.types.ts |         |
| `js` | `WordCloudSortings`    | WordCloudSortings    | packages/components/lib/word/cloud/word-cloud.types.ts |         |

# `packages/components/lib/word/tag/word-tag.styles.ts`:

## Variables

| Name            | Description | Type        |
| --------------- | ----------- | ----------- |
| `WordTagStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name            | Declaration   | Module                                              | Package |
| ---- | --------------- | ------------- | --------------------------------------------------- | ------- |
| `js` | `WordTagStyles` | WordTagStyles | packages/components/lib/word/tag/word-tag.styles.ts |         |

# `packages/components/lib/word/tag/word-tag.js`:

## class: `WordTag`, `word-tag`

### Superclass

| Name             | Module | Package                                        |
| ---------------- | ------ | ---------------------------------------------- |
| `UIAwareElement` |        | @/lib/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name        | Privacy | Type               | Default     | Description                                                                                                                                                                                                                   | Inherited From |
| ----------- | ------- | ------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `heaviness` |         | `WordTagHeaviness` | `normal`    | The weight of the tag (text & border), can be \`"normal"\` (\`--md-ref-typeface-weight-regular\` & \`--sizes-thickness-hairline\`) or \`"heavy"\` (\`--md-ref-typeface-weight-bold\` & \`2.5 \* --sizes-thickness-hairline\`) |                |
| `hrefUrl`   |         |                    |             | A URL which, when provided, wraps this {@link WordTag} in a {@link HTMLAnchorElement}                                                                                                                                         |                |
| `variant`   |         | `WordTagVariant`   | `text-only` | {@link WordTagVariantAttributeConverter}                                                                                                                                                                                      |                |
| `word`      |         |                    |             | The tagged word                                                                                                                                                                                                               |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `heaviness` | heaviness |                |
| `hrefUrl`   | hrefUrl   |                |
| `variant`   | variant   |                |
| `word`      | word      |                |

### CSS Properties

| Name                          | Default                                  | Description                                           |
| ----------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `--word-tag-color`            | `--md-sys-color-on-primary-container`    | The text and border color                             |
| `--word-tag-background-color` | `--md-sys-color-primary-container`       | The background color                                  |
| `--word-tag-font-family`      | `--md-ref-typeface-brand`                | The font family                                       |
| `--word-tag-font-size`        | `--md-typescale-body-large-font-size`    | The font size                                         |
| `--word-tag-font-weight`      | `--md-ref-typeface-weight-regular`       | The font weight                                       |
| `--word-tag-line-height`      | `--md-typescale-body-large-lingt-height` | The line height                                       |
| `--word-tag-border-radius`    | `--md-sys-shape-corner-small`            | The corner radius (for all corners)                   |
| `--word-tag-gap`              | `--spaces-gap-xs`                        | The \`gap\` between \`word\` and any \`slot\`-ed icon |

### Slots

| Name   | Description                                                                       |
| ------ | --------------------------------------------------------------------------------- |
| `icon` | The optional space available for, and positioned by, the {@link variant} property |

<details><summary>Private API</summary>

### Methods

| Name                 | Privacy   | Description                                                                                        | Parameters                | Return           | Inherited From |
| -------------------- | --------- | -------------------------------------------------------------------------------------------------- | ------------------------- | ---------------- | -------------- |
| `breakpoint`         | protected | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS |                           |                  | UIAwareElement |
| `darkMode`           | protected |                                                                                                    |                           |                  | UIAwareElement |
| `layoutForVariant`   | private   |                                                                                                    | `variant: WordTagVariant` | `TemplateResult` |                |
| `onAppConfigChange`  | private   |                                                                                                    |                           |                  | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                    |                           |                  | UIAwareElement |
| `touchScreen`        | protected | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  |                           |                  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name       | Declaration | Module                                       | Package |
| --------------------------- | ---------- | ----------- | -------------------------------------------- | ------- |
| `custom-element-definition` | `word-tag` | WordTag     | packages/components/lib/word/tag/word-tag.ts |         |
| `js`                        | `WordTag`  | WordTag     | packages/components/lib/word/tag/word-tag.ts |         |

# `packages/components/lib/word/tag/word-tag.types.ts`:

## Variables

| Name                               | Description                                                        | Type                                                              |
| ---------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `WordTagVariantAttributeConverter` | Implements ComplexAttributeConverter for WordTagVariant properties | `ComplexAttributeConverter<
  WordTagVariant,
  WordTagVariant >` |

<hr/>

## Exports

| Kind | Name                               | Declaration                      | Module                                             | Package |
| ---- | ---------------------------------- | -------------------------------- | -------------------------------------------------- | ------- |
| `js` | `WordTagVariantAttributeConverter` | WordTagVariantAttributeConverter | packages/components/lib/word/tag/word-tag.types.ts |         |

# `packages/components/lib/work/experience/work-experience.styles.ts`:

## Variables

| Name                   | Description | Type        |
| ---------------------- | ----------- | ----------- |
| `WorkExperienceStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                   | Declaration          | Module                                                            | Package |
| ---- | ---------------------- | -------------------- | ----------------------------------------------------------------- | ------- |
| `js` | `WorkExperienceStyles` | WorkExperienceStyles | packages/components/lib/work/experience/work-experience.styles.ts |         |

# `packages/components/lib/work/experience/work-experience.js`:

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

| Name                 | Privacy   | Description                                                                                        | Parameters | Return | Inherited From |
| -------------------- | --------- | -------------------------------------------------------------------------------------------------- | ---------- | ------ | -------------- |
| `breakpoint`         | protected | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS |            |        | UIAwareElement |
| `darkMode`           | protected |                                                                                                    |            |        | UIAwareElement |
| `onAppConfigChange`  | private   |                                                                                                    |            |        | UIAwareElement |
| `onBreakpointChange` | private   |                                                                                                    |            |        | UIAwareElement |
| `touchScreen`        | protected | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  |            |        | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name              | Declaration    | Module                                                     | Package |
| --------------------------- | ----------------- | -------------- | ---------------------------------------------------------- | ------- |
| `custom-element-definition` | `work-experience` | WorkExperience | packages/components/lib/work/experience/work-experience.ts |         |
| `js`                        | `WorkExperience`  | WorkExperience | packages/components/lib/work/experience/work-experience.ts |         |

# `packages/data/lib/bio/index.ts`:

## Variables

| Name          | Description | Type  |
| ------------- | ----------- | ----- |
| `Biographies` |             | `Bio` |

<hr/>

## Exports

| Kind | Name          | Declaration | Module                         | Package |
| ---- | ------------- | ----------- | ------------------------------ | ------- |
| `js` | `Biographies` | Biographies | packages/data/lib/bio/index.ts |         |

# `packages/data/lib/blog/index.ts`:

## Variables

| Name    | Description | Type              |
| ------- | ----------- | ----------------- |
| `Blogs` |             | `BlogEntryJson[]` |

<hr/>

## Exports

| Kind | Name    | Declaration | Module                          | Package |
| ---- | ------- | ----------- | ------------------------------- | ------- |
| `js` | `Blogs` | Blogs       | packages/data/lib/blog/index.ts |         |

# `packages/data/lib/code/index.ts`:

## Variables

| Name       | Description | Type             |
| ---------- | ----------- | ---------------- |
| `Projects` |             | `CodeRepoData[]` |

<hr/>

## Exports

| Kind | Name       | Declaration | Module                          | Package |
| ---- | ---------- | ----------- | ------------------------------- | ------- |
| `js` | `Projects` | Projects    | packages/data/lib/code/index.ts |         |

# `packages/data/lib/connections/index.ts`:

## Variables

| Name          | Description | Type                                                                                                                                                                                                                                                                                                                               |
| ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Connections` |             | `{
  direct: {
    phone: ConnectionInstance,
    email: ConnectionInstance
  },
  social: {
    linkedIn: ProfessionalConnectionJsonData,
    github: ProfessionalConnectionJsonData,
    medium: ProfessionalConnectionJsonData,
  },
  resume: {
    googleDoc: ArtifactConnectionData,
    pdf: ArtifactConnectionData,
  }
}` |

<hr/>

## Exports

| Kind | Name          | Declaration | Module                                 | Package |
| ---- | ------------- | ----------- | -------------------------------------- | ------- |
| `js` | `Connections` | Connections | packages/data/lib/connections/index.ts |         |

# `packages/data/lib/education/index.ts`:

## Variables

| Name                | Description | Type                           |
| ------------------- | ----------- | ------------------------------ |
| `EducationJsonData` |             | `EducationInstitutionRecord[]` |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                               | Package |
| ---- | ------------------- | ----------------- | ------------------------------------ | ------- |
| `js` | `EducationJsonData` | EducationJsonData | packages/data/lib/education/index.ts |         |

# `packages/data/lib/experience/index.ts`:

## Variables

| Name          | Description | Type           |
| ------------- | ----------- | -------------- |
| `Experiences` |             | `Experience[]` |

<hr/>

## Exports

| Kind | Name          | Declaration | Module                                | Package |
| ---- | ------------- | ----------- | ------------------------------------- | ------- |
| `js` | `Experiences` | Experiences | packages/data/lib/experience/index.ts |         |

# `packages/data/lib/index.ts`:

## Exports

| Kind | Name | Declaration | Module | Package           |
| ---- | ---- | ----------- | ------ | ----------------- |
| `js` | `*`  | \*          |        | @/lib/bio         |
| `js` | `*`  | \*          |        | @/lib/blog        |
| `js` | `*`  | \*          |        | @/lib/code        |
| `js` | `*`  | \*          |        | @/lib/connections |
| `js` | `*`  | \*          |        | @/lib/education   |
| `js` | `*`  | \*          |        | @/lib/experience  |
| `js` | `*`  | \*          |        | @/lib/photo       |
| `js` | `*`  | \*          |        | @/lib/skills      |

# `packages/data/lib/photo/index.ts`:

## Variables

| Name     | Description | Type         |
| -------- | ----------- | ------------ |
| `Photos` |             | `PhotosJson` |

<hr/>

## Exports

| Kind | Name     | Declaration | Module                           | Package |
| ---- | -------- | ----------- | -------------------------------- | ------- |
| `js` | `Photos` | Photos      | packages/data/lib/photo/index.ts |         |

# `packages/data/lib/skills/index.ts`:

## Variables

| Name     | Description | Type     |
| -------- | ----------- | -------- |
| `Skills` |             | `object` |

<hr/>

## Exports

| Kind | Name     | Declaration | Module                            | Package |
| ---- | -------- | ----------- | --------------------------------- | ------- |
| `js` | `Skills` | Skills      | packages/data/lib/skills/index.ts |         |

# `packages/design-tokens/lib/breakpoints.ts`:

## Variables

| Name                            | Description                                        | Type                                                                                           |
| ------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `BREAKPOINT_LABELS`             | Iterable set of BreakpointLabel                    | `BreakpointLabel[]`                                                                            |
| `BreakpointLabels`              | Type-safe constants exposed to perform checks      | `{
  mobile: "mobile" as const,
  tablet: "tablet" as const,
  desktop: "desktop" as const,
}` |
| `BREAKPOINTS`                   | A static implementation of Breakpoints             | `Breakpoints`                                                                                  |
| `CSS_VARIABLE_BREAKPOINT_LABEL` | The CSS Variable changed across device breakpoints | `"--breakpoint-label"`                                                                         |

<hr/>

## Exports

| Kind | Name                            | Declaration                      | Module                                    | Package |
| ---- | ------------------------------- | -------------------------------- | ----------------------------------------- | ------- |
| `js` | `BREAKPOINT_LABELS`             | BREAKPOINT\_LABELS               | packages/design-tokens/lib/breakpoints.ts |         |
| `js` | `BreakpointLabels`              | BreakpointLabels                 | packages/design-tokens/lib/breakpoints.ts |         |
| `js` | `BREAKPOINTS`                   | BREAKPOINTS                      | packages/design-tokens/lib/breakpoints.ts |         |
| `js` | `CSS_VARIABLE_BREAKPOINT_LABEL` | CSS\_VARIABLE\_BREAKPOINT\_LABEL | packages/design-tokens/lib/breakpoints.ts |         |

# `packages/design-tokens/lib/index.ts`:

## Exports

| Kind | Name              | Declaration     | Module                              | Package                                 |
| ---- | ----------------- | --------------- | ----------------------------------- | --------------------------------------- |
| `js` | `*`               | \*              |                                     | @/css/\_material-overrides.css          |
| `js` | `*`               | \*              |                                     | @/css/\_variables.css                   |
| `js` | `*`               | \*              |                                     | @/css/breakpoints.css                   |
| `js` | `*`               | \*              |                                     | @/css/css\_url\_icons.css               |
| `js` | `*`               | \*              |                                     | @/css/css\_url\_icons\_svg.css          |
| `js` | `*`               | \*              |                                     | @/css/data\_image\_svg\_icons.css       |
| `js` | `*`               | \*              |                                     | @/css/data\_image\_svg\_icons\_raw\.css |
| `js` | `*`               | \*              |                                     | @/css/touch-screen.css                  |
| `js` | `Breakpoints`     | Breakpoints     | packages/design-tokens/lib/index.ts |                                         |
| `js` | `readCSSProperty` | readCSSProperty | packages/design-tokens/lib/index.ts |                                         |
| `js` | `TouchScreen`     | TouchScreen     | packages/design-tokens/lib/index.ts |                                         |

# `packages/design-tokens/lib/read-css-property.ts`:

## Functions

| Name              | Description                                | Parameters                                                                                         | Return |
| ----------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------- | ------ |
| `readCSSProperty` | Returns the value of the provided property | `property: string, element: HTMLElement\|null\|undefined, logComputedPropertyTransaction: boolean` |        |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                          | Package |
| ---- | ----------------- | --------------- | ----------------------------------------------- | ------- |
| `js` | `readCSSProperty` | readCSSProperty | packages/design-tokens/lib/read-css-property.ts |         |

# `packages/design-tokens/lib/touch-screen.ts`:

## Variables

| Name                        | Description                                                                    | Type     |
| --------------------------- | ------------------------------------------------------------------------------ | -------- |
| `CSS_VARIABLE_TOUCH_SCREEN` | The CSS Variable set by \`@media\` query of \`screen\` and \`pointer: coarse\` | `string` |

<hr/>

## Exports

| Kind | Name                        | Declaration                  | Module                                     | Package |
| ---- | --------------------------- | ---------------------------- | ------------------------------------------ | ------- |
| `js` | `CSS_VARIABLE_TOUCH_SCREEN` | CSS\_VARIABLE\_TOUCH\_SCREEN | packages/design-tokens/lib/touch-screen.ts |         |

# `packages/services/lib/configs/index.ts`:

## Variables

| Name             | Description | Type             |
| ---------------- | ----------- | ---------------- |
| `configsService` |             | `ConfigsService` |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                 | Package |
| ---- | ---------------- | -------------- | -------------------------------------- | ------- |
| `js` | `configsService` | configsService | packages/services/lib/configs/index.ts |         |

# `packages/services/lib/index.ts`:

## Exports

| Kind | Name | Declaration | Module | Package       |
| ---- | ---- | ----------- | ------ | ------------- |
| `js` | `*`  | \*          |        | @/lib/configs |
| `js` | `*`  | \*          |        | @/lib/storage |
| `js` | `*`  | \*          |        | @/lib/theme   |

# `packages/services/lib/storage/index.ts`:

## Variables

| Name             | Description | Type             |
| ---------------- | ----------- | ---------------- |
| `storageService` |             | `StorageService` |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                 | Package |
| ---- | ---------------- | -------------- | -------------------------------------- | ------- |
| `js` | `storageService` | storageService | packages/services/lib/storage/index.ts |         |

# `packages/services/lib/theme/chicago/index.ts`:

## Variables

| Name                 | Description | Type          |
| -------------------- | ----------- | ------------- |
| `ChicagoThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                       | Package |
| ---- | -------------------- | ------------------ | -------------------------------------------- | ------- |
| `js` | `ChicagoThemeConfig` | ChicagoThemeConfig | packages/services/lib/theme/chicago/index.ts |         |

# `packages/services/lib/theme/index.ts`:

## Variables

| Name                    | Description | Type            |
| ----------------------- | ----------- | --------------- |
| `MaterialCSSStyleSheet` |             | `CSSStyleSheet` |
| `name`                  |             |                 |
| `THEME_CONFIGS`         |             | `ThemeConfigs`  |
| `themeService`          |             | `ThemeService`  |

<hr/>

## Functions

| Name                                     | Description | Parameters                                | Return               |
| ---------------------------------------- | ----------- | ----------------------------------------- | -------------------- |
| `colorSchemeConfigsToMaterialSchemeName` |             | `colorSchemeSettings: ColorSchemeConfigs` | `MaterialSchemeName` |
| `onThemeChange`                          |             | `event: MediaQueryListEvent`              |                      |

<hr/>

## Exports

| Kind | Name                                     | Declaration                            | Module                               | Package             |
| ---- | ---------------------------------------- | -------------------------------------- | ------------------------------------ | ------------------- |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/chicago |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/inter   |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/red     |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/sunset  |
| `js` | `*`                                      | \*                                     |                                      | @/lib/theme/utils   |
| `js` | `colorSchemeConfigsToMaterialSchemeName` | colorSchemeConfigsToMaterialSchemeName | packages/services/lib/theme/index.ts |                     |
| `js` | `MaterialCSSStyleSheet`                  | MaterialCSSStyleSheet                  | packages/services/lib/theme/index.ts |                     |
| `js` | `onThemeChange`                          | onThemeChange                          | packages/services/lib/theme/index.ts |                     |
| `js` | `THEME_CONFIGS`                          | THEME\_CONFIGS                         | packages/services/lib/theme/index.ts |                     |
| `js` | `themeService`                           | themeService                           | packages/services/lib/theme/index.ts |                     |

# `packages/services/lib/theme/inter/index.ts`:

## Variables

| Name               | Description | Type          |
| ------------------ | ----------- | ------------- |
| `InterThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name               | Declaration      | Module                                     | Package |
| ---- | ------------------ | ---------------- | ------------------------------------------ | ------- |
| `js` | `InterThemeConfig` | InterThemeConfig | packages/services/lib/theme/inter/index.ts |         |

# `packages/services/lib/theme/red/index.ts`:

## Variables

| Name             | Description | Type          |
| ---------------- | ----------- | ------------- |
| `RedThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                   | Package |
| ---- | ---------------- | -------------- | ---------------------------------------- | ------- |
| `js` | `RedThemeConfig` | RedThemeConfig | packages/services/lib/theme/red/index.ts |         |

# `packages/services/lib/theme/sunset/index.ts`:

## Variables

| Name                | Description | Type          |
| ------------------- | ----------- | ------------- |
| `SunsetThemeConfig` |             | `ThemeConfig` |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                      | Package |
| ---- | ------------------- | ----------------- | ------------------------------------------- | ------- |
| `js` | `SunsetThemeConfig` | SunsetThemeConfig | packages/services/lib/theme/sunset/index.ts |         |

# `packages/services/lib/theme/utils.ts`:

## Functions

| Name                        | Description                                                                                                           | Parameters                                                       | Return |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------ |
| `colorSchemeContrastToIcon` |                                                                                                                       | `slot: "start" \| "leading-icon", contrast: ColorSchemeContrast` |        |
| `jsonIsThemeJsonSchemes`    | Checks if the provided JSON conforms to the expected theme schemes structure                                          | `json: unknown`                                                  |        |
| `keyTransform`              | Converts jsonKey and corresponding rgb value into a CSS custom property&#xA;  via lit!css and lit!unsafeCSS functions | `jsonKey: string, rgb: string`                                   | `lit!` |
| `readScheme`                | Reads a \`.json\` defined object and produces a lit!CSSResult                                                         | `jsonSchema: object`                                             | `lit!` |

<hr/>

## Exports

| Kind | Name                        | Declaration               | Module                               | Package |
| ---- | --------------------------- | ------------------------- | ------------------------------------ | ------- |
| `js` | `colorSchemeContrastToIcon` | colorSchemeContrastToIcon | packages/services/lib/theme/utils.ts |         |
| `js` | `jsonIsThemeJsonSchemes`    | jsonIsThemeJsonSchemes    | packages/services/lib/theme/utils.ts |         |
| `js` | `keyTransform`              | keyTransform              | packages/services/lib/theme/utils.ts |         |
| `js` | `readScheme`                | readScheme                | packages/services/lib/theme/utils.ts |         |

# `packages/types/lib/code/index.ts`:

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
| `js` | `CSS_PROPERTY_CODE_REPO_WORD_TAG_SIZE` | CSS\_PROPERTY\_CODE\_REPO\_WORD\_TAG\_SIZE | packages/types/lib/code/index.ts |         |
| `js` | `WORD_TAG_SIZES`                       | WORD\_TAG\_SIZES                           | packages/types/lib/code/index.ts |         |

# `packages/types/lib/configs/index.ts`:

## Variables

| Name                  | Description | Type                                                                                                                                                                                  |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DEFAULT_APP_CONFIGS` |             | `{
  colorScheme: {
    theme: THEME_NAMES.sunset,
    name: CONFIG_COLOR_SCHEME_NAMES.SYSTEM,
    contrast: CONFIG_COLOR_CONTRAST_NAMES.NORMAL,
    persist: false,
  } as const,
}` |

<hr/>

## Exports

| Kind | Name                  | Declaration           | Module                              | Package |
| ---- | --------------------- | --------------------- | ----------------------------------- | ------- |
| `js` | `DEFAULT_APP_CONFIGS` | DEFAULT\_APP\_CONFIGS | packages/types/lib/configs/index.ts |         |

# `packages/types/lib/connections/index.ts`:

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
| `js` | `ArtifactConnections`         | ArtifactConnections         | packages/types/lib/connections/index.ts |         |
| `js` | `ProfessionalConnectionTypes` | ProfessionalConnectionTypes | packages/types/lib/connections/index.ts |         |

# `packages/types/lib/index.ts`:

## Exports

| Kind | Name | Declaration | Module | Package             |
| ---- | ---- | ----------- | ------ | ------------------- |
| `js` | `*`  | \*          |        | @/lib/bio           |
| `js` | `*`  | \*          |        | @/lib/blog          |
| `js` | `*`  | \*          |        | @/lib/code          |
| `js` | `*`  | \*          |        | @/lib/configs       |
| `js` | `*`  | \*          |        | @/lib/connections   |
| `js` | `*`  | \*          |        | @/lib/design-tokens |
| `js` | `*`  | \*          |        | @/lib/education     |
| `js` | `*`  | \*          |        | @/lib/experience    |
| `js` | `*`  | \*          |        | @/lib/theme         |

# `packages/types/lib/theme/index.ts`:

## Variables

| Name                          | Description | Type                                                                                                                                                  |
| ----------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CONFIG_COLOR_CONTRAST_NAMES` |             | `{
  NORMAL: "NORMAL" as const,
  MEDIUM: "MEDIUM" as const,
  HIGH: "HIGH" as const,
}`                                                              |
| `CONFIG_COLOR_SCHEME_NAMES`   |             | `{
  DARK: "DARK" as const,
  LIGHT: "LIGHT" as const,
  SYSTEM: "SYSTEM" as const,
}`                                                                |
| `THEME_NAMES`                 |             | `{
  chicago: "chicago" as const,
  inter: "inter" as const,
  red: "red" as const,
  // skyline: "skyline" as const,
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
| `js` | `CONFIG_COLOR_CONTRAST_NAMES` | CONFIG\_COLOR\_CONTRAST\_NAMES | packages/types/lib/theme/index.ts |         |
| `js` | `CONFIG_COLOR_SCHEME_NAMES`   | CONFIG\_COLOR\_SCHEME\_NAMES   | packages/types/lib/theme/index.ts |         |
| `js` | `MaterialSymbol`              | MaterialSymbol                 | material-symbols                  |         |
| `js` | `setRGBA`                     | setRGBA                        | packages/types/lib/theme/index.ts |         |
| `js` | `THEME_NAMES`                 | THEME\_NAMES                   | packages/types/lib/theme/index.ts |         |
