# `src/components/bento-layout/bento-layout.styles.ts`:

## Variables

| Name                | Description                                                          | Type |
| ------------------- | -------------------------------------------------------------------- | ---- |
| `BentoLayoutStyles` |                                                                      |      |
| `TransitionStyles`  | Standardized transition animations for page loads and state changes. |      |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                             | Package |
| ---- | ------------------- | ----------------- | -------------------------------------------------- | ------- |
| `js` | `BentoLayoutStyles` | BentoLayoutStyles | src/components/bento-layout/bento-layout.styles.ts |         |
| `js` | `TransitionStyles`  | TransitionStyles  | src/components/bento-layout/bento-layout.styles.ts |         |

# `dist/out/components/bento-layout/bento-layout.js`:

## class: `BentoLayout`, `bento-layout`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `_bentoBoxConfigs`   | private   | `ABentoBoxConfig[]`      |                                                                |                                                                                                    |                |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

### Methods

| Name             | Privacy | Description | Parameters                | Return           | Inherited From |
| ---------------- | ------- | ----------- | ------------------------- | ---------------- | -------------- |
| `renderBentoBox` | private |             | `config: ABentoBoxConfig` | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name           | Declaration | Module                                      | Package |
| --------------------------- | -------------- | ----------- | ------------------------------------------- | ------- |
| `custom-element-definition` | `bento-layout` | BentoLayout | src/components/bento-layout/bento-layout.ts |         |
| `js`                        | `BentoLayout`  | BentoLayout | src/components/bento-layout/bento-layout.ts |         |

# `src/components/bento-layout/bento-layout.types.ts`:

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

| Name               | Description                                                                                                                                                     | Parameters                    | Return              |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------- |
| `BentoBoxConfigs`  | Produces an array of ABentoBoxConfig instances sorted for proper DOM order.                                                                                     | `breakpoint: BreakpointLabel` | `ABentoBoxConfig[]` |
| `getBentoDOMOrder` | Determines the logical DOM order for bento box types based on grid placement.&#xA;Reading order follows Top-to-Bottom, then Start-to-End (Leading-to-Trailing). | `breakpoint: BreakpointLabel` |                     |

<hr/>

## Exports

| Kind | Name               | Declaration        | Module                                            | Package |
| ---- | ------------------ | ------------------ | ------------------------------------------------- | ------- |
| `js` | `BENTO_BOX_CONFIG` | BENTO\_BOX\_CONFIG | src/components/bento-layout/bento-layout.types.ts |         |
| `js` | `BENTO_BOX_TYPES`  | BENTO\_BOX\_TYPES  | src/components/bento-layout/bento-layout.types.ts |         |
| `js` | `BentoBoxConfigs`  | BentoBoxConfigs    | src/components/bento-layout/bento-layout.types.ts |         |
| `js` | `getBentoDOMOrder` | getBentoDOMOrder   | src/components/bento-layout/bento-layout.types.ts |         |

# `src/components/blog/entry/blog-entry.styles.ts`:

## Variables

| Name              | Description | Type        |
| ----------------- | ----------- | ----------- |
| `BlogEntryStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                         | Package |
| ---- | ----------------- | --------------- | ---------------------------------------------- | ------- |
| `js` | `BlogEntryStyles` | BlogEntryStyles | src/components/blog/entry/blog-entry.styles.ts |         |

# `dist/out/components/blog/entry/blog-entry.js`:

## class: `BlogEntry`, `blog-entry`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name        | Privacy | Type            | Default | Description               | Inherited From |
| ----------- | ------- | --------------- | ------- | ------------------------- | -------------- |
| `blogEntry` |         | `BlogEntryJson` | `{}`    | The JSON record to render |                |

### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `blogEntry` | blogEntry |                |

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

| Kind                        | Name         | Declaration | Module                                  | Package |
| --------------------------- | ------------ | ----------- | --------------------------------------- | ------- |
| `custom-element-definition` | `blog-entry` | BlogEntry   | src/components/blog/entry/blog-entry.ts |         |
| `js`                        | `BlogEntry`  | BlogEntry   | src/components/blog/entry/blog-entry.ts |         |

# `src/components/card/bento/bento-card.styles.ts`:

## Variables

| Name              | Description | Type |
| ----------------- | ----------- | ---- |
| `BentoCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                         | Package |
| ---- | ----------------- | --------------- | ---------------------------------------------- | ------- |
| `js` | `BentoCardStyles` | BentoCardStyles | src/components/card/bento/bento-card.styles.ts |         |

# `dist/out/components/card/bento/bento-card.js`:

## class: `BentoCard`, `bento-card`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name             | Privacy | Type           | Default | Description                                                                     | Inherited From |
| ---------------- | ------- | -------------- | ------- | ------------------------------------------------------------------------------- | -------------- |
| `bentoCardTitle` |         | `string`       | `""`    | An optional \`string\` which, when set, suppresses the \`slot\[name="header"]\` |                |
| `bentoTag`       |         | `BentoBoxType` |         | Uniquely identifies this \`BentoCard\` via BENTO\_BOX\_TYPES                    |                |
| `enableFocus`    |         | `boolean`      | `false` | Opt-in to the focus-within border/shadow shift effect.                          |                |
| `enableHover`    |         | `boolean`      | `false` | Opt-in to the hover elevation/shift effect.                                     |                |
| `expanded`       |         | `boolean`      | `false` | Reflects and controls the open state of the card.                               |                |
| `scrollable`     |         | `boolean`      | `false` | Enables internal vertical scrolling for content.                                |                |
| `spreadContent`  |         | `boolean`      | `false` | Whether to spread content over the entire body                                  |                |

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

| Kind                        | Name         | Declaration | Module                                  | Package |
| --------------------------- | ------------ | ----------- | --------------------------------------- | ------- |
| `custom-element-definition` | `bento-card` | BentoCard   | src/components/card/bento/bento-card.ts |         |
| `js`                        | `BentoCard`  | BentoCard   | src/components/card/bento/bento-card.ts |         |

# `src/components/card/blog/blog-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `BlogCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                       | Package |
| ---- | ---------------- | -------------- | -------------------------------------------- | ------- |
| `js` | `BlogCardStyles` | BlogCardStyles | src/components/card/blog/blog-card.styles.ts |         |

# `dist/out/components/card/blog/blog-card.js`:

## class: `BlogCard`, `blog-card`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type      | Default | Description | Inherited From |
| ------------- | ------- | --------- | ------- | ----------- | -------------- |
| `enableFocus` |         | `boolean` | `false` |             |                |
| `enableHover` |         | `boolean` | `false` |             |                |
| `expanded`    |         | `boolean` | `false` |             |                |

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

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `custom-element-definition` | `blog-card` | BlogCard    | src/components/card/blog/blog-card.ts |         |
| `js`                        | `BlogCard`  | BlogCard    | src/components/card/blog/blog-card.ts |         |

# `src/components/card/code/code-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `CodeCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                       | Package |
| ---- | ---------------- | -------------- | -------------------------------------------- | ------- |
| `js` | `CodeCardStyles` | CodeCardStyles | src/components/card/code/code-card.styles.ts |         |

# `dist/out/components/card/code/code-card.js`:

## class: `CodeCard`, `code-card`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type      | Default | Description | Inherited From |
| ------------- | ------- | --------- | ------- | ----------- | -------------- |
| `enableFocus` |         | `boolean` | `false` |             |                |
| `enableHover` |         | `boolean` | `false` |             |                |
| `expanded`    |         | `boolean` | `false` |             |                |

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

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `custom-element-definition` | `code-card` | CodeCard    | src/components/card/code/code-card.ts |         |
| `js`                        | `CodeCard`  | CodeCard    | src/components/card/code/code-card.ts |         |

# `src/components/card/education/education-card.styles.ts`:

## Variables

| Name                  | Description | Type |
| --------------------- | ----------- | ---- |
| `EducationCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                                                 | Package |
| ---- | --------------------- | ------------------- | ------------------------------------------------------ | ------- |
| `js` | `EducationCardStyles` | EducationCardStyles | src/components/card/education/education-card.styles.ts |         |

# `dist/out/components/card/education/education-card.js`:

## class: `EducationCard`, `education-card`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name                 | Privacy | Type                           | Default             | Description | Inherited From |
| -------------------- | ------- | ------------------------------ | ------------------- | ----------- | -------------- |
| `_educationJsonData` |         | `EducationInstitutionRecord[]` | `EducationJsonData` |             |                |
| `enableFocus`        |         | `boolean`                      | `false`             |             |                |
| `enableHover`        |         | `boolean`                      | `false`             |             |                |
| `expanded`           |         | `boolean`                      | `false`             |             |                |

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

| Kind                        | Name             | Declaration   | Module                                          | Package |
| --------------------------- | ---------------- | ------------- | ----------------------------------------------- | ------- |
| `custom-element-definition` | `education-card` | EducationCard | src/components/card/education/education-card.ts |         |
| `js`                        | `EducationCard`  | EducationCard | src/components/card/education/education-card.ts |         |

# `src/components/card/experience/experience-card.styles.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `WorkCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                                   | Package |
| ---- | ---------------- | -------------- | -------------------------------------------------------- | ------- |
| `js` | `WorkCardStyles` | WorkCardStyles | src/components/card/experience/experience-card.styles.ts |         |

# `dist/out/components/card/experience/experience-card.js`:

## class: `ExperienceCard`, `experience-card`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type      | Default | Description | Inherited From |
| ------------- | ------- | --------- | ------- | ----------- | -------------- |
| `enableFocus` |         | `boolean` | `false` |             |                |
| `enableHover` |         | `boolean` | `false` |             |                |
| `expanded`    |         | `boolean` | `false` |             |                |

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

| Kind                        | Name              | Declaration    | Module                                            | Package |
| --------------------------- | ----------------- | -------------- | ------------------------------------------------- | ------- |
| `custom-element-definition` | `experience-card` | ExperienceCard | src/components/card/experience/experience-card.ts |         |
| `js`                        | `ExperienceCard`  | ExperienceCard | src/components/card/experience/experience-card.ts |         |

# `src/components/card/now-playing/now-playing-card.styles.ts`:

## Variables

| Name                   | Description | Type |
| ---------------------- | ----------- | ---- |
| `NowPlayingCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name                   | Declaration          | Module                                                     | Package |
| ---- | ---------------------- | -------------------- | ---------------------------------------------------------- | ------- |
| `js` | `NowPlayingCardStyles` | NowPlayingCardStyles | src/components/card/now-playing/now-playing-card.styles.ts |         |

# `dist/out/components/card/now-playing/now-playing-card.js`:

## class: `NowPlayingCard`, `now-playing-card`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type      | Default | Description | Inherited From |
| ------------- | ------- | --------- | ------- | ----------- | -------------- |
| `enableFocus` |         | `boolean` | `false` |             |                |
| `enableHover` |         | `boolean` | `false` |             |                |
| `expanded`    |         | `boolean` | `false` |             |                |

### Attributes

| Name          | Field       | Inherited From |
| ------------- | ----------- | -------------- |
| `enableFocus` | enableFocus |                |
| `enableHover` | enableHover |                |
| `expanded`    | expanded    |                |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                     | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                        | Inherited From |
| -------------------- | --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | -------------- |
| `_trackTask`         | private   |                          | `new Task<[], TrackData>(this, { task: async () => { // In development, you might point this to your local Firebase Emulator URL. // E.g. "http://127.0.0.1:5001/YOUR_PROJECT/us-east1/nowplaying" // In production, we'll configure a rewrite or use the direct CF URL. const functionUrl = import.meta.env.DEV ? "http://127.0.0.1:5001/nowplaying" : "/nowplaying"; const response = await fetch(functionUrl); if (!response.ok) { throw new Error("Failed to fetch track data"); } return response.json(); }, args: () => [] })` |                                                                                                    |                |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                    | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name               | Declaration    | Module                                              | Package |
| --------------------------- | ------------------ | -------------- | --------------------------------------------------- | ------- |
| `custom-element-definition` | `now-playing-card` | NowPlayingCard | src/components/card/now-playing/now-playing-card.ts |         |
| `js`                        | `NowPlayingCard`   | NowPlayingCard | src/components/card/now-playing/now-playing-card.ts |         |

# `src/components/card/profile/profile-card.styles.ts`:

## Variables

| Name                | Description | Type        |
| ------------------- | ----------- | ----------- |
| `ProfileCardStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                | Declaration       | Module                                             | Package |
| ---- | ------------------- | ----------------- | -------------------------------------------------- | ------- |
| `js` | `ProfileCardStyles` | ProfileCardStyles | src/components/card/profile/profile-card.styles.ts |         |

# `dist/out/components/card/profile/profile-card.js`:

## class: `ProfileCard`, `profile-card`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type      | Default                                                  | Description | Inherited From |
| ------------- | ------- | --------- | -------------------------------------------------------- | ----------- | -------------- |
| `bioText`     |         | `string`  |                                                          |             |                |
| `enableFocus` |         | `boolean` | `false`                                                  |             |                |
| `enableHover` |         | `boolean` | `false`                                                  |             |                |
| `expanded`    |         | `boolean` | `false`                                                  |             |                |
| `photoData`   |         |           | `Photos[configsService.loadConfigs().colorScheme.theme]` |             |                |

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

| Kind                        | Name           | Declaration | Module                                      | Package |
| --------------------------- | -------------- | ----------- | ------------------------------------------- | ------- |
| `custom-element-definition` | `profile-card` | ProfileCard | src/components/card/profile/profile-card.ts |         |
| `js`                        | `ProfileCard`  | ProfileCard | src/components/card/profile/profile-card.ts |         |

# `src/components/card/settings/settings-card.styles.ts`:

## Variables

| Name                 | Description | Type        |
| -------------------- | ----------- | ----------- |
| `SettingsCardStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                               | Package |
| ---- | -------------------- | ------------------ | ---------------------------------------------------- | ------- |
| `js` | `SettingsCardStyles` | SettingsCardStyles | src/components/card/settings/settings-card.styles.ts |         |

# `dist/out/components/card/settings/settings-card.js`:

## class: `SettingsCard`, `settings-card`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type      | Default | Description | Inherited From |
| ------------- | ------- | --------- | ------- | ----------- | -------------- |
| `enableFocus` |         | `boolean` | `false` |             |                |
| `enableHover` |         | `boolean` | `false` |             |                |
| `expanded`    |         | `boolean` | `false` |             |                |

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
| `_appConfigs`        | private   | `AppConfigs`             |                                                                |                                                                                                    |                |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigsChange` | private   |                          |                                                                |                                                                                                    |                |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

### Methods

| Name                         | Privacy | Description | Parameters                               | Return | Inherited From |
| ---------------------------- | ------- | ----------- | ---------------------------------------- | ------ | -------------- |
| `_dispatchColorSchemeChange` | private |             | `colorScheme: AppConfigs["colorScheme"]` |        |                |
| `_onContrastChange`          | private |             | `event: Event`                           |        |                |
| `_onThemeChange`             | private |             | `event: Event`                           |        |                |

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
| `SkillsCardStyles` |             |      |

<hr/>

## Exports

| Kind | Name               | Declaration      | Module                                           | Package |
| ---- | ------------------ | ---------------- | ------------------------------------------------ | ------- |
| `js` | `SkillsCardStyles` | SkillsCardStyles | src/components/card/skills/skills-card.styles.ts |         |

# `dist/out/components/card/skills/skills-card.js`:

## class: `SkillsCard`, `skills-card`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name          | Privacy | Type      | Default | Description | Inherited From |
| ------------- | ------- | --------- | ------- | ----------- | -------------- |
| `enableFocus` |         | `boolean` | `false` |             |                |
| `enableHover` |         | `boolean` | `false` |             |                |
| `expanded`    |         | `boolean` | `false` |             |                |

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

| Kind                        | Name          | Declaration | Module                                    | Package |
| --------------------------- | ------------- | ----------- | ----------------------------------------- | ------- |
| `custom-element-definition` | `skills-card` | SkillsCard  | src/components/card/skills/skills-card.ts |         |
| `js`                        | `SkillsCard`  | SkillsCard  | src/components/card/skills/skills-card.ts |         |

# `src/components/code/repo/code-repo.styles.ts`:

## Variables

| Name             | Description                                         | Type        |
| ---------------- | --------------------------------------------------- | ----------- |
| `CodeRepoStyles` | The CSSResult for @fnc314/fnc314.github.io!CodeRepo | `CSSResult` |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                                       | Package |
| ---- | ---------------- | -------------- | -------------------------------------------- | ------- |
| `js` | `CodeRepoStyles` | CodeRepoStyles | src/components/code/repo/code-repo.styles.ts |         |

# `dist/out/components/code/repo/code-repo.js`:

## class: `CodeRepo`, `code-repo`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name       | Privacy | Type           | Default | Description                                   | Inherited From |
| ---------- | ------- | -------------- | ------- | --------------------------------------------- | -------------- |
| `codeRepo` |         | `CodeRepoData` | `{}`    | An instance of {@link CodeRepoData} to render |                |

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

| Kind                        | Name        | Declaration | Module                                | Package |
| --------------------------- | ----------- | ----------- | ------------------------------------- | ------- |
| `custom-element-definition` | `code-repo` | CodeRepo    | src/components/code/repo/code-repo.ts |         |
| `js`                        | `CodeRepo`  | CodeRepo    | src/components/code/repo/code-repo.ts |         |

# `src/components/connection/artifact/artifact-connection.styles.ts`:

## Variables

| Name                       | Description | Type        |
| -------------------------- | ----------- | ----------- |
| `ConnectionArtifactStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                       | Declaration              | Module                                                           | Package |
| ---- | -------------------------- | ------------------------ | ---------------------------------------------------------------- | ------- |
| `js` | `ConnectionArtifactStyles` | ConnectionArtifactStyles | src/components/connection/artifact/artifact-connection.styles.ts |         |

# `dist/out/components/connection/artifact/artifact-connection.js`:

## class: `ArtifactConnection`, `artifact-connection`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name                     | Privacy | Type                     | Default | Description | Inherited From |
| ------------------------ | ------- | ------------------------ | ------- | ----------- | -------------- |
| `artifactConnectionData` |         | `ArtifactConnectionData` | `{}`    |             |                |
| `artifactConnectionType` |         | `ArtifactConnectionType` | `""`    |             |                |

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

| Kind                        | Name                  | Declaration        | Module                                                    | Package |
| --------------------------- | --------------------- | ------------------ | --------------------------------------------------------- | ------- |
| `custom-element-definition` | `artifact-connection` | ArtifactConnection | src/components/connection/artifact/artifact-connection.ts |         |
| `js`                        | `ArtifactConnection`  | ArtifactConnection | src/components/connection/artifact/artifact-connection.ts |         |

# `src/components/connection/direct/direct-connection.styles.ts`:

## Variables

| Name                     | Description | Type        |
| ------------------------ | ----------- | ----------- |
| `DirectConnectionStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                     | Declaration            | Module                                                       | Package |
| ---- | ------------------------ | ---------------------- | ------------------------------------------------------------ | ------- |
| `js` | `DirectConnectionStyles` | DirectConnectionStyles | src/components/connection/direct/direct-connection.styles.ts |         |

# `dist/out/components/connection/direct/direct-connection.js`:

## class: `DirectConnection`, `direct-connection`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name                 | Privacy | Type                 | Default | Description | Inherited From |
| -------------------- | ------- | -------------------- | ------- | ----------- | -------------- |
| `connectionInstance` |         | `ConnectionInstance` | `{}`    |             |                |

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

| Kind                        | Name                | Declaration      | Module                                                | Package |
| --------------------------- | ------------------- | ---------------- | ----------------------------------------------------- | ------- |
| `custom-element-definition` | `direct-connection` | DirectConnection | src/components/connection/direct/direct-connection.ts |         |
| `js`                        | `DirectConnection`  | DirectConnection | src/components/connection/direct/direct-connection.ts |         |

# `src/components/connection/professional/professional-connection.styles.ts`:

## Variables

| Name                           | Description | Type        |
| ------------------------------ | ----------- | ----------- |
| `ProfessionalConnectionStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                           | Declaration                  | Module                                                                   | Package |
| ---- | ------------------------------ | ---------------------------- | ------------------------------------------------------------------------ | ------- |
| `js` | `ProfessionalConnectionStyles` | ProfessionalConnectionStyles | src/components/connection/professional/professional-connection.styles.ts |         |

# `dist/out/components/connection/professional/professional-connection.js`:

## class: `ProfessionalConnection`, `professional-connection`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name                         | Privacy | Type                             | Default | Description | Inherited From |
| ---------------------------- | ------- | -------------------------------- | ------- | ----------- | -------------- |
| `professionalConnectionData` |         | `ProfessionalConnectionJsonData` | `{}`    |             |                |
| `professionalConnectionType` |         | `ProfessionalConnectionType`     | `""`    |             |                |

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

| Kind                        | Name                      | Declaration            | Module                                                            | Package |
| --------------------------- | ------------------------- | ---------------------- | ----------------------------------------------------------------- | ------- |
| `custom-element-definition` | `professional-connection` | ProfessionalConnection | src/components/connection/professional/professional-connection.ts |         |
| `js`                        | `ProfessionalConnection`  | ProfessionalConnection | src/components/connection/professional/professional-connection.ts |         |

# `src/components/education/institution/education-institution.styles.ts`:

## Variables

| Name                         | Description | Type        |
| ---------------------------- | ----------- | ----------- |
| `EducationInstitutionStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                         | Declaration                | Module                                                               | Package |
| ---- | ---------------------------- | -------------------------- | -------------------------------------------------------------------- | ------- |
| `js` | `EducationInstitutionStyles` | EducationInstitutionStyles | src/components/education/institution/education-institution.styles.ts |         |

# `dist/out/components/education/institution/education-institution.js`:

## class: `EducationInstitution`, `education-institution`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name        | Privacy | Type                         | Default | Description | Inherited From |
| ----------- | ------- | ---------------------------- | ------- | ----------- | -------------- |
| `institute` |         | `EducationInstitutionRecord` | `{}`    |             |                |

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

| Kind                        | Name                    | Declaration          | Module                                                        | Package |
| --------------------------- | ----------------------- | -------------------- | ------------------------------------------------------------- | ------- |
| `custom-element-definition` | `education-institution` | EducationInstitution | src/components/education/institution/education-institution.ts |         |
| `js`                        | `EducationInstitution`  | EducationInstitution | src/components/education/institution/education-institution.ts |         |

# `src/components/ui-mode-toggle/ui-mode-toggle.styles.ts`:

## Variables

| Name                 | Description | Type        |
| -------------------- | ----------- | ----------- |
| `UIModeToggleStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                 | Declaration        | Module                                                 | Package |
| ---- | -------------------- | ------------------ | ------------------------------------------------------ | ------- |
| `js` | `UIModeToggleStyles` | UIModeToggleStyles | src/components/ui-mode-toggle/ui-mode-toggle.styles.ts |         |

# `dist/out/components/ui-mode-toggle/ui-mode-toggle.js`:

## class: `UiModeToggle`, `ui-mode-toggle`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name        | Privacy | Type                            | Default    | Description                                                                         | Inherited From |
| ----------- | ------- | ------------------------------- | ---------- | ----------------------------------------------------------------------------------- | -------------- |
| `mode`      |         | `"light" \| "dark" \| "system"` | `"system"` | Reflects the currently active color scheme mode.                                    |                |
| `permanent` |         | `boolean`                       | `false`    | Controls whether the selected color scheme preference is persisted across sessions. |                |

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

| Name                                | Privacy   | Type                     | Default                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Inherited From |
| ----------------------------------- | --------- | ------------------------ | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `_appConfigs`                       | private   | `AppConfigs`             |                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |
| `_darkModeToggle`                   | private   | `DarkModeToggle`         |                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |
| `_ready`                            | private   | `boolean`                | `false`                                                        | Guards against the synthetic \`colorschemechange\` / \`permanentcolorscheme\`&#xA;  events that \`dark-mode-toggle\` dispatches at the end of its&#xA;  \`connectedCallback\` (which runs \*during\* this element's first render).&#xA;  Reacting to that echo would mutate reactive state mid-update — triggering&#xA;  Lit's \`change-in-update\` warning — and would clobber a \`SYSTEM\` preference&#xA;  with the resolved light/dark value. We only honor these events once the&#xA;  first render has completed (i.e. after a genuine user toggle). |                |
| `breakpoint`                        | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS                                                                                                                                                                                                                                                                                                                                                                                                                                                         | UIAwareElement |
| `colorSchemeChangeEventListener`    | private   |                          |                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |
| `darkMode`                          | protected |                          |                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | UIAwareElement |
| `onAppConfigChange`                 | private   | `(event: Event) => void` |                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | UIAwareElement |
| `onAppConfigsChange`                | private   |                          |                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |
| `onBreakpointChange`                | private   | `() => void`             |                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | UIAwareElement |
| `permanentColorSchemeEventListener` | private   |                          |                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                |
| `touchScreen`                       | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                                                                                                                                                                                                                                                                                                                                                                                                                                                          | UIAwareElement |

### Methods

| Name                             | Privacy | Description | Parameters                               | Return | Inherited From |
| -------------------------------- | ------- | ----------- | ---------------------------------------- | ------ | -------------- |
| `onColorThemeModeContrastChange` | private |             | `colorScheme: AppConfigs["colorScheme"]` |        |                |

</details>

<hr/>

## Exports

| Kind                        | Name             | Declaration  | Module                                          | Package |
| --------------------------- | ---------------- | ------------ | ----------------------------------------------- | ------- |
| `custom-element-definition` | `ui-mode-toggle` | UiModeToggle | src/components/ui-mode-toggle/ui-mode-toggle.ts |         |
| `js`                        | `UiModeToggle`   | UiModeToggle | src/components/ui-mode-toggle/ui-mode-toggle.ts |         |

# `dist/out/components/version-tag/version-tag.js`:

## class: `VersionTag`, `version-tag`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

<details><summary>Private API</summary>

### Fields

| Name                 | Privacy   | Type                     | Default                                                        | Description                                                                                                              | Inherited From |
| -------------------- | --------- | ------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `breakpoint`         | protected | `BreakpointLabel`        | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS                       | UIAwareElement |
| `darkMode`           | protected |                          |                                                                |                                                                                                                          | UIAwareElement |
| `formattedDate`      | private   | `string`                 |                                                                | Creates an Intl.DateTimeFormat and calls Intl.DateTimeFormat.format&#xA;  on time to render the user presented timestamp |                |
| `onAppConfigChange`  | private   | `(event: Event) => void` |                                                                |                                                                                                                          | UIAwareElement |
| `onBreakpointChange` | private   | `() => void`             |                                                                |                                                                                                                          | UIAwareElement |
| `touchScreen`        | protected | `boolean`                |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,                        | UIAwareElement |

</details>

<hr/>

## Exports

| Kind                        | Name          | Declaration | Module                                    | Package |
| --------------------------- | ------------- | ----------- | ----------------------------------------- | ------- |
| `custom-element-definition` | `version-tag` | VersionTag  | src/components/version-tag/version-tag.ts |         |
| `js`                        | `VersionTag`  | VersionTag  | src/components/version-tag/version-tag.ts |         |

# `src/components/word/cloud/word-cloud.styles.ts`:

## Variables

| Name              | Description | Type        |
| ----------------- | ----------- | ----------- |
| `WordCloudStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name              | Declaration     | Module                                         | Package |
| ---- | ----------------- | --------------- | ---------------------------------------------- | ------- |
| `js` | `WordCloudStyles` | WordCloudStyles | src/components/word/cloud/word-cloud.styles.ts |         |

# `dist/out/components/word/cloud/word-cloud.js`:

## class: `WordCloud`, `word-cloud`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

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

| Name                    | Privacy   | Type                                | Default                                                        | Description                                                                                        | Inherited From |
| ----------------------- | --------- | ----------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `_intersectionObserver` | private   | `IntersectionObserver \| undefined` |                                                                |                                                                                                    |                |
| `_isVisible`            | private   | `boolean`                           | `false`                                                        |                                                                                                    |                |
| `_listElement`          | private   | `HTMLUListElement`                  |                                                                |                                                                                                    |                |
| `breakpoint`            | protected | `BreakpointLabel`                   | `readCSSProperty( Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL )` | The BreakpointLabel as determined by \*SCREEN\* width against&#xA;  Breakpoints.BREAKPOINT\_LABELS | UIAwareElement |
| `darkMode`              | protected |                                     |                                                                |                                                                                                    | UIAwareElement |
| `onAppConfigChange`     | private   | `(event: Event) => void`            |                                                                |                                                                                                    | UIAwareElement |
| `onBreakpointChange`    | private   | `() => void`                        |                                                                |                                                                                                    | UIAwareElement |
| `touchScreen`           | protected | `boolean`                           |                                                                | Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from \`:root\`&#xA;  and tests against \`"true"\`,  | UIAwareElement |

### Methods

| Name                        | Privacy | Description | Parameters                  | Return                                                                              | Inherited From |
| --------------------------- | ------- | ----------- | --------------------------- | ----------------------------------------------------------------------------------- | -------------- |
| `_getSortFunction`          | private |             | `sorting: WordCloudSorting` | `((a: RenderableWordCloudWord, b: RenderableWordCloudWord) => number) \| undefined` |                |
| `_initIntersectionObserver` | private |             |                             |                                                                                     |                |
| `_processWords`             | private |             |                             | `RenderableWordCloudWord[]`                                                         |                |

</details>

<hr/>

## Exports

| Kind                        | Name                      | Declaration             | Module                                   | Package |
| --------------------------- | ------------------------- | ----------------------- | ---------------------------------------- | ------- |
| `js`                        | `RenderableWordCloudWord` | RenderableWordCloudWord | @/components/word/cloud/word-cloud.types |         |
| `custom-element-definition` | `word-cloud`              | WordCloud               | src/components/word/cloud/word-cloud.ts  |         |
| `js`                        | `WordCloud`               | WordCloud               | src/components/word/cloud/word-cloud.ts  |         |
| `js`                        | `WordCloudAppearance`     | WordCloudAppearance     | @/components/word/cloud/word-cloud.types |         |
| `js`                        | `WordCloudGrouping`       | WordCloudGrouping       | @/components/word/cloud/word-cloud.types |         |
| `js`                        | `WordCloudSorting`        | WordCloudSorting        | @/components/word/cloud/word-cloud.types |         |
| `js`                        | `WordCloudWord`           | WordCloudWord           | @/components/word/cloud/word-cloud.types |         |

# `src/components/word/cloud/word-cloud.types.ts`:

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

| Kind | Name                   | Declaration          | Module                                        | Package |
| ---- | ---------------------- | -------------------- | --------------------------------------------- | ------- |
| `js` | `makeWordCloudWord`    | makeWordCloudWord    | src/components/word/cloud/word-cloud.types.ts |         |
| `js` | `WordCloudAppearances` | WordCloudAppearances | src/components/word/cloud/word-cloud.types.ts |         |
| `js` | `WordCloudGroupings`   | WordCloudGroupings   | src/components/word/cloud/word-cloud.types.ts |         |
| `js` | `WordCloudSortings`    | WordCloudSortings    | src/components/word/cloud/word-cloud.types.ts |         |

# `src/components/word/tag/word-tag.styles.ts`:

## Variables

| Name            | Description | Type        |
| --------------- | ----------- | ----------- |
| `WordTagStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name            | Declaration   | Module                                     | Package |
| ---- | --------------- | ------------- | ------------------------------------------ | ------- |
| `js` | `WordTagStyles` | WordTagStyles | src/components/word/tag/word-tag.styles.ts |         |

# `dist/out/components/word/tag/word-tag.js`:

## class: `WordTag`, `word-tag`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

### Fields

| Name        | Privacy | Type               | Default       | Description                                                                                                                                                                                                                   | Inherited From |
| ----------- | ------- | ------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `heaviness` |         | `WordTagHeaviness` | `"normal"`    | The weight of the tag (text & border), can be \`"normal"\` (\`--md-ref-typeface-weight-regular\` & \`--sizes-thickness-hairline\`) or \`"heavy"\` (\`--md-ref-typeface-weight-bold\` & \`2.5 \* --sizes-thickness-hairline\`) |                |
| `hrefUrl`   |         | `string`           | `""`          | A URL which, when provided, wraps this {@link WordTag} in a {@link HTMLAnchorElement}                                                                                                                                         |                |
| `variant`   |         | `WordTagVariant`   | `"text-only"` | The version of the layout to render                                                                                                                                                                                           |                |
| `word`      |         | `string`           | `""`          | The tagged word                                                                                                                                                                                                               |                |

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
| `layoutForVariant` | private |             | `variant: WordTagVariant` | `TemplateResult` |                |

</details>

<hr/>

## Exports

| Kind                        | Name       | Declaration | Module                              | Package |
| --------------------------- | ---------- | ----------- | ----------------------------------- | ------- |
| `custom-element-definition` | `word-tag` | WordTag     | src/components/word/tag/word-tag.ts |         |
| `js`                        | `WordTag`  | WordTag     | src/components/word/tag/word-tag.ts |         |

# `src/components/word/tag/word-tag.types.ts`:

## Variables

| Name                               | Description                                                        | Type                                                              |
| ---------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `WordTagVariantAttributeConverter` | Implements ComplexAttributeConverter for WordTagVariant properties | `ComplexAttributeConverter<
  WordTagVariant,
  WordTagVariant >` |

<hr/>

## Exports

| Kind | Name                               | Declaration                      | Module                                    | Package |
| ---- | ---------------------------------- | -------------------------------- | ----------------------------------------- | ------- |
| `js` | `WordTagVariantAttributeConverter` | WordTagVariantAttributeConverter | src/components/word/tag/word-tag.types.ts |         |

# `src/components/work/experience/work-experience.styles.ts`:

## Variables

| Name                   | Description | Type        |
| ---------------------- | ----------- | ----------- |
| `WorkExperienceStyles` |             | `CSSResult` |

<hr/>

## Exports

| Kind | Name                   | Declaration          | Module                                                   | Package |
| ---- | ---------------------- | -------------------- | -------------------------------------------------------- | ------- |
| `js` | `WorkExperienceStyles` | WorkExperienceStyles | src/components/work/experience/work-experience.styles.ts |         |

# `dist/out/components/work/experience/work-experience.js`:

## class: `WorkExperience`, `work-experience`

### Superclass

| Name             | Module | Package                                    |
| ---------------- | ------ | ------------------------------------------ |
| `UIAwareElement` |        | @/mixins/ui-aware-element/ui-aware-element |

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

| Kind                        | Name              | Declaration    | Module                                            | Package |
| --------------------------- | ----------------- | -------------- | ------------------------------------------------- | ------- |
| `custom-element-definition` | `work-experience` | WorkExperience | src/components/work/experience/work-experience.ts |         |
| `js`                        | `WorkExperience`  | WorkExperience | src/components/work/experience/work-experience.ts |         |

# `src/mixins/size-observer-element/size-observer-element.ts`:

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

| Kind | Name                  | Declaration         | Module                                                    | Package |
| ---- | --------------------- | ------------------- | --------------------------------------------------------- | ------- |
| `js` | `SizeObserverElement` | SizeObserverElement | src/mixins/size-observer-element/size-observer-element.ts |         |

# `dist/out/mixins/ui-aware-element/ui-aware-element.js`:

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

| Kind | Name             | Declaration    | Module                                          | Package |
| ---- | ---------------- | -------------- | ----------------------------------------------- | ------- |
| `js` | `UIAwareElement` | UIAwareElement | src/mixins/ui-aware-element/ui-aware-element.ts |         |
