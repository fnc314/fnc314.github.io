<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / docs/wca/markdown/ui-mode-toggle

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

</any></body></html>
