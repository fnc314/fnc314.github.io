<html><head></head><body>[@fnc314/com.fnc314.website](../wiki/Home) / ../../docs/wca/markdown/nav-component

# nav-component

A navigation component that renders primary tabs synchronized with the application's URL hash routes.

## Methods

| Method                      | Type                                  | Description                                                                                                                                     |
| --------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `#handleHashChange`         | `(): void`                            | Syncs internal state with the URL hash.                                                                                                         |
| `#onTabChange`              | `(event: Event): void`                | Handles user clicks on tabs. Updates URL and UI.<br><br>**event**: [object Object],[object Object],[object Object]                              |
| `#renderTabs`               | `(): TemplateResult`                  | [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object] |
| `#tabIndexAndRouteFromHash` | `():  index  : number, route: Route ` | [object Object],[object Object],[object Object],[object Object],[object Object],[object Object]                                                 |
| `#updateCarousel`           | `(index: number): void`               | Updates external DOM via style manipulations and blind queries<br><br>**index**: [object Object],[object Object]                                |
| `#updateTabState`           | `(index: number): void`               | Updates the visual state of tabs and panels based on the index.                                                                                 |

## CSS Custom Properties

| Property                                 | Default | Description                                                   |
| ---------------------------------------- | ------- | ------------------------------------------------------------- |
| `--nav-component-icon-animation`         | "225ms" | The duration of the icon's fill and color transition.         |
| `--nav-component-icon-animation-reduced` | "1ms"   | The duration of the icon's transition when motion is reduced. |

</body></html>
