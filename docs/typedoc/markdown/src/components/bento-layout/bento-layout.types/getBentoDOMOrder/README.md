<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.4**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/bento-layout/bento-layout.types](../README.md) / getBentoDOMOrder

# Function: getBentoDOMOrder()

&gt; **getBentoDOMOrder**(`breakpoint`: `BreakpointLabel`): [`BentoBoxType`](../BentoBoxType/README.md)[]

Defined in: [src/components/bento-layout/bento-layout.types.ts:148](https://github.com/fnc314/fnc314.github.io/blob/main/src/components/bento-layout/bento-layout.types.ts#L148)

Determines the logical DOM order for bento box types based on grid placement.
Reading order follows Top-to-Bottom, then Start-to-End (Leading-to-Trailing).

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`breakpoint`

</td>
<td>

`BreakpointLabel`

</td>
<td>

The current active breakpoint.

</td>
</tr>
</tbody>
</table>

## Returns

[`BentoBoxType`](../BentoBoxType/README.md)[]

An array of [BentoBoxType](../BentoBoxType/README.md) in the appropriate order for the DOM.
</body></html>
