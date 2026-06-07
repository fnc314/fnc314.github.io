<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / docs/wca/markdown/README

# app-shell

## Slots

| Name                                            | Description                                   |
| ----------------------------------------------- | --------------------------------------------- |
| `app-content`                                   | The place for the dynamic application content |
| `object Object],[object Object],[object Object` |                                               |

# bento-layout

# blog-post

## Properties

| Property                                        | Attribute  | Type           | Default |
| ----------------------------------------------- | ---------- | -------------- | ------- |
| `blogPost`                                      | `blogPost` | `BlogPostJson` | {}      |
| `object Object],[object Object],[object Object` |            |                |         |

## CSS Custom Properties

| Property                                                        | Description                                                                                           |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `--blog-post-animation`                                         | The duration of the animation for `:focus`, `:hover`,<br>`:focus-within`, and `:focus-visible` states |
| `--blog-post-primary-text-color`                                | The color of the primary text                                                                         |
| `object Object],[object Object],[object Object],[object Object` |                                                                                                       |

# fab-menu-item

An action item within a `fab-menu`.

## Properties

| Property | Attribute | Type     | Default | Description                                    |
| -------- | --------- | -------- | ------- | ---------------------------------------------- |
| `icon`   | `icon`    |          | ""      | The icon to display inside the FAB item.       |
| `label`  | `label`   | `string` | ""      | The text label displayed next to the FAB item. |

## Methods

| Method  | Type                                          | Description                                                                             |
| ------- | --------------------------------------------- | --------------------------------------------------------------------------------------- |
| `focus` | `(options?: FocusOptions \| undefined): void` | Focuses the underlying FAB element.<br><br>**options**: Standard browser focus options. |

## CSS Custom Properties

| Property                        | Default | Description                              |
| ------------------------------- | ------- | ---------------------------------------- |
| `--fab-menu-item-padding-end`   | 0       | The logical `padding-inline-end` value   |
| `--fab-menu-item-padding-start` | 0       | The logical `padding-inline-start` value |
| `object Object],[object Object` |         |                                          |

# fab-menu

A floating action button that toggles a menu of actions.

## Properties

| Property                                        | Attribute     | Type                                                  | Default   | Description                                                                                                   |
| ----------------------------------------------- | ------------- | ----------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------- |
| `ariaLabel`                                     | `aria-label`  | `string`                                              | ""        | The `aria-label` of the FAB.                                                                                  |
| `direction`                                     | `direction`   | `"start" \| "end"`                                    | "end"     | The direction in which the menu items should expand.                                                          |
| `icon`                                          | `icon`        |                                                       | "add"     | [object Object],[object Object],[object Object],[object Object],[object Object]                               |
| `label`                                         | `label`       | `string`                                              | ""        | [object Object],[object Object],[object Object]                                                               |
| `object Object],[object Object],[object Object` |               |                                                       |           |                                                                                                               |
| `open`                                          | `open`        | `boolean`                                             | false     | Whether the menu is currently open.                                                                           |
| `openedIcon`                                    | `opened-icon` | `MaterialSymbol`                                      | "close"   | The icon to display when the menu is open.<br>Defaults to 'close'.                                            |
| `size`                                          | `size`        | `"small" \| "medium" \| "large"`                      | "medium"  | The size of the FAB.<br>Can be 'small', 'medium', or 'large'.<br>Defaults to 'medium'.                        |
| `variant`                                       | `variant`     | `"surface" \| "primary" \| "secondary" \| "tertiary"` | "primary" | The variant of the FAB.<br>Can be 'surface', 'primary', 'secondary', or 'tertiary'.<br>Defaults to 'primary'. |

## Slots

| Name                                            |
| ----------------------------------------------- |
| `object Object],[object Object],[object Object` |

## CSS Custom Properties

| Property                                        | Default | Description                                               |
| ----------------------------------------------- | ------- | --------------------------------------------------------- |
| `--fab-menu-transition-duration`                | "200ms" | The duration of the menu's opening and closing animations |
| `object Object],[object Object],[object Object` |         |                                                           |

# info-section

A reusable section component for profile-related content.
Uses container queries to provide a responsive grid layout that adapts to available space.

## API

## Properties

| Property       | Attribute       | Type     | Default | Description                                                                            |
| -------------- | --------------- | -------- | ------- | -------------------------------------------------------------------------------------- |
| `sectionTitle` | `section-title` | `string` | ""      | The title displayed in the section's header.<br>Maps to the `section-title` attribute. |

# partial-header

A header component used for section titles with support for primary, secondary, and tertiary Material color variants.

## Properties

| Property      | Attribute      | Type                                                  | Default   | Description                                                                                                  |
| ------------- | -------------- | ----------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| `headerType`  | `header-type`  | `"primary" \| "secondary" \| "tertiary" \| "inverse"` | "primary" | The color variant theme for the header background and text.<br>Can be 'primary', 'secondary', or 'tertiary'. |
| `headingText` | `heading-text` | `string`                                              | ""        | The text to display within the header.                                                                       |

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

| Event                  | Type               | Description                                                                                                                                      |
| ---------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `color_scheme.change`  | `CustomEvent<any>` | Dispatched when the UI mode (light/dark/system) or color scheme contrast is changed,<br>propagating the new `AppConfigs["colorScheme"]` details. |
| `colorschemechange`    |                    | Event from `dark-mode-toggle` when the scheme changes.                                                                                           |
| `permanentcolorscheme` |                    | Event from `dark-mode-toggle` when the persistence changes.                                                                                      |

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

# blog-partial

# code-partial

# info-partial

# work-partial

</any></body></html>
