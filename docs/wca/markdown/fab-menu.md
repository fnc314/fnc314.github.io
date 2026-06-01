# fab-menu

A floating action button that toggles a menu of actions.

## Properties

| Property                                        | Attribute     | Type                                             | Default   | Description                                      |
|-------------------------------------------------|---------------|--------------------------------------------------|-----------|--------------------------------------------------|
| `ariaLabel`                                     | `aria-label`  | `string`                                         | ""        | The `aria-label` of the FAB.                     |
| `direction`                                     | `direction`   | `"start" \| "end"`                               | "end"     | The direction in which the menu items should expand. |
| `icon`                                          | `icon`        |                                                  | "add"     | [object Object],[object Object],[object Object],[object Object],[object Object] |
| `label`                                         | `label`       | `string`                                         | ""        | [object Object],[object Object],[object Object]  |
| `object Object],[object Object],[object Object` |               |                                                  |           |                                                  |
| `open`                                          | `open`        | `boolean`                                        | false     | Whether the menu is currently open.              |
| `openedIcon`                                    | `opened-icon` | `MaterialSymbol`                                 | "close"   | The icon to display when the menu is open.<br />Defaults to 'close'. |
| `size`                                          | `size`        | `"small" \| "medium" \| "large"`                 | "medium"  | The size of the FAB.<br />Can be 'small', 'medium', or 'large'.<br />Defaults to 'medium'. |
| `variant`                                       | `variant`     | `"surface" \| "primary" \| "secondary" \| "tertiary"` | "primary" | The variant of the FAB.<br />Can be 'surface', 'primary', 'secondary', or 'tertiary'.<br />Defaults to 'primary'. |

## Slots

| Name                                            |
|-------------------------------------------------|
| `object Object],[object Object],[object Object` |

## CSS Custom Properties

| Property                                        | Default | Description                                      |
|-------------------------------------------------|---------|--------------------------------------------------|
| `--fab-menu-transition-duration`                | "200ms" | The duration of the menu's opening and closing animations |
| `object Object],[object Object],[object Object` |         |                                                  |
