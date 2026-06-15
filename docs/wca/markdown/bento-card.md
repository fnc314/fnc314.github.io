# bento-card

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| `bentoCardTitle` | `bentoCardTitle` | `string`  | ""      | The clickable text for the `<h2>` in the `<summary>` element.  When provided,<br />  the exposed `slot[name="header"]` is suppressed. |
| `enableFocus`    | `enableFocus`    | `boolean` | false   | Whether to enable enhanced border and shadow styling on focus-within.<br />Defaults to `false`. |
| `enableHover`    | `enableHover`    | `boolean` | false   | Whether to enable the lift-on-hover effect.<br />Defaults to `false` to minimize visual motion in dense layout grids. |
| `expanded`       | `expanded`       | `boolean` | false   | Reflects and controls the open state of the underlying `<details>` element.<br />When `true`, the card is expanded and content is visible. |
| `scrollable`     | `scrollable`     | `boolean` | false   | Whether to enable scrolling for content          |

## Slots

| Name     | Description                                      |
|----------|--------------------------------------------------|
|          | Default slot for card content. Slotted `h2` elements receive standardized header styling. |
| `header` | Content to be displayed in the card's header/summary area. |
