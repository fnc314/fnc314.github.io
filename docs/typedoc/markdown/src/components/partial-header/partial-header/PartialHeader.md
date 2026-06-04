<html><head></head><body>[**@fnc314/com.fnc314.website v1.0.8**](../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../README.md) / [src/components/partial-header/partial-header](../partial-header.md) / PartialHeader

# Class: PartialHeader

Defined in: [src/components/partial-header/partial-header.ts:11](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/partial-header/partial-header.ts#L11)

A header component used for section titles with support for primary, secondary, and tertiary Material color variants.

## Element

partial-header

## Hierarchy

[View Summary](../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

## Other

### styles

&gt; `static` **styles**: `CSSResult`[]

Defined in: [src/components/partial-header/partial-header.ts:13](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/partial-header/partial-header.ts#L13)

[lit!css](https://lit.dev/docs/api/styles/#css)

#### Overrides

`LitElement.styles`

---

### headingText

&gt; **headingText**: `string` = `""`

Defined in: [src/components/partial-header/partial-header.ts:80](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/partial-header/partial-header.ts#L80)

The text to display within the header.

#### Attr

heading-text

---

### headerType

&gt; **headerType**: `"primary"` \| `"secondary"` \| `"tertiary"` \| `"inverse"` = `"primary"`

Defined in: [src/components/partial-header/partial-header.ts:88](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/partial-header/partial-header.ts#L88)

The color variant theme for the header background and text.
Can be 'primary', 'secondary', or 'tertiary'.

#### Attr

header-type

## rendering

### render()

&gt; **render**(): [`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

Defined in: [src/components/partial-header/partial-header.ts:90](https://github.com/fnc314/fnc314.github.io/blob/feature/vite/src/components/partial-header/partial-header.ts#L90)

Invoked on each update to perform rendering tasks. This method may return
any value renderable by lit-html's `ChildPart` - typically a
`TemplateResult`. Setting properties inside this method will _not_ trigger
the element to update.

#### Returns

[`TemplateResult`](https://lit.dev/docs/api/templates/#TemplateResult)\&lt;`1`\&gt;

#### Overrides

`LitElement.render`

</body></html>
