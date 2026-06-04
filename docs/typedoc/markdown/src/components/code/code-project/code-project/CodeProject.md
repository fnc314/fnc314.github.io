<html><head></head><body>[**@fnc314/com.fnc314.website v1.0.8**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/code/code-project/code-project](../code-project.md) / CodeProject

# Class: CodeProject

Defined in: [src/components/code/code-project/code-project.ts:22](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/code/code-project/code-project.ts#L22)

## Cssprop

[--code-project-animation=200ms] - The duration of the subtle hover/focus effect

## Cssprop

[--code-project-rotation=800ms] - The duration of the card rotation effect

## Export

CodeProject

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/code/code-project/code-project.ts:30](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/code/code-project/code-project.ts#L30)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### #generateCardFront()

&gt; `private` **#generateCardFront**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

Defined in: [src/components/code/code-project/code-project.ts:168](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/code/code-project/code-project.ts#L168)

Builds the front of the [@material/web!MdOutlinedCard](https://github.com/material-components/material-web/blob/main/labs/card/outlined-card.ts) content

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

---

### #generateCardBack()

&gt; `private` **#generateCardBack**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

Defined in: [src/components/code/code-project/code-project.ts:207](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/code/code-project/code-project.ts#L207)

Builds the back of the [@material/web!MdOutlinedCard](https://github.com/material-components/material-web/blob/main/labs/card/outlined-card.ts) content

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/code/code-project/code-project.ts:237](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/code/code-project/code-project.ts#L237)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
