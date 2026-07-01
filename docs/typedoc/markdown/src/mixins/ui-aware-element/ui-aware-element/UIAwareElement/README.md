<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.4**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/mixins/ui-aware-element/ui-aware-element](../README.md) / UIAwareElement

# Abstract Class: UIAwareElement

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:22](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L22)

An extension of [LitElement](https://lit.dev/docs/api/LitElement/) which encapsulates interactivity
with configService to expose `darkMode` as an internal @state
by leveraging `connectedCallback` and `disconnectedCallbacak` for implementers.
Also exposes `breakpoint` to expose (from `window` resize events) which
BreakpointLabel is currently applicable _from the screen level_.
The current BreakpointLabel is determined by Breakpoints.CSS\_VARIABLE\_BREAKPOINT\_LABEL

## Export

UIModeAwareElement

## Hierarchy

[View Summary](../../../../../hierarchy.md)

### Extends

- [`LitElement`](https://lit.dev/docs/api/LitElement/)

### Extended by

- [`BentoLayout`](../../../../components/bento-layout/bento-layout/BentoLayout/README.md)
- [`UiModeToggle`](../../../../components/ui-mode-toggle/ui-mode-toggle/UiModeToggle/README.md)
- [`BlogEntry`](../../../../components/blog/entry/blog-entry/BlogEntry/README.md)
- [`BentoCard`](../../../../components/card/bento/bento-card/BentoCard/README.md)
- [`BlogCard`](../../../../components/card/blog/blog-card/BlogCard/README.md)
- [`CodeCard`](../../../../components/card/code/code-card/CodeCard/README.md)
- [`EducationCard`](../../../../components/card/education/education-card/EducationCard/README.md)
- [`ExperienceCard`](../../../../components/card/experience/experience-card/ExperienceCard/README.md)
- [`ProfileCard`](../../../../components/card/profile/profile-card/ProfileCard/README.md)
- [`SettingsCard`](../../../../components/card/settings/settings-card/SettingsCard/README.md)
- [`SkillsCard`](../../../../components/card/skills/skills-card/SkillsCard/README.md)
- [`CodeRepo`](../../../../components/code/repo/code-repo/CodeRepo/README.md)
- [`DirectConnection`](../../../../components/connection/direct/direct-connection/DirectConnection/README.md)
- [`WordCloud`](../../../../components/word/cloud/word-cloud/WordCloud/README.md)
- [`WordTag`](../../../../components/word/tag/word-tag/WordTag/README.md)
- [`WorkExperience`](../../../../components/work/experience/work-experience/WorkExperience/README.md)

## Other

### breakpoint

&gt; `protected` **breakpoint**: `BreakpointLabel`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:38](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L38)

The BreakpointLabel as determined by _SCREEN_ width against
Breakpoints.BREAKPOINT\_LABELS

---

### touchScreen

&gt; `protected` **touchScreen**: `boolean`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:53](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L53)

Reads TouchScreen.CSS\_VARIABLE\_TOUCH\_SCREEN from `:root`
and tests against `"true"`,

## lifecycle

### connectedCallback()

&gt; **connectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:59](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L59)

Invoked when the component is added to the document's DOM.

In `connectedCallback()` you should setup tasks that should only occur when
the element is connected to the document. The most common of these is
adding event listeners to nodes external to the element, like a keydown
event handler added to the window.

```ts
connectedCallback() {
  super.connectedCallback();
  addEventListener('keydown', this._handleKeydown);
}
```

Typically, anything done in `connectedCallback()` should be undone when the
element is disconnected, in `disconnectedCallback()`.

#### Returns

`void`

#### Overrides

`LitElement.connectedCallback`

---

### disconnectedCallback()

&gt; **disconnectedCallback**(): `void`

Defined in: [src/mixins/ui-aware-element/ui-aware-element.ts:65](https://github.com/fnc314/fnc314.github.io/blob/main/src/mixins/ui-aware-element/ui-aware-element.ts#L65)

Invoked when the component is removed from the document's DOM.

This callback is the main signal to the element that it may no longer be
used. `disconnectedCallback()` should ensure that nothing is holding a
reference to the element (such as event listeners added to nodes external
to the element), so that it is free to be garbage collected.

```ts
disconnectedCallback() {
  super.disconnectedCallback();
  window.removeEventListener('keydown', this._handleKeydown);
}
```

An element may be re-connected after being disconnected.

#### Returns

`void`

#### Overrides

`LitElement.disconnectedCallback`
</body></html>
