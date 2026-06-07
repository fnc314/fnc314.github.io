<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../../README.md) / [src/components/code/code-project/code-project](../README.md) / CodeProject

# Class: CodeProject

Defined in: [src/components/code/code-project/code-project.ts:23](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/code-project/code-project.ts#L23)

## Cssprop

[--code-project-animation=200ms] - The duration of the subtle hover/focus effect

## Cssprop

[--code-project-rotation=800ms] - The duration of the card rotation effect

## Export

CodeProject

## Hierarchy

[View Summary](../../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/code/code-project/code-project.ts:31](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/code-project/code-project.ts#L31)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### #generateCardFront()

&gt; `private` **#generateCardFront**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

Defined in: [src/components/code/code-project/code-project.ts:180](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/code-project/code-project.ts#L180)

Builds the front of the [@material/web!MdOutlinedCard](https://github.com/material-components/material-web/blob/main/labs/card/outlined-card.ts) content

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

---

### #generateCardBack()

&gt; `private` **#generateCardBack**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

Defined in: [src/components/code/code-project/code-project.ts:219](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/code-project/code-project.ts#L219)

Builds the back of the [@material/web!MdOutlinedCard](https://github.com/material-components/material-web/blob/main/labs/card/outlined-card.ts) content

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/code/code-project/code-project.ts:249](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/code/code-project/code-project.ts#L249)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
