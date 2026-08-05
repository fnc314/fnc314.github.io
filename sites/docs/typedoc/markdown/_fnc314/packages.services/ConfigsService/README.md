<html><head></head><body>[**@fnc314/sites.docs v3.1.0**](../../../README.md)

---

[@fnc314/sites.docs](../../../README.md) / [@fnc314/packages.services](../README.md) / ConfigsService

# Interface: ConfigsService

Defined in: [packages/services/src/configs/index.ts:9](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/configs/index.ts#L9)

## Hierarchy

[View Summary](../../../hierarchy.md)

### Extends

- [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

## Methods

### addEventListener()

&gt; **addEventListener**(`type`: `string`, `callback`: `EventListenerOrEventListenerObject` \| `null`, `options?`: `boolean` \| `AddEventListenerOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:14380

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`type`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

`EventListenerOrEventListenerObject` \| `null`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`boolean` \| `AddEventListenerOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`EventTarget.addEventListener`

---

### dispatchEvent()

&gt; **dispatchEvent**(`event`: [`Event`](https://developer.mozilla.org/docs/Web/API/Event)): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:14386

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`event`

</td>
<td>

[`Event`](https://developer.mozilla.org/docs/Web/API/Event)

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

#### Inherited from

`EventTarget.dispatchEvent`

---

### loadConfigs()

&gt; **loadConfigs**(): [`AppConfigs`](../../packages.types/AppConfigs/README.md)

Defined in: [packages/services/src/configs/index.ts:12](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/configs/index.ts#L12)

#### Returns

[`AppConfigs`](../../packages.types/AppConfigs/README.md)

---

### removeEventListener()

&gt; **removeEventListener**(`type`: `string`, `callback`: `EventListenerOrEventListenerObject` \| `null`, `options?`: `boolean` \| `EventListenerOptions`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.dom.d.ts:14392

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target. The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process; see Matching event listeners for removal.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`type`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

`EventListenerOrEventListenerObject` \| `null`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`boolean` \| `EventListenerOptions`

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Inherited from

`EventTarget.removeEventListener`

---

### resetConfigs()

&gt; **resetConfigs**(): `void`

Defined in: [packages/services/src/configs/index.ts:14](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/configs/index.ts#L14)

#### Returns

`void`

---

### saveConfigs()

&gt; **saveConfigs**(`configs`: [`AppConfigs`](../../packages.types/AppConfigs/README.md)): `void`

Defined in: [packages/services/src/configs/index.ts:10](https://github.com/fnc314/fnc314.github.io/blob/b4bec566ddb5c54e1c2da88affc95a038489d32a/packages/services/src/configs/index.ts#L10)

#### Parameters

<table>
<thead>
<tr>
<th align="left">Parameter</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`configs`

</td>
<td>

[`AppConfigs`](../../packages.types/AppConfigs/README.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`
</body></html>
